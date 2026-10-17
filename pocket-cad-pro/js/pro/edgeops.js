// Edges and faces of a part, as a CAD user means them, recovered from a triangle soup,
// plus the solids that round (fillet) or bevel (chamfer) an edge.
// Pure math on plain arrays (no three.js), so it also runs in Node for tests.
//
// Boolean (CSG) results are not clean meshes: an edge between two faces is often split
// differently on each side (T-junctions), and flat faces are cut into many triangles.
// analyzeSurface() therefore
//   - welds vertices and groups coplanar triangles that touch into planar "regions",
//   - finds crease edges (dihedral angle above `angle`), pairing a T-junction edge with
//     the face on its other side by geometry instead of by shared vertices,
//   - merges the overlapping pieces of one straight edge, and
//   - joins segments that continue smoothly (a circle's 64 sides) into one "chain",
// so one tap selects "the top edge of the box" or "the rim of the hole".

const WELD = 2e-4; // mm: corners closer than this are the same vertex
const TOL = 1e-3; // mm: point-on-plane / collinearity tolerance

const sub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const add = (a, b) => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
const mul = (a, s) => [a[0] * s, a[1] * s, a[2] * s];
const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
const len = (a) => Math.hypot(a[0], a[1], a[2]);
const norm = (a) => { const l = len(a) || 1; return [a[0] / l, a[1] / l, a[2] / l]; };
const r3 = (v) => Math.round(v * 1000) / 1000;

// ---------------------------------------------------------------- analysis

export function analyzeSurface(pos, { angle = 30 } = {}) {
  const nt = Math.floor(pos.length / 9);
  const V = [];
  const tri = new Int32Array(nt * 3);
  // Weld with a tolerance: boolean results carry float noise, and two copies of one
  // corner may fall on either side of a grid line. Neighbouring cells are checked only
  // when the point lies within WELD of a cell border.
  const cells = new Map();
  const CELL = WELD * 8, EDGE = 1 / 8;
  const weld = (x, y, z) => {
    const fx = x / CELL, fy = y / CELL, fz = z / CELL;
    const ix = Math.floor(fx), iy = Math.floor(fy), iz = Math.floor(fz);
    const rx = [0], ry = [0], rz = [0];
    if (fx - ix < EDGE) rx.push(-1); else if (ix + 1 - fx < EDGE) rx.push(1);
    if (fy - iy < EDGE) ry.push(-1); else if (iy + 1 - fy < EDGE) ry.push(1);
    if (fz - iz < EDGE) rz.push(-1); else if (iz + 1 - fz < EDGE) rz.push(1);
    for (const dx of rx) for (const dy of ry) for (const dz of rz) {
      const l = cells.get(`${ix + dx},${iy + dy},${iz + dz}`);
      if (!l) continue;
      for (const i of l) {
        if (Math.abs(V[i * 3] - x) <= WELD && Math.abs(V[i * 3 + 1] - y) <= WELD && Math.abs(V[i * 3 + 2] - z) <= WELD) return i;
      }
    }
    const i = V.length / 3;
    V.push(x, y, z);
    const key = `${ix},${iy},${iz}`;
    const l = cells.get(key);
    if (l) l.push(i); else cells.set(key, [i]);
    return i;
  };
  for (let t = 0; t < nt; t++) {
    for (let k = 0; k < 3; k++) {
      const o = t * 9 + k * 3;
      tri[t * 3 + k] = weld(pos[o], pos[o + 1], pos[o + 2]);
    }
  }
  const nv = V.length / 3;
  const P = (i) => [V[i * 3], V[i * 3 + 1], V[i * 3 + 2]];
  const N = new Float64Array(nt * 3), D = new Float64Array(nt), area = new Float64Array(nt);
  const ok = new Uint8Array(nt);
  let bmin = [Infinity, Infinity, Infinity], bmax = [-Infinity, -Infinity, -Infinity];
  for (let i = 0; i < nv; i++) for (let k = 0; k < 3; k++) { bmin[k] = Math.min(bmin[k], V[i * 3 + k]); bmax[k] = Math.max(bmax[k], V[i * 3 + k]); }
  for (let t = 0; t < nt; t++) {
    const a = P(tri[t * 3]), b = P(tri[t * 3 + 1]), c = P(tri[t * 3 + 2]);
    const n = cross(sub(b, a), sub(c, a));
    const l = len(n);
    if (l < 1e-12 || tri[t * 3] === tri[t * 3 + 1] || tri[t * 3 + 1] === tri[t * 3 + 2] || tri[t * 3] === tri[t * 3 + 2]) continue;
    N[t * 3] = n[0] / l; N[t * 3 + 1] = n[1] / l; N[t * 3 + 2] = n[2] / l;
    D[t] = (n[0] * a[0] + n[1] * a[1] + n[2] * a[2]) / l;
    area[t] = l / 2;
    ok[t] = 1;
    // Slivers thinner than 0.1 µm have meaningless normals, which would show up as false
    // creases; they take the plane of a neighbour they lie in (below).
    const L = Math.sqrt(Math.max(dot(sub(b, a), sub(b, a)), dot(sub(c, b), sub(c, b)), dot(sub(a, c), sub(a, c))));
    if (l < 1e-4 * L) ok[t] = 2;
  }
  {
    const around = Array.from({ length: nv }, () => []);
    for (let t = 0; t < nt; t++) if (ok[t] === 1) for (let k = 0; k < 3; k++) around[tri[t * 3 + k]].push(t);
    for (let t = 0; t < nt; t++) {
      if (ok[t] !== 2) continue;
      const pts = [0, 1, 2].map((k) => P(tri[t * 3 + k]));
      let found = -1;
      for (let k = 0; k < 3 && found < 0; k++) {
        for (const g of around[tri[t * 3 + k]]) {
          if (pts.every((p) => Math.abs(N[g * 3] * p[0] + N[g * 3 + 1] * p[1] + N[g * 3 + 2] * p[2] - D[g]) < TOL)) { found = g; break; }
        }
      }
      // The surface's outward side is the neighbour's, whatever way the sliver happens to wind.
      if (found >= 0) {
        N[t * 3] = N[found * 3]; N[t * 3 + 1] = N[found * 3 + 1]; N[t * 3 + 2] = N[found * 3 + 2];
        D[t] = D[found];
      }
      ok[t] = 1;
    }
  }
  const nrm = (t) => [N[t * 3], N[t * 3 + 1], N[t * 3 + 2]];
  const onPlane = (t, p) => Math.abs(N[t * 3] * p[0] + N[t * 3 + 1] * p[1] + N[t * 3 + 2] * p[2] - D[t]) < TOL;
  // Coplanar: same orientation and every corner of g on f's plane (robust for slivers).
  const coplanar = (f, g) => dot(nrm(f), nrm(g)) > 0.995 && [0, 1, 2].every((k) => onPlane(f, P(tri[g * 3 + k])))
    && [0, 1, 2].every((k) => onPlane(g, P(tri[f * 3 + k])));

  // ---- planar regions: coplanar triangles sharing a vertex (covers T-junctions too)
  const parent = new Int32Array(nt).map((_, i) => i);
  const find = (x) => { while (parent[x] !== x) { parent[x] = parent[parent[x]]; x = parent[x]; } return x; };
  const unite = (a, b) => { a = find(a); b = find(b); if (a !== b) parent[Math.max(a, b)] = Math.min(a, b); };
  const vtris = Array.from({ length: nv }, () => []);
  for (let t = 0; t < nt; t++) if (ok[t]) for (let k = 0; k < 3; k++) vtris[tri[t * 3 + k]].push(t);
  for (const list of vtris) {
    for (let i = 0; i < list.length; i++) {
      for (let j = i + 1; j < list.length; j++) {
        if (find(list[i]) !== find(list[j]) && coplanar(list[i], list[j])) unite(list[i], list[j]);
      }
    }
  }
  const regionOf = new Int32Array(nt).fill(-1);
  const regions = [];
  const rmap = new Map();
  for (let t = 0; t < nt; t++) {
    if (!ok[t]) continue;
    const root = find(t);
    let r = rmap.get(root);
    if (r === undefined) { r = regions.length; rmap.set(root, r); regions.push({ id: r, tris: [], n: [0, 0, 0], area: 0 }); }
    regionOf[t] = r;
    const reg = regions[r];
    reg.tris.push(t);
    reg.area += area[t];
    reg.n = add(reg.n, mul(nrm(t), area[t]));
  }
  for (const reg of regions) { reg.n = norm(reg.n); reg.d = D[reg.tris[0]]; }

  // ---- edges
  const edges = new Map();
  for (let t = 0; t < nt; t++) {
    if (!ok[t]) continue;
    for (let k = 0; k < 3; k++) {
      const a = tri[t * 3 + k], b = tri[t * 3 + (k + 1) % 3];
      const key = a < b ? a * nv + b : b * nv + a;
      let e = edges.get(key);
      if (!e) edges.set(key, e = { a: Math.min(a, b), b: Math.max(a, b), f: [] });
      e.f.push(t);
    }
  }
  // Spatial grid of triangles, for pairing T-junction edges with the face across them.
  const span = Math.max(bmax[0] - bmin[0], bmax[1] - bmin[1], bmax[2] - bmin[2], 1e-3);
  const cell = span / 48;
  const ci = (x, k) => Math.floor((x - bmin[k]) / cell);
  let grid = null;
  const buildGrid = () => {
    grid = new Map();
    for (let t = 0; t < nt; t++) {
      if (!ok[t]) continue;
      const lo = [Infinity, Infinity, Infinity], hi = [-Infinity, -Infinity, -Infinity];
      for (let k = 0; k < 3; k++) { const p = P(tri[t * 3 + k]); for (let a = 0; a < 3; a++) { lo[a] = Math.min(lo[a], p[a]); hi[a] = Math.max(hi[a], p[a]); } }
      const i0 = ci(lo[0] - TOL, 0), i1 = ci(hi[0] + TOL, 0), j0 = ci(lo[1] - TOL, 1), j1 = ci(hi[1] + TOL, 1), k0 = ci(lo[2] - TOL, 2), k1 = ci(hi[2] + TOL, 2);
      if ((i1 - i0 + 1) * (j1 - j0 + 1) * (k1 - k0 + 1) > 20000) continue;
      for (let i = i0; i <= i1; i++) for (let j = j0; j <= j1; j++) for (let k = k0; k <= k1; k++) {
        const key = `${i},${j},${k}`;
        let list = grid.get(key);
        if (!list) grid.set(key, list = []);
        list.push(t);
      }
    }
  };
  // Is point m inside triangle g (m assumed near g's plane)?
  const inTri = (g, m) => {
    const a = P(tri[g * 3]), b = P(tri[g * 3 + 1]), c = P(tri[g * 3 + 2]);
    const v0 = sub(c, a), v1 = sub(b, a), v2 = sub(m, a);
    const d00 = dot(v0, v0), d01 = dot(v0, v1), d02 = dot(v0, v2), d11 = dot(v1, v1), d12 = dot(v1, v2);
    const den = d00 * d11 - d01 * d01;
    if (Math.abs(den) < 1e-18) return false;
    const u = (d11 * d02 - d01 * d12) / den, v = (d00 * d12 - d01 * d02) / den;
    const tol = 1e-4;
    return u >= -tol && v >= -tol && u + v <= 1 + tol;
  };
  // Welded vertices near segment A-B (grid of all vertices, built on first use).
  let vgrid = null;
  const verticesNear = (A, B) => {
    if (!vgrid) {
      vgrid = new Map();
      for (let i = 0; i < nv; i++) {
        const key = `${ci(V[i * 3], 0)},${ci(V[i * 3 + 1], 1)},${ci(V[i * 3 + 2], 2)}`;
        const l = vgrid.get(key);
        if (l) l.push(i); else vgrid.set(key, [i]);
      }
    }
    const lo = [0, 1, 2].map((k) => ci(Math.min(A[k], B[k]) - TOL, k)), hi = [0, 1, 2].map((k) => ci(Math.max(A[k], B[k]) + TOL, k));
    const out = [];
    if ((hi[0] - lo[0] + 1) * (hi[1] - lo[1] + 1) * (hi[2] - lo[2] + 1) > 50000) return out;
    for (let i = lo[0]; i <= hi[0]; i++) for (let j = lo[1]; j <= hi[1]; j++) for (let k = lo[2]; k <= hi[2]; k++) {
      const l = vgrid.get(`${i},${j},${k}`);
      if (l) for (const v of l) out.push(v);
    }
    return out;
  };
  // Third corner of triangle t (the one not on edge a-b).
  const apex = (t, a, b) => { for (let k = 0; k < 3; k++) { const v = tri[t * 3 + k]; if (v !== a && v !== b) return P(v); } return P(tri[t * 3]); };
  const cosLim = Math.cos((angle * Math.PI) / 180);
  const creases = [];
  const addCrease = (ia, ib, f, g, af, ag) => {
    const nf = nrm(f), ng = nrm(g), A = P(ia);
    // Convex when each face lies behind the other's plane.
    let s = dot(sub(af, A), ng);
    if (Math.abs(s) < 1e-7) s = dot(sub(ag, A), nf);
    creases.push({ ia, ib, nf, ng, rf: regionOf[f], rg: regionOf[g], convex: s < 0 });
  };
  for (const e of edges.values()) {
    if (e.f.length === 2) {
      const [f, g] = e.f;
      if (dot(nrm(f), nrm(g)) >= cosLim || coplanar(f, g)) continue;
      addCrease(e.a, e.b, f, g, apex(f, e.a, e.b), apex(g, e.a, e.b));
    } else if (e.f.length === 1) {
      // A T-junction edge: part of it may be a crease and part a seam inside a flat face,
      // so split it at every vertex lying on it and judge each piece on its own.
      const f = e.f[0];
      if (!grid) buildGrid();
      const A0 = P(e.a), B0 = P(e.b), dd = sub(B0, A0), l2 = dot(dd, dd);
      const on = [];
      for (const v of verticesNear(A0, B0)) {
        if (v === e.a || v === e.b) continue;
        const w = sub(P(v), A0);
        const t = dot(w, dd) / l2;
        if (t <= 1e-6 || t >= 1 - 1e-6) continue;
        const r = sub(w, mul(dd, t));
        if (dot(r, r) < TOL * TOL) on.push([t, v]);
      }
      on.sort((x, y) => x[0] - y[0]);
      const cuts = [e.a, ...on.map((x) => x[1]), e.b];
      for (let s = 0; s < cuts.length - 1; s++) {
        const ia = cuts[s], ib = cuts[s + 1];
        const A = P(ia), B = P(ib), M = mul(add(A, B), 0.5);
        let partner = -1, seam = false;
        for (const g of grid.get(`${ci(M[0], 0)},${ci(M[1], 1)},${ci(M[2], 2)}`) || []) {
          if (g === f || !onPlane(g, M) || (!onPlane(g, A) && !onPlane(g, B)) || !inTri(g, M)) continue;
          if (coplanar(f, g)) { seam = true; break; }
          if (partner < 0) partner = g;
        }
        if (seam || partner < 0 || dot(nrm(f), nrm(partner)) >= cosLim) continue;
        // The partner's apex: its corner farthest from the edge line.
        const d = norm(sub(B, A));
        let best = null, bd = -1;
        for (let k = 0; k < 3; k++) {
          const p = P(tri[partner * 3 + k]);
          const w = sub(p, A);
          const dist = len(sub(w, mul(d, dot(w, d))));
          if (dist > bd) { bd = dist; best = p; }
        }
        addCrease(ia, ib, f, partner, apex(f, e.a, e.b), best);
      }
    }
  }
  const segs = splitAndDedupe(creases, P, nv, bmin, cell);
  const chains = buildChains(segs);
  return { tri, V, N, nt, regionOf, regions, chains, bbox: { min: bmin, max: bmax }, area };
}

// One straight edge is often split differently on its two sides (a long edge on one face,
// several short ones on the other). Splitting every crease at the crease vertices lying on
// it makes both sides identical, so duplicates can be dropped by their vertex pair.
function splitAndDedupe(creases, P, nv, bmin, cell) {
  const ids = new Set();
  for (const c of creases) { ids.add(c.ia); ids.add(c.ib); }
  const ci = (x, k) => Math.floor((x - bmin[k]) / cell);
  const grid = new Map();
  for (const i of ids) {
    const p = P(i);
    const key = `${ci(p[0], 0)},${ci(p[1], 1)},${ci(p[2], 2)}`;
    const l = grid.get(key) || [];
    l.push(i);
    grid.set(key, l);
  }
  const seen = new Map();
  const out = [];
  const push = (ia, ib, c) => {
    if (ia === ib) return;
    const key = ia < ib ? ia * nv + ib : ib * nv + ia;
    if (seen.has(key)) return;
    seen.set(key, true);
    const A = P(ia), B = P(ib);
    out.push({ ...c, ia, ib, A, B, d: norm(sub(B, A)) });
  };
  for (const c of creases) {
    const A = P(c.ia), B = P(c.ib);
    const d = sub(B, A), l2 = dot(d, d);
    const on = [];
    const lo = [0, 1, 2].map((k) => ci(Math.min(A[k], B[k]) - TOL, k)), hi = [0, 1, 2].map((k) => ci(Math.max(A[k], B[k]) + TOL, k));
    if ((hi[0] - lo[0] + 1) * (hi[1] - lo[1] + 1) * (hi[2] - lo[2] + 1) < 50000) {
      for (let i = lo[0]; i <= hi[0]; i++) for (let j = lo[1]; j <= hi[1]; j++) for (let k = lo[2]; k <= hi[2]; k++) {
        for (const v of grid.get(`${i},${j},${k}`) || []) {
          if (v === c.ia || v === c.ib) continue;
          const w = sub(P(v), A);
          const t = dot(w, d) / l2;
          if (t <= 1e-6 || t >= 1 - 1e-6) continue;
          const e = sub(w, mul(d, t));
          if (dot(e, e) < TOL * TOL) on.push([t, v]);
        }
      }
    }
    on.sort((a, b) => a[0] - b[0]);
    let prev = c.ia;
    for (const [, v] of on) { push(prev, v, c); prev = v; }
    push(prev, c.ib, c);
  }
  return out;
}

// Joins segments that continue smoothly (turn < 30°, similar faces on both sides) into chains.
function buildChains(all) {
  // Segments of a few µm (float noise in boolean results) have no usable direction:
  // collapse them, joining their two vertices.
  const rep = new Map();
  const root = (v) => { while (rep.has(v)) v = rep.get(v); return v; };
  for (const s of all) {
    if (len(sub(s.B, s.A)) < 0.01) { const a = root(s.ia), b = root(s.ib); if (a !== b) rep.set(b, a); }
  }
  const segs = [];
  for (const s of all) {
    const ia = root(s.ia), ib = root(s.ib);
    if (ia === ib) continue;
    segs.push(ia === s.ia && ib === s.ib ? s : { ...s, ia, ib });
  }
  const at = new Map();
  segs.forEach((s, i) => {
    for (const [end, v] of [[0, s.ia], [1, s.ib]]) {
      let l = at.get(v);
      if (!l) at.set(v, l = []);
      l.push([i, end]);
    }
  });
  // Normals of segment s matched to a reference pair (ra, rb): returns [na, nb] or null.
  const match = (s, ra, rb, lim) => {
    if (dot(s.nf, ra) > lim && dot(s.ng, rb) > lim) return [s.nf, s.ng];
    if (dot(s.ng, ra) > lim && dot(s.nf, rb) > lim) return [s.ng, s.nf];
    return null;
  };
  const cosTurn = Math.cos((30 * Math.PI) / 180), cosN = Math.cos((40 * Math.PI) / 180);
  // link[i][end] = [j, endOfJ] when segment i continues into j at that end.
  const link = segs.map(() => [null, null]);
  for (const list of at.values()) {
    if (list.length !== 2) continue;
    const [[i, ei], [j, ej]] = list;
    if (i === j) continue;
    const si = segs[i], sj = segs[j];
    if (si.convex !== sj.convex) continue;
    // Directions pointing away from the shared vertex.
    const ui = ei === 0 ? si.d : mul(si.d, -1), uj = ej === 0 ? sj.d : mul(sj.d, -1);
    if (dot(ui, uj) > -cosTurn) continue;
    if (!match(sj, si.nf, si.ng, cosN)) continue;
    link[i][ei] = [j, ej];
    link[j][ej] = [i, ei];
  }
  const seen = new Uint8Array(segs.length);
  const chains = [];
  const walk = (start, startEnd) => {
    // Walk from segment `start` leaving through its end `1 - startEnd`.
    const order = [];
    let i = start, inEnd = startEnd;
    while (i !== null && !seen[i]) {
      seen[i] = 1;
      order.push([i, inEnd]);
      const nxt = link[i][1 - inEnd];
      if (!nxt) break;
      [i, inEnd] = nxt;
    }
    return order;
  };
  // The segment's two normals, ordered to follow the previous segment's (ra, rb).
  const orient = (s, ra, rb) => (dot(s.nf, ra) + dot(s.ng, rb) >= dot(s.ng, ra) + dot(s.nf, rb) ? [s.nf, s.ng] : [s.ng, s.nf]);
  const emit = (order, closed) => {
    const pts = [], na = [], nb = [];
    let ra = segs[order[0][0]].nf, rb = segs[order[0][0]].ng;
    order.forEach(([i, inEnd], k) => {
      const s = segs[i];
      const [a, b] = orient(s, ra, rb);
      ra = a; rb = b;
      const p0 = inEnd === 0 ? s.A : s.B, p1 = inEnd === 0 ? s.B : s.A;
      if (k === 0) { pts.push(p0); na.push(a); nb.push(b); }
      else { na[na.length - 1] = norm(add(na[na.length - 1], a)); nb[nb.length - 1] = norm(add(nb[nb.length - 1], b)); }
      pts.push(p1); na.push(a); nb.push(b);
    });
    if (closed) {
      // The last point repeats the first; average their normals into the first.
      pts.pop();
      na[0] = norm(add(na[0], na.pop())); nb[0] = norm(add(nb[0], nb.pop()));
    }
    let length = 0;
    for (let k = 0; k < pts.length - (closed ? 0 : 1); k++) length += len(sub(pts[(k + 1) % pts.length], pts[k]));
    const s0 = segs[order[0][0]];
    chains.push({ id: chains.length, pts, na, nb, closed, convex: s0.convex, length, regions: [...new Set(order.flatMap(([i]) => [segs[i].rf, segs[i].rg]))] });
  };
  // Open chains start at a segment end with no continuation.
  segs.forEach((s, i) => {
    if (seen[i]) return;
    for (const end of [0, 1]) {
      if (!link[i][end] && !seen[i]) emit(walk(i, end), false);
    }
  });
  segs.forEach((s, i) => { if (!seen[i]) emit(walk(i, 0), true); });
  return chains;
}

// ---------------------------------------------------------------- face outlines

// Outline of planar regions as 2D shapes in the region's plane frame, for push / pull.
// Returns { origin, U, V, N, shapes: [{ o: [[u, v]], h: [[[u, v]]] }] }.
export function regionOutline(an, rid) {
  const reg = an.regions[rid];
  const { tri, V } = an;
  const P = (i) => [V[i * 3], V[i * 3 + 1], V[i * 3 + 2]];
  const nv = V.length / 3;
  const Nn = reg.n;
  const U = norm(Math.abs(Nn[0]) < 0.9 ? cross(Nn, [1, 0, 0]) : cross(Nn, [0, 1, 0]));
  const W = cross(Nn, U);
  const origin = P(tri[reg.tris[0] * 3]);
  const uv = (i) => { const d = sub(P(i), origin); return [dot(d, U), dot(d, W)]; };
  // Directed edges; opposite pairs cancel, T-junction edges are split at the vertices on them.
  let directed = [];
  const verts = new Set();
  for (const t of reg.tris) for (let k = 0; k < 3; k++) { directed.push([tri[t * 3 + k], tri[t * 3 + (k + 1) % 3]]); verts.add(tri[t * 3 + k]); }
  // Keeps each directed edge as many times as it outnumbers its reverse.
  const cancel = (list) => {
    const m = new Map();
    for (const [a, b] of list) m.set(a * nv + b, (m.get(a * nv + b) || 0) + 1);
    const outList = [];
    for (const [k, c] of m) {
      const a = Math.floor(k / nv), b = k - a * nv;
      const net = c - (m.get(b * nv + a) || 0);
      for (let i = 0; i < net; i++) outList.push([a, b]);
    }
    return outList;
  };
  directed = cancel(directed);
  const vlist = [...verts].map((i) => [i, uv(i)]);
  const split = [];
  for (const [a, b] of directed) {
    const pa = uv(a), pb = uv(b);
    const dx = pb[0] - pa[0], dy = pb[1] - pa[1], l2 = dx * dx + dy * dy;
    const on = [];
    for (const [i, p] of vlist) {
      if (i === a || i === b) continue;
      const t = ((p[0] - pa[0]) * dx + (p[1] - pa[1]) * dy) / l2;
      if (t <= 1e-6 || t >= 1 - 1e-6) continue;
      const ex = pa[0] + t * dx - p[0], ey = pa[1] + t * dy - p[1];
      if (ex * ex + ey * ey < TOL * TOL) on.push([t, i]);
    }
    on.sort((x, y) => x[0] - y[0]);
    let prev = a;
    for (const [, i] of on) { split.push([prev, i]); prev = i; }
    split.push([prev, b]);
  }
  const bound = cancel(split);
  // Chain the boundary into loops.
  const out = new Map();
  for (const e of bound) { const l = out.get(e[0]) || []; l.push(e); out.set(e[0], l); }
  const used = new Set();
  const loops = [];
  for (const e of bound) {
    if (used.has(e)) continue;
    const loop = [];
    let cur = e;
    while (cur && !used.has(cur)) {
      used.add(cur);
      loop.push(uv(cur[0]));
      const nexts = (out.get(cur[1]) || []).filter((x) => !used.has(x));
      cur = nexts[0];
    }
    if (loop.length >= 3) loops.push(dropCollinear(loop));
  }
  const areaOf = (l) => { let s = 0; for (let i = 0; i < l.length; i++) { const [x1, y1] = l[i], [x2, y2] = l[(i + 1) % l.length]; s += x1 * y2 - x2 * y1; } return s / 2; };
  const inside = ([x, y], poly) => {
    let c = false;
    for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
      const [xi, yi] = poly[i], [xj, yj] = poly[j];
      if ((yi > y) !== (yj > y) && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) c = !c;
    }
    return c;
  };
  const withA = loops.map((l) => ({ l, a: areaOf(l) })).filter((x) => Math.abs(x.a) > 1e-6);
  const outers = withA.filter((x) => x.a > 0).map((x) => ({ o: x.l, a: x.a, h: [] }));
  for (const h of withA.filter((x) => x.a < 0)) {
    let best = null;
    for (const o of outers) if ((!best || o.a < best.a) && inside(h.l[0], o.o)) best = o;
    if (best) best.h.push(h.l);
  }
  return { origin, U, V: W, N: Nn, shapes: outers.map(({ o, h }) => ({ o, h })), area: reg.area };
}

function dropCollinear(loop) {
  const out = [];
  for (let i = 0; i < loop.length; i++) {
    const a = loop[(i + loop.length - 1) % loop.length], p = loop[i], b = loop[(i + 1) % loop.length];
    const cr = (p[0] - a[0]) * (b[1] - p[1]) - (p[1] - a[1]) * (b[0] - p[0]);
    const l = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1;
    if (Math.abs(cr) / l > 1e-5) out.push(p);
  }
  return out.length >= 3 ? out : loop;
}

// ---------------------------------------------------------------- fillet / chamfer solids

// Arc resolution for a fillet of radius r.
export const arcSegments = (r) => (r < 1 ? 6 : r < 4 ? 10 : 16);

// Cross-section of the cutter (convex edge) or filler (concave edge) at chain point P.
// t: edge tangent; na, nb: outward normals of the faces; returns 3D points (a ring).
function section(P, t, na, nb, p, K) {
  na = norm(sub(na, mul(t, dot(na, t))));
  nb = norm(sub(nb, mul(t, dot(nb, t))));
  const sgn = p.concave ? 1 : -1;
  let ua = norm(cross(t, na)); if (dot(ua, nb) * sgn < 0) ua = mul(ua, -1);
  let ub = norm(cross(t, nb)); if (dot(ub, na) * sgn < 0) ub = mul(ub, -1);
  const cosT = Math.max(-0.996, Math.min(0.996, dot(ua, ub)));
  const th = Math.acos(cosT);
  // Offsets keep the solid's faces off the part's faces (coplanar faces upset booleans).
  const eps = p.eps ?? 0.05;
  const away = norm(add(na, nb));
  const off = (q, n) => add(q, mul(n, sgn * -eps)); // convex: outward (+n); concave: into material (-n)
  const ring = [off(P, away)];
  if (p.type === 'chamfer') {
    const Ta = add(P, mul(ua, p.r)), Tb = add(P, mul(ub, p.r2 ?? p.r));
    ring.push(off(Ta, na), Ta, Tb, off(Tb, nb));
    return ring;
  }
  const r = p.r;
  const s = r / Math.tan(th / 2);
  const Ta = add(P, mul(ua, s)), Tb = add(P, mul(ub, s));
  const bis = norm(add(ua, ub));
  const O = add(P, mul(bis, r / Math.sin(th / 2)));
  const e1 = norm(sub(Ta, O));
  const tb = sub(Tb, O);
  const e2 = norm(sub(tb, mul(e1, dot(tb, e1))));
  const phi = Math.atan2(dot(tb, e2), dot(tb, e1));
  // The arc is drawn 0.5 % wider than r, so it cuts into the faces at a shallow angle
  // (about 6°) instead of touching them: surfaces that merely touch leave the boolean
  // with near-coincident triangles, where neighbouring fillets cross at corners.
  const rr = r * (1 + ARC_GROW);
  const at = (a) => add(O, add(mul(e1, rr * Math.cos(a)), mul(e2, rr * Math.sin(a))));
  const A0 = at(0), A1 = at(phi);
  ring.push(off(A0, na), A0);
  for (let k = 1; k < K; k++) ring.push(at((phi * k) / K));
  ring.push(A1, off(A1, nb));
  return ring;
}

// Relative growth of fillet arcs (see section); network corners use the same radius.
export const ARC_GROW = 0.005;

// Sweep of the cross-section along a chain. p: { type: 'fillet' | 'chamfer', r, r2?,
// concave, closed, pts, na, nb, ext?, eps? }. Returns a Float32Array triangle soup
// (closed, outward-facing) in the same frame as p.pts.
export function filletSolid(p) {
  let pts = p.pts.map((q) => [...q]);
  const m = pts.length;
  if (m < 2) return new Float32Array(0);
  const tan = pts.map((_, i) => {
    if (p.closed) return norm(sub(pts[(i + 1) % m], pts[(i - 1 + m) % m]));
    if (i === 0) return norm(sub(pts[1], pts[0]));
    if (i === m - 1) return norm(sub(pts[m - 1], pts[m - 2]));
    return norm(add(norm(sub(pts[i + 1], pts[i])), norm(sub(pts[i], pts[i - 1]))));
  });
  if (!p.closed) {
    // Cutters run a little past the part so they cut cleanly; fillers (concave edges) end
    // flush with the part's end faces, so they neither stick out nor leave a lip.
    const ext = p.ext ?? (p.concave ? 0 : 0.05);
    pts[0] = sub(pts[0], mul(tan[0], ext));
    pts[m - 1] = add(pts[m - 1], mul(tan[m - 1], ext));
  }
  const K = arcSegments(p.r);
  const rings = pts.map((P, i) => section(P, tan[i], p.na[i], p.nb[i], p, K));
  const R = rings[0].length;
  const out = [];
  const tri = (a, b, c) => out.push(a[0], a[1], a[2], b[0], b[1], b[2], c[0], c[1], c[2]);
  const spans = p.closed ? m : m - 1;
  for (let i = 0; i < spans; i++) {
    const A = rings[i], B = rings[(i + 1) % m];
    for (let k = 0; k < R; k++) {
      const k2 = (k + 1) % R;
      tri(A[k], A[k2], B[k2]);
      tri(A[k], B[k2], B[k]);
    }
  }
  if (!p.closed) {
    const A = rings[0], B = rings[m - 1];
    for (let k = 1; k < R - 1; k++) { tri(A[0], A[k + 1], A[k]); tri(B[0], B[k], B[k + 1]); }
  }
  const f = new Float32Array(out);
  if (signedVolume(f) < 0) {
    for (let i = 0; i < f.length; i += 9) for (let k = 0; k < 3; k++) { const t = f[i + 3 + k]; f[i + 3 + k] = f[i + 6 + k]; f[i + 6 + k] = t; }
  }
  return f;
}

// ---------------------------------------------------------------- fillet networks
//
// Convex edges that meet three at a time at square corners (all edges of a box, say) are
// rounded as one solid: each edge's sweep stops where the corner begins, and the corner is
// a patch of the sphere that blends the three fillets, its rim made of the very points
// that end the sweeps. Built as separate pieces (sweeps through the corner plus a box minus
// a sphere), the boolean would see surfaces that merely touch and leave slivers.
//
// Two convex edges that turn around a concave one (the inside corner of an L) are joined
// the way a rolling ball would do it: the profile of the first is swept around the
// concave edge's fillet axis (or around the edge itself when it is not rounded) into the
// profile of the second.
//
// p: { r, chains: [{ pts, na, nb, c0, c1 }], corners: [corner], ext?, eps? }
// corner: { V, u: [u1, u2, u3] } (sphere) or { kind: 'joint', V, O, d, rc } (axis through O
// along d; the chains stop rc short of V).
// c0 / c1: index of the corner at the chain's first / last point, or -1 for a free end.
export function blendSolid(p) {
  const r = p.r, K = arcSegments(r);
  const rr = r * (1 + ARC_GROW);
  const q = { ...p, type: 'fillet', concave: false, eps: p.eps ?? Math.max(0.05, 3 * r * ARC_GROW) };
  const tris = [];
  const ringsAt = p.corners.map(() => []);
  const trimOf = (ci) => (p.corners[ci].kind === 'joint' ? p.corners[ci].rc : r);
  for (const ch of p.chains) {
    let pts = ch.pts.map((v) => [...v]), na = ch.na, nb = ch.nb;
    // Cut the chain back to where its corner begins (a sphere: r along the edge).
    if (ch.c0 >= 0 && trimOf(ch.c0) > 0) ({ pts, na, nb } = trimChain(pts, na, nb, trimOf(ch.c0)));
    if (ch.c1 >= 0 && trimOf(ch.c1) > 0) {
      const rev = trimChain([...pts].reverse(), [...na].reverse(), [...nb].reverse(), trimOf(ch.c1));
      pts = rev.pts.reverse(); na = rev.na.reverse(); nb = rev.nb.reverse();
    }
    const m = pts.length;
    if (m < 2) continue;
    const tan = pts.map((_, i) => {
      if (i === 0) return norm(sub(pts[1], pts[0]));
      if (i === m - 1) return norm(sub(pts[m - 1], pts[m - 2]));
      return norm(add(norm(sub(pts[i + 1], pts[i])), norm(sub(pts[i], pts[i - 1]))));
    });
    const ext = p.ext ?? 0.05;
    if (ch.c0 < 0) pts[0] = sub(pts[0], mul(tan[0], ext));
    if (ch.c1 < 0) pts[m - 1] = add(pts[m - 1], mul(tan[m - 1], ext));
    const rings = pts.map((P, i) => section(P, tan[i], na[i], nb[i], q, K));
    const R = rings[0].length;
    for (let i = 0; i < m - 1; i++) {
      const A = rings[i], B = rings[i + 1];
      for (let k = 0; k < R; k++) {
        const k2 = (k + 1) % R;
        tris.push([A[k], A[k2], B[k2]], [A[k], B[k2], B[k]]);
      }
    }
    const cap = (ring) => { for (let k = 1; k < R - 1; k++) tris.push([ring[0], ring[k + 1], ring[k]]); };
    // Direction of the chain away from the corner, for joints.
    if (ch.c0 < 0) cap(rings[0]); else ringsAt[ch.c0].push({ ring: rings[0], u: tan[0] });
    if (ch.c1 < 0) cap(rings[m - 1]); else ringsAt[ch.c1].push({ ring: rings[m - 1], u: mul(tan[m - 1], -1) });
  }
  p.corners.forEach((c, ci) => {
    const ends = ringsAt[ci];
    const need = c.kind === 'joint' ? 2 : 3;
    if (ends.length !== need) {
      for (const { ring } of ends) for (let k = 1; k < ring.length - 1; k++) tris.push([ring[0], ring[k + 1], ring[k]]);
      return;
    }
    if (c.kind === 'joint') jointSweep(c, ends, tris);
    else cornerPatch(c, r, rr, K, ends.map((e) => e.ring), tris);
  });
  return orientedSoup(tris);
}

// Rotates point v about the axis through O along unit d by angle a (Rodrigues).
function rotateAbout(v, O, d, a) {
  const w = sub(v, O), c = Math.cos(a), s = Math.sin(a);
  const kw = cross(d, w), kd = dot(d, w) * (1 - c);
  return add(O, add(add(mul(w, c), mul(kw, s)), mul(d, kd)));
}

// Sweeps the first end ring around the joint's axis until it meets the second.
function jointSweep(c, ends, tris) {
  const [A, B] = ends;
  const d = norm(c.d);
  // Turn from "into the corner along the first chain" to "out along the second".
  const from = mul(A.u, -1);
  const a = Math.atan2(dot(cross(from, B.u), d), dot(from, B.u));
  const n = Math.max(2, Math.ceil(Math.abs(a) / (Math.PI / 18)));
  const rings = [A.ring];
  for (let k = 1; k <= n; k++) rings.push(A.ring.map((v) => rotateAbout(v, c.O, d, (a * k) / n)));
  // The last swept ring is where the second chain begins: give its ring those exact points
  // (its triangles hold the same point objects, so they follow).
  const last = rings[n];
  for (const v of B.ring) {
    let best = null, bd = Infinity;
    for (const w of last) { const dd = len(sub(v, w)); if (dd < bd) { bd = dd; best = w; } }
    if (best && bd < 1e-3) { v[0] = best[0]; v[1] = best[1]; v[2] = best[2]; }
  }
  const R = A.ring.length;
  for (let i = 0; i < n; i++) {
    const P = rings[i], Q = rings[i + 1];
    for (let k = 0; k < R; k++) {
      const k2 = (k + 1) % R;
      tris.push([P[k], P[k2], Q[k2]], [P[k], Q[k2], Q[k]]);
    }
  }
}

// Drops the first `d` mm of a chain (normals follow the points that are kept).
function trimChain(pts, na, nb, d) {
  let acc = 0;
  for (let i = 0; i < pts.length - 1; i++) {
    const L = len(sub(pts[i + 1], pts[i]));
    if (acc + L >= d || i === pts.length - 2) {
      const t = L > 1e-12 ? Math.min(1, Math.max(0, (d - acc) / L)) : 0;
      const P = add(pts[i], mul(sub(pts[i + 1], pts[i]), t));
      return { pts: [P, ...pts.slice(i + 1)], na: [na[i + 1], ...na.slice(i + 1)], nb: [nb[i + 1], ...nb.slice(i + 1)] };
    }
    acc += L;
  }
  return { pts, na, nb };
}

// Sphere patch closing the three sweeps that end at corner c, plus the outer cap.
function cornerPatch(c, r, rr, K, rings, tris) {
  const [u1, u2, u3] = c.u;
  const C = add(c.V, mul(add(add(u1, u2), u3), r));
  const tol = 1e-6 * (1 + r) * 50;
  const near = (a, b) => len(sub(a, b)) < tol;
  // Make the points the rings share bit-identical (they were computed separately).
  const shared = [];
  for (const ring of rings) for (let k = 0; k < ring.length; k++) {
    const s = shared.find((v) => near(v, ring[k]));
    if (!s) { shared.push(ring[k]); continue; }
    // The sweep's triangles hold the original point: give it the shared coordinates too.
    const o = ring[k];
    o[0] = s[0]; o[1] = s[1]; o[2] = s[2];
    ring[k] = s;
  }
  // Sphere grid: i + j + k = K; the rim (one index 0) uses uniform angles, like the sweeps.
  const S = (i) => Math.sin((Math.PI * i) / (2 * K));
  // Ring layout (section): [corner', A', A, arc …, B, B'] — the arc runs from A to B.
  const arcPts = rings.flatMap((ring) => ring.slice(2, ring.length - 1));
  const grid = new Map();
  const at = (i, j) => {
    const key = i * (K + 1) + j;
    let v = grid.get(key);
    if (v) return v;
    const d = norm([S(i), S(j), S(K - i - j)]);
    v = sub(C, add(add(mul(u1, rr * d[0]), mul(u2, rr * d[1])), mul(u3, rr * d[2])));
    if (i === 0 || j === 0 || i + j === K) {
      let best = null, bd = Infinity;
      for (const a of arcPts) { const dd = len(sub(a, v)); if (dd < bd) { bd = dd; best = a; } }
      if (best && bd < Math.max(tol, rr * 1e-4)) v = best;
    }
    grid.set(key, v);
    return v;
  };
  for (let i = 0; i < K; i++) {
    for (let j = 0; i + j < K; j++) {
      tris.push([at(i, j), at(i + 1, j), at(i, j + 1)]);
      if (i + j < K - 1) tris.push([at(i + 1, j), at(i + 1, j + 1), at(i, j + 1)]);
    }
  }
  // Outer cap: the rings' outside parts (end → offset → corner → offset → end) form a
  // closed loop around the corner once the stretches two rings share are dropped.
  const R = rings[0].length;
  const outer = rings.map((ring) => [ring[R - 2], ring[R - 1], ring[0], ring[1], ring[2]]);
  let loop = [...outer[0]];
  const used = new Set([0]);
  while (used.size < 3) {
    const end = loop[loop.length - 1];
    let next = -1, rev = false;
    for (let i = 0; i < 3; i++) {
      if (used.has(i)) continue;
      if (outer[i][0] === end) { next = i; break; }
      if (outer[i][outer[i].length - 1] === end) { next = i; rev = true; break; }
    }
    if (next < 0) break;
    used.add(next);
    const seg = rev ? [...outer[next]].reverse() : outer[next];
    loop.push(...seg.slice(1));
  }
  if (loop[loop.length - 1] === loop[0]) loop.pop();
  // Remove the back-and-forth spikes (… a, b, a …) left where two rings share a side.
  let changed = true;
  while (changed && loop.length > 3) {
    changed = false;
    for (let i = 0; i < loop.length; i++) {
      const a = loop[(i - 1 + loop.length) % loop.length], b = loop[(i + 1) % loop.length];
      if (a === b) { loop.splice(i, 1); loop.splice(i % loop.length, 1); changed = true; break; }
    }
  }
  const Q = sub(c.V, mul(add(add(u1, u2), u3), Math.max(0.05, r * 0.02)));
  for (let i = 0; i < loop.length; i++) tris.push([Q, loop[i], loop[(i + 1) % loop.length]]);
}

// Welds a list of triangles (to 1 nm), makes their winding consistent across shared
// edges and outward-facing. Returns a Float32Array soup.
function orientedSoup(tris) {
  const ids = new Map(), P = [];
  const id = (v) => {
    const k = `${Math.round(v[0] * 1e6)},${Math.round(v[1] * 1e6)},${Math.round(v[2] * 1e6)}`;
    let i = ids.get(k);
    if (i === undefined) { i = P.length; ids.set(k, i); P.push(v); }
    return i;
  };
  const T = tris.map((t) => t.map(id)).filter(([a, b, c]) => a !== b && b !== c && a !== c);
  const edges = new Map();
  T.forEach((t, ti) => { for (let k = 0; k < 3; k++) { const a = t[k], b = t[(k + 1) % 3]; const key = a < b ? `${a}_${b}` : `${b}_${a}`; (edges.get(key) || edges.set(key, []).get(key)).push(ti); } });
  const seen = new Uint8Array(T.length);
  for (let s = 0; s < T.length; s++) {
    if (seen[s]) continue;
    seen[s] = 1;
    const stack = [s];
    while (stack.length) {
      const ti = stack.pop(), t = T[ti];
      for (let k = 0; k < 3; k++) {
        const a = t[k], b = t[(k + 1) % 3];
        for (const ni of edges.get(a < b ? `${a}_${b}` : `${b}_${a}`)) {
          if (seen[ni]) continue;
          const n = T[ni];
          // A neighbour with the same winding runs the shared edge the same way: flip it.
          for (let j = 0; j < 3; j++) if (n[j] === a && n[(j + 1) % 3] === b) { [n[1], n[2]] = [n[2], n[1]]; break; }
          seen[ni] = 1;
          stack.push(ni);
        }
      }
    }
  }
  const f = new Float32Array(T.length * 9);
  T.forEach((t, i) => t.forEach((v, k) => f.set(P[v], i * 9 + k * 3)));
  if (signedVolume(f) < 0) {
    for (let i = 0; i < f.length; i += 9) for (let k = 0; k < 3; k++) { const t = f[i + 3 + k]; f[i + 3 + k] = f[i + 6 + k]; f[i + 6 + k] = t; }
  }
  return f;
}

export function signedVolume(a) {
  let v = 0;
  for (let i = 0; i < a.length; i += 9) {
    v += a[i] * (a[i + 4] * a[i + 8] - a[i + 5] * a[i + 7]) - a[i + 1] * (a[i + 3] * a[i + 8] - a[i + 5] * a[i + 6]) + a[i + 2] * (a[i + 3] * a[i + 7] - a[i + 4] * a[i + 6]);
  }
  return v / 6;
}

// Wedge angle (radians) of a chain at its middle: the material angle of a convex edge,
// the air angle of a concave one (π minus the angle between the face normals).
export function wedgeAngle(c) {
  const m = c.pts.length, i = Math.max(0, Math.min(m - 2, Math.floor((m - 1) / 2)));
  const t = norm(sub(c.pts[i + 1], c.pts[i]));
  const na = norm(sub(c.na[i], mul(t, dot(c.na[i], t)))), nb = norm(sub(c.nb[i], mul(t, dot(c.nb[i], t))));
  return Math.PI - Math.acos(Math.max(-1, Math.min(1, dot(na, nb))));
}

// Distance from a fillet's edge to where it meets each face.
export const tangentLength = (type, r, theta) => (type === 'chamfer' ? r : r / Math.tan(theta / 2));

// Rounds chain data for storage in the document.
export const packChain = (c) => ({
  pts: c.pts.map((q) => q.map(r3)),
  na: c.na.map((q) => q.map((v) => Math.round(v * 1e5) / 1e5)),
  nb: c.nb.map((q) => q.map((v) => Math.round(v * 1e5) / 1e5)),
  closed: c.closed, concave: !c.convex,
});
