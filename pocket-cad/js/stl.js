// Binary STL writer and STL (binary/ASCII) reader.
import { STLLoader } from '../vendor/vendor.js';

// parts: [{ geometry (non-indexed positions), matrix (Matrix4) }]
export function toBinarySTL(parts, header = 'Pocket CAD') {
  let triCount = 0;
  for (const p of parts) triCount += p.geometry.getAttribute('position').count / 3;
  const buf = new ArrayBuffer(84 + triCount * 50);
  const dv = new DataView(buf);
  const head = new TextEncoder().encode(header.slice(0, 79));
  new Uint8Array(buf, 0, 80).set(head);
  dv.setUint32(80, triCount, true);
  let o = 84;
  const v = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (const { geometry, matrix } of parts) {
    const a = geometry.getAttribute('position').array;
    const e = matrix.elements;
    const flip = matrix.determinant() < 0;
    for (let i = 0; i < a.length; i += 9) {
      for (let k = 0; k < 3; k++) {
        const x = a[i + k * 3], y = a[i + k * 3 + 1], z = a[i + k * 3 + 2];
        v[k * 3] = e[0] * x + e[4] * y + e[8] * z + e[12];
        v[k * 3 + 1] = e[1] * x + e[5] * y + e[9] * z + e[13];
        v[k * 3 + 2] = e[2] * x + e[6] * y + e[10] * z + e[14];
      }
      if (flip) for (let k = 0; k < 3; k++) { const t = v[3 + k]; v[3 + k] = v[6 + k]; v[6 + k] = t; }
      const ux = v[3] - v[0], uy = v[4] - v[1], uz = v[5] - v[2];
      const wx = v[6] - v[0], wy = v[7] - v[1], wz = v[8] - v[2];
      let nx = uy * wz - uz * wy, ny = uz * wx - ux * wz, nz = ux * wy - uy * wx;
      const len = Math.hypot(nx, ny, nz) || 1;
      dv.setFloat32(o, nx / len, true); dv.setFloat32(o + 4, ny / len, true); dv.setFloat32(o + 8, nz / len, true);
      o += 12;
      for (let k = 0; k < 9; k++) { dv.setFloat32(o, v[k], true); o += 4; }
      dv.setUint16(o, 0, true); o += 2;
    }
  }
  return buf;
}

// Returns a Float32Array of non-indexed triangle positions.
export function parseSTL(arrayBuffer) {
  const g = new STLLoader().parse(arrayBuffer);
  const ng = g.index ? g.toNonIndexed() : g;
  return new Float32Array(ng.getAttribute('position').array);
}
