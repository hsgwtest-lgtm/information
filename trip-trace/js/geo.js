// Geometry helpers. Points are {lat, lon}; paths are [[lat, lon], ...].
export const EARTH_KM = 6371;
const rad = d => d * Math.PI / 180;
const deg = r => r * 180 / Math.PI;

export function distKm(a, b) {
  const dLat = rad(b.lat - a.lat), dLon = rad(b.lon - a.lon);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(rad(a.lat)) * Math.cos(rad(b.lat)) * Math.sin(dLon / 2) ** 2;
  return 2 * EARTH_KM * Math.asin(Math.min(1, Math.sqrt(h)));
}
export const llDist = (p, q) => distKm({ lat: p[0], lon: p[1] }, { lat: q[0], lon: q[1] });

export function pathKm(c) {
  let s = 0;
  for (let i = 1; i < c.length; i++) s += llDist(c[i - 1], c[i]);
  return s;
}

export function cumulative(c) {
  const out = [0];
  for (let i = 1; i < c.length; i++) out.push(out[i - 1] + llDist(c[i - 1], c[i]));
  return out;
}

/** Position at distance d (km) along path c with cumulative distances cum. Returns {pos, i}. */
export function pointAt(c, cum, d) {
  const total = cum[cum.length - 1];
  if (d <= 0 || c.length < 2) return { pos: c[0], i: 0 };
  if (d >= total) return { pos: c[c.length - 1], i: c.length - 1 };
  let lo = 0, hi = cum.length - 1;
  while (hi - lo > 1) { const mid = (lo + hi) >> 1; if (cum[mid] <= d) lo = mid; else hi = mid; }
  const u = (d - cum[lo]) / ((cum[hi] - cum[lo]) || 1e-12);
  const a = c[lo], b = c[hi];
  return { pos: [a[0] + (b[0] - a[0]) * u, a[1] + (b[1] - a[1]) * u], i: lo };
}

/** Keep longitudes continuous across the antimeridian so lines don't wrap the globe. */
export function unwrap(c) {
  const out = c.map(p => [p[0], p[1]]);
  for (let i = 1; i < out.length; i++) {
    while (out[i][1] - out[i - 1][1] > 180) out[i][1] -= 360;
    while (out[i][1] - out[i - 1][1] < -180) out[i][1] += 360;
  }
  return out;
}

export function greatCircle(a, b, n = 72) {
  const d = distKm(a, b) / EARTH_KM;
  if (d < 1e-6) return [[a.lat, a.lon], [b.lat, b.lon]];
  const φ1 = rad(a.lat), λ1 = rad(a.lon), φ2 = rad(b.lat), λ2 = rad(b.lon);
  const pts = [];
  for (let i = 0; i <= n; i++) {
    const f = i / n;
    const A = Math.sin((1 - f) * d) / Math.sin(d), B = Math.sin(f * d) / Math.sin(d);
    const x = A * Math.cos(φ1) * Math.cos(λ1) + B * Math.cos(φ2) * Math.cos(λ2);
    const y = A * Math.cos(φ1) * Math.sin(λ1) + B * Math.cos(φ2) * Math.sin(λ2);
    const z = A * Math.sin(φ1) + B * Math.sin(φ2);
    pts.push([deg(Math.atan2(z, Math.hypot(x, y))), deg(Math.atan2(y, x))]);
  }
  return unwrap(pts);
}

/** Gentle quadratic curve, used where we have no real track geometry (rail, unknown ferry). */
export function softCurve(a, b, n = 40, bend = 0.12) {
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

/** Reduce a path to at most max points (keeps both ends). */
export function decimate(c, max = 300) {
  if (c.length <= max) return c;
  const step = (c.length - 1) / (max - 1);
  const out = [];
  for (let i = 0; i < max; i++) out.push(c[Math.round(i * step)]);
  return out;
}

export function centroid(points) {
  let la = 0, lo = 0;
  for (const p of points) { la += p.lat; lo += p.lon; }
  return { lat: la / points.length, lon: lo / points.length };
}
