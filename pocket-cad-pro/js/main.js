// Pocket CAD Pro — app state, panels and commands.
import { FontLoader, Matrix4, Euler, Vector3, MathUtils, Box3 } from '../vendor/vendor.js';
import {
  KINDS, PARAM_SIZED, defaultParams, nodeGeometry, nodeMatrix, geometryVolume, setFont,
  registerMeshData, getMeshData, encodeMesh, decodeMesh,
} from './geometry.js';
import { Viewport } from './viewport.js';
import { toBinarySTL, parseSTL } from './stl.js';
import * as store from './storage.js';
import {
  el, icon, toast, openDialog, closeDialog, confirmDialog, promptDialog, numField, segmented, saveFile, fmt,
} from './ui.js';
import { editSketch } from './sketch.js';
import * as license from './license.js';
import * as pro from './pro/features.js';
import { ISO } from './pro/threads.js';
import { build3mf, buildObj } from './pro/export3mf.js';
import * as adv from './pro/advanced.js';

const APP_VERSION = '1.1.0';
const COLORS = ['#4f9dff', '#ffb020', '#ef5f56', '#57c26a', '#b07cff', '#f2f2f2', '#40464f', '#ff8ad8'];
const SNAPS = [0.1, 0.5, 1, 5, 10];
const MATERIALS = [['PLA', 1.24], ['PETG', 1.27], ['ABS', 1.04], ['ASA', 1.07], ['TPU', 1.21], ['レジン', 1.15]];
const ADD_ORDER = ['box', 'cylinder', 'sphere', 'cone', 'tube', 'prism', 'torus', 'wedge', 'text', 'extrude', 'revolve'];
// [label, icon, feature name for the paywall, action]
const PRO_TOOLS = [
  ['テンプレート', 'template', 'テンプレート集', () => adv.templatesDialog()],
  ['マイパーツ', 'library', 'マイパーツ', () => adv.libraryDialog()],
  ['ボルト', 'bolt', 'ねじ・ボルト', () => pro.addBolt('bolt')],
  ['ナット', 'nut', 'ねじ・ナット', () => pro.addBolt('nut')],
  ['ねじ穴', 'tap', 'ねじ穴', () => pro.addBolt('tap')],
  ['歯車', 'gear', '歯車ジェネレーター', () => addNode('gear')],
  ['面取り箱', 'cbox', '面取り箱', () => addNode('cbox')],
  ['ケース', 'case', 'ケース自動設計', () => pro.enclosureDialog()],
  ['日本語', 'jtext', '日本語テキスト', () => pro.jpTextDialog()],
  ['画像/SVG', 'image', '画像・SVG から立体化', () => pro.imageDialog()],
  ['リトフェイン', 'photo', 'リトフェイン', () => pro.lithophaneDialog()],
];
// Runs `fn` if Pro (or trial) is active, otherwise shows the plan screen.
const gated = (feature, fn) => async () => { if (await license.requirePro(feature)) fn(); };

const S = {
  project: null,
  doc: { nodes: [] },
  sel: [],
  undo: [],
  redo: [],
  multi: false,
  snap: store.getSetting('snap', 1),
  plate: store.getSetting('plate', { x: 220, y: 220, z: 250 }),
  density: store.getSetting('density', 1.24),
  lockAspect: store.getSetting('lockAspect', true),
  collapsed: false,
};

const $ = (id) => document.getElementById(id);
const uid = () => Math.random().toString(36).slice(2, 10) + Date.now().toString(36).slice(-4);
const round = (v) => Math.round(v * 1000) / 1000;
const byId = (id) => S.doc.nodes.find((n) => n.id === id);
const selNodes = () => S.sel.map(byId).filter(Boolean);

let vp;

// ---------------------------------------------------------------- history
let lastKey = null, lastTime = 0;
function checkpoint(key) {
  const now = Date.now();
  if (key && key === lastKey && now - lastTime < 1200) { lastTime = now; return; }
  lastKey = key; lastTime = now;
  S.undo.push(JSON.stringify({ nodes: S.doc.nodes, sel: S.sel }));
  if (S.undo.length > 100) S.undo.shift();
  S.redo.length = 0;
}
function restore(from, to) {
  if (!from.length) return;
  to.push(JSON.stringify({ nodes: S.doc.nodes, sel: S.sel }));
  const snap = JSON.parse(from.pop());
  S.doc.nodes = snap.nodes;
  S.sel = snap.sel.filter((id) => byId(id));
  lastKey = null;
  commit();
}
const undo = () => restore(S.undo, S.redo);
const redo = () => restore(S.redo, S.undo);

// ---------------------------------------------------------------- commit / save
function commit({ panel = true } = {}) {
  try {
    vp.sync(S.doc.nodes);
  } catch (e) {
    console.error(e);
    toast('形状の計算に失敗しました: ' + e.message, 4000);
  }
  vp.setSelection(S.sel);
  if (panel) renderSheet();
  updateInfo();
  $('btn-undo').disabled = !S.undo.length;
  $('btn-redo').disabled = !S.redo.length;
  pro.onCommit();
  scheduleSave();
}

let saveTimer = null, lastThumb = 0;
function scheduleSave() {
  clearTimeout(saveTimer);
  saveTimer = setTimeout(saveNow, 600);
}
async function saveNow() {
  clearTimeout(saveTimer);
  if (!S.project) return;
  S.project.updated = Date.now();
  if (Date.now() - lastThumb > 8000) {
    lastThumb = Date.now();
    try { S.project.thumb = vp.snapshotPNG(160); } catch { /* ignore */ }
  }
  try {
    await store.putProject({ ...S.project, doc: S.doc });
  } catch (e) {
    console.error(e);
    toast('保存に失敗しました（容量不足の可能性）', 3000);
  }
}

// ---------------------------------------------------------------- node helpers
function makeNode(kind, extra = {}) {
  const count = S.doc.nodes.filter((n) => n.kind === kind).length + 1;
  return {
    id: uid(), kind, name: `${KINDS[kind].label} ${count}`,
    params: defaultParams(kind), pos: [0, 0, 0], rot: [0, 0, 0], scale: [1, 1, 1],
    color: COLORS[S.doc.nodes.length % 6], hole: false, ...extra,
  };
}

function dropToFloor(n) {
  const b = vp.nodeBox(n);
  n.pos[2] = round(n.pos[2] - b.min.z);
}

function freeSpot(n) {
  // Place new parts beside existing ones (right, then behind) instead of on top of them.
  if (!S.doc.nodes.some((o) => !o.hidden)) return;
  const b = vp.nodeBox(n);
  const w = b.max.x - b.min.x, d = b.max.y - b.min.y;
  const all = new Box3();
  for (const o of S.doc.nodes) if (!o.hidden) all.union(vp.nodeBox(o));
  const x = Math.ceil((all.max.x + 5 + w / 2) / 5) * 5;
  if (x + w / 2 <= S.plate.x / 2) { n.pos[0] = x; return; }
  const y = Math.ceil((all.max.y + 5 + d / 2) / 5) * 5;
  if (y + d / 2 <= S.plate.y / 2) { n.pos[0] = 0; n.pos[1] = y; return; }
  const y2 = Math.floor((all.min.y - 5 - d / 2) / 5) * 5;
  if (y2 - d / 2 >= -S.plate.y / 2) { n.pos[0] = 0; n.pos[1] = y2; return; }
  // Plate is full: never stack parts; place beside everything (flagged as outside the area).
  n.pos[0] = x;
}

function addNode(kind, extra) {
  checkpoint();
  const n = makeNode(kind, extra);
  freeSpot(n);
  dropToFloor(n);
  S.doc.nodes.push(n);
  S.sel = [n.id];
  commit();
  return n;
}

function cloneNode(n) {
  const c = JSON.parse(JSON.stringify(n));
  const reid = (x) => { x.id = uid(); x.children?.forEach(reid); };
  reid(c);
  return c;
}

function rotMatrix(rot) {
  return new Matrix4().makeRotationFromEuler(new Euler(...rot.map(MathUtils.degToRad), 'XYZ'));
}
function eulerDeg(m) {
  const e = new Euler().setFromRotationMatrix(m, 'XYZ');
  return [e.x, e.y, e.z].map((r) => round(MathUtils.radToDeg(r)));
}

function selectionBox(nodes = selNodes()) {
  const b = new Box3();
  for (const n of nodes) b.union(vp.nodeBox(n));
  return b;
}

function forEachMesh(nodes, fn) {
  for (const n of nodes) {
    if (n.kind === 'mesh') fn(n);
    if (n.children) forEachMesh(n.children, fn);
  }
}

// ---------------------------------------------------------------- commands
const cmd = {
  toggleHole() {
    const ns = selNodes();
    if (!ns.length) return;
    checkpoint();
    const to = !ns.every((n) => n.hole);
    ns.forEach((n) => { n.hole = to; });
    commit();
    if (to) toast('穴にしました。ソリッドとグループ化すると削り取ります');
  },
  duplicate() {
    const ns = selNodes();
    if (!ns.length) return;
    checkpoint();
    const copies = ns.map((n) => {
      const c = cloneNode(n);
      c.pos[0] = round(c.pos[0] + 10);
      c.pos[1] = round(c.pos[1] + 10);
      return c;
    });
    S.doc.nodes.push(...copies);
    S.sel = copies.map((c) => c.id);
    commit();
  },
  remove() {
    if (!S.sel.length) return;
    checkpoint();
    S.doc.nodes = S.doc.nodes.filter((n) => !S.sel.includes(n.id));
    S.sel = [];
    commit();
  },
  floor() {
    const ns = selNodes();
    if (!ns.length) return;
    checkpoint();
    if (ns.length === 1) dropToFloor(ns[0]);
    else {
      const dz = selectionBox(ns).min.z;
      ns.forEach((n) => { n.pos[2] = round(n.pos[2] - dz); });
    }
    commit();
  },
  center() {
    const ns = selNodes();
    if (!ns.length) return;
    checkpoint();
    const c = selectionBox(ns).getCenter(new Vector3());
    ns.forEach((n) => { n.pos[0] = round(n.pos[0] - c.x); n.pos[1] = round(n.pos[1] - c.y); });
    commit();
  },
  mirror(axis) {
    const ns = selNodes();
    if (!ns.length) return;
    checkpoint();
    const c = selectionBox(ns).getCenter(new Vector3()).toArray();
    const M = new Matrix4().makeScale(...[0, 1, 2].map((i) => (i === axis ? -1 : 1)));
    for (const n of ns) {
      n.pos[axis] = round(2 * c[axis] - n.pos[axis]);
      const R = M.clone().multiply(rotMatrix(n.rot)).multiply(M);
      n.rot = eulerDeg(R);
      n.scale[axis] = -n.scale[axis];
    }
    commit();
  },
  group() {
    const ns = selNodes();
    if (ns.length < 2) { toast('2 つ以上選択してください'); return; }
    if (!ns.some((n) => !n.hole)) { toast('ソリッドが 1 つ以上必要です'); return; }
    checkpoint();
    const c = selectionBox(ns).getCenter(new Vector3());
    const children = ns.map((n) => ({ ...n, pos: [round(n.pos[0] - c.x), round(n.pos[1] - c.y), round(n.pos[2] - c.z)] }));
    const firstSolid = ns.find((n) => !n.hole);
    const g = {
      id: uid(), kind: 'group', name: `グループ ${S.doc.nodes.filter((n) => n.kind === 'group').length + 1}`,
      op: 'union', params: {}, pos: [round(c.x), round(c.y), round(c.z)], rot: [0, 0, 0], scale: [1, 1, 1],
      color: firstSolid.color, hole: false, children,
    };
    const idx = Math.min(...ns.map((n) => S.doc.nodes.indexOf(n)));
    S.doc.nodes = S.doc.nodes.filter((n) => !S.sel.includes(n.id));
    S.doc.nodes.splice(idx, 0, g);
    S.sel = [g.id];
    const t = performance.now();
    commit();
    const ms = performance.now() - t;
    if (ms > 1500) toast(`計算に ${(ms / 1000).toFixed(1)} 秒かかりました。分割数を減らすと速くなります`, 3000);
  },
  ungroup() {
    const g = selNodes()[0];
    if (!g || g.kind !== 'group') return;
    checkpoint();
    const R = rotMatrix(g.rot);
    const gs = g.scale;
    const kids = g.children.map((ch) => {
      const c = JSON.parse(JSON.stringify(ch));
      const p = new Vector3(c.pos[0] * gs[0], c.pos[1] * gs[1], c.pos[2] * gs[2]).applyMatrix4(R);
      c.pos = [round(p.x + g.pos[0]), round(p.y + g.pos[1]), round(p.z + g.pos[2])];
      c.rot = eulerDeg(R.clone().multiply(rotMatrix(c.rot)));
      c.scale = c.scale.map((s, i) => round(s * gs[i]));
      return c;
    });
    const idx = S.doc.nodes.indexOf(g);
    S.doc.nodes.splice(idx, 1, ...kids);
    S.sel = kids.map((k) => k.id);
    commit();
  },
  selectAll() {
    S.sel = S.doc.nodes.filter((n) => !n.hidden).map((n) => n.id);
    if (S.sel.length > 1) setMulti(true);
    commit();
  },
  moveSelection(delta) {
    for (const n of selNodes()) n.pos = n.pos.map((v, i) => round(v + delta[i]));
  },
};

function setMulti(on) {
  S.multi = on;
  $('btn-multi').setAttribute('aria-pressed', String(on));
}

// ---------------------------------------------------------------- dialogs: align / array
async function alignDialog() {
  const ns = selNodes();
  if (ns.length < 2) return;
  const labels = [['X', '左', '中央', '右'], ['Y', '手前', '中央', '奥'], ['Z', '下', '中央', '上']];
  const apply = (axis, mode) => {
    checkpoint();
    const all = selectionBox(ns);
    const tgt = [all.min, all.getCenter(new Vector3()), all.max][mode].getComponent(axis);
    for (const n of ns) {
      const b = vp.nodeBox(n);
      const cur = [b.min, b.getCenter(new Vector3()), b.max][mode].getComponent(axis);
      n.pos[axis] = round(n.pos[axis] + tgt - cur);
    }
    commit();
    toast(`${labels[axis][0]} を${labels[axis][mode + 1]}揃え`);
  };
  const body = labels.map(([ax, ...names], axis) => el('div', { class: 'field' },
    el('span', {}, `${ax} 軸`),
    el('div', { class: 'row' }, names.map((nm, mode) => el('button', { type: 'button', class: 'btn', onclick: () => apply(axis, mode) }, nm)))));
  body.push(el('p', { class: 'hint' }, '選択全体の範囲を基準に揃えます。'));
  await openDialog({ title: '整列', body, buttons: [{ label: '閉じる', value: 'ok' }] });
}

async function arrayDialog() {
  const ns = selNodes();
  if (!ns.length) return;
  const st = store.getSetting('array', { type: 'linear', n: 3, dx: 25, dy: 0, dz: 0, cn: 6, angle: 360, cx: 0, cy: 0, rotate: true });
  const holder = el('div');
  const render = () => {
    holder.replaceChildren();
    if (st.type === 'linear') {
      holder.append(
        el('div', { class: 'field' }, el('span', {}, '個数（元を含む）'), numField({ label: '個数', value: st.n, min: 2, max: 100, integer: true, onChange: (v) => { st.n = v; } })),
        el('div', { class: 'field' }, el('span', {}, '間隔 (mm)'), el('div', { class: 'row' },
          numField({ label: 'X', axis: 'x', value: st.dx, step: S.snap, onChange: (v) => { st.dx = v; } }),
          numField({ label: 'Y', axis: 'y', value: st.dy, step: S.snap, onChange: (v) => { st.dy = v; } }),
          numField({ label: 'Z', axis: 'z', value: st.dz, step: S.snap, onChange: (v) => { st.dz = v; } }))));
    } else {
      holder.append(
        el('div', { class: 'row two' },
          numField({ label: '個数', value: st.cn, min: 2, max: 100, integer: true, onChange: (v) => { st.cn = v; } }),
          numField({ label: '角度°', value: st.angle, min: 1, max: 360, step: 15, onChange: (v) => { st.angle = v; } })),
        el('div', { class: 'field' }, el('span', {}, '回転中心 (mm)'), el('div', { class: 'row two' },
          numField({ label: 'X', axis: 'x', value: st.cx, step: S.snap, onChange: (v) => { st.cx = v; } }),
          numField({ label: 'Y', axis: 'y', value: st.cy, step: S.snap, onChange: (v) => { st.cy = v; } }))),
        el('label', { class: 'check' }, el('input', { type: 'checkbox', checked: st.rotate, onchange: (e) => { st.rotate = e.target.checked; } }), '部品自体も回転させる'));
    }
  };
  render();
  const body = [segmented([['linear', '直線配列'], ['circular', '円形配列']], st.type, (v) => { st.type = v; render(); }), el('div', { style: { height: '8px' } }), holder];
  const v = await openDialog({ title: '配列複製', body, buttons: [{ label: 'キャンセル', value: 'cancel' }, { label: '作成', value: 'ok', cls: 'accent' }] });
  if (v !== 'ok') return;
  store.setSetting('array', st);
  checkpoint();
  const created = [];
  if (st.type === 'linear') {
    for (let i = 1; i < st.n; i++) for (const n of ns) {
      const c = cloneNode(n);
      c.pos = [round(n.pos[0] + st.dx * i), round(n.pos[1] + st.dy * i), round(n.pos[2] + st.dz * i)];
      created.push(c);
    }
  } else {
    const stepDeg = st.angle >= 360 ? 360 / st.cn : st.angle / (st.cn - 1);
    for (let i = 1; i < st.cn; i++) for (const n of ns) {
      const a = MathUtils.degToRad(stepDeg * i);
      const c = cloneNode(n);
      const x = n.pos[0] - st.cx, y = n.pos[1] - st.cy;
      c.pos = [round(st.cx + x * Math.cos(a) - y * Math.sin(a)), round(st.cy + x * Math.sin(a) + y * Math.cos(a)), n.pos[2]];
      if (st.rotate) c.rot = eulerDeg(new Matrix4().makeRotationZ(a).multiply(rotMatrix(n.rot)));
      created.push(c);
    }
  }
  S.doc.nodes.push(...created);
  S.sel = [...S.sel, ...created.map((c) => c.id)];
  setMulti(true);
  commit();
  toast(`${created.length} 個複製しました`);
}

// ---------------------------------------------------------------- sheet: add tray
function renderAddTray() {
  const tray = $('add-tray');
  tray.replaceChildren();
  for (const k of ADD_ORDER) {
    tray.append(el('button', { class: 'tool', onclick: () => addKind(k) }, icon(KINDS[k].icon), KINDS[k].label));
  }
  tray.append(el('button', { class: 'tool', onclick: () => pickFile('.stl,.json,model/stl,application/json') }, icon('import'), 'STL読込'));
  if (S.doc.nodes.length) tray.append(el('button', { class: 'tool', onclick: cmd.selectAll }, icon('multi'), '全選択'));
  const locked = !license.isPro();
  tray.append(el('div', { class: 'tray-h' }, el('span', { class: 'pro-tag' }, 'PRO'), locked ? 'タップで詳細・無料トライアル' : '設計ツール'));
  for (const [label, ic, feature, fn] of PRO_TOOLS) {
    tray.append(el('button', { class: 'tool pro' + (locked ? ' locked' : ''), onclick: gated(feature, fn) },
      icon(ic), label, locked ? el('span', { class: 'lock' }, icon('lock')) : null));
  }
}

async function addKind(k) {
  if (KINDS[k].sketch) {
    const r = await editSketch({ pts: defaultParams(k).pts, curves: null, mode: k });
    if (!r) return;
    if (r.invalid) { toast('辺が交差しているため作成できません', 2500); return; }
    const p = { ...defaultParams(k), pts: r.pts, curves: r.curves };
    addNode(k, { params: p });
    return;
  }
  addNode(k);
}

// ---------------------------------------------------------------- sheet: selection
function actionBtn(label, ic, fn, { on = false, danger = false, disabled = false } = {}) {
  return el('button', { class: 'act' + (on ? ' on' : '') + (danger ? ' danger' : ''), disabled, onclick: fn }, icon(ic), label);
}

function renderSheet() {
  const ns = selNodes();
  $('add-tray').hidden = ns.length > 0;
  $('sel-panel').hidden = ns.length === 0;
  if (!ns.length) { renderAddTray(); return; }

  const acts = $('actions');
  acts.replaceChildren();
  const allHole = ns.every((n) => n.hole);
  const single = ns.length === 1 ? ns[0] : null;
  if (!single) acts.append(actionBtn('グループ', 'group', cmd.group));
  if (single?.kind === 'group') acts.append(actionBtn('解除', 'ungroup', cmd.ungroup));
  acts.append(
    actionBtn(allHole ? '穴' : 'ソリッド', allHole ? 'hole' : 'solid', cmd.toggleHole, { on: allHole }),
    actionBtn('複製', 'copy', cmd.duplicate),
    actionBtn('床に置く', 'floor', cmd.floor),
    actionBtn('中央へ', 'center', cmd.center),
    actionBtn('ミラー', 'mirror', mirrorMenu),
  );
  if (!single) acts.append(actionBtn('整列', 'align', alignDialog));
  if (single) {
    acts.append(
      actionBtn('自動向き', 'orient', gated('自動向き最適化', pro.autoOrient)),
      actionBtn('分割', 'split', gated('分割（ダボ付き）', adv.splitDialog)),
      actionBtn('パターン穴', 'pattern', gated('パターン穴あけ', adv.patternDialog)),
      actionBtn('面に配置', 'place', gated('面に配置', adv.startPlace)),
    );
  }
  acts.append(
    actionBtn('マイパーツ', 'library', gated('マイパーツ', adv.saveToLibrary)),
    actionBtn('配列', 'array', arrayDialog),
    actionBtn('削除', 'trash', cmd.remove, { danger: true }),
  );
  renderProps(ns);
}

async function mirrorMenu() {
  const pick = (a) => { closeDialog(); cmd.mirror(a); };
  await openDialog({
    title: 'ミラー（反転）',
    body: [el('div', { class: 'row' }, ['X', 'Y', 'Z'].map((ax, i) => el('button', { type: 'button', class: 'btn', onclick: () => pick(i) }, `${ax} 方向`))),
      el('p', { class: 'hint' }, '選択範囲の中心を基準に反転します。')],
  });
}

function section(title, ...children) {
  const h = el('div', { class: 'sec-h' }, typeof title === 'string' ? el('span', {}, title) : title);
  return el('div', { class: 'sec' }, h, ...children);
}

// Design variables (Pro): numeric fields accept formulas using them.
const varsFn = () => (license.isPro() ? S.doc.vars || {} : {});
function setExpr(n, key, e) {
  if (e) { n.exprs = n.exprs || {}; n.exprs[key] = e; return; }
  if (n.exprs) { delete n.exprs[key]; if (!Object.keys(n.exprs).length) delete n.exprs; }
}

function renderProps(ns) {
  const props = $('props');
  const scrollTop = props.scrollTop;
  props.replaceChildren();
  const edit = (key, fn) => (...args) => { checkpoint(key); fn(...args); commit(); };
  // Shape edits keep a part that sits on the plate sitting on the plate.
  const editShape = (key, fn) => (...args) => {
    checkpoint(key);
    const onFloor = ns.length === 1 && Math.abs(vp.nodeBox(ns[0]).min.z) < 0.01;
    fn(...args);
    if (onFloor) dropToFloor(ns[0]);
    commit();
  };

  if (ns.length > 1) {
    const b = selectionBox(ns);
    const c = b.getCenter(new Vector3());
    props.append(section(`${ns.length} 個を選択中 ・ 中心位置 (mm)`, el('div', { class: 'row' },
      ['x', 'y', 'z'].map((ax, i) => numField({
        label: ax.toUpperCase(), axis: ax, value: c.getComponent(i), step: S.snap,
        onChange: edit('mpos' + i, (v) => cmd.moveSelection([0, 1, 2].map((j) => (j === i ? v - c.getComponent(i) : 0)))),
      })))));
    props.append(el('p', { class: 'hint' }, 'グループ化すると、ソリッドは結合・穴は削り取られます。'));
    props.scrollTop = scrollTop;
    return;
  }

  const n = ns[0];
  const def = KINDS[n.kind];

  // name + color
  const name = el('input', { class: 'txt', value: n.name, enterkeyhint: 'done', 'aria-label': '名前' });
  name.addEventListener('change', edit('name', () => { n.name = name.value.trim() || def.label; }));
  props.append(section(def.label, name));
  if (!n.hole) {
    props.append(section('色', el('div', { class: 'swatches' }, COLORS.map((c) => el('button', {
      class: 'sw' + (n.color === c ? ' on' : ''), style: { background: c }, 'aria-label': c,
      onclick: edit('color', () => { n.color = c; }),
    })))));
  }

  if (def.text) {
    const t = el('input', { class: 'txt', value: n.params.text, enterkeyhint: 'done', autocapitalize: 'off', autocomplete: 'off' });
    t.addEventListener('change', editShape('text', () => {
      // The bundled font only covers Latin glyphs.
      const clean = t.value.replace(/[^\x20-\x7e]/g, '');
      if (clean !== t.value) toast('英数字・記号のみ使えます');
      n.params.text = clean || 'A';
    }));
    props.append(section('テキスト（英数字）', t));
  }
  if (def.sketch) {
    props.append(section('断面', el('button', {
      class: 'btn', style: { width: '100%' },
      onclick: async () => {
        const r = await editSketch({ pts: n.params.pts, curves: n.params.curves, mode: n.kind });
        if (!r) return;
        if (r.invalid) { toast('辺が交差しているため反映できません', 2500); return; }
        editShape('pts', () => { n.params.pts = r.pts; n.params.curves = r.curves; })();
      },
    }, icon('edit'), 'スケッチを編集')));
  }
  if (n.kind === 'group') {
    props.append(section('ブーリアン', segmented([['union', '結合'], ['intersect', '交差（共通部分）']], n.op || 'union',
      editShape('op', (v) => { n.op = v; })),
    el('p', { class: 'hint' }, `部品 ${n.children.length} 個（穴 ${n.children.filter((c) => c.hole).length} 個）。「解除」で元の部品に戻せます。`)));
  }

  // choice parameters (thread size, head type, ...)
  for (const [k, label, options] of def.select || []) {
    const opts = options.map((o) => (Array.isArray(o) ? o : [o, o]));
    const onPick = editShape('s.' + k, (v) => {
      n.params[k] = v;
      if (k === 'size') {
        if (n.kind === 'nut') n.params.h = ISO[v].m;
        n.name = n.name.replace(/M[\d.]+$/, v);
      }
    });
    if (opts.length > 4) {
      const sel = el('select', { class: 'txt', onchange: (e) => onPick(e.target.value) },
        opts.map(([val, lab]) => el('option', { value: val, selected: val === n.params[k] }, lab)));
      props.append(section(label, sel));
    } else {
      props.append(section(label, segmented(opts, n.params[k], onPick)));
    }
  }
  props.append(...pro.propsExtras(n));

  // parameters
  if (def.params.length) {
    const rows = el('div', { class: 'row two' });
    for (const [k, label, , min, step, opt] of def.params) {
      const integer = opt?.int || k === 'seg' || k === 'n';
      rows.append(numField({
        label: label + (integer || k === 'angle' || k === 'm' ? '' : ' mm'), value: n.params[k], step: integer ? (k === 'seg' ? 8 : 1) : step, min, integer,
        max: k === 'angle' ? 360 : Infinity, expr: n.exprs?.[k], vars: varsFn,
        onChange: editShape('p.' + k, (v, e) => { n.params[k] = v; setExpr(n, k, e); }),
      }));
    }
    props.append(section(PARAM_SIZED.has(n.kind) ? '寸法' : '形状', rows));
  }

  // size via scale
  if (!PARAM_SIZED.has(n.kind)) {
    const base = nodeGeometry({ ...n, scale: [1, 1, 1] }).boundingBox;
    const bs = [base.max.x - base.min.x, base.max.y - base.min.y, base.max.z - base.min.z];
    const lock = el('button', { type: 'button', onclick: () => { S.lockAspect = !S.lockAspect; store.setSetting('lockAspect', S.lockAspect); renderSheet(); } },
      S.lockAspect ? '比率固定: ON' : '比率固定: OFF');
    props.append(section(el('span', {}, 'サイズ (mm)', ' '), el('div', { class: 'row' }, ['x', 'y', 'z'].map((ax, i) => numField({
      label: ['幅 X', '奥行 Y', '高さ Z'][i], axis: ax, value: Math.abs(bs[i] * n.scale[i]), step: S.snap, min: 0.01,
      onChange: editShape('size' + i, (v) => {
        if (bs[i] < 1e-9) return;
        const f = v / Math.abs(bs[i] * n.scale[i]);
        if (S.lockAspect) n.scale = n.scale.map((s) => round(s * f) || s);
        else n.scale[i] = round(Math.sign(n.scale[i]) * v / bs[i]);
      }),
    })))));
    props.lastChild.querySelector('.sec-h').append(lock);
  }

  // position
  const b = vp.nodeBox(n);
  props.append(section(`位置 (mm) ・ 底面 Z=${fmt(round(b.min.z))}`, el('div', { class: 'row' }, ['x', 'y', 'z'].map((ax, i) => numField({
    label: ax.toUpperCase(), axis: ax, value: n.pos[i], step: S.snap, expr: n.exprs?.['pos' + i], vars: varsFn,
    onChange: edit('pos' + i, (v, e) => { n.pos[i] = v; setExpr(n, 'pos' + i, e); }),
  })))));

  // rotation
  const rotRow = el('div', { class: 'row' }, ['x', 'y', 'z'].map((ax, i) => numField({
    label: ax.toUpperCase() + '°', axis: ax, value: n.rot[i], step: 15,
    onChange: editShape('rot' + i, (v) => { n.rot[i] = ((v % 360) + 540) % 360 - 180; }),
  })));
  const quick = el('div', { class: 'row', style: { marginTop: '6px' } }, ['X', 'Y', 'Z'].map((ax, i) => el('button', {
    type: 'button', class: 'btn',
    onclick: () => {
      checkpoint();
      const axisM = [new Matrix4().makeRotationX(Math.PI / 2), new Matrix4().makeRotationY(Math.PI / 2), new Matrix4().makeRotationZ(Math.PI / 2)][i];
      n.rot = eulerDeg(axisM.multiply(rotMatrix(n.rot)));
      dropIfWasOnFloor(n, b);
      commit();
    },
  }, icon('rotate'), `${ax} 90°`)));
  props.append(section('回転', rotRow, quick));
  props.scrollTop = scrollTop;
}

function dropIfWasOnFloor(n, before) {
  if (Math.abs(before.min.z) < 0.01) dropToFloor(n);
}

// ---------------------------------------------------------------- info bar
function updateInfo() {
  const info = $('info');
  const ns = S.sel.length ? selNodes() : S.doc.nodes.filter((n) => !n.hidden);
  if (!ns.length) {
    info.innerHTML = '下のパーツをタップして追加 ・ 1本指で回転 ・ 2本指でズーム';
    return;
  }
  const b = selectionBox(ns);
  const s = b.getSize(new Vector3());
  const label = S.sel.length ? (ns.length === 1 ? ns[0].name : `${ns.length} 個選択`) : `${ns.length} 個`;
  const out = b.min.x < -S.plate.x / 2 - 0.01 || b.max.x > S.plate.x / 2 + 0.01 || b.min.y < -S.plate.y / 2 - 0.01 ||
    b.max.y > S.plate.y / 2 + 0.01 || b.max.z > S.plate.z + 0.01;
  const below = b.min.z < -0.01;
  info.replaceChildren(
    el('b', {}, label), ` ・ ${fmt(round(s.x))} × ${fmt(round(s.y))} × ${fmt(round(s.z))} mm`,
    out ? el('span', { class: 'warn' }, ' ・ 造形エリア外') : '',
    below ? el('span', { class: 'warn' }, ' ・ 床より下') : '',
  );
}

// ---------------------------------------------------------------- export
function exportParts(scope, union) {
  let nodes = (scope === 'sel' ? selNodes() : S.doc.nodes).filter((n) => !n.hidden && !n.hole);
  if (!nodes.length) return { parts: [], nodes };
  if (union && nodes.length > 1) {
    const tmp = { id: 'export', kind: 'group', op: 'union', params: {}, pos: [0, 0, 0], rot: [0, 0, 0], scale: [1, 1, 1], children: nodes };
    return { parts: [{ geometry: nodeGeometry(tmp), matrix: new Matrix4() }], nodes };
  }
  return { parts: nodes.map((n) => ({ geometry: nodeGeometry(n), matrix: nodeMatrix(n, new Matrix4()) })), nodes };
}

const FORMATS = [['stl', 'STL'], ['3mf', '3MF'], ['obj', 'OBJ']];

async function exportDialog() {
  if (!S.doc.nodes.some((n) => !n.hidden && !n.hole)) { toast('出力できるソリッドがありません'); return; }
  const st = { scope: S.sel.length ? 'sel' : 'all', union: store.getSetting('exportUnion', true), format: store.getSetting('exportFormat', 'stl') };
  if (st.format !== 'stl' && !license.isPro()) st.format = 'stl';
  let blob = null, token = 0;
  const fname = el('input', { class: 'txt', value: S.project.name.replace(/[\\/:*?"<>|]/g, '_'), enterkeyhint: 'done' });
  const stats = el('div');
  const est = el('div');
  const prepare = async () => {
    const my = ++token;
    const t = performance.now();
    blob = null;
    const { parts, nodes } = exportParts(st.scope, st.union);
    stats.replaceChildren();
    est.replaceChildren();
    if (!parts.length) { stats.append(el('div', { class: 'warnbox' }, '出力対象のソリッドがありません。')); return; }
    const box = new Box3();
    let vol = 0, tris = 0;
    const v = new Vector3();
    for (const p of parts) {
      const a = p.geometry.getAttribute('position').array;
      for (let i = 0; i < a.length; i += 3) box.expandByPoint(v.set(a[i], a[i + 1], a[i + 2]).applyMatrix4(p.matrix));
      vol += Math.abs(geometryVolume(p.geometry));
      tris += a.length / 9;
    }
    const size = box.getSize(new Vector3());
    stats.append(el('p', { class: 'hint' }, 'ファイルを準備中…'));
    let out;
    if (st.format === '3mf' || st.format === 'obj') {
      // Name and color each part so multi-material slicers can assign filaments.
      const named = parts.length === nodes.length
        ? parts.map((p, i) => ({ ...p, name: nodes[i].name, color: nodes[i].color }))
        : parts.map((p) => ({ ...p, name: S.project.name, color: nodes[0].color }));
      out = st.format === '3mf' ? await build3mf(named) : new Blob([buildObj(named)], { type: 'model/obj' });
    } else {
      out = new Blob([toBinarySTL(parts, `Pocket CAD Pro - ${S.project.name}`)], { type: 'model/stl' });
    }
    if (my !== token) return;
    blob = out;
    const warns = [];
    if (box.min.z < -0.01) warns.push('床 (Z=0) より下に出ている部分があります。');
    else if (box.min.z > 0.01) warns.push(`モデルが床から ${fmt(round(box.min.z))} mm 浮いています（スライサーで自動配置されることが多いです）。`);
    if (size.x > S.plate.x || size.y > S.plate.y || size.z > S.plate.z) warns.push('造形エリアより大きいサイズです。');
    if (S.doc.nodes.some((n) => n.hole && !n.hidden)) warns.push('グループ化されていない穴は出力されません。');
    if (st.format !== 'stl' && st.union && nodes.length > 1) warns.push('パーツごとに色を分けたい場合は「結合」をオフにしてください。');
    const w = vol / 1000 * S.density;
    stats.replaceChildren(
      el('dl', { class: 'stat' },
        el('dt', {}, 'サイズ'), el('dd', {}, `${fmt(round(size.x))} × ${fmt(round(size.y))} × ${fmt(round(size.z))} mm`),
        el('dt', {}, '体積'), el('dd', {}, `${(vol / 1000).toFixed(2)} cm³`),
        el('dt', {}, '推定重量'), el('dd', {}, `${w.toFixed(1)} g（中身が詰まった場合）`),
        el('dt', {}, '部品 / 三角形'), el('dd', {}, `${nodes.length} / ${tris.toLocaleString()}`),
        el('dt', {}, 'ファイル'), el('dd', {}, `${(blob.size / 1024).toFixed(0)} KB ・ ${(performance.now() - t).toFixed(0)} ms`)),
      ...warns.map((x) => el('div', { class: 'warnbox' }, x)));
    if (license.isPro()) {
      est.append(el('div', { class: 'sec-h', style: { marginTop: '8px' } }, el('span', {}, '印刷見積もり')), pro.estimateSection(parts, S.density));
    } else {
      est.append(el('button', { type: 'button', class: 'btn', style: { width: '100%' }, onclick: gated('印刷時間・コスト見積もり', () => {}) },
        icon('clock'), '印刷時間・材料費を見積もる', el('span', { class: 'pro-tag' }, 'PRO')));
    }
  };
  const formatSeg = el('div', { class: 'field' }, el('span', {}, '形式（3MF / OBJ は Pro）'), segmented(FORMATS, st.format, async (v) => {
    if (v !== 'stl' && !(await license.requirePro('3MF / OBJ 出力'))) { exportDialog(); return; }
    st.format = v; store.setSetting('exportFormat', v); prepare();
  }));
  const scopeSeg = S.sel.length
    ? el('div', { class: 'field' }, el('span', {}, '出力範囲'), segmented([['all', 'すべて'], ['sel', `選択中 (${S.sel.length})`]], st.scope, (v) => { st.scope = v; prepare(); }))
    : null;
  const unionChk = el('label', { class: 'check' },
    el('input', { type: 'checkbox', checked: st.union, onchange: (e) => { st.union = e.target.checked; store.setSetting('exportUnion', st.union); prepare(); } }),
    '重なった部品を結合して 1 つのソリッドにする');
  prepare();
  const body = [el('label', { class: 'field' }, el('span', {}, 'ファイル名'), fname), formatSeg, scopeSeg, unionChk, stats, est];
  const touch = matchMedia('(pointer: coarse)').matches;
  const buttons = touch
    ? [{ label: 'ダウンロード', value: 'dl' }, { label: '共有 / 保存', value: 'share', cls: 'accent' }]
    : [{ label: 'キャンセル', value: 'cancel' }, { label: '保存', value: 'dl', cls: 'accent' }];
  // Save from the click handler itself: iOS only allows the share sheet during a user gesture.
  const d = $('dlg');
  const onClick = async (e) => {
    const b = e.target.closest('button[type=submit]');
    if (!b || (b.value !== 'dl' && b.value !== 'share')) return;
    e.preventDefault();
    if (!blob) { toast('準備中です。少し待ってからもう一度押してください'); return; }
    const ext = '.' + st.format;
    const name = (fname.value.trim() || 'model').replace(/\.(stl|3mf|obj)$/i, '') + ext;
    const r = await saveFile(blob, name, b.value === 'share');
    if (r === 'shared' || r === 'downloaded') {
      closeDialog('done');
      toast(`${name} を保存しました`);
      if (license.isPro()) pro.saveVersion(`${st.format.toUpperCase()} 出力 ${new Date().toLocaleTimeString('ja-JP', { hour: '2-digit', minute: '2-digit' })}`, { quiet: true });
    }
  };
  d.addEventListener('click', onClick);
  await openDialog({ title: '出力', body, buttons });
  d.removeEventListener('click', onClick);
}

// ---------------------------------------------------------------- files: import / project export
function pickFile(accept) {
  const inp = $('file-input');
  // iOS greys out files it cannot map to the accept list; keep it permissive there.
  inp.accept = /iP(hone|ad|od)/.test(navigator.userAgent) ? '' : accept;
  inp.value = '';
  inp.onchange = () => { if (inp.files[0]) importFile(inp.files[0]); };
  inp.click();
}

async function importFile(file) {
  const buf = await file.arrayBuffer();
  const head = new TextDecoder().decode(buf.slice(0, 200)).trimStart();
  try {
    if (head.startsWith('{')) await importProject(JSON.parse(new TextDecoder().decode(buf)));
    else await importSTL(buf, file.name);
  } catch (e) {
    console.error(e);
    toast('読み込めませんでした: ' + e.message, 3500);
  }
}

async function importSTL(buf, filename) {
  const pos = parseSTL(buf);
  if (!pos.length) throw new Error('三角形がありません');
  let min = [Infinity, Infinity, Infinity], max = [-Infinity, -Infinity, -Infinity];
  for (let i = 0; i < pos.length; i += 3) for (let k = 0; k < 3; k++) {
    min[k] = Math.min(min[k], pos[i + k]); max[k] = Math.max(max[k], pos[i + k]);
  }
  const c = min.map((m, k) => (m + max[k]) / 2);
  for (let i = 0; i < pos.length; i += 3) for (let k = 0; k < 3; k++) pos[i + k] -= c[k];
  const dataId = uid();
  registerMeshData(dataId, pos);
  await store.putMesh(dataId, pos);
  const tris = pos.length / 9;
  addNode('mesh', { name: filename.replace(/\.stl$/i, ''), dataId, params: {}, color: '#9aa4b2' });
  vp.view('iso');
  toast(`${tris.toLocaleString()} 三角形を読み込みました`);
  if (tris > 200000) toast('三角形が多いため、ブーリアン演算は重くなります', 3500);
}

async function importProject(data) {
  // Files from the free app open unchanged.
  if ((data.app !== 'pocket-cad' && data.app !== 'pocket-cad-pro') || !data.doc) throw new Error('Pocket CAD のプロジェクトファイルではありません');
  for (const [id, b64] of Object.entries(data.meshes || {})) {
    const f = decodeMesh(b64);
    registerMeshData(id, f);
    await store.putMesh(id, f);
  }
  await saveNow();
  const p = { id: uid(), name: data.name || '読み込み', created: Date.now(), updated: Date.now() };
  await store.putProject({ ...p, doc: data.doc });
  await openProject(p.id);
  toast('プロジェクトを読み込みました');
}

async function exportProject(id) {
  const p = id === S.project.id ? { ...S.project, doc: S.doc } : await store.getProject(id);
  const meshes = {};
  const ids = [];
  forEachMesh(p.doc.nodes, (n) => ids.push(n.dataId));
  for (const mid of ids) {
    const d = getMeshData(mid) || await store.getMesh(mid);
    if (d) meshes[mid] = encodeMesh(d);
  }
  const json = JSON.stringify({ app: 'pocket-cad-pro', version: 1, name: p.name, doc: p.doc, meshes });
  await saveFile(new Blob([json], { type: 'application/json' }), `${p.name.replace(/[\\/:*?"<>|]/g, '_')}.pocketcad.json`, matchMedia('(pointer: coarse)').matches);
}

// ---------------------------------------------------------------- projects
async function newProject(name = '無題') {
  const p = { id: uid(), name, created: Date.now(), updated: Date.now() };
  await store.putProject({ ...p, doc: { nodes: [] } });
  return p.id;
}

async function openProject(id) {
  const p = await store.getProject(id);
  if (!p) return false;
  const { doc, ...meta } = p;
  const ids = [];
  forEachMesh(doc.nodes, (n) => ids.push(n.dataId));
  for (const mid of ids) {
    if (getMeshData(mid)) continue;
    const d = await store.getMesh(mid);
    if (d) registerMeshData(mid, d);
  }
  S.project = meta;
  S.doc = doc;
  S.sel = [];
  S.undo = []; S.redo = [];
  lastThumb = 0;
  store.setSetting('lastProject', id);
  $('project-name').textContent = meta.name;
  commit();
  vp.view('iso');
  return true;
}

async function renameProject() {
  const v = await promptDialog('プロジェクト名', S.project.name);
  if (v == null) return;
  S.project.name = v.trim() || '無題';
  $('project-name').textContent = S.project.name;
  saveNow();
}

async function projectsDialog() {
  await saveNow();
  const list = el('div', { class: 'list' });
  const refresh = async () => {
    list.replaceChildren();
    const all = await store.listProjects();
    const thumbs = await Promise.all(all.map((p) => store.getProject(p.id).then((x) => x?.thumb)));
    all.forEach((p, i) => {
      const date = new Date(p.updated).toLocaleString('ja-JP', { month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' });
      const more = el('button', {
        type: 'button', class: 'icon-btn', 'aria-label': 'その他',
        onclick: (e) => { e.stopPropagation(); projectMenu(p).then(refresh); },
      }, icon('edit'));
      list.append(el('div', {
        class: 'proj' + (p.id === S.project.id ? ' current' : ''), role: 'button',
        onclick: async () => { closeDialog(); if (p.id !== S.project.id) await openProject(p.id); },
      }, thumbs[i] ? el('img', { src: thumbs[i], alt: '' }) : el('div', { class: 'ph' }),
      el('div', { style: { minWidth: 0 } }, el('div', { class: 'n' }, p.name), el('div', { class: 'd' }, date)), more));
    });
  };
  await refresh();
  const top = el('div', { class: 'row', style: { marginBottom: '12px' } },
    el('button', { type: 'button', class: 'btn accent', onclick: async () => { closeDialog(); await openProject(await newProject()); } }, icon('plus'), '新規'),
    el('button', { type: 'button', class: 'btn', onclick: () => { closeDialog(); pickFile('.json,.stl,application/json,model/stl'); } }, icon('import'), '読込'),
    el('button', { type: 'button', class: 'btn', onclick: () => { closeDialog(); settingsDialog(); } }, icon('settings'), '設定'));
  const proRow = el('div', { class: 'row', style: { marginBottom: '12px' } },
    el('button', { type: 'button', class: 'btn', onclick: () => { closeDialog(); gated('バージョン履歴', pro.versionsDialog)(); } }, icon('history'), '履歴'),
    el('button', { type: 'button', class: 'btn', onclick: () => { closeDialog(); gated('無料版から引き継ぎ', pro.importFreeDialog)(); } }, icon('import'), '無料版から'),
    el('button', { type: 'button', class: 'btn', onclick: () => { closeDialog(); license.planDialog(); } }, icon('star'), 'プラン'));
  await openDialog({ title: 'プロジェクト', body: [top, proRow, list] });
}

async function projectMenu(p) {
  // Nested dialogs are not supported; this temporarily replaces the list.
  const pick = (v) => closeDialog(v);
  const v = await openDialog({
    title: p.name,
    body: el('div', { class: 'list' },
      el('button', { type: 'button', class: 'btn', onclick: () => pick('rename') }, '名前を変更'),
      el('button', { type: 'button', class: 'btn', onclick: () => pick('dup') }, '複製'),
      el('button', { type: 'button', class: 'btn', onclick: () => pick('export') }, 'ファイルに書き出し（.json）'),
      el('button', { type: 'button', class: 'btn danger', onclick: () => pick('delete') }, '削除')),
  });
  if (v === 'rename') {
    const name = await promptDialog('プロジェクト名', p.name);
    if (name != null) {
      const full = await store.getProject(p.id);
      full.name = name.trim() || '無題';
      await store.putProject(full);
      if (p.id === S.project.id) { S.project.name = full.name; $('project-name').textContent = full.name; }
    }
  } else if (v === 'dup') {
    const full = p.id === S.project.id ? { ...S.project, doc: S.doc } : await store.getProject(p.id);
    await store.putProject({ ...full, id: uid(), name: full.name + ' のコピー', updated: Date.now() });
  } else if (v === 'export') {
    await exportProject(p.id);
  } else if (v === 'delete') {
    if (await confirmDialog('削除', `「${p.name}」を削除しますか？元に戻せません。`, '削除', true)) {
      await store.deleteProject(p.id);
      if (p.id === S.project.id) {
        const rest = await store.listProjects();
        await openProject(rest[0]?.id || await newProject());
      }
    }
  }
  projectsDialog();
}

async function settingsDialog() {
  const plate = { ...S.plate };
  let density = S.density;
  let printer = store.getSetting('printer', 'custom');
  const matSeg = segmented(MATERIALS.map(([n, d]) => [d, n]), density, (v) => { density = v; });
  const standalone = matchMedia('(display-mode: standalone)').matches || navigator.standalone;
  const plateRow = el('div', { class: 'row' });
  const renderPlate = () => plateRow.replaceChildren(...['x', 'y', 'z'].map((ax) => numField({
    label: ax.toUpperCase(), axis: ax, value: plate[ax], min: 10, step: 10, onChange: (v) => { plate[ax] = v; printer = 'custom'; printerSel.value = 'custom'; },
  })));
  // Printer profiles (Pro) fill in the build volume and the speed used for estimates.
  const printerSel = el('select', {
    class: 'txt',
    onchange: async (e) => {
      const p = adv.PRINTERS.find(([id]) => id === e.target.value);
      if (p[2] && !(await license.requirePro('プリンター別プロファイル'))) { e.target.value = printer; return; }
      printer = p[0];
      if (p[2]) { Object.assign(plate, { x: p[2].x, y: p[2].y, z: p[2].z }); renderPlate(); }
    },
  }, adv.PRINTERS.map(([id, label]) => el('option', { value: id, selected: id === printer }, label)));
  renderPlate();
  const body = [
    el('div', { class: 'field' }, el('span', {}, 'プリンター（Pro: 機種を選ぶと造形エリアと見積もり速度を自動設定）'), printerSel),
    el('div', { class: 'field' }, el('span', {}, '造形エリア (mm)'), plateRow),
    el('div', { class: 'field' }, el('span', {}, '材料（重量の見積もり用）'), matSeg),
    standalone ? null : el('div', { class: 'warnbox' }, 'Safari の共有ボタン →「ホーム画面に追加」でアプリとして使えます（オフライン対応）。'),
    el('button', { type: 'button', class: 'btn', style: { width: '100%' }, onclick: () => { closeDialog(); license.planDialog(); } },
      icon('star'), `プラン: ${license.statusLabel()}`),
    el('p', { class: 'hint' }, `Pocket CAD Pro v${APP_VERSION} ・ three.js + three-bvh-csg`),
  ];
  const v = await openDialog({ title: '設定', body, buttons: [{ label: 'キャンセル', value: 'cancel' }, { label: '保存', value: 'ok', cls: 'accent' }] });
  if (v !== 'ok') return;
  S.plate = plate; S.density = density;
  store.setSetting('plate', plate); store.setSetting('density', density); store.setSetting('printer', printer);
  const prof = adv.PRINTERS.find(([id]) => id === printer)?.[2];
  if (prof) store.setSetting('print', { ...store.getSetting('print', {}), speed: prof.speed });
  vp.setPlate(plate);
  updateInfo();
}

// ---------------------------------------------------------------- viewport handlers
let dragStart = null;
const viewportHandlers = {
  onTap(id, hit, e) {
    if (adv.placeTap(hit)) return;
    if (pro.measureTap(hit, e)) return;
    if (!id) {
      if (S.sel.length) { S.sel = []; commit(); }
      return;
    }
    if (S.multi) S.sel = S.sel.includes(id) ? S.sel.filter((x) => x !== id) : [...S.sel, id];
    else S.sel = [id];
    commit();
  },
  onDragStart() {
    checkpoint();
    dragStart = selNodes().map((n) => [n, [...n.pos]]);
  },
  onDrag(delta) {
    if (!dragStart) return;
    const d = [delta.x, delta.y, delta.z].map((v) => Math.round(v / S.snap) * S.snap);
    for (const [n, p] of dragStart) n.pos = p.map((v, i) => round(v + d[i]));
    vp.sync(S.doc.nodes);
    updateInfo();
  },
  onDragEnd() {
    dragStart = null;
    renderSheet();
    scheduleSave();
  },
};

// ---------------------------------------------------------------- Pro tool bar (measure / section)
function updateToolBar() {
  const bar = $('toolbar');
  bar.replaceChildren();
  const close = (fn) => el('button', { type: 'button', class: 'chip', 'aria-label': '終了', onclick: fn }, icon('close'));
  if (adv.placeState()) {
    bar.append(el('div', { class: 'tb-row' }, icon('place'), el('span', { class: 'tb-text' }, '置きたい面をタップ'), close(adv.stopPlace)));
  }
  if (pro.measuring()) {
    bar.append(el('div', { class: 'tb-row' }, icon('measure'), el('span', { class: 'tb-text' }, pro.measureText()), close(pro.stopMeasure)));
  }
  const c = pro.clipState();
  if (c) {
    const label = el('span', { class: 'tb-val' }, `${fmt(Math.round(c.value * 10) / 10)}`);
    const range = el('input', { type: 'range', class: 'range', min: 0, max: 1000, value: Math.round(c.t * 1000), 'aria-label': '断面の位置',
      oninput: (e) => { pro.setClip(null, e.target.value / 1000); label.textContent = fmt(Math.round(pro.clipState().value * 10) / 10); } });
    bar.append(el('div', { class: 'tb-row' },
      segmented([[0, 'X'], [1, 'Y'], [2, 'Z']], c.axis, (v) => { pro.setClip(v, null); updateToolBar(); }), range, label, close(pro.stopClip)));
  }
  bar.hidden = !bar.children.length;
}

function updatePlanChip() {
  const st = license.getState();
  const b = $('btn-plan');
  b.textContent = st.tier === 'pro' ? 'PRO' : st.tier === 'trial' ? `お試し ${st.daysLeft}日` : 'Pro を試す';
  b.classList.toggle('active', st.tier !== 'free');
}

// ---------------------------------------------------------------- boot
async function init() {
  vp = new Viewport($('view'), viewportHandlers);
  vp.setPlate(S.plate);
  pro.initFeatures({
    S, vp, addNode, commit, checkpoint, selNodes, dropToFloor, freeSpot, rotMatrix, eulerDeg, selectionBox, saveNow, openProject, updateToolBar,
  });
  adv.initAdvanced({
    S, vp, commit, checkpoint, selNodes, dropToFloor, freeSpot, rotMatrix, eulerDeg, selectionBox, saveNow, openProject, updateToolBar,
  });
  license.onChange(() => { updatePlanChip(); if (!S.sel.length) renderAddTray(); });
  await license.refresh();
  $('btn-plan').onclick = () => license.planDialog();
  $('btn-tools').onclick = gated('解析・印刷準備ツール', pro.toolsDialog);

  try {
    const res = await fetch('vendor/helvetiker_bold.typeface.json');
    setFont(new FontLoader().parse(await res.json()));
  } catch (e) { console.warn('font load failed', e); }

  $('btn-undo').onclick = undo;
  $('btn-redo').onclick = redo;
  $('btn-export').onclick = exportDialog;
  $('btn-projects').onclick = projectsDialog;
  $('project-name').onclick = renameProject;
  $('btn-multi').onclick = () => { setMulti(!S.multi); toast(S.multi ? '複数選択: タップで追加・解除' : '複数選択オフ'); };
  const dm = $('btn-dragmode');
  dm.onclick = () => {
    vp.dragMode = vp.dragMode === 'xy' ? 'z' : 'xy';
    dm.textContent = vp.dragMode === 'xy' ? 'XY' : 'Z↕';
    dm.setAttribute('aria-pressed', String(vp.dragMode === 'z'));
    toast(vp.dragMode === 'xy' ? 'ドラッグで水平移動' : 'ドラッグで上下移動');
  };
  const sb = $('btn-snap');
  const showSnap = () => { sb.textContent = `${S.snap}mm`; };
  showSnap();
  sb.onclick = () => {
    S.snap = SNAPS[(SNAPS.indexOf(S.snap) + 1) % SNAPS.length];
    store.setSetting('snap', S.snap);
    showSnap();
    toast(`スナップ ${S.snap} mm`);
    if (S.sel.length) renderSheet();
  };
  document.querySelectorAll('[data-view]').forEach((b) => { b.onclick = () => vp.view(b.dataset.view, S.sel); });
  $('sheet-handle').onclick = () => { S.collapsed = !S.collapsed; $('sheet').classList.toggle('collapsed', S.collapsed); };

  document.addEventListener('keydown', (e) => {
    if (e.target.matches('input, textarea') || $('dlg').open) return;
    const mod = e.metaKey || e.ctrlKey;
    if (mod && e.key.toLowerCase() === 'z') { e.preventDefault(); e.shiftKey ? redo() : undo(); }
    else if (mod && e.key.toLowerCase() === 'y') { e.preventDefault(); redo(); }
    else if (mod && e.key.toLowerCase() === 'd') { e.preventDefault(); cmd.duplicate(); }
    else if (mod && e.key.toLowerCase() === 'g') { e.preventDefault(); e.shiftKey ? cmd.ungroup() : cmd.group(); }
    else if (mod && e.key.toLowerCase() === 'a') { e.preventDefault(); cmd.selectAll(); }
    else if (e.key === 'Delete' || e.key === 'Backspace') cmd.remove();
    else if (e.key === 'Escape') { S.sel = []; commit(); }
    else if (e.key === 'Shift') setMulti(true);
  });
  document.addEventListener('keyup', (e) => { if (e.key === 'Shift') setMulti(false); });
  document.addEventListener('visibilitychange', () => { if (document.hidden) saveNow(); else license.refresh(); });
  window.addEventListener('pagehide', saveNow);
  // iOS Safari still pinch-zooms the page in some cases despite the viewport meta.
  document.addEventListener('gesturestart', (e) => e.preventDefault());

  const last = store.getSetting('lastProject', null);
  if (!(last && await openProject(last))) {
    const all = await store.listProjects();
    await openProject(all[0]?.id || await newProject());
  }
  // A project sent with a share link (#share=…) opens as a new copy.
  await adv.importFromHash();
  window.addEventListener('hashchange', () => adv.importFromHash());

  if ('serviceWorker' in navigator && location.protocol !== 'file:') {
    navigator.serviceWorker.register('sw.js').catch((e) => console.warn('SW', e));
  }
}

init().catch((e) => {
  console.error(e);
  document.body.append(el('pre', { style: { position: 'fixed', inset: '40px 10px auto', background: '#300', padding: '10px', whiteSpace: 'pre-wrap', zIndex: 9 } }, '起動に失敗しました\n' + (e.stack || e)));
});
