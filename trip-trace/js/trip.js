// Trip Trace — pure trip-building logic (no DOM, no network).
// Photos -> spots (clusters of nearby shots) -> segments (moves between spots with an estimated mode).

export const MODES = {
  walk:  { icon: '🚶', label: '徒歩',       color: '#5eead4' },
  train: { icon: '🚃', label: '電車',       color: '#fbbf24' },
  taxi:  { icon: '🚕', label: 'タクシー/車', color: '#f472b6' },
  plane: { icon: '✈️', label: '飛行機',     color: '#a78bfa' },
};
export const MODE_ORDER = ['walk', 'train', 'taxi', 'plane'];

export const CONFIG = {
  spotRadiusM: 200,        // photos within this distance of the spot centre join the spot
  spotMaxGapMin: 180,      // ...unless this much time passed and the photo is not very close
  noGpsAttachMin: 45,      // photo without GPS joins a spot if taken within this many minutes of it
  walkMaxKm: 1.0,          // always walk below this
  walkStretchKm: 3.0,      // may walk up to this if there was time at ≤5 km/h
  walkStretchKmh: 5.0,
  stationNearM: 700,       // a spot counts as "near a station" within this distance
  planeMinKm: 300,         // always fly above this
  planeFastKm: 100,        // fly above this when average speed was very high
  planeFastKmh: 200,
  longTrainKm: 25,         // without station data, long hops default to train
};

const R = 6371;
const rad = d => d * Math.PI / 180;

export function haversineKm(a, b) {
  const dLat = rad(b.lat - a.lat), dLon = rad(b.lon - a.lon);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(rad(a.lat)) * Math.cos(rad(b.lat)) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.min(1, Math.sqrt(h)));
}

/** Sort photos by capture time; photos lacking a time keep file order at the end. */
export function sortPhotos(photos) {
  return photos.slice().sort((a, b) => (a.time ?? Infinity) - (b.time ?? Infinity));
}

/**
 * Group time-ordered GPS photos into spots.
 * A photo joins the current spot if it is within spotRadiusM of the spot's centroid
 * (and not separated by a very long gap while drifting away).
 */
export function clusterSpots(photos, cfg = CONFIG) {
  const gps = sortPhotos(photos).filter(p => p.lat != null && p.lon != null && p.time != null);
  const spots = [];
  let cur = null;
  for (const p of gps) {
    if (cur) {
      const dM = haversineKm(cur, p) * 1000;
      const gapMin = (p.time - cur.end) / 60000;
      const sameSpot = dM <= cfg.spotRadiusM && (gapMin <= cfg.spotMaxGapMin || dM <= cfg.spotRadiusM / 2);
      if (sameSpot) {
        cur.photos.push(p);
        const n = cur.photos.length;
        cur.lat += (p.lat - cur.lat) / n;
        cur.lon += (p.lon - cur.lon) / n;
        cur.end = p.time;
        continue;
      }
    }
    cur = { id: spots.length, lat: p.lat, lon: p.lon, start: p.time, end: p.time, photos: [p], name: null };
    spots.push(cur);
  }
  return spots;
}

/** Attach photos that have a time but no GPS to the spot closest in time (if close enough). */
export function attachNoGps(spots, photos, cfg = CONFIG) {
  const orphans = [];
  for (const p of photos) {
    if (p.lat != null && p.lon != null) continue;
    if (p.time == null || !spots.length) { orphans.push(p); continue; }
    let best = null, bestMin = Infinity;
    for (const s of spots) {
      const m = p.time < s.start ? (s.start - p.time) / 60000 : p.time > s.end ? (p.time - s.end) / 60000 : 0;
      if (m < bestMin) { bestMin = m; best = s; }
    }
    if (best && bestMin <= cfg.noGpsAttachMin) {
      best.photos.push(p);
      best.photos.sort((a, b) => a.time - b.time);
      best.start = Math.min(best.start, p.time);
      best.end = Math.max(best.end, p.time);
    } else orphans.push(p);
  }
  return orphans;
}

/**
 * Estimate how the traveller moved between two spots.
 * stations: optional { [spotId]: {name, lat, lon, distM} | null } — nearest railway station per spot.
 * Returns { mode, reason }.
 */
export function classifySegment(from, to, stations, cfg = CONFIG) {
  const km = haversineKm(from, to);
  const gapH = Math.max((to.start - from.end) / 3.6e6, 1 / 60);
  const kmh = km / gapH;

  if (km < cfg.walkMaxKm) return { mode: 'walk', reason: `${fmtKm(km)}と近いので徒歩` };
  if (km >= cfg.planeMinKm || (km >= cfg.planeFastKm && kmh >= cfg.planeFastKmh))
    return { mode: 'plane', reason: `${fmtKm(km)}を約${fmtDur(gapH)}で移動` };
  if (km <= cfg.walkStretchKm && kmh <= cfg.walkStretchKmh)
    return { mode: 'walk', reason: `${fmtKm(km)}・時間に余裕があるので徒歩` };

  if (stations) {
    const a = stations[from.id], b = stations[to.id];
    if (a && b && a.name !== b.name) return { mode: 'train', reason: `${a.name}駅→${b.name}駅が近い` };
    return { mode: 'taxi', reason: a || b ? '片側に駅がないので車' : '近くに駅がないので車' };
  }
  return km >= cfg.longTrainKm
    ? { mode: 'train', reason: `${fmtKm(km)}の長距離（駅情報なし）` }
    : { mode: 'taxi', reason: `${fmtKm(km)}（駅情報なし）` };
}

/** Build segments between consecutive spots. */
export function buildSegments(spots, stations, cfg = CONFIG) {
  const segs = [];
  for (let i = 0; i + 1 < spots.length; i++) {
    const from = spots[i], to = spots[i + 1];
    const { mode, reason } = classifySegment(from, to, stations, cfg);
    segs.push({ id: i, from: from.id, to: to.id, km: haversineKm(from, to), mode, auto: mode, reason, legs: null });
  }
  return segs;
}

/** Spots that could plausibly be train endpoints (worth a station lookup). */
export function spotsNeedingStations(spots, cfg = CONFIG) {
  const ids = new Set();
  for (let i = 0; i + 1 < spots.length; i++) {
    const a = spots[i], b = spots[i + 1];
    const km = haversineKm(a, b);
    if (km >= cfg.walkMaxKm && km < cfg.planeMinKm) { ids.add(a.id); ids.add(b.id); }
  }
  return spots.filter(s => ids.has(s.id));
}

/** Nearest station per spot from a flat list of stations. */
export function nearestStations(spots, stationList, cfg = CONFIG) {
  const out = {};
  for (const s of spots) {
    let best = null;
    for (const st of stationList) {
      const dM = haversineKm(s, st) * 1000;
      if (dM <= cfg.stationNearM && (!best || dM < best.distM)) best = { ...st, distM: dM };
    }
    out[s.id] = best;
  }
  return out;
}

/** Great-circle interpolation for flight arcs. */
export function greatCircle(a, b, n = 64) {
  const φ1 = rad(a.lat), λ1 = rad(a.lon), φ2 = rad(b.lat), λ2 = rad(b.lon);
  const d = haversineKm(a, b) / R;
  if (d === 0) return [[a.lat, a.lon], [b.lat, b.lon]];
  const pts = [];
  for (let i = 0; i <= n; i++) {
    const f = i / n;
    const A = Math.sin((1 - f) * d) / Math.sin(d), B = Math.sin(f * d) / Math.sin(d);
    const x = A * Math.cos(φ1) * Math.cos(λ1) + B * Math.cos(φ2) * Math.cos(λ2);
    const y = A * Math.cos(φ1) * Math.sin(λ1) + B * Math.cos(φ2) * Math.sin(λ2);
    const z = A * Math.sin(φ1) + B * Math.sin(φ2);
    pts.push([Math.atan2(z, Math.hypot(x, y)) * 180 / Math.PI, Math.atan2(y, x) * 180 / Math.PI]);
  }
  return pts;
}

/** Gentle curve between two points (used for rail legs without track geometry). */
export function softCurve(a, b, n = 32, bend = 0.12) {
  const mx = (a.lat + b.lat) / 2, my = (a.lon + b.lon) / 2;
  const dx = b.lat - a.lat, dy = b.lon - a.lon;
  const cx = mx - dy * bend, cy = my + dx * bend;
  const pts = [];
  for (let i = 0; i <= n; i++) {
    const t = i / n, u = 1 - t;
    pts.push([u * u * a.lat + 2 * u * t * cx + t * t * b.lat, u * u * a.lon + 2 * u * t * cy + t * t * b.lon]);
  }
  return pts;
}

export function pathLengthKm(coords) {
  let s = 0;
  for (let i = 1; i < coords.length; i++)
    s += haversineKm({ lat: coords[i - 1][0], lon: coords[i - 1][1] }, { lat: coords[i][0], lon: coords[i][1] });
  return s;
}

export function fmtKm(km) { return km < 1 ? `${Math.round(km * 1000)}m` : `${km < 10 ? km.toFixed(1) : Math.round(km)}km`; }
export function fmtDur(h) { return h < 1 ? `${Math.round(h * 60)}分` : `${Math.floor(h)}時間${Math.round((h % 1) * 60) ? Math.round((h % 1) * 60) + '分' : ''}`; }

/** Full pipeline for the parts that need no network. */
export function buildTrip(photos, stations = null, cfg = CONFIG) {
  const spots = clusterSpots(photos, cfg);
  const orphans = attachNoGps(spots, photos, cfg);
  const segments = buildSegments(spots, stations, cfg);
  return { spots, segments, orphans };
}
