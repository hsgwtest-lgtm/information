// Geometry. Points are {lat, lon}; paths are arrays of [lng, lat] (GeoJSON order).
export const R_KM = 6371;
const rad = d => d * Math.PI / 180;
const deg = r => r * 180 / Math.PI;

export function distKm(a, b) {
  const dLat = rad(b.lat - a.lat), dLon = rad(b.lon - a.lon);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(rad(a.lat)) * Math.cos(rad(b.lat)) * Math.sin(dLon / 2) ** 2;
  return 2 * R_KM * Math.asin(Math.min(1, Math.sqrt(h)));
}
export const pDist = (p, q) => distKm({ lat: p[1], lon: p[0] }, { lat: q[1], lon: q[0] });

/** Initial compass bearing from p to q in degrees (0 = north, clockwise). */
export function bearing(p, q) {
  const φ1 = rad(p[1]), φ2 = rad(q[1]), Δλ = rad(q[0] - p[0]);
  const y = Math.sin(Δλ) * Math.cos(φ2);
  const x = Math.cos(φ1) * Math.sin(φ2) - Math.sin(φ1) * Math.cos(φ2) * Math.cos(Δλ);
  return (deg(Math.atan2(y, x)) + 360) % 360;
}

export function pathKm(c) {
  let s = 0;
  for (let i = 1; i < c.length; i++) s += pDist(c[i - 1], c[i]);
  return s;
}

export function cumulative(c) {
  const out = new Float64Array(c.length);
  for (let i = 1; i < c.length; i++) out[i] = out[i - 1] + pDist(c[i - 1], c[i]);
  return out;
}

/** Point at distance d (km) along c. Returns {pos, i} where i is the index of the segment start. */
export function along(c, cum, d) {
  const n = c.length;
  if (n === 1 || d <= 0) return { pos: c[0], i: 0 };
  const total = cum[n - 1];
  if (d >= total) return { pos: c[n - 1], i: n - 2 };
  let lo = 0, hi = n - 1;
  while (hi - lo > 1) { const m = (lo + hi) >> 1; if (cum[m] <= d) lo = m; else hi = m; }
  const u = (d - cum[lo]) / ((cum[hi] - cum[lo]) || 1e-12);
  const a = c[lo], b = c[hi];
  return { pos: [a[0] + (b[0] - a[0]) * u, a[1] + (b[1] - a[1]) * u], i: lo };
}

/** Keep longitudes continuous across the antimeridian. */
export function unwrap(c) {
  const out = c.map(p => [p[0], p[1]]);
  for (let i = 1; i < out.length; i++) {
    while (out[i][0] - out[i - 1][0] > 180) out[i][0] -= 360;
    while (out[i][0] - out[i - 1][0] < -180) out[i][0] += 360;
  }
  return out;
}

export function greatCircle(a, b, n = 96) {
  const d = distKm(a, b) / R_KM;
  if (d < 1e-7) return [[a.lon, a.lat], [b.lon, b.lat]];
  const φ1 = rad(a.lat), λ1 = rad(a.lon), φ2 = rad(b.lat), λ2 = rad(b.lon);
  const pts = [];
  for (let i = 0; i <= n; i++) {
    const f = i / n;
    const A = Math.sin((1 - f) * d) / Math.sin(d), B = Math.sin(f * d) / Math.sin(d);
    const x = A * Math.cos(φ1) * Math.cos(λ1) + B * Math.cos(φ2) * Math.cos(λ2);
    const y = A * Math.cos(φ1) * Math.sin(λ1) + B * Math.cos(φ2) * Math.sin(λ2);
    const z = A * Math.sin(φ1) + B * Math.sin(φ2);
    pts.push([deg(Math.atan2(y, x)), deg(Math.atan2(z, Math.hypot(x, y)))]);
  }
  return unwrap(pts);
}

/** Gentle bow between two points, for crossings without real geometry (ferries). */
export function bow(a, b, n = 48, k = 0.1) {
  const mx = (a.lon + b.lon) / 2, my = (a.lat + b.lat) / 2;
  const dx = b.lon - a.lon, dy = b.lat - a.lat;
  const cx = mx - dy * k, cy = my + dx * k;
  const out = [];
  for (let i = 0; i <= n; i++) {
    const t = i / n, u = 1 - t;
    out.push([u * u * a.lon + 2 * u * t * cx + t * t * b.lon, u * u * a.lat + 2 * u * t * cy + t * t * b.lat]);
  }
  return out;
}

export const straight = (a, b) => [[a.lon, a.lat], [b.lon, b.lat]];

/** Douglas–Peucker in a local equirectangular frame (good enough for display). */
export function simplify(c, tolKm) {
  if (c.length <= 2) return c.slice();
  const lat0 = rad(c[0][1]);
  const P = c.map(p => [p[0] * Math.cos(lat0) * 111.32, p[1] * 110.57]);
  const keep = new Uint8Array(c.length);
  keep[0] = keep[c.length - 1] = 1;
  const stack = [[0, c.length - 1]];
  while (stack.length) {
    const [s, e] = stack.pop();
    let best = -1, bestD = tolKm;
    const [ax, ay] = P[s], [bx, by] = P[e];
    const dx = bx - ax, dy = by - ay, L = dx * dx + dy * dy || 1e-12;
    for (let i = s + 1; i < e; i++) {
      const t = Math.max(0, Math.min(1, ((P[i][0] - ax) * dx + (P[i][1] - ay) * dy) / L));
      const d = Math.hypot(P[i][0] - (ax + t * dx), P[i][1] - (ay + t * dy));
      if (d > bestD) { bestD = d; best = i; }
    }
    if (best > 0) { keep[best] = 1; stack.push([s, best], [best, e]); }
  }
  return c.filter((_, i) => keep[i]);
}

/** Even resampling to at most max points. */
export function decimate(c, max = 400) {
  if (c.length <= max) return c;
  const step = (c.length - 1) / (max - 1);
  const out = [];
  for (let i = 0; i < max; i++) out.push(c[Math.round(i * step)]);
  return out;
}

export function bounds(points) {
  let w = Infinity, s = Infinity, e = -Infinity, n = -Infinity;
  for (const p of points) {
    const lon = p.lon ?? p[0], lat = p.lat ?? p[1];
    if (lon < w) w = lon; if (lon > e) e = lon;
    if (lat < s) s = lat; if (lat > n) n = lat;
  }
  return [[w, s], [e, n]];
}

export function centroid(points) {
  let x = 0, y = 0;
  for (const p of points) { x += p.lon; y += p.lat; }
  return { lon: x / points.length, lat: y / points.length };
}

export const lerp = (a, b, t) => a + (b - a) * t;
export const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
export const angleDelta = (from, to) => ((to - from + 540) % 360) - 180;
export const smooth = t => t * t * (3 - 2 * t);
export const easeInOut = t => (t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2);
