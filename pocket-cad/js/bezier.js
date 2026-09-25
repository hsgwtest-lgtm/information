// Sketch outlines: a closed loop of points where each edge i -> i+1 is either
// straight (curves[i] == null) or a cubic Bézier with control points
// curves[i] = [[c1x, c1y], [c2x, c2y]].

export const CURVE_STEPS = 24;

export function bezierPoint(p0, c1, c2, p3, t) {
  const u = 1 - t;
  const a = u * u * u, b = 3 * u * u * t, c = 3 * u * t * t, d = t * t * t;
  return [a * p0[0] + b * c1[0] + c * c2[0] + d * p3[0], a * p0[1] + b * c1[1] + c * c2[1] + d * p3[1]];
}

// De Casteljau split at t: returns [leftCurve, midPoint, rightCurve].
export function splitBezier(p0, c1, c2, p3, t) {
  const lerp = (a, b) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];
  const ab = lerp(p0, c1), bc = lerp(c1, c2), cd = lerp(c2, p3);
  const abc = lerp(ab, bc), bcd = lerp(bc, cd);
  const mid = lerp(abc, bcd);
  return [[ab, abc], mid, [bcd, cd]];
}

// Polyline samples of edge i, excluding its end point. Each entry is [x, y, t].
export function edgeSamples(pts, curves, i, steps = CURVE_STEPS) {
  const a = pts[i], b = pts[(i + 1) % pts.length];
  const c = curves && curves[i];
  if (!c) return [[a[0], a[1], 0]];
  const out = [];
  for (let k = 0; k < steps; k++) {
    const t = k / steps;
    out.push([...bezierPoint(a, c[0], c[1], b, t), t]);
  }
  return out;
}

// The whole outline as a closed polyline [[x, y], ...].
export function flattenSketch(pts, curves, steps = CURVE_STEPS) {
  if (!curves || !curves.some(Boolean)) return pts.map(([x, y]) => [x, y]);
  const out = [];
  for (let i = 0; i < pts.length; i++) for (const [x, y] of edgeSamples(pts, curves, i, steps)) out.push([x, y]);
  return out;
}

// Keep curves[] the same length as pts[] (older projects have no curves).
export function normalizeCurves(pts, curves) {
  return pts.map((_, i) => (curves && curves[i]) || null);
}
