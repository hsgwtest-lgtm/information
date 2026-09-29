// Photo → lithophane: a thin plate whose thickness follows image darkness, so the
// picture appears when light shines through it. Flat bottom at z = 0, relief on top.
import { imageLuminance } from './trace.js';

export function lithophaneMesh(img, { width = 100, minT = 0.8, maxT = 3.2, border = 3, res = 0.35, invert = false }) {
  const inner = Math.max(5, width - border * 2);
  const maxSide = Math.min(420, Math.round(inner / res));
  const { lum, w, h } = imageLuminance(img, maxSide);
  const px = inner / w; // mm per pixel
  const bpx = Math.max(0, Math.round(border / px));
  const nx = w + bpx * 2, ny = h + bpx * 2; // cells
  const height = (i, j) => {
    const x = i - bpx, y = j - bpx;
    if (x < 0 || y < 0 || x >= w || y >= h) return maxT;
    const l = lum[y * w + x];
    return invert ? minT + l * (maxT - minT) : maxT - l * (maxT - minT);
  };
  // Vertex grid (nx+1)×(ny+1): each vertex averages its neighbouring cells.
  const VX = nx + 1, VY = ny + 1;
  const z = new Float32Array(VX * VY);
  for (let j = 0; j < VY; j++) {
    for (let i = 0; i < VX; i++) {
      let s = 0, c = 0;
      for (const [di, dj] of [[-1, -1], [0, -1], [-1, 0], [0, 0]]) {
        const ci = i + di, cj = j + dj;
        if (ci >= 0 && cj >= 0 && ci < nx && cj < ny) { s += height(ci, cj); c++; }
      }
      z[j * VX + i] = s / c;
    }
  }
  const W = nx * px, H = ny * px;
  // Image row 0 is the top of the picture -> largest y.
  const X = (i) => i * px - W / 2, Y = (j) => H / 2 - j * px;
  const tris = [];
  const tri = (a, b, c) => tris.push(...a, ...b, ...c);
  const top = (i, j) => [X(i), Y(j), z[j * VX + i]];
  const bot = (i, j) => [X(i), Y(j), 0];
  for (let j = 0; j < ny; j++) {
    for (let i = 0; i < nx; i++) {
      // y decreases with j, so (i,j)->(i+1,j)->(i+1,j+1) is clockwise from above; flip for +Z normals.
      tri(top(i, j), top(i + 1, j + 1), top(i + 1, j));
      tri(top(i, j), top(i, j + 1), top(i + 1, j + 1));
    }
  }
  // Boundary walk (counter-clockwise from above) shared by the walls and the bottom fan.
  const ring = [];
  for (let i = 0; i < nx; i++) ring.push([i, ny]);
  for (let j = ny; j > 0; j--) ring.push([nx, j]);
  for (let i = nx; i > 0; i--) ring.push([i, 0]);
  for (let j = 0; j < ny; j++) ring.push([0, j]);
  for (let k = 0; k < ring.length; k++) {
    const [i0, j0] = ring[k], [i1, j1] = ring[(k + 1) % ring.length];
    tri(bot(i0, j0), bot(i1, j1), top(i1, j1));
    tri(bot(i0, j0), top(i1, j1), top(i0, j0));
  }
  const c = [0, 0, 0];
  for (let k = 0; k < ring.length; k++) {
    const [i0, j0] = ring[k], [i1, j1] = ring[(k + 1) % ring.length];
    tri(c, bot(i1, j1), bot(i0, j0));
  }
  return { positions: new Float32Array(tris), width: W, depth: H, triangles: tris.length / 9 };
}
