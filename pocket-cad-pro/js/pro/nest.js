// 自動配置（詰め込み）・敷き詰め: packs parts on the build plate by their real footprint
// (a raster of the shape seen from above, grown by half the gap), trying several
// rotations and taking the lowest, then left-most free spot. L-shapes interlock and round
// parts sit closer than their bounding boxes would allow.
import { Matrix4 } from '../../vendor/vendor.js';
import { el, toast, openDialog, numField, segmented } from '../ui.js';
import { nodeGeometry, nodeMatrix } from '../geometry.js';
import * as store from '../storage.js';
import { footprintYaw } from './orient.js';

let app;
export function initNest(api) { app = api; }

const r3 = (v) => Math.round(v * 1000) / 1000;
const uid = () => Math.random().toString(36).slice(2, 10) + Date.now().toString(36).slice(-4);

// ---------------------------------------------------------------- rasters

// Squared distance from point (px, py) to triangle abc (0 inside).
function triDist2(px, py, ax, ay, bx, by, cx, cy) {
  const d1 = (px - bx) * (ay - by) - (ax - bx) * (py - by);
  const d2 = (px - cx) * (by - cy) - (bx - cx) * (py - cy);
  const d3 = (px - ax) * (cy - ay) - (cx - ax) * (py - ay);
  const neg = d1 < 0 || d2 < 0 || d3 < 0, pos = d1 > 0 || d2 > 0 || d3 > 0;
  if (!(neg && pos) && (d1 || d2 || d3)) return 0;
  const seg = (x0, y0, x1, y1) => {
    const dx = x1 - x0, dy = y1 - y0, l2 = dx * dx + dy * dy;
    const t = l2 > 0 ? Math.max(0, Math.min(1, ((px - x0) * dx + (py - y0) * dy) / l2)) : 0;
    const qx = x0 + t * dx - px, qy = y0 + t * dy - py;
    return qx * qx + qy * qy;
  };
  return Math.min(seg(ax, ay, bx, by), seg(bx, by, cx, cy), seg(cx, cy, ax, ay));
}

// Cells (size `cell` mm) touched by the geometry seen from above, after rotation M (and
// translation, if M has one). Conservative: any cell the shape reaches is marked.
function rasterize(pos, M, cell) {
  const e = M.elements, n = pos.length / 3;
  const X = new Float32Array(n), Y = new Float32Array(n);
  let x0 = Infinity, x1 = -Infinity, y0 = Infinity, y1 = -Infinity, zmin = Infinity;
  for (let k = 0; k < n; k++) {
    const x = pos[3 * k], y = pos[3 * k + 1], z = pos[3 * k + 2];
    const wx = e[0] * x + e[4] * y + e[8] * z + e[12], wy = e[1] * x + e[5] * y + e[9] * z + e[13], wz = e[2] * x + e[6] * y + e[10] * z + e[14];
    X[k] = wx; Y[k] = wy;
    if (wx < x0) x0 = wx; if (wx > x1) x1 = wx;
    if (wy < y0) y0 = wy; if (wy > y1) y1 = wy;
    if (wz < zmin) zmin = wz;
  }
  const w = Math.max(1, Math.ceil((x1 - x0) / cell - 1e-9)), h = Math.max(1, Math.ceil((y1 - y0) / cell - 1e-9));
  const mask = new Uint8Array(w * h);
  const r = cell * 0.7072, r2 = r * r;
  for (let t = 0; t < n; t += 3) {
    const ax = X[t] - x0, ay = Y[t] - y0, bx = X[t + 1] - x0, by = Y[t + 1] - y0, cx = X[t + 2] - x0, cy = Y[t + 2] - y0;
    const i0 = Math.max(0, Math.floor((Math.min(ax, bx, cx) - r) / cell)), i1 = Math.min(w - 1, Math.floor((Math.max(ax, bx, cx) + r) / cell));
    const j0 = Math.max(0, Math.floor((Math.min(ay, by, cy) - r) / cell)), j1 = Math.min(h - 1, Math.floor((Math.max(ay, by, cy) + r) / cell));
    for (let j = j0; j <= j1; j++) {
      for (let i = i0; i <= i1; i++) {
        const o = j * w + i;
        if (!mask[o] && triDist2((i + 0.5) * cell, (j + 0.5) * cell, ax, ay, bx, by, cx, cy) <= r2) mask[o] = 1;
      }
    }
  }
  return { w, h, mask, x0, y0, zmin };
}

// Grows a raster by d cells in every direction (square neighbourhood).
function dilate({ w, h, mask }, d) {
  if (d <= 0) return { w, h, mask };
  const W = w + 2 * d, H = h + 2 * d;
  const tmp = new Uint8Array(W * h);
  for (let j = 0; j < h; j++) for (let i = 0; i < w; i++) if (mask[j * w + i]) tmp.fill(1, j * W + i, j * W + i + 2 * d + 1);
  const out = new Uint8Array(W * H);
  for (let j = 0; j < h; j++) for (let i = 0; i < W; i++) if (tmp[j * W + i]) for (let k = 0; k <= 2 * d; k++) out[(j + k) * W + i] = 1;
  return { w: W, h: H, mask: out };
}

// Filled runs per row: [[x0, x1, x0, x1, ...], ...].
function spans({ w, h, mask }) {
  const rows = [];
  for (let j = 0; j < h; j++) {
    const list = [];
    for (let i = 0; i < w;) {
      if (!mask[j * w + i]) { i++; continue; }
      let k = i;
      while (k < w && mask[j * w + k]) k++;
      list.push(i, k - 1);
      i = k;
    }
    rows.push(list);
  }
  return rows;
}

// Occupancy of the plate, with per-row prefix sums for O(1) "is this run free?" tests.
class Plate {
  constructor(cols, rows) {
    Object.assign(this, { cols, rows });
    this.occ = new Uint8Array(cols * rows);
    this.pre = new Int32Array(rows * (cols + 1));
  }
  used(r, a, b) { const o = r * (this.cols + 1); return this.pre[o + b + 1] - this.pre[o + a]; }
  // Left-most spot where shape s fits with its lower edge on row py (or -1).
  firstInRow(s, py) {
    const { cols } = this;
    for (let px = 0; px + s.w <= cols;) {
      let skip = 0;
      for (let r = 0; r < s.h && !skip; r++) {
        const list = s.rows[r];
        for (let k = 0; k < list.length; k += 2) {
          const a = px + list[k], b = px + list[k + 1];
          if (!this.used(py + r, a, b)) continue;
          // Jump past the last occupied cell of this run.
          let c = b;
          while (!this.occ[(py + r) * cols + c]) c--;
          skip = c - list[k] + 1 - px;
          break;
        }
      }
      if (!skip) return px;
      px += Math.max(1, skip);
    }
    return -1;
  }
  // First fit scanning rows from the front, then columns from the left.
  find(s) {
    for (let py = 0; py + s.h <= this.rows; py++) {
      const px = this.firstInRow(s, py);
      if (px >= 0) return { px, py };
    }
    return null;
  }
  // The left-most spot of every row, scored by `score(px, py)` (lower is better).
  best(s, score) {
    let out = null;
    for (let py = 0; py + s.h <= this.rows; py++) {
      const px = this.firstInRow(s, py);
      if (px < 0) continue;
      const v = score(px, py);
      if (!out || v < out.v) out = { px, py, v };
    }
    return out;
  }
  put(s, px, py) {
    const { cols } = this;
    for (let r = 0; r < s.h; r++) {
      const list = s.rows[r], row = py + r;
      if (row < 0 || row >= this.rows) continue;
      for (let k = 0; k < list.length; k += 2) {
        for (let c = Math.max(0, px + list[k]); c <= Math.min(cols - 1, px + list[k + 1]); c++) this.occ[row * cols + c] = 1;
      }
      const o = row * (cols + 1);
      for (let c = 0; c < cols; c++) this.pre[o + c + 1] = this.pre[o + c] + this.occ[row * cols + c];
    }
  }
}

// ---------------------------------------------------------------- planning

const YAWS = { none: [0], right: [0, 90, 180, 270], free: [0, 45, 90, 135, 180, 225, 270, 315] };

// Footprint variants (one per allowed rotation about Z) of a node.
function shapesOf(node, st, cell, d) {
  const g = nodeGeometry(node);
  const pos = g.getAttribute('position').array;
  const R = app.rotMatrix(node.rot);
  const yaws = [...YAWS[st.rotate] || YAWS.right].map((a) => (a * Math.PI) / 180);
  if (st.rotate === 'free') {
    const y = footprintYaw(pos, R);
    for (let k = 0; k < 4; k++) yaws.push(y + (k * Math.PI) / 2);
  }
  const out = [];
  for (const yaw of yaws) {
    const M = new Matrix4().makeRotationZ(yaw).multiply(R);
    const raw = rasterize(pos, M, cell);
    // Symmetric parts give identical footprints for several rotations; test each once.
    const area = raw.mask.reduce((s, v) => s + v, 0);
    if (out.some((o) => o.raw.w === raw.w && o.raw.h === raw.h && o.area === area && o.raw.mask.every((v, i) => v === raw.mask[i]))) continue;
    const big = dilate(raw, d);
    out.push({ yaw, M, raw, area, w: big.w, h: big.h, rows: spans(big), ox: raw.x0 - d * cell, oy: raw.y0 - d * cell });
  }
  return out;
}

// Lays out `items` ({ node, shapes }) on a plate that already holds `fixed` footprints.
function plan(items, { plate, cell, d }, fixedNodes, count = null) {
  const cols = Math.max(1, Math.floor(plate.x / cell)), rows = Math.max(1, Math.floor(plate.y / cell));
  const P = new Plate(cols, rows);
  const X0 = -plate.x / 2, Y0 = -plate.y / 2;
  const obstacles = [];
  for (const n of fixedNodes) {
    const g = nodeGeometry(n);
    const raw = rasterize(g.getAttribute('position').array, nodeMatrix(n, new Matrix4()), cell);
    const big = dilate(raw, d);
    const px = Math.round((raw.x0 - d * cell - X0) / cell), py = Math.round((raw.y0 - d * cell - Y0) / cell);
    P.put({ w: big.w, h: big.h, rows: spans(big) }, px, py);
    obstacles.push({ node: n, raw, px: px + d, py: py + d });
  }
  const placed = [], missed = [];
  // Filling the plate (or working around fixed parts): classic bottom-left first fit.
  // Laying out a free set: keep the layout's bounding box small (it is centred later),
  // so small parts drop into the gaps of big ones instead of trailing off in a row.
  const compact = !count && !fixedNodes.length;
  const bb = [Infinity, Infinity, -Infinity, -Infinity];
  const place = (item) => {
    let best = null;
    for (const s of item.shapes) {
      let spot;
      if (compact) {
        spot = P.best(s, (px, py) => {
          const w = Math.max(bb[2], px + s.w) - Math.min(bb[0], px), h = Math.max(bb[3], py + s.h) - Math.min(bb[1], py);
          return (w * h + 0.5 * Math.max(w, h) ** 2) * (cols + 1) * (rows + 1) + py * (cols + 1) + px;
        });
      } else {
        spot = P.find(s);
        if (spot) spot.v = (spot.py + s.h) * (cols + 1) + spot.px + s.w;
      }
      if (spot && (!best || spot.v < best.v)) best = { ...spot, s };
    }
    if (!best) return false;
    P.put(best.s, best.px, best.py);
    placed.push({ item, s: best.s, px: best.px, py: best.py });
    bb[0] = Math.min(bb[0], best.px); bb[1] = Math.min(bb[1], best.py);
    bb[2] = Math.max(bb[2], best.px + best.s.w); bb[3] = Math.max(bb[3], best.py + best.s.h);
    return true;
  };
  if (count) {
    for (let k = 0; k < count && place(items[0]); k++);
  } else {
    for (const it of items) if (!place(it)) missed.push(it);
  }
  // Nothing else on the plate: move the whole layout to the middle.
  let shift = [0, 0];
  if (!fixedNodes.length && placed.length) {
    let c0 = Infinity, c1 = -Infinity, r0 = Infinity, r1 = -Infinity;
    for (const p of placed) { c0 = Math.min(c0, p.px); c1 = Math.max(c1, p.px + p.s.w); r0 = Math.min(r0, p.py); r1 = Math.max(r1, p.py + p.s.h); }
    shift = [Math.floor((cols - (c1 - c0)) / 2) - c0, Math.floor((rows - (r1 - r0)) / 2) - r0];
  }
  for (const p of placed) { p.px += shift[0]; p.py += shift[1]; }
  const usedCells = placed.reduce((s, p) => s + p.s.area, 0);
  return { placed, missed, obstacles, cols, rows, cell, X0, Y0, fill: usedCells / (cols * rows) };
}

// Top view of a plan.
function drawPlan(cv, res) {
  const { cols, rows } = res;
  const img = new ImageData(cols, rows);
  const paint = (raw, px, py, hex, alpha = 255) => {
    const rgb = [1, 3, 5].map((k) => parseInt(hex.slice(k, k + 2), 16));
    for (let j = 0; j < raw.h; j++) {
      for (let i = 0; i < raw.w; i++) {
        if (!raw.mask[j * raw.w + i]) continue;
        const c = px + i, r = py + j;
        if (c < 0 || r < 0 || c >= cols || r >= rows) continue;
        const o = ((rows - 1 - r) * cols + c) * 4;
        img.data[o] = rgb[0]; img.data[o + 1] = rgb[1]; img.data[o + 2] = rgb[2]; img.data[o + 3] = alpha;
      }
    }
  };
  for (const o of res.obstacles) paint(o.raw, o.px, o.py, '#5b6370');
  const d = Math.round((res.placed[0]?.s.raw.x0 - res.placed[0]?.s.ox) / res.cell) || 0;
  for (const p of res.placed) paint(p.s.raw, p.px + d, p.py + d, p.item.node.color || '#4f9dff');
  // Fit the plate into the preview (at most ~40% of the screen height).
  const W = cv.clientWidth || 300, H = Math.round(Math.min((W * rows) / cols, Math.max(180, innerHeight * 0.4)));
  const dpr = Math.min(devicePixelRatio || 1, 3);
  cv.style.height = `${H}px`;
  cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
  const ctx = cv.getContext('2d');
  ctx.fillStyle = '#111418'; ctx.fillRect(0, 0, cv.width, cv.height);
  const k = Math.min(cv.width / cols, cv.height / rows);
  const pw = cols * k, ph = rows * k, px = (cv.width - pw) / 2, py = (cv.height - ph) / 2;
  ctx.fillStyle = '#1f242c'; ctx.fillRect(px, py, pw, ph);
  const tmp = document.createElement('canvas');
  tmp.width = cols; tmp.height = rows;
  tmp.getContext('2d').putImageData(img, 0, 0);
  ctx.imageSmoothingEnabled = false;
  ctx.drawImage(tmp, px, py, pw, ph);
  ctx.strokeStyle = '#3a4452'; ctx.lineWidth = 2; ctx.strokeRect(px + 1, py + 1, pw - 2, ph - 2);
}

// ---------------------------------------------------------------- dialog

export async function nestDialog(initialMode) {
  const visible = app.S.doc.nodes.filter((n) => !n.hidden && !n.hole);
  const sel = app.selNodes().filter((n) => !n.hole);
  if (!visible.length) { toast('並べる部品がありません'); return; }
  const st = { gap: 4, rotate: 'right', max: 50, ...store.getSetting('nest', {}) };
  st.mode = initialMode || (sel.length === 1 && visible.length === 1 ? 'fill' : 'all');
  if (st.mode === 'fill' && sel.length !== 1) st.mode = 'all';
  const cv = el('canvas', { class: 'nest-preview' });
  const info = el('p', { class: 'hint' });
  const opts = el('div');
  let result = null, timer = 0;

  const compute = () => {
    const cell = Math.max(0.8, Math.max(app.S.plate.x, app.S.plate.y) / 300);
    const d = Math.max(0, Math.ceil(st.gap / (2 * cell) - 1e-9));
    const env = { plate: app.S.plate, cell, d };
    const t0 = performance.now();
    if (st.mode === 'fill') {
      const node = sel[0];
      const others = visible.filter((n) => n !== node);
      result = plan([{ node, shapes: shapesOf(node, st, cell, d) }], env, others, Math.min(300, st.max));
      info.textContent = result.placed.length
        ? `${result.placed.length} 個入ります${result.placed.length >= st.max ? `（上限 ${st.max} 個まで）` : '（これ以上は入りません）'} ・ 造形エリアの ${Math.round(result.fill * 100)}% ・ ${Math.round(performance.now() - t0)} ms`
        : '空きがなく、1 個も置けませんでした。';
    } else {
      const moving = st.mode === 'sel' ? sel : visible;
      const fixed = st.mode === 'sel' ? visible.filter((n) => !sel.includes(n)) : [];
      const items = moving.map((node) => ({ node, shapes: shapesOf(node, st, cell, d) }))
        .sort((a, b) => Math.max(...b.shapes.map((s) => s.area)) - Math.max(...a.shapes.map((s) => s.area)));
      result = plan(items, env, fixed);
      info.textContent = `${result.placed.length} 個を配置 ・ 造形エリアの ${Math.round(result.fill * 100)}% を使用` +
        (result.missed.length ? ` ・ ${result.missed.length} 個は入りきりません（2 回に分けて印刷してください）` : '') + ` ・ ${Math.round(performance.now() - t0)} ms`;
    }
    drawPlan(cv, result);
  };
  const schedule = () => { clearTimeout(timer); info.textContent = '計算中…'; timer = setTimeout(compute, 60); };

  const renderOpts = () => {
    opts.replaceChildren(
      el('div', { class: 'row two' },
        numField({ label: '部品の間隔 mm', value: st.gap, min: 0, max: 30, step: 1, onChange: (v) => { st.gap = v; schedule(); } }),
        st.mode === 'fill' ? numField({ label: '最大個数', value: st.max, min: 1, max: 300, step: 1, integer: true, onChange: (v) => { st.max = v; schedule(); } }) : el('div')),
      el('div', { class: 'field' }, el('span', {}, '部品の回転'), segmented([['none', '回転なし'], ['right', '90° ごと'], ['free', '45° ごと']], st.rotate, (v) => { st.rotate = v; schedule(); })));
  };
  const modes = [['all', '全部品を並べる']];
  if (sel.length && sel.length < visible.length) modes.push(['sel', `選択中だけ (${sel.length})`]);
  if (sel.length === 1) modes.push(['fill', '選択部品を敷き詰め']);
  const body = [
    el('div', { class: 'field' }, el('span', {}, '配置のしかた'), segmented(modes, st.mode, (v) => { st.mode = v; renderOpts(); schedule(); })),
    opts, cv, info,
    el('p', { class: 'hint' }, '上から見た実際の形で詰めるので、L 字や丸い部品は箱で並べるより多く入ります。敷き詰めは同じ部品を複製して空きを埋めます。'),
  ];
  renderOpts();
  const v = await openDialog({
    title: '自動配置（詰め込み）', body,
    buttons: [{ label: 'キャンセル', value: 'cancel' }, { label: '配置する', value: 'ok', cls: 'accent' }],
    onOpen: () => setTimeout(compute, 30),
  });
  clearTimeout(timer);
  store.setSetting('nest', { gap: st.gap, rotate: st.rotate, max: st.max });
  if (v !== 'ok') return;
  if (!result) compute();
  if (!result.placed.length) { toast('配置できませんでした'); return; }
  app.checkpoint();
  const add = [];
  result.placed.forEach((p, k) => {
    let n = p.item.node;
    if (st.mode === 'fill' && k > 0) {
      n = JSON.parse(JSON.stringify(n));
      const reid = (x) => { x.id = uid(); x.children?.forEach(reid); };
      reid(n);
      n.name = `${p.item.node.name} ${k + 1}`;
      add.push(n);
    }
    // Footprint origin (rotated frame) lands on its grid spot; z rests on the plate.
    n.rot = app.eulerDeg(p.s.M);
    n.pos = [r3(result.X0 + p.px * result.cell - p.s.ox), r3(result.Y0 + p.py * result.cell - p.s.oy), r3(-p.s.raw.zmin)];
  });
  // Parts that do not fit go in a row beside the plate.
  let x = app.S.plate.x / 2 + 10;
  for (const it of result.missed) {
    const b = app.vp.nodeBox(it.node);
    it.node.pos[0] = r3(it.node.pos[0] + x - b.min.x);
    it.node.pos[1] = r3(it.node.pos[1] - (b.min.y + b.max.y) / 2);
    it.node.pos[2] = r3(it.node.pos[2] - b.min.z);
    x += b.max.x - b.min.x + st.gap;
  }
  app.S.doc.nodes.push(...add);
  if (add.length) app.S.sel = [result.placed[0].item.node.id, ...add.map((n) => n.id)];
  app.commit();
  app.vp.view('top');
  toast(st.mode === 'fill' ? `${result.placed.length} 個を敷き詰めました` : `${result.placed.length} 個を配置しました${result.missed.length ? `（${result.missed.length} 個はエリア外）` : ''}`, 2500);
}
