// Clean feature edges for boolean (CSG) results, used by the viewport outline and drawings.
import { BufferGeometry, Float32BufferAttribute, Vector3 } from '../../vendor/vendor.js';

// Feature edges of a triangle soup: creases sharper than angleDeg, plus open
// boundaries. Boolean results contain T-junctions (a long edge on one side, several short
// ones on the other); such edges lie inside a smooth region and are dropped by checking
// whether a neighbouring triangle within the crease angle covers the edge midpoint.
// With `smooth`, edges between gently curved faces are returned too, as
// [A, B, n1, n2], so drawings can pick the silhouette for each view direction.
export function featureEdges(soup, angleDeg = 20, smooth = null) {
  const q = (v) => Math.round(v * 1e4);
  const vid = new Map(), verts = [];
  const id = (x, y, z) => {
    const k = `${q(x)},${q(y)},${q(z)}`;
    let i = vid.get(k);
    if (i === undefined) { i = verts.length; vid.set(k, i); verts.push(new Vector3(x, y, z)); }
    return i;
  };
  const faces = [];
  for (let i = 0; i < soup.length; i += 9) {
    const a = id(soup[i], soup[i + 1], soup[i + 2]), b = id(soup[i + 3], soup[i + 4], soup[i + 5]), c = id(soup[i + 6], soup[i + 7], soup[i + 8]);
    if (a === b || b === c || a === c) continue;
    const A = verts[a], B = verts[b], C = verts[c];
    const n = new Vector3().subVectors(B, A).cross(new Vector3().subVectors(C, A));
    // Slivers (thinner than 2 µm) have no area worth drawing and unreliable normals
    // (float32 coordinates), which would show up as false creases; the faces around them
    // close the gap within the containment tolerance below.
    const L = Math.sqrt(Math.max(A.distanceToSquared(B), B.distanceToSquared(C), C.distanceToSquared(A)));
    if (n.length() < 2e-3 * L || n.lengthSq() < 1e-14) continue;
    n.normalize();
    faces.push({ v: [a, b, c], n, d: n.dot(verts[a]) });
  }
  const edgeMap = new Map();
  faces.forEach((f, fi) => {
    for (let k = 0; k < 3; k++) {
      const a = f.v[k], b = f.v[(k + 1) % 3];
      const key = a < b ? `${a}_${b}` : `${b}_${a}`;
      let e = edgeMap.get(key);
      if (!e) { e = { a, b, faces: [] }; edgeMap.set(key, e); }
      e.faces.push(fi);
    }
  });
  // Uniform grid over face bounding boxes, so the T-junction test only looks at
  // nearby coplanar faces (large flat regions would otherwise be O(n²)).
  const bmin = new Vector3(Infinity, Infinity, Infinity), bmax = new Vector3(-Infinity, -Infinity, -Infinity);
  for (const v of verts) { bmin.min(v); bmax.max(v); }
  const cell = Math.max(bmax.x - bmin.x, bmax.y - bmin.y, bmax.z - bmin.z, 1e-3) / 48;
  const ci = (x, o) => Math.floor((x - o) / cell);
  const grid = new Map();
  faces.forEach((f, fi) => {
    const [a, b, c] = f.v.map((i) => verts[i]);
    const x0 = ci(Math.min(a.x, b.x, c.x), bmin.x), x1 = ci(Math.max(a.x, b.x, c.x), bmin.x);
    const y0 = ci(Math.min(a.y, b.y, c.y), bmin.y), y1 = ci(Math.max(a.y, b.y, c.y), bmin.y);
    const z0 = ci(Math.min(a.z, b.z, c.z), bmin.z), z1 = ci(Math.max(a.z, b.z, c.z), bmin.z);
    for (let i = x0; i <= x1; i++) for (let j = y0; j <= y1; j++) for (let k = z0; k <= z1; k++) {
      const key = `${i},${j},${k}`;
      let list = grid.get(key);
      if (!list) grid.set(key, list = []);
      list.push(fi);
    }
  });
  const cosLimit = Math.cos((angleDeg * Math.PI) / 180);
  // On curved surfaces the neighbour across a T-junction is not coplanar, only close in
  // direction: accept any face within the crease angle whose plane holds the point.
  const tol = 2.5e-3 + Math.max(bmax.x - bmin.x, bmax.y - bmin.y, bmax.z - bmin.z) * 1e-6;
  const smoothNeighbour = (f, g, p) => f.n.dot(g.n) > cosLimit && Math.abs(g.n.dot(p) - g.d) < 3e-3;
  const e1 = new Vector3(), e2 = new Vector3(), cr = new Vector3();
  // Containment with an absolute tolerance (in mm): boolean results are full of long
  // slivers, where a relative (barycentric) tolerance would be far too strict.
  const inside = (g, p) => {
    for (let k = 0; k < 3; k++) {
      const a = verts[g.v[k]], b = verts[g.v[(k + 1) % 3]];
      e1.subVectors(b, a);
      const len = e1.length();
      if (len < 1e-12) return false;
      cr.crossVectors(e1, e2.subVectors(p, a));
      if (cr.dot(g.n) / len < -tol) return false;
    }
    return true;
  };
  const covers = (fi, p, skip) => {
    const f = faces[fi];
    for (const gi of grid.get(`${ci(p.x, bmin.x)},${ci(p.y, bmin.y)},${ci(p.z, bmin.z)}`) || []) {
      if (gi !== skip && smoothNeighbour(f, faces[gi], p) && inside(faces[gi], p)) return true;
    }
    return false;
  };
  const out = [];
  for (const e of edgeMap.values()) {
    const A = verts[e.a], B = verts[e.b];
    if (e.faces.length === 2) {
      const n1 = faces[e.faces[0]].n, n2 = faces[e.faces[1]].n;
      if (n1.dot(n2) < cosLimit) out.push([A, B]);
      else if (smooth) smooth.push([A, B, n1, n2]);
    } else if (e.faces.length === 1) {
      const mid = new Vector3().addVectors(A, B).multiplyScalar(0.5);
      if (!covers(e.faces[0], mid, e.faces[0])) out.push([A, B]);
    } else {
      out.push([A, B]);
    }
  }
  return out;
}

// Line geometry for a mesh's feature edges (local coordinates).
export function edgeLines(geometry, angleDeg = 30) {
  const segs = featureEdges(geometry.getAttribute('position').array, angleDeg);
  const out = new Float32Array(segs.length * 6);
  segs.forEach(([a, b], i) => { out.set([a.x, a.y, a.z, b.x, b.y, b.z], i * 6); });
  const g = new BufferGeometry();
  g.setAttribute('position', new Float32BufferAttribute(out, 3));
  return g;
}
