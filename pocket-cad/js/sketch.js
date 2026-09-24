// 2D polygon editor used by "スケッチ押し出し" and "回転体".
// Tap empty space to add a point (inserted into the nearest edge when close to one),
// drag a point to move it, drag empty space to pan, pinch to zoom.
import { el, openDialog, numField, segmented, fmt } from './ui.js';

const PRESETS = {
  extrude: {
    '四角': () => [[-10, -10], [10, -10], [10, 10], [-10, 10]],
    'L字': () => [[0, 0], [30, 0], [30, 5], [5, 5], [5, 30], [0, 30]],
    '円': () => Array.from({ length: 32 }, (_, i) => [10 * Math.cos(i / 32 * Math.PI * 2), 10 * Math.sin(i / 32 * Math.PI * 2)].map((v) => Math.round(v * 1000) / 1000)),
    '星': () => Array.from({ length: 10 }, (_, i) => { const r = i % 2 ? 5 : 12, a = i / 10 * Math.PI * 2 + Math.PI / 2; return [Math.round(r * Math.cos(a) * 1000) / 1000, Math.round(r * Math.sin(a) * 1000) / 1000]; }),
    '台形': () => [[-15, 0], [15, 0], [8, 12], [-8, 12]],
  },
  revolve: {
    'カップ': () => [[0, 0], [15, 0], [18, 30], [16, 30], [13.2, 2], [0, 2]],
    'つまみ': () => [[0, 0], [10, 0], [10, 3], [4, 6], [4, 20], [0, 20]],
    'リング': () => [[8, 0], [12, 0], [12, 4], [8, 4]],
    '花瓶': () => [[0, 0], [12, 0], [16, 12], [10, 30], [12, 40], [11, 40], [9, 30], [14.5, 12], [11, 2], [0, 2]],
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

export function editSketch({ pts, mode, title }) {
  let points = pts.map((p) => [...p]);
  const history = [];
  let sel = points.length - 1;
  let snap = 1;
  const revolve = mode === 'revolve';

  const canvas = el('canvas');
  const wrap = el('div', { class: 'sketch-wrap' }, canvas);
  const status = el('div', { class: 'hint' });
  const coordRow = el('div', { class: 'row two', style: { marginTop: '8px' } });

  // view: screen = (world - center) * scale + canvas center
  const view = { cx: 0, cy: 0, scale: 4 };
  const ctx = canvas.getContext('2d');
  let dpr = 1, W = 0, H = 0;

  const pushHistory = () => { history.push(JSON.stringify(points)); if (history.length > 100) history.shift(); };
  const snapV = (v) => Math.round(v / snap) * snap;
  const toScreen = ([x, y]) => [(x - view.cx) * view.scale + W / 2, H / 2 - (y - view.cy) * view.scale];
  const toWorld = (sx, sy) => [(sx - W / 2) / view.scale + view.cx, (H / 2 - sy) / view.scale + view.cy];

  function fit() {
    if (!points.length) { view.cx = 0; view.cy = 0; view.scale = 4; return; }
    let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
    for (const [x, y] of points) { x0 = Math.min(x0, x); y0 = Math.min(y0, y); x1 = Math.max(x1, x); y1 = Math.max(y1, y); }
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

    if (revolve && points.length > 2) {
      // Mirror preview across the axis.
      ctx.beginPath();
      points.forEach((p, i) => { const [sx, sy] = toScreen([-p[0], p[1]]); i ? ctx.lineTo(sx, sy) : ctx.moveTo(sx, sy); });
      ctx.closePath(); ctx.fillStyle = '#ffffff0c'; ctx.fill();
    }
    const bad = points.length > 3 && selfIntersects(points);
    if (points.length) {
      ctx.beginPath();
      points.forEach((p, i) => { const [sx, sy] = toScreen(p); i ? ctx.lineTo(sx, sy) : ctx.moveTo(sx, sy); });
      ctx.closePath();
      ctx.fillStyle = bad ? '#ef5f5633' : '#ffb02026'; ctx.fill();
      ctx.strokeStyle = bad ? '#ef5f56' : '#ffb020'; ctx.lineWidth = 2; ctx.stroke();
    }
    points.forEach((p, i) => {
      const [sx, sy] = toScreen(p);
      ctx.beginPath(); ctx.arc(sx, sy, i === sel ? 9 : 6, 0, Math.PI * 2);
      ctx.fillStyle = i === sel ? '#ffb020' : '#e6e9ee'; ctx.fill();
      ctx.strokeStyle = '#111418'; ctx.lineWidth = 2; ctx.stroke();
    });
    status.textContent = bad ? '辺が交差しています。点を動かして交差を解消してください。'
      : `${points.length} 点 ・ 空白をタップで点を追加、点をドラッグで移動、2本指でズーム`;
    renderCoords();
  }

  function renderCoords() {
    coordRow.replaceChildren();
    if (sel < 0 || !points[sel]) return;
    const p = points[sel];
    coordRow.append(
      numField({ label: revolve ? '半径 R' : 'X', value: p[0], step: snap, axis: 'x', min: revolve ? 0 : -Infinity, onChange: (v) => { pushHistory(); p[0] = v; draw(); } }),
      numField({ label: revolve ? '高さ Z' : 'Y', value: p[1], step: snap, axis: 'y', onChange: (v) => { pushHistory(); p[1] = v; draw(); } }),
    );
  }

  // ---- pointer handling ----
  const ptrs = new Map();
  let gesture = null;
  const local = (e) => { const r = canvas.getBoundingClientRect(); return [e.clientX - r.left, e.clientY - r.top]; };
  const hitPoint = (sx, sy) => {
    let best = -1, bd = 22 * 22;
    points.forEach((p, i) => { const [x, y] = toScreen(p); const d = (x - sx) ** 2 + (y - sy) ** 2; if (d < bd) { bd = d; best = i; } });
    return best;
  };
  const hitEdge = (sx, sy) => {
    let best = -1, bd = 16;
    for (let i = 0; i < points.length && points.length > 1; i++) {
      const [ax, ay] = toScreen(points[i]), [bx, by] = toScreen(points[(i + 1) % points.length]);
      const dx = bx - ax, dy = by - ay, l2 = dx * dx + dy * dy || 1;
      const t = Math.max(0, Math.min(1, ((sx - ax) * dx + (sy - ay) * dy) / l2));
      const d = Math.hypot(ax + t * dx - sx, ay + t * dy - sy);
      if (d < bd) { bd = d; best = i; }
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
    const i = hitPoint(sx, sy);
    if (i >= 0) { sel = i; gesture = { type: 'point', i, moved: false }; draw(); } else gesture = { type: 'pan', start: [sx, sy], c: [view.cx, view.cy], moved: false };
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
    } else if (gesture.type === 'point') {
      const [sx, sy] = local(e);
      let [x, y] = toWorld(sx, sy);
      x = snapV(x); y = snapV(y);
      if (revolve) x = Math.max(0, x);
      const p = points[gesture.i];
      if (p[0] !== x || p[1] !== y) {
        if (!gesture.moved) pushHistory();
        gesture.moved = true;
        p[0] = x; p[1] = y;
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
      let [x, y] = toWorld(sx, sy);
      x = snapV(x); y = snapV(y);
      if (revolve) x = Math.max(0, x);
      pushHistory();
      const edge = hitEdge(sx, sy);
      const at = edge >= 0 ? edge + 1 : (sel >= 0 ? sel + 1 : points.length);
      points.splice(at, 0, [x, y]);
      sel = at;
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
  const tools = el('div', { class: 'sketch-tools' },
    btn('点を削除', () => { if (sel < 0) return; pushHistory(); points.splice(sel, 1); sel = Math.min(sel, points.length - 1); draw(); }, 'danger'),
    btn('元に戻す', () => { if (!history.length) return; points = JSON.parse(history.pop()); sel = Math.min(sel, points.length - 1); draw(); }),
    btn('全体', () => { fit(); draw(); }),
    btn('全消去', () => { pushHistory(); points = []; sel = -1; draw(); }),
  );
  const presets = el('div', { class: 'sketch-tools' },
    Object.entries(PRESETS[revolve ? 'revolve' : 'extrude']).map(([name, f]) =>
      btn(name, () => { pushHistory(); points = f(); sel = points.length - 1; fit(); draw(); })));
  const snapSeg = segmented([[0.1, '0.1'], [0.5, '0.5'], [1, '1'], [5, '5 mm']], snap, (v) => { snap = v; draw(); });

  const body = [
    wrap, status, coordRow,
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
    if (points.length < 3) return null;
    if (selfIntersects(points)) return { pts: points, invalid: true };
    return { pts: points };
  });
}
