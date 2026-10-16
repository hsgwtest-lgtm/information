// Topology optimization (SIMP) of a flat plate: finds where material is needed to carry
// the loads to the supports. The result is extruded to a thickness and printed flat, so
// the loads run along the layers (the strongest direction of an FDM print).
//
// Pure JS (no DOM, no three.js): it runs in topopt-worker.js and, as a fallback, on the
// main thread. Units: mm, N, MPa. The plate lies in the XY plane, y up, origin at the
// lower-left corner of the design area.
//
// Method: 4-node plane-stress elements on a regular grid, density filter, optimality
// criteria update (Andreassen et al., "Efficient topology optimization in MATLAB using
// 88 lines of code", 2011). The stiffness system is solved with a banded Cholesky
// factorization, numbered along the shorter side to keep the band narrow.

export const QUALITY = [2400, 4800, 8000]; // target element counts: fast / normal / fine
const NU = 0.33; // Poisson's ratio of printed thermoplastics

// Starting points for the editor. Coordinates in mm from the lower-left corner.
export const PRESETS = [
  {
    id: 'bracket', label: '壁ブラケット', desc: 'ネジ 2 本で壁に固定し、先端の穴で物を吊る',
    spec: { W: 100, H: 60, t: 6, vol: 0.3, edges: {}, items: [
      { type: 'fix', x: 10, y: 12, d: 5, ring: 4, dir: 'xy' },
      { type: 'fix', x: 10, y: 48, d: 5, ring: 4, dir: 'xy' },
      { type: 'load', x: 88, y: 16, d: 6, ring: 4, angle: -90, force: 100 },
    ] },
  },
  {
    id: 'shelf', label: '棚受け', desc: '上の辺に棚板の重さがかかる L 字の受け',
    spec: { W: 80, H: 80, t: 5, vol: 0.25, edges: { top: { type: 'load', angle: -90, force: 150 } }, items: [
      { type: 'fix', x: 6, y: 70, d: 4.5, ring: 3.5, dir: 'xy' },
      { type: 'fix', x: 6, y: 26, d: 4.5, ring: 3.5, dir: 'xy' },
    ] },
  },
  {
    id: 'bridge', label: '橋（両端支持）', desc: '両端で支え、中央に荷重。右端は横にすべる支点',
    spec: { W: 160, H: 40, t: 8, vol: 0.35, edges: {}, items: [
      { type: 'fix', x: 6, y: 5, d: 0, ring: 5, dir: 'xy' },
      { type: 'fix', x: 154, y: 5, d: 0, ring: 5, dir: 'y' },
      { type: 'load', x: 80, y: 36, d: 0, ring: 4, angle: -90, force: 200 },
    ] },
  },
  {
    id: 'cantilever', label: '片持ち梁', desc: '左の辺を固定し、右端の中央を押し下げる',
    spec: { W: 120, H: 60, t: 6, vol: 0.35, edges: { left: { type: 'fix', dir: 'xy' } }, items: [
      { type: 'load', x: 116, y: 30, d: 0, ring: 3, angle: -90, force: 100 },
    ] },
  },
];

// ---------------------------------------------------------------- problem setup

// Node numbering that keeps the band narrow: the shorter side varies fastest.
export function nodeIndexer(nnx, nny) {
  const order = nny <= nnx ? 0 : 1;
  return { order, nid: order === 0 ? (i, j) => i * nny + j : (i, j) => j * nnx + i };
}

const EDGES = ['left', 'right', 'bottom', 'top'];
const unit = (deg) => [Math.cos((deg * Math.PI) / 180), Math.sin((deg * Math.PI) / 180)];

// spec (see topology.js): { W, H, vol, quality, separate, edges: { left|right|bottom|top:
//   { type: 'fix', dir } | { type: 'load', angle, force } }, items: [{ type: 'fix'|'load'|'void', ... }] }
// Returns the finite-element problem, or throws with a message for the user.
// `target` overrides the element count given by spec.quality.
export function discretize(spec, target = QUALITY[spec.quality] ?? QUALITY[1]) {
  const W = +spec.W, H = +spec.H;
  if (!(W > 0 && H > 0)) throw new Error('設計領域の幅と高さを入力してください');
  const h0 = Math.sqrt((W * H) / target);
  const nelx = Math.max(10, Math.round(W / h0)), nely = Math.max(6, Math.round(H / h0));
  const hx = W / nelx, hy = H / nely, hm = Math.max(hx, hy);
  const nel = nelx * nely, nnx = nelx + 1, nny = nely + 1, nn = nnx * nny, ndof = 2 * nn;
  const { order, nid } = nodeIndexer(nnx, nny);
  const ecx = (e) => (Math.floor(e / nely) + 0.5) * hx, ecy = (e) => ((e % nely) + 0.5) * hy;
  const nx = (i) => i * hx, ny = (j) => j * hy;
  const passive = new Int8Array(nel);
  const items = spec.items || [];
  const holed = items.filter((it) => it.type === 'fix' || it.type === 'load');

  // Keep-out areas first; the solid rings around holes win over them, the holes win over everything.
  for (const it of items) {
    if (it.type !== 'void') continue;
    const x0 = it.x - it.w / 2, x1 = it.x + it.w / 2, y0 = it.y - it.h / 2, y1 = it.y + it.h / 2;
    for (let e = 0; e < nel; e++) {
      const x = ecx(e), y = ecy(e);
      if (x >= x0 && x <= x1 && y >= y0 && y <= y1) passive[e] = -1;
    }
  }
  // A loaded edge is a contact face (e.g. under a shelf board): keep a thin solid flange along it.
  for (const side of EDGES) {
    if (spec.edges?.[side]?.type !== 'load') continue;
    const th = Math.max(1.2, side === 'left' || side === 'right' ? hx : hy);
    for (let e = 0; e < nel; e++) {
      const x = ecx(e), y = ecy(e);
      const d = side === 'left' ? x : side === 'right' ? W - x : side === 'bottom' ? y : H - y;
      if (d < th) passive[e] = 1;
    }
  }
  const radii = (it) => {
    const r0 = it.d > 0 ? it.d / 2 : 0;
    // Rings thinner than ~1.5 elements would break up on the grid; the part keeps the exact ring.
    return [r0, r0 + Math.max(it.ring || 0, r0 > 0 ? 1.5 * hm : 1.2 * hm)];
  };
  // Per item: elements of its ring (1) and hole (2), used to find the hole's edge nodes.
  const marks = holed.map((it) => {
    const m = new Uint8Array(nel);
    const [r0, r1] = radii(it);
    for (let e = 0; e < nel; e++) {
      const d = Math.hypot(ecx(e) - it.x, ecy(e) - it.y);
      if (d < r0) m[e] = 2; else if (d <= r1) m[e] = 1;
    }
    return m;
  });
  marks.forEach((m) => { for (let e = 0; e < nel; e++) if (m[e] === 1) passive[e] = 1; });
  marks.forEach((m) => { for (let e = 0; e < nel; e++) if (m[e] === 2) passive[e] = -1; });

  // Nodes where an item acts: the rim of its hole (ring and hole elements meet), or the
  // whole pad when it has no hole.
  const elemsOfNode = (i, j) => {
    const out = [];
    for (const [ex, ey] of [[i - 1, j - 1], [i, j - 1], [i - 1, j], [i, j]]) if (ex >= 0 && ey >= 0 && ex < nelx && ey < nely) out.push(ex * nely + ey);
    return out;
  };
  const itemNodes = (k) => {
    const m = marks[k], out = [];
    const hasHole = m.includes(2);
    for (let i = 0; i < nnx; i++) {
      for (let j = 0; j < nny; j++) {
        const es = elemsOfNode(i, j);
        const ring = es.some((e) => m[e] === 1), hole = es.some((e) => m[e] === 2);
        if (hasHole ? ring && hole : ring) out.push([i, j]);
      }
    }
    return out;
  };

  const fixed = new Uint8Array(ndof);
  const fix = (i, j, dir) => {
    const n = nid(i, j);
    if (dir !== 'y') fixed[2 * n] = 1;
    if (dir !== 'x') fixed[2 * n + 1] = 1;
  };
  const edgeNodes = (side) => {
    const out = [];
    if (side === 'left' || side === 'right') { const i = side === 'left' ? 0 : nelx; for (let j = 0; j < nny; j++) out.push([i, j]); }
    else { const j = side === 'bottom' ? 0 : nely; for (let i = 0; i < nnx; i++) out.push([i, j]); }
    return out;
  };
  const loadDefs = []; // { nodes: [[i, j]], w: [], dir, force }
  for (const side of EDGES) {
    const e = spec.edges?.[side];
    if (!e) continue;
    const nodes = edgeNodes(side);
    if (e.type === 'fix') nodes.forEach(([i, j]) => fix(i, j, e.dir || 'xy'));
    else if (e.type === 'load' && e.force > 0) {
      // Uniform pressure: end nodes carry half a share.
      loadDefs.push({ nodes, w: nodes.map((_, k) => (k === 0 || k === nodes.length - 1 ? 0.5 : 1)), dir: unit(e.angle), force: e.force, label: side });
    }
  }
  holed.forEach((it, k) => {
    let nodes = itemNodes(k);
    if (!nodes.length) {
      // Smaller than one element: use the nearest node.
      const i = Math.min(nelx, Math.max(0, Math.round(it.x / hx))), j = Math.min(nely, Math.max(0, Math.round(it.y / hy)));
      nodes = [[i, j]];
    }
    if (it.type === 'fix') nodes.forEach(([i, j]) => fix(i, j, it.dir || 'xy'));
    else if (it.force > 0) {
      const dir = unit(it.angle);
      let w = nodes.map(() => 1);
      if (it.d > 0) {
        // A pin pushes on the half of the hole that faces the load (bearing).
        const b = nodes.map(([i, j]) => {
          const vx = nx(i) - it.x, vy = ny(j) - it.y, l = Math.hypot(vx, vy) || 1;
          return Math.max(0, (vx * dir[0] + vy * dir[1]) / l);
        });
        if (b.reduce((s, v) => s + v, 0) > 1e-6) w = b;
      }
      loadDefs.push({ nodes, w, dir, force: it.force, label: k });
    }
  });

  if (!fixed.some(Boolean)) throw new Error('固定（ネジ穴・固定する辺）を 1 つ以上追加してください');
  if (!loadDefs.length) throw new Error('荷重を 1 つ以上追加してください');
  if (!rigidlyHeld(fixed, nnx, nny, nid, hx, hy)) throw new Error('固定が足りず、部品が回転・移動できてしまいます。固定を増やすか「全方向」にしてください');

  const cases = spec.separate ? loadDefs.length : 1;
  const loads = Array.from({ length: cases }, () => new Float64Array(ndof));
  const loadInfo = loadDefs.map((L, k) => {
    const sum = L.w.reduce((s, v) => s + v, 0);
    const c = spec.separate ? k : 0;
    const nodeIds = new Int32Array(L.nodes.map(([i, j]) => nid(i, j)));
    const w = new Float64Array(L.w.map((v) => v / sum));
    nodeIds.forEach((n, q) => {
      loads[c][2 * n] += L.force * w[q] * L.dir[0];
      loads[c][2 * n + 1] += L.force * w[q] * L.dir[1];
    });
    return { case: c, nodes: nodeIds, w, dir: L.dir, force: L.force, label: L.label };
  });
  for (const f of loads) for (let d = 0; d < ndof; d++) if (fixed[d]) f[d] = 0;

  const usable = passive.reduce((s, p) => s + (p >= 0 ? 1 : 0), 0);
  const solid = passive.reduce((s, p) => s + (p > 0 ? 1 : 0), 0);
  const warnings = [];
  let vol = Math.min(0.95, Math.max(0.05, +spec.vol || 0.3));
  if (solid >= vol * usable) {
    vol = Math.min(0.95, solid / usable + 0.08);
    warnings.push(`穴の周りの必須部分だけで材料の ${Math.round((solid / usable) * 100)}% を占めるため、材料の割合を ${Math.round(vol * 100)}% にしました`);
  }
  return {
    W, H, nelx, nely, hx, hy, nnx, nny, ndof, order, nu: NU,
    passive, fixed, loads, loadInfo, vol, usable,
    rmin: Math.max(1.5 * hm, 1.0), warnings,
  };
}

// The supports must stop both translations and the rotation of the plate. Each fixed
// DOF removes one rigid-body motion (u = a - θy, v = b + θx); the constraints must reach rank 3.
function rigidlyHeld(fixed, nnx, nny, nid, hx, hy) {
  const M = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  const add = (r) => { for (let a = 0; a < 3; a++) for (let b = 0; b < 3; b++) M[a * 3 + b] += r[a] * r[b]; };
  for (let i = 0; i < nnx; i++) {
    for (let j = 0; j < nny; j++) {
      const n = nid(i, j), x = i * hx, y = j * hy;
      if (fixed[2 * n]) add([1, 0, -y]);
      if (fixed[2 * n + 1]) add([0, 1, x]);
    }
  }
  const det = M[0] * (M[4] * M[8] - M[5] * M[7]) - M[1] * (M[3] * M[8] - M[5] * M[6]) + M[2] * (M[3] * M[7] - M[4] * M[6]);
  const scale = (M[0] + M[4] + 1) * (M[0] + M[4] + 1) * (M[8] + 1);
  return det > 1e-9 * scale;
}

// ---------------------------------------------------------------- finite elements

// 8×8 stiffness of a bilinear plane-stress element (a × b, E = 1, thickness 1).
// Node order: lower-left, lower-right, upper-right, upper-left; DOFs (x, y) per node.
export function elementStiffness(a, b, nu = NU) {
  const k = 1 / (1 - nu * nu);
  const D = [k, k * nu, 0, k * nu, k, 0, 0, 0, 0.5 / (1 + nu)];
  const KE = new Float64Array(64);
  const g = 1 / Math.sqrt(3);
  for (const gx of [-g, g]) {
    for (const gy of [-g, g]) {
      const B = shapeB(a, b, gx, gy);
      for (let p = 0; p < 8; p++) {
        for (let q = 0; q < 8; q++) {
          let s = 0;
          for (let r = 0; r < 3; r++) for (let c = 0; c < 3; c++) s += B[r * 8 + p] * D[r * 3 + c] * B[c * 8 + q];
          KE[p * 8 + q] += (s * a * b) / 4;
        }
      }
    }
  }
  return KE;
}

// Strain-displacement matrix (3×8) at natural coordinates (ξ, η).
function shapeB(a, b, xi, eta) {
  const XI = [-1, 1, 1, -1], ETA = [-1, -1, 1, 1];
  const B = new Float64Array(24);
  for (let k = 0; k < 4; k++) {
    const dx = (XI[k] * (1 + ETA[k] * eta)) / 4 * (2 / a);
    const dy = (ETA[k] * (1 + XI[k] * xi)) / 4 * (2 / b);
    B[2 * k] = dx;
    B[8 + 2 * k + 1] = dy;
    B[16 + 2 * k] = dy;
    B[16 + 2 * k + 1] = dx;
  }
  return B;
}

function buildEdof({ nelx, nely, nnx, nny }) {
  const { nid } = nodeIndexer(nnx, nny);
  const edof = new Int32Array(nelx * nely * 8);
  for (let ex = 0; ex < nelx; ex++) {
    for (let ey = 0; ey < nely; ey++) {
      const o = (ex * nely + ey) * 8;
      const n = [nid(ex, ey), nid(ex + 1, ey), nid(ex + 1, ey + 1), nid(ex, ey + 1)];
      for (let k = 0; k < 4; k++) { edof[o + 2 * k] = 2 * n[k]; edof[o + 2 * k + 1] = 2 * n[k] + 1; }
    }
  }
  return edof;
}

// Banded Cholesky. Lower band storage: row i keeps columns i-bw .. i at A[i*(bw+1) + j-i+bw].
export function cholesky(A, n, bw) {
  const w = bw + 1;
  for (let i = 0; i < n; i++) {
    const ri = i * w - i + bw;
    const j0 = i > bw ? i - bw : 0;
    for (let j = j0; j <= i; j++) {
      const rj = j * w - j + bw;
      // Dot product of the two rows, unrolled by four (the hot loop of the whole optimizer).
      let s0 = A[ri + j], s1 = 0, s2 = 0, s3 = 0, k = j0;
      for (const end = j - ((j - j0) & 3); k < end; k += 4) {
        s0 -= A[ri + k] * A[rj + k];
        s1 -= A[ri + k + 1] * A[rj + k + 1];
        s2 -= A[ri + k + 2] * A[rj + k + 2];
        s3 -= A[ri + k + 3] * A[rj + k + 3];
      }
      for (; k < j; k++) s0 -= A[ri + k] * A[rj + k];
      const s = s0 + s1 + s2 + s3;
      if (j < i) A[ri + j] = s / A[rj + j];
      else {
        if (!(s > 0)) throw new Error('計算できませんでした（固定が足りない可能性があります）');
        A[ri + i] = Math.sqrt(s);
      }
    }
  }
}

export function cholSolve(A, n, bw, b, x) {
  const w = bw + 1;
  for (let i = 0; i < n; i++) {
    const ri = i * w - i + bw;
    let s = b[i];
    for (let k = i > bw ? i - bw : 0; k < i; k++) s -= A[ri + k] * x[k];
    x[i] = s / A[ri + i];
  }
  for (let i = n - 1; i >= 0; i--) {
    let s = x[i];
    const kmax = Math.min(n - 1, i + bw);
    for (let k = i + 1; k <= kmax; k++) s -= A[k * w - k + bw + i] * x[k];
    x[i] = s / A[i * w - i + bw + i];
  }
  return x;
}

// ---------------------------------------------------------------- optimizer

export class Simp {
  // maxIter / minIter / tol: classic stop when no density moves more than `tol`.
  // stall: also stop once compliance improved less than this fraction over the last 5
  // iterations (the outline barely changes after that).
  constructor(prob, { penal = 3, move = 0.2, Emin = 1e-9, maxIter = 120, minIter = 12, tol = 0.01, stall = 0, rmin = prob.rmin } = {}) {
    Object.assign(this, { prob, penal, move, Emin, maxIter, minIter, tol, stall });
    const { nelx, nely, hx, hy, ndof, passive } = prob;
    this.nel = nelx * nely;
    this.ndof = ndof;
    this.KE = elementStiffness(hx, hy, prob.nu ?? NU);
    this.edof = buildEdof(prob);
    let bw = 0;
    for (let e = 0; e < this.nel; e++) {
      let lo = Infinity, hi = -Infinity;
      for (let a = 0; a < 8; a++) { const d = this.edof[e * 8 + a]; lo = Math.min(lo, d); hi = Math.max(hi, d); }
      bw = Math.max(bw, hi - lo);
    }
    this.bw = bw;
    this.K = new Float64Array(ndof * (bw + 1));
    this.U = prob.loads.map(() => new Float64Array(ndof));
    // Density filter: linear hat weights within rmin (mm), truncated at the borders.
    const R = Math.ceil(rmin / Math.min(hx, hy));
    const offs = [];
    for (let dx = -R; dx <= R; dx++) {
      for (let dy = -R; dy <= R; dy++) {
        const wgt = rmin - Math.hypot(dx * hx, dy * hy);
        if (wgt > 0) offs.push(dx, dy, wgt);
      }
    }
    this.offs = offs;
    this.Hs = new Float64Array(this.nel);
    this.conv(new Float64Array(this.nel).fill(1), this.Hs);
    const n = this.nel;
    this.x = new Float64Array(n);
    this.xnew = new Float64Array(n);
    this.xPhys = new Float64Array(n);
    this.ce = new Float64Array(n);
    this.dc = new Float64Array(n);
    this.dv = new Float64Array(n);
    this.tmp = new Float64Array(n);
    let solid = 0, design = 0;
    for (let e = 0; e < n; e++) { if (passive[e] > 0) solid++; else if (passive[e] === 0) design++; }
    this.target = prob.vol * (prob.usable ?? n);
    const x0 = design ? Math.min(1, Math.max(0.01, (this.target - solid) / design)) : 0;
    for (let e = 0; e < n; e++) this.x[e] = passive[e] > 0 ? 1 : passive[e] < 0 ? 0 : x0;
    this.toPhys(this.x, this.xPhys);
    this.it = 0;
    this.change = 1;
    this.c = Infinity;
    this.history = [];
  }

  get done() {
    if (this.it >= this.maxIter) return true;
    if (this.it < this.minIter) return false;
    if (this.change < this.tol) return true;
    const h = this.history, n = h.length;
    return this.stall > 0 && n > 5 && (h[n - 6] - h[n - 1]) / h[n - 1] < this.stall;
  }

  conv(src, dst) {
    const { offs } = this, { nelx, nely } = this.prob;
    for (let ex = 0; ex < nelx; ex++) {
      for (let ey = 0; ey < nely; ey++) {
        let s = 0;
        for (let k = 0; k < offs.length; k += 3) {
          const i = ex + offs[k], j = ey + offs[k + 1];
          if (i >= 0 && i < nelx && j >= 0 && j < nely) s += offs[k + 2] * src[i * nely + j];
        }
        dst[ex * nely + ey] = s;
      }
    }
  }

  // Filtered (physical) densities; passive elements keep their fixed value.
  toPhys(x, out) {
    this.conv(x, out);
    const { Hs } = this, { passive } = this.prob;
    for (let e = 0; e < this.nel; e++) out[e] = passive[e] > 0 ? 1 : passive[e] < 0 ? 0 : out[e] / Hs[e];
  }

  // Assembles K for element stiffness Emin + dens^power (1 - Emin) and factorizes it.
  factor(dens, power, Emin) {
    const { K, KE, edof, bw, ndof, nel } = this, { fixed } = this.prob;
    const w = bw + 1;
    K.fill(0);
    for (let e = 0; e < nel; e++) {
      const s = Emin + (power === 1 ? dens[e] : Math.pow(dens[e], power)) * (1 - Emin);
      const o = e * 8;
      for (let a = 0; a < 8; a++) {
        const I = edof[o + a];
        if (fixed[I]) continue;
        const ri = I * w - I + bw;
        for (let b = 0; b < 8; b++) {
          const J = edof[o + b];
          if (J <= I && !fixed[J]) K[ri + J] += s * KE[a * 8 + b];
        }
      }
    }
    for (let I = 0; I < ndof; I++) if (fixed[I]) K[I * w - I + bw + I] = 1;
    cholesky(K, ndof, bw);
  }

  // u_eᵀ KE u_e for every element, summed over load cases.
  energies(out) {
    const { KE, edof, nel, U } = this;
    out.fill(0);
    const ue = new Float64Array(8);
    for (const u of U) {
      for (let e = 0; e < nel; e++) {
        const o = e * 8;
        for (let a = 0; a < 8; a++) ue[a] = u[edof[o + a]];
        let s = 0;
        for (let a = 0; a < 8; a++) {
          let t = 0;
          for (let b = 0; b < 8; b++) t += KE[a * 8 + b] * ue[b];
          s += ue[a] * t;
        }
        out[e] += s;
      }
    }
    return out;
  }

  solveAll() {
    this.prob.loads.forEach((f, L) => cholSolve(this.K, this.ndof, this.bw, f, this.U[L]));
  }

  step() {
    const { nel, xPhys, penal, Emin, ce, dc, dv, tmp, Hs } = this;
    this.factor(xPhys, penal, Emin);
    this.solveAll();
    this.energies(ce);
    let c = 0;
    for (let e = 0; e < nel; e++) {
      const xp = Math.pow(xPhys[e], penal - 1);
      c += (Emin + xp * xPhys[e] * (1 - Emin)) * ce[e];
      dc[e] = -penal * xp * (1 - Emin) * ce[e];
    }
    // Chain rule through the density filter.
    for (let e = 0; e < nel; e++) tmp[e] = dc[e] / Hs[e];
    this.conv(tmp, dc);
    for (let e = 0; e < nel; e++) tmp[e] = 1 / Hs[e];
    this.conv(tmp, dv);
    this.oc();
    let change = 0;
    for (let e = 0; e < nel; e++) change = Math.max(change, Math.abs(this.xnew[e] - this.x[e]));
    this.x.set(this.xnew);
    this.change = change;
    this.c = c;
    this.it++;
    this.history.push(c);
    return c;
  }

  oc() {
    const { x, xnew, xPhys, dc, dv, move, nel } = this, { passive } = this.prob;
    let l1 = 0, l2 = 1e9;
    while ((l2 - l1) / (l1 + l2) > 1e-3) {
      const lmid = 0.5 * (l2 + l1);
      for (let e = 0; e < nel; e++) {
        if (passive[e]) { xnew[e] = passive[e] > 0 ? 1 : 0; continue; }
        const v = x[e] * Math.sqrt(Math.max(0, -dc[e]) / (dv[e] * lmid));
        xnew[e] = Math.max(0, Math.max(x[e] - move, Math.min(1, Math.min(x[e] + move, v))));
      }
      this.toPhys(xnew, xPhys);
      if (this.volume() > this.target) l1 = lmid; else l2 = lmid;
    }
  }

  volume() {
    let s = 0;
    for (let e = 0; e < this.nel; e++) s += this.xPhys[e];
    return s;
  }

  // Share of the usable area that is material (0..1).
  volFrac() { return this.volume() / (this.prob.usable ?? this.nel); }

  // Starts from another (coarser) run's design, sampled bilinearly at this grid's elements.
  seed(from) {
    const p = this.prob, c = from.prob, { passive } = p;
    const v = (i, j) => from.x[i * c.nely + j];
    for (let ex = 0; ex < p.nelx; ex++) {
      for (let ey = 0; ey < p.nely; ey++) {
        const e = ex * p.nely + ey;
        if (passive[e]) continue;
        const fx = Math.min(c.nelx - 1, Math.max(0, ((ex + 0.5) * p.hx) / c.hx - 0.5));
        const fy = Math.min(c.nely - 1, Math.max(0, ((ey + 0.5) * p.hy) / c.hy - 0.5));
        const i0 = Math.floor(fx), j0 = Math.floor(fy), i1 = Math.min(c.nelx - 1, i0 + 1), j1 = Math.min(c.nely - 1, j0 + 1);
        const tx = fx - i0, ty = fy - j0;
        this.x[e] = Math.min(1, Math.max(0, (v(i0, j0) * (1 - tx) + v(i1, j0) * tx) * (1 - ty) + (v(i0, j1) * (1 - tx) + v(i1, j1) * tx) * ty));
      }
    }
    this.toPhys(this.x, this.xPhys);
  }
}

// Fine grids start from a converged coarse design (half the resolution): about 2.5× faster,
// and the result is usually a little stiffer than starting the fine grid from scratch.
export function coarseLevel(spec, prob) {
  const n = prob.nelx * prob.nely;
  return n >= 4000 ? discretize(spec, n / 4) : null;
}

// Runs the optimization (coarse level first, when given), yielding after every iteration:
// { sim, phase } with phase 0 = coarse, 1 = final grid. Returns the final Simp.
export function* optimize(prob, coarse, opts) {
  let sim;
  if (coarse) {
    const c = new Simp(coarse, opts);
    while (!c.done) { c.step(); yield { sim: c, phase: 0 }; }
    sim = new Simp(prob, { ...opts, minIter: Math.min(opts.minIter ?? 12, 8) });
    sim.seed(c);
    sim.prevIters = c.it;
  } else sim = new Simp(prob, opts);
  while (!sim.done) { sim.step(); yield { sim, phase: 1 }; }
  return sim;
}

// ---------------------------------------------------------------- results in real units

// Deflections and stresses of the thresholded (printable) design, compared with a solid
// plate of the same outline. E in MPa, thickness t in mm.
export function evaluate(sim, xPhys, { E = 2300, t = 5, threshold = 0.5 } = {}) {
  const { prob, nel } = sim;
  const { passive, loadInfo, hx, hy, nely } = prob;
  const bin = new Float64Array(nel), solid = new Float64Array(nel);
  let area = 0, solidArea = 0;
  for (let e = 0; e < nel; e++) {
    bin[e] = passive[e] > 0 ? 1 : passive[e] < 0 ? 0 : xPhys[e] > threshold ? 1 : 0;
    solid[e] = passive[e] < 0 ? 0 : 1;
    area += bin[e] * hx * hy;
    solidArea += solid[e] * hx * hy;
  }
  const deflect = () => loadInfo.map((L) => {
    const u = sim.U[L.case];
    let s = 0;
    L.nodes.forEach((n, q) => { s += L.w[q] * (u[2 * n] * L.dir[0] + u[2 * n + 1] * L.dir[1]); });
    return s / (E * t);
  });
  sim.factor(solid, 1, 1e-6);
  sim.solveAll();
  const deflSolid = deflect();
  sim.factor(bin, 1, 1e-6);
  sim.solveAll();
  const defl = deflect();
  // von Mises stress at element centres (MPa); independent of E for a single material.
  const B = shapeB(hx, hy, 0, 0);
  const nu = prob.nu ?? NU, k = 1 / (1 - nu * nu);
  const stress = new Float32Array(nel);
  for (let e = 0; e < nel; e++) {
    if (!bin[e]) continue;
    const o = e * 8;
    let worst = 0;
    for (const u of sim.U) {
      let ex = 0, ey = 0, gxy = 0;
      for (let a = 0; a < 8; a++) {
        const ua = u[sim.edof[o + a]];
        ex += B[a] * ua; ey += B[8 + a] * ua; gxy += B[16 + a] * ua;
      }
      const sx = k * (ex + nu * ey) / t, sy = k * (nu * ex + ey) / t, txy = (0.5 / (1 + nu)) * gxy / t;
      worst = Math.max(worst, Math.sqrt(sx * sx - sx * sy + sy * sy + 3 * txy * txy));
    }
    stress[e] = worst;
  }
  // The few highest values sit at load points and sharp corners; report a robust high percentile.
  const vals = Array.from(stress).filter((v, e) => bin[e] && !passive[e] && v > 0).sort((a, b) => a - b);
  const p98 = vals.length ? vals[Math.floor(vals.length * 0.98)] : 0;
  return { area, solidArea, defl, deflSolid, stress, stressP98: p98, nely };
}

// ---------------------------------------------------------------- outlines

// Densities at the grid nodes (average of the surrounding elements).
export function nodalField(xPhys, nelx, nely) {
  const nny = nely + 1;
  const f = new Float32Array((nelx + 1) * nny), cnt = new Uint8Array((nelx + 1) * nny);
  for (let ex = 0; ex < nelx; ex++) {
    for (let ey = 0; ey < nely; ey++) {
      const v = xPhys[ex * nely + ey];
      for (const [i, j] of [[ex, ey], [ex + 1, ey], [ex + 1, ey + 1], [ex, ey + 1]]) { f[i * nny + j] += v; cnt[i * nny + j]++; }
    }
  }
  for (let k = 0; k < f.length; k++) f[k] /= cnt[k];
  return f;
}

// Marching squares at `thr`. Returns closed loops in mm with the material on the left:
// outer boundaries counter-clockwise, holes clockwise. The field is padded with empty
// space just outside the design area, so loops close on its border.
export function contourLoops(field, nnx, nny, hx, hy, thr = 0.5) {
  const eps = 1e-4;
  const val = (i, j) => (i < 0 || j < 0 || i >= nnx || j >= nny ? 0 : field[i * nny + j]);
  const px = (i) => (i < 0 ? -eps : i >= nnx ? (nnx - 1) * hx + eps : i * hx);
  const py = (j) => (j < 0 ? -eps : j >= nny ? (nny - 1) * hy + eps : j * hy);
  const P = (i, j) => (i + 1) * (nny + 2) + (j + 1);
  const pts = new Map();
  // Crossing on a grid edge, always interpolated in the same direction so neighbouring cells agree.
  const cross = (key, i0, j0, i1, j1) => {
    if (!pts.has(key)) {
      const a = val(i0, j0), b = val(i1, j1);
      const t = Math.abs(b - a) < 1e-12 ? 0.5 : Math.min(1, Math.max(0, (thr - a) / (b - a)));
      pts.set(key, [px(i0) + (px(i1) - px(i0)) * t, py(j0) + (py(j1) - py(j0)) * t]);
    }
    return key;
  };
  const next = new Map();
  for (let ci = -1; ci < nnx; ci++) {
    for (let cj = -1; cj < nny; cj++) {
      const v = [val(ci, cj), val(ci + 1, cj), val(ci + 1, cj + 1), val(ci, cj + 1)];
      const ins = v.map((q) => q > thr);
      if (ins[0] === ins[1] && ins[1] === ins[2] && ins[2] === ins[3]) continue;
      const edge = [
        () => cross(P(ci, cj) * 2, ci, cj, ci + 1, cj),
        () => cross(P(ci + 1, cj) * 2 + 1, ci + 1, cj, ci + 1, cj + 1),
        () => cross(P(ci, cj + 1) * 2, ci, cj + 1, ci + 1, cj + 1),
        () => cross(P(ci, cj) * 2 + 1, ci, cj, ci, cj + 1),
      ];
      const exits = [], entries = [];
      for (let k = 0; k < 4; k++) {
        if (ins[k] && !ins[(k + 1) % 4]) exits.push(k);
        else if (!ins[k] && ins[(k + 1) % 4]) entries.push(k);
      }
      if (exits.length === 1) next.set(edge[exits[0]](), edge[entries[0]]());
      else {
        // Saddle: the centre value decides whether the two inside corners connect.
        const joined = (v[0] + v[1] + v[2] + v[3]) / 4 > thr;
        for (const k of exits) next.set(edge[k](), edge[joined ? (k + 1) % 4 : (k + 3) % 4]());
      }
    }
  }
  const loops = [];
  const seen = new Set();
  for (const start of next.keys()) {
    if (seen.has(start)) continue;
    const loop = [];
    let k = start;
    while (k !== undefined && !seen.has(k)) { seen.add(k); loop.push(pts.get(k)); k = next.get(k); }
    if (loop.length >= 3) loops.push(loop);
  }
  return loops;
}

export function loopArea(pts) {
  let a = 0;
  for (let i = 0; i < pts.length; i++) {
    const [x1, y1] = pts[i], [x2, y2] = pts[(i + 1) % pts.length];
    a += x1 * y2 - x2 * y1;
  }
  return a / 2;
}

// Taubin smoothing (no shrinking). Points on the design-area border stay on it.
function smoothLoop(pts, W, H, iters = 3) {
  const n = pts.length;
  if (n < 6) return pts;
  const tol = 1e-3;
  const lockX = pts.map(([x]) => x < tol || x > W - tol);
  const lockY = pts.map(([, y]) => y < tol || y > H - tol);
  let cur = pts.map((p) => [Math.min(W, Math.max(0, p[0])), Math.min(H, Math.max(0, p[1]))]);
  for (let it = 0; it < iters; it++) {
    for (const lam of [0.5, -0.53]) {
      cur = cur.map((p, i) => {
        const a = cur[(i + n - 1) % n], b = cur[(i + 1) % n];
        return [lockX[i] ? p[0] : p[0] + lam * ((a[0] + b[0]) / 2 - p[0]), lockY[i] ? p[1] : p[1] + lam * ((a[1] + b[1]) / 2 - p[1])];
      });
    }
  }
  return cur;
}

// Douglas–Peucker on a closed loop.
function simplifyLoop(pts, eps) {
  if (pts.length < 8) return pts;
  let far = 0, fd = -1;
  for (let i = 1; i < pts.length; i++) {
    const d = (pts[i][0] - pts[0][0]) ** 2 + (pts[i][1] - pts[0][1]) ** 2;
    if (d > fd) { fd = d; far = i; }
  }
  const dp = (seg) => {
    if (seg.length < 3) return seg;
    const a = seg[0], b = seg[seg.length - 1];
    const dx = b[0] - a[0], dy = b[1] - a[1], L = Math.hypot(dx, dy) || 1e-12;
    let idx = 0, md = -1;
    for (let i = 1; i < seg.length - 1; i++) {
      const d = Math.abs(dy * (seg[i][0] - a[0]) - dx * (seg[i][1] - a[1])) / L;
      if (d > md) { md = d; idx = i; }
    }
    if (md <= eps) return [a, b];
    const l = dp(seg.slice(0, idx + 1)), r = dp(seg.slice(idx));
    return [...l.slice(0, -1), ...r];
  };
  const first = dp(pts.slice(0, far + 1));
  const second = dp([...pts.slice(far), pts[0]]);
  return [...first.slice(0, -1), ...second.slice(0, -1)];
}

function pointInPoly([x, y], poly) {
  let inside = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const [xi, yi] = poly[i], [xj, yj] = poly[j];
    if ((yi > y) !== (yj > y) && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) inside = !inside;
  }
  return inside;
}

// Cut-off density for the printable outline. 0.5 normally; when thin, slightly grey
// members would break the part into pieces at 0.5, the highest lower cut-off that keeps
// the fewest pieces is used instead.
export function pickThreshold(xPhys, prob) {
  const counts = [0.5, 0.45, 0.4, 0.35, 0.3].map((t) => [t, densityToShapes(xPhys, prob, { threshold: t }).length]);
  if (counts[0][1] <= 1) return 0.5;
  const fewest = Math.min(...counts.map(([, n]) => n).filter((n) => n > 0));
  return counts.find(([, n]) => n === fewest)[0];
}

// Densities → printable outline shapes [{ o, h: [...] }] in design-area millimetres.
export function densityToShapes(xPhys, prob, { threshold = 0.5 } = {}) {
  const { nelx, nely, hx, hy, W, H } = prob;
  const field = nodalField(xPhys, nelx, nely);
  const cell = hx * hy;
  const r = (v) => Math.round(v * 1000) / 1000;
  const loops = contourLoops(field, nelx + 1, nely + 1, hx, hy, threshold)
    .map((l) => simplifyLoop(smoothLoop(l, W, H), Math.min(hx, hy) * 0.06))
    .map((l) => l.map(([x, y]) => [r(x), r(y)]))
    .filter((l) => l.length >= 3)
    .map((l) => ({ l, a: loopArea(l) }));
  // Slivers of material and pin-holes smaller than about two elements are not printable.
  const outers = loops.filter((x) => x.a > Math.max(2, 3 * cell)).map((x) => ({ o: x.l, a: x.a, h: [] }));
  for (const hole of loops.filter((x) => x.a < -Math.max(1.5, 2 * cell))) {
    let best = null;
    for (const o of outers) if ((!best || o.a < best.a) && pointInPoly(hole.l[0], o.o)) best = o;
    if (best) best.h.push(hole.l);
  }
  return outers.map(({ o, h }) => ({ o, h }));
}
