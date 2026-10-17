// 格子化（ボロノイ・ジャイロイド）and シェル（中空化）: dialogs around the voxel engine in
// sdf.js. Lattices replace the part with a mesh (the original is kept on the node so the
// settings can be changed later); a shell keeps the exact outside and subtracts an inner
// solid, so the part stays an editable group.
import { Matrix4 } from '../../vendor/vendor.js';
import { el, icon, toast, openDialog, numField, segmented, fmt } from '../ui.js';
import * as store from '../storage.js';
import { registerMeshData, geometryVolume, nodeGeometry, nodeMatrix } from '../geometry.js';
import { latticeJob, shellJob, voxelSize } from './sdf.js';
import { renderPreview } from './orient.js';
import { partSurface } from './edgetools.js';
import { G } from './templates.js';

let app;
export function initLattice(api) { app = api; }

const uid = () => Math.random().toString(36).slice(2, 10) + Date.now().toString(36).slice(-4);
const r3 = (v) => Math.round(v * 1000) / 1000;

// ---------------------------------------------------------------- running jobs

// Runs a job in a worker (falls back to the main thread). onProgress(p 0..1, label).
function runJob(msg, onProgress) {
  return new Promise((resolve, reject) => {
    let worker = null, heard = false;
    const local = () => {
      onProgress?.(0.02, '計算中（少し時間がかかります）');
      setTimeout(() => {
        try {
          const r = msg.job === 'shell' ? shellJob(msg.pos, msg.open, msg.opts) : latticeJob(msg.pos, msg.opts);
          resolve(r);
        } catch (e) { reject(e); }
      }, 30);
    };
    try {
      worker = new Worker(new URL('./sdf-worker.js', import.meta.url), { type: 'module' });
      worker.onmessage = (e) => {
        heard = true;
        const m = e.data;
        if (m.type === 'progress') onProgress?.(m.p, m.label);
        else if (m.type === 'done') { worker.terminate(); resolve(m); } else if (m.type === 'error') { worker.terminate(); reject(new Error(m.message)); }
      };
      worker.onerror = (e) => {
        e.preventDefault?.();
        worker.terminate();
        if (!heard) local(); else reject(new Error(e.message || 'worker error'));
      };
      worker.postMessage(msg);
    } catch {
      local();
    }
  });
}

// World-space triangles of a node (Float32) and its largest side.
function worldTriangles(n) {
  const g = nodeGeometry(n), m = nodeMatrix(n, new Matrix4()).elements;
  const a = g.getAttribute('position').array;
  const pos = new Float32Array(a.length);
  const lo = [Infinity, Infinity, Infinity], hi = [-Infinity, -Infinity, -Infinity];
  for (let i = 0; i < a.length; i += 3) {
    const x = a[i], y = a[i + 1], z = a[i + 2];
    const w = [m[0] * x + m[4] * y + m[8] * z + m[12], m[1] * x + m[5] * y + m[9] * z + m[13], m[2] * x + m[6] * y + m[10] * z + m[14]];
    for (let k = 0; k < 3; k++) { pos[i + k] = w[k]; lo[k] = Math.min(lo[k], w[k]); hi[k] = Math.max(hi[k], w[k]); }
  }
  return { pos, span: Math.max(hi[0] - lo[0], hi[1] - lo[1], hi[2] - lo[2]), lo, hi };
}

// Stores world-space triangles as a mesh node (data centred on the node's position).
async function meshNode(posW, name, extra = {}) {
  const lo = [Infinity, Infinity, Infinity], hi = [-Infinity, -Infinity, -Infinity];
  for (let i = 0; i < posW.length; i += 3) for (let k = 0; k < 3; k++) { lo[k] = Math.min(lo[k], posW[i + k]); hi[k] = Math.max(hi[k], posW[i + k]); }
  const c = lo.map((v, k) => (v + hi[k]) / 2);
  const data = new Float32Array(posW.length);
  for (let i = 0; i < posW.length; i += 3) for (let k = 0; k < 3; k++) data[i + k] = posW[i + k] - c[k];
  const dataId = uid();
  registerMeshData(dataId, data);
  await store.putMesh(dataId, data);
  return { id: uid(), kind: 'mesh', name, dataId, params: {}, pos: c.map(r3), rot: [0, 0, 0], scale: [1, 1, 1], color: '#9aa4b2', hole: false, ...extra };
}

const grams = (mm3) => (mm3 / 1000) * app.S.density;
const progressBar = () => {
  const bar = el('div', { class: 'job-bar' }, el('div'));
  const label = el('div', { class: 'hint' });
  return {
    el: el('div', { class: 'job' }, bar, label),
    set: (p, text) => { bar.firstChild.style.width = `${Math.round(p * 100)}%`; label.textContent = text || ''; },
  };
};

// ---------------------------------------------------------------- lattice

const TYPES = [['surface', 'ボロノイ（表面）'], ['voronoi', 'ボロノイ（立体）'], ['gyroid', 'ジャイロイド']];
const DEF = {
  surface: { cell: 10, width: 2.4, thick: 2 },
  voronoi: { cell: 10, width: 2.4, frame: 1 },
  gyroid: { cell: 14, width: 1.6, skin: 0 },
};

// Converts `n` (or, when re-editing a lattice, its stored source) into a lattice.
export async function latticeDialog(n) {
  if (!n || n.hole) { toast('格子にする部品を 1 つ選択してください'); return; }
  const editing = n.lattice && n.src;
  let src = n;
  if (editing) {
    // Follow the lattice if it was moved since it was made.
    src = JSON.parse(JSON.stringify(n.src));
    const p0 = n.lattice.pos0 || n.pos;
    src.pos = src.pos.map((v, k) => r3(v + n.pos[k] - p0[k]));
  }
  const saved = store.getSetting('lattice', {});
  const st = { type: 'surface', quality: 1, seed: 1, ...saved, ...(editing ? n.lattice : {}) };
  const per = { ...DEF, ...(saved.per || {}) };
  if (editing) { const { type, seed, quality, pos0, ...rest } = n.lattice; per[st.type] = { ...per[st.type], ...rest }; }
  const { pos, span } = worldTriangles(src);
  const solidVol = Math.abs(geometryVolume(nodeGeometry(src)));
  let result = null, resultKey = null, busy = false;
  const keyOf = () => JSON.stringify([st.type, st.quality, st.seed, per[st.type]]);
  const fields = el('div');
  const renderFields = () => {
    const p = per[st.type];
    const f = (k, label, min, step) => numField({ label, value: p[k], min, step, onChange: (v) => { p[k] = v; stale(); } });
    const rows = [f('cell', 'セルの大きさ mm', 3, 1), f('width', st.type === 'gyroid' ? '壁の厚み mm' : '線の太さ mm', 0.8, 0.2)];
    if (st.type === 'surface') rows.push(f('thick', '網の厚み mm', 0.8, 0.2));
    if (st.type === 'gyroid') rows.push(f('skin', '外皮 mm（0 = なし）', 0, 0.4));
    fields.replaceChildren(
      el('div', { class: 'row' }, rows),
      st.type === 'voronoi' ? el('label', { class: 'check' }, el('input', { type: 'checkbox', checked: !!p.frame, onchange: (e) => { p.frame = e.target.checked ? 1 : 0; stale(); } }), '表面にも網を付ける（骨の先がつながります）') : null,
      el('div', { class: 'row two', style: { marginTop: '6px' } },
        numField({ label: '模様の番号', value: st.seed, min: 1, step: 1, integer: true, onChange: (v) => { st.seed = v; stale(); } }),
        segmented([[0, '速い'], [1, '標準'], [2, '細かい']], st.quality, (v) => { st.quality = v; stale(); })),
    );
  };
  const hint = el('p', { class: 'hint' });
  const HINTS = {
    surface: '表面をボロノイの網目にします。ランプシェードや飾りに。中は空洞になります。',
    voronoi: '中まで骨組み状にします。軽くて丈夫なオブジェに。',
    gyroid: '3D プリントの充填でも使われる曲面の格子。外皮を付けると中だけが格子になります。',
  };
  const preview = el('div', { class: 'lat-preview' }, el('span', { class: 'hint' }, '「プレビュー」で形を確認できます'));
  const stats = el('div');
  const job = progressBar();
  job.el.hidden = true;
  const stale = () => { if (result) { preview.style.opacity = '0.4'; stats.replaceChildren(el('p', { class: 'hint' }, '設定が変わりました。もう一度プレビューしてください。')); } };
  const run = async () => {
    if (busy) return null;
    busy = true;
    const p = per[st.type];
    const opts = { type: st.type, seed: st.seed, ...p, h: voxelSize(span, st.quality, p.width) };
    job.el.hidden = false; job.set(0, '準備中');
    const t0 = performance.now();
    try {
      const r = await runJob({ job: 'lattice', pos, opts }, (q, label) => job.set(q, label));
      result = { ...r, ms: performance.now() - t0, opts };
      resultKey = keyOf();
      const tris = r.positions.length / 9;
      preview.style.opacity = '';
      preview.replaceChildren(renderPreview(r.positions, new Matrix4(), 2, n.color || '#4f9dff', 300, 200));
      stats.replaceChildren(el('dl', { class: 'stat' },
        el('dt', {}, '重さ'), el('dd', {}, `${grams(solidVol).toFixed(1)} g → ${grams(r.volume).toFixed(1)} g（${Math.round((1 - r.volume / solidVol) * 100)}% 軽量）`),
        el('dt', {}, '三角形'), el('dd', {}, `${tris.toLocaleString()}${r.dropped ? ` ・ 浮いた小片 ${r.dropped} 個を除去` : ''}`),
        el('dt', {}, '計算時間'), el('dd', {}, `${(result.ms / 1000).toFixed(1)} 秒`)),
        tris > 350000 ? el('div', { class: 'warnbox' }, '三角形がとても多いため、操作が重くなります。「速い」や大きめのセルがおすすめです。') : null,
        r.pieces > 1 ? el('p', { class: 'hint' }, `${r.pieces} 個に分かれています。`) : null);
      return result;
    } catch (e) {
      console.error(e);
      stats.replaceChildren(el('div', { class: 'warnbox' }, '計算できませんでした: ' + e.message));
      return null;
    } finally {
      busy = false;
      job.el.hidden = true;
    }
  };
  const typeSeg = segmented(TYPES, st.type, (v) => { st.type = v; hint.textContent = HINTS[v]; renderFields(); stale(); });
  hint.textContent = HINTS[st.type];
  renderFields();
  const body = [
    el('div', { class: 'field', style: { marginTop: 0 } }, el('span', {}, '種類'), typeSeg),
    hint, fields,
    el('button', { type: 'button', class: 'btn', style: { width: '100%', marginTop: '8px' }, onclick: run }, icon('eye'), 'プレビュー'),
    job.el, preview, stats,
    el('p', { class: 'hint' }, '部品をメッシュに置き換えます。あとから選択して「格子の設定を変える」で作り直せます。'),
  ];
  const d = document.getElementById('dlg');
  const onClick = async (e) => {
    const b = e.target.closest('button[type=submit]');
    if (!b || b.value !== 'ok' || !busy) return;
    e.preventDefault();
    toast('計算中です。少しお待ちください');
  };
  d.addEventListener('click', onClick);
  const v = await openDialog({ title: editing ? '格子の設定を変える' : '格子化', body, buttons: [{ label: 'キャンセル', value: 'cancel' }, { label: '適用', value: 'ok', cls: 'accent' }] });
  d.removeEventListener('click', onClick);
  store.setSetting('lattice', { type: st.type, quality: st.quality, seed: st.seed, per });
  if (v !== 'ok') return;
  if (!result || resultKey !== keyOf()) {
    toast('格子を計算中…', 60000);
    const r = await run();
    if (!r) { toast('計算できませんでした'); return; }
  }
  const m = await meshNode(result.positions, `${src.name}（${TYPES.find(([k]) => k === st.type)[1]}）`, {
    color: n.color, lattice: { type: st.type, seed: st.seed, quality: st.quality, ...per[st.type] }, src: JSON.parse(JSON.stringify(src)),
  });
  m.lattice.pos0 = [...m.pos];
  const idx = app.S.doc.nodes.indexOf(n);
  if (idx < 0) return;
  app.checkpoint();
  app.S.doc.nodes.splice(idx, 1, m);
  app.S.sel = [m.id];
  app.commit();
  toast(`格子にしました（${grams(solidVol).toFixed(1)} g → ${grams(result.volume).toFixed(1)} g）`, 3000);
}

// ---------------------------------------------------------------- shell

// Hollows `n` leaving walls of the chosen thickness; regionIds (planar faces of the
// analysis `an`) are left open.
export async function shellDialog(n, an, regionIds = []) {
  if (!n || n.hole) { toast('中空にする部品を 1 つ選択してください'); return; }
  const st = { thick: 2, quality: 1, ...store.getSetting('shell', {}) };
  const { pos, span } = worldTriangles(n);
  an = an || partSurface(n);
  const solidVol = Math.abs(geometryVolume(nodeGeometry(n)));
  const job = progressBar();
  job.el.hidden = true;
  const body = [
    numField({ label: '壁の厚み mm', value: st.thick, min: 0.4, step: 0.2, onChange: (v) => { st.thick = v; } }),
    el('div', { class: 'field' }, el('span', {}, '細かさ'), segmented([[0, '速い'], [1, '標準'], [2, '細かい']], st.quality, (v) => { st.quality = v; })),
    regionIds.length
      ? el('p', { class: 'hint' }, `選んだ面 ${regionIds.length} 枚を開けて、中をくり抜きます（容器やカバーに）。外側の形はそのまま残ります。`)
      : el('div', { class: 'warnbox' }, '開ける面が選ばれていないため、中に閉じた空洞ができます（材料の節約に）。容器にするには、面をタップして選んでから「シェル」を押してください。'),
    job.el,
  ];
  const v = await openDialog({ title: 'シェル（中空化）', body, buttons: [{ label: 'キャンセル', value: 'cancel' }, { label: '中空にする', value: 'ok', cls: 'accent' }] });
  if (v !== 'ok') return;
  store.setSetting('shell', st);
  const open = new Uint8Array(pos.length / 9);
  for (const rid of regionIds) for (const t of an.regions[rid].tris) open[t] = 1;
  toast('中空にしています…', 60000);
  let r;
  try {
    r = await runJob({ job: 'shell', pos, open, opts: { thick: st.thick, h: voxelSize(span, st.quality, st.thick * 2) } }, (p, label) => toast(`${label}… ${Math.round(p * 100)}%`, 60000));
  } catch (e) {
    console.error(e);
    toast('中空にできませんでした: ' + e.message, 4000);
    return;
  }
  if (!r.positions.length || r.volume < 1) { toast('壁が厚すぎて、くり抜く部分がありませんでした', 3500); return; }
  const c = [0, 1, 2].map((k) => r3((an.bbox.min[k] + an.bbox.max[k]) / 2));
  const inner = await meshNode(r.positions, '内側', { hole: true });
  inner.pos = inner.pos.map((x, k) => r3(x - c[k]));
  const part = JSON.parse(JSON.stringify(n));
  part.pos = part.pos.map((x, k) => r3(x - c[k]));
  const g = G(n.name, [part, inner], n.color);
  g.pos = c;
  g.shell = { thick: st.thick, open: regionIds.length };
  const idx = app.S.doc.nodes.indexOf(n);
  if (idx < 0) return;
  app.checkpoint();
  app.S.doc.nodes.splice(idx, 1, g);
  app.S.sel = [g.id];
  app.commit();
  const after = Math.abs(geometryVolume(nodeGeometry(g)));
  toast(`中空にしました（${grams(solidVol).toFixed(1)} g → ${grams(after).toFixed(1)} g）`, 3500);
}
