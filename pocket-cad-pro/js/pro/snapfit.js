// スナップフィット設計: a cantilever snap hook sized so the printed material does not
// crack — strain, assembly force and release force from the classic beam formulas
// (rectangular arm of constant thickness, e.g. Bayer's snap-fit design guide) — plus the
// hook and a mating window plate. The hook is laid flat, so the arm bends along its
// printed layers (an arm printed upright snaps at a layer line).
import { el, icon, toast, openDialog, numField, segmented, fmt } from '../ui.js';
import * as store from '../storage.js';
import { N, G } from './templates.js';
import { eulerFromAxes } from './edgetools.js';

let app;
export function initSnapFit(api) { app = api; }

const r3 = (v) => Math.round(v * 1000) / 1000;
const K = 0.5523; // quarter circle as a cubic Bézier

// Printed-part values (typical, conservative): density (to match 設定), Young's modulus
// MPa, allowable strain for a one-time and for a repeated snap, friction coefficient.
export const SNAP_MATS = [
  { d: 1.24, name: 'PLA', E: 2300, once: 0.02, often: 0.012, mu: 0.4 },
  { d: 1.27, name: 'PETG', E: 1700, once: 0.03, often: 0.02, mu: 0.4 },
  { d: 1.04, name: 'ABS', E: 1600, once: 0.025, often: 0.015, mu: 0.4 },
  { d: 1.07, name: 'ASA', E: 1700, once: 0.025, often: 0.015, mu: 0.4 },
  { d: 1.21, name: 'TPU', E: 26, once: 0.2, often: 0.1, mu: 0.6 },
  { d: 1.15, name: 'レジン', E: 2000, once: 0.015, often: 0.01, mu: 0.4 },
];
export const matFor = (density) => SNAP_MATS.find((m) => Math.abs(m.d - density) < 1e-6) || SNAP_MATS[0];

// p: { L, t, b, y, alpha, beta } (mm, degrees), m: material, use: 'once' | 'often'.
export function snapCalc(p, m, use = 'often') {
  const eps = (1.5 * p.t * p.y) / (p.L * p.L);
  const allow = m[use];
  const P = ((p.b * p.t * p.t) / 6) * (m.E * eps) / p.L; // N: force to deflect the hook by y
  const tanA = Math.tan((p.alpha * Math.PI) / 180), tanB = Math.tan((Math.min(p.beta, 89.9) * Math.PI) / 180);
  const W = (P * (m.mu + tanA)) / Math.max(1e-6, 1 - m.mu * tanA);
  const locked = p.beta >= 89.9 || m.mu * tanB >= 1;
  const release = locked ? Infinity : (P * (m.mu + tanB)) / (1 - m.mu * tanB);
  const Lmin = Math.ceil(Math.sqrt((1.5 * p.t * p.y) / allow) * 2) / 2;
  return { eps, allow, ok: eps <= allow, P, W, release, locked, Lmin };
}

// Hook (base block + arm + barbed head) lying flat: arm along +X, bends toward +Z.
export function hookNode(p) {
  const { L, t, b, y } = p;
  const ramp = y / Math.tan((p.alpha * Math.PI) / 180);
  const back = p.beta >= 89.9 ? 0 : y / Math.tan((p.beta * Math.PI) / 180);
  const flat = Math.max(0.4, 0.12 * y);
  const rf = Math.max(0.5, 0.5 * t); // root radius: no sharp corner where the strain peaks
  const Hb = t + y + 2, B = Math.max(6, 2 * t);
  // Tip → ramp (angle α) → flat top → retention face (angle β) → arm → root radius → base.
  const pts = [[-B, 0], [L + flat + ramp, 0], [L + flat + ramp, t], [L + flat, t + y], [L, t + y], [L - back, t], [rf, t], [0, t + rf], [0, Hb], [-B, Hb]].map((q) => q.map(r3));
  const curves = pts.map(() => null);
  curves[6] = [[r3(rf - K * rf), r3(t)], [0, r3(t + rf - K * rf)]];
  // Sketch X → world X, sketch Y → world Z, extrusion → world −Y.
  const rot = eulerFromAxes([1, 0, 0], [0, 0, 1], [0, -1, 0]);
  const n = N('extrude', { h: r3(b), pts, curves }, [0, 0, 0], { rot, name: 'スナップフック', color: '#57c26a' });
  n.snap = { ...p };
  return n;
}

// Plate with the window the hook clicks into (window: arm thickness × width + clearance).
export function receptacleNode(p, clr = 0.25) {
  const wx = p.t + clr, wy = p.b + 2 * clr;
  const X = wx + 16, Y = wy + 16;
  return G('受け（窓）', [
    N('cbox', { w: r3(X), d: r3(Y), h: p.plate, r: 3, cb: 0.3, ct: 0.3 }, [0, 0, p.plate / 2], { name: '板' }),
    N('box', { w: r3(wx), d: r3(wy), h: p.plate + 2, r: 0 }, [0, 0, p.plate / 2], { hole: true, name: '窓' }),
  ], '#f2f2f2');
}

export async function snapFitDialog() {
  const m = matFor(app.S.density);
  const st = { L: 16, t: 1.6, b: 8, y: 1.0, alpha: 30, beta: 90, plate: 2, use: 'often', out: 'both', ...store.getSetting('snapFit', {}) };
  const res = el('div');
  const render = () => {
    const c = snapCalc(st, m, st.use);
    const pct = (v) => `${(v * 100).toFixed(2)}%`;
    const kg = (v) => (v / 9.81 < 1 ? `${Math.round((v / 9.81) * 1000)} g 相当` : `${(v / 9.81).toFixed(1)} kg 相当`);
    res.replaceChildren(
      el('dl', { class: 'stat' },
        el('dt', {}, '曲げたときのひずみ'), el('dd', { class: c.ok ? 'ok' : 'ng' }, `${pct(c.eps)}（許容 ${pct(c.allow)}）${c.ok ? ' ✓' : ' ⚠'}`),
        el('dt', {}, 'はめる力'), el('dd', {}, `${c.W.toFixed(1)} N（${kg(c.W)}）`),
        el('dt', {}, '外す力'), el('dd', {}, c.locked ? '外れない（抜け角が急）' : `${c.release.toFixed(1)} N（${kg(c.release)}）`)),
      c.ok ? el('p', { class: 'hint' }, `この太さ・かかりなら、腕は ${fmt(c.Lmin)} mm 以上あれば割れにくい計算です。`)
        : el('div', { class: 'warnbox' }, `ひずみが大きすぎて割れるおそれがあります。腕を ${fmt(c.Lmin)} mm 以上にするか、厚み・かかりを減らしてください。`,
          el('button', { type: 'button', class: 'btn', style: { marginTop: '6px', width: '100%' }, onclick: () => { st.L = c.Lmin; renderFields(); render(); } }, `腕の長さを ${fmt(c.Lmin)} mm にする`)),
      st.L < st.plate + 0.3 ? el('div', { class: 'warnbox' }, '腕が受けの板厚より短いため、かかりが板の裏に届きません。') : null,
    );
  };
  const fields = el('div');
  const renderFields = () => {
    const f = (k, label, min, step, max = Infinity) => numField({ label, value: st[k], min, max, step, onChange: (v) => { st[k] = v; render(); } });
    fields.replaceChildren(
      el('div', { class: 'row' }, f('L', '腕の長さ mm', 2, 1), f('t', '根元の厚み mm', 0.6, 0.2), f('b', '幅 mm', 2, 1)),
      el('div', { class: 'row', style: { marginTop: '6px' } }, f('y', 'かかり mm', 0.2, 0.1), f('alpha', '差し込み角°', 10, 5, 60), f('beta', '抜け角°', 20, 5, 90)),
      el('div', { class: 'row two', style: { marginTop: '6px' } }, f('plate', '受けの板厚 mm', 0.8, 0.2)));
  };
  renderFields();
  render();
  const body = [
    el('p', { class: 'hint' }, `材料: ${m.name}（設定で変更）。腕がしなって、かかりが相手の窓の裏に引っかかる「片持ちばり」のスナップです。`),
    el('div', { class: 'field' }, el('span', {}, '使い方'), segmented([['often', '何度も外す'], ['once', '一度はめたら外さない']], st.use, (v) => { st.use = v; render(); })),
    fields, res,
    el('div', { class: 'field' }, el('span', {}, '作るもの'), segmented([['both', 'フック＋受けの板'], ['hook', 'フックだけ']], st.out, (v) => { st.out = v; })),
    el('p', { class: 'hint' }, '腕が積層に沿うよう、作った向き（寝かせた状態）のまま印刷してください。抜け角 90° は外れにくく、45° 前後にすると手で外せます。'),
  ];
  const v = await openDialog({ title: 'スナップフィット設計', body, buttons: [{ label: 'キャンセル', value: 'cancel' }, { label: '作成', value: 'ok', cls: 'accent' }] });
  store.setSetting('snapFit', st);
  if (v !== 'ok') return;
  const c = snapCalc(st, m, st.use);
  const nodes = [hookNode(st)];
  if (st.out === 'both') nodes.push(receptacleNode(st));
  app.checkpoint();
  for (const n of nodes) { app.freeSpot(n); app.S.doc.nodes.push(n); app.dropToFloor(n); }
  app.S.sel = nodes.map((n) => n.id);
  app.commit();
  app.vp.view('iso', app.S.sel);
  toast(c.ok ? `スナップを作りました（ひずみ ${(c.eps * 100).toFixed(1)}%）` : 'ひずみが許容を超えています。印刷前に寸法を見直してください', 3000);
}
