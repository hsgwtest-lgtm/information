// Bitmap → extrudable outlines. Used for Japanese text (rendered with the device's
// own fonts), logos / drawings from photos, and SVG files.
//
// Outline format (stored in node params): [{ o: [[x, y], ...], h: [[[x, y], ...], ...] }]
// in millimetres, y up, centered on the origin.
import { SVGLoader } from '../../vendor/vendor.js';

// ---- mask → loops -----------------------------------------------------------

// Directed pixel-boundary edges, linked into closed loops. Each loop keeps the
// filled pixels on the same side, so outer boundaries and holes wind oppositely.
function traceLoops(mask, w, h) {
  const filled = (x, y) => x >= 0 && y >= 0 && x < w && y < h && mask[y * w + x] === 1;
  const W = w + 1;
  const out = new Map(); // vertex -> [edge]
  const edges = [];
  const add = (x0, y0, x1, y1) => {
    const e = { a: y0 * W + x0, b: y1 * W + x1, used: false };
    edges.push(e);
    if (!out.has(e.a)) out.set(e.a, []);
    out.get(e.a).push(e);
  };
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      if (!filled(x, y)) continue;
      if (!filled(x, y - 1)) add(x, y, x + 1, y);
      if (!filled(x + 1, y)) add(x + 1, y, x + 1, y + 1);
      if (!filled(x, y + 1)) add(x + 1, y + 1, x, y + 1);
      if (!filled(x - 1, y)) add(x, y + 1, x, y);
    }
  }
  const xy = (v) => [v % W, Math.floor(v / W)];
  const loops = [];
  for (const start of edges) {
    if (start.used) continue;
    const loop = [];
    let e = start;
    while (e && !e.used) {
      e.used = true;
      loop.push(xy(e.a));
      const cands = out.get(e.b).filter((c) => !c.used);
      if (cands.length <= 1) { e = cands[0]; continue; }
      // Saddle (two diagonal pixels): always take the right turn so loops never cross.
      const [ax, ay] = xy(e.a), [bx, by] = xy(e.b);
      const dx = bx - ax, dy = by - ay;
      e = cands.find((c) => { const [cx, cy] = xy(c.b); return (dx * (cy - by) - dy * (cx - bx)) > 0; }) || cands[0];
    }
    if (loop.length >= 4) loops.push(loop);
  }
  return loops;
}

function area(pts) {
  let a = 0;
  for (let i = 0; i < pts.length; i++) {
    const [x1, y1] = pts[i], [x2, y2] = pts[(i + 1) % pts.length];
    a += x1 * y2 - x2 * y1;
  }
  return a / 2;
}

// Replace pixel staircases with their segment midpoints; keep real corners.
function smoothStaircase(loop) {
  // Collapse collinear runs first.
  const c = loop.filter((p, i) => {
    const a = loop[(i + loop.length - 1) % loop.length], b = loop[(i + 1) % loop.length];
    return (p[0] - a[0]) * (b[1] - p[1]) - (p[1] - a[1]) * (b[0] - p[0]) !== 0;
  });
  const n = c.length;
  const len = (i) => { const a = c[i], b = c[(i + 1) % n]; return Math.abs(b[0] - a[0]) + Math.abs(b[1] - a[1]); };
  const outPts = [];
  for (let i = 0; i < n; i++) {
    const prevShort = len((i + n - 1) % n) <= 2, nextShort = len(i) <= 2;
    if (!prevShort && !nextShort) outPts.push(c[i]);
    if (len(i) <= 2) { const a = c[i], b = c[(i + 1) % n]; outPts.push([(a[0] + b[0]) / 2, (a[1] + b[1]) / 2]); }
  }
  return outPts.length >= 3 ? outPts : c;
}

// Douglas–Peucker on a closed loop.
function simplify(pts, eps) {
  if (pts.length < 8) return pts;
  // Split at the two most distant points so the closed loop becomes two open polylines.
  let far = 0, fd = -1;
  for (let i = 1; i < pts.length; i++) { const d = (pts[i][0] - pts[0][0]) ** 2 + (pts[i][1] - pts[0][1]) ** 2; if (d > fd) { fd = d; far = i; } }
  const dp = (seg) => {
    if (seg.length < 3) return seg;
    const [a, b] = [seg[0], seg[seg.length - 1]];
    const dx = b[0] - a[0], dy = b[1] - a[1], L = Math.hypot(dx, dy) || 1;
    let idx = 0, md = -1;
    for (let i = 1; i < seg.length - 1; i++) {
      const d = Math.abs(dy * seg[i][0] - dx * seg[i][1] + b[0] * a[1] - b[1] * a[0]) / L;
      if (d > md) { md = d; idx = i; }
    }
    if (md <= eps) return [a, b];
    const l = dp(seg.slice(0, idx + 1)), r = dp(seg.slice(idx));
    return [...l.slice(0, -1), ...r];
  };
  const first = dp(pts.slice(0, far + 1));
  const second = dp([...pts.slice(far), pts[0]]);
  return [...first.slice(0, -1), ...second.slice(0, -1)];
}

function pointInPoly([x, y], poly) {
  let inside = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const [xi, yi] = poly[i], [xj, yj] = poly[j];
    if ((yi > y) !== (yj > y) && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) inside = !inside;
  }
  return inside;
}

// Group loops (already in mm, y up) into outer shapes with holes.
function toShapes(loops, minArea) {
  const withArea = loops.map((l) => ({ l, a: area(l) })).filter((x) => Math.abs(x.a) >= minArea);
  const outers = withArea.filter((x) => x.a > 0).map((x) => ({ o: x.l, a: x.a, h: [] }));
  for (const hole of withArea.filter((x) => x.a < 0)) {
    const probe = hole.l[0];
    let best = null;
    for (const o of outers) if ((!best || o.a < best.a) && pointInPoly(probe, o.o)) best = o;
    if (best) best.h.push(hole.l);
  }
  return outers.map(({ o, h }) => ({ o, h }));
}

const r2 = (v) => Math.round(v * 100) / 100;

function center(shapes) {
  let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
  for (const s of shapes) for (const [x, y] of s.o) { x0 = Math.min(x0, x); y0 = Math.min(y0, y); x1 = Math.max(x1, x); y1 = Math.max(y1, y); }
  const cx = (x0 + x1) / 2, cy = (y0 + y1) / 2;
  const mv = (l) => l.map(([x, y]) => [r2(x - cx), r2(y - cy)]);
  return { shapes: shapes.map((s) => ({ o: mv(s.o), h: s.h.map(mv) })), width: x1 - x0, height: y1 - y0 };
}

// mask (1 = solid) → centered shapes, with `mmPerPx` scaling.
export function maskToShapes(mask, w, h, mmPerPx) {
  const loops = traceLoops(mask, w, h).map((l) => simplify(smoothStaircase(l), 0.6))
    // Image y goes down; flip so the result reads correctly from above. The flip
    // mirrors the winding, so reverse to get counter-clockwise outers / clockwise holes.
    .map((l) => l.map(([x, y]) => [x * mmPerPx, (h - y) * mmPerPx]).reverse())
    .filter((l) => l.length >= 3);
  const shapes = toShapes(loops, 3 * mmPerPx * mmPerPx);
  return center(shapes);
}

export const countPoints = (shapes) => shapes.reduce((n, s) => n + s.o.length + s.h.reduce((m, h) => m + h.length, 0), 0);

// ---- sources ------------------------------------------------------------------

export const FONTS = {
  gothic: ['ゴシック', '"Hiragino Sans", "Hiragino Kaku Gothic ProN", "Noto Sans JP", "Noto Sans CJK JP", "Yu Gothic", Meiryo, sans-serif'],
  mincho: ['明朝', '"Hiragino Mincho ProN", "Yu Mincho", "Noto Serif JP", "Noto Serif CJK JP", serif'],
  maru: ['丸ゴシック', '"Hiragino Maru Gothic ProN", "Hiragino Maru Gothic Pro", "Rounded Mplus 1c", "Hiragino Sans", sans-serif'],
};

// Render text with the device fonts and trace it. size = cap height of one line (mm).
export function textToShapes({ text, font = 'gothic', bold = true, size = 10, align = 'center' }) {
  const px = 160;
  const lines = String(text || '').split('\n');
  const family = (FONTS[font] || FONTS.gothic)[1];
  const cv = document.createElement('canvas');
  const ctx = cv.getContext('2d', { willReadFrequently: true });
  const fontCss = `${bold ? '700' : '400'} ${px}px ${family}`;
  ctx.font = fontCss;
  const lineH = px * 1.25;
  const widths = lines.map((l) => ctx.measureText(l || ' ').width);
  const pad = Math.ceil(px * 0.2);
  cv.width = Math.ceil(Math.max(...widths, 1)) + pad * 2;
  cv.height = Math.ceil(lineH * lines.length) + pad * 2;
  ctx.font = fontCss;
  ctx.fillStyle = '#000';
  ctx.textBaseline = 'middle';
  ctx.textAlign = align;
  const x = align === 'center' ? cv.width / 2 : align === 'right' ? cv.width - pad : pad;
  lines.forEach((l, i) => ctx.fillText(l, x, pad + lineH * (i + 0.5)));
  const img = ctx.getImageData(0, 0, cv.width, cv.height).data;
  const mask = new Uint8Array(cv.width * cv.height);
  for (let i = 0; i < mask.length; i++) mask[i] = img[i * 4 + 3] > 110 ? 1 : 0;
  return maskToShapes(mask, cv.width, cv.height, size / px);
}

export async function loadImage(file) {
  const url = URL.createObjectURL(file);
  try {
    const img = new Image();
    img.src = url;
    await img.decode();
    return img;
  } finally {
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
}

// Grayscale 0..1 (0 = black) with transparency treated as white.
export function imageLuminance(img, maxSide) {
  const s = Math.min(1, maxSide / Math.max(img.naturalWidth, img.naturalHeight));
  const w = Math.max(1, Math.round(img.naturalWidth * s)), h = Math.max(1, Math.round(img.naturalHeight * s));
  const cv = document.createElement('canvas');
  cv.width = w; cv.height = h;
  const ctx = cv.getContext('2d', { willReadFrequently: true });
  ctx.fillStyle = '#fff';
  ctx.fillRect(0, 0, w, h);
  ctx.drawImage(img, 0, 0, w, h);
  const d = ctx.getImageData(0, 0, w, h).data;
  const lum = new Float32Array(w * h);
  for (let i = 0; i < lum.length; i++) lum[i] = (0.2126 * d[i * 4] + 0.7152 * d[i * 4 + 1] + 0.0722 * d[i * 4 + 2]) / 255;
  return { lum, w, h };
}

export function imageToShapes(img, { threshold = 0.5, invert = false, width = 50, maxSide = 500 }) {
  const { lum, w, h } = imageLuminance(img, maxSide);
  const mask = new Uint8Array(w * h);
  for (let i = 0; i < mask.length; i++) mask[i] = (lum[i] < threshold) !== invert ? 1 : 0;
  return maskToShapes(mask, w, h, width / w);
}

export function svgToShapes(text, { width = 50 }) {
  const data = new SVGLoader().parse(text);
  const raw = [];
  for (const path of data.paths) {
    const fill = path.userData?.style?.fill;
    if (fill === 'none') continue;
    for (const sh of SVGLoader.createShapes(path)) {
      const { shape, holes } = sh.extractPoints(16);
      raw.push({ o: shape.map((p) => [p.x, -p.y]), h: holes.map((hl) => hl.map((p) => [p.x, -p.y])) });
    }
  }
  if (!raw.length) return null;
  let x0 = Infinity, x1 = -Infinity;
  for (const s of raw) for (const [x] of s.o) { x0 = Math.min(x0, x); x1 = Math.max(x1, x); }
  const k = width / Math.max(x1 - x0, 1e-6);
  const scaled = raw.map((s) => ({ o: s.o.map(([x, y]) => [x * k, y * k]), h: s.h.map((l) => l.map(([x, y]) => [x * k, y * k])) }));
  return center(scaled);
}
