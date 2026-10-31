// Network services, all keyless and cached on-device:
//   routes   — OSRM (FOSSGIS servers), with ferry crossings split out as boat legs
//   places   — Overpass: nearest station + the landmark a spot sits in (shrine, park, museum…)
//   areas    — Nominatim: neighbourhood / city names (1 request per second)
import * as db from './db.js';
import { decimate, distKm, pathKm } from './geo.js';

const ROUTE_BASE = {
  foot: 'https://routing.openstreetmap.de/routed-foot/route/v1/foot/',
  car: 'https://routing.openstreetmap.de/routed-car/route/v1/driving/',
};
const OVERPASS = ['https://overpass-api.de/api/interpreter', 'https://overpass.kumi.systems/api/interpreter'];
const NOMINATIM = 'https://nominatim.openstreetmap.org/reverse';
const sleep = ms => new Promise(r => setTimeout(r, ms));
const r4 = v => v.toFixed(4), r5 = v => v.toFixed(5);

async function getJSON(url, opts = {}, timeoutMs = 12000) {
  const ctl = new AbortController();
  const timer = setTimeout(() => ctl.abort(), timeoutMs);
  try {
    const res = await fetch(url, { ...opts, signal: ctl.signal });
    let json = null;
    try { json = await res.json(); } catch { /* not JSON */ }
    return { ok: res.ok, status: res.status, json };
  } finally { clearTimeout(timer); }
}

/* ---------------- Routes ---------------- */
let routeGate = Promise.resolve();
/** Sequential, lightly spaced requests to the shared routing servers. */
function gated(fn, gapMs) {
  const p = routeGate.then(fn);
  routeGate = p.catch(() => {}).then(() => sleep(gapMs));
  return p;
}

/**
 * Route between two points. Returns {parts:[{mode, coords}], km, hours} | {none:true} | null (offline/error).
 * profile: 'foot' | 'car'. Ferry steps come back as mode 'boat'.
 */
export async function route(profile, a, b) {
  const key = `route:${profile}:${r5(a.lat)},${r5(a.lon)};${r5(b.lat)},${r5(b.lon)}`;
  const hit = await db.kvGet(key);
  if (hit) return hit;
  return gated(async () => {
    const url = `${ROUTE_BASE[profile]}${a.lon},${a.lat};${b.lon},${b.lat}?overview=false&steps=true&geometries=geojson`;
    let r;
    try { r = await getJSON(url, {}, 15000); } catch { return null; }
    const j = r.json;
    if (j && (j.code === 'NoRoute' || j.code === 'NoSegment')) {
      const v = { none: true };
      db.kvSet(key, v);
      return v;
    }
    if (!r.ok || !j || j.code !== 'Ok' || !j.routes?.length) return null;
    const base = profile === 'foot' ? 'walk' : 'car';
    let parts = [];
    for (const s of j.routes[0].legs.flatMap(l => l.steps || [])) {
      const coords = (s.geometry?.coordinates || []).map(([lo, la]) => [+la.toFixed(6), +lo.toFixed(6)]);
      if (coords.length < 2) continue;
      const mode = s.mode === 'ferry' ? 'boat' : base;
      const last = parts[parts.length - 1];
      if (last && last.mode === mode) last.coords.push(...coords.slice(1));
      else parts.push({ mode, coords });
    }
    // Tiny ferry bits (river crossings on a map edge) are noise: fold them back.
    for (const p of parts) if (p.mode === 'boat' && pathKm(p.coords) < 0.3) p.mode = base;
    parts = parts.reduce((acc, p) => {
      const last = acc[acc.length - 1];
      if (last && last.mode === p.mode) last.coords.push(...p.coords.slice(1)); else acc.push(p);
      return acc;
    }, []);
    if (parts.length) {
      parts[0].coords.unshift([a.lat, a.lon]);
      parts[parts.length - 1].coords.push([b.lat, b.lon]);
    }
    for (const p of parts) p.coords = decimate(p.coords, 300);
    const v = { parts, km: j.routes[0].distance / 1000, hours: j.routes[0].duration / 3600 };
    db.kvSet(key, v);
    return v;
  }, 150);
}

/* ---------------- Places (Overpass) ---------------- */
function landmarkScore(t) {
  if (t.tourism) return { attraction: 10, theme_park: 10, zoo: 10, aquarium: 10, museum: 9, gallery: 8, viewpoint: 8, artwork: 6, hotel: 5, camp_site: 5, picnic_site: 4, information: 0 }[t.tourism] ?? 5;
  if (t.historic) return { castle: 10, monument: 7, ruins: 7, archaeological_site: 7, memorial: 3, wayside_shrine: 2, boundary_stone: 0 }[t.historic] ?? 6;
  if (t.aeroway) return { aerodrome: 10, terminal: 9 }[t.aeroway] ?? 0;
  if (t.amenity) return { place_of_worship: 9, marketplace: 7, theatre: 7, arts_centre: 7, university: 5, college: 4, townhall: 4, library: 4, restaurant: 3, cafe: 3, hospital: 2, school: 2, parking: 0, kindergarten: 0 }[t.amenity] ?? 1;
  if (t.leisure) return { garden: 8, park: 7, stadium: 8, water_park: 8, beach_resort: 8, marina: 6, nature_reserve: 4, golf_course: 4, sports_centre: 4, pitch: 1, playground: 1 }[t.leisure] ?? 2;
  if (t.natural) return { beach: 8, peak: 8, volcano: 9, cape: 8, bay: 6, water: 5, wood: 2 }[t.natural] ?? 3;
  return 0;
}
const nameOf = t => t?.['name:ja'] || t?.name || null;

function placesQuery(spots) {
  const parts = spots.map((s, i) => {
    const ll = `${s.lat.toFixed(6)},${s.lon.toFixed(6)}`;
    return `make marker idx="${i}";out;` +
      `nwr(around:800,${ll})[railway~"^(station|halt)$"];out center tags;` +
      `is_in(${ll})->.a;area.a[name][~"^(tourism|historic|leisure|amenity|aeroway|natural)$"~"."];out tags;` +
      `nwr(around:45,${ll})[name][~"^(tourism|historic)$"~"."];out center tags;`;
  });
  return `[out:json][timeout:90];${parts.join('')}`;
}

function parsePlaces(spots, elements) {
  const out = spots.map(() => ({ station: null, landmark: null }));
  const cands = spots.map(() => []);
  let cur = -1;
  for (const e of elements) {
    if (e.type === 'marker') { cur = Number(e.tags?.idx); continue; }
    if (cur < 0 || !spots[cur]) continue;
    const t = e.tags || {};
    const pos = e.lat != null ? { lat: e.lat, lon: e.lon } : e.center ? { lat: e.center.lat, lon: e.center.lon } : null;
    const name = nameOf(t);
    if (!name) continue;
    if (t.railway === 'station' || t.railway === 'halt') {
      if (!pos) continue;
      const distM = distKm(spots[cur], pos) * 1000;
      const st = out[cur].station;
      if (!st || distM < st.distM) out[cur].station = { name: name.replace(/駅$/, ''), lat: pos.lat, lon: pos.lon, distM: Math.round(distM) };
      continue;
    }
    const score = landmarkScore(t) + (pos ? 3 : 0); // a named thing right at the spot beats an enclosing area
    cands[cur].push({ name, score, near: !!pos });
  }
  out.forEach((o, i) => {
    if (o.station && o.station.distM <= 120) cands[i].push({ name: `${o.station.name}駅`, score: 7, near: true });
    const best = cands[i].sort((a, b) => b.score - a.score || Number(b.near) - Number(a.near))[0];
    if (best && best.score >= 4) o.landmark = best.name;
  });
  return out;
}

/** Only what is already cached on this device (no network). */
export async function cachedPlaces(spots) {
  const out = {};
  for (const s of spots) {
    const hit = await db.kvGet(`place:${r4(s.lat)},${r4(s.lon)}`);
    if (hit) out[s.key] = hit;
  }
  return out;
}
export const cachedArea = (lat, lon) => db.kvGet(`area:${r4(lat)},${r4(lon)}`);

/**
 * Station + landmark for each spot. Returns {spotKey: {station, landmark}}; spots that could not be
 * looked up (Overpass busy/offline) are left out so callers can treat them as unknown.
 */
export async function places(spots) {
  const result = {};
  const todo = [];
  for (const s of spots) {
    const hit = await db.kvGet(`place:${r4(s.lat)},${r4(s.lon)}`);
    if (hit) result[s.key] = hit; else todo.push(s);
  }
  for (let i = 0; i < todo.length; i += 25) {
    const chunk = todo.slice(i, i + 25);
    const body = 'data=' + encodeURIComponent(placesQuery(chunk));
    let elements = null;
    for (const url of OVERPASS) {
      try {
        const r = await getJSON(url, { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body }, 70000);
        if (r.ok && r.json?.elements) { elements = r.json.elements; break; }
      } catch { /* try the next server */ }
    }
    if (!elements) continue;
    parsePlaces(chunk, elements).forEach((v, k) => {
      result[chunk[k].key] = v;
      db.kvSet(`place:${r4(chunk[k].lat)},${r4(chunk[k].lon)}`, v);
    });
  }
  return result;
}

/* ---------------- Area names (Nominatim) ---------------- */
let nomGate = Promise.resolve();
/** {area, city, country} for a point, or null. */
export async function area(lat, lon) {
  const key = `area:${r4(lat)},${r4(lon)}`;
  const hit = await db.kvGet(key);
  if (hit) return hit;
  const p = nomGate.then(async () => {
    try {
      const r = await getJSON(`${NOMINATIM}?format=jsonv2&lat=${lat}&lon=${lon}&zoom=18&accept-language=ja`, {}, 10000);
      const a = r.json?.address;
      if (!r.ok || !a) return null;
      const v = {
        area: a.quarter || a.suburb || a.neighbourhood || a.village || a.hamlet || null,
        city: a.city || a.town || a.municipality || a.county || a.state || null,
        country: a.country_code || null,
      };
      db.kvSet(key, v);
      return v;
    } catch { return null; }
  });
  nomGate = p.catch(() => {}).then(() => sleep(1100));
  return p;
}
