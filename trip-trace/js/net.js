// Trip Trace — network helpers: routes (OSRM via FOSSGIS), stations (Overpass), place names (Nominatim).
// Every call has a fallback so the app keeps working offline or when a service is busy.
import { greatCircle, softCurve, haversineKm } from './trip.js';

const ROUTE_BASE = {
  foot: 'https://routing.openstreetmap.de/routed-foot/route/v1/foot/',
  car: 'https://routing.openstreetmap.de/routed-car/route/v1/driving/',
};
const OVERPASS = 'https://overpass-api.de/api/interpreter';
const NOMINATIM = 'https://nominatim.openstreetmap.org/reverse';

function cacheGet(key) { try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : null; } catch { return null; } }
function cacheSet(key, v) { try { localStorage.setItem(key, JSON.stringify(v)); } catch { /* storage full or blocked */ } }
const r5 = v => v.toFixed(5);
const sleep = ms => new Promise(r => setTimeout(r, ms));

async function fetchJSON(url, opts = {}, timeoutMs = 9000) {
  const ctl = new AbortController();
  const t = setTimeout(() => ctl.abort(), timeoutMs);
  try {
    const res = await fetch(url, { ...opts, signal: ctl.signal });
    if (!res.ok) throw new Error('HTTP ' + res.status);
    return await res.json();
  } finally { clearTimeout(t); }
}

/** Road/footpath route as [[lat,lon],...] or null. */
export async function route(profile, a, b) {
  const key = `tt-route:${profile}:${r5(a.lat)},${r5(a.lon)};${r5(b.lat)},${r5(b.lon)}`;
  const hit = cacheGet(key);
  if (hit) return hit;
  try {
    const url = `${ROUTE_BASE[profile]}${a.lon},${a.lat};${b.lon},${b.lat}?overview=full&geometries=geojson`;
    const j = await fetchJSON(url);
    const c = j.routes?.[0]?.geometry?.coordinates;
    if (!c || c.length < 2) return null;
    // Keep at most ~400 points so storage and animation stay light.
    const step = Math.max(1, Math.floor(c.length / 400));
    const out = c.filter((_, i) => i % step === 0 || i === c.length - 1).map(([lon, lat]) => [+lat.toFixed(6), +lon.toFixed(6)]);
    cacheSet(key, out);
    return out;
  } catch { return null; }
}

/** Railway stations within radius of the given spots: [{name, lat, lon}] (empty array on failure → null). */
export async function fetchStations(spots, radiusM = 700) {
  if (!spots.length) return [];
  const key = 'tt-st:' + spots.map(s => `${s.lat.toFixed(4)},${s.lon.toFixed(4)}`).join('|');
  const hit = cacheGet(key);
  if (hit) return hit;
  const q = `[out:json][timeout:20];(${spots.map(s => `node(around:${radiusM},${s.lat},${s.lon})[railway~"^(station|halt)$"];`).join('')});out body;`;
  try {
    const j = await fetchJSON(OVERPASS, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: 'data=' + encodeURIComponent(q),
    }, 25000);
    const list = (j.elements || []).map(e => ({
      name: (e.tags?.['name:ja'] || e.tags?.name || '駅').replace(/駅$/, ''),
      lat: e.lat, lon: e.lon,
    }));
    cacheSet(key, list);
    return list;
  } catch { return null; }
}

let lastNominatim = 0;
/** Short place name for a spot, or null. Throttled to 1 request/second per Nominatim policy. */
export async function placeName(lat, lon) {
  const key = `tt-name:${lat.toFixed(4)},${lon.toFixed(4)}`;
  const hit = cacheGet(key);
  if (hit) return hit;
  const wait = lastNominatim + 1100 - Date.now();
  if (wait > 0) await sleep(wait);
  lastNominatim = Date.now();
  try {
    const j = await fetchJSON(`${NOMINATIM}?format=jsonv2&lat=${lat}&lon=${lon}&zoom=18&accept-language=ja`);
    const a = j.address || {};
    const name = j.name || a.tourism || a.amenity || a.shop || a.leisure || a.historic || a.building ||
      a.neighbourhood || a.quarter || a.suburb || a.city_district || a.village || a.town || a.city || null;
    if (name) cacheSet(key, name);
    return name;
  } catch { return null; }
}

const straight = (a, b) => [[a.lat, a.lon], [b.lat, b.lon]];

/**
 * Turn a segment into drawable legs: [{mode, coords, approx}].
 * Train = walk to the station, ride, walk from the station.
 */
export async function buildLegs(seg, from, to, stations) {
  const leg = async (mode, a, b) => {
    if (mode === 'plane') return { mode, coords: greatCircle(a, b), approx: false };
    if (mode === 'train') return { mode, coords: softCurve(a, b), approx: true };
    const c = await route(mode === 'walk' ? 'foot' : 'car', a, b);
    return { mode, coords: c || straight(a, b), approx: !c };
  };
  if (seg.mode === 'train') {
    const A = stations?.[from.id], B = stations?.[to.id];
    if (A && B && A.name !== B.name) {
      const legs = [];
      if (haversineKm(from, A) > 0.06) legs.push(await leg('walk', from, A));
      legs.push({ ...(await leg('train', A, B)), label: `${A.name} → ${B.name}` });
      if (haversineKm(B, to) > 0.06) legs.push(await leg('walk', B, to));
      return legs;
    }
    return [await leg('train', from, to)];
  }
  return [await leg(seg.mode, from, to)];
}
