// Loft through stacked rounded rectangles: chamfered boxes, Gridfinity bases, drafted walls.
// layers: [{ w, d, r, z }] bottom → top. Every layer uses the same vertex count so the
// side walls are simple quads; flat caps close the solid.
import { BufferGeometry, Float32BufferAttribute } from '../../vendor/vendor.js';

const K = 6; // segments per corner

function ring({ w, d, r }) {
  r = Math.max(0.01, Math.min(r, w / 2 - 0.005, d / 2 - 0.005));
  const cx = w / 2 - r, cy = d / 2 - r;
  const pts = [];
  const corners = [[cx, -cy, -Math.PI / 2], [cx, cy, 0], [-cx, cy, Math.PI / 2], [-cx, -cy, Math.PI]];
  for (const [x, y, a0] of corners) {
    for (let k = 0; k <= K; k++) {
      const a = a0 + (k / K) * (Math.PI / 2);
      pts.push([x + r * Math.cos(a), y + r * Math.sin(a)]);
    }
  }
  return pts; // counter-clockwise from above
}

export function loftGeometry(layers) {
  const L = layers.filter((l, i) => i === 0 || l.z > layers[i - 1].z + 1e-6);
  if (L.length < 2) return null;
  const rings = L.map(ring);
  const N = rings[0].length;
  const pos = [];
  const push = (p, z) => pos.push(p[0], p[1], z);
  for (let j = 0; j < L.length - 1; j++) {
    const a = rings[j], b = rings[j + 1], za = L[j].z, zb = L[j + 1].z;
    for (let i = 0; i < N; i++) {
      const i2 = (i + 1) % N;
      push(a[i], za); push(a[i2], za); push(b[i2], zb);
      push(a[i], za); push(b[i2], zb); push(b[i], zb);
    }
  }
  const cap = (r, z, up) => {
    for (let i = 0; i < N; i++) {
      const i2 = (i + 1) % N;
      push([0, 0], z);
      if (up) { push(r[i], z); push(r[i2], z); } else { push(r[i2], z); push(r[i], z); }
    }
  };
  cap(rings[0], L[0].z, false);
  cap(rings[rings.length - 1], L[L.length - 1].z, true);
  const g = new BufferGeometry();
  g.setAttribute('position', new Float32BufferAttribute(pos, 3));
  return g;
}

// Box with rounded vertical corners and optional 45° chamfers at bottom / top.
export function chamferBoxLayers({ w, d, h, r = 0, cb = 0, ct = 0 }) {
  // Insetting a rounded rectangle by c shrinks its corner radius by c.
  const inset = (c) => ({ w: w - 2 * c, d: d - 2 * c, r: Math.max(0.01, r - c) });
  cb = Math.max(0, Math.min(cb, h / 2 - 0.01, w / 2 - 0.1, d / 2 - 0.1));
  ct = Math.max(0, Math.min(ct, h / 2 - 0.01, w / 2 - 0.1, d / 2 - 0.1));
  const full = { w, d, r };
  const layers = [];
  if (cb > 0) layers.push({ ...inset(cb), z: 0 });
  layers.push({ ...full, z: cb });
  layers.push({ ...full, z: h - ct });
  if (ct > 0) layers.push({ ...inset(ct), z: h });
  return layers;
}

// Gridfinity base profile for one 42 mm cell (0.8 @45°, 1.8 vertical, 2.15 @45°).
export const GRIDFINITY_BASE = [
  { w: 35.6, d: 35.6, r: 0.8, z: 0 },
  { w: 37.2, d: 37.2, r: 1.6, z: 0.8 },
  { w: 37.2, d: 37.2, r: 1.6, z: 2.6 },
  { w: 41.5, d: 41.5, r: 3.75, z: 4.75 },
];
