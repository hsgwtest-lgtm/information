// Shape building: turns document nodes into BufferGeometry (Z-up, mm).
// Every primitive is centered on its local origin. The node's scale is baked
// into the geometry here, so meshes/brushes only carry position + rotation.
import {
  BufferGeometry, Float32BufferAttribute, BoxGeometry, CylinderGeometry, SphereGeometry,
  TorusGeometry, ExtrudeGeometry, LatheGeometry, Shape, Path, Vector2, Matrix4, Euler,
  MathUtils, ShapeUtils, TextGeometry, RoundedBoxGeometry, mergeVertices,
  Brush, Evaluator, ADDITION, SUBTRACTION, INTERSECTION,
} from '../vendor/vendor.js';
import { flattenSketch } from './bezier.js';

let font = null;
export function setFont(f) { font = f; }

const HALF_PI = Math.PI / 2;

// Parameter definitions drive both defaults and the property panel.
// [key, label, default, min, step]
export const KINDS = {
  box:      { label: '直方体', icon: 'box', params: [['w', '幅 X', 20, 0.1, 1], ['d', '奥行 Y', 20, 0.1, 1], ['h', '高さ Z', 20, 0.1, 1], ['r', '角丸 R', 0, 0, 0.5]] },
  cylinder: { label: '円柱', icon: 'cylinder', params: [['dia', '直径', 20, 0.1, 1], ['h', '高さ', 20, 0.1, 1], ['seg', '分割数', 64, 3, 1]] },
  cone:     { label: '円錐', icon: 'cone', params: [['d1', '下直径', 20, 0, 1], ['d2', '上直径', 0, 0, 1], ['h', '高さ', 20, 0.1, 1], ['seg', '分割数', 64, 3, 1]] },
  sphere:   { label: '球', icon: 'sphere', params: [['dia', '直径', 20, 0.1, 1], ['seg', '分割数', 48, 8, 1]] },
  torus:    { label: 'トーラス', icon: 'torus', params: [['D', '外径', 30, 1, 1], ['t', '太さ', 6, 0.1, 0.5], ['seg', '分割数', 48, 8, 1]] },
  tube:     { label: 'パイプ', icon: 'tube', params: [['od', '外径', 20, 0.2, 1], ['id', '内径', 14, 0.1, 1], ['h', '高さ', 20, 0.1, 1], ['seg', '分割数', 64, 3, 1]] },
  prism:    { label: '多角柱', icon: 'prism', params: [['n', '角数', 6, 3, 1], ['dia', '外接円径', 20, 0.1, 1], ['h', '高さ', 20, 0.1, 1]] },
  wedge:    { label: 'くさび', icon: 'wedge', params: [['w', '幅 X', 20, 0.1, 1], ['d', '奥行 Y', 20, 0.1, 1], ['h', '高さ Z', 20, 0.1, 1]] },
  text:     { label: '文字', icon: 'text', params: [['size', '文字高', 10, 1, 1], ['h', '厚み', 3, 0.1, 0.5]], text: true },
  extrude:  { label: 'スケッチ', icon: 'sketch', params: [['h', '高さ', 10, 0.1, 1]], sketch: true },
  revolve:  { label: '回転体', icon: 'revolve', params: [['seg', '分割数', 64, 3, 1], ['angle', '角度', 360, 1, 15]], sketch: true },
  mesh:     { label: 'STL', icon: 'mesh', params: [] },
  group:    { label: 'グループ', icon: 'group', params: [] },
};

// Kinds whose size is controlled by params; everything else is sized via scale.
export const PARAM_SIZED = new Set(['box', 'cylinder', 'cone', 'sphere', 'torus', 'tube', 'prism', 'wedge']);

export function defaultParams(kind) {
  const p = {};
  for (const [k, , def] of KINDS[kind].params) p[k] = def;
  if (kind === 'text') p.text = 'Hello';
  if (kind === 'extrude' || kind === 'revolve') p.curves = null;
  if (kind === 'extrude') p.pts = [[-10, -10], [10, -10], [10, 10], [-10, 10]];
  if (kind === 'revolve') p.pts = [[0, 0], [10, 0], [10, 3], [4, 6], [4, 20], [0, 20]];
  return p;
}

const clampSeg = (v, min = 3) => Math.max(min, Math.min(256, Math.round(v || min)));

function yUpToZUp(g) { g.rotateX(HALF_PI); return g; }

function ringShape(outerR, innerR, seg) {
  const s = new Shape();
  s.absarc(0, 0, outerR, 0, Math.PI * 2, false);
  if (innerR > 0) {
    const h = new Path();
    h.absarc(0, 0, innerR, 0, Math.PI * 2, true);
    s.holes.push(h);
  }
  return s;
}

function polygonArea(pts) {
  let a = 0;
  for (let i = 0; i < pts.length; i++) {
    const [x1, y1] = pts[i], [x2, y2] = pts[(i + 1) % pts.length];
    a += x1 * y2 - x2 * y1;
  }
  return a / 2;
}

function primitive(kind, p) {
  switch (kind) {
    case 'box': {
      const r = Math.min(p.r || 0, p.w / 2 - 0.01, p.d / 2 - 0.01, p.h / 2 - 0.01);
      if (r > 0.01) return new RoundedBoxGeometry(p.w, p.d, p.h, 4, r);
      return new BoxGeometry(p.w, p.d, p.h);
    }
    case 'cylinder':
      return yUpToZUp(new CylinderGeometry(p.dia / 2, p.dia / 2, p.h, clampSeg(p.seg)));
    case 'cone': {
      // A true apex (radius 0) collapses triangles; keep a tiny tip so CSG stays happy.
      const r1 = Math.max(p.d1 / 2, 0.001), r2 = Math.max(p.d2 / 2, 0.001);
      return yUpToZUp(new CylinderGeometry(r2, r1, p.h, clampSeg(p.seg)));
    }
    case 'sphere': {
      const s = clampSeg(p.seg, 8);
      return yUpToZUp(new SphereGeometry(p.dia / 2, s, Math.max(4, Math.round(s / 2))));
    }
    case 'torus': {
      const s = clampSeg(p.seg, 8);
      const tube = Math.min(p.t / 2, p.D / 2 - 0.01);
      return new TorusGeometry(p.D / 2 - tube, tube, Math.max(8, Math.round(s / 2)), s);
    }
    case 'tube': {
      const od = Math.max(p.od, 0.2), id = Math.min(Math.max(p.id, 0), od - 0.1);
      const g = new ExtrudeGeometry(ringShape(od / 2, id / 2), {
        depth: p.h, bevelEnabled: false, curveSegments: Math.ceil(clampSeg(p.seg) / 4),
      });
      g.translate(0, 0, -p.h / 2);
      return g;
    }
    case 'prism': {
      const g = new CylinderGeometry(p.dia / 2, p.dia / 2, p.h, clampSeg(p.n), 1);
      // Put a flat side along X for nicer defaults.
      g.rotateY(Math.PI / clampSeg(p.n) + HALF_PI);
      return yUpToZUp(g);
    }
    case 'wedge': {
      const s = new Shape([new Vector2(0, 0), new Vector2(p.w, 0), new Vector2(0, p.h)]);
      const g = new ExtrudeGeometry(s, { depth: p.d, bevelEnabled: false });
      g.rotateX(HALF_PI); // shape XY -> XZ, extrusion along -Y
      g.translate(-p.w / 2, p.d / 2, -p.h / 2);
      return g;
    }
    case 'text': {
      if (!font) return new BoxGeometry(1, 1, 1);
      const str = (p.text || '').trim() || ' ';
      const g = new TextGeometry(str, { font, size: p.size, depth: p.h, curveSegments: 6, bevelEnabled: false });
      g.computeBoundingBox();
      const b = g.boundingBox;
      if (b.isEmpty()) return new BoxGeometry(1, 1, 1);
      g.translate(-(b.min.x + b.max.x) / 2, -(b.min.y + b.max.y) / 2, -(b.min.z + b.max.z) / 2);
      return g;
    }
    case 'extrude': {
      const flat = flattenSketch(p.pts || [], p.curves);
      if (flat.length < 3 || Math.abs(polygonArea(flat)) < 1e-6) return new BoxGeometry(1, 1, 1);
      const pts = flat.map(([x, y]) => new Vector2(x, y));
      const g = new ExtrudeGeometry(new Shape(pts), { depth: p.h, bevelEnabled: false });
      g.translate(0, 0, -p.h / 2);
      return g;
    }
    case 'revolve': {
      // Sketch x = radius, y = height. Profile is a closed polygon.
      let pts = flattenSketch(p.pts || [], p.curves).map(([x, y]) => [Math.max(0, x), y]);
      if (pts.length < 3 || Math.abs(polygonArea(pts)) < 1e-6) return new BoxGeometry(1, 1, 1);
      // Lathe needs a consistent winding to produce outward-facing normals.
      if (polygonArea(pts) < 0) pts = pts.reverse();
      const loop = pts.map(([x, y]) => new Vector2(x, y));
      loop.push(loop[0].clone());
      const angle = Math.min(360, Math.max(1, p.angle || 360));
      const segs = Math.max(3, Math.round(clampSeg(p.seg) * angle / 360));
      let g = new LatheGeometry(loop.reverse(), segs, 0, MathUtils.degToRad(angle));
      g = yUpToZUp(g);
      if (angle < 360) g = capLathe(g, pts, angle);
      // Keep the revolve axis at the local origin; only center vertically.
      let zmin = Infinity, zmax = -Infinity;
      for (const [, y] of pts) { zmin = Math.min(zmin, y); zmax = Math.max(zmax, y); }
      g.translate(0, 0, -(zmin + zmax) / 2);
      return g;
    }
    default:
      return new BoxGeometry(10, 10, 10);
  }
}

// Close the two flat ends of a partial revolve so the solid stays watertight.
// After yUpToZUp a lathe vertex at angle phi is (r*sin(phi), -r*cos(phi), h).
function capLathe(g, pts, angle) {
  const tris = ShapeUtils.triangulateShape(pts.map(([x, y]) => new Vector2(x, y)), []);
  const cap = (phi, sign) => {
    const s = Math.sin(phi), c = Math.cos(phi);
    const want = [sign * c, sign * s, 0]; // +/- rotation tangent
    const out = [];
    for (const t of tris) {
      const v = t.map((i) => [pts[i][0] * s, -pts[i][0] * c, pts[i][1]]);
      const e1 = [v[1][0] - v[0][0], v[1][1] - v[0][1], v[1][2] - v[0][2]];
      const e2 = [v[2][0] - v[0][0], v[2][1] - v[0][1], v[2][2] - v[0][2]];
      const n = [e1[1] * e2[2] - e1[2] * e2[1], e1[2] * e2[0] - e1[0] * e2[2], e1[0] * e2[1] - e1[1] * e2[0]];
      if (n[0] * want[0] + n[1] * want[1] + n[2] * want[2] < 0) v.reverse();
      for (const p of v) out.push(...p);
    }
    const cg = new BufferGeometry();
    cg.setAttribute('position', new Float32BufferAttribute(out, 3));
    return cg;
  };
  return mergeAll([g, cap(0, -1), cap(MathUtils.degToRad(angle), 1)]);
}

function mergeAll(geos) {
  let total = 0;
  const arrs = geos.map((geo) => {
    const ng = geo.index ? geo.toNonIndexed() : geo;
    const a = ng.getAttribute('position').array;
    total += a.length;
    return a;
  });
  const out = new Float32Array(total);
  let o = 0;
  for (const a of arrs) { out.set(a, o); o += a.length; }
  const g = new BufferGeometry();
  g.setAttribute('position', new Float32BufferAttribute(out, 3));
  return g;
}

export function decodeMesh(b64) {
  const bin = atob(b64);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return new Float32Array(bytes.buffer);
}

export function encodeMesh(f32) {
  const bytes = new Uint8Array(f32.buffer, f32.byteOffset, f32.byteLength);
  let s = '';
  const CH = 0x8000;
  for (let i = 0; i < bytes.length; i += CH) s += String.fromCharCode.apply(null, bytes.subarray(i, i + CH));
  return btoa(s);
}

// Local transform (rotation + translation, no scale) of a node.
export function nodeMatrix(node, target = new Matrix4()) {
  const e = new Euler(...node.rot.map(MathUtils.degToRad), 'XYZ');
  target.makeRotationFromEuler(e);
  target.setPosition(node.pos[0], node.pos[1], node.pos[2]);
  return target;
}

// Normalize to a clean non-indexed position+normal geometry with scale baked in.
function finish(g, scale) {
  g = g.index ? g.toNonIndexed() : g;
  for (const k of Object.keys(g.attributes)) if (k !== 'position') g.deleteAttribute(k);
  g.clearGroups();
  // Some generators emit inward-facing solids; slicers and CSG want outward normals.
  if (geometryVolume(g) < 0) flipWinding(g);
  const [sx, sy, sz] = scale || [1, 1, 1];
  if (sx !== 1 || sy !== 1 || sz !== 1) {
    g.scale(sx, sy, sz);
    if (sx * sy * sz < 0) flipWinding(g);
  }
  g.computeVertexNormals();
  g.computeBoundingBox();
  return g;
}

function flipWinding(g) {
  const a = g.getAttribute('position').array;
  for (let i = 0; i < a.length; i += 9) {
    for (let k = 0; k < 3; k++) {
      const t = a[i + 3 + k]; a[i + 3 + k] = a[i + 6 + k]; a[i + 6 + k] = t;
    }
  }
  g.getAttribute('position').needsUpdate = true;
}

// ---- cache ----
const cache = new Map();
const CACHE_MAX = 200;

function shapeKey(node) {
  // Everything that affects the node's own shape (not its own placement).
  return JSON.stringify([node.kind, node.params, node.scale, node.op,
    node.children ? node.children.map((c) => [shapeKey(c), c.pos, c.rot, c.hole]) : null,
    node.kind === 'mesh' ? node.dataId : null]);
}

const meshData = new Map(); // dataId -> Float32Array
export function registerMeshData(id, f32) { meshData.set(id, f32); }
export function getMeshData(id) { return meshData.get(id); }

let evaluator = null;
function getEvaluator() {
  if (!evaluator) {
    evaluator = new Evaluator();
    evaluator.attributes = ['position', 'normal'];
    evaluator.useGroups = false;
  }
  return evaluator;
}

// Returns a geometry in the node's local frame (scale applied). Shared: do not mutate.
export function nodeGeometry(node) {
  const key = shapeKey(node);
  const hit = cache.get(key);
  if (hit) { cache.delete(key); cache.set(key, hit); return hit; }
  let g;
  if (node.kind === 'group') g = groupGeometry(node);
  else if (node.kind === 'mesh') {
    g = new BufferGeometry();
    const d = meshData.get(node.dataId);
    g.setAttribute('position', new Float32BufferAttribute(d ? d.slice() : new Float32Array(9), 3));
  } else g = primitive(node.kind, node.params);
  g = finish(g, node.scale);
  cache.set(key, g);
  if (cache.size > CACHE_MAX) {
    const oldest = cache.keys().next().value;
    cache.get(oldest).dispose();
    cache.delete(oldest);
  }
  return g;
}

function brushFor(child) {
  const src = nodeGeometry(child);
  const g = new BufferGeometry();
  g.setAttribute('position', src.getAttribute('position').clone());
  g.setAttribute('normal', src.getAttribute('normal').clone());
  // Merge coincident vertices so the BVH sees a connected surface.
  const b = new Brush(mergeVertices(g, 1e-5));
  nodeMatrix(child, b.matrix);
  b.matrix.decompose(b.position, b.quaternion, b.scale);
  b.updateMatrixWorld(true);
  return b;
}

function groupGeometry(node) {
  const ev = getEvaluator();
  const solids = node.children.filter((c) => !c.hole && !c.hidden);
  const holes = node.children.filter((c) => c.hole && !c.hidden);
  if (!solids.length) return new BufferGeometry().setAttribute('position', new Float32BufferAttribute(new Float32Array(9), 3));
  const first = brushFor(solids[0]);
  let acc = first;
  const op = node.op === 'intersect' ? INTERSECTION : ADDITION;
  for (let i = 1; i < solids.length; i++) acc = ev.evaluate(acc, brushFor(solids[i]), op);
  for (const h of holes) acc = ev.evaluate(acc, brushFor(h), SUBTRACTION);
  // Evaluator output lives in the first operand's local frame; bring it into the group frame.
  const res = acc.geometry;
  const out = new BufferGeometry();
  out.setAttribute('position', res.getAttribute('position').clone());
  if (res.index) out.setIndex(res.index.clone());
  out.applyMatrix4(first.matrixWorld);
  return out;
}

// Signed volume (mm^3) of a closed triangle soup, after applying matrix.
export function geometryVolume(g) {
  const a = g.getAttribute('position').array;
  let v = 0;
  for (let i = 0; i < a.length; i += 9) {
    const ax = a[i], ay = a[i + 1], az = a[i + 2];
    const bx = a[i + 3], by = a[i + 4], bz = a[i + 5];
    const cx = a[i + 6], cy = a[i + 7], cz = a[i + 8];
    v += ax * (by * cz - bz * cy) - ay * (bx * cz - bz * cx) + az * (bx * cy - by * cx);
  }
  return v / 6;
}
