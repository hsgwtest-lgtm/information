// 写真で採寸: photograph objects lying on a sheet of paper of known size (A4 …) from
// above; the sheet's corners fix the scale and undo the perspective, so the objects'
// outlines come out in real millimetres — as an outline, a stencil / jig plate with the
// shape cut out, or a fitted tray with finger notches.
import { el, icon, toast, openDialog, numField, segmented, fmt, pickFile } from '../ui.js';
import * as store from '../storage.js';
import { loadImage, maskToShapes } from './trace.js';
import { N, G } from './templates.js';

let app;
export function initPhotoFit(api) { app = api; }

export const PAPERS = [['a4', 'A4', 297, 210], ['b5', 'B5', 257, 182], ['a5', 'A5', 210, 148], ['letter', 'レター', 279.4, 215.9], ['card', 'はがき', 148, 100]];
const PX_PER_MM = 3;
const MARGIN_MM = 3; // ignore this much of the sheet's border (shadows, curled edges)
const r3 = (v) => Math.round(v * 1000) / 1000;

// ---------------------------------------------------------------- image analysis

function luminance(data, n) {
  const lum = new Float32Array(n);
  for (let i = 0; i < n; i++) lum[i] = 0.299 * data[i * 4] + 0.587 * data[i * 4 + 1] + 0.114 * data[i * 4 + 2];
  return lum;
}

// Otsu threshold of values in [0, 255].
export function otsu(values, step = 1) {
  const hist = new Float64Array(256);
  let n = 0;
  for (let i = 0; i < values.length; i += step) { hist[Math.max(0, Math.min(255, Math.round(values[i])))]++; n++; }
  let sum = 0;
  for (let i = 0; i < 256; i++) sum += i * hist[i];
  let sumB = 0, wB = 0, best = 0, th = 128;
  for (let t = 0; t < 256; t++) {
    wB += hist[t];
    if (!wB) continue;
    const wF = n - wB;
    if (!wF) break;
    sumB += t * hist[t];
    const mB = sumB / wB, mF = (sum - sumB) / wF;
    const between = wB * wF * (mB - mF) ** 2;
    if (between > best) { best = between; th = t; }
  }
  return th;
}

// Labels 4-connected components of mask (1 = set). Returns { labels, sizes }.
function components(mask, w, h) {
  const labels = new Int32Array(w * h).fill(-1);
  const sizes = [];
  const q = new Int32Array(w * h);
  for (let s = 0; s < w * h; s++) {
    if (!mask[s] || labels[s] >= 0) continue;
    const id = sizes.length;
    let head = 0, tail = 0, n = 0;
    q[tail++] = s; labels[s] = id;
    while (head < tail) {
      const p = q[head++]; n++;
      const x = p % w, y = (p - x) / w;
      if (x > 0 && mask[p - 1] && labels[p - 1] < 0) { labels[p - 1] = id; q[tail++] = p - 1; }
      if (x < w - 1 && mask[p + 1] && labels[p + 1] < 0) { labels[p + 1] = id; q[tail++] = p + 1; }
      if (y > 0 && mask[p - w] && labels[p - w] < 0) { labels[p - w] = id; q[tail++] = p - w; }
      if (y < h - 1 && mask[p + w] && labels[p + w] < 0) { labels[p + w] = id; q[tail++] = p + w; }
    }
    sizes.push(n);
  }
  return { labels, sizes };
}

function hull(pts) {
  pts = [...pts].sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  const cr = (o, a, b) => (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]);
  const lo = [], up = [];
  for (const p of pts) { while (lo.length > 1 && cr(lo[lo.length - 2], lo[lo.length - 1], p) <= 0) lo.pop(); lo.push(p); }
  for (const p of pts.reverse()) { while (up.length > 1 && cr(up[up.length - 2], up[up.length - 1], p) <= 0) up.pop(); up.push(p); }
  return lo.slice(0, -1).concat(up.slice(0, -1));
}

const quadArea = (q) => { let s = 0; for (let i = 0; i < 4; i++) { const a = q[i], b = q[(i + 1) % 4]; s += a[0] * b[1] - b[0] * a[1]; } return Math.abs(s) / 2; };

// Corners of the sheet: the largest bright region, its convex hull, and the biggest
// quadrilateral on that hull. Corners in image pixels, ordered around the sheet.
export function detectPaper(imgData, w, h) {
  const lum = luminance(imgData.data, w * h);
  const th = otsu(lum, 3);
  const mask = new Uint8Array(w * h);
  for (let i = 0; i < w * h; i++) mask[i] = lum[i] > th ? 1 : 0;
  const { labels, sizes } = components(mask, w, h);
  if (!sizes.length) return null;
  let best = 0;
  for (let i = 1; i < sizes.length; i++) if (sizes[i] > sizes[best]) best = i;
  if (sizes[best] < w * h * 0.08) return null;
  const edge = [];
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    const p = y * w + x;
    if (labels[p] !== best) continue;
    if (x === 0 || y === 0 || x === w - 1 || y === h - 1 || labels[p - 1] !== best || labels[p + 1] !== best || labels[p - w] !== best || labels[p + w] !== best) edge.push([x + 0.5, y + 0.5]);
  }
  const H = hull(edge);
  if (H.length < 4) return null;
  // Start from the extremes along the diagonals, then improve one corner at a time.
  const pick = (f) => H.reduce((bi, p, i) => (f(p) > f(H[bi]) ? i : bi), 0);
  let idx = [pick((p) => -p[0] - p[1]), pick((p) => p[0] - p[1]), pick((p) => p[0] + p[1]), pick((p) => -p[0] + p[1])];
  for (let it = 0; it < 4; it++) {
    let changed = false;
    for (let k = 0; k < 4; k++) {
      let bestA = quadArea(idx.map((i) => H[i])), bestI = idx[k];
      for (let i = 0; i < H.length; i++) {
        const trial = [...idx]; trial[k] = i;
        const a = quadArea(trial.map((j) => H[j]));
        if (a > bestA + 1e-6) { bestA = a; bestI = i; }
      }
      if (bestI !== idx[k]) { idx[k] = bestI; changed = true; }
    }
    if (!changed) break;
  }
  return orderCorners(idx.map((i) => [...H[i]]));
}

// Clockwise on screen starting at the top-left-most corner.
export function orderCorners(q) {
  const c = [q.reduce((s, p) => s + p[0], 0) / 4, q.reduce((s, p) => s + p[1], 0) / 4];
  const s = [...q].sort((a, b) => Math.atan2(a[1] - c[1], a[0] - c[0]) - Math.atan2(b[1] - c[1], b[0] - c[0]));
  let start = 0;
  for (let i = 1; i < 4; i++) if (s[i][0] + s[i][1] < s[start][0] + s[start][1]) start = i;
  return [0, 1, 2, 3].map((k) => s[(start + k) % 4]);
}

// Homography H (3×3, row-major) with H·[u, v, 1] ∝ [x, y, 1] for the 4 pairs.
export function homography(from, to) {
  const A = [], b = [];
  for (let i = 0; i < 4; i++) {
    const [u, v] = from[i], [x, y] = to[i];
    A.push([u, v, 1, 0, 0, 0, -u * x, -v * x]); b.push(x);
    A.push([0, 0, 0, u, v, 1, -u * y, -v * y]); b.push(y);
  }
  // Gaussian elimination with partial pivoting.
  for (let c = 0; c < 8; c++) {
    let p = c;
    for (let r = c + 1; r < 8; r++) if (Math.abs(A[r][c]) > Math.abs(A[p][c])) p = r;
    [A[c], A[p]] = [A[p], A[c]]; [b[c], b[p]] = [b[p], b[c]];
    for (let r = c + 1; r < 8; r++) {
      const f = A[r][c] / A[c][c];
      for (let k = c; k < 8; k++) A[r][k] -= f * A[c][k];
      b[r] -= f * b[c];
    }
  }
  const x = new Array(8).fill(0);
  for (let r = 7; r >= 0; r--) { let s = b[r]; for (let k = r + 1; k < 8; k++) s -= A[r][k] * x[k]; x[r] = s / A[r][r]; }
  return [...x, 1];
}

// Sheet size (mm) in the orientation the photo shows it: the longer pair of quad sides
// gets the paper's long side.
export function sheetSize(q, paper) {
  const d = (a, b) => Math.hypot(a[0] - b[0], a[1] - b[1]);
  const horiz = (d(q[0], q[1]) + d(q[3], q[2])) / 2, vert = (d(q[1], q[2]) + d(q[0], q[3])) / 2;
  const [L, S] = [Math.max(paper[2], paper[3]), Math.min(paper[2], paper[3])];
  return horiz >= vert ? [L, S] : [S, L];
}

// Top view of the sheet at PX_PER_MM: { data (RGBA), w, h }.
export function rectify(src, sw, sh, quad, W, H, k = PX_PER_MM) {
  const Hm = homography([[0, 0], [W, 0], [W, H], [0, H]], quad);
  const w = Math.round(W * k), h = Math.round(H * k);
  const out = new Uint8ClampedArray(w * h * 4);
  for (let y = 0; y < h; y++) {
    const v = (y + 0.5) / k;
    for (let x = 0; x < w; x++) {
      const u = (x + 0.5) / k;
      const z = Hm[6] * u + Hm[7] * v + Hm[8];
      const fx = (Hm[0] * u + Hm[1] * v + Hm[2]) / z - 0.5, fy = (Hm[3] * u + Hm[4] * v + Hm[5]) / z - 0.5;
      const x0 = Math.max(0, Math.min(sw - 2, Math.floor(fx))), y0 = Math.max(0, Math.min(sh - 2, Math.floor(fy)));
      const tx = Math.max(0, Math.min(1, fx - x0)), ty = Math.max(0, Math.min(1, fy - y0));
      const o = (y * w + x) * 4;
      for (let c = 0; c < 3; c++) {
        const a = src[(y0 * sw + x0) * 4 + c], b = src[(y0 * sw + x0 + 1) * 4 + c];
        const cc = src[((y0 + 1) * sw + x0) * 4 + c], d = src[((y0 + 1) * sw + x0 + 1) * 4 + c];
        out[o + c] = (a * (1 - tx) + b * tx) * (1 - ty) + (cc * (1 - tx) + d * tx) * ty;
      }
      out[o + 3] = 255;
    }
  }
  return { data: out, w, h };
}

// 2D Euclidean distance transform (squared, in pixels) to the nearest set pixel.
function edt(mask, w, h) {
  const INF = 1e20, f = new Float64Array(w * h);
  for (let i = 0; i < w * h; i++) f[i] = mask[i] ? 0 : INF;
  const n = Math.max(w, h);
  const z = new Float64Array(n + 1), v = new Int32Array(n), d = new Float64Array(n), g = new Float64Array(n);
  const pass = (len, get, set) => {
    let k = 0; v[0] = 0; z[0] = -INF; z[1] = INF;
    for (let q = 1; q < len; q++) {
      let s = ((get(q) + q * q) - (get(v[k]) + v[k] * v[k])) / (2 * q - 2 * v[k]);
      while (s <= z[k]) { k--; s = ((get(q) + q * q) - (get(v[k]) + v[k] * v[k])) / (2 * q - 2 * v[k]); }
      k++; v[k] = q; z[k] = s; z[k + 1] = INF;
    }
    k = 0;
    for (let q = 0; q < len; q++) { while (z[k + 1] < q) k++; d[q] = (q - v[k]) ** 2 + get(v[k]); }
    for (let q = 0; q < len; q++) set(q, d[q]);
  };
  for (let x = 0; x < w; x++) { for (let y = 0; y < h; y++) g[y] = f[y * w + x]; pass(h, (q) => g[q], (q, val) => { f[q * w + x] = val; }); }
  for (let y = 0; y < h; y++) { for (let x = 0; x < w; x++) g[x] = f[y * w + x]; pass(w, (q) => g[q], (q, val) => { f[y * w + q] = val; }); }
  return f;
}

// Objects on the sheet: pixels that differ from the paper colour. Returns
// { mask, auto (threshold), count, boxes (mm) }; small specks are dropped, holes filled,
// then the mask is grown by `grow` mm.
export function objectMask(rect, { threshold = null, grow = 0, k = PX_PER_MM } = {}) {
  const { data, w, h } = rect;
  const n = w * h;
  // Paper colour: median of each channel.
  const med = [0, 1, 2].map((c) => {
    const hist = new Uint32Array(256);
    for (let i = 0; i < n; i += 3) hist[data[i * 4 + c]]++;
    let s = 0, half = Math.ceil(n / 3) / 2;
    for (let t = 0; t < 256; t++) { s += hist[t]; if (s >= half) return t; }
    return 255;
  });
  const dist = new Float32Array(n);
  for (let i = 0; i < n; i++) dist[i] = Math.min(255, Math.hypot(data[i * 4] - med[0], data[i * 4 + 1] - med[1], data[i * 4 + 2] - med[2]));
  const auto = Math.max(24, Math.min(160, otsu(dist, 2)));
  const th = threshold ?? auto;
  const m = Math.round(MARGIN_MM * k);
  let mask = new Uint8Array(n);
  for (let y = m; y < h - m; y++) for (let x = m; x < w - m; x++) { const i = y * w + x; mask[i] = dist[i] > th ? 1 : 0; }
  // Drop specks (< 20 mm²).
  const { labels, sizes } = components(mask, w, h);
  const minPx = 20 * k * k;
  for (let i = 0; i < n; i++) if (mask[i] && sizes[labels[i]] < minPx) mask[i] = 0;
  // Fill holes: background not reachable from the border belongs to an object.
  const bg = new Uint8Array(n);
  const q = new Int32Array(n);
  let head = 0, tail = 0;
  const seed = (i) => { if (!mask[i] && !bg[i]) { bg[i] = 1; q[tail++] = i; } };
  for (let x = 0; x < w; x++) { seed(x); seed((h - 1) * w + x); }
  for (let y = 0; y < h; y++) { seed(y * w); seed(y * w + w - 1); }
  while (head < tail) {
    const p = q[head++], x = p % w, y = (p - x) / w;
    if (x > 0) seed(p - 1); if (x < w - 1) seed(p + 1); if (y > 0) seed(p - w); if (y < h - 1) seed(p + w);
  }
  for (let i = 0; i < n; i++) if (!bg[i]) mask[i] = 1;
  if (grow > 0) {
    const d2 = edt(mask, w, h), lim = (grow * k) ** 2;
    const g = new Uint8Array(n);
    for (let i = 0; i < n; i++) g[i] = d2[i] <= lim ? 1 : 0;
    mask = g;
  }
  const comp = components(mask, w, h);
  const boxes = comp.sizes.map(() => [Infinity, Infinity, -Infinity, -Infinity]);
  for (let i = 0; i < n; i++) {
    const l = comp.labels[i];
    if (l < 0) continue;
    const x = i % w, y = (i - x) / w, b = boxes[l];
    b[0] = Math.min(b[0], x); b[1] = Math.min(b[1], y); b[2] = Math.max(b[2], x + 1); b[3] = Math.max(b[3], y + 1);
  }
  return { mask, auto, count: comp.sizes.length, boxes: boxes.map((b) => b.map((v) => v / k)) };
}

// ---------------------------------------------------------------- dialog

export async function photoFitDialog() {
  const st = { paper: 'a4', out: 'tray', clr: 0.8, depth: 15, floor: 2, margin: 8, notch: 1, plate: 3, thick: 5, ...store.getSetting('photoFit', {}) };
  let img = null, src = null, quad = null, rect = null, res = null, threshold = null;
  const photoCv = el('canvas', { class: 'pf-photo' });
  const topCv = el('canvas', { class: 'pf-top' });
  const info = el('div', { class: 'hint' }, 'A4 などの白い紙に物をのせ、紙の 4 隅が写るように真上から撮影した写真を選んでください。');
  const thBox = el('div');
  const outBox = el('div');
  const view = { s: 1 };

  const drawPhoto = () => {
    if (!img) return;
    const W = photoCv.clientWidth || 320;
    const scale = Math.min(W / src.w, (innerHeight * 0.38) / src.h);
    const dpr = Math.min(devicePixelRatio || 1, 2);
    photoCv.style.height = `${Math.round(src.h * scale)}px`;
    photoCv.width = Math.round(src.w * scale * dpr); photoCv.height = Math.round(src.h * scale * dpr);
    view.s = scale * dpr;
    const ctx = photoCv.getContext('2d');
    ctx.drawImage(img, 0, 0, photoCv.width, photoCv.height);
    if (!quad) return;
    ctx.strokeStyle = '#ffb020'; ctx.lineWidth = 2 * dpr;
    ctx.beginPath();
    quad.forEach(([x, y], i) => (i ? ctx.lineTo(x * view.s, y * view.s) : ctx.moveTo(x * view.s, y * view.s)));
    ctx.closePath(); ctx.stroke();
    for (const [x, y] of quad) {
      ctx.beginPath(); ctx.arc(x * view.s, y * view.s, 9 * dpr, 0, Math.PI * 2);
      ctx.fillStyle = '#ffb020cc'; ctx.fill(); ctx.strokeStyle = '#111418'; ctx.lineWidth = 2 * dpr; ctx.stroke();
    }
  };

  const drawTop = () => {
    if (!rect) return;
    const W = topCv.clientWidth || 320;
    const scale = Math.min(W / rect.w, (innerHeight * 0.3) / rect.h);
    const dpr = Math.min(devicePixelRatio || 1, 2);
    topCv.style.height = `${Math.round(rect.h * scale)}px`;
    topCv.width = Math.round(rect.w * scale * dpr); topCv.height = Math.round(rect.h * scale * dpr);
    const ctx = topCv.getContext('2d');
    const tmp = document.createElement('canvas');
    tmp.width = rect.w; tmp.height = rect.h;
    const tctx = tmp.getContext('2d');
    const id = new ImageData(new Uint8ClampedArray(rect.data), rect.w, rect.h);
    if (res) for (let i = 0; i < res.mask.length; i++) if (res.mask[i]) { id.data[i * 4] = id.data[i * 4] * 0.4 + 255 * 0.6; id.data[i * 4 + 1] = id.data[i * 4 + 1] * 0.4 + 176 * 0.6; id.data[i * 4 + 2] *= 0.4; }
    tctx.putImageData(id, 0, 0);
    ctx.drawImage(tmp, 0, 0, topCv.width, topCv.height);
  };

  const analyze = () => {
    if (!src || !quad) return;
    const paper = PAPERS.find(([id]) => id === st.paper);
    const [W, H] = sheetSize(quad, paper);
    rect = rectify(src.data, src.w, src.h, quad, W, H);
    const grow = st.out === 'outline' ? 0 : st.clr;
    res = objectMask(rect, { threshold, grow });
    if (threshold == null) threshold = res.auto;
    renderTh();
    drawTop();
    if (!res.count) { info.textContent = '物が見つかりませんでした。しきい値を下げるか、紙と色の違う物で試してください。'; return; }
    const b = res.boxes.reduce((a, x) => [Math.min(a[0], x[0]), Math.min(a[1], x[1]), Math.max(a[2], x[2]), Math.max(a[3], x[3])], [Infinity, Infinity, -Infinity, -Infinity]);
    info.textContent = `${paper[1]}（${fmt(W)} × ${fmt(H)} mm）として計測 ・ 物 ${res.count} 個 ・ 全体 ${fmt(Math.round((b[2] - b[0]) * 10) / 10)} × ${fmt(Math.round((b[3] - b[1]) * 10) / 10)} mm` + (grow ? `（すき間 ${fmt(grow)} mm 込み）` : '');
  };
  let timer = 0;
  const later = () => { clearTimeout(timer); timer = setTimeout(analyze, 120); };

  const renderTh = () => {
    thBox.replaceChildren(el('div', { class: 'field' }, el('span', {}, `しきい値 ${Math.round(threshold ?? 0)}（物と紙の色の差）`),
      el('input', { type: 'range', class: 'range', min: 8, max: 200, value: Math.round(threshold ?? 40), onchange: (e) => { threshold = +e.target.value; later(); } })));
  };
  const renderOut = () => {
    const f = (key, label, min, step) => numField({ label, value: st[key], min, step, onChange: (v) => { st[key] = v; if (key === 'clr') later(); } });
    const rows = {
      tray: [el('div', { class: 'row' }, f('depth', '深さ mm', 1, 1), f('floor', '底の厚み mm', 0.6, 0.2), f('margin', '周りの余白 mm', 2, 1)),
        el('div', { class: 'row two', style: { marginTop: '6px' } }, f('clr', 'すき間 mm', 0, 0.1),
          el('label', { class: 'check' }, el('input', { type: 'checkbox', checked: !!st.notch, onchange: (e) => { st.notch = e.target.checked ? 1 : 0; } }), '指を入れる切り欠き'))],
      plate: [el('div', { class: 'row' }, f('plate', '板の厚み mm', 0.6, 0.2), f('margin', '周りの余白 mm', 2, 1), f('clr', 'すき間 mm', 0, 0.1))],
      outline: [el('div', { class: 'row two' }, f('thick', '厚み mm', 0.4, 0.5))],
    };
    outBox.replaceChildren(...rows[st.out]);
  };
  const chooseBtn = el('button', {
    type: 'button', class: 'btn accent', style: { width: '100%' },
    onclick: () => pickFile('image/*').then(async (file) => {
      if (!file) return;
      try {
        img = await loadImage(file);
        // Keep at most ~2400 px on the long side for sampling.
        const s = Math.min(1, 2400 / Math.max(img.naturalWidth, img.naturalHeight));
        const w = Math.round(img.naturalWidth * s), h = Math.round(img.naturalHeight * s);
        const cv = document.createElement('canvas'); cv.width = w; cv.height = h;
        const ctx = cv.getContext('2d', { willReadFrequently: true });
        ctx.drawImage(img, 0, 0, w, h);
        src = { data: ctx.getImageData(0, 0, w, h).data, w, h };
        // Detect on a small copy.
        const ds = Math.min(1, 512 / Math.max(w, h));
        const dw = Math.round(w * ds), dh = Math.round(h * ds);
        const small = document.createElement('canvas'); small.width = dw; small.height = dh;
        const sctx = small.getContext('2d', { willReadFrequently: true });
        sctx.drawImage(cv, 0, 0, dw, dh);
        const q = detectPaper(sctx.getImageData(0, 0, dw, dh), dw, dh);
        quad = q ? q.map(([x, y]) => [x / ds, y / ds]) : [[w * 0.1, h * 0.1], [w * 0.9, h * 0.1], [w * 0.9, h * 0.9], [w * 0.1, h * 0.9]];
        if (!q) toast('紙の 4 隅を見つけられませんでした。黄色い丸を紙の角に合わせてください', 3500);
        threshold = null;
        drawPhoto();
        analyze();
      } catch (e) { console.error(e); toast('写真を読み込めませんでした: ' + e.message, 3500); }
    }),
  }, icon('photo'), '写真を選ぶ');

  // Dragging the corner handles.
  let drag = -1;
  const local = (e) => { const r = photoCv.getBoundingClientRect(); return [(e.clientX - r.left) * (photoCv.width / r.width) / view.s, (e.clientY - r.top) * (photoCv.height / r.height) / view.s]; };
  photoCv.addEventListener('pointerdown', (e) => {
    if (!quad) return;
    const [x, y] = local(e);
    let bd = 40 / view.s * Math.min(devicePixelRatio || 1, 2);
    drag = -1;
    quad.forEach(([qx, qy], i) => { const d = Math.hypot(qx - x, qy - y); if (d < bd) { bd = d; drag = i; } });
    if (drag >= 0) { photoCv.setPointerCapture(e.pointerId); e.preventDefault(); }
  });
  photoCv.addEventListener('pointermove', (e) => {
    if (drag < 0) return;
    const [x, y] = local(e);
    quad[drag] = [Math.max(0, Math.min(src.w, x)), Math.max(0, Math.min(src.h, y))];
    drawPhoto();
  });
  const up = () => { if (drag >= 0) { drag = -1; quad = orderCorners(quad); drawPhoto(); later(); } };
  photoCv.addEventListener('pointerup', up);
  photoCv.addEventListener('pointercancel', up);

  renderOut();
  const body = [
    chooseBtn,
    el('div', { class: 'field' }, el('span', {}, '紙のサイズ'), segmented(PAPERS.map(([id, label]) => [id, label]), st.paper, (v) => { st.paper = v; later(); })),
    photoCv,
    el('p', { class: 'hint' }, '黄色い丸を紙の 4 隅に合わせると、遠近のゆがみを補正して実寸で測ります。'),
    topCv, info, thBox,
    el('div', { class: 'field' }, el('span', {}, '作るもの'), segmented([['tray', 'ぴったりトレー'], ['plate', '型板（切り抜き）'], ['outline', '輪郭の形']], st.out, (v) => { st.out = v; renderOut(); later(); })),
    outBox,
    el('p', { class: 'hint' }, '高さのある物は、真上から少し離れて撮ると誤差が小さくなります。影が濃いときはしきい値を上げてください。'),
  ];
  const ro = new ResizeObserver(() => { drawPhoto(); drawTop(); });
  const v = await openDialog({ title: '写真で採寸', body, buttons: [{ label: 'キャンセル', value: 'cancel' }, { label: '作成', value: 'ok', cls: 'accent' }], onOpen: () => ro.observe(photoCv) });
  ro.disconnect();
  clearTimeout(timer);
  store.setSetting('photoFit', st);
  if (v !== 'ok') return;
  if (!rect) { toast('写真が選ばれていません'); return; }
  analyze();
  if (!res?.count) { toast('物が見つからなかったため作成できません'); return; }
  buildFromMask(res, rect, st);
}

// Turns the measured mask into parts.
export function buildParts(res, rect, st, k = PX_PER_MM) {
  const tr = maskToShapes(res.mask, rect.w, rect.h, 1 / k);
  if (!tr.shapes.length) return null;
  const W = tr.width, H = tr.height;
  if (st.out === 'outline') {
    return [N('outline', { h: st.thick, shapes: tr.shapes, src: { type: 'photo' } }, [0, 0, st.thick / 2], { name: '採寸した形', color: '#ffb020' })];
  }
  const OW = W + 2 * st.margin, OH = H + 2 * st.margin;
  if (st.out === 'plate') {
    return [G('型板', [
      N('cbox', { w: r3(OW), d: r3(OH), h: st.plate, r: 4, cb: 0.4, ct: 0.4 }, [0, 0, st.plate / 2], { name: '板' }),
      N('outline', { h: st.plate + 2, shapes: tr.shapes, src: { type: 'photo' } }, [0, 0, st.plate / 2], { hole: true, name: '切り抜き' }),
    ], '#57c26a')];
  }
  const total = st.depth + st.floor;
  const kids = [
    N('cbox', { w: r3(OW), d: r3(OH), h: total, r: 4, cb: 0.4, ct: 0.6 }, [0, 0, total / 2], { name: 'トレー' }),
    N('outline', { h: st.depth + 1, shapes: tr.shapes, src: { type: 'photo' } }, [0, 0, st.floor + (st.depth + 1) / 2], { hole: true, name: 'ポケット' }),
  ];
  if (st.notch) {
    // A finger notch at both ends of each object, along its longer side. Boxes are in
    // sheet mm with y down; the shapes are centred on all objects with y up.
    const all = res.boxes.reduce((a, b) => [Math.min(a[0], b[0]), Math.min(a[1], b[1]), Math.max(a[2], b[2]), Math.max(a[3], b[3])], [Infinity, Infinity, -Infinity, -Infinity]);
    const cxD = (all[0] + all[2]) / 2, cyD = (all[1] + all[3]) / 2;
    const lift = Math.min(st.depth * 0.35, 6);
    for (const [bx0, by0, bx1, by1] of res.boxes) {
      const sx = bx1 - bx0, sy = by1 - by0;
      const dia = Math.min(22, Math.max(12, Math.min(sx, sy) * 0.7));
      const mid = [(bx0 + bx1) / 2, (by0 + by1) / 2];
      const ends = sx >= sy ? [[bx0, mid[1]], [bx1, mid[1]]] : [[mid[0], by0], [mid[0], by1]];
      for (const [ex, ey] of ends) {
        kids.push(N('cylinder', { dia: r3(dia), h: st.depth + 1 - lift, seg: 48 }, [r3(ex - cxD), r3(cyD - ey), r3(st.floor + lift + (st.depth + 1 - lift) / 2)], { hole: true, name: '指の切り欠き' }));
      }
    }
  }
  return [G('ぴったりトレー', kids, '#4f9dff')];
}

function buildFromMask(res, rect, st) {
  const nodes = buildParts(res, rect, st);
  if (!nodes) { toast('輪郭を作れませんでした'); return; }
  app.checkpoint();
  for (const n of nodes) { app.freeSpot(n); app.S.doc.nodes.push(n); app.dropToFloor(n); }
  app.S.sel = nodes.map((n) => n.id);
  app.commit();
  app.vp.view('iso', app.S.sel);
  toast(st.out === 'tray' ? 'ぴったりトレーを作りました' : st.out === 'plate' ? '型板を作りました' : '採寸した形を作りました', 2500);
}
