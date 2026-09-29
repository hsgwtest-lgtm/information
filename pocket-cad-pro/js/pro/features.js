// Pro feature UI: parametric parts, image/text tools, analysis, versions.
// `app` is the small API main.js exposes (state, node helpers, viewport).
import { Matrix4, Vector3 } from '../../vendor/vendor.js';
import { el, icon, toast, openDialog, closeDialog, numField, segmented, fmt, confirmDialog, promptDialog } from '../ui.js';
import { nodeGeometry, nodeMatrix, geometryVolume, registerMeshData, defaultParams } from '../geometry.js';
import { ISO } from './threads.js';
import { gearInfo } from './gear.js';
import { textToShapes, imageToShapes, svgToShapes, loadImage, countPoints, FONTS } from './trace.js';
import { lithophaneMesh } from './lithophane.js';
import { overhangs, bestOrientation, estimatePrint, formatDuration, PRINT_DEFAULTS } from './analysis.js';
import * as store from '../storage.js';

let app;
export function initFeatures(api) { app = api; }

const round = (v) => Math.round(v * 1000) / 1000;
const uid = () => Math.random().toString(36).slice(2, 10) + Date.now().toString(36).slice(-4);

// Opens the file picker synchronously (iOS only allows it inside the tap handler).
export function pickFile(accept) {
  const inp = document.createElement('input');
  inp.type = 'file';
  inp.accept = accept;
  inp.style.display = 'none';
  document.body.append(inp);
  const p = new Promise((resolve) => {
    inp.onchange = () => { resolve(inp.files[0] || null); inp.remove(); };
    inp.addEventListener('cancel', () => { resolve(null); inp.remove(); });
  });
  inp.click();
  return p;
}

// ---------------------------------------------------------------- parametric parts
export function addBolt(variant) {
  if (variant === 'nut') return app.addNode('nut', { name: `ナット M3` });
  if (variant === 'tap') {
    // A thread-shaped hole: group it with a solid to cut an internal thread.
    const p = { ...defaultParams('bolt'), head: 'none', chamfer: 'in', clr: 0.15, L: 10 };
    const n = app.addNode('bolt', { name: 'ねじ穴 M3', params: p, hole: true });
    toast('ねじ穴を追加しました。部品と重ねてグループ化すると雌ねじになります', 3500);
    return n;
  }
  return app.addNode('bolt', { name: 'ボルト M3' });
}

export function propsExtras(n) {
  const out = [];
  if (n.kind === 'gear') {
    const g = gearInfo(n.params.m, n.params.z);
    out.push(el('p', { class: 'hint' }, `ピッチ円径 ${fmt(round(g.pitchDia))} mm ・ 外径 ${fmt(round(g.outerDia))} mm。` +
      `かみ合う歯車はモジュールを揃え、中心距離 = モジュール ×（歯数1 + 歯数2）÷ 2 にします。`));
  }
  if (n.kind === 'bolt' || n.kind === 'nut') {
    const iso = ISO[n.params.size];
    out.push(el('p', { class: 'hint' }, `${n.params.size}: 外径 ${iso.d} mm ・ ピッチ ${iso.p} mm ・ 二面幅 ${iso.s} mm。` +
      '印刷したボルトとナットを組み合わせる場合、ナットやねじ穴の公差を 0.1〜0.25 mm にすると回しやすくなります。'));
  }
  if (n.kind === 'outline' && n.params.src?.type === 'jtext') {
    out.push(el('button', { type: 'button', class: 'btn', style: { width: '100%' }, onclick: () => jpTextDialog(n) }, icon('edit'), '文字を編集'));
  }
  return out;
}

// ---------------------------------------------------------------- enclosure
function roundedRect(w, d, r) {
  r = Math.max(0, Math.min(r, w / 2 - 0.01, d / 2 - 0.01));
  const x = w / 2, y = d / 2, k = r * 0.5523;
  const R = (v) => round(v);
  if (r < 0.05) return { pts: [[-x, -y], [x, -y], [x, y], [-x, y]].map((p) => p.map(R)), curves: null };
  const pts = [[-x + r, -y], [x - r, -y], [x, -y + r], [x, y - r], [x - r, y], [-x + r, y], [-x, y - r], [-x, -y + r]];
  const curves = [null, [[x - r + k, -y], [x, -y + r - k]], null, [[x, y - r + k], [x - r + k, y]],
    null, [[-x + r - k, y], [-x, y - r + k]], null, [[-x, -y + r - k], [-x + r - k, -y]]];
  return { pts: pts.map((p) => p.map(R)), curves: curves.map((c) => c && c.map((p) => p.map(R))) };
}

const extrudeNode = (name, w, d, r, h, z, extra = {}) => ({
  id: uid(), kind: 'extrude', name, params: { h, ...roundedRect(w, d, r) },
  pos: [0, 0, round(z)], rot: [0, 0, 0], scale: [1, 1, 1], color: extra.color || '#4f9dff', hole: !!extra.hole,
});

export async function enclosureDialog() {
  const st = store.getSetting('enclosure', { w: 60, d: 40, h: 25, t: 2, r: 3, lip: 4, clr: 0.2 });
  const f = (key, label, min, step) => numField({ label, value: st[key], min, step, onChange: (v) => { st[key] = v; } });
  const body = [
    el('div', { class: 'field' }, el('span', {}, '内寸（入れたい物のサイズ）'), el('div', { class: 'row' }, f('w', '幅 mm', 5, 1), f('d', '奥行 mm', 5, 1), f('h', '高さ mm', 3, 1))),
    el('div', { class: 'field' }, el('span', {}, '構造'), el('div', { class: 'row' }, f('t', '壁厚 mm', 0.8, 0.2), f('r', '角R mm', 0, 0.5), f('lip', 'フタの差込 mm', 1, 0.5))),
    el('div', { class: 'field' }, el('span', {}, 'はめあい'), f('clr', 'すき間 mm', 0, 0.05)),
    el('p', { class: 'hint' }, '本体とフタ（差し込み式）を並べて作ります。どちらもグループなので、後から穴やロゴを追加できます。'),
  ];
  const v = await openDialog({ title: 'ケース自動設計', body, buttons: [{ label: 'キャンセル', value: 'cancel' }, { label: '作成', value: 'ok', cls: 'accent' }] });
  if (v !== 'ok') return;
  store.setSetting('enclosure', st);
  const { w, d, h, t, r, lip, clr } = st;
  const W = w + 2 * t, D = d + 2 * t, H = h + t;
  const color = '#57c26a';
  const body1 = {
    id: uid(), kind: 'group', name: 'ケース本体', op: 'union', params: {}, pos: [0, 0, 0], rot: [0, 0, 0], scale: [1, 1, 1], color, hole: false,
    children: [
      extrudeNode('外形', W, D, r, H, H / 2, { color }),
      extrudeNode('内側', w, d, Math.max(0, r - t), h + 1, t + (h + 1) / 2, { hole: true }),
    ],
  };
  // Lid: plate + a lip that slides inside the body with the given clearance.
  const lipOuterW = w - 2 * clr, lipOuterD = d - 2 * clr, lipT = Math.min(1.6, Math.max(0.8, t * 0.8));
  const lid = {
    id: uid(), kind: 'group', name: 'フタ', op: 'union', params: {}, pos: [0, 0, 0], rot: [0, 0, 0], scale: [1, 1, 1], color: '#f2f2f2', hole: false,
    children: [
      extrudeNode('天板', W, D, r, t, t / 2, { color: '#f2f2f2' }),
      extrudeNode('差込', lipOuterW, lipOuterD, Math.max(0, r - t - clr), lip, t + lip / 2, { color: '#f2f2f2' }),
      extrudeNode('差込の内側', lipOuterW - 2 * lipT, lipOuterD - 2 * lipT, Math.max(0, r - t - clr - lipT), lip + 1, t + lip / 2 + 0.5, { hole: true }),
    ],
  };
  app.checkpoint();
  // Treat body + lid as one footprint when looking for free space.
  const pair = { ...extrudeNode('', W * 2 + 10, D, 0, H, H / 2), id: 'tmp' };
  app.freeSpot(pair);
  body1.pos = [round(pair.pos[0] - (W + 10) / 2), pair.pos[1], 0];
  lid.pos = [round(pair.pos[0] + (W + 10) / 2), pair.pos[1], 0];
  app.S.doc.nodes.push(body1, lid);
  app.dropToFloor(body1); app.dropToFloor(lid);
  app.S.sel = [body1.id, lid.id];
  app.commit();
  app.vp.view('iso', app.S.sel);
  toast('ケース本体とフタを作成しました');
}

// ---------------------------------------------------------------- text / image outlines
function previewCanvas(shapes) {
  const cv = el('canvas', { class: 'trace-preview' });
  requestAnimationFrame(() => drawShapes(cv, shapes));
  return cv;
}
function drawShapes(cv, shapes) {
  const W = cv.clientWidth || 300, H = cv.clientHeight || 140, dpr = Math.min(3, devicePixelRatio || 1);
  cv.width = W * dpr; cv.height = H * dpr;
  const ctx = cv.getContext('2d');
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.fillStyle = '#111418'; ctx.fillRect(0, 0, W, H);
  if (!shapes || !shapes.length) return;
  let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
  for (const s of shapes) for (const [x, y] of s.o) { x0 = Math.min(x0, x); y0 = Math.min(y0, y); x1 = Math.max(x1, x); y1 = Math.max(y1, y); }
  const k = Math.min((W - 20) / Math.max(x1 - x0, 1e-6), (H - 20) / Math.max(y1 - y0, 1e-6));
  const tx = (x) => W / 2 + (x - (x0 + x1) / 2) * k, ty = (y) => H / 2 - (y - (y0 + y1) / 2) * k;
  ctx.beginPath();
  for (const s of shapes) for (const l of [s.o, ...s.h]) { l.forEach(([x, y], i) => (i ? ctx.lineTo(tx(x), ty(y)) : ctx.moveTo(tx(x), ty(y)))); ctx.closePath(); }
  ctx.fillStyle = '#ffb020'; ctx.fill('evenodd');
}

function outlineStats(r) {
  return r ? `${fmt(round(r.width))} × ${fmt(round(r.height))} mm ・ ${r.shapes.length} 領域 ・ ${countPoints(r.shapes)} 点` : '';
}

export async function jpTextDialog(editNode) {
  const src = editNode?.params.src || store.getSetting('jtext', { text: 'なまえ', font: 'gothic', bold: true, size: 10 });
  const st = { ...src, h: editNode?.params.h ?? 3 };
  const ta = el('textarea', { class: 'txt', rows: 2, style: { height: 'auto', padding: '10px 12px' } });
  ta.value = st.text;
  const info = el('div', { class: 'hint' });
  const cvWrap = el('div');
  let result = null;
  const update = () => {
    st.text = ta.value;
    result = st.text.trim() ? textToShapes(st) : null;
    cvWrap.replaceChildren(previewCanvas(result?.shapes));
    info.textContent = result ? outlineStats(result) : '文字を入力してください';
  };
  let timer;
  ta.addEventListener('input', () => { clearTimeout(timer); timer = setTimeout(update, 250); });
  const body = [
    el('label', { class: 'field' }, el('span', {}, '文字（改行で複数行）'), ta),
    el('div', { class: 'field' }, el('span', {}, '書体'), segmented(Object.entries(FONTS).map(([k, [label]]) => [k, label]), st.font, (v) => { st.font = v; update(); })),
    el('label', { class: 'check' }, el('input', { type: 'checkbox', checked: st.bold, onchange: (e) => { st.bold = e.target.checked; update(); } }), '太字'),
    el('div', { class: 'row two' },
      numField({ label: '文字の高さ mm', value: st.size, min: 2, step: 1, onChange: (v) => { st.size = v; update(); } }),
      numField({ label: '厚み mm', value: st.h, min: 0.2, step: 0.5, onChange: (v) => { st.h = v; } })),
    cvWrap, info,
    el('p', { class: 'hint' }, '端末に入っている日本語フォントで立体化します（iPhone ではヒラギノ）。'),
  ];
  const v = await openDialog({ title: editNode ? '文字を編集' : '日本語テキスト', body, buttons: [{ label: 'キャンセル', value: 'cancel' }, { label: editNode ? '反映' : '作成', value: 'ok', cls: 'accent' }], onOpen: update });
  if (v !== 'ok' || !result?.shapes.length) return;
  const { h, ...srcOut } = st;
  store.setSetting('jtext', srcOut);
  const params = { h, shapes: result.shapes, src: { type: 'jtext', ...srcOut } };
  if (editNode) {
    app.checkpoint();
    const onFloor = Math.abs(app.vp.nodeBox(editNode).min.z) < 0.01;
    editNode.params = params;
    editNode.scale = [Math.sign(editNode.scale[0]) || 1, Math.sign(editNode.scale[1]) || 1, 1];
    if (onFloor) app.dropToFloor(editNode);
    app.commit();
  } else {
    app.addNode('outline', { name: st.text.split('\n')[0].slice(0, 12) || '文字', params });
  }
}

export async function imageDialog() {
  const st = store.getSetting('imgtrace', { threshold: 0.5, invert: false, width: 50, h: 2 });
  let img = null, svgText = null, result = null, fileName = '';
  const info = el('div', { class: 'hint' }, 'PNG / JPG（白地に黒いロゴや手書き）または SVG を選んでください。');
  const cvWrap = el('div');
  const opts = el('div');
  const update = () => {
    if (svgText) result = svgToShapes(svgText, st);
    else if (img) result = imageToShapes(img, st);
    else result = null;
    cvWrap.replaceChildren(previewCanvas(result?.shapes));
    info.textContent = result ? outlineStats(result) : (svgText ? '塗りつぶしのある図形が見つかりませんでした（線だけの SVG は未対応）' : info.textContent);
  };
  const renderOpts = () => {
    opts.replaceChildren(
      el('div', { class: 'row two' },
        numField({ label: '幅 mm', value: st.width, min: 1, step: 5, onChange: (v) => { st.width = v; update(); } }),
        numField({ label: '厚み mm', value: st.h, min: 0.2, step: 0.5, onChange: (v) => { st.h = v; } })),
      svgText ? null : el('div', { class: 'field' }, el('span', {}, `しきい値（${Math.round(st.threshold * 100)}%）`),
        el('input', { type: 'range', min: 5, max: 95, value: Math.round(st.threshold * 100), class: 'range',
          onchange: (e) => { st.threshold = e.target.value / 100; renderOpts(); update(); } })),
      svgText ? null : el('label', { class: 'check' }, el('input', { type: 'checkbox', checked: st.invert, onchange: (e) => { st.invert = e.target.checked; update(); } }), '白黒を反転（黒地に白い絵）'),
    );
  };
  const choose = el('button', {
    type: 'button', class: 'btn accent', style: { width: '100%' },
    onclick: () => pickFile('image/*,.svg').then(async (file) => {
      if (!file) return;
      fileName = file.name.replace(/\.[^.]+$/, '');
      try {
        const text = /svg/i.test(file.type) || /\.svg$/i.test(file.name) ? await file.text() : null;
        if (text) { svgText = text; img = null; } else { img = await loadImage(file); svgText = null; }
        renderOpts(); update();
      } catch (e) { info.textContent = '読み込めませんでした: ' + e.message; }
    }),
  }, icon('import'), '画像 / SVG を選ぶ');
  const v = await openDialog({ title: '画像・SVG から立体化', body: [choose, cvWrap, info, opts], buttons: [{ label: 'キャンセル', value: 'cancel' }, { label: '作成', value: 'ok', cls: 'accent' }] });
  if (v !== 'ok' || !result?.shapes.length) return;
  store.setSetting('imgtrace', st);
  app.addNode('outline', { name: fileName || '画像', params: { h: st.h, shapes: result.shapes, src: { type: svgText ? 'svg' : 'image' } } });
}

export async function lithophaneDialog() {
  const st = store.getSetting('litho', { width: 100, minT: 0.8, maxT: 3.2, border: 3, invert: false });
  let img = null, fileName = '';
  const thumb = el('div', { class: 'litho-thumb' }, '写真を選んでください');
  const choose = el('button', {
    type: 'button', class: 'btn accent', style: { width: '100%' },
    onclick: () => pickFile('image/*').then(async (file) => {
      if (!file) return;
      fileName = file.name.replace(/\.[^.]+$/, '');
      img = await loadImage(file);
      const i = el('img', { src: img.src, alt: '' });
      thumb.replaceChildren(i);
    }),
  }, icon('photo'), '写真を選ぶ');
  const f = (key, label, min, step) => numField({ label, value: st[key], min, step, onChange: (v) => { st[key] = v; } });
  const body = [choose, thumb,
    el('div', { class: 'row two' }, f('width', '幅 mm', 20, 5), f('border', '枠 mm', 0, 0.5)),
    el('div', { class: 'row two' }, f('minT', '最小厚 mm', 0.4, 0.1), f('maxT', '最大厚 mm', 1, 0.1)),
    el('label', { class: 'check' }, el('input', { type: 'checkbox', checked: st.invert, onchange: (e) => { st.invert = e.target.checked; } }), '反転（明るい所を厚く）'),
    el('p', { class: 'hint' }, '白い PLA で、立てて（X 90° 回転）積層 0.12 mm 程度で印刷すると綺麗に仕上がります。'),
  ];
  const v = await openDialog({ title: 'リトフェイン', body, buttons: [{ label: 'キャンセル', value: 'cancel' }, { label: '作成', value: 'ok', cls: 'accent' }] });
  if (v !== 'ok' || !img) return;
  store.setSetting('litho', st);
  const t = performance.now();
  const m = lithophaneMesh(img, st);
  const dataId = uid();
  registerMeshData(dataId, m.positions);
  await store.putMesh(dataId, m.positions);
  app.addNode('mesh', { name: `リトフェイン ${fileName}`.trim(), dataId, params: {}, color: '#f2f2f2' });
  toast(`${fmt(round(m.width))} × ${fmt(round(m.depth))} mm ・ ${m.triangles.toLocaleString()} 三角形（${Math.round(performance.now() - t)} ms）`, 3000);
}

// ---------------------------------------------------------------- analysis tools
const T = { overhang: false, measure: null, clip: null };

function solidParts(nodes = app.S.doc.nodes) {
  return nodes.filter((n) => !n.hidden && !n.hole).map((n) => ({ geometry: nodeGeometry(n), matrix: nodeMatrix(n, new Matrix4()), node: n }));
}

export function onCommit() {
  if (T.overhang) refreshOverhang(false);
}

function refreshOverhang(announce) {
  const r = overhangs(solidParts());
  app.vp.setOverlay(r.positions);
  if (announce) toast(r.area > 1 ? `サポートが必要な面（赤）: ${fmt(Math.round(r.area))} mm²` : 'サポートが必要な面はありません', 2500);
}

export function toggleOverhang(on = !T.overhang) {
  T.overhang = on;
  if (on) refreshOverhang(true); else app.vp.setOverlay(null);
  app.updateToolBar();
}

export function autoOrient() {
  const ns = app.selNodes();
  if (ns.length !== 1) { toast('部品を 1 つ選択してください'); return; }
  const n = ns[0];
  const R = app.rotMatrix(n.rot);
  const r = bestOrientation(nodeGeometry(n), R);
  if (r.after >= r.before - 0.5) { toast(`今の向きが最適です（オーバーハング ${fmt(Math.round(r.before))} mm²）`, 2500); return; }
  app.checkpoint();
  n.rot = app.eulerDeg(r.matrix.clone().multiply(R));
  app.dropToFloor(n);
  app.commit();
  toast(`オーバーハング ${fmt(Math.round(r.before))} → ${fmt(Math.round(r.after))} mm² に改善`, 3000);
}

export function arrange() {
  const ns = app.S.doc.nodes.filter((n) => !n.hidden);
  if (ns.length < 2) { toast('並べる部品が 2 つ以上必要です'); return; }
  app.checkpoint();
  const gap = 5, maxW = app.S.plate.x;
  const items = ns.map((n) => ({ n, b: app.vp.nodeBox(n) })).sort((a, b) => (b.b.max.y - b.b.min.y) - (a.b.max.y - a.b.min.y));
  let x = 0, y = 0, rowH = 0, width = 0;
  for (const it of items) {
    const w = it.b.max.x - it.b.min.x, d = it.b.max.y - it.b.min.y;
    if (x > 0 && x + w > maxW) { x = 0; y += rowH + gap; rowH = 0; }
    it.x = x; it.y = y;
    x += w + gap; rowH = Math.max(rowH, d); width = Math.max(width, x - gap);
  }
  const height = y + rowH;
  for (const it of items) {
    it.n.pos[0] = round(it.n.pos[0] + (it.x - width / 2) - it.b.min.x);
    it.n.pos[1] = round(it.n.pos[1] + (height / 2 - it.y) - it.b.max.y);
    it.n.pos[2] = round(it.n.pos[2] - it.b.min.z);
  }
  app.commit();
  app.vp.view('top');
  toast(height > app.S.plate.y ? '造形エリアに収まりきりません（2 回に分けて印刷してください）' : `${items.length} 個を並べました`, 2500);
}

// ---- measuring ----
export function startMeasure() {
  T.measure = [];
  app.vp.setMeasure([]);
  app.updateToolBar();
  toast('測りたい 2 点をタップ（頂点の近くは自動で吸着）', 3000);
}
export function stopMeasure() {
  T.measure = null;
  app.vp.setMeasure([]);
  app.updateToolBar();
}
export const measuring = () => T.measure !== null;
// Returns true when the tap was consumed.
export function measureTap(hit, e) {
  if (T.measure === null) return false;
  if (!hit) return true;
  const p = app.vp.snapHit(hit, e);
  if (T.measure.length >= 2) T.measure = [];
  T.measure.push(p);
  app.vp.setMeasure(T.measure);
  app.updateToolBar();
  return true;
}
export function measureText() {
  if (!T.measure) return '';
  if (T.measure.length < 2) return T.measure.length ? '2 点目をタップ' : '1 点目をタップ';
  const [a, b] = T.measure;
  const d = b.clone().sub(a);
  return `距離 ${fmt(round(d.length()))} mm（X ${fmt(round(Math.abs(d.x)))} / Y ${fmt(round(Math.abs(d.y)))} / Z ${fmt(round(Math.abs(d.z)))}）`;
}

// ---- section ----
export function startClip() {
  const b = app.selectionBox(app.S.doc.nodes.filter((n) => !n.hidden));
  if (b.isEmpty()) { toast('部品がありません'); return; }
  T.clip = { axis: 2, t: 0.5, box: b };
  applyClip();
  app.updateToolBar();
}
export function stopClip() { T.clip = null; app.vp.setClip(null); app.updateToolBar(); }
export const clipState = () => T.clip;
export function setClip(axis, t) {
  if (!T.clip) return;
  if (axis != null) T.clip.axis = axis;
  if (t != null) T.clip.t = t;
  applyClip();
}
function applyClip() {
  const { axis, t, box } = T.clip;
  const v = box.min.getComponent(axis) + (box.max.getComponent(axis) - box.min.getComponent(axis)) * t;
  T.clip.value = v;
  app.vp.setClip(axis, v);
}

// ---- estimate ----
export function measureParts(parts) {
  let volume = 0, surface = 0;
  let zmin = Infinity, zmax = -Infinity;
  const v = new Vector3();
  for (const p of parts) {
    volume += Math.abs(geometryVolume(p.geometry));
    const a = p.geometry.getAttribute('position').array;
    for (let i = 0; i < a.length; i += 9) {
      const ax = a[i + 3] - a[i], ay = a[i + 4] - a[i + 1], az = a[i + 5] - a[i + 2];
      const bx = a[i + 6] - a[i], by = a[i + 7] - a[i + 1], bz = a[i + 8] - a[i + 2];
      surface += Math.hypot(ay * bz - az * by, az * bx - ax * bz, ax * by - ay * bx) / 2;
    }
    for (let i = 0; i < a.length; i += 3) { v.set(a[i], a[i + 1], a[i + 2]).applyMatrix4(p.matrix); zmin = Math.min(zmin, v.z); zmax = Math.max(zmax, v.z); }
  }
  return { volume, surface, height: Math.max(0, zmax - zmin) };
}

export function estimateSection(parts, density, onChange) {
  const st = { ...PRINT_DEFAULTS, ...store.getSetting('print', {}) };
  const out = el('div');
  const m = measureParts(parts);
  const render = () => {
    const r = estimatePrint({ ...m, density }, st);
    out.replaceChildren(el('dl', { class: 'stat' },
      el('dt', {}, '印刷時間（目安）'), el('dd', {}, formatDuration(r.seconds)),
      el('dt', {}, 'フィラメント'), el('dd', {}, `${r.grams.toFixed(1)} g ・ ${r.meters.toFixed(2)} m`),
      el('dt', {}, '材料費'), el('dd', {}, `約 ${Math.max(1, Math.round(r.yen)).toLocaleString()} 円`),
      el('dt', {}, 'レイヤー数'), el('dd', {}, `${r.layers}`)));
    onChange?.(r);
  };
  const f = (key, label, min, step) => numField({ label, value: st[key], min, step, onChange: (v) => { st[key] = v; store.setSetting('print', st); render(); } });
  render();
  return el('div', { class: 'est' },
    el('div', { class: 'row' }, f('layer', '積層 mm', 0.04, 0.04), f('infill', '充填 %', 0, 5), f('walls', '壁の数', 1, 1)),
    el('div', { class: 'row two', style: { marginTop: '6px' } }, f('speed', '速度 mm/s', 10, 10), f('price', '円 / kg', 0, 100)),
    out,
    el('p', { class: 'hint' }, 'サポート材を含まない概算です。実際の値はスライサーで確認してください。'));
}

export async function estimateDialog() {
  const parts = solidParts(app.S.sel.length ? app.selNodes() : undefined);
  if (!parts.length) { toast('見積もる部品がありません'); return; }
  await openDialog({ title: '印刷見積もり', body: estimateSection(parts, app.S.density), buttons: [{ label: '閉じる', value: 'ok' }] });
}

export async function toolsDialog() {
  const item = (ic, title, desc, fn) => el('button', { type: 'button', class: 'tool-row', onclick: () => { closeDialog(); fn(); } },
    icon(ic), el('div', {}, el('b', {}, title), el('span', {}, desc)));
  await openDialog({
    title: '解析・印刷準備',
    body: el('div', { class: 'list' },
      item('overhang', T.overhang ? 'オーバーハング表示を消す' : 'オーバーハングを表示', 'サポートが必要な面を赤く表示', () => toggleOverhang()),
      item('orient', '自動向き最適化', '選択中の部品を、サポートが最も少ない向きに回転', autoOrient),
      item('section', '断面表示', 'スライダーで切断位置を動かして内部を確認', startClip),
      item('measure', '距離を測る', '2 点間の距離と XYZ 各方向の差', startMeasure),
      item('arrange', '自動配置', '全部品を造形エリアに重ならないよう並べる', arrange),
      item('clock', '印刷見積もり', '印刷時間・フィラメント量・材料費', estimateDialog)),
  });
}

// ---------------------------------------------------------------- versions
export async function saveVersion(name, { quiet = false } = {}) {
  await app.saveNow();
  const p = app.S.project;
  let thumb = null;
  try { thumb = app.vp.snapshotPNG(160); } catch { /* ignore */ }
  await store.putVersion({ id: uid(), projectId: p.id, name, time: Date.now(), thumb, count: app.S.doc.nodes.length, doc: JSON.parse(JSON.stringify(app.S.doc)) });
  // Keep the history bounded.
  const all = await store.listVersions(p.id);
  for (const v of all.slice(50)) await store.deleteVersion(v.id);
  if (!quiet) toast(`「${name}」を保存しました`);
}

export async function versionsDialog() {
  const list = el('div', { class: 'list' });
  const refresh = async () => {
    const all = await store.listVersions(app.S.project.id);
    list.replaceChildren(...(all.length ? all.map((v) => {
      const date = new Date(v.time).toLocaleString('ja-JP', { month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' });
      const del = el('button', { type: 'button', class: 'icon-btn', 'aria-label': '削除', onclick: async (e) => { e.stopPropagation(); await store.deleteVersion(v.id); refresh(); } }, icon('trash'));
      return el('div', {
        class: 'proj', role: 'button',
        onclick: async () => {
          closeDialog();
          if (!(await confirmDialog('復元', `「${v.name}」（${date}）の状態に戻しますか？ 今の状態は「元に戻す」で取り戻せます。`, '復元'))) return;
          const full = await store.getVersion(v.id);
          app.checkpoint();
          app.S.doc.nodes = full.doc.nodes;
          app.S.sel = [];
          app.commit();
          toast('復元しました');
        },
      }, v.thumb ? el('img', { src: v.thumb, alt: '' }) : el('div', { class: 'ph' }),
      el('div', { style: { minWidth: 0 } }, el('div', { class: 'n' }, v.name), el('div', { class: 'd' }, `${date} ・ ${v.count} 部品`)), del);
    }) : [el('p', { class: 'hint' }, 'まだ保存されたバージョンはありません。STL / 3MF を出力すると自動で保存されます。')]));
  };
  await refresh();
  const saveBtn = el('button', {
    type: 'button', class: 'btn accent', style: { width: '100%', marginBottom: '12px' },
    onclick: async () => {
      closeDialog();
      const name = await promptDialog('バージョン名', `版 ${new Date().toLocaleString('ja-JP', { month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' })}`);
      if (name != null) { await saveVersion(name.trim() || '無題の版'); }
      versionsDialog();
    },
  }, icon('plus'), '今の状態を保存');
  await openDialog({ title: `バージョン履歴 ・ ${app.S.project.name}`, body: [saveBtn, list] });
}

// ---------------------------------------------------------------- import from the free app
export async function importFreeDialog() {
  const projects = await store.listFreeProjects();
  const body = projects.length
    ? el('div', { class: 'list' }, projects.map((p) => el('button', {
      type: 'button', class: 'btn', style: { justifyContent: 'space-between' },
      onclick: async () => {
        closeDialog();
        const full = await store.getFreeProject(p.id);
        const meshIds = [];
        const walk = (ns) => ns.forEach((n) => { if (n.kind === 'mesh') meshIds.push(n.dataId); if (n.children) walk(n.children); });
        walk(full.doc.nodes);
        for (const id of meshIds) {
          const d = await store.getFreeMesh(id);
          if (d) { registerMeshData(id, d); await store.putMesh(id, d); }
        }
        const id = uid();
        await store.putProject({ ...full, id, name: full.name, updated: Date.now() });
        await app.openProject(id);
        toast(`「${full.name}」を取り込みました`);
      },
    }, p.name, el('span', { class: 'hint', style: { margin: 0 } }, new Date(p.updated).toLocaleDateString('ja-JP')))))
    : el('p', { class: 'hint' }, 'この端末の無料版 Pocket CAD にプロジェクトが見つかりませんでした。無料版で「ファイルに書き出し（.json）」したファイルは、プロジェクト画面の「読込」から取り込めます。');
  await openDialog({ title: '無料版から取り込む', body });
}
