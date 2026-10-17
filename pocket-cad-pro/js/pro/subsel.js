// 辺・面の選択: pick edges or faces of one part in the viewport and act on them —
// fillet / chamfer edges, push / pull faces, or hollow the part with the picked faces open.
import {
  BufferGeometry, Float32BufferAttribute, LineSegments, LineBasicMaterial, Mesh, MeshBasicMaterial,
  Group, Vector3, DoubleSide,
} from '../../vendor/vendor.js';
import { el, icon, toast, openDialog, numField, segmented, fmt } from '../ui.js';
import * as store from '../storage.js';
import { partSurface, filletEdges, pushPull, maxEdgeSize, regionsArea } from './edgetools.js';

let app;
let shellHook = null; // set by the shell module: (node, an, regionIds) => void
export function initSubsel(api) { app = api; }
export function onShell(fn) { shellHook = fn; }

const S = { id: null, mode: 'edge', an: null, chains: new Set(), faces: new Set(), group: null, key: null };
const COL_EDGE = 0x7fd6ff, COL_SEL = 0xffb020;

export const active = () => !!S.id;
const node = () => app.S.doc.nodes.find((n) => n.id === S.id);
const keyOf = (n) => JSON.stringify([n.kind, n.params, n.scale, n.pos, n.rot, n.children?.length]);

let pending = 0;
export function start(n, mode = 'edge', hint = null) {
  if (!n) { toast('部品を 1 つ選択してください'); return; }
  if (n.hole) { toast('穴ではなくソリッドの部品を選んでください'); return; }
  if (n.lattice) { toast('格子には使えません。「格子の設定」から元の形を編集してください', 3000); return; }
  const tris = app.vp.meshes.get(n.id)?.mesh.geometry.getAttribute('position').count / 3 || 0;
  if (tris > 300000) { toast('三角形が多すぎるため、辺・面を選べません', 3000); return; }
  const token = ++pending;
  const run = () => {
    // Skip when another start() came first or the part went away meanwhile.
    if (token !== pending || !app.S.doc.nodes.includes(n)) return;
    let an;
    try {
      an = partSurface(n);
    } catch (e) {
      console.error(e);
      toast('形を解析できませんでした');
      return;
    }
    stop();
    S.id = n.id; S.mode = mode; S.an = an; S.key = keyOf(n);
    if (!S.group) { S.group = new Group(); S.group.renderOrder = 5; app.vp.scene.add(S.group); }
    redraw();
    app.updateToolBar();
    if (hint) toast(hint, 3500);
    else if (mode === 'edge') toast(an.chains.length ? '丸めたい辺をタップ（もう一度タップで解除）' : 'この部品には選べる辺がありません', 2500);
    else toast('面をタップして選択（もう一度タップで解除）', 2500);
  };
  // Big parts take a moment to analyse: say so before the main thread is busy.
  if (tris > 30000) { toast('形を解析しています…', 8000); setTimeout(run, 40); } else run();
}

export function stop() {
  if (!S.id) return;
  S.id = null; S.an = null; S.chains.clear(); S.faces.clear();
  clearGroup();
  app.vp.requestRender();
  app.updateToolBar();
}

// Called after every document change: leave when the part went away or changed shape.
export function onCommit() {
  if (!S.id) return;
  const n = node();
  if (!n || !app.S.sel.includes(n.id)) { stop(); return; }
  if (keyOf(n) !== S.key) { const m = S.mode; stop(); start(n, m); }
}

function clearGroup() {
  if (!S.group) return;
  for (const c of [...S.group.children]) { S.group.remove(c); c.geometry.dispose(); }
}

// ---------------------------------------------------------------- drawing

function tubeGeometry(chains, radius) {
  const out = [];
  const K = 6;
  const v = new Vector3(), a = new Vector3(), b = new Vector3(), d = new Vector3(), u = new Vector3(), w = new Vector3();
  for (const c of chains) {
    const n = c.pts.length, spans = c.closed ? n : n - 1;
    for (let i = 0; i < spans; i++) {
      a.fromArray(c.pts[i]); b.fromArray(c.pts[(i + 1) % n]);
      d.subVectors(b, a);
      if (d.lengthSq() < 1e-12) continue;
      d.normalize();
      u.set(Math.abs(d.x) < 0.9 ? 1 : 0, Math.abs(d.x) < 0.9 ? 0 : 1, 0).cross(d).normalize();
      w.crossVectors(d, u);
      const ring = (p) => Array.from({ length: K }, (_, k) => {
        const t = (k / K) * Math.PI * 2;
        return v.copy(p).addScaledVector(u, Math.cos(t) * radius).addScaledVector(w, Math.sin(t) * radius).toArray();
      });
      const ra = ring(a), rb = ring(b);
      for (let k = 0; k < K; k++) {
        const k2 = (k + 1) % K;
        out.push(...ra[k], ...ra[k2], ...rb[k2], ...ra[k], ...rb[k2], ...rb[k]);
      }
    }
  }
  const g = new BufferGeometry();
  g.setAttribute('position', new Float32BufferAttribute(out, 3));
  return g;
}

function redraw() {
  clearGroup();
  if (!S.id || !S.an) return;
  const an = S.an;
  if (S.mode === 'edge') {
    const lines = [];
    for (const c of an.chains) {
      const n = c.pts.length, spans = c.closed ? n : n - 1;
      for (let i = 0; i < spans; i++) lines.push(...c.pts[i], ...c.pts[(i + 1) % n]);
    }
    const lg = new BufferGeometry();
    lg.setAttribute('position', new Float32BufferAttribute(lines, 3));
    S.group.add(new LineSegments(lg, new LineBasicMaterial({ color: COL_EDGE, transparent: true, opacity: 0.9 })));
    if (S.chains.size) {
      const dist = app.vp.camera.position.distanceTo(app.vp.controls.target);
      const r = Math.min(2, Math.max(0.12, dist * 0.0035));
      const tg = tubeGeometry([...S.chains].map((i) => an.chains[i]), r);
      const m = new Mesh(tg, new MeshBasicMaterial({ color: COL_SEL, depthTest: true }));
      m.renderOrder = 6;
      S.group.add(m);
    }
  } else if (S.faces.size) {
    const out = [];
    for (const rid of S.faces) {
      for (const t of an.regions[rid].tris) for (let k = 0; k < 9; k++) out.push(an.pos[t * 9 + k]);
    }
    const fg = new BufferGeometry();
    fg.setAttribute('position', new Float32BufferAttribute(out, 3));
    S.group.add(new Mesh(fg, new MeshBasicMaterial({
      color: COL_SEL, transparent: true, opacity: 0.55, side: DoubleSide, depthWrite: false,
      polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2,
    })));
  }
  app.vp.requestRender();
}

// ---------------------------------------------------------------- picking

// Nearest edge chain to the tap in screen space that is not hidden behind the part.
function pickChain(e) {
  const vp = app.vp, cam = vp.camera, rect = vp.canvas.getBoundingClientRect();
  const sx = e.clientX - rect.left, sy = e.clientY - rect.top;
  const p = new Vector3();
  const toScreen = (q) => { p.fromArray(q).project(cam); return [(p.x + 1) / 2 * rect.width, (1 - p.y) / 2 * rect.height, p.z]; };
  const cands = [];
  S.an.chains.forEach((c, ci) => {
    const n = c.pts.length, spans = c.closed ? n : n - 1;
    let best = Infinity, bestPt = null;
    let prev = toScreen(c.pts[0]);
    for (let i = 0; i < spans; i++) {
      const cur = toScreen(c.pts[(i + 1) % n]);
      if (prev[2] < 1 && cur[2] < 1) {
        const dx = cur[0] - prev[0], dy = cur[1] - prev[1], l2 = dx * dx + dy * dy || 1;
        const t = Math.max(0, Math.min(1, ((sx - prev[0]) * dx + (sy - prev[1]) * dy) / l2));
        const d = Math.hypot(prev[0] + t * dx - sx, prev[1] + t * dy - sy);
        if (d < best) {
          best = d;
          const a = c.pts[i], b = c.pts[(i + 1) % n];
          bestPt = [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
        }
      }
      prev = cur;
    }
    if (best < 28) cands.push([best, ci, bestPt]);
  });
  cands.sort((a, b) => a[0] - b[0]);
  const meshes = [...vp.meshes.values()].filter((x) => x.mesh.visible).map((x) => x.mesh);
  for (const [, ci, pt] of cands) {
    const target = new Vector3().fromArray(pt);
    const dist = cam.position.distanceTo(target);
    vp.raycaster.set(cam.position, target.clone().sub(cam.position).normalize());
    const hit = vp.raycaster.intersectObjects(meshes, false)[0];
    if (!hit || hit.distance > dist - Math.max(0.3, dist * 0.004)) return ci;
  }
  return -1;
}

// Returns true when the tap was used.
export function tap(hit, e) {
  if (!S.id) return false;
  if (S.mode === 'edge') {
    const ci = pickChain(e);
    if (ci < 0) return true;
    if (S.chains.has(ci)) S.chains.delete(ci); else S.chains.add(ci);
  } else {
    if (!hit || hit.object.userData.id !== S.id || hit.faceIndex == null) {
      if (hit) toast('編集中の部品の面をタップしてください');
      return true;
    }
    const rid = S.an.regionOf[hit.faceIndex];
    if (rid < 0) return true;
    if (S.faces.has(rid)) S.faces.delete(rid); else S.faces.add(rid);
  }
  redraw();
  app.updateToolBar();
  return true;
}

// ---------------------------------------------------------------- tool bar

const selChains = () => [...S.chains].map((i) => S.an.chains[i]);
// A size limit rounded down to 0.1 mm, kept a hair below the exact limit (where the
// fillets of two neighbouring edges would meet in a line).
const floor1 = (v) => Math.floor((v - 1e-3) * 10) / 10;

export function toolbarRows() {
  if (!S.id) return [];
  const btn = (label, fn, cls = '') => el('button', { type: 'button', class: 'btn tb-btn ' + cls, onclick: fn }, label);
  const close = el('button', { type: 'button', class: 'chip', 'aria-label': '終了', onclick: stop }, icon('close'));
  const modeSeg = segmented([['edge', '辺'], ['face', '面']], S.mode, (v) => {
    S.mode = v;
    redraw();
    app.updateToolBar();
    toast(v === 'edge' ? '辺をタップして選択' : '面をタップして選択', 1500);
  });
  let text;
  if (S.mode === 'edge') {
    const cs = selChains();
    text = cs.length ? `辺 ${cs.length} 本 ・ ${fmt(Math.round(cs.reduce((s, c) => s + c.length, 0) * 10) / 10)} mm` : '辺をタップ';
  } else {
    text = S.faces.size ? `面 ${S.faces.size} 枚 ・ ${fmt(Math.round(regionsArea(S.an, [...S.faces])))} mm²` : '面をタップ';
  }
  const row1 = el('div', { class: 'tb-row' }, icon(S.mode === 'edge' ? 'edge' : 'face'), modeSeg, el('span', { class: 'tb-text' }, text), close);
  const acts = S.mode === 'edge'
    ? [btn('全部', () => { S.an.chains.forEach((_, i) => S.chains.add(i)); redraw(); app.updateToolBar(); }),
      btn('解除', () => { S.chains.clear(); redraw(); app.updateToolBar(); }),
      btn('丸め・面取り', edgeDialog, 'accent')]
    : [btn('解除', () => { S.faces.clear(); redraw(); app.updateToolBar(); }),
      btn('押し出し', faceDialog),
      btn('シェル', () => { if (shellHook) shellHook(node(), S.an, [...S.faces]); }, 'accent')];
  return [row1, el('div', { class: 'tb-row tb-acts' }, acts)];
}

// ---------------------------------------------------------------- operations

function replaceNode(n, g) {
  const idx = app.S.doc.nodes.indexOf(n);
  if (idx < 0) return;
  app.checkpoint();
  g.id = g.id || n.id;
  app.S.doc.nodes.splice(idx, 1, g);
  app.S.sel = [g.id];
  stop();
  const t0 = performance.now();
  app.commit();
  return performance.now() - t0;
}

async function edgeDialog() {
  const cs = selChains();
  if (!cs.length) { toast('先に辺をタップして選んでください'); return; }
  const n = node();
  const st = { type: 'fillet', ...store.getSetting('edgeOp', {}) };
  const sizes = { fillet: 2, chamfer: 1, ...store.getSetting('edgeSizes', {}) };
  const convex = cs.filter((c) => c.convex).length, concave = cs.length - convex;
  const limitBox = el('p', { class: 'hint' });
  const sizeBox = el('div');
  const renderSize = () => {
    const lim = maxEdgeSize(S.an, cs, st.type);
    sizeBox.replaceChildren(numField({
      label: st.type === 'fillet' ? '半径 R mm' : '面取り C mm', value: sizes[st.type], min: 0.1, step: 0.5,
      onChange: (v) => { sizes[st.type] = v; },
    }));
    limitBox.textContent = Number.isFinite(lim) ? `この辺には最大 約 ${fmt(floor1(lim))} mm まで。` : '';
  };
  renderSize();
  const body = [
    el('div', { class: 'field' }, el('span', {}, '種類'), segmented([['fillet', '丸め（フィレット）'], ['chamfer', '面取り']], st.type, (v) => { st.type = v; renderSize(); })),
    sizeBox, limitBox,
    el('p', { class: 'hint' }, `辺 ${cs.length} 本` + (convex ? ` ・ 出っ張った辺 ${convex} 本は削ります` : '') + (concave ? ` ・ へこんだ辺 ${concave} 本は肉を盛ります（付け根の補強に）` : '') + '。'),
    el('p', { class: 'hint' }, '結果はグループになり、選択したときの「辺の丸め」欄から後で大きさを変えられます。'),
  ];
  const v = await openDialog({ title: '辺の丸め・面取り', body, buttons: [{ label: 'キャンセル', value: 'cancel' }, { label: '適用', value: 'ok', cls: 'accent' }] });
  if (v !== 'ok') return;
  store.setSetting('edgeOp', { type: st.type });
  store.setSetting('edgeSizes', sizes);
  const lim = maxEdgeSize(S.an, cs, st.type);
  let r = sizes[st.type];
  let clipped = false;
  if (r > lim) { r = Math.max(0.1, floor1(lim)); clipped = true; }
  toast('計算中…', 1500);
  await new Promise((res) => setTimeout(res, 40));
  const g = filletEdges(n, S.an, cs, { type: st.type, r });
  // Remembered so the size field in the panel can stop at the same limit later.
  if (Number.isFinite(lim)) g.edgeOp.max = Math.max(0.1, floor1(lim));
  const ms = replaceNode(n, g);
  toast(`${cs.length} 本の辺を${st.type === 'fillet' ? `R${fmt(r)} で丸めました` : `C${fmt(r)} で面取りしました`}${clipped ? '（大きすぎたため小さくしました）' : ''}${ms > 1500 ? ` ・ ${(ms / 1000).toFixed(1)} 秒` : ''}`, 3000);
}

async function faceDialog() {
  const ids = [...S.faces];
  if (!ids.length) { toast('先に面をタップして選んでください'); return; }
  const n = node();
  const st = { dir: 'out', d: 5, ...store.getSetting('pushPull', {}) };
  const body = [
    el('div', { class: 'field' }, el('span', {}, '向き'), segmented([['out', '押し出す（肉を足す）'], ['in', 'へこませる（削る）']], st.dir, (v) => { st.dir = v; })),
    numField({ label: '距離 mm', value: st.d, min: 0.1, step: 1, onChange: (v) => { st.d = v; } }),
    el('p', { class: 'hint' }, `選んだ平らな面 ${ids.length} 枚を、面に垂直な向きに動かします。穴のあいた面は穴ごと押し出します。`),
  ];
  const v = await openDialog({ title: '面の押し出し', body, buttons: [{ label: 'キャンセル', value: 'cancel' }, { label: '適用', value: 'ok', cls: 'accent' }] });
  if (v !== 'ok') return;
  store.setSetting('pushPull', st);
  const g = pushPull(n, S.an, ids, st.dir === 'out' ? st.d : -st.d);
  replaceNode(n, g);
  toast(`面を ${fmt(st.d)} mm ${st.dir === 'out' ? '押し出しました' : 'へこませました'}`);
}
