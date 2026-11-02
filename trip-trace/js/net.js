// Network lookups, all keyless and cached on this device.
//   route()  OSRM (FOSSGIS servers): walking / driving geometry; ferry steps come back as boat parts
//   spots()  Overpass: nearest station and the named place a spot sits in (shrine, park, museum…)
//   area()   Nominatim: district and city names, 1 request per second
import * as db from './db.js';
import { decimate, distKm, pathKm } from './geo.js';

const OSRM = {
  foot: 'https://routing.openstreetmap.de/routed-foot/route/v1/foot/',
  car: 'https://routing.openstreetmap.de/routed-car/route/v1/driving/',
};
const OVERPASS = ['https://overpass-api.de/api/interpreter', 'https://overpass.kumi.systems/api/interpreter'];
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

/* ---------- Stations and landmarks (Overpass) ---------- */
function score(t) {
  if (t.tourism) return { attraction: 10, theme_park: 10, zoo: 10, aquarium: 10, museum: 8, gallery: 7, viewpoint: 8, artwork: 6, hotel: 5, camp_site: 5, picnic_site: 4, information: 0 }[t.tourism] ?? 5;
  if (t.historic) return { castle: 10, monument: 7, ruins: 7, archaeological_site: 7, memorial: 3, wayside_shrine: 2, boundary_stone: 0 }[t.historic] ?? 6;
  if (t.aeroway) return { aerodrome: 10, terminal: 9 }[t.aeroway] ?? 0;
  if (t.amenity) return { place_of_worship: 9, marketplace: 7, theatre: 7, arts_centre: 7, university: 5, townhall: 4, library: 4, restaurant: 3, cafe: 3, bar: 3, pub: 3 }[t.amenity] ?? 0;
  if (t.leisure) return { garden: 8, park: 7, stadium: 8, water_park: 8, beach_resort: 8, marina: 6, golf_course: 4, sports_centre: 3 }[t.leisure] ?? 0;
  if (t.natural) {
    if (t.natural === 'water') return ['lake', 'reservoir', 'pond', 'lagoon'].includes(t.water) ? 5 : 0;
    return { beach: 8, peak: 8, volcano: 9, cape: 8, hot_spring: 8, geyser: 8 }[t.natural] ?? 0;
  }
  return 0;
}
const nameOf = t => t?.['name:ja'] || t?.name || null;

function query(list) {
  return '[out:json][timeout:90];' + list.map((s, i) => {
    const ll = `${s.lat.toFixed(6)},${s.lon.toFixed(6)}`;
    return `make marker idx="${i}";out;` +
      `nwr(around:800,${ll})[railway~"^(station|halt)$"];out center tags;` +
      `is_in(${ll})->.a;area.a[name][~"^(tourism|historic|leisure|amenity|aeroway|natural)$"~"."];out tags;` +
      `nwr(around:45,${ll})[name][~"^(tourism|historic)$"~"."];out center tags;`;
  }).join('');
}

function parse(list, elements) {
  const out = list.map(() => ({ station: null, landmark: null }));
  const cands = list.map(() => []);
  let cur = -1;
  for (const e of elements) {
    if (e.type === 'marker') { cur = Number(e.tags?.idx); continue; }
    if (!list[cur]) continue;
    const t = e.tags || {};
    const name = nameOf(t);
    if (!name) continue;
    const pos = e.lat != null ? { lat: e.lat, lon: e.lon } : e.center ? { lat: e.center.lat, lon: e.center.lon } : null;
    if (t.railway === 'station' || t.railway === 'halt') {
      if (!pos) continue;
      const m = distKm(list[cur], pos) * 1000;
      if (!out[cur].station || m < out[cur].station.m) out[cur].station = { name: name.replace(/駅$/, ''), lat: pos.lat, lon: pos.lon, m: Math.round(m) };
      continue;
    }
    const base = score(t);
    if (base < 3) continue;
    cands[cur].push({ name, s: base + (pos ? 1 : 2) + (t.wikidata || t.wikipedia ? 2 : 0) });
  }
  out.forEach((o, i) => {
    if (o.station && o.station.m <= 120) cands[i].push({ name: `${o.station.name}駅`, s: 9 });
    const best = cands[i].sort((a, b) => b.s - a.s)[0];
    if (best && best.s >= 5) o.landmark = best.name;
  });
  return out;
}

export async function cachedSpots(list) {
  const out = {};
  for (const s of list) {
    const v = await db.cacheGet(`s:${r4(s.lat)},${r4(s.lon)}`);
    if (v) out[s.key] = v;
  }
  return out;
}

/** {placeKey: {station, landmark}}; places that could not be looked up are left out. */
export async function spots(list) {
  const out = await cachedSpots(list);
  const todo = list.filter(s => !out[s.key]);
  for (let i = 0; i < todo.length; i += 20) {
    const chunk = todo.slice(i, i + 20);
    const body = 'data=' + encodeURIComponent(query(chunk));
    let elements = null;
    for (const url of OVERPASS) {
      try {
        const r = await getJSON(url, { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body }, 80000);
        if (r.ok && r.json?.elements) { elements = r.json.elements; break; }
      } catch { /* try the next server */ }
    }
    if (!elements) continue;
    parse(chunk, elements).forEach((v, k) => {
      out[chunk[k].key] = v;
      db.cacheSet(`s:${r4(chunk[k].lat)},${r4(chunk[k].lon)}`, v);
    });
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
