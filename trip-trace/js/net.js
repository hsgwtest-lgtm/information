// Network lookups, all keyless and cached on this device.
//   route()  OSRM (FOSSGIS servers): walking / driving geometry; ferry steps come back as boat parts
//   spots()  Photon: nearest station and a name for the stop (shrine, park, museum…)
//   area()   Nominatim: district and city names, 1 request per second
import * as db from './db.js';
import { decimate, distKm, pathKm } from './geo.js';

const OSRM = {
  foot: 'https://routing.openstreetmap.de/routed-foot/route/v1/foot/',
  car: 'https://routing.openstreetmap.de/routed-car/route/v1/driving/',
};
const NOMINATIM = 'https://nominatim.openstreetmap.org/reverse';
const sleep = ms => new Promise(r => setTimeout(r, ms));
const r4 = v => v.toFixed(4), r5 = v => v.toFixed(5);

async function getJSON(url, init = {}, ms = 12000) {
  const ctl = new AbortController();
  const timer = setTimeout(() => ctl.abort(), ms);
  try {
    const res = await fetch(url, { ...init, signal: ctl.signal });
    let json = null;
    try { json = await res.json(); } catch { /* not JSON */ }
    return { ok: res.ok, json };
  } finally { clearTimeout(timer); }
}

function queue(gapMs) {
  let tail = Promise.resolve();
  return fn => {
    const p = tail.then(fn);
    tail = p.catch(() => {}).then(() => sleep(gapMs));
    return p;
  };
}
const routeQueue = queue(120);
const nominatimQueue = queue(1100);

/* ---------- Routes ---------- */
export async function route(profile, a, b) {
  const key = `r:${profile}:${r5(a.lat)},${r5(a.lon)};${r5(b.lat)},${r5(b.lon)}`;
  const hit = await db.cacheGet(key);
  if (hit) return hit;
  return routeQueue(async () => {
    let r;
    try { r = await getJSON(`${OSRM[profile]}${a.lon},${a.lat};${b.lon},${b.lat}?overview=false&steps=true&geometries=geojson`, {}, 15000); }
    catch { return null; }
    const j = r.json;
    if (j && (j.code === 'NoRoute' || j.code === 'NoSegment')) { const v = { none: true }; db.cacheSet(key, v); return v; }
    if (!r.ok || j?.code !== 'Ok' || !j.routes?.length) return null;
    const base = profile === 'foot' ? 'walk' : 'car';
    const parts = [];
    for (const s of j.routes[0].legs.flatMap(l => l.steps || [])) {
      const c = s.geometry?.coordinates || [];
      if (c.length < 2) continue;
      const mode = s.mode === 'ferry' ? 'boat' : base;
      const last = parts[parts.length - 1];
      if (last && last.mode === mode) last.coords.push(...c.slice(1)); else parts.push({ mode, coords: c.slice() });
    }
    for (const p of parts) if (p.mode === 'boat' && pathKm(p.coords) < 0.3) p.mode = base; // tiny river ferries are noise
    const merged = [];
    for (const p of parts) {
      const last = merged[merged.length - 1];
      if (last && last.mode === p.mode) last.coords.push(...p.coords.slice(1)); else merged.push(p);
    }
    if (!merged.length) return null;
    merged[0].coords.unshift([a.lon, a.lat]);
    merged[merged.length - 1].coords.push([b.lon, b.lat]);
    for (const p of merged) p.coords = decimate(p.coords, 360).map(([x, y]) => [+x.toFixed(6), +y.toFixed(6)]);
    const v = { parts: merged, km: j.routes[0].distance / 1000, hours: j.routes[0].duration / 3600 };
    db.cacheSet(key, v);
    return v;
  });
}

/* ---------- Stations and landmarks (Photon) ---------- */
const PHOTON = 'https://photon.komoot.io/reverse';
const photonQueue = queue(1050);

function score(key, value) {
  const t = { [key]: value };
  if (t.tourism) return { attraction: 10, theme_park: 10, zoo: 10, aquarium: 10, museum: 8, gallery: 7, viewpoint: 7, artwork: 5, hotel: 5, camp_site: 5 }[t.tourism] ?? 0;
  if (t.historic) return { castle: 10, monument: 6, ruins: 7, archaeological_site: 7, memorial: 3 }[t.historic] ?? 0;
  if (t.amenity) return { place_of_worship: 9, marketplace: 7, theatre: 7, arts_centre: 7, university: 5, townhall: 4 }[t.amenity] ?? 0;
  if (t.leisure) return { garden: 8, park: 7, stadium: 8, water_park: 8, beach_resort: 8, marina: 6 }[t.leisure] ?? 0;
  if (t.natural) return { beach: 8, peak: 8, volcano: 9, cape: 8, hot_spring: 8, geyser: 8, bay: 6 }[t.natural] ?? 0;
  if (t.place) return { island: 9, islet: 8, square: 6 }[t.place] ?? 0;
  if (t.aeroway) return { aerodrome: 10, terminal: 9 }[t.aeroway] ?? 0;
  if (t.railway) return t.railway === 'station' ? 7 : 0;
  return 0;
}
// Parts of a larger place: never a good name for the whole stop.
const GENERIC = /^(本殿|拝殿|本堂|山門|楼門|鐘楼|社務所|手水舎|神門|中門|[東西南北]門|舞殿|若宮|御朱印所|朱印所|授与所|トイレ|公衆トイレ|駐車場|入口|出口|展望台|休憩所|案内所)$/;
const NOISE = /(駐車場|トイレ|バス停|のりば|乗り場|入口|出口|案内板|説明板|由来)$/;

async function photon(lat, lon, extra) {
  return photonQueue(async () => {
    try {
      const r = await getJSON(`${PHOTON}?lat=${lat}&lon=${lon}&${extra}`, {}, 9000);
      return r.ok ? (r.json?.features || []) : null;
    } catch { return null; }
  });
}

/** The best name for a stop from nearby named features. */
export function pickLandmark(features, at) {
  const c = [];
  for (const f of features) {
    const p = f.properties || {};
    const name = (p.name || '').trim();
    if (!name || name.length < 2 || GENERIC.test(name)) continue;
    const [x, y] = f.geometry?.coordinates || [];
    const m = x == null ? 300 : distKm(at, { lat: y, lon: x }) * 1000;
    c.push({ name, base: score(p.osm_key, p.osm_value), m, big: !!p.extent });
  }
  // A name that most nearby features share ("大涌谷", "江ノ島") is usually the place itself.
  let shared = null, sharedN = 0;
  for (const a of c) {
    if (a.name.length > 10 || NOISE.test(a.name)) continue;
    const n = c.filter(b => b !== a && b.name.includes(a.name)).length;
    if (n > sharedN || (n === sharedN && shared && a.name.length > shared.length)) { shared = a.name; sharedN = n; }
  }
  let best = null, bestS = 5;
  for (const a of c) {
    const s = a.base - a.m / 60 + (a.big ? 1 : 0);
    if (a.base > 0 && s >= bestS) { best = a; bestS = s; }
  }
  if (sharedN >= 3 && (!best || bestS < 8 || best.name.includes(shared))) return shared;
  return best ? best.name : null;
}

export async function cachedSpots(list) {
  const out = {};
  for (const s of list) {
    const v = await db.cacheGet(`p:${r4(s.lat)},${r4(s.lon)}`);
    if (v) out[s.key] = v;
  }
  return out;
}

/**
 * {placeKey: {station, landmark}} for each place, looked up one request at a time.
 * needStation: set of place keys whose nearest station matters (ends of non-walking moves).
 * onEach(key, value) is called as results arrive. Places that could not be looked up are left out.
 */
export async function spots(list, needStation = new Set(), onEach) {
  const out = await cachedSpots(list);
  for (const s of list) {
    if (out[s.key]) continue;
    const near = await photon(s.lat, s.lon, 'radius=0.3&limit=20');
    if (!near) continue;
    let station = null;
    if (needStation.has(s.key)) {
      const st = await photon(s.lat, s.lon, 'radius=0.8&limit=5&osm_tag=railway:station&osm_tag=railway:halt');
      if (!st) continue;
      for (const f of st) {
        const [x, y] = f.geometry?.coordinates || [];
        if (x == null || !f.properties?.name) continue;
        const m = distKm(s, { lat: y, lon: x }) * 1000;
        if (m <= 800 && (!station || m < station.m)) station = { name: f.properties.name.replace(/駅$/, ''), lat: y, lon: x, m: Math.round(m) };
      }
    }
    let landmark = pickLandmark(near, s);
    if (!landmark && station && station.m <= 120) landmark = `${station.name}駅`;
    const v = { station, landmark, checkedStation: needStation.has(s.key) };
    out[s.key] = v;
    db.cacheSet(`p:${r4(s.lat)},${r4(s.lon)}`, v);
    onEach?.(s.key, v);
  }
  return out;
}

/* ---------- District / city (Nominatim) ---------- */
export const cachedArea = (lat, lon) => db.cacheGet(`a:${r4(lat)},${r4(lon)}`);

export async function area(lat, lon) {
  const key = `a:${r4(lat)},${r4(lon)}`;
  const hit = await db.cacheGet(key);
  if (hit) return hit;
  return nominatimQueue(async () => {
    try {
      const r = await getJSON(`${NOMINATIM}?format=jsonv2&lat=${lat}&lon=${lon}&zoom=17&accept-language=ja`, {}, 10000);
      const a = r.json?.address;
      if (!r.ok || !a) return null;
      const v = {
        area: a.quarter || a.suburb || a.neighbourhood || a.village || a.hamlet || null,
        city: a.city || a.town || a.municipality || a.county || a.province || a.state || null,
        country: a.country_code || null,
      };
      db.cacheSet(key, v);
      return v;
    } catch { return null; }
  });
}
