// Printability analysis: overhangs, orientation search and print time / cost estimates.
import { Matrix4, Vector3 } from '../../vendor/vendor.js';

const OVERHANG_COS = Math.cos(Math.PI / 4); // faces within 45° of facing straight down

// Walks world-space triangles of (geometry, matrix) pairs.
function forEachTri(parts, fn) {
  const a = new Vector3(), b = new Vector3(), c = new Vector3();
  const ab = new Vector3(), ac = new Vector3(), n = new Vector3();
  for (const { geometry, matrix } of parts) {
    const p = geometry.getAttribute('position').array;
    const flip = matrix.determinant() < 0;
    for (let i = 0; i < p.length; i += 9) {
      a.set(p[i], p[i + 1], p[i + 2]).applyMatrix4(matrix);
      b.set(p[i + 3], p[i + 4], p[i + 5]).applyMatrix4(matrix);
      c.set(p[i + 6], p[i + 7], p[i + 8]).applyMatrix4(matrix);
      if (flip) { const t = b.clone(); b.copy(c); c.copy(t); }
      n.crossVectors(ab.subVectors(b, a), ac.subVectors(c, a));
      const area2 = n.length();
      if (area2 < 1e-12) continue;
      n.divideScalar(area2);
      fn(a, b, c, n, area2 / 2);
    }
  }
}

// Overhanging triangles (world coords) that are not resting on the plate at floorZ.
export function overhangs(parts, floorZ = 0) {
  const out = [];
  let area = 0, contact = 0, surface = 0;
  forEachTri(parts, (a, b, c, n, ar) => {
    surface += ar;
    if (n.z > -OVERHANG_COS) return;
    if (Math.max(a.z, b.z, c.z) < floorZ + 0.05) { contact += ar; return; }
    area += ar;
    out.push(a.x, a.y, a.z, b.x, b.y, b.z, c.x, c.y, c.z);
  });
  return { positions: new Float32Array(out), area, contact, surface };
}

// The 24 axis-aligned rotations.
function cubeRotations() {
  const res = [];
  const axes = [[1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1]];
  for (const x of axes) for (const y of axes) {
    if (x[0] * y[0] + x[1] * y[1] + x[2] * y[2] !== 0) continue;
    const z = [x[1] * y[2] - x[2] * y[1], x[2] * y[0] - x[0] * y[2], x[0] * y[1] - x[1] * y[0]];
    res.push(new Matrix4().set(x[0], y[0], z[0], 0, x[1], y[1], z[1], 0, x[2], y[2], z[2], 0, 0, 0, 0, 1));
  }
  return res;
}

// Finds the orientation (applied on top of `rotation`) with the least support.
// Returns { matrix (extra world rotation), before, after } overhang areas in mm².
export function bestOrientation(geometry, rotation) {
  let best = null, before = null;
  for (const C of cubeRotations()) {
    const m = C.clone().multiply(rotation);
    let zmin = Infinity, zmax = -Infinity;
    const p = geometry.getAttribute('position').array;
    const v = new Vector3();
    for (let i = 0; i < p.length; i += 3) { v.set(p[i], p[i + 1], p[i + 2]).applyMatrix4(m); zmin = Math.min(zmin, v.z); zmax = Math.max(zmax, v.z); }
    const r = overhangs([{ geometry, matrix: m }], zmin);
    // Less overhang first; then a larger footprint (better adhesion) and a lower part.
    const score = r.area - 0.25 * r.contact + 0.02 * (zmax - zmin);
    const isIdentity = C.elements.every((e, i) => e === [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1][i]);
    if (isIdentity) before = r.area;
    if (!best || score < best.score - 1e-6) best = { score, matrix: C, after: r.area };
  }
  return { matrix: best.matrix, before, after: best.after };
}

export const PRINT_DEFAULTS = { layer: 0.2, infill: 15, walls: 2, line: 0.45, speed: 60, price: 2500 };

// Rough FDM estimate. volume / surface in mm³ / mm², density g/cm³.
export function estimatePrint({ volume, surface, height, density }, s = PRINT_DEFAULTS) {
  const shellT = s.walls * s.line;
  const shell = Math.min(volume, surface * shellT * 0.5 + surface * s.layer * 0.5);
  const material = shell + Math.max(0, volume - shell) * (s.infill / 100);
  const grams = material / 1000 * density;
  const meters = material / (Math.PI * 0.875 * 0.875) / 1000; // 1.75 mm filament
  const flow = s.line * s.layer * s.speed * 0.6; // mm³/s, 0.6 = accel/travel overhead
  const layers = Math.ceil(height / s.layer);
  const seconds = material / flow + layers * 4;
  const yen = grams / 1000 * s.price;
  return { grams, meters, seconds, yen, layers };
}

export function formatDuration(sec) {
  const m = Math.round(sec / 60);
  if (m < 60) return `${m} 分`;
  return `${Math.floor(m / 60)} 時間 ${m % 60} 分`;
}
