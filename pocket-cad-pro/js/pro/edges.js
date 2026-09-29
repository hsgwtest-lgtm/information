// Clean feature edges for boolean (CSG) results, used by the viewport outline and drawings.
import { BufferGeometry, Float32BufferAttribute, Vector3 } from '../../vendor/vendor.js';

// Feature edges of a triangle soup: creases sharper than angleDeg, plus open
// boundaries. Boolean results contain T-junctions (a long edge on one side, several short
// ones on the other); such edges lie inside a flat region and are dropped by checking
// whether a coplanar neighbouring triangle covers the edge midpoint.
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
    const n = new Vector3().subVectors(verts[b], verts[a]).cross(new Vector3().subVectors(verts[c], verts[a]));
    if (n.lengthSq() < 1e-14) continue;
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
  // Faces grouped by plane, for the T-junction test.
  const planeKey = (f) => `${Math.round(f.n.x * 1e3)},${Math.round(f.n.y * 1e3)},${Math.round(f.n.z * 1e3)},${Math.round(f.d * 1e2)}`;
  const byPlane = new Map();
  faces.forEach((f, fi) => { const k = planeKey(f); if (!byPlane.has(k)) byPlane.set(k, []); byPlane.get(k).push(fi); });
  const covers = (fi, p, skip) => {
    for (const gi of byPlane.get(planeKey(faces[fi])) || []) {
      if (gi === skip) continue;
      const [a, b, c] = faces[gi].v.map((i) => verts[i]);
      // Barycentric containment with a small tolerance (the point lies on this face's plane).
      const v0 = new Vector3().subVectors(c, a), v1 = new Vector3().subVectors(b, a), v2 = new Vector3().subVectors(p, a);
      const d00 = v0.dot(v0), d01 = v0.dot(v1), d02 = v0.dot(v2), d11 = v1.dot(v1), d12 = v1.dot(v2);
      const inv = 1 / (d00 * d11 - d01 * d01);
      const u = (d11 * d02 - d01 * d12) * inv, w = (d00 * d12 - d01 * d02) * inv;
      if (u >= -1e-4 && w >= -1e-4 && u + w <= 1 + 1e-4) return true;
    }
    return false;
  };
  const cosLimit = Math.cos((angleDeg * Math.PI) / 180);
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
