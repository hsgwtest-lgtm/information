// Document operations on selected edges and faces of a part: fillet / chamfer and push /
// pull. The part becomes a group of the original plus cutter / filler nodes, so the result
// stays editable (sizes can be changed later, ungrouping restores the original).
// No DOM here: the viewport side is subsel.js.
import { Matrix4, Euler, MathUtils } from '../../vendor/vendor.js';
import { nodeGeometry, nodeMatrix } from '../geometry.js';
import { analyzeSurface, regionOutline, packChain, wedgeAngle, tangentLength } from './edgeops.js';
import { N, G } from './templates.js';

const r3 = (v) => Math.round(v * 1000) / 1000;
const sub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const add = (a, b) => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
const mul = (a, s) => [a[0] * s, a[1] * s, a[2] * s];
const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
const norm = (a) => { const l = Math.hypot(a[0], a[1], a[2]) || 1; return [a[0] / l, a[1] / l, a[2] / l]; };

// Euler angles (deg, XYZ) of the rotation whose columns are the local X, Y, Z axes.
export function eulerFromAxes(x, y, z) {
  const m = new Matrix4().set(x[0], y[0], z[0], 0, x[1], y[1], z[1], 0, x[2], y[2], z[2], 0, 0, 0, 0, 1);
  const e = new Euler().setFromRotationMatrix(m, 'XYZ');
  return [e.x, e.y, e.z].map((v) => r3(MathUtils.radToDeg(v)));
}

// ---------------------------------------------------------------- surface of a part

const cache = new WeakMap();

// World-space triangles of a node and their edge / face analysis (cached per shape + pose).
export function partSurface(node) {
  const g = nodeGeometry(node);
  const key = JSON.stringify([node.pos, node.rot]);
  const hit = cache.get(g);
  if (hit && hit.key === key) return hit.an;
  const m = nodeMatrix(node, new Matrix4()).elements;
  const a = g.getAttribute('position').array;
  const pos = new Float64Array(a.length);
  for (let i = 0; i < a.length; i += 3) {
    const x = a[i], y = a[i + 1], z = a[i + 2];
    pos[i] = m[0] * x + m[4] * y + m[8] * z + m[12];
    pos[i + 1] = m[1] * x + m[5] * y + m[9] * z + m[13];
    pos[i + 2] = m[2] * x + m[6] * y + m[10] * z + m[14];
  }
  const an = analyzeSurface(pos);
  an.pos = pos;
  cache.set(g, { key, an });
  return an;
}

function worldCenter(an) {
  return [0, 1, 2].map((k) => r3((an.bbox.min[k] + an.bbox.max[k]) / 2));
}

// The part moved into a new group (centered on the part), ready for extra children.
function wrap(node, an) {
  const c = worldCenter(an);
  const inner = JSON.parse(JSON.stringify(node));
  inner.pos = inner.pos.map((v, i) => r3(v - c[i]));
  const g = G(node.name, [inner], node.color);
  g.pos = c;
  return { g, c };
}

// ---------------------------------------------------------------- fillet / chamfer

const KEY = (p) => p.map((v) => Math.round(v * 1000)).join(',');

// Corners where three selected convex, mutually perpendicular edges meet (and nothing
// else): a sphere-blended corner instead of the pointed meeting of three cylinders.
function sphereCorners(an, chains) {
  const ends = new Map(), all = new Map();
  const note = (map, c, i) => {
    const p = c.pts[i], k = KEY(p);
    const q = c.pts[i === 0 ? 1 : c.pts.length - 2];
    const l = map.get(k) || [];
    l.push({ c, V: p, u: norm(sub(q, p)) });
    map.set(k, l);
  };
  for (const c of an.chains) if (!c.closed) { note(all, c, 0); note(all, c, c.pts.length - 1); }
  for (const c of chains) if (!c.closed) { note(ends, c, 0); note(ends, c, c.pts.length - 1); }
  const out = [];
  for (const [k, l] of ends) {
    if (l.length !== 3 || (all.get(k) || []).length !== 3 || !l.every((x) => x.c.convex)) continue;
    const [a, b, c] = l.map((x) => x.u);
    if (Math.abs(dot(a, b)) > 0.05 || Math.abs(dot(a, c)) > 0.05 || Math.abs(dot(b, c)) > 0.05) continue;
    out.push({ V: l[0].V, u: [a, b, c] });
  }
  return out;
}

// Box (corner of the part, slightly enlarged outward) minus the blending sphere.
function cornerNode(corner, r, c) {
  const e = 0.05;
  let [u1, u2, u3] = corner.u;
  if (dot(cross(u1, u2), u3) < 0) [u2, u3] = [u3, u2];
  const V = sub(corner.V, c);
  const center = add(V, mul(add(add(u1, u2), u3), (r - e) / 2));
  const box = N('box', { w: r + e, d: r + e, h: r + e, r: 0 }, center, { rot: eulerFromAxes(u1, u2, u3), name: '角' });
  const sph = N('sphere', { dia: 2 * r, seg: 48 }, add(V, mul(add(add(u1, u2), u3), r)), { hole: true, name: '球' });
  const g = G('角の丸め', [box, sph]);
  g.hole = true;
  g.corner = { V: V.map(r3), u: [u1, u2, u3].map((u) => u.map((v) => Math.round(v * 1e5) / 1e5)) };
  return g;
}

// Largest fillet radius / chamfer size the selected edges can take: the fillet must end
// within half of each neighbouring face (measured across the face from the edge).
export function maxEdgeSize(an, chains, type) {
  const P = (i) => [an.V[i * 3], an.V[i * 3 + 1], an.V[i * 3 + 2]];
  let lim = Infinity;
  for (const c of chains) {
    const th = wedgeAngle(c);
    if (th < 0.05) return 0;
    const m = c.pts.length, i = Math.max(0, Math.min(m - 2, Math.floor((m - 1) / 2)));
    const t = norm(sub(c.pts[i + 1], c.pts[i]));
    for (const [n, other] of [[c.na[i], c.nb[i]], [c.nb[i], c.na[i]]]) {
      let u = norm(cross(t, n));
      if ((dot(u, other) < 0) !== c.convex) u = mul(u, -1);
      let ext = 0;
      for (const rid of c.regions) {
        const reg = an.regions[rid];
        if (!reg || dot(reg.n, n) < 0.99) continue;
        for (const tr of reg.tris) for (let k = 0; k < 3; k++) ext = Math.max(ext, dot(sub(P(an.tri[tr * 3 + k]), c.pts[i]), u));
      }
      if (ext > 0) lim = Math.min(lim, (ext / 2) / Math.max(1e-6, tangentLength(type, 1, th)));
    }
  }
  return lim;
}

// Rounds (fillet) or bevels (chamfer) the given chains of `node`. Returns the new group.
export function filletEdges(node, an, chains, { type = 'fillet', r = 1 } = {}) {
  const { g, c } = wrap(node, an);
  for (const ch of chains) {
    const pk = packChain(ch);
    pk.pts = pk.pts.map((p) => sub(p, c).map(r3));
    const f = N('fillet', { type, r, ...pk }, [0, 0, 0], { hole: !pk.concave, name: type === 'chamfer' ? '面取り' : 'フィレット' });
    f.params = { type, r, sym: true, ...pk };
    g.children.push(f);
  }
  if (type === 'fillet') for (const corner of sphereCorners(an, chains)) g.children.push(cornerNode(corner, r, c));
  g.edgeOp = { type, r };
  return g;
}

// Changes the size of the (symmetric) fillets or chamfers of a group made by filletEdges.
export function setEdgeSize(g, type, r) {
  for (const ch of g.children) {
    if (ch.kind === 'fillet' && ch.params.type === type && ch.params.sym !== false) {
      ch.params = { ...ch.params, r };
      if (type === 'chamfer') delete ch.params.r2;
    }
    if (ch.corner && type === 'fillet') {
      const fresh = cornerNode({ V: ch.corner.V, u: ch.corner.u }, r, [0, 0, 0]);
      ch.children = fresh.children;
    }
  }
  if (g.edgeOp?.type === type) g.edgeOp = { type, r };
}

// Fillet / chamfer children of a group, by type: { fillet: { n, r }, chamfer: { n, r } }.
export function edgeSummary(g) {
  const out = {};
  for (const ch of g.children || []) {
    if (ch.kind !== 'fillet' || ch.params.sym === false) continue;
    const s = out[ch.params.type] || (out[ch.params.type] = { n: 0, r: ch.params.r });
    s.n++;
  }
  return out;
}

// ---------------------------------------------------------------- push / pull

// Moves a loop's edges by e to their right (away from the face region, which stays on
// the left of its boundary): outer loops grow, holes shrink. Miter joins, capped.
function offsetLoop(loop, e) {
  const n = loop.length;
  return loop.map((p, i) => {
    const a = loop[(i - 1 + n) % n], b = loop[(i + 1) % n];
    const d1 = [p[0] - a[0], p[1] - a[1]], d2 = [b[0] - p[0], b[1] - p[1]];
    const l1 = Math.hypot(...d1) || 1, l2 = Math.hypot(...d2) || 1;
    const n1 = [d1[1] / l1, -d1[0] / l1], n2 = [d2[1] / l2, -d2[0] / l2];
    let m = [n1[0] + n2[0], n1[1] + n2[1]];
    const ml = Math.hypot(...m);
    if (ml < 1e-9) m = n1; else m = [m[0] / ml, m[1] / ml];
    const k = Math.min(3, 1 / Math.max(0.2, m[0] * n1[0] + m[1] * n1[1]));
    return [p[0] + m[0] * e * k, p[1] + m[1] * e * k];
  });
}

// Extrudes planar faces outward (d > 0, adds material) or cuts them in (d < 0).
export function pushPull(node, an, regionIds, d) {
  const { g, c } = wrap(node, an);
  const e = 0.05;
  for (const rid of regionIds) {
    const o = regionOutline(an, rid);
    if (!o.shapes.length) continue;
    const cut = d < 0;
    // A cut whose side walls coincided with the part's walls would leave a film behind.
    if (cut) o.shapes = o.shapes.map((s) => ({ o: offsetLoop(s.o, e), h: s.h.map((l) => offsetLoop(l, e)) }));
    let u0 = Infinity, u1 = -Infinity, v0 = Infinity, v1 = -Infinity;
    for (const s of o.shapes) for (const [u, v] of s.o) { u0 = Math.min(u0, u); u1 = Math.max(u1, u); v0 = Math.min(v0, v); v1 = Math.max(v1, v); }
    const h = Math.abs(d) + e;
    const zc = cut ? (d + e) / 2 : (d - e) / 2;
    const p = add(add(add(o.origin, mul(o.U, (u0 + u1) / 2)), mul(o.V, (v0 + v1) / 2)), mul(o.N, zc));
    const shapes = o.shapes.map((s) => ({ o: s.o.map((q) => q.map(r3)), h: s.h.map((l) => l.map((q) => q.map(r3))) }));
    const n = N('outline', { h, shapes, src: { type: 'face' } }, sub(p, c), { rot: eulerFromAxes(o.U, o.V, o.N), hole: cut, name: cut ? '面の凹み' : '面の押し出し', color: node.color });
    g.children.push(n);
  }
  return g;
}

// Area (mm²) of the given regions.
export const regionsArea = (an, ids) => ids.reduce((s, id) => s + an.regions[id].area, 0);
