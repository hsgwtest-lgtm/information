// ISO metric coarse threads (bolts, nuts, tapped holes) as watertight meshes.
// The thread surface is a radial height field r(θ, z) = profile(z − P·θ/2π),
// sampled on a θ × z grid and closed with flat caps.
import { BufferGeometry, Float32BufferAttribute } from '../../vendor/vendor.js';

// s: hex across flats, k: hex head height, m: nut height, dk/ks: socket head diameter / hex key.
export const ISO = {
  M2: { d: 2, p: 0.4, s: 4, k: 1.4, m: 1.6, dk: 3.8, ks: 1.5 },
  'M2.5': { d: 2.5, p: 0.45, s: 5, k: 1.7, m: 2, dk: 4.5, ks: 2 },
  M3: { d: 3, p: 0.5, s: 5.5, k: 2, m: 2.4, dk: 5.5, ks: 2.5 },
  M4: { d: 4, p: 0.7, s: 7, k: 2.8, m: 3.2, dk: 7, ks: 3 },
  M5: { d: 5, p: 0.8, s: 8, k: 3.5, m: 4.7, dk: 8.5, ks: 4 },
  M6: { d: 6, p: 1, s: 10, k: 4, m: 5.2, dk: 10, ks: 5 },
  M8: { d: 8, p: 1.25, s: 13, k: 5.3, m: 6.8, dk: 13, ks: 6 },
  M10: { d: 10, p: 1.5, s: 16, k: 6.4, m: 8.4, dk: 16, ks: 8 },
  M12: { d: 12, p: 1.75, s: 18, k: 7.5, m: 10.8, dk: 18, ks: 10 },
  M16: { d: 16, p: 2, s: 24, k: 10, m: 14.8, dk: 24, ks: 14 },
  M20: { d: 20, p: 2.5, s: 30, k: 12.5, m: 18, dk: 30, ks: 17 },
};
export const SIZES = Object.keys(ISO);

// Basic ISO 68-1 profile over one pitch (u in [0, 1)): crest P/8, flanks at 60°, root P/4.
function profile(u, rMaj, depth) {
  if (u < 0.125) return rMaj;
  if (u < 0.4375) return rMaj - depth * (u - 0.125) / 0.3125;
  if (u < 0.6875) return rMaj - depth;
  return rMaj - depth + depth * (u - 0.6875) / 0.3125;
}

// Thread solid from z = z0 to z = z1 (Z-up).
//  clearance: radial offset (+ grows the solid; use + for hole shapes so the nut is looser)
//  chamfer:  'out' narrows both ends 45° (bolt tips), 'in' flares both ends (hole entry)
//  ends:     which ends get the chamfer ([bottom, top])
export function threadGeometry({ d, p, z0, z1, clearance = 0, segs = 48, chamfer = 'out', ends = [true, true] }) {
  const rMaj = d / 2 + clearance;
  const depth = 0.5413 * p;
  const rMin = rMaj - depth;
  const len = z1 - z0;
  const rowsPerPitch = 12;
  const rows = Math.max(2, Math.ceil(len / p * rowsPerPitch));
  const N = Math.max(12, segs);
  const pos = [];
  for (let j = 0; j <= rows; j++) {
    const z = z0 + len * j / rows;
    const fromBottom = z - z0, fromTop = z1 - z;
    for (let i = 0; i < N; i++) {
      const th = (i / N) * Math.PI * 2;
      let u = ((z - p * i / N) / p) % 1;
      if (u < 0) u += 1;
      let r = profile(u, rMaj, depth);
      if (chamfer === 'out') {
        if (ends[0]) r = Math.min(r, rMin + fromBottom);
        if (ends[1]) r = Math.min(r, rMin + fromTop);
      } else if (chamfer === 'in') {
        // Countersink-like entry: wider than the major diameter at the very end.
        const flare = rMaj + 0.6 * depth + 0.5;
        if (ends[0]) r = Math.max(r, flare - fromBottom);
        if (ends[1]) r = Math.max(r, flare - fromTop);
      }
      pos.push(r * Math.cos(th), r * Math.sin(th), z);
    }
  }
  const bottom = pos.length / 3; pos.push(0, 0, z0);
  const top = bottom + 1; pos.push(0, 0, z1);
  const idx = [];
  const v = (i, j) => j * N + (i % N);
  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < N; i++) {
      const a = v(i, j), b = v(i + 1, j), c = v(i + 1, j + 1), e = v(i, j + 1);
      idx.push(a, b, c, a, c, e);
    }
  }
  for (let i = 0; i < N; i++) {
    idx.push(bottom, v(i + 1, 0), v(i, 0));
    idx.push(top, v(i, rows), v(i + 1, rows));
  }
  const g = new BufferGeometry();
  g.setAttribute('position', new Float32BufferAttribute(pos, 3));
  g.setIndex(idx);
  return g;
}
