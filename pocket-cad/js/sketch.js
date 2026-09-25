// 2D outline editor used by "スケッチ押し出し" and "回転体".
// Tap empty space to add a point (inserted into the nearest edge when close to one),
// drag a point or a Bézier handle to move it, drag empty space to pan, pinch to zoom.
// Each edge (selected point -> next point) can be switched between straight and Bézier.
import { el, openDialog, numField, segmented, fmt } from './ui.js';
import { splitBezier, edgeSamples, flattenSketch, normalizeCurves } from './bezier.js';

const r3 = (v) => Math.round(v * 1000) / 1000;
const K = 0.5523; // circle approximation factor for cubic Béziers

function roundedRect(w, h, r) {
  const x = w / 2, y = h / 2, k = r * K;
  const pts = [[-x + r, -y], [x - r, -y], [x, -y + r], [x, y - r], [x - r, y], [-x + r, y], [-x, y - r], [-x, -y + r]];
  const curves = [null, [[x - r + k, -y], [x, -y + r - k]], null, [[x, y - r + k], [x - r + k, y]],
    null, [[-x + r - k, y], [-x, y - r + k]], null, [[-x, -y + r - k], [-x + r - k, -y]]];
  return { pts, curves };
}

function circle(r) {
  const k = r * K;
  return {
    pts: [[r, 0], [0, r], [-r, 0], [0, -r]],
    curves: [[[r, k], [k, r]], [[-k, r], [-r, k]], [[-r, -k], [-k, -r]], [[k, -r], [r, -k]]],
  };
}

const PRESETS = {
  extrude: {
    '四角': () => [[-10, -10], [10, -10], [10, 10], [-10, 10]],
    '角丸': () => roundedRect(30, 20, 4),
    '円': () => circle(10),
    'L字': () => [[0, 0], [30, 0], [30, 5], [5, 5], [5, 30], [0, 30]],
    'ハート': () => ({ pts: [[0, -12], [0, 5]], curves: [[[14, -2], [10, 16]], [[-10, 16], [-14, -2]]] }),
    '星': () => Array.from({ length: 10 }, (_, i) => { const r = i % 2 ? 5 : 12, a = i / 10 * Math.PI * 2 + Math.PI / 2; return [r3(r * Math.cos(a)), r3(r * Math.sin(a))]; }),
    '台形': () => [[-15, 0], [15, 0], [8, 12], [-8, 12]],
  },
  revolve: {
    'カップ': () => [[0, 0], [15, 0], [18, 30], [16, 30], [13.2, 2], [0, 2]],
    'ボトル': () => ({ pts: [[0, 0], [12, 0], [12, 25], [5, 35], [5, 42], [0, 42]], curves: [null, null, [[12, 31], [5, 29]], null, null, null] }),
    'つまみ': () => [[0, 0], [10, 0], [10, 3], [4, 6], [4, 20], [0, 20]],
    'リング': () => [[8, 0], [12, 0], [12, 4], [8, 4]],
    '花瓶': () => ({ pts: [[0, 0], [12, 0], [10, 40], [9, 40], [11, 2], [0, 2]], curves: [null, [[22, 12], [4, 28]], null, [[3, 28], [21, 12]], null, null] }),
  },
};

function segIntersect(a, b, c, d) {
  const o = (p, q, r) => Math.sign((q[0] - p[0]) * (r[1] - p[1]) - (q[1] - p[1]) * (r[0] - p[0]));
  return o(a, b, c) !== o(a, b, d) && o(c, d, a) !== o(c, d, b) && o(a, b, c) !== 0 && o(a, b, d) !== 0;
}
function selfIntersects(pts) {
  const n = pts.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 2; j < n; j++) {
      if (i === 0 && j === n - 1) continue;
      if (segIntersect(pts[i], pts[(i + 1) % n], pts[j], pts[(j + 1) % n])) return true;
    }
  }
  return false;
}

// Catmull-Rom style handles: a smooth curve through the neighbouring points.
function autoHandles(pts, i) {
  const n = pts.length;
  const prev = pts[(i - 1 + n) % n], a = pts[i], b = pts[(i + 1) % n], next = pts[(i + 2) % n];
  let c1 = [a[0] + (b[0] - prev[0]) / 6, a[1] + (b[1] - prev[1]) / 6];
  let c2 = [b[0] - (next[0] - a[0]) / 6, b[1] - (next[1] - a[1]) / 6];
  if (n < 3 || (Math.hypot(c1[0] - a[0], c1[1] - a[1]) < 1e-6 && Math.hypot(c2[0] - b[0], c2[1] - b[1]) < 1e-6)) {
    // No usable neighbours: bow the edge sideways so the curve is visible.
    const dx = b[0] - a[0], dy = b[1] - a[1];
    c1 = [a[0] + dx / 3 + dy * 0.25, a[1] + dy / 3 - dx * 0.25];
    c2 = [a[0] + dx * 2 / 3 + dy * 0.25, a[1] + dy * 2 / 3 - dx * 0.25];
  }
  return [c1.map(r3), c2.map(r3)];
}

export function editSketch({ pts, curves: initCurves, mode, title }) {
  let points = pts.map((p) => [...p]);
  let curves = normalizeCurves(points, initCurves).map((c) => c && c.map((h) => [...h]));
  const history = [];
  let sel = points.length - 1;
  let selHandle = null; // { e: edge index, k: 0 | 1 }
  let snap = 1;
  let smooth = true;
  const revolve = mode === 'revolve';

  const canvas = el('canvas');
  const wrap = el('div', { class: 'sketch-wrap' }, canvas);
  const status = el('div', { class: 'hint' });
  const coordRow = el('div', { class: 'row two', style: { marginTop: '8px' } });

  // view: screen = (world - center) * scale + canvas center
  const view = { cx: 0, cy: 0, scale: 4 };
  const ctx = canvas.getContext('2d');
  let dpr = 1, W = 0, H = 0;

  const pushHistory = () => { history.push(JSON.stringify([points, curves])); if (history.length > 100) history.shift(); };
  const snapV = (v) => Math.round(v / snap) * snap;
  const toScreen = ([x, y]) => [(x - view.cx) * view.scale + W / 2, H / 2 - (y - view.cy) * view.scale];
  const toWorld = (sx, sy) => [(sx - W / 2) / view.scale + view.cx, (H / 2 - sy) / view.scale + view.cy];
  const flat = () => flattenSketch(points, curves);
  const edgeEnd = (e) => (e + 1) % points.length;
  // The point a handle hangs from: c1 belongs to the edge start, c2 to its end.
  const handleAnchor = (e, k) => points[k === 0 ? e : edgeEnd(e)];

  function fit() {
    const all = [...flat(), ...curves.flatMap((c) => c || [])];
    if (!all.length) { view.cx = 0; view.cy = 0; view.scale = 4; return; }
    let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
    for (const [x, y] of all) { x0 = Math.min(x0, x); y0 = Math.min(y0, y); x1 = Math.max(x1, x); y1 = Math.max(y1, y); }
    if (revolve) x0 = Math.min(x0, 0);
    view.cx = (x0 + x1) / 2; view.cy = (y0 + y1) / 2;
    view.scale = Math.min(W / Math.max(x1 - x0, 10), H / Math.max(y1 - y0, 10)) * 0.75;
  }

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 3);
    W = wrap.clientWidth; H = wrap.clientHeight;
    canvas.width = W * dpr; canvas.height = H * dpr;
    draw();
  }

  function niceStep() {
    const target = 40 / view.scale; // ~40px between minor lines
    const pow = Math.pow(10, Math.floor(Math.log10(target)));
    for (const m of [1, 2, 5, 10]) if (pow * m >= target) return pow * m;
    return pow * 10;
  }

  function tracePath(poly, mirror = false) {
    ctx.beginPath();
    poly.forEach((p, i) => { const [sx, sy] = toScreen(mirror ? [-p[0], p[1]] : p); i ? ctx.lineTo(sx, sy) : ctx.moveTo(sx, sy); });
    ctx.closePath();
  }

  function draw() {
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.fillStyle = '#111418'; ctx.fillRect(0, 0, W, H);
    const step = niceStep();
    const [wx0, wy1] = toWorld(0, 0), [wx1, wy0] = toWorld(W, H);
    ctx.lineWidth = 1;
    for (let x = Math.floor(wx0 / step) * step; x <= wx1; x += step) {
      const [sx] = toScreen([x, 0]);
      ctx.strokeStyle = Math.abs(x / (step * 5) - Math.round(x / (step * 5))) < 1e-6 ? '#2e3540' : '#1d2229';
      ctx.beginPath(); ctx.moveTo(sx, 0); ctx.lineTo(sx, H); ctx.stroke();
    }
    for (let y = Math.floor(wy0 / step) * step; y <= wy1; y += step) {
      const [, sy] = toScreen([0, y]);
      ctx.strokeStyle = Math.abs(y / (step * 5) - Math.round(y / (step * 5))) < 1e-6 ? '#2e3540' : '#1d2229';
      ctx.beginPath(); ctx.moveTo(0, sy); ctx.lineTo(W, sy); ctx.stroke();
    }
    // axes
    const [ox, oy] = toScreen([0, 0]);
    ctx.strokeStyle = revolve ? '#6ea8ff' : '#f07a72'; ctx.lineWidth = revolve ? 2 : 1;
    if (revolve) ctx.setLineDash([6, 4]);
    ctx.beginPath(); ctx.moveTo(ox, 0); ctx.lineTo(ox, H); ctx.stroke();
    ctx.setLineDash([]);
    ctx.strokeStyle = '#79c27a'; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(0, oy); ctx.lineTo(W, oy); ctx.stroke();
    ctx.fillStyle = '#8b95a3'; ctx.font = '11px -apple-system, sans-serif';
    ctx.fillText(`グリッド ${fmt(step)} mm`, 8, H - 8);
    if (revolve) ctx.fillText('← 回転軸 (Z)', ox + 6, 14);

    const poly = flat();
    if (revolve && poly.length > 2) {
      tracePath(poly, true);
      ctx.fillStyle = '#ffffff0c'; ctx.fill();
    }
    const bad = poly.length > 3 && selfIntersects(poly);
    if (poly.length > 1) {
      tracePath(poly);
      ctx.fillStyle = bad ? '#ef5f5633' : '#ffb02026'; ctx.fill();
      ctx.strokeStyle = bad ? '#ef5f56' : '#ffb020'; ctx.lineWidth = 2; ctx.stroke();
    }
    // Highlight the edge the curve toggle acts on.
    if (sel >= 0 && points.length > 1) {
      const s = edgeSamples(points, curves, sel);
      ctx.beginPath();
      s.forEach(([x, y], i) => { const [sx, sy] = toScreen([x, y]); i ? ctx.lineTo(sx, sy) : ctx.moveTo(sx, sy); });
      const [ex, ey] = toScreen(points[edgeEnd(sel)]);
      ctx.lineTo(ex, ey);
      ctx.strokeStyle = '#fff'; ctx.lineWidth = 4; ctx.globalAlpha = 0.55; ctx.stroke(); ctx.globalAlpha = 1;
    }
    // Bézier handles
    curves.forEach((c, e) => {
      if (!c) return;
      c.forEach((h, k) => {
        const [ax, ay] = toScreen(handleAnchor(e, k)), [hx, hy] = toScreen(h);
        ctx.strokeStyle = '#6ea8ff'; ctx.lineWidth = 1.2;
        ctx.beginPath(); ctx.moveTo(ax, ay); ctx.lineTo(hx, hy); ctx.stroke();
        const on = selHandle && selHandle.e === e && selHandle.k === k;
        const r = on ? 7 : 5;
        ctx.fillStyle = on ? '#ffb020' : '#6ea8ff';
        ctx.fillRect(hx - r, hy - r, r * 2, r * 2);
        ctx.strokeStyle = '#111418'; ctx.lineWidth = 1.5; ctx.strokeRect(hx - r, hy - r, r * 2, r * 2);
      });
    });
    points.forEach((p, i) => {
      const [sx, sy] = toScreen(p);
      const on = i === sel && !selHandle;
      ctx.beginPath(); ctx.arc(sx, sy, on ? 9 : 6, 0, Math.PI * 2);
      ctx.fillStyle = on ? '#ffb020' : '#e6e9ee'; ctx.fill();
      ctx.strokeStyle = '#111418'; ctx.lineWidth = 2; ctx.stroke();
    });
    status.textContent = bad ? '辺が交差しています。点やハンドルを動かして交差を解消してください。'
      : `${points.length} 点 ・ 空白をタップで点を追加、点や■ハンドルをドラッグで移動、2本指でズーム`;
    renderCoords();
    renderCurveBtn();
  }

  function renderCoords() {
    coordRow.replaceChildren();
    let p, label;
    if (selHandle && curves[selHandle.e]) { p = curves[selHandle.e][selHandle.k]; label = 'ハンドル '; }
    else if (sel >= 0 && points[sel]) { p = points[sel]; label = ''; }
    else return;
    const setAxis = (i) => (v) => {
      pushHistory();
      if (selHandle) setHandle(selHandle.e, selHandle.k, i === 0 ? [v, p[1]] : [p[0], v]);
      else movePoint(sel, i === 0 ? [v, p[1]] : [p[0], v]);
      draw();
    };
    coordRow.append(
      numField({ label: label + (revolve ? '半径 R' : 'X'), value: p[0], step: snap, axis: 'x', min: revolve ? 0 : -Infinity, onChange: setAxis(0) }),
      numField({ label: label + (revolve ? '高さ Z' : 'Y'), value: p[1], step: snap, axis: 'y', onChange: setAxis(1) }),
    );
  }

  // Moving a point carries its attached handles along.
  function movePoint(i, [x, y]) {
    const p = points[i];
    const dx = x - p[0], dy = y - p[1];
    p[0] = x; p[1] = y;
    const n = points.length;
    const shift = (h) => { h[0] = r3(h[0] + dx); h[1] = r3(h[1] + dy); if (revolve) h[0] = Math.max(0, h[0]); };
    if (curves[i]) shift(curves[i][0]);
    const prev = (i - 1 + n) % n;
    if (curves[prev]) shift(curves[prev][1]);
  }

  // Set a handle; with "smooth" on, the opposite handle across the anchor stays collinear.
  function setHandle(e, k, [x, y]) {
    if (revolve) x = Math.max(0, x);
    const h = curves[e][k];
    h[0] = x; h[1] = y;
    if (!smooth) return;
    const n = points.length;
    const anchor = handleAnchor(e, k);
    const oe = k === 0 ? (e - 1 + n) % n : edgeEnd(e);
    const ok = k === 0 ? 1 : 0;
    const other = curves[oe] && oe !== e ? curves[oe][ok] : null;
    if (!other) return;
    const dx = anchor[0] - x, dy = anchor[1] - y, len = Math.hypot(dx, dy);
    const olen = Math.hypot(other[0] - anchor[0], other[1] - anchor[1]);
    if (len < 1e-9) return;
    other[0] = r3(anchor[0] + dx / len * olen);
    other[1] = r3(anchor[1] + dy / len * olen);
    if (revolve) other[0] = Math.max(0, other[0]);
  }

  function toggleCurve() {
    if (sel < 0 || points.length < 2) return;
    pushHistory();
    curves[sel] = curves[sel] ? null : autoHandles(points, sel);
    if (!curves[sel] && selHandle?.e === sel) selHandle = null;
    draw();
  }

  function smoothAll() {
    if (points.length < 3) return;
    pushHistory();
    curves = points.map((_, i) => autoHandles(points, i));
    selHandle = null;
    draw();
  }

  function deletePoint() {
    if (sel < 0 || !points.length) return;
    pushHistory();
    const n = points.length, k = sel;
    const prev = (k - 1 + n) % n;
    const a = points[prev], b = points[(k + 1) % n];
    let merged = null;
    if (curves[prev] || curves[k]) {
      merged = [
        curves[prev] ? curves[prev][0] : [r3(a[0] + (b[0] - a[0]) / 3), r3(a[1] + (b[1] - a[1]) / 3)],
        curves[k] ? curves[k][1] : [r3(a[0] + (b[0] - a[0]) * 2 / 3), r3(a[1] + (b[1] - a[1]) * 2 / 3)],
      ];
    }
    points.splice(k, 1);
    curves.splice(k, 1);
    if (points.length) curves[(k - 1 + points.length) % points.length] = merged;
    sel = Math.min(k, points.length - 1);
    selHandle = null;
    draw();
  }

  // ---- pointer handling ----
  const ptrs = new Map();
  let gesture = null;
  const local = (e) => { const r = canvas.getBoundingClientRect(); return [e.clientX - r.left, e.clientY - r.top]; };
  // Nearest point or handle within reach.
  const hitAny = (sx, sy) => {
    let best = null, bd = 22 * 22;
    points.forEach((p, i) => {
      const [x, y] = toScreen(p); const d = (x - sx) ** 2 + (y - sy) ** 2;
      if (d < bd) { bd = d; best = { type: 'point', i }; }
    });
    curves.forEach((c, e) => c && c.forEach((h, k) => {
      const [x, y] = toScreen(h); const d = (x - sx) ** 2 + (y - sy) ** 2;
      if (d < bd) { bd = d; best = { type: 'handle', e, k }; }
    }));
    return best;
  };
  // Nearest edge and the curve parameter t there.
  const hitEdge = (sx, sy) => {
    let best = null, bd = 16;
    for (let i = 0; i < points.length && points.length > 1; i++) {
      const s = edgeSamples(points, curves, i);
      s.push([...points[edgeEnd(i)], 1]);
      for (let j = 0; j < s.length - 1; j++) {
        const [ax, ay] = toScreen(s[j]), [bx, by] = toScreen(s[j + 1]);
        const dx = bx - ax, dy = by - ay, l2 = dx * dx + dy * dy || 1;
        const u = Math.max(0, Math.min(1, ((sx - ax) * dx + (sy - ay) * dy) / l2));
        const d = Math.hypot(ax + u * dx - sx, ay + u * dy - sy);
        if (d < bd) { bd = d; best = { i, t: s[j][2] + (s[j + 1][2] - s[j][2]) * u }; }
      }
    }
    return best;
  };

  canvas.addEventListener('pointerdown', (e) => {
    canvas.setPointerCapture(e.pointerId);
    ptrs.set(e.pointerId, local(e));
    if (ptrs.size === 2) {
      const [a, b] = [...ptrs.values()];
      gesture = { type: 'pinch', d: Math.hypot(a[0] - b[0], a[1] - b[1]), scale: view.scale, mid: [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2], c: [view.cx, view.cy] };
      return;
    }
    const [sx, sy] = local(e);
    const hit = hitAny(sx, sy);
    if (hit?.type === 'point') { sel = hit.i; selHandle = null; gesture = { type: 'point', i: hit.i, moved: false }; draw(); }
    else if (hit?.type === 'handle') { selHandle = { e: hit.e, k: hit.k }; sel = hit.e; gesture = { type: 'handle', ...hit, moved: false }; draw(); }
    else gesture = { type: 'pan', start: [sx, sy], c: [view.cx, view.cy], moved: false };
  });
  canvas.addEventListener('pointermove', (e) => {
    if (!ptrs.has(e.pointerId)) return;
    ptrs.set(e.pointerId, local(e));
    if (!gesture) return;
    if (gesture.type === 'pinch' && ptrs.size >= 2) {
      const [a, b] = [...ptrs.values()];
      const d = Math.hypot(a[0] - b[0], a[1] - b[1]);
      view.scale = Math.max(0.2, Math.min(200, gesture.scale * d / gesture.d));
      const mid = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
      view.cx = gesture.c[0] - (mid[0] - gesture.mid[0]) / view.scale;
      view.cy = gesture.c[1] + (mid[1] - gesture.mid[1]) / view.scale;
      draw();
    } else if (gesture.type === 'point' || gesture.type === 'handle') {
      const [sx, sy] = local(e);
      let [x, y] = toWorld(sx, sy);
      x = snapV(x); y = snapV(y);
      if (revolve) x = Math.max(0, x);
      const cur = gesture.type === 'point' ? points[gesture.i] : curves[gesture.e]?.[gesture.k];
      if (cur && (cur[0] !== x || cur[1] !== y)) {
        if (!gesture.moved) pushHistory();
        gesture.moved = true;
        if (gesture.type === 'point') movePoint(gesture.i, [x, y]);
        else setHandle(gesture.e, gesture.k, [x, y]);
        draw();
      }
    } else if (gesture.type === 'pan') {
      const [sx, sy] = local(e);
      if (!gesture.moved && Math.hypot(sx - gesture.start[0], sy - gesture.start[1]) < 8) return;
      gesture.moved = true;
      view.cx = gesture.c[0] - (sx - gesture.start[0]) / view.scale;
      view.cy = gesture.c[1] + (sy - gesture.start[1]) / view.scale;
      draw();
    }
  });
  const up = (e) => {
    if (!ptrs.has(e.pointerId)) return;
    ptrs.delete(e.pointerId);
    if (gesture?.type === 'pan' && !gesture.moved && ptrs.size === 0) {
      const [sx, sy] = gesture.start;
      pushHistory();
      const edge = hitEdge(sx, sy);
      selHandle = null;
      if (edge && curves[edge.i]) {
        // Split the Bézier exactly where it was tapped; the shape does not change.
        const c = curves[edge.i];
        const t = Math.min(0.98, Math.max(0.02, edge.t));
        const [left, mid, right] = splitBezier(points[edge.i], c[0], c[1], points[edgeEnd(edge.i)], t);
        const rnd = (h) => h.map((q) => q.map(r3));
        curves[edge.i] = rnd(left);
        points.splice(edge.i + 1, 0, mid.map(r3));
        curves.splice(edge.i + 1, 0, rnd(right));
        sel = edge.i + 1;
      } else {
        let [x, y] = toWorld(sx, sy);
        x = snapV(x); y = snapV(y);
        if (revolve) x = Math.max(0, x);
        const at = edge ? edge.i + 1 : (sel >= 0 ? sel + 1 : points.length);
        points.splice(at, 0, [x, y]);
        curves.splice(at, 0, null);
        sel = at;
      }
      draw();
    }
    if (ptrs.size === 0) gesture = null;
    else if (gesture?.type === 'pinch') gesture = null;
  };
  canvas.addEventListener('pointerup', up);
  canvas.addEventListener('pointercancel', up);
  canvas.addEventListener('wheel', (e) => {
    e.preventDefault();
    view.scale = Math.max(0.2, Math.min(200, view.scale * Math.exp(-e.deltaY * 0.002)));
    draw();
  }, { passive: false });

  const btn = (label, fn, cls = '') => el('button', { type: 'button', class: 'btn ' + cls, onclick: fn }, label);
  const curveBtn = btn('', toggleCurve, 'accent');
  function renderCurveBtn() {
    const on = sel >= 0 && curves[sel];
    curveBtn.textContent = on ? '選択辺を直線に' : '選択辺をベジエ曲線に';
    curveBtn.disabled = sel < 0 || points.length < 2;
  }
  const curveTools = el('div', { class: 'sketch-tools' },
    curveBtn,
    btn('全体を滑らかに', smoothAll),
    btn('全て直線に', () => { pushHistory(); curves = points.map(() => null); selHandle = null; draw(); }),
    el('label', { class: 'check', style: { minHeight: '40px' } },
      el('input', { type: 'checkbox', checked: smooth, onchange: (e) => { smooth = e.target.checked; } }), 'ハンドルを滑らかに連動'));
  const tools = el('div', { class: 'sketch-tools' },
    btn('点を削除', deletePoint, 'danger'),
    btn('元に戻す', () => {
      if (!history.length) return;
      [points, curves] = JSON.parse(history.pop());
      sel = Math.min(sel, points.length - 1); selHandle = null; draw();
    }),
    btn('全体', () => { fit(); draw(); }),
    btn('全消去', () => { pushHistory(); points = []; curves = []; sel = -1; selHandle = null; draw(); }),
  );
  const presets = el('div', { class: 'sketch-tools' },
    Object.entries(PRESETS[revolve ? 'revolve' : 'extrude']).map(([name, f]) =>
      btn(name, () => {
        pushHistory();
        const r = f();
        points = Array.isArray(r) ? r : r.pts;
        curves = normalizeCurves(points, Array.isArray(r) ? null : r.curves);
        sel = points.length - 1; selHandle = null; fit(); draw();
      })));
  const snapSeg = segmented([[0.1, '0.1'], [0.5, '0.5'], [1, '1'], [5, '5 mm']], snap, (v) => { snap = v; draw(); });

  const body = [
    wrap, status, coordRow,
    el('div', { class: 'field' }, el('span', {}, '曲線（白く光る辺が対象）'), curveTools),
    el('div', { class: 'field' }, el('span', {}, 'スナップ'), snapSeg),
    tools,
    el('div', { class: 'field' }, el('span', {}, 'テンプレート'), presets),
  ];

  const ro = new ResizeObserver(() => resize());
  return openDialog({
    title: title || (revolve ? '回転体の断面' : 'スケッチ'),
    body,
    buttons: [{ label: 'キャンセル', value: 'cancel' }, { label: '決定', value: 'ok', cls: 'accent' }],
    onOpen: () => { ro.observe(wrap); W = wrap.clientWidth; H = wrap.clientHeight; fit(); resize(); },
  }).then((v) => {
    ro.disconnect();
    if (v !== 'ok') return null;
    const poly = flat();
    if (points.length < 2 || poly.length < 3) return null;
    const out = { pts: points, curves: curves.some(Boolean) ? curves : null };
    if (selfIntersects(poly)) out.invalid = true;
    return out;
  });
}
