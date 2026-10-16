// 向きの最適化: tries many ways of putting a part on the plate (flat faces down, the six
// axis directions, and evenly spread directions in between), estimates support volume
// (ray casts find whether a support stands on the plate or on the part itself), print
// time and bed contact for each, and lets the user pick from the best candidates.
import { Matrix4, Vector3, Quaternion, Ray, DoubleSide, BufferGeometry, MeshBVH } from '../../vendor/vendor.js';
import { el, toast, openDialog, closeDialog, segmented, fmt } from '../ui.js';
import { nodeGeometry } from '../geometry.js';
import * as store from '../storage.js';
import { PRINT_DEFAULTS, estimatePrint, formatDuration } from './analysis.js';

let app;
export function initOrient(api) { app = api; }

const DOWN = new Vector3(0, 0, -1);
const SUPPORT_FILL = 0.2; // share of the support envelope that is actually printed

// ---------------------------------------------------------------- candidates

// Directions (in the part's current world frame) that could be turned to face the plate.
function candidateDirections(pos, R) {
  const dirs = [];
  const add = (v, kind) => {
    const u = v.clone().normalize();
    if (dirs.some((d) => d.u.dot(u) > 0.9975)) return; // within ~4°
    dirs.push({ u, kind });
  };
  // Keep the current orientation as a candidate (and as the reference).
  add(DOWN, 'current');
  // Large flat faces: one of them resting on the plate is usually the best choice.
  const clusters = new Map();
  const a = new Vector3(), b = new Vector3(), c = new Vector3(), n = new Vector3(), e1 = new Vector3(), e2 = new Vector3();
  let total = 0;
  for (let i = 0; i < pos.length; i += 9) {
    a.fromArray(pos, i).applyMatrix4(R); b.fromArray(pos, i + 3).applyMatrix4(R); c.fromArray(pos, i + 6).applyMatrix4(R);
    n.crossVectors(e1.subVectors(b, a), e2.subVectors(c, a));
    const area2 = n.length();
    if (area2 < 1e-9) continue;
    n.divideScalar(area2);
    total += area2 / 2;
    const key = `${Math.round(n.x * 40)},${Math.round(n.y * 40)},${Math.round(n.z * 40)}`;
    let cl = clusters.get(key);
    if (!cl) clusters.set(key, cl = { area: 0, n: new Vector3() });
    cl.area += area2 / 2;
    cl.n.addScaledVector(n, area2 / 2);
  }
  [...clusters.values()].filter((cl) => cl.area > total * 0.015).sort((p, q) => q.area - p.area).slice(0, 16)
    .forEach((cl) => add(cl.n, 'face'));
  for (const v of [[1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1]]) add(new Vector3(...v), 'axis');
  // Fibonacci sphere for everything in between.
  const K = 60;
  for (let k = 0; k < K; k++) {
    const z = 1 - (2 * (k + 0.5)) / K, r = Math.sqrt(1 - z * z), phi = k * Math.PI * (3 - Math.sqrt(5));
    add(new Vector3(r * Math.cos(phi), r * Math.sin(phi), z), 'sphere');
  }
  return dirs;
}

// Rotation that turns world direction u to face straight down.
function turnDown(u) {
  return new Matrix4().makeRotationFromQuaternion(new Quaternion().setFromUnitVectors(u, DOWN));
}

// Cheap metrics for orientation M (support envelope measured down to the plate).
// `stride` skips triangles on very large meshes; sums are scaled back up.
function quickMetrics(pos, M, sinA, stride) {
  const a = new Vector3(), b = new Vector3(), c = new Vector3(), n = new Vector3(), e1 = new Vector3(), e2 = new Vector3();
  let zmin = Infinity, zmax = -Infinity;
  const m2 = M.elements[2], m6 = M.elements[6], m10 = M.elements[10];
  for (let i = 0; i < pos.length; i += 3) {
    const z = m2 * pos[i] + m6 * pos[i + 1] + m10 * pos[i + 2];
    if (z < zmin) zmin = z;
    if (z > zmax) zmax = z;
  }
  let contact = 0, overhang = 0, support = 0;
  for (let i = 0; i < pos.length; i += 9 * stride) {
    a.fromArray(pos, i).applyMatrix4(M); b.fromArray(pos, i + 3).applyMatrix4(M); c.fromArray(pos, i + 6).applyMatrix4(M);
    n.crossVectors(e1.subVectors(b, a), e2.subVectors(c, a));
    const area2 = n.length();
    if (area2 < 1e-12) continue;
    const nz = n.z / area2, area = area2 / 2;
    if (nz > -sinA) continue;
    if (Math.max(a.z, b.z, c.z) < zmin + 0.15) { if (nz < -0.985) contact += area; continue; }
    overhang += area;
    support += area * -nz * ((a.z + b.z + c.z) / 3 - zmin);
  }
  return { zmin, height: zmax - zmin, contact: contact * stride, overhang: overhang * stride, support: support * stride };
}

// Support volume with ray casts: a support only reaches down to whatever is below it,
// which may be the part itself rather than the plate.
function refineSupport(bvh, pos, M, sinA, zmin, limit = 1600) {
  const Minv = new Matrix4().copy(M).invert();
  const down = DOWN.clone().transformDirection(Minv);
  const a = new Vector3(), b = new Vector3(), c = new Vector3(), n = new Vector3(), e1 = new Vector3(), e2 = new Vector3();
  const tris = [];
  for (let i = 0; i < pos.length; i += 9) {
    a.fromArray(pos, i).applyMatrix4(M); b.fromArray(pos, i + 3).applyMatrix4(M); c.fromArray(pos, i + 6).applyMatrix4(M);
    n.crossVectors(e1.subVectors(b, a), e2.subVectors(c, a));
    const area2 = n.length();
    if (area2 < 1e-12) continue;
    const nz = n.z / area2;
    if (nz > -sinA || Math.max(a.z, b.z, c.z) < zmin + 0.15) continue;
    tris.push([i, (area2 / 2) * -nz, (a.z + b.z + c.z) / 3 - zmin]);
  }
  if (!tris.length) return 0;
  // Sample the largest projected areas first; scale the rest by area.
  tris.sort((p, q) => q[1] - p[1]);
  const used = tris.slice(0, limit);
  const all = tris.reduce((s, t) => s + t[1], 0), part = used.reduce((s, t) => s + t[1], 0);
  const ray = new Ray(new Vector3(), down);
  let vol = 0;
  for (const [i, proj, h] of used) {
    ray.origin.set((pos[i] + pos[i + 3] + pos[i + 6]) / 3, (pos[i + 1] + pos[i + 4] + pos[i + 7]) / 3, (pos[i + 2] + pos[i + 5] + pos[i + 8]) / 3)
      .addScaledVector(down, 0.02);
    const hit = bvh.raycastFirst(ray, DoubleSide);
    vol += proj * (hit && hit.distance < h ? hit.distance : h);
  }
  return vol * (all / part);
}

// Evaluates candidate orientations of geometry g at current rotation R.
// Returns candidates with { M, metrics, ... } and the current one as `current`.
export function analyzeOrientations(g, R, { overhangDeg = 45, density = 1.24, print = PRINT_DEFAULTS } = {}) {
  const pos = g.getAttribute('position').array;
  const sinA = Math.sin((overhangDeg * Math.PI) / 180);
  const tris = pos.length / 9;
  const stride = Math.max(1, Math.ceil(tris / 120000));
  const dirs = candidateDirections(pos, R);
  const cands = dirs.map((d) => {
    const Q = d.kind === 'current' ? new Matrix4() : turnDown(d.u);
    const M = Q.clone().multiply(R);
    return { ...d, Q, M, ...quickMetrics(pos, M, sinA, stride) };
  });
  // Ray-cast refinement for the most promising few (and the current orientation).
  const world = new BufferGeometry();
  world.setAttribute('position', g.getAttribute('position').clone());
  const bvh = new MeshBVH(world);
  const byQuick = [...cands].sort((p, q) => p.support - q.support || p.height - q.height);
  const refine = new Set([cands[0], ...byQuick.slice(0, 10), ...[...cands].sort((p, q) => p.height - q.height).slice(0, 3), ...[...cands].sort((p, q) => q.contact - p.contact).slice(0, 3)]);
  // Volume / surface do not depend on orientation; only the height and the supports do.
  let volume = 0, surface = 0;
  for (let i = 0; i < pos.length; i += 9) {
    const ax = pos[i], ay = pos[i + 1], az = pos[i + 2];
    const bx = pos[i + 3] - ax, by = pos[i + 4] - ay, bz = pos[i + 5] - az;
    const cx = pos[i + 6] - ax, cy = pos[i + 7] - ay, cz = pos[i + 8] - az;
    volume += (ax * (by * cz - bz * cy) - ay * (bx * cz - bz * cx) + az * (bx * cy - by * cx)) / 6;
    surface += Math.hypot(by * cz - bz * cy, bz * cx - bx * cz, bx * cy - by * cx) / 2;
  }
  volume = Math.abs(volume);
  const flow = print.line * print.layer * print.speed * 0.6;
  const out = [];
  for (const cnd of refine) {
    cnd.support = refineSupport(bvh, pos, cnd.M, sinA, cnd.zmin);
    const base = estimatePrint({ volume, surface, height: cnd.height, density }, print);
    const supMat = cnd.support * SUPPORT_FILL;
    cnd.supportG = (supMat / 1000) * density;
    cnd.seconds = base.seconds + supMat / flow;
    out.push(cnd);
  }
  return { cands: out, current: cands[0], volume };
}

// Lower is better. Weights per priority.
export function rankOrientations({ cands, volume }, priority = 'balance') {
  const hMin = Math.min(...cands.map((c) => c.height)) || 1;
  const tMin = Math.min(...cands.map((c) => c.seconds)) || 1;
  const cMax = Math.max(...cands.map((c) => c.contact), 1e-6);
  const vRef = Math.max(volume, 1);
  const cost = (c) => {
    const sup = c.support / vRef, tall = c.height / hMin - 1, time = c.seconds / tMin - 1, grip = 1 - c.contact / cMax;
    // Balancing on an edge or a corner (almost no flat contact) is a poor start for any print.
    const tippy = c.contact < Math.min(50, cMax * 0.1) ? 1 : 0;
    if (priority === 'support') return sup + 0.05 * tall + 0.05 * grip + 0.5 * tippy;
    if (priority === 'time') return time + 0.02 * sup + 0.02 * grip + 0.5 * tippy;
    if (priority === 'stable') return grip + 0.3 * sup + 0.1 * tall + tippy;
    return sup + 0.35 * time + 0.25 * grip + 0.5 * tippy;
  };
  return [...cands].map((c) => ({ c, s: cost(c) })).sort((p, q) => p.s - q.s).map((x) => x.c);
}

// Yaw (about Z) that makes the footprint's bounding rectangle smallest; keeps parts
// square to the plate after a tilt (rotating calipers over the convex hull).
export function footprintYaw(pos, M) {
  const pts = [];
  const step = Math.max(3, 3 * Math.floor(pos.length / 3 / 20000));
  const e = M.elements;
  for (let i = 0; i < pos.length; i += step) pts.push([e[0] * pos[i] + e[4] * pos[i + 1] + e[8] * pos[i + 2], e[1] * pos[i] + e[5] * pos[i + 1] + e[9] * pos[i + 2]]);
  pts.sort((p, q) => p[0] - q[0] || p[1] - q[1]);
  const cross = (o, p, q) => (p[0] - o[0]) * (q[1] - o[1]) - (p[1] - o[1]) * (q[0] - o[0]);
  const lower = [], upper = [];
  for (const p of pts) { while (lower.length > 1 && cross(lower.at(-2), lower.at(-1), p) <= 0) lower.pop(); lower.push(p); }
  for (const p of pts.reverse()) { while (upper.length > 1 && cross(upper.at(-2), upper.at(-1), p) <= 0) upper.pop(); upper.push(p); }
  const hull = lower.slice(0, -1).concat(upper.slice(0, -1));
  const areaAt = (ang) => {
    const cs = Math.cos(ang), sn = Math.sin(ang);
    let x0 = Infinity, x1 = -Infinity, y0 = Infinity, y1 = -Infinity;
    for (const [x, y] of hull) { const u = x * cs + y * sn, v = -x * sn + y * cs; x0 = Math.min(x0, u); x1 = Math.max(x1, u); y0 = Math.min(y0, v); y1 = Math.max(y1, v); }
    return (x1 - x0) * (y1 - y0);
  };
  let best = 0, bestA = areaAt(0);
  for (let i = 0; i < hull.length; i++) {
    const [x1, y1] = hull[i], [x2, y2] = hull[(i + 1) % hull.length];
    const ang = Math.atan2(y2 - y1, x2 - x1);
    const A = areaAt(ang);
    if (A < bestA * 0.97) { bestA = A; best = ang; }
  }
  // Rotating by -best aligns that hull edge with X.
  return -best;
}

// ---------------------------------------------------------------- preview

// Tiny z-buffered software render of the oriented part (any triangle count), with the
// faces that need support in red and the plate as a line.
function renderPreview(pos, M, sinA, color, W = 150, H = 112) {
  const w = W * 2, h = H * 2;
  const vd = new Vector3(0.6, -0.9, 0.7).normalize();
  const right = new Vector3().crossVectors(new Vector3(0, 0, 1), vd).normalize();
  const up = new Vector3().crossVectors(vd, right).normalize();
  const n = pos.length / 3;
  const P = new Float32Array(n * 3);
  const v = new Vector3();
  let zmin = Infinity;
  const proj = new Float32Array(n * 3);
  for (let k = 0; k < n; k++) { v.fromArray(pos, k * 3).applyMatrix4(M); P[k * 3] = v.x; P[k * 3 + 1] = v.y; P[k * 3 + 2] = v.z; if (v.z < zmin) zmin = v.z; }
  let u0 = Infinity, u1 = -Infinity, v0 = Infinity, v1 = -Infinity;
  for (let k = 0; k < n; k++) {
    v.set(P[k * 3], P[k * 3 + 1], P[k * 3 + 2] - zmin);
    const su = v.dot(right), sv = v.dot(up), dz = v.dot(vd);
    proj[k * 3] = su; proj[k * 3 + 1] = sv; proj[k * 3 + 2] = dz;
    u0 = Math.min(u0, su); u1 = Math.max(u1, su); v0 = Math.min(v0, sv); v1 = Math.max(v1, sv);
  }
  const sc = Math.min((w * 0.8) / Math.max(u1 - u0, 1e-6), (h * 0.74) / Math.max(v1 - v0, 1e-6));
  const ox = w / 2 - ((u0 + u1) / 2) * sc, oy = h * 0.55 + ((v0 + v1) / 2) * sc;
  const zbuf = new Float32Array(w * h).fill(-Infinity);
  const img = new Uint8ClampedArray(w * h * 4);
  const base = [parseInt(color.slice(1, 3), 16), parseInt(color.slice(3, 5), 16), parseInt(color.slice(5, 7), 16)];
  const light = new Vector3(0.35, -0.55, 0.9).normalize();
  const a = new Vector3(), b = new Vector3(), c = new Vector3(), nn = new Vector3(), e1 = new Vector3(), e2 = new Vector3();
  for (let t = 0; t < n; t += 3) {
    a.fromArray(P, t * 3); b.fromArray(P, t * 3 + 3); c.fromArray(P, t * 3 + 6);
    nn.crossVectors(e1.subVectors(b, a), e2.subVectors(c, a));
    const len = nn.length();
    if (len < 1e-12) continue;
    nn.divideScalar(len);
    if (nn.dot(vd) <= 0) continue; // back face
    const red = nn.z < -sinA && Math.max(a.z, b.z, c.z) > zmin + 0.15;
    const sh = 0.35 + 0.65 * Math.max(0, nn.dot(light));
    const col = red ? [255 * (0.55 + 0.45 * sh), 59 * sh, 48 * sh] : [base[0] * sh, base[1] * sh, base[2] * sh];
    const X = [0, 1, 2].map((q) => ox + proj[(t + q) * 3] * sc), Y = [0, 1, 2].map((q) => oy - proj[(t + q) * 3 + 1] * sc), Z = [0, 1, 2].map((q) => proj[(t + q) * 3 + 2]);
    const minX = Math.max(0, Math.floor(Math.min(...X))), maxX = Math.min(w - 1, Math.ceil(Math.max(...X)));
    const minY = Math.max(0, Math.floor(Math.min(...Y))), maxY = Math.min(h - 1, Math.ceil(Math.max(...Y)));
    const den = (Y[1] - Y[2]) * (X[0] - X[2]) + (X[2] - X[1]) * (Y[0] - Y[2]);
    if (Math.abs(den) < 1e-9) continue;
    for (let py = minY; py <= maxY; py++) {
      for (let px = minX; px <= maxX; px++) {
        const fx = px + 0.5, fy = py + 0.5;
        const l0 = ((Y[1] - Y[2]) * (fx - X[2]) + (X[2] - X[1]) * (fy - Y[2])) / den;
        const l1 = ((Y[2] - Y[0]) * (fx - X[2]) + (X[0] - X[2]) * (fy - Y[2])) / den;
        const l2 = 1 - l0 - l1;
        if (l0 < -1e-4 || l1 < -1e-4 || l2 < -1e-4) continue;
        const z = l0 * Z[0] + l1 * Z[1] + l2 * Z[2];
        const o = py * w + px;
        if (z <= zbuf[o]) continue;
        zbuf[o] = z;
        img[o * 4] = col[0]; img[o * 4 + 1] = col[1]; img[o * 4 + 2] = col[2]; img[o * 4 + 3] = 255;
      }
    }
  }
  // The render canvas is already 2× (sharp on retina screens).
  const cv = document.createElement('canvas');
  cv.width = w; cv.height = h;
  const g2 = cv.getContext('2d');
  g2.fillStyle = '#111418'; g2.fillRect(0, 0, w, h);
  // A patch of build plate under the part.
  let x0 = Infinity, x1 = -Infinity, y0 = Infinity, y1 = -Infinity;
  for (let k = 0; k < n; k++) { x0 = Math.min(x0, P[k * 3]); x1 = Math.max(x1, P[k * 3]); y0 = Math.min(y0, P[k * 3 + 1]); y1 = Math.max(y1, P[k * 3 + 1]); }
  const m = Math.max(x1 - x0, y1 - y0) * 0.18 + 1;
  g2.beginPath();
  [[x0 - m, y0 - m], [x1 + m, y0 - m], [x1 + m, y1 + m], [x0 - m, y1 + m]].forEach(([px, py], i) => {
    v.set(px, py, 0);
    const sx = ox + v.dot(right) * sc, sy = oy - v.dot(up) * sc;
    if (i) g2.lineTo(sx, sy); else g2.moveTo(sx, sy);
  });
  g2.closePath();
  g2.fillStyle = '#1f242c'; g2.fill();
  g2.strokeStyle = '#3a4452'; g2.lineWidth = 2; g2.stroke();
  const layer = document.createElement('canvas');
  layer.width = w; layer.height = h;
  layer.getContext('2d').putImageData(new ImageData(img, w, h), 0, 0);
  g2.drawImage(layer, 0, 0);
  return cv;
}

// ---------------------------------------------------------------- dialog

export async function orientDialog() {
  const ns = app.selNodes();
  if (ns.length !== 1) { toast('部品を 1 つ選択してください'); return; }
  const node = ns[0];
  const g = nodeGeometry(node);
  const R = app.rotMatrix(node.rot);
  const st = { priority: store.getSetting('orientPriority', 'balance'), angle: store.getSetting('overhangDeg', 45) };
  const print = { ...PRINT_DEFAULTS, ...store.getSetting('print', {}) };
  const grid = el('div', { class: 'ori-grid' });
  const note = el('p', { class: 'hint' });
  let analysis = null, analyzedAngle = null;

  const apply = (c) => {
    closeDialog('done');
    app.checkpoint();
    let M = c.M.clone();
    if (c.kind !== 'current') M = new Matrix4().makeRotationZ(footprintYaw(g.getAttribute('position').array, M)).multiply(M);
    node.rot = app.eulerDeg(M);
    app.dropToFloor(node);
    app.commit();
    const cur = analysis.current, msg = [];
    if (fmtSup(cur) !== fmtSup(c)) msg.push(`サポート ${fmtSup(cur)} → ${fmtSup(c)}`);
    if (formatDuration(cur.seconds) !== formatDuration(c.seconds)) msg.push(`印刷 ${formatDuration(cur.seconds)} → ${formatDuration(c.seconds)}`);
    toast(c.kind === 'current' ? '今の向きのまま床に置きました' : msg.join(' ・ ') || '向きを変えました', 3500);
  };
  const fmtSup = (c) => (c.support < 50 ? 'ほぼなし' : `${(c.support / 1000).toFixed(1)} cm³`);

  const card = (c, title, best) => el('button', { type: 'button', class: 'ori-card' + (best ? ' best' : ''), onclick: () => apply(c) },
    renderPreview(g.getAttribute('position').array, c.M, Math.sin((st.angle * Math.PI) / 180), node.color || '#4f9dff'),
    el('b', {}, title),
    el('span', {}, `サポート ${fmtSup(c)}`),
    el('span', {}, `印刷 ${formatDuration(c.seconds)} ・ 高さ ${fmt(Math.round(c.height * 10) / 10)} mm`),
    el('span', {}, `接地 ${(c.contact / 100).toFixed(1)} cm²`));

  const render = async () => {
    grid.replaceChildren(el('p', { class: 'hint' }, '計算中…'));
    await new Promise((r) => setTimeout(r, 30));
    const t0 = performance.now();
    if (!analysis || analyzedAngle !== st.angle) {
      analysis = analyzeOrientations(g, R, { overhangDeg: st.angle, density: app.S.density, print });
      analyzedAngle = st.angle;
    }
    const ranked = rankOrientations(analysis, st.priority);
    // Three different-looking candidates: skip ones with nearly the same metrics.
    const picks = [];
    for (const c of ranked) {
      if (picks.length >= 3) break;
      if (picks.some((p) => Math.abs(p.height - c.height) < 0.5 && Math.abs(p.support - c.support) < 0.05 * Math.max(p.support, 200) && Math.abs(p.contact - c.contact) < 0.05 * Math.max(p.contact, 20))) continue;
      picks.push(c);
    }
    const cur = analysis.current;
    const curIsBest = picks[0] === cur;
    grid.replaceChildren(
      ...picks.map((c, i) => card(c, c === cur ? (i === 0 ? 'いまの向きが最適' : 'いまの向き') : i === 0 ? 'おすすめ' : `候補 ${i + 1}`, i === 0)),
      ...(picks.includes(cur) ? [] : [card(cur, 'いまの向き', false)]));
    note.textContent = curIsBest ? 'いまの向きが最も良い結果でした。' : `${analysis.cands.length} 通りを比較しました（${Math.round(performance.now() - t0)} ms）。カードをタップするとその向きにします。`;
  };

  const body = [
    el('div', { class: 'field' }, el('span', {}, '優先すること'), segmented([['balance', 'おまかせ'], ['support', 'サポート減'], ['time', '時短'], ['stable', '安定']], st.priority, (v) => { st.priority = v; store.setSetting('orientPriority', v); render(); })),
    el('div', { class: 'field' }, el('span', {}, 'サポートなしで印刷できる角度（垂直から）'), segmented([[45, '45°'], [50, '50°'], [55, '55°'], [60, '60°']], st.angle, (v) => { st.angle = v; store.setSetting('overhangDeg', v); render(); })),
    grid, note,
    el('p', { class: 'hint' }, '赤い面はサポートが必要な下向きの面です。サポート量は部品の上に立つ分も含めた目安で、時間は見積もり設定（出力画面）を使います。'),
  ];
  const p = openDialog({ title: `向きの最適化 ・ ${node.name}`, body, buttons: [{ label: '閉じる', value: 'cancel' }] });
  render();
  await p;
}
