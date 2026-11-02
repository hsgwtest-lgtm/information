// The open trip: photos, analysis, names and route geometry, kept up to date as lookups arrive.
import * as db from './db.js';
import * as net from './net.js';
import { analyze, placesNeedingStations, travelHours } from './analyze.js';
import { legsFor, draftLegs, summarize } from './paths.js';
import { simplify, bounds, centroid, distKm } from './geo.js';
import { shortCity } from './fmt.js';

export const M = {
  trip: null, photos: [], r: null,
  spots: {}, areas: {}, legs: new Map(),
  token: 0, busy: { routes: null, names: false, spots: false },
};
const subs = new Set();
export const on = fn => { subs.add(fn); return () => subs.delete(fn); };
const emit = (type, data) => { for (const fn of subs) fn(type, data); };

export const DEFAULTS = { perPlace: 3, radiusM: 200, labels: true };

export function blankTrip() {
  return {
    id: db.uid(), title: '新しい旅', titleAuto: true, createdAt: Date.now(), updatedAt: Date.now(),
    settings: { ...DEFAULTS }, exclusions: {}, stars: {}, modes: {}, names: {},
    stats: null, cover: null, music: null,
  };
}

/* ---------- Loading and analysis ---------- */
const stationMap = () => {
  const m = {};
  for (const [k, v] of Object.entries(M.spots)) m[k] = v ? v.station : null;
  return m;
};
const legKey = mv => `${mv.key}|${mv.mode}|${mv.stationA?.name || ''}|${mv.stationB?.name || ''}`;
export const legsReady = mv => M.legs.has(legKey(mv));
export function legsOf(mv) {
  return M.legs.get(legKey(mv)) || draftLegs(mv, M.r.places[mv.from], M.r.places[mv.to]);
}

export async function load(id) {
  const token = ++M.token;
  const trip = await db.trip(id);
  if (!trip) return false;
  trip.settings = { ...DEFAULTS, ...(trip.settings || {}) };
  const photos = await db.photos(id);
  if (token !== M.token) return false;
  Object.assign(M, { trip, photos, spots: {}, areas: {}, legs: new Map(), busy: { routes: null, names: false, spots: false } });
  M.r = analyze(photos, trip, stationMap());
  const [spots, areas] = await Promise.all([net.cachedSpots(M.r.places), cachedAreas(M.r.places)]);
  if (token !== M.token) return false;
  Object.assign(M.spots, spots);
  Object.assign(M.areas, areas);
  recompute();
  return true;
}

async function cachedAreas(places) {
  const out = {};
  for (const p of places) {
    const a = await net.cachedArea(p.lat, p.lon);
    if (a) out[p.key] = a;
  }
  return out;
}

export function recompute() {
  M.r = analyze(M.photos, M.trip, stationMap());
  refreshStats();
  emit('analysis');
}

/** Fetch names, stations and routes. Safe to call again; already known parts are skipped. */
export async function enrich() {
  const token = M.token;
  const r = M.r;
  if (!r.places.length) return;

  // District names (Nominatim, 1/s) run alongside the slower Overpass lookup.
  const names = (async () => {
    M.busy.names = true;
    for (const p of r.places) {
      if (M.areas[p.key]) continue;
      const a = await net.area(p.lat, p.lon);
      if (token !== M.token) return;
      if (a) { M.areas[p.key] = a; emit('names'); }
    }
    M.busy.names = false;
    autoTitle();
  })();

  const missing = r.places.filter(p => !(p.key in M.spots));
  const spotsJob = missing.length ? (M.busy.spots = true, net.spots(missing)) : null;

  // Moves that do not depend on stations can be routed right away.
  const knowsStations = mv => (M.r.places[mv.from].key in M.spots) && (M.r.places[mv.to].key in M.spots);
  await routeAll(token, mv => mv.forced || mv.mode === 'walk' || mv.mode === 'plane' || knowsStations(mv));
  if (token !== M.token) return;

  if (spotsJob) {
    const got = await spotsJob;
    M.busy.spots = false;
    if (token !== M.token) return;
    Object.assign(M.spots, got);
    // Spots that could not be looked up count as "no station" so modes settle.
    for (const p of missing) if (!(p.key in M.spots)) M.spots[p.key] = null;
    recompute();
    emit('names');
  }
  await routeAll(token, () => true);
  await names;
  if (token === M.token) { refreshStats(); await save(); emit('ready'); }
}

async function routeAll(token, filter) {
  const todo = M.r.moves.filter(mv => filter(mv) && !legsReady(mv));
  for (let i = 0; i < todo.length; i++) {
    M.busy.routes = { done: i, total: todo.length };
    emit('progress');
    const mv = todo[i];
    const legs = await legsFor(mv, M.r.places[mv.from], M.r.places[mv.to]);
    if (token !== M.token) return;
    M.legs.set(legKey(mv), legs);
    emit('legs', mv);
  }
  M.busy.routes = null;
  emit('progress');
}

/** Route one move now (after the user changed its mode). */
export async function routeMove(mv) {
  if (legsReady(mv)) return;
  const token = M.token;
  const legs = await legsFor(mv, M.r.places[mv.from], M.r.places[mv.to]);
  if (token !== M.token) return;
  M.legs.set(legKey(mv), legs);
  emit('legs', mv);
}

/* ---------- Names ---------- */
export function placeName(p) {
  return M.trip.names?.[p.key] || M.spots[p.key]?.landmark || areaName(p) || `場所 ${p.idx + 1}`;
}
function areaName(p) {
  const a = M.areas[p.key];
  if (!a) return null;
  return a.area || (a.city ? shortCity(a.city) : null);
}
export function placeSub(p) {
  const a = M.areas[p.key];
  if (!a) return '';
  const city = a.city ? shortCity(a.city) : '';
  const name = placeName(p);
  return [a.area && a.area !== name ? a.area : '', city && city !== name ? city : ''].filter(Boolean).join('・');
}

function autoTitle() {
  if (!M.trip.titleAuto) return;
  const count = new Map();
  for (const p of M.r.places) {
    const c = M.areas[p.key]?.city;
    if (c) count.set(shortCity(c), (count.get(shortCity(c)) || 0) + p.photos.length);
  }
  const top = [...count.entries()].sort((a, b) => b[1] - a[1]).slice(0, 2).map(e => e[0]);
  if (!top.length) return;
  M.trip.title = top.join('・');
  emit('title');
}

/* ---------- Stats for the library ---------- */
export function moveSummary(mv) {
  const s = summarize(legsOf(mv));
  if (!legsReady(mv)) s.hours = travelHours(mv.mode, mv.km);
  return s;
}

function refreshStats() {
  const r = M.r, t = M.trip;
  if (!r.places.length) {
    t.stats = { start: null, end: null, days: 0, places: 0, photos: 0, km: 0, center: null, path: null };
    t.cover = null;
    return;
  }
  const first = r.places[0], last = r.places[r.places.length - 1];
  let total = 0;
  const path = [];
  for (const mv of r.moves) {
    for (const l of legsOf(mv)) {
      if (l.mode === 'plane') continue; // a flight would stretch the overview across the sea
      path.push(...l.coords);
    }
    total += moveSummary(mv).km;
  }
  const pts = path.length > 1 ? path : r.places.map(p => [p.lon, p.lat]);
  const c = centroid(r.places);
  t.stats = {
    start: first.start, end: last.end, off: first.off, days: r.days.length,
    places: r.places.length, photos: r.used, km: total,
    center: [c.lon, c.lat], bbox: bounds(r.places), path: simplify(pts, 0.15).slice(0, 600),
    spanKm: Math.max(...r.places.map(p => distKm(p, c))),
  };
  const big = [...r.places].sort((a, b) => b.photos.length - a.photos.length)[0];
  const pick = big.highlights.find(p => t.stars?.[p.id] && p.full) || big.highlights.find(p => p.full) || big.photos.find(p => p.full);
  t.cover = pick ? (pick.full || pick.thumb) : null;
}

let saveTimer = 0;
export function save() {
  clearTimeout(saveTimer);
  if (!M.trip) return Promise.resolve();
  return db.saveTrip(M.trip);
}
export function saveSoon() {
  clearTimeout(saveTimer);
  saveTimer = setTimeout(save, 500);
}

export function close() {
  M.token++;
  save();
  M.trip = null; M.photos = []; M.r = null; M.legs = new Map();
}
