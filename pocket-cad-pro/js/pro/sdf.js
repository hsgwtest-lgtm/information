// Distance fields on a voxel grid and surface nets: the engine behind 格子化 (Voronoi,
// gyroid) and シェル (hollowing). Runs in sdf-worker.js; pure apart from three-mesh-bvh.
//
// Field convention: negative inside the result, positive outside. Signed distance to the
// part: inside / outside by ray parity along Z (one ray per column), exact distances from
// the BVH only within a band around the surface (clamped beyond it).
import { BufferGeometry, Float32BufferAttribute, MeshBVH, Ray, Vector3, DoubleSide } from '../../vendor/vendor.js';

// ---------------------------------------------------------------- helpers

export function rng(seed) {
  let a = (seed >>> 0) || 1;
  return () => {
    a = (a + 0x6D2B79F5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function bvhOf(pos) {
  const g = new BufferGeometry();
  g.setAttribute('position', new Float32BufferAttribute(pos, 3));
  return new MeshBVH(g);
}

function bounds(pos) {
  const lo = [Infinity, Infinity, Infinity], hi = [-Infinity, -Infinity, -Infinity];
  for (let i = 0; i < pos.length; i += 3) for (let k = 0; k < 3; k++) { lo[k] = Math.min(lo[k], pos[i + k]); hi[k] = Math.max(hi[k], pos[i + k]); }
  return { lo, hi };
}

// Grid of voxel centres covering the part plus `pad` voxels of empty space around it.
export function makeGrid(lo, hi, h, pad = 2) {
  const n = [0, 1, 2].map((k) => Math.ceil((hi[k] - lo[k]) / h) + 2 * pad + 1);
  return { nx: n[0], ny: n[1], nz: n[2], h, o: [0, 1, 2].map((k) => lo[k] - pad * h) };
}

// 1 where the voxel centre is inside the closed mesh (parity of crossings along +Z).
export function insideGrid(bvh, grid) {
  const { nx, ny, nz, h, o } = grid;
  const inside = new Uint8Array(nx * ny * nz);
  const ray = new Ray(new Vector3(), new Vector3(0, 0, 1));
  const z0 = o[2] - h;
  for (let j = 0; j < ny; j++) {
    for (let i = 0; i < nx; i++) {
      let ds = null;
      // Tiny irrational offsets keep rays off the edges of axis-aligned faces.
      for (let tries = 0; tries < 4; tries++) {
        ray.origin.set(o[0] + i * h + h * 0.0137 * (tries + 1), o[1] + j * h + h * 0.0291 * (tries + 1), z0);
        const hits = bvh.raycast(ray, DoubleSide).map((x) => x.distance).sort((a, b) => a - b);
        const u = hits.filter((d, k) => k === 0 || d - hits[k - 1] > 1e-6);
        if (u.length % 2 === 0) { ds = u; break; }
        ds = u;
      }
      let c = 0, p = 0;
      for (let k = 0; k < nz; k++) {
        const t = (k + 1) * h;
        while (p < ds.length && ds[p] < t) { c++; p++; }
        if (c % 2 === 1) inside[i + nx * (j + ny * k)] = 1;
      }
    }
  }
  return inside;
}

// Coarse occupancy: cells of size `cell` that some triangle (grown by `band`) touches.
function nearMask(pos, grid, band) {
  const { h, o } = grid;
  const cs = Math.max(band, h * 4);
  const dims = [grid.nx, grid.ny, grid.nz].map((n) => Math.ceil((n * h) / cs) + 1);
  const m = new Uint8Array(dims[0] * dims[1] * dims[2]);
  const c = (v, k) => Math.max(0, Math.min(dims[k] - 1, Math.floor((v - o[k]) / cs)));
  for (let t = 0; t < pos.length; t += 9) {
    const lo = [0, 1, 2].map((k) => Math.min(pos[t + k], pos[t + 3 + k], pos[t + 6 + k]) - band);
    const hi = [0, 1, 2].map((k) => Math.max(pos[t + k], pos[t + 3 + k], pos[t + 6 + k]) + band);
    for (let x = c(lo[0], 0); x <= c(hi[0], 0); x++) for (let y = c(lo[1], 1); y <= c(hi[1], 1); y++) for (let z = c(lo[2], 2); z <= c(hi[2], 2); z++) {
      m[x + dims[0] * (y + dims[1] * z)] = 1;
    }
  }
  return (x, y, z) => m[Math.floor((x - o[0]) / cs) + dims[0] * (Math.floor((y - o[1]) / cs) + dims[1] * Math.floor((z - o[2]) / cs))] === 1;
}

// Spatial hash of points for nearest-seed queries. Candidate lists (seeds within r cells)
// are cached per cell, since neighbouring voxels ask about the same cell.
function seedIndex(seeds, cell) {
  const OFF = 1 << 11, M = 1 << 12;
  const key = (x, y, z) => ((x + OFF) * M + (y + OFF)) * M + (z + OFF);
  const map = new Map();
  seeds.forEach((s, i) => {
    const k = key(Math.floor(s[0] / cell), Math.floor(s[1] / cell), Math.floor(s[2] / cell));
    const l = map.get(k);
    if (l) l.push(i); else map.set(k, [i]);
  });
  const caches = [null, new Map(), new Map(), new Map(), new Map()];
  const candidates = (cx, cy, cz, r) => {
    const k = key(cx, cy, cz);
    let c = caches[r].get(k);
    if (c) return c;
    c = [];
    for (let x = cx - r; x <= cx + r; x++) for (let y = cy - r; y <= cy + r; y++) for (let z = cz - r; z <= cz + r; z++) {
      const l = map.get(key(x, y, z));
      if (l) for (const i of l) c.push(i);
    }
    caches[r].set(k, c);
    return c;
  };
  const bd = new Float64Array(4), bi = new Int32Array(4);
  // k (≤ 4) nearest seeds to p: [[dist², index], ...] sorted.
  return (p, kn) => {
    const cx = Math.floor(p[0] / cell), cy = Math.floor(p[1] / cell), cz = Math.floor(p[2] / cell);
    for (let r = 1; r <= 4; r++) {
      let n = 0;
      for (const i of candidates(cx, cy, cz, r)) {
        const s = seeds[i];
        const d = (s[0] - p[0]) ** 2 + (s[1] - p[1]) ** 2 + (s[2] - p[2]) ** 2;
        if (n < kn) { let m = n++; while (m > 0 && bd[m - 1] > d) { bd[m] = bd[m - 1]; bi[m] = bi[m - 1]; m--; } bd[m] = d; bi[m] = i; }
        else if (d < bd[kn - 1]) { let m = kn - 1; while (m > 0 && bd[m - 1] > d) { bd[m] = bd[m - 1]; bi[m] = bi[m - 1]; m--; } bd[m] = d; bi[m] = i; }
      }
      // Anything outside r cells is at least r * cell away.
      if ((n === kn && bd[kn - 1] <= (r * cell) ** 2) || r === 4) return Array.from({ length: n }, (_, m) => [bd[m], bi[m]]);
    }
    return [];
  };
}

// Distance from p to the bisector plane between seeds a (nearer) and b.
function bisector(p, a, b) {
  const dx = b[0] - a[0], dy = b[1] - a[1], dz = b[2] - a[2];
  const l = Math.hypot(dx, dy, dz) || 1e-9;
  const da = (p[0] - a[0]) ** 2 + (p[1] - a[1]) ** 2 + (p[2] - a[2]) ** 2;
  const db = (p[0] - b[0]) ** 2 + (p[1] - b[1]) ** 2 + (p[2] - b[2]) ** 2;
  return (db - da) / (2 * l);
}

// Evenly spread points on the surface (dart throwing, area weighted candidates).
function surfaceSeeds(pos, cell, rand) {
  const nt = pos.length / 9, cum = new Float64Array(nt);
  let total = 0;
  for (let t = 0; t < nt; t++) {
    const o = t * 9;
    const ax = pos[o + 3] - pos[o], ay = pos[o + 4] - pos[o + 1], az = pos[o + 5] - pos[o + 2];
    const bx = pos[o + 6] - pos[o], by = pos[o + 7] - pos[o + 1], bz = pos[o + 8] - pos[o + 2];
    total += Math.hypot(ay * bz - az * by, az * bx - ax * bz, ax * by - ay * bx) / 2;
    cum[t] = total;
  }
  const want = Math.min(200000, Math.ceil((total / (cell * cell)) * 30));
  const seeds = [], grid = new Map();
  const key = (p) => `${Math.floor(p[0] / cell)},${Math.floor(p[1] / cell)},${Math.floor(p[2] / cell)}`;
  for (let c = 0; c < want; c++) {
    const r = rand() * total;
    let lo = 0, hi = nt - 1;
    while (lo < hi) { const m = (lo + hi) >> 1; if (cum[m] < r) lo = m + 1; else hi = m; }
    const o = lo * 9;
    let u = rand(), v = rand();
    if (u + v > 1) { u = 1 - u; v = 1 - v; }
    const p = [0, 1, 2].map((k) => pos[o + k] + u * (pos[o + 3 + k] - pos[o + k]) + v * (pos[o + 6 + k] - pos[o + k]));
    const cx = Math.floor(p[0] / cell), cy = Math.floor(p[1] / cell), cz = Math.floor(p[2] / cell);
    let ok = true;
    for (let x = cx - 1; x <= cx + 1 && ok; x++) for (let y = cy - 1; y <= cy + 1 && ok; y++) for (let z = cz - 1; z <= cz + 1 && ok; z++) {
      for (const s of grid.get(`${x},${y},${z}`) || []) if ((s[0] - p[0]) ** 2 + (s[1] - p[1]) ** 2 + (s[2] - p[2]) ** 2 < cell * cell) { ok = false; break; }
    }
    if (!ok) continue;
    seeds.push(p);
    const k = key(p);
    const l = grid.get(k);
    if (l) l.push(p); else grid.set(k, [p]);
  }
  return seeds;
}

// Evenly spread points inside the part.
function volumeSeeds(grid, inside, cell, rand) {
  const { nx, ny, nz, h, o } = grid;
  const vol = inside.reduce((s, v) => s + v, 0) * h ** 3;
  const want = Math.min(200000, Math.ceil((vol / cell ** 3) * 30));
  const seeds = [], map = new Map();
  for (let c = 0; c < want * 3 && seeds.length < want; c++) {
    const i = Math.floor(rand() * nx), j = Math.floor(rand() * ny), k = Math.floor(rand() * nz);
    if (!inside[i + nx * (j + ny * k)]) continue;
    const p = [o[0] + (i + rand() - 0.5) * h, o[1] + (j + rand() - 0.5) * h, o[2] + (k + rand() - 0.5) * h];
    const cx = Math.floor(p[0] / cell), cy = Math.floor(p[1] / cell), cz = Math.floor(p[2] / cell);
    let ok = true;
    for (let x = cx - 1; x <= cx + 1 && ok; x++) for (let y = cy - 1; y <= cy + 1 && ok; y++) for (let z = cz - 1; z <= cz + 1 && ok; z++) {
      for (const s of map.get(`${x},${y},${z}`) || []) if ((s[0] - p[0]) ** 2 + (s[1] - p[1]) ** 2 + (s[2] - p[2]) ** 2 < cell * cell) { ok = false; break; }
    }
    if (!ok) continue;
    seeds.push(p);
    const key = `${cx},${cy},${cz}`;
    const l = map.get(key);
    if (l) l.push(p); else map.set(key, [p]);
  }
  return seeds;
}

// ---------------------------------------------------------------- surface nets

// Closed triangle soup of the zero level set of F (negative = inside). The grid's outer
// layer must be positive. One vertex per sign-changing cell (average of edge crossings),
// one quad per sign-changing grid edge.
export function surfaceNets(F, grid) {
  const { nx, ny, nz, h, o } = grid;
  const idx = (i, j, k) => i + nx * (j + ny * k);
  const cx = nx - 1, cy = ny - 1, cz = nz - 1;
  const cellV = new Int32Array(cx * cy * cz).fill(-1);
  const verts = [];
  const corner = [[0, 0, 0], [1, 0, 0], [0, 1, 0], [1, 1, 0], [0, 0, 1], [1, 0, 1], [0, 1, 1], [1, 1, 1]];
  const EDGES = [[0, 1], [2, 3], [4, 5], [6, 7], [0, 2], [1, 3], [4, 6], [5, 7], [0, 4], [1, 5], [2, 6], [3, 7]];
  const val = new Float64Array(8);
  for (let k = 0; k < cz; k++) {
    for (let j = 0; j < cy; j++) {
      for (let i = 0; i < cx; i++) {
        let mask = 0;
        for (let c = 0; c < 8; c++) {
          const v = F[idx(i + corner[c][0], j + corner[c][1], k + corner[c][2])];
          val[c] = v;
          if (v < 0) mask |= 1 << c;
        }
        if (mask === 0 || mask === 255) continue;
        let sx = 0, sy = 0, sz = 0, n = 0;
        for (const [a, b] of EDGES) {
          if ((val[a] < 0) === (val[b] < 0)) continue;
          const t = val[a] / (val[a] - val[b]);
          sx += corner[a][0] + t * (corner[b][0] - corner[a][0]);
          sy += corner[a][1] + t * (corner[b][1] - corner[a][1]);
          sz += corner[a][2] + t * (corner[b][2] - corner[a][2]);
          n++;
        }
        cellV[i + cx * (j + cy * k)] = verts.length / 3;
        verts.push(o[0] + (i + sx / n) * h, o[1] + (j + sy / n) * h, o[2] + (k + sz / n) * h);
      }
    }
  }
  const cv = (i, j, k) => cellV[i + cx * (j + cy * k)];
  const quads = [];
  const quad = (a, b, c, d, flip) => { if (flip) quads.push(a, d, c, b); else quads.push(a, b, c, d); };
  for (let k = 1; k < nz - 1; k++) {
    for (let j = 1; j < ny - 1; j++) {
      for (let i = 0; i < nx - 1; i++) {
        // Edge along X from (i,j,k): cells around it share the edge.
        const s0 = F[idx(i, j, k)] < 0, s1 = F[idx(i + 1, j, k)] < 0;
        if (s0 !== s1) quad(cv(i, j - 1, k - 1), cv(i, j, k - 1), cv(i, j, k), cv(i, j - 1, k), s1);
      }
    }
  }
  for (let k = 1; k < nz - 1; k++) {
    for (let j = 0; j < ny - 1; j++) {
      for (let i = 1; i < nx - 1; i++) {
        const s0 = F[idx(i, j, k)] < 0, s1 = F[idx(i, j + 1, k)] < 0;
        if (s0 !== s1) quad(cv(i - 1, j, k - 1), cv(i - 1, j, k), cv(i, j, k), cv(i, j, k - 1), s1);
      }
    }
  }
  for (let k = 0; k < nz - 1; k++) {
    for (let j = 1; j < ny - 1; j++) {
      for (let i = 1; i < nx - 1; i++) {
        const s0 = F[idx(i, j, k)] < 0, s1 = F[idx(i, j, k + 1)] < 0;
        if (s0 !== s1) quad(cv(i - 1, j - 1, k), cv(i, j - 1, k), cv(i, j, k), cv(i - 1, j, k), s1);
      }
    }
  }
  return { verts: new Float64Array(verts), quads: new Int32Array(quads) };
}

// Quads → triangles (shorter diagonal), dropping pieces whose volume is below minVol.
export function meshFromNets({ verts, quads }, minVol = 0) {
  const nq = quads.length / 4;
  const P = (i) => [verts[i * 3], verts[i * 3 + 1], verts[i * 3 + 2]];
  // Connected pieces by shared vertices.
  const parent = new Int32Array(verts.length / 3).map((_, i) => i);
  const find = (x) => { while (parent[x] !== x) { parent[x] = parent[parent[x]]; x = parent[x]; } return x; };
  for (let q = 0; q < nq; q++) for (let c = 1; c < 4; c++) { const a = find(quads[q * 4]), b = find(quads[q * 4 + c]); if (a !== b) parent[b] = a; }
  const tri = [];
  const part = [];
  for (let q = 0; q < nq; q++) {
    const [a, b, c, d] = [0, 1, 2, 3].map((k) => quads[q * 4 + k]);
    const pa = P(a), pb = P(b), pc = P(c), pd = P(d);
    const dac = (pa[0] - pc[0]) ** 2 + (pa[1] - pc[1]) ** 2 + (pa[2] - pc[2]) ** 2;
    const dbd = (pb[0] - pd[0]) ** 2 + (pb[1] - pd[1]) ** 2 + (pb[2] - pd[2]) ** 2;
    const r = find(a);
    if (dac <= dbd) { tri.push(pa, pb, pc, pa, pc, pd); } else { tri.push(pa, pb, pd, pb, pc, pd); }
    part.push(r, r);
  }
  const vol = new Map();
  for (let t = 0; t < tri.length / 3; t++) {
    const [a, b, c] = [tri[t * 3], tri[t * 3 + 1], tri[t * 3 + 2]];
    const v = (a[0] * (b[1] * c[2] - b[2] * c[1]) - a[1] * (b[0] * c[2] - b[2] * c[0]) + a[2] * (b[0] * c[1] - b[1] * c[0])) / 6;
    vol.set(part[t], (vol.get(part[t]) || 0) + v);
  }
  const keep = new Set([...vol].filter(([, v]) => Math.abs(v) >= minVol).map(([k]) => k));
  const out = [];
  for (let t = 0; t < tri.length / 3; t++) {
    if (!keep.has(part[t])) continue;
    for (let k = 0; k < 3; k++) out.push(...tri[t * 3 + k]);
  }
  let total = 0;
  for (const k of keep) total += vol.get(k);
  return { positions: new Float32Array(out), volume: Math.abs(total), pieces: keep.size, dropped: vol.size - keep.size };
}

// ---------------------------------------------------------------- jobs

// Lattice of a solid. opts: { type: 'surface' | 'voronoi' | 'gyroid', cell, width,
// thick (surface lattice depth), skin (outer skin for voronoi / gyroid, 0 = none), seed, h }.
export function latticeJob(pos, opts, progress = () => {}) {
  const { lo, hi } = bounds(pos);
  const h = opts.h;
  const grid = makeGrid(lo, hi, h, 2);
  const { nx, ny, nz, o } = grid;
  const bvh = bvhOf(pos);
  progress(0.05, '内外を判定中');
  const inside = insideGrid(bvh, grid);
  const w2 = opts.width / 2;
  const skin = opts.type === 'surface' ? opts.thick : (opts.skin || 0);
  const band = Math.max(skin, opts.type === 'voronoi' && opts.frame ? opts.width : 0) + w2 + 3 * h;
  const near = nearMask(pos, grid, band);
  const rand = rng(opts.seed || 1);
  let seeds = null, nearest = null, fseeds = null, fnear = null;
  if (opts.type === 'surface') seeds = surfaceSeeds(pos, opts.cell, rand);
  else if (opts.type === 'voronoi') seeds = volumeSeeds(grid, inside, opts.cell, rand);
  if (seeds) nearest = seedIndex(seeds, opts.cell);
  // Optional surface frame for the 3D lattice, so struts end on a net instead of in stubs.
  if (opts.type === 'voronoi' && opts.frame) { fseeds = surfaceSeeds(pos, opts.cell, rand); fnear = seedIndex(fseeds, opts.cell); }
  const F = new Float32Array(nx * ny * nz).fill(1e3);
  const p = new Vector3(), hit = {};
  const k2 = (2 * Math.PI) / opts.cell;
  const gyroid = (x, y, z) => {
    const sx = Math.sin(k2 * x), cx = Math.cos(k2 * x), sy = Math.sin(k2 * y), cy = Math.cos(k2 * y), sz = Math.sin(k2 * z), cz = Math.cos(k2 * z);
    const g = sx * cy + sy * cz + sz * cx;
    const gx = k2 * (cx * cy - sz * sx), gy = k2 * (-sx * sy + cy * cz), gz = k2 * (-sy * sz + cz * cx);
    return Math.abs(g) / Math.max(Math.hypot(gx, gy, gz), 0.3 * k2);
  };
  for (let k = 1; k < nz - 1; k++) {
    if (k % 8 === 0) progress(0.1 + 0.75 * (k / nz), '形を計算中');
    for (let j = 1; j < ny - 1; j++) {
      for (let i = 1; i < nx - 1; i++) {
        const x = o[0] + i * h, y = o[1] + j * h, z = o[2] + k * h;
        const id = i + nx * (j + ny * k);
        const ins = inside[id] === 1;
        let d = band, q = null;
        if (near(x, y, z)) {
          p.set(x, y, z);
          const r = bvh.closestPointToPoint(p, hit, 0, band);
          if (r) { d = r.distance; q = [r.point.x, r.point.y, r.point.z]; }
        }
        const sd = ins ? -d : d;
        let f;
        if (opts.type === 'surface') {
          if (!q) { F[id] = Math.max(sd, -sd - skin); if (F[id] < 0) F[id] = 1; continue; }
          const ns = nearest(q, 2);
          const b = ns.length === 2 ? bisector(q, seeds[ns[0][1]], seeds[ns[1][1]]) : band;
          f = Math.max(sd, -sd - skin, b - w2);
        } else {
          let strut;
          if (opts.type === 'gyroid') strut = gyroid(x, y, z) - w2;
          else {
            const ns = nearest([x, y, z], 3);
            if (ns.length < 3) strut = band;
            else {
              // Distance to the Voronoi edge of cells 1, 2, 3: the line where the bisector
              // planes (1,2) and (1,3) meet.
              const s1 = seeds[ns[0][1]], s2 = seeds[ns[1][1]], s3 = seeds[ns[2][1]], P3 = [x, y, z];
              const b2 = bisector(P3, s1, s2), b3 = bisector(P3, s1, s3);
              const a = [s2[0] - s1[0], s2[1] - s1[1], s2[2] - s1[2]], c = [s3[0] - s1[0], s3[1] - s1[1], s3[2] - s1[2]];
              const cos = (a[0] * c[0] + a[1] * c[1] + a[2] * c[2]) / (Math.hypot(...a) * Math.hypot(...c) || 1);
              const sin2 = 1 - cos * cos;
              strut = (sin2 < 1e-3 ? Math.max(b2, b3) : Math.sqrt(Math.max(0, b2 * b2 + b3 * b3 - 2 * b2 * b3 * cos) / sin2)) - w2;
            }
          }
          f = Math.max(sd, strut);
          if (skin > 0) f = Math.min(f, Math.max(sd, -sd - skin));
          if (fnear && q) {
            const ns = fnear(q, 2);
            if (ns.length === 2) f = Math.min(f, Math.max(sd, -sd - opts.width, bisector(q, fseeds[ns[0][1]], fseeds[ns[1][1]]) - w2));
          }
        }
        F[id] = f;
      }
    }
  }
  progress(0.88, 'メッシュを作成中');
  const nets = surfaceNets(F, grid);
  const res = meshFromNets(nets, Math.max(2, h ** 3 * 8));
  return { ...res, seeds: seeds ? seeds.length : 0, grid: [nx, ny, nz] };
}

// Inner solid for hollowing: everything deeper than `thick` below the surface, where the
// faces flagged in `open` (per triangle) do not count as surface, so the hollow opens
// through them. Subtracting the result from the part leaves walls of `thick`.
export function shellJob(pos, open, opts, progress = () => {}) {
  const { lo, hi } = bounds(pos);
  const h = opts.h, t = opts.thick;
  const grid = makeGrid(lo, hi, h, 3);
  const { nx, ny, nz, o } = grid;
  const bvh = bvhOf(pos);
  const anyOpen = open && open.some((v) => v);
  let bvhX = bvh;
  if (anyOpen) {
    const keep = [];
    for (let tr = 0; tr < pos.length / 9; tr++) if (!open[tr]) for (let k = 0; k < 9; k++) keep.push(pos[tr * 9 + k]);
    bvhX = bvhOf(new Float32Array(keep));
  }
  progress(0.05, '内外を判定中');
  const inside = insideGrid(bvh, grid);
  const lift = 2 * h + 0.5; // the hollow pokes this far out through open faces
  const bandF = lift + 2 * h, bandX = t + 3 * h;
  const near = nearMask(pos, grid, Math.max(bandF, bandX));
  const F = new Float32Array(nx * ny * nz).fill(1e3);
  const p = new Vector3(), hit = {}, hitX = {};
  for (let k = 1; k < nz - 1; k++) {
    if (k % 8 === 0) progress(0.1 + 0.75 * (k / nz), '内側の形を計算中');
    for (let j = 1; j < ny - 1; j++) {
      for (let i = 1; i < nx - 1; i++) {
        const id = i + nx * (j + ny * k);
        const ins = inside[id] === 1;
        const x = o[0] + i * h, y = o[1] + j * h, z = o[2] + k * h;
        if (!near(x, y, z)) { F[id] = ins ? -1 : 1; continue; }
        p.set(x, y, z);
        const rf = bvh.closestPointToPoint(p, hit, 0, bandF);
        let rsd = ins ? -(rf ? rf.distance : bandF) : (rf ? rf.distance : bandF);
        if (rf && anyOpen && open[rf.faceIndex]) rsd -= lift;
        const rx = anyOpen ? bvhX.closestPointToPoint(p, hitX, 0, bandX) : (rf && rf.distance <= bandX ? rf : bvh.closestPointToPoint(p, hitX, 0, bandX));
        const dx = rx ? rx.distance : bandX;
        F[id] = Math.max(rsd, t - dx);
      }
    }
  }
  progress(0.88, 'メッシュを作成中');
  const res = meshFromNets(surfaceNets(F, grid), Math.max(1, h ** 3 * 4));
  return { ...res, grid: [nx, ny, nz] };
}

// Voxel size for a part of size `span` (largest side) at quality q (0..2): the thinnest
// feature `minFeature` gets at least 2.2 / 2.6 / 3.2 voxels across.
export function voxelSize(span, q, minFeature = Infinity) {
  const n = [64, 96, 136][q] ?? 96, f = [2.2, 2.6, 3.2][q] ?? 2.6;
  return Math.max(span / 220, Math.min(span / n, minFeature / f));
}
