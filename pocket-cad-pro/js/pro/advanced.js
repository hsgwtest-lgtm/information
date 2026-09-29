// Pro, second wave: templates, pattern holes, split with dowels, place on face,
// my parts library, share links, design variables and printer profiles.
import { Matrix4, Vector3, Quaternion, Ray, DoubleSide, BufferGeometry, MeshBVH } from '../../vendor/vendor.js';
import { el, icon, toast, openDialog, closeDialog, numField, segmented, fmt, promptDialog, saveFile, evalExpr } from '../ui.js';
import { nodeGeometry, nodeMatrix, registerMeshData, getMeshData } from '../geometry.js';
import * as store from '../storage.js';
import { TEMPLATES, N, G } from './templates.js';
import { patternPoints, rimSamples } from './pattern.js';
import { FONTS } from './trace.js';

let app;
export function initAdvanced(api) { app = api; }

const r3 = (v) => Math.round(v * 1000) / 1000;
const uid = () => Math.random().toString(36).slice(2, 10) + Date.now().toString(36).slice(-4);
const deepClone = (n) => {
  const c = JSON.parse(JSON.stringify(n));
  const reid = (x) => { x.id = uid(); x.children?.forEach(reid); };
  reid(c);
  return c;
};

// Groups built with absolute child positions get their origin moved to their centre,
// so the position fields show meaningful numbers.
function recenter(g) {
  if (g.kind !== 'group') return g;
  g.children.forEach(recenter);
  const b = nodeGeometry({ ...g, pos: [0, 0, 0], rot: [0, 0, 0] }).boundingBox;
  const c = [(b.min.x + b.max.x) / 2, (b.min.y + b.max.y) / 2, (b.min.z + b.max.z) / 2];
  g.children.forEach((ch) => { ch.pos = ch.pos.map((v, i) => r3(v - c[i])); });
  g.pos = g.pos.map((v, i) => r3(v + c[i]));
  return g;
}

// Adds several top-level nodes as one block: next to existing parts, on the plate.
function insertBlock(nodes, name) {
  app.checkpoint();
  nodes.forEach(recenter);
  const tmp = G(name, nodes.map((n) => ({ ...n })));
  const box = app.selectionBox(nodes);
  const before = [(box.min.x + box.max.x) / 2, (box.min.y + box.max.y) / 2];
  tmp.pos = [before[0], before[1], 0];
  tmp.children = nodes.map((n) => ({ ...n, pos: [n.pos[0] - before[0], n.pos[1] - before[1], n.pos[2]] }));
  app.freeSpot(tmp);
  const dx = tmp.pos[0] - before[0], dy = tmp.pos[1] - before[1], dz = -box.min.z;
  for (const n of nodes) n.pos = [r3(n.pos[0] + dx), r3(n.pos[1] + dy), r3(n.pos[2] + dz)];
  app.S.doc.nodes.push(...nodes);
  app.S.sel = nodes.map((n) => n.id);
  app.commit();
  app.vp.view('iso', app.S.sel);
}

// ---------------------------------------------------------------- templates
export async function templatesDialog() {
  const list = el('div', { class: 'tpl-grid' }, TEMPLATES.map((t) => el('button', {
    type: 'button', class: 'tpl', onclick: () => { closeDialog(); templateParams(t); },
  }, icon(t.icon), el('b', {}, t.label), el('span', {}, t.desc))));
  await openDialog({ title: 'テンプレート', body: [el('p', { class: 'hint' }, '寸法を入れるだけで、すぐ印刷できる形を作ります。作った後も部品単位で編集できます。'), list] });
}

async function templateParams(t) {
  const st = { ...Object.fromEntries(t.params.map(([k, , def]) => [k, def])), ...store.getSetting('tpl.' + t.id, {}) };
  if (t.text) { st.text = st.text || 'なまえ'; st.font = st.font || 'gothic'; }
  const rows = el('div', { class: 'row two' }, t.params.map(([k, label, , min, step, opt]) => numField({
    label, value: st[k], min, step, integer: !!opt?.int, onChange: (v) => { st[k] = v; },
  })));
  const extra = [];
  if (t.text) {
    const ta = el('textarea', { class: 'txt', rows: 2, style: { height: 'auto', padding: '10px 12px' } });
    ta.value = st.text;
    ta.addEventListener('input', () => { st.text = ta.value; });
    extra.push(el('label', { class: 'field' }, el('span', {}, '文字'), ta),
      el('div', { class: 'field' }, el('span', {}, '書体'), segmented(Object.entries(FONTS).map(([k, [l]]) => [k, l]), st.font, (v) => { st.font = v; })));
  }
  const v = await openDialog({ title: t.label, body: [el('p', { class: 'hint' }, t.desc), ...extra, rows], buttons: [{ label: '戻る', value: 'back' }, { label: '作成', value: 'ok', cls: 'accent' }] });
  if (v === 'back') return templatesDialog();
  if (v !== 'ok') return;
  store.setSetting('tpl.' + t.id, st);
  const t0 = performance.now();
  const nodes = t.build(st, { eulerDeg: app.eulerDeg });
  insertBlock(nodes, t.label);
  toast(`${t.label} を作成しました（${Math.round(performance.now() - t0)} ms）`);
}

// ---------------------------------------------------------------- ray helpers
// World-space copy of a part with a BVH, so point-in-solid tests stay fast even for
// detailed parts (threads, lithophanes, templates with many triangles).
function nodeBVH(n) {
  const g = nodeGeometry(n);
  const m = nodeMatrix(n, new Matrix4());
  const world = new BufferGeometry();
  world.setAttribute('position', g.getAttribute('position').clone().applyMatrix4(m));
  world.computeBoundingBox();
  return new MeshBVH(world);
}

// Does the vertical line through (x, y) pass through material anywhere? Used for
// through-holes, so hollow parts (trays, boxes) are judged by their footprint.
function columnTest(n) {
  const bvh = nodeBVH(n);
  const z0 = bvh.geometry.boundingBox.min.z;
  const ray = new Ray(new Vector3(), new Vector3(0, 0, 1));
  return (p) => { ray.origin.set(p.x, p.y, z0 - 1); return !!bvh.raycastFirst(ray, DoubleSide); };
}

// Is the point inside the (closed) solid? Counts crossings along +Z.
function insideTest(n) {
  const bvh = nodeBVH(n);
  const ray = new Ray(new Vector3(), new Vector3(0, 0, 1));
  return (p) => {
    ray.origin.set(p.x, p.y, p.z);
    const d = bvh.raycast(ray, DoubleSide).map((h) => h.distance).sort((a, b) => a - b);
    // Collapse duplicate crossings on shared edges.
    const uniq = d.filter((x, i) => i === 0 || x - d[i - 1] > 1e-4);
    return uniq.length % 2 === 1;
  };
}

// ---------------------------------------------------------------- pattern holes
const MAX_HOLES = 300;

// Rough hole count for a rectangle-ish footprint (used for the live estimate and the cap).
function estimateHoles(w, d, st) {
  const aw = Math.max(0, w - 2 * st.margin), ad = Math.max(0, d - 2 * st.margin);
  const pitch = st.size + st.rib;
  const cell = st.shape === 'hex' ? pitch * pitch * 0.866 : pitch * pitch;
  return Math.floor((aw * ad) / cell);
}

// Sensible defaults for this part: about 6–10 holes across the shorter side.
function patternDefaults(w, d, shape) {
  const short = Math.max(1, Math.min(w, d));
  const size = Math.min(20, Math.max(3, Math.round(short / 9)));
  const st = { shape, size, rib: Math.max(1.2, Math.round(size * 0.25 * 10) / 10), margin: Math.max(2, Math.round(size * 0.5)), through: 1, depth: 2 };
  // Very large, thin parts: grow the holes until the count is reasonable.
  while (estimateHoles(w, d, st) > MAX_HOLES * 0.6 && st.size < 40) { st.size += 1; st.rib = Math.max(1.2, Math.round(st.size * 0.25 * 10) / 10); }
  return st;
}

export async function patternDialog() {
  const ns = app.selNodes();
  if (ns.length !== 1 || ns[0].hole) { toast('穴をあける部品を 1 つ選択してください'); return; }
  const n = ns[0];
  const box = app.vp.nodeBox(n);
  const W = box.max.x - box.min.x, D = box.max.y - box.min.y, H = box.max.z - box.min.z;
  const tris = nodeGeometry(n).getAttribute('position').count / 3;
  const heavy = tris > 30000 ? Math.round(tris) : 0;
  // Defaults always come from this part's size (only the shape choice is remembered).
  const st = patternDefaults(W, D, store.getSetting('patternShape', 'hex'));
  st.depth = Math.max(0.4, Math.min(2, Math.round(H * 5) / 10));
  const est = el('div', { class: 'hint' });
  const updateEst = () => {
    const k = estimateHoles(W, D, st);
    est.textContent = `部品 ${Math.round(W)} × ${Math.round(D)} mm ・ 推定 約 ${k} 個` + (k > MAX_HOLES ? `（上限 ${MAX_HOLES} 個を超えるため、穴を自動で大きくします）` : '');
    est.style.color = k > MAX_HOLES ? 'var(--accent)' : '';
  };
  const fields = el('div');
  const renderFields = () => {
    fields.replaceChildren(
      el('div', { class: 'row' },
        numField({ label: '穴の大きさ', value: st.size, min: 2, max: 60, step: 0.5, onChange: (v) => { st.size = v; updateEst(); } }),
        numField({ label: 'リブ幅', value: st.rib, min: 0.8, max: 20, step: 0.2, onChange: (v) => { st.rib = v; updateEst(); } }),
        numField({ label: '縁の余白', value: st.margin, min: 0, max: 50, step: 0.5, onChange: (v) => { st.margin = v; updateEst(); } })),
      el('div', { class: 'field' }, el('span', {}, '深さ'), segmented([[1, '貫通'], [0, '上から指定']], st.through, (v) => { st.through = v; })),
      numField({ label: '深さ（上から指定の場合） mm', value: st.depth, min: 0.2, max: Math.max(0.2, H), step: 0.2, onChange: (v) => { st.depth = v; } }));
    updateEst();
  };
  renderFields();
  const body = [
    el('div', { class: 'field' }, el('span', {}, '形'), segmented([['hex', 'ハニカム'], ['circle', '丸'], ['square', '角']], st.shape, (v) => { st.shape = v; updateEst(); })),
    fields, est,
    el('button', { type: 'button', class: 'btn', style: { width: '100%', marginTop: '8px' }, onclick: () => { Object.assign(st, patternDefaults(W, D, st.shape)); renderFields(); } }, '標準の値に戻す'),
    el('p', { class: 'hint' }, '上から見た部品の形に合わせて穴を並べ、部品とグループ化します（軽量化・通気・デザインに）。'),
    heavy ? el('div', { class: 'warnbox' }, `この部品は三角形が多いため（${heavy.toLocaleString()}）、穴あけに数秒かかります。`) : null,
  ];
  const v = await openDialog({ title: 'パターン穴あけ', body, buttons: [{ label: 'キャンセル', value: 'cancel' }, { label: '穴をあける', value: 'ok', cls: 'accent' }] });
  if (v !== 'ok') return;
  store.setSetting('patternShape', st.shape);
  let grown = false;
  while (estimateHoles(W, D, st) > MAX_HOLES) { st.size = Math.round(st.size * 1.15 * 10) / 10; grown = true; }
  const t0 = performance.now();
  toast('穴の位置を計算中…', 1500);
  await new Promise((r) => setTimeout(r, 30));
  const inside = st.through ? columnTest(n) : insideTest(n);
  const zProbe = st.through ? (box.min.z + box.max.z) / 2 : box.max.z - Math.min(st.depth, H) / 2;
  const P = (x, y) => new Vector3(x, y, zProbe);
  // Candidate centres first, then the (costlier) fit test in chunks so the UI keeps breathing.
  const cands = [];
  patternPoints({ shape: st.shape, size: st.size, rib: st.rib, x0: box.min.x, x1: box.max.x, y0: box.min.y, y1: box.max.y, inside: (x, y, reach) => { cands.push([x, y, reach]); return false; } });
  const pts = [];
  for (let i = 0; i < cands.length && pts.length < MAX_HOLES; i++) {
    const [x, y, reach] = cands[i];
    if (inside(P(x, y)) && rimSamples(x, y, reach + st.margin).every(([px, py]) => inside(P(px, py)))) pts.push([x, y]);
    if (i % 200 === 199) await new Promise((r) => setTimeout(r, 0));
  }
  if (!pts.length) { toast('穴を並べられる場所がありませんでした（穴を小さく・余白を狭くしてみてください）', 3500); return; }
  const cx = (box.min.x + box.max.x) / 2, cy = (box.min.y + box.max.y) / 2;
  const depth = st.through ? H + 2 : st.depth + 1;
  const zc = st.through ? (box.min.z + box.max.z) / 2 : box.max.z - st.depth + depth / 2;
  const hole = N('pattern', { shape: st.shape, size: st.size, depth, pts: pts.map(([x, y]) => [r3(x - cx), r3(y - cy)]) }, [cx, cy, zc], { hole: true, name: 'パターン穴' });
  // The boolean below runs on the main thread; let the message paint first.
  toast(`${pts.length} 個の穴をあけています…`, heavy ? 10000 : 2000);
  await new Promise((r) => setTimeout(r, 60));
  app.checkpoint();
  const g = recenter(G(n.name, [n, hole], n.color));
  const idx = app.S.doc.nodes.indexOf(n);
  app.S.doc.nodes.splice(idx, 1, g);
  app.S.sel = [g.id];
  app.commit();
  toast(`${pts.length} 個の穴をあけました${grown ? `（数が多すぎるため穴を ${fmt(st.size)} mm にしました）` : ''}（${Math.round(performance.now() - t0)} ms）`, 3000);
}

// ---------------------------------------------------------------- split with dowels
export async function splitDialog() {
  const ns = app.selNodes();
  if (ns.length !== 1 || ns[0].hole) { toast('分割する部品を 1 つ選択してください'); return; }
  const n = ns[0];
  const box = app.vp.nodeBox(n);
  const size = box.getSize(new Vector3());
  const longest = size.x >= size.y && size.x >= size.z ? 0 : size.y >= size.z ? 1 : 2;
  const st = { axis: longest, at: 0.5, dowels: 2, dia: 4, depth: 6, clr: 0.15, ...store.getSetting('split', {}) };
  st.axis = longest; st.at = 0.5;
  const posField = el('div');
  const renderPos = () => {
    const lo = box.min.getComponent(st.axis), hi = box.max.getComponent(st.axis);
    posField.replaceChildren(numField({ label: `切断位置 ${'XYZ'[st.axis]} mm（${fmt(r3(lo))}〜${fmt(r3(hi))}）`, value: r3(lo + (hi - lo) * st.at), step: 1, min: lo, max: hi,
      onChange: (v) => { st.at = (v - lo) / (hi - lo); } }));
  };
  renderPos();
  const body = [
    el('p', { class: 'hint' }, `サイズ ${fmt(r3(size.x))} × ${fmt(r3(size.y))} × ${fmt(r3(size.z))} mm。造形エリアに入らない部品を 2 つに分け、位置合わせ用のダボ穴とダボを作ります。`),
    el('div', { class: 'field' }, el('span', {}, '切断する向き'), segmented([[0, 'X で切る'], [1, 'Y で切る'], [2, 'Z で切る']], st.axis, (v) => { st.axis = v; st.at = 0.5; renderPos(); })),
    posField,
    el('div', { class: 'field' }, el('span', {}, 'ダボ（位置合わせピン）'), el('div', { class: 'row' },
      numField({ label: '本数', value: st.dowels, min: 0, max: 4, integer: true, onChange: (v) => { st.dowels = v; } }),
      numField({ label: '直径', value: st.dia, min: 1.5, step: 0.5, onChange: (v) => { st.dia = v; } }),
      numField({ label: '片側深さ', value: st.depth, min: 2, step: 1, onChange: (v) => { st.depth = v; } }))),
    numField({ label: 'ダボ穴のすき間（半径） mm', value: st.clr, min: 0, step: 0.05, onChange: (v) => { st.clr = v; } }),
  ];
  const v = await openDialog({ title: '分割', body, buttons: [{ label: 'キャンセル', value: 'cancel' }, { label: '分割する', value: 'ok', cls: 'accent' }] });
  if (v !== 'ok') return;
  store.setSetting('split', { dowels: st.dowels, dia: st.dia, depth: st.depth, clr: st.clr });
  splitNode(n, st);
}

function splitNode(n, st) {
  const box = app.vp.nodeBox(n);
  const size = box.getSize(new Vector3());
  const ax = st.axis;
  const cut = box.min.getComponent(ax) + (box.max.getComponent(ax) - box.min.getComponent(ax)) * st.at;
  const big = Math.max(size.x, size.y, size.z) * 3 + 20;
  const center = box.getCenter(new Vector3());
  const halfBox = (sign) => {
    const pos = center.toArray();
    pos[ax] = cut + sign * big / 2;
    return N('box', { w: big, d: big, h: big }, pos, { hole: true, name: '切断' });
  };
  // Dowel positions on the cut plane, kept only where the dowel sits fully inside the part.
  const inside = insideTest(n);
  const [u, w] = [0, 1, 2].filter((i) => i !== ax);
  const along = size.getComponent(u) >= size.getComponent(w) ? u : w;
  const other = along === u ? w : u;
  const dowelPts = [];
  const r = st.dia / 2 + st.clr + 1.2;
  const fracs = st.dowels === 1 ? [0] : st.dowels === 3 ? [-0.3, 0, 0.3] : st.dowels === 4 ? [-0.35, -0.12, 0.12, 0.35] : [-0.28, 0.28];
  for (const f of st.dowels > 0 ? fracs : []) {
    const p = center.clone();
    p.setComponent(ax, cut);
    p.setComponent(along, center.getComponent(along) + f * size.getComponent(along));
    const probe = (du, dw, dd) => { const q = p.clone(); q.setComponent(along, q.getComponent(along) + du); q.setComponent(other, q.getComponent(other) + dw); q.setComponent(ax, q.getComponent(ax) + dd); return inside(q); };
    const ok = [-st.depth, 0, st.depth].every((dd) => [[0, 0], [r, 0], [-r, 0], [0, r], [0, -r]].every(([du, dw]) => probe(du, dw, dd)));
    if (ok) dowelPts.push(p);
  }
  const rotFor = ax === 0 ? [0, 90, 0] : ax === 1 ? [90, 0, 0] : [0, 0, 0];
  const dowelHoles = () => dowelPts.map((p) => N('cylinder', { dia: st.dia + 2 * st.clr, h: 2 * st.depth + 1, seg: 32 }, p.toArray(), { rot: rotFor, hole: true, name: 'ダボ穴' }));
  app.checkpoint();
  const A = recenter(G(`${n.name} (A)`, [deepClone(n), halfBox(1), ...dowelHoles()], n.color));
  const B = recenter(G(`${n.name} (B)`, [deepClone(n), halfBox(-1), ...dowelHoles()], n.color));
  // Separate the halves; the upper half of a Z split is flipped so its cut face prints on the plate.
  if (ax === 2) {
    B.rot = [180, 0, 0];
    B.pos[0] = r3(B.pos[0] + size.x + 10);
  } else {
    B.pos[ax] = r3(B.pos[ax] + 10);
  }
  const out = [A, B];
  dowelPts.forEach((p, i) => {
    const pin = N('cylinder', { dia: st.dia, h: 2 * st.depth - 1, seg: 32 }, [box.max.x + 10 + i * (st.dia + 4), box.min.y, 0], { name: 'ダボ', color: '#f2f2f2' });
    out.push(pin);
  });
  const idx = app.S.doc.nodes.indexOf(n);
  app.S.doc.nodes.splice(idx, 1, ...out);
  out.forEach((o) => app.dropToFloor(o));
  app.S.sel = out.map((o) => o.id);
  app.commit();
  app.vp.view('iso', app.S.sel);
  toast(dowelPts.length || !st.dowels ? `2 つに分割しました${dowelPts.length ? `（ダボ ${dowelPts.length} 本）` : ''}` : '分割しました（断面が細くダボを入れられませんでした）', 3000);
}

// ---------------------------------------------------------------- place on face
let placing = null;
export function startPlace() {
  const ns = app.selNodes();
  if (ns.length !== 1) { toast('配置する部品を 1 つ選択してください'); return; }
  placing = ns[0].id;
  app.updateToolBar();
  toast('置きたい面をタップしてください（部品の底面がその面に付きます）', 3000);
}
export const placeState = () => placing;
export function stopPlace() { placing = null; app.updateToolBar(); }
export function placeTap(hit) {
  if (!placing) return false;
  if (!hit || hit.object.userData.id === placing) return true;
  const n = app.S.doc.nodes.find((x) => x.id === placing);
  if (!n) { stopPlace(); return true; }
  const normal = hit.face.normal.clone().transformDirection(hit.object.matrixWorld).normalize();
  const R = app.rotMatrix(n.rot);
  // Rotate so the part's current "down" (world -Z) points into the tapped face.
  const q = new Quaternion().setFromUnitVectors(new Vector3(0, 0, -1), normal.clone().negate());
  const R2 = new Matrix4().makeRotationFromQuaternion(q).multiply(R);
  app.checkpoint();
  n.rot = app.eulerDeg(R2);
  const g = nodeGeometry(n);
  const m = nodeMatrix({ ...n, pos: [0, 0, 0] }, new Matrix4());
  const a = g.getAttribute('position').array;
  const v = new Vector3(), c = new Vector3();
  let minDot = Infinity;
  for (let i = 0; i < a.length; i += 3) { v.set(a[i], a[i + 1], a[i + 2]).applyMatrix4(m); minDot = Math.min(minDot, v.dot(normal)); c.add(v); }
  c.divideScalar(a.length / 3);
  c.addScaledVector(normal, -c.dot(normal)); // in-plane offset of the centre
  const pos = hit.point.clone().addScaledVector(normal, -minDot).sub(c);
  n.pos = pos.toArray().map(r3);
  placing = null;
  app.commit();
  app.updateToolBar();
  toast('面に配置しました。重ねてグループ化すると一体化できます');
  return true;
}

// ---------------------------------------------------------------- my parts library
export async function saveToLibrary() {
  const ns = app.selNodes();
  if (!ns.length) { toast('保存する部品を選択してください'); return; }
  const name = await promptDialog('マイパーツに保存', ns.length === 1 ? ns[0].name : `${ns[0].name} ほか ${ns.length - 1} 個`, '名前');
  if (name == null) return;
  const box = app.selectionBox(ns);
  const c = box.getCenter(new Vector3());
  const nodes = ns.map((n) => ({ ...JSON.parse(JSON.stringify(n)), pos: [r3(n.pos[0] - c.x), r3(n.pos[1] - c.y), r3(n.pos[2] - box.min.z)] }));
  let thumb = null;
  try { thumb = app.vp.snapshotPNG(160); } catch { /* ignore */ }
  await store.putLibrary({ id: uid(), name: name.trim() || '部品', time: Date.now(), thumb, nodes });
  toast('マイパーツに保存しました。どのプロジェクトからでも呼び出せます');
}

export async function libraryDialog() {
  const list = el('div', { class: 'list' });
  const refresh = async () => {
    const all = await store.listLibrary();
    list.replaceChildren(...(all.length ? all.map((it) => el('div', {
      class: 'proj', role: 'button',
      onclick: async () => {
        closeDialog();
        const full = await store.getLibrary(it.id);
        const meshIds = [];
        const walk = (arr) => arr.forEach((n) => { if (n.kind === 'mesh') meshIds.push(n.dataId); if (n.children) walk(n.children); });
        walk(full.nodes);
        for (const id of meshIds) if (!getMeshData(id)) { const d = await store.getMesh(id); if (d) registerMeshData(id, d); }
        insertBlock(full.nodes.map(deepClone), full.name);
        toast(`「${full.name}」を追加しました`);
      },
    }, it.thumb ? el('img', { src: it.thumb, alt: '' }) : el('div', { class: 'ph' }),
    el('div', { style: { minWidth: 0 } }, el('div', { class: 'n' }, it.name), el('div', { class: 'd' }, new Date(it.time).toLocaleDateString('ja-JP'))),
    el('button', { type: 'button', class: 'icon-btn', 'aria-label': '削除', onclick: async (e) => { e.stopPropagation(); await store.deleteLibrary(it.id); refresh(); } }, icon('trash'))))
      : [el('p', { class: 'hint' }, 'まだ部品がありません。部品を選んで「マイパーツ」ボタンから保存すると、別のプロジェクトでも使い回せます。')]));
  };
  await refresh();
  await openDialog({ title: 'マイパーツ', body: list });
}

// ---------------------------------------------------------------- share links
const b64url = (bytes) => { let s = ''; bytes.forEach((b) => { s += String.fromCharCode(b); }); return btoa(s).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, ''); };
const unb64url = (s) => Uint8Array.from(atob(s.replace(/-/g, '+').replace(/_/g, '/') + '='.repeat((4 - (s.length % 4)) % 4)), (c) => c.charCodeAt(0));
async function pipe(bytes, stream) { return new Uint8Array(await new Response(new Blob([bytes]).stream().pipeThrough(stream)).arrayBuffer()); }

export async function shareLinkDialog() {
  const hasMesh = JSON.stringify(app.S.doc.nodes).includes('"kind":"mesh"');
  const doc = { nodes: app.S.doc.nodes.filter((n) => n.kind !== 'mesh'), vars: app.S.doc.vars };
  const json = new TextEncoder().encode(JSON.stringify({ app: 'pocket-cad-pro', v: 1, name: app.S.project.name, doc }));
  const packed = await pipe(json, new CompressionStream('deflate-raw'));
  const url = `${location.origin}${location.pathname}#share=${b64url(packed)}`;
  const kb = (url.length / 1024).toFixed(1);
  const body = [
    el('p', {}, '相手がこのリンクを開くと、このプロジェクトのコピーが相手の端末に作られます（相手が無料プランでも閲覧・STL 出力ができます）。'),
    el('p', { class: 'hint' }, `リンクの長さ: ${kb} KB`),
    hasMesh ? el('div', { class: 'warnbox' }, '読み込んだ STL・リトフェインはリンクに含まれません（プロジェクトファイルで共有してください）。') : null,
    url.length > 60000 ? el('div', { class: 'warnbox' }, 'リンクが長いため、アプリによっては送れない場合があります。') : null,
  ];
  const d = document.getElementById('dlg');
  const onClick = async (e) => {
    const b = e.target.closest('button[type=submit]');
    if (!b || (b.value !== 'share' && b.value !== 'copy')) return;
    e.preventDefault();
    try {
      if (b.value === 'share' && navigator.share) await navigator.share({ title: app.S.project.name, url });
      else { await navigator.clipboard.writeText(url); toast('リンクをコピーしました'); }
      closeDialog('done');
    } catch (err) { if (err?.name !== 'AbortError') toast('共有できませんでした: ' + err.message); }
  };
  d.addEventListener('click', onClick);
  await openDialog({ title: '共有リンク', body, buttons: [{ label: 'コピー', value: 'copy' }, { label: '共有', value: 'share', cls: 'accent' }] });
  d.removeEventListener('click', onClick);
}

// Called at start-up: imports a project delivered through a share link.
export async function importFromHash() {
  const m = /#share=([A-Za-z0-9_-]+)/.exec(location.hash);
  if (!m) return false;
  history.replaceState(null, '', location.pathname);
  try {
    const data = JSON.parse(new TextDecoder().decode(await pipe(unb64url(m[1]), new DecompressionStream('deflate-raw'))));
    if (data.app !== 'pocket-cad-pro' || !data.doc) throw new Error('形式が違います');
    const id = uid();
    await store.putProject({ id, name: `${data.name || '共有'}（共有）`, created: Date.now(), updated: Date.now(), doc: data.doc });
    await app.openProject(id);
    toast('共有されたプロジェクトを開きました', 2500);
    return true;
  } catch (e) {
    toast('共有リンクを開けませんでした: ' + e.message, 3500);
    return false;
  }
}

// ---------------------------------------------------------------- design variables
const VAR_RE = /^[A-Za-z_぀-ヿ一-鿿][\w぀-ヿ一-鿿]*$/;
export const getVars = () => app.S.doc.vars || {};

// Re-evaluates every expression-driven field in the document.
export function applyVars() {
  const vars = getVars();
  let changed = 0, failed = 0;
  const walk = (arr) => arr.forEach((n) => {
    for (const [key, expr] of Object.entries(n.exprs || {})) {
      const v = evalExpr(expr, vars);
      if (!Number.isFinite(v)) { failed++; continue; }
      if (key.startsWith('pos')) n.pos[+key.slice(3)] = r3(v);
      else n.params[key] = v;
      changed++;
    }
    if (n.children) walk(n.children);
  });
  walk(app.S.doc.nodes);
  return { changed, failed };
}

// `draft` is the working copy while the user edits; it is applied only on 適用.
export async function variablesDialog(draft = { ...getVars() }) {
  const vars = draft;
  const list = el('div', { class: 'list' });
  const render = () => {
    list.replaceChildren(...Object.keys(vars).map((k) => el('div', { class: 'var-row' },
      el('b', {}, k),
      numField({ label: '値', value: vars[k], step: 1, onChange: (v) => { vars[k] = v; } }),
      el('button', { type: 'button', class: 'icon-btn', 'aria-label': '削除', onclick: () => { delete vars[k]; render(); } }, icon('trash')))));
    if (!Object.keys(vars).length) list.append(el('p', { class: 'hint' }, 'まだ変数がありません。'));
  };
  render();
  const add = el('button', {
    type: 'button', class: 'btn', style: { width: '100%', marginTop: '10px' },
    // Dialogs do not nest: this replaces the list, then reopens it with the same draft.
    onclick: async () => {
      const name = el('input', { class: 'txt', placeholder: '例: 壁厚, width', autocapitalize: 'off' });
      const val = el('input', { class: 'txt', inputmode: 'decimal', value: '10' });
      const r = await openDialog({ title: '変数を追加', body: [el('label', { class: 'field' }, el('span', {}, '名前'), name), el('label', { class: 'field' }, el('span', {}, '値（式も可）'), val)], buttons: [{ label: 'キャンセル', value: 'cancel' }, { label: '追加', value: 'ok', cls: 'accent' }] });
      if (r === 'ok') {
        const k = name.value.trim();
        const v = evalExpr(val.value, vars);
        if (!VAR_RE.test(k)) toast('名前は文字で始め、記号を含めないでください');
        else if (!Number.isFinite(v)) toast('値が数値ではありません');
        else vars[k] = v;
      }
      variablesDialog(vars);
    },
  }, icon('plus'), '変数を追加');
  const body = [
    el('p', { class: 'hint' }, '寸法の入力欄に「壁厚*2」「width+5」のように変数名を使った式を入れると、変数を変えるだけで全体の寸法がまとめて変わります。'),
    list, add,
  ];
  const v = await openDialog({ title: '変数（寸法駆動）', body, buttons: [{ label: '閉じる', value: 'cancel' }, { label: '適用', value: 'ok', cls: 'accent' }] });
  if (v !== 'ok') return;
  app.checkpoint();
  app.S.doc.vars = vars;
  const r = applyVars();
  app.commit();
  toast(r.failed ? `${r.changed} か所を更新（${r.failed} か所は式を計算できませんでした）` : `${r.changed} か所の寸法を更新しました`, 2500);
}

// ---------------------------------------------------------------- printer profiles
export const PRINTERS = [
  ['custom', 'カスタム（手入力）', null],
  ['a1', 'Bambu Lab A1', { x: 256, y: 256, z: 256, speed: 200 }],
  ['a1mini', 'Bambu Lab A1 mini', { x: 180, y: 180, z: 180, speed: 200 }],
  ['p1s', 'Bambu Lab P1S / X1C', { x: 256, y: 256, z: 256, speed: 250 }],
  ['mk4', 'Prusa MK4 / MK4S', { x: 250, y: 210, z: 220, speed: 150 }],
  ['mini', 'Prusa MINI+', { x: 180, y: 180, z: 180, speed: 100 }],
  ['k1', 'Creality K1 / K1C', { x: 220, y: 220, z: 250, speed: 250 }],
  ['ender3v3', 'Creality Ender-3 V3', { x: 220, y: 220, z: 250, speed: 180 }],
  ['ender3', 'Creality Ender-3 (V2)', { x: 220, y: 220, z: 250, speed: 60 }],
  ['neptune4', 'Elegoo Neptune 4 Pro', { x: 225, y: 225, z: 265, speed: 180 }],
  ['m5', 'AnkerMake M5', { x: 235, y: 235, z: 250, speed: 180 }],
];
