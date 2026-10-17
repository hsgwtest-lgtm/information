// Mesh repair for boolean results. three-bvh-csg leaves T-junctions: a long edge on one
// side of a seam and several short ones on the other, meeting at vertices that lie on the
// long edge. Rendered, the hairline gaps along such seams show as sparkles; sliced, they
// are open edges. fixTJunctions() splits each long edge at the vertices lying on it, so
// both sides share the same vertices. Pure math (runs in Node for tests).

// 32-bit hash of an integer cell (collisions only cost time: candidates are checked).
const cellHash = (x, y, z) => (Math.imul(x, 73856093) ^ Math.imul(y, 19349663) ^ Math.imul(z, 83492791)) | 0;

// soup: Float32Array of triangles (9 numbers each). Returns a new Float32Array (or the
// input when nothing needed fixing).
export function fixTJunctions(soup, { maxTris = 300000 } = {}) {
  const nt = Math.floor(soup.length / 9);
  if (!nt || nt > maxTris) return soup;
  let lx = Infinity, ly = Infinity, lz = Infinity, hx = -Infinity, hy = -Infinity, hz = -Infinity;
  for (let i = 0; i < nt * 9; i += 3) {
    const x = soup[i], y = soup[i + 1], z = soup[i + 2];
    if (x < lx) lx = x; if (x > hx) hx = x;
    if (y < ly) ly = y; if (y > hy) hy = y;
    if (z < lz) lz = z; if (z > hz) hz = z;
  }
  const diag = Math.hypot(hx - lx, hy - ly, hz - lz) || 1;
  // mm: "on the edge" / "same vertex". Real T-junction vertices sit within float noise of
  // the long edge (≤ 1e-6 mm on a 50 mm part); vertices 1e-5 or more away belong to other
  // faces, and splitting at them would leave slivers.
  const tol = 2e-6 + diag * 5e-8;

  // ---- weld (tolerant: neighbouring cells are checked when close to a cell border)
  const V = new Float64Array(nt * 9 + 3 * nt); // room for the welded corners + centroids
  let nv = 0;
  const cellW = tol * 8;
  const wmap = new Map();
  const T = new Int32Array(nt * 3);
  for (let i = 0; i < nt * 3; i++) {
    const x = soup[i * 3], y = soup[i * 3 + 1], z = soup[i * 3 + 2];
    const fx = (x - lx) / cellW, fy = (y - ly) / cellW, fz = (z - lz) / cellW;
    const ix = Math.floor(fx), iy = Math.floor(fy), iz = Math.floor(fz);
    const x0 = fx - ix < 0.2 ? ix - 1 : ix, x1 = fx - ix > 0.8 ? ix + 1 : ix;
    const y0 = fy - iy < 0.2 ? iy - 1 : iy, y1 = fy - iy > 0.8 ? iy + 1 : iy;
    const z0 = fz - iz < 0.2 ? iz - 1 : iz, z1 = fz - iz > 0.8 ? iz + 1 : iz;
    let found = -1;
    for (let a = x0; a <= x1 && found < 0; a++) for (let b = y0; b <= y1 && found < 0; b++) for (let c = z0; c <= z1 && found < 0; c++) {
      const l = wmap.get(cellHash(a, b, c));
      if (!l) continue;
      for (let m = 0; m < l.length; m++) {
        const v = l[m];
        if (Math.abs(V[v * 3] - x) <= tol && Math.abs(V[v * 3 + 1] - y) <= tol && Math.abs(V[v * 3 + 2] - z) <= tol) { found = v; break; }
      }
    }
    if (found < 0) {
      found = nv++;
      V[found * 3] = x; V[found * 3 + 1] = y; V[found * 3 + 2] = z;
      const k = cellHash(ix, iy, iz);
      const l = wmap.get(k);
      if (l) l.push(found); else wmap.set(k, [found]);
    }
    T[i] = found;
  }
  // Slivers a few tolerances thin are noise from the boolean (and the weld can turn them
  // over): drop them, they cover no area. Marked by collapsing them to a point.
  const hmin = tol * 4;
  for (let t = 0; t < nt; t++) {
    const a = T[t * 3] * 3, b = T[t * 3 + 1] * 3, c = T[t * 3 + 2] * 3;
    if (a === b || b === c || a === c) continue;
    const ux = V[b] - V[a], uy = V[b + 1] - V[a + 1], uz = V[b + 2] - V[a + 2];
    const vx = V[c] - V[a], vy = V[c + 1] - V[a + 1], vz = V[c + 2] - V[a + 2];
    const wx = vx - ux, wy = vy - uy, wz = vz - uz;
    const L = Math.sqrt(Math.max(ux * ux + uy * uy + uz * uz, vx * vx + vy * vy + vz * vz, wx * wx + wy * wy + wz * wz));
    const cr = Math.hypot(uy * vz - uz * vy, uz * vx - ux * vz, ux * vy - uy * vx);
    if (cr < hmin * L) T[t * 3 + 1] = T[t * 3 + 2] = T[t * 3];
  }

  // ---- edges used by one triangle only (T-junction candidates)
  const ekey = (a, b) => (a < b ? a * 4294967296 + b : b * 4294967296 + a);
  const count = new Map();
  for (let t = 0; t < nt; t++) {
    const a = T[t * 3], b = T[t * 3 + 1], c = T[t * 3 + 2];
    if (a === b || b === c || a === c) continue;
    let k = ekey(a, b); count.set(k, (count.get(k) || 0) + 1);
    k = ekey(b, c); count.set(k, (count.get(k) || 0) + 1);
    k = ekey(c, a); count.set(k, (count.get(k) || 0) + 1);
  }
  const lone = [];
  const onLone = new Uint8Array(nv);
  for (const [k, n] of count) {
    if (n !== 1) continue;
    const a = Math.floor(k / 4294967296), b = k - a * 4294967296;
    lone.push(a, b);
    onLone[a] = 1; onLone[b] = 1;
  }
  if (!lone.length) return soup;

  // ---- vertices of lone edges in a grid (also in a neighbouring cell when within tol of
  // its border), then for each lone edge, walk the cells it passes through.
  const cs = Math.max(diag / 128, tol * 16);
  const g = new Map();
  const put = (k, v) => { const l = g.get(k); if (l) l.push(v); else g.set(k, [v]); };
  for (let v = 0; v < nv; v++) {
    if (!onLone[v]) continue;
    const fx = (V[v * 3] - lx) / cs, fy = (V[v * 3 + 1] - ly) / cs, fz = (V[v * 3 + 2] - lz) / cs;
    const ix = Math.floor(fx), iy = Math.floor(fy), iz = Math.floor(fz);
    const e = tol / cs;
    const xs = fx - ix < e ? [ix, ix - 1] : fx - ix > 1 - e ? [ix, ix + 1] : [ix];
    const ys = fy - iy < e ? [iy, iy - 1] : fy - iy > 1 - e ? [iy, iy + 1] : [iy];
    const zs = fz - iz < e ? [iz, iz - 1] : fz - iz > 1 - e ? [iz, iz + 1] : [iz];
    for (const a of xs) for (const b of ys) for (const c of zs) put(cellHash(a, b, c), v);
  }
  const splits = new Map(); // edge key -> { a, list: [v…] } ordered from a
  const found = [];
  for (let e = 0; e < lone.length; e += 2) {
    const a = lone[e], b = lone[e + 1];
    const ax = V[a * 3], ay = V[a * 3 + 1], az = V[a * 3 + 2];
    const dx = V[b * 3] - ax, dy = V[b * 3 + 1] - ay, dz = V[b * 3 + 2] - az;
    const L2 = dx * dx + dy * dy + dz * dz, L = Math.sqrt(L2);
    if (L < tol * 2) continue;
    found.length = 0;
    // 3D DDA over the cells from a to b.
    let ix = Math.floor((ax - lx) / cs), iy = Math.floor((ay - ly) / cs), iz = Math.floor((az - lz) / cs);
    const ex = Math.floor((ax + dx - lx) / cs), ey = Math.floor((ay + dy - ly) / cs), ez = Math.floor((az + dz - lz) / cs);
    const sx = dx > 0 ? 1 : -1, sy = dy > 0 ? 1 : -1, sz = dz > 0 ? 1 : -1;
    const tdx = dx !== 0 ? cs / Math.abs(dx) : Infinity, tdy = dy !== 0 ? cs / Math.abs(dy) : Infinity, tdz = dz !== 0 ? cs / Math.abs(dz) : Infinity;
    let tmx = dx !== 0 ? ((ix + (sx > 0 ? 1 : 0)) * cs + lx - ax) / dx : Infinity;
    let tmy = dy !== 0 ? ((iy + (sy > 0 ? 1 : 0)) * cs + ly - ay) / dy : Infinity;
    let tmz = dz !== 0 ? ((iz + (sz > 0 ? 1 : 0)) * cs + lz - az) / dz : Infinity;
    let guard = Math.abs(ex - ix) + Math.abs(ey - iy) + Math.abs(ez - iz) + 4;
    for (;;) {
      const l = g.get(cellHash(ix, iy, iz));
      if (l) {
        for (let m = 0; m < l.length; m++) {
          const v = l[m];
          if (v === a || v === b) continue;
          const px = V[v * 3] - ax, py = V[v * 3 + 1] - ay, pz = V[v * 3 + 2] - az;
          const t = (px * dx + py * dy + pz * dz) / L2;
          if (t * L <= tol || (1 - t) * L <= tol) continue;
          const qx = px - dx * t, qy = py - dy * t, qz = pz - dz * t;
          if (qx * qx + qy * qy + qz * qz <= tol * tol) found.push(t, v);
        }
      }
      if ((ix === ex && iy === ey && iz === ez) || --guard < 0) break;
      if (tmx <= tmy && tmx <= tmz) { ix += sx; tmx += tdx; } else if (tmy <= tmz) { iy += sy; tmy += tdy; } else { iz += sz; tmz += tdz; }
    }
    if (!found.length) continue;
    const pairs = [];
    for (let m = 0; m < found.length; m += 2) pairs.push([found[m], found[m + 1]]);
    pairs.sort((p, q) => p[0] - q[0]);
    const list = [];
    for (const [, v] of pairs) if (list[list.length - 1] !== v) list.push(v);
    splits.set(ekey(a, b), { a, list });
  }
  if (!splits.size) return soup;

  // ---- re-triangulate the triangles that have split edges
  const out = new Float32Array(nt * 9 * 2 + 64);
  let o = 0;
  let buf = out;
  // Each new triangle must face the way its source triangle did: in slivers, a vertex that
  // is a hair off the edge (or a weld) can turn a piece over. Such pieces have next to no
  // area and are dropped.
  let n0x = 0, n0y = 0, n0z = 0;
  const push = (p, q, r) => {
    const ux = V[q * 3] - V[p * 3], uy = V[q * 3 + 1] - V[p * 3 + 1], uz = V[q * 3 + 2] - V[p * 3 + 2];
    const vx = V[r * 3] - V[p * 3], vy = V[r * 3 + 1] - V[p * 3 + 1], vz = V[r * 3 + 2] - V[p * 3 + 2];
    if ((uy * vz - uz * vy) * n0x + (uz * vx - ux * vz) * n0y + (ux * vy - uy * vx) * n0z <= 0) return;
    if (o + 9 > buf.length) { const nb = new Float32Array(buf.length * 2); nb.set(buf); buf = nb; }
    for (const v of [p, q, r]) { buf[o++] = V[v * 3]; buf[o++] = V[v * 3 + 1]; buf[o++] = V[v * 3 + 2]; }
  };
  const sideOf = (p, q) => {
    const s = splits.get(ekey(p, q));
    if (!s) return null;
    return s.a === p ? s.list : [...s.list].reverse();
  };
  for (let t = 0; t < nt; t++) {
    const A = T[t * 3], B = T[t * 3 + 1], C = T[t * 3 + 2];
    if (A === B || B === C || A === C) continue;
    const s9 = t * 9;
    const ux = soup[s9 + 3] - soup[s9], uy = soup[s9 + 4] - soup[s9 + 1], uz = soup[s9 + 5] - soup[s9 + 2];
    const vx = soup[s9 + 6] - soup[s9], vy = soup[s9 + 7] - soup[s9 + 1], vz = soup[s9 + 8] - soup[s9 + 2];
    n0x = uy * vz - uz * vy; n0y = uz * vx - ux * vz; n0z = ux * vy - uy * vx;
    // Points on each edge, in the triangle's own order.
    const sAB = sideOf(A, B), sBC = sideOf(B, C), sCA = sideOf(C, A);
    const nSplit = (sAB ? 1 : 0) + (sBC ? 1 : 0) + (sCA ? 1 : 0);
    if (!nSplit) { push(A, B, C); continue; }
    if (nSplit === 1) {
      // Fan from the corner opposite the split edge.
      const [p, q, apex, side] = sAB ? [A, B, C, sAB] : sBC ? [B, C, A, sBC] : [C, A, B, sCA];
      let prev = p;
      for (const v of side) { push(apex, prev, v); prev = v; }
      push(apex, prev, q);
      continue;
    }
    // Several split edges: fan from the centroid.
    const c = nv++;
    for (let d = 0; d < 3; d++) V[c * 3 + d] = (V[A * 3 + d] + V[B * 3 + d] + V[C * 3 + d]) / 3;
    const ring = [A, ...(sAB || []), B, ...(sBC || []), C, ...(sCA || [])];
    for (let i = 0; i < ring.length; i++) push(c, ring[i], ring[(i + 1) % ring.length]);
  }
  return buf.slice(0, o);
}
