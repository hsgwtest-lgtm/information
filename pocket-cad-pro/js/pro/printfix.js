// サポートレス化: changes that let a part print without supports in its current
// orientation —
//   - horizontal round holes get a 45° pointed roof (teardrop),
//   - the inside corner under a ledge gets a 45° gusset, so the ledge is self-supporting,
//   - edges on the bed get a small chamfer that hides the first-layer squish (elephant foot).
// Everything is added as ordinary nodes, so it can be ungrouped or undone.
import { Matrix4, Vector3, Euler, MathUtils } from '../../vendor/vendor.js';
import { el, toast, openDialog, numField, fmt } from '../ui.js';
import * as store from '../storage.js';
import { nodeGeometry, nodeMatrix } from '../geometry.js';
import { partSurface, eulerFromAxes } from './edgetools.js';
import { packChain } from './edgeops.js';
import { overhangs } from './analysis.js';
import { ISO } from './threads.js';
import { N, G } from './templates.js';

let app;
export function initPrintFix(api) { app = api; }

const r3 = (v) => Math.round(v * 1000) / 1000;
const sub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
const norm = (a) => { const l = Math.hypot(a[0], a[1], a[2]) || 1; return [a[0] / l, a[1] / l, a[2] / l]; };
const mul = (a, s) => [a[0] * s, a[1] * s, a[2] * s];

// ---------------------------------------------------------------- teardrops

// Horizontal round holes anywhere inside the node: [{ owner (group), hole, radius, length, axis, up }]
// with axis / up in the owner group's frame.
function findHoles(n) {
  const out = [];
  const walk = (g, W) => {
    for (const c of g.children || []) {
      if (c.hidden) continue;
      if (c.kind === 'group') {
        const Wc = W.clone().multiply(nodeMatrix(c, new Matrix4())).multiply(new Matrix4().makeScale(...c.scale));
        walk(c, Wc);
        continue;
      }
      if (!c.hole || c.teardrop) continue;
      let radius;
      if (c.kind === 'cylinder') radius = c.params.dia / 2;
      else if (c.kind === 'bolt' && c.params.head === 'none') radius = (ISO[c.params.size]?.d || 3) / 2 + Math.max(0, c.params.clr || 0);
      else continue;
      const [sx, sy, sz] = c.scale.map(Math.abs);
      if (Math.abs(sx - sy) > 1e-3) continue;
      const R = new Matrix4().makeRotationFromEuler(new Euler(...c.rot.map(MathUtils.degToRad), 'XYZ'));
      const axisP = new Vector3(0, 0, 1).applyMatrix4(R).normalize();
      const axisW = axisP.clone().transformDirection(W);
      if (Math.abs(axisW.z) > 0.1) continue;
      // World "up" in the owner's frame (W may carry scale: use its inverse on the direction).
      const lin = new Matrix4().extractRotation(W);
      const upP = new Vector3(0, 0, 1).applyMatrix4(lin.clone().invert());
      out.push({ owner: g, hole: c, radius: radius * sx, length: (c.kind === 'bolt' ? c.params.L : c.params.h) * sz, axis: axisP.toArray(), up: upP.toArray() });
    }
  };
  const W = nodeMatrix(n, new Matrix4()).multiply(new Matrix4().makeScale(...n.scale));
  if (n.kind === 'group') walk(n, W);
  return out;
}

// Pointed roof over the hole: a square turned 45°, from the hole's centre to its top.
function teardropNode(h) {
  const a = h.radius / Math.SQRT2;
  let up = sub(h.up, mul(h.axis, dot(h.up, h.axis)));
  up = norm(up);
  const x = norm(cross(up, h.axis));
  // Cylinders and thread holes are both centred on their node, along local Z.
  const len = h.length + (h.hole.kind === 'bolt' ? 0.5 : 0);
  return N('extrude', { h: r3(len), pts: [[0, r3(-a * 0.2)], [r3(a), r3(a)], [0, r3(2 * a)], [r3(-a), r3(a)]], curves: null }, h.hole.pos.map(r3), {
    rot: eulerFromAxes(x, up, h.axis), hole: true, name: 'ティアドロップ',
  });
}

// ---------------------------------------------------------------- edges

const isStraight = (c) => {
  if (c.closed) return false;
  const a = c.pts[0], b = c.pts[c.pts.length - 1], d = norm(sub(b, a));
  return c.pts.every((p) => { const w = sub(p, a); const e = sub(w, mul(d, dot(w, d))); return dot(e, e) < 1e-4; });
};

// How far the planar faces with outward normal n reach from point P along u.
function reach(an, c, n, P, u) {
  let ext = 0;
  for (const rid of c.regions) {
    const reg = an.regions[rid];
    if (!reg || dot(reg.n, n) < 0.99) continue;
    for (const t of reg.tris) for (let k = 0; k < 3; k++) {
      const i = an.tri[t * 3 + k];
      ext = Math.max(ext, dot(sub([an.V[i * 3], an.V[i * 3 + 1], an.V[i * 3 + 2]], P), u));
    }
  }
  return ext;
}

// Inside corners under ledges: concave, straight, horizontal edges between a ceiling (face
// pointing down) and a wall below it. Returns [{ chain, legCeil, legWall, ceilIsA }].
function findLedges(an, zmin, maxLeg) {
  const out = [];
  for (const c of an.chains) {
    if (c.convex || !isStraight(c)) continue;
    const zs = c.pts.map((p) => p[2]);
    if (Math.max(...zs) - Math.min(...zs) > 0.05) continue;
    const i = 0, t = norm(sub(c.pts[c.pts.length - 1], c.pts[0]));
    const ceilIsA = c.na[i][2] < -0.95, ceilIsB = c.nb[i][2] < -0.95;
    if (ceilIsA === ceilIsB) continue;
    const nC = ceilIsA ? c.na[i] : c.nb[i], nW = ceilIsA ? c.nb[i] : c.na[i];
    if (Math.abs(nW[2]) > 0.2) continue;
    // Faces run away from the edge into the air of each other (concave).
    let uC = norm(cross(t, nC)); if (dot(uC, nW) < 0) uC = mul(uC, -1);
    let uW = norm(cross(t, nW)); if (dot(uW, nC) < 0) uW = mul(uW, -1);
    if (uW[2] > -0.9) continue; // the wall must go down from the ledge
    const P = c.pts[0];
    const depth = Math.min(maxLeg, reach(an, c, nC, P, uC));
    const height = Math.min(reach(an, c, nW, P, uW), P[2] - zmin);
    if (depth < 0.5 || height < 0.5) continue;
    // A hair steeper than 45°, so the new slope is clearly self-supporting.
    out.push({ chain: c, legCeil: depth, legWall: Math.min(depth * 1.04, height), ceilIsA });
  }
  return out;
}

// Convex edges lying on the bed between the bottom face and a side.
function findFootEdges(an, zmin) {
  return an.chains.filter((c) => {
    if (!c.convex || !c.pts.every((p) => Math.abs(p[2] - zmin) < 0.02)) return false;
    const bottomA = c.na[0][2] < -0.99, bottomB = c.nb[0][2] < -0.99;
    if (bottomA === bottomB) return false;
    const side = bottomA ? c.nb[0] : c.na[0];
    return Math.abs(side[2]) < 0.5;
  });
}

// ---------------------------------------------------------------- apply

// Plans the fixes for node n (in its current orientation).
export function planFixes(n, { maxLeg = 25 } = {}) {
  const an = partSurface(n);
  const zmin = an.bbox.min[2];
  return { an, holes: findHoles(n), ledges: findLedges(an, zmin, maxLeg), foot: findFootEdges(an, zmin) };
}

// Builds the fixed part. opts: { teardrop, ledge, foot, footSize }.
export function applyFixes(n, plan, opts) {
  const part = JSON.parse(JSON.stringify(n));
  let holes = 0;
  if (opts.teardrop && plan.holes.length) {
    // Same structure, so the holes found in n map to the copy by their ids.
    const byId = new Map();
    const index = (g) => { byId.set(g.id, g); g.children?.forEach(index); };
    index(part);
    for (const h of plan.holes) {
      const owner = byId.get(h.owner.id), hole = byId.get(h.hole.id);
      if (!owner || !hole) continue;
      owner.children.push(teardropNode(h));
      hole.teardrop = true;
      holes++;
    }
  }
  const an = plan.an;
  const c = [0, 1, 2].map((k) => r3((an.bbox.min[k] + an.bbox.max[k]) / 2));
  const extra = [];
  const edgeNode = (ch, params, name) => {
    const pk = packChain(ch);
    pk.pts = pk.pts.map((p) => sub(p, c).map(r3));
    const f = N('fillet', {}, [0, 0, 0], { hole: !pk.concave, name });
    f.params = { ...pk, ...params };
    return f;
  };
  if (opts.ledge) {
    for (const l of plan.ledges) {
      // Chamfer legs: r along face a, r2 along face b.
      const [ra, rb] = l.ceilIsA ? [l.legCeil, l.legWall] : [l.legWall, l.legCeil];
      extra.push(edgeNode(l.chain, { type: 'chamfer', r: r3(ra), r2: r3(rb), sym: false, auto: 'ledge' }, '45°の補強'));
    }
  }
  if (opts.foot) {
    for (const ch of plan.foot) extra.push(edgeNode(ch, { type: 'chamfer', r: opts.footSize, sym: false, auto: 'foot' }, '底の面取り'));
  }
  if (!extra.length) return { node: part, holes, ledges: 0, foot: 0 };
  part.pos = part.pos.map((v, k) => r3(v - c[k]));
  const g = G(n.name, [part, ...extra], n.color);
  g.pos = c;
  return { node: g, holes, ledges: opts.ledge ? plan.ledges.length : 0, foot: opts.foot ? plan.foot.length : 0 };
}

const overhangArea = (n) => overhangs([{ geometry: nodeGeometry(n), matrix: nodeMatrix(n, new Matrix4()) }], partFloor(n)).area;
const partFloor = (n) => {
  const g = nodeGeometry(n), m = nodeMatrix(n, new Matrix4()), a = g.getAttribute('position').array, v = new Vector3();
  let z = Infinity;
  for (let i = 0; i < a.length; i += 3) z = Math.min(z, v.set(a[i], a[i + 1], a[i + 2]).applyMatrix4(m).z);
  return z;
};

// ---------------------------------------------------------------- dialog

export async function printFixDialog() {
  const ns = app.selNodes();
  if (ns.length !== 1 || ns[0].hole) { toast('部品を 1 つ選択してください'); return; }
  const n = ns[0];
  let plan;
  try { plan = planFixes(n); } catch (e) { console.error(e); toast('形を解析できませんでした'); return; }
  const st = { teardrop: true, ledge: true, foot: true, footSize: 0.4, ...store.getSetting('printFix', {}) };
  const before = overhangArea(n);
  const row = (key, label, count, extra) => el('label', { class: 'check fix-row' + (count ? '' : ' off') },
    el('input', { type: 'checkbox', checked: st[key] && count > 0, disabled: !count, onchange: (e) => { st[key] = e.target.checked; } }),
    el('div', {}, el('b', {}, `${label}（${count}）`), el('span', {}, extra)));
  const body = [
    el('p', { class: 'hint' }, `今の向きで判定します（サポートが必要な面 ${fmt(Math.round(before))} mm²）。向きを変える場合は先に「向き最適化」を。`),
    row('teardrop', '横穴をティアドロップに', plan.holes.length, '横向きの丸穴の天井を 45° にとがらせ、サポートなしで印刷できる形にします。'),
    row('ledge', '張り出しの下に 45° の補強', plan.ledges.length, '張り出しと下の壁の角を 45° で埋め、張り出しを自分で支えられるようにします。'),
    row('foot', '底の辺を面取り（エレファントフット対策）', plan.foot.length, '1 層目がつぶれて広がる分を、底の辺を斜めに落として打ち消します。'),
    numField({ label: '底の面取り mm', value: st.footSize, min: 0.1, max: 3, step: 0.1, onChange: (v) => { st.footSize = v; } }),
  ];
  if (!plan.holes.length && !plan.ledges.length && !plan.foot.length) body.push(el('div', { class: 'warnbox' }, '直せるところが見つかりませんでした。'));
  const v = await openDialog({ title: 'サポートレス化', body, buttons: [{ label: 'キャンセル', value: 'cancel' }, { label: '適用', value: 'ok', cls: 'accent' }] });
  if (v !== 'ok') return;
  store.setSetting('printFix', st);
  const res = applyFixes(n, plan, { teardrop: st.teardrop && plan.holes.length > 0, ledge: st.ledge && plan.ledges.length > 0, foot: st.foot && plan.foot.length > 0, footSize: st.footSize });
  if (!res.holes && !res.ledges && !res.foot) { toast('変更はありません'); return; }
  toast('計算中…', 2000);
  await new Promise((r) => setTimeout(r, 40));
  const idx = app.S.doc.nodes.indexOf(n);
  app.checkpoint();
  app.S.doc.nodes.splice(idx, 1, res.node);
  app.S.sel = [res.node.id];
  app.commit();
  const after = overhangArea(res.node);
  const parts = [res.holes && `穴 ${res.holes}`, res.ledges && `補強 ${res.ledges}`, res.foot && `面取り ${res.foot}`].filter(Boolean).join('・');
  toast(`${parts} ・ サポートが必要な面 ${fmt(Math.round(before))} → ${fmt(Math.round(after))} mm²`, 4000);
}
