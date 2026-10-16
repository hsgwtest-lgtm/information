// トポロジー最適化: set up a flat part's outline, supports (bolt holes, fixed edges) and
// loads on a 2D canvas, watch the optimizer carve away the material that carries no load,
// then add the result as an ordinary, editable part (extruded outline + exact holes).
import { el, icon, toast, openDialog, numField, segmented, fmt } from '../ui.js';
import * as store from '../storage.js';
import { PRESETS, optimize, evaluate, discretize, coarseLevel, densityToShapes, pickThreshold } from './topopt.js';
import { N, G } from './templates.js';

let app;
export function initTopology(api) { app = api; }

const clone = (o) => JSON.parse(JSON.stringify(o));
const SIDES = ['left', 'right', 'bottom', 'top'];
const SIDE_LABEL = { left: '左の辺', right: '右の辺', bottom: '下の辺', top: '上の辺' };
const BLUE = '#6ea8ff', ORANGE = '#ffb020', RED = '#ef5f56';

// Printed-part properties, matched to the material chosen in 設定 (by density):
// [density g/cm³, name, Young's modulus MPa, tensile strength MPa] — typical values for FDM parts.
const MATS = [[1.24, 'PLA', 2300, 50], [1.27, 'PETG', 1700, 45], [1.04, 'ABS', 1600, 35], [1.07, 'ASA', 1700, 40], [1.21, 'TPU', 26, 25], [1.15, 'レジン', 2000, 40]];
function material() {
  const d = app.S.density;
  const m = MATS.find(([den]) => Math.abs(den - d) < 1e-6) || MATS[0];
  return { density: d, name: m[1], E: m[2], strength: m[3] };
}

const DEFAULTS = {
  fix: { type: 'fix', d: 4.5, ring: 3.5, dir: 'xy' },
  load: { type: 'load', d: 0, ring: 3, angle: -90, force: 100 },
  void: { type: 'void', w: 16, h: 12 },
};

function normalize(spec) {
  spec.edges = spec.edges || {};
  spec.items = spec.items || [];
  spec.quality = spec.quality ?? 1;
  spec.t = spec.t || 5;
  spec.vol = spec.vol || 0.3;
  return spec;
}

// ---------------------------------------------------------------- running the optimizer

// Runs in a module worker, or on the main thread (in short slices) where workers fail.
// onIter receives { it, phase, vol, x, nelx, nely }; the promise resolves with
// { it, x, ev }, or null when stopped.
function startRun(prob, coarse, opts, phys, onIter) {
  let worker = null, timer = null, over = false, heard = false;
  let resolve, reject;
  const promise = new Promise((res, rej) => { resolve = res; reject = rej; });
  const end = () => { over = true; worker?.terminate(); clearTimeout(timer); };
  const local = () => {
    const run = optimize(prob, coarse, opts);
    const iters = (sim) => sim.it + (sim.prevIters || 0);
    const tick = () => {
      if (over) return;
      try {
        const t0 = performance.now();
        let r;
        do r = run.next(); while (!r.done && performance.now() - t0 < 40);
        if (r.done) {
          const sim = r.value, threshold = pickThreshold(sim.xPhys, sim.prob);
          end();
          resolve({ it: iters(sim), x: Float32Array.from(sim.xPhys), threshold, ev: evaluate(sim, sim.xPhys, { ...phys, threshold }) });
          return;
        }
        const { sim, phase } = r.value;
        onIter({ it: iters(sim), phase, vol: sim.volFrac(), x: Float32Array.from(sim.xPhys), nelx: sim.prob.nelx, nely: sim.prob.nely });
        timer = setTimeout(tick, 0);
      } catch (e) { end(); reject(e); }
    };
    timer = setTimeout(tick, 0);
  };
  try {
    worker = new Worker(new URL('./topopt-worker.js', import.meta.url), { type: 'module' });
    worker.onmessage = (e) => {
      const m = e.data;
      heard = true;
      if (over) return;
      if (m.type === 'iter') onIter(m);
      else if (m.type === 'done') { end(); resolve(m); } else if (m.type === 'error') { end(); reject(new Error(m.message)); }
    };
    // Browsers without module workers fail here before any message arrives.
    worker.onerror = (e) => {
      e.preventDefault?.();
      if (heard || over) return;
      worker.terminate();
      worker = null;
      local();
    };
    worker.postMessage({ prob, coarse, opts, phys });
  } catch {
    worker = null;
    local();
  }
  return { promise, stop: () => { if (!over) { end(); resolve(null); } } };
}

// ---------------------------------------------------------------- result → part

function buildPart(res, name) {
  const s = res.spec, cx = s.W / 2, cy = s.H / 2, t = s.t;
  const color = '#57c26a';
  // The outline primitive centres itself on its bounding box, so the node goes there.
  let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
  for (const sh of res.shapes) for (const [x, y] of sh.o) { x0 = Math.min(x0, x); y0 = Math.min(y0, y); x1 = Math.max(x1, x); y1 = Math.max(y1, y); }
  const kids = [N('outline', { h: t, shapes: res.shapes, src: { type: 'topo' } }, [(x0 + x1) / 2 - cx, (y0 + y1) / 2 - cy, t / 2], { name: '最適化した形', color })];
  // Exact round bosses and holes replace the grid's approximation of them.
  for (const it of s.items) {
    if (it.type === 'void') continue;
    const p = [it.x - cx, it.y - cy, t / 2];
    kids.push(N('cylinder', { dia: it.d > 0 ? it.d + 2 * it.ring : 2 * it.ring, h: t, seg: 48 }, p, { name: it.type === 'fix' ? '固定部' : '荷重部', color }));
    if (it.d > 0) kids.push(N('cylinder', { dia: it.d, h: t + 2, seg: 48 }, p, { name: '穴', hole: true }));
  }
  const g = G(name, kids, color);
  g.topo = clone(s);
  return g;
}

function insertPart(g, editNode) {
  app.checkpoint();
  const idx = editNode ? app.S.doc.nodes.indexOf(editNode) : -1;
  if (idx >= 0) {
    const onFloor = Math.abs(app.vp.nodeBox(editNode).min.z) < 0.01;
    Object.assign(g, { pos: [...editNode.pos], rot: [...editNode.rot], name: editNode.name, color: editNode.color, id: editNode.id });
    app.S.doc.nodes.splice(idx, 1, g);
    if (onFloor) app.dropToFloor(g);
  } else {
    app.freeSpot(g);
    app.S.doc.nodes.push(g);
    app.dropToFloor(g);
  }
  app.S.sel = [g.id];
  app.commit();
  app.vp.view('iso', app.S.sel);
}

// ---------------------------------------------------------------- editor

export async function topologyDialog(editNode = null) {
  const spec = normalize(clone(editNode?.topo || store.getSetting('topo', null) || PRESETS[0].spec));
  const ui = { tool: 'select', sel: null, live: null, result: null, run: null, stress: false, note: null };
  const mat = material();

  // ---- canvas and view (screen = origin + mm * scale, y up) ----
  const canvas = el('canvas');
  const wrap = el('div', { class: 'topo-wrap' }, canvas);
  const ctx = canvas.getContext('2d');
  const field = document.createElement('canvas');
  const view = { s: 1, ox: 0, oy: 0 };
  const M = 34;
  let dpr = 1, CW = 0, CH = 0, lastW = -1, raf = 0;
  const toS = (x, y) => [view.ox + x * view.s, view.oy - y * view.s];
  const toW = (sx, sy) => [(sx - view.ox) / view.s, (view.oy - sy) / view.s];

  function layout(force = false) {
    const w = wrap.clientWidth;
    if (!w || (!force && w === lastW)) return;
    lastW = w;
    const h = Math.round(Math.min(Math.max(210, (w - 2 * M) * (spec.H / spec.W) + 2 * M), Math.max(240, innerHeight * 0.45)));
    wrap.style.height = `${h}px`;
    dpr = Math.min(devicePixelRatio || 1, 3);
    CW = w; CH = h;
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    view.s = Math.min((CW - 2 * M) / spec.W, (CH - 2 * M) / spec.H);
    view.ox = (CW - spec.W * view.s) / 2;
    view.oy = (CH + spec.H * view.s) / 2;
    draw();
  }
  const requestDraw = () => { if (!raf) raf = requestAnimationFrame(() => { raf = 0; draw(); }); };

  // Densities (or stresses) as a small image, scaled up with smoothing.
  const BG = [27, 32, 40], FG = [232, 235, 240];
  const HEAT = [[44, 123, 182], [0, 166, 202], [0, 204, 188], [249, 208, 87], [215, 25, 28]];
  const heat = (t) => {
    const u = Math.min(1, Math.max(0, t)) * (HEAT.length - 1), i = Math.min(HEAT.length - 2, Math.floor(u)), f = u - i;
    return HEAT[i].map((c, k) => c + (HEAT[i + 1][k] - c) * f);
  };
  function paintField(x, prob, stress, smax) {
    const { nelx, nely } = prob;
    field.width = nelx; field.height = nely;
    const fc = field.getContext('2d');
    const img = fc.createImageData(nelx, nely);
    for (let ex = 0; ex < nelx; ex++) {
      for (let ey = 0; ey < nely; ey++) {
        const e = ex * nely + ey, p = ((nely - 1 - ey) * nelx + ex) * 4;
        let c;
        if (stress) c = stress[e] > 0 ? heat(stress[e] / smax) : BG;
        else { const v = Math.min(1, Math.max(0, x[e])); c = [BG[0] + (FG[0] - BG[0]) * v, BG[1] + (FG[1] - BG[1]) * v, BG[2] + (FG[2] - BG[2]) * v]; }
        img.data[p] = c[0]; img.data[p + 1] = c[1]; img.data[p + 2] = c[2]; img.data[p + 3] = 255;
      }
    }
    fc.putImageData(img, 0, 0);
  }

  function arrow(x0, y0, x1, y1, color, width = 2) {
    const a = Math.atan2(y1 - y0, x1 - x0), hl = 7;
    ctx.strokeStyle = ctx.fillStyle = color;
    ctx.lineWidth = width;
    ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(x1 - Math.cos(a) * hl * 0.6, y1 - Math.sin(a) * hl * 0.6); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(x1, y1);
    ctx.lineTo(x1 - Math.cos(a - 0.45) * hl, y1 - Math.sin(a - 0.45) * hl);
    ctx.lineTo(x1 - Math.cos(a + 0.45) * hl, y1 - Math.sin(a + 0.45) * hl);
    ctx.closePath(); ctx.fill();
  }
  const dirVec = (deg) => [Math.cos((deg * Math.PI) / 180), -Math.sin((deg * Math.PI) / 180)]; // screen space
  const edgeLine = (side) => ({
    left: [[0, 0], [0, spec.H]], right: [[spec.W, 0], [spec.W, spec.H]],
    bottom: [[0, 0], [spec.W, 0]], top: [[0, spec.H], [spec.W, spec.H]],
  }[side]);
  const OUT = { left: [-1, 0], right: [1, 0], bottom: [0, 1], top: [0, -1] }; // screen space

  function label(text, x, y, color = '#c9d1db', align = 'center') {
    ctx.font = '600 11px -apple-system, "Hiragino Sans", sans-serif';
    ctx.textAlign = align; ctx.textBaseline = 'middle';
    const w = ctx.measureText(text).width + 8;
    const bx = align === 'center' ? x - w / 2 : align === 'right' ? x - w : x;
    ctx.fillStyle = '#111418cc'; ctx.fillRect(bx, y - 8, w, 16);
    ctx.fillStyle = color; ctx.fillText(text, align === 'center' ? x : align === 'right' ? x - 4 : x + 4, y + 0.5);
  }

  function draw() {
    if (!CW) return;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.fillStyle = '#111418'; ctx.fillRect(0, 0, CW, CH);
    const [x0, y0] = toS(0, spec.H), w = spec.W * view.s, h = spec.H * view.s;
    ctx.fillStyle = '#1b2028'; ctx.fillRect(x0, y0, w, h);
    ctx.strokeStyle = '#232a33'; ctx.lineWidth = 1;
    ctx.beginPath();
    for (let gx = 10; gx < spec.W; gx += 10) { const [sx] = toS(gx, 0); ctx.moveTo(sx, y0); ctx.lineTo(sx, y0 + h); }
    for (let gy = 10; gy < spec.H; gy += 10) { const [, sy] = toS(0, gy); ctx.moveTo(x0, sy); ctx.lineTo(x0 + w, sy); }
    ctx.stroke();

    const res = ui.result, live = ui.run ? ui.live : null;
    const shown = live?.x ? live : res;
    if (shown?.x) {
      const stress = !live && ui.stress && res?.ev ? res.ev.stress : null;
      paintField(shown.x, shown.prob, stress, Math.max(1e-9, res?.ev?.stressP98 || 1));
      ctx.globalAlpha = !live && res?.stale ? 0.3 : 1;
      ctx.imageSmoothingEnabled = true;
      ctx.drawImage(field, x0, y0, w, h);
      ctx.globalAlpha = 1;
    }
    if (res && !live && !res.stale && !ui.stress) {
      ctx.beginPath();
      for (const sh of res.shapes) {
        for (const loop of [sh.o, ...sh.h]) {
          loop.forEach(([x, y], i) => { const [sx, sy] = toS(x, y); if (i) ctx.lineTo(sx, sy); else ctx.moveTo(sx, sy); });
          ctx.closePath();
        }
      }
      ctx.strokeStyle = ORANGE; ctx.lineWidth = 1.6; ctx.stroke();
    }
    ctx.strokeStyle = '#3a4452'; ctx.lineWidth = 1;
    ctx.strokeRect(x0 + 0.5, y0 + 0.5, w - 1, h - 1);

    // Edge conditions
    for (const side of SIDES) {
      const e = spec.edges[side];
      const [[ax, ay], [bx, by]] = edgeLine(side);
      const [sax, say] = toS(ax, ay), [sbx, sby] = toS(bx, by);
      if (ui.sel?.kind === 'edge' && ui.sel.side === side) {
        ctx.strokeStyle = '#ffffff55'; ctx.lineWidth = 8;
        ctx.beginPath(); ctx.moveTo(sax, say); ctx.lineTo(sbx, sby); ctx.stroke();
      }
      if (!e) continue;
      const len = Math.hypot(sbx - sax, sby - say), [ox, oy] = OUT[side];
      const tx = (sbx - sax) / len, ty = (sby - say) / len;
      if (e.type === 'fix') {
        ctx.strokeStyle = BLUE; ctx.lineWidth = 3;
        ctx.beginPath(); ctx.moveTo(sax, say); ctx.lineTo(sbx, sby); ctx.stroke();
        const n = Math.max(2, Math.floor(len / 10));
        ctx.lineWidth = 1.4; ctx.beginPath();
        for (let k = 0; k <= n; k++) {
          const px = sax + tx * len * (k / n) + ox * 3, py = say + ty * len * (k / n) + oy * 3;
          if (e.dir === 'xy' || !e.dir) { ctx.moveTo(px, py); ctx.lineTo(px + ox * 7 - tx * 5, py + oy * 7 - ty * 5); } else { ctx.moveTo(px + ox * 3.5 + 2.5, py + oy * 3.5); ctx.arc(px + ox * 3.5, py + oy * 3.5, 2.5, 0, Math.PI * 2); }
        }
        ctx.stroke();
      } else if (e.type === 'load') {
        const [dx, dy] = dirVec(e.angle);
        const n = Math.max(2, Math.floor(len / 26));
        for (let k = 0; k <= n; k++) {
          const px = sax + tx * len * (k / n), py = say + ty * len * (k / n);
          arrow(px - dx * 20, py - dy * 20, px, py, ORANGE, 1.6);
        }
        label(`${fmt(e.force)} N`, (sax + sbx) / 2 - dx * 30 + ox * 10, (say + sby) / 2 - dy * 30 + oy * 10, ORANGE);
      }
    }

    // Holes, pads and keep-out areas
    spec.items.forEach((it, i) => {
      const selected = ui.sel?.kind === 'item' && ui.sel.i === i;
      if (it.type === 'void') {
        const [ax, ay] = toS(it.x - it.w / 2, it.y + it.h / 2);
        const rw = it.w * view.s, rh = it.h * view.s;
        ctx.save();
        ctx.beginPath(); ctx.rect(ax, ay, rw, rh); ctx.clip();
        ctx.fillStyle = '#ef5f5622'; ctx.fillRect(ax, ay, rw, rh);
        ctx.strokeStyle = '#ef5f5677'; ctx.lineWidth = 1; ctx.beginPath();
        for (let k = -rh; k < rw; k += 8) { ctx.moveTo(ax + k, ay + rh); ctx.lineTo(ax + k + rh, ay); }
        ctx.stroke(); ctx.restore();
        ctx.setLineDash([5, 4]); ctx.strokeStyle = RED; ctx.lineWidth = 1.5; ctx.strokeRect(ax, ay, rw, rh); ctx.setLineDash([]);
        if (selected) { ctx.strokeStyle = '#fff'; ctx.lineWidth = 2; ctx.strokeRect(ax - 3, ay - 3, rw + 6, rh + 6); }
        return;
      }
      const [sx, sy] = toS(it.x, it.y);
      const r0 = it.d > 0 ? (it.d / 2) * view.s : 0;
      const r1 = Math.max(5, ((it.d > 0 ? it.d / 2 : 0) + it.ring) * view.s);
      const col = it.type === 'fix' ? BLUE : ORANGE;
      ctx.beginPath(); ctx.arc(sx, sy, r1, 0, Math.PI * 2);
      ctx.fillStyle = col + '44'; ctx.fill();
      ctx.strokeStyle = col; ctx.lineWidth = 2; ctx.stroke();
      if (r0 > 0) {
        ctx.beginPath(); ctx.arc(sx, sy, r0, 0, Math.PI * 2);
        ctx.fillStyle = '#111418'; ctx.fill(); ctx.stroke();
      } else if (it.type === 'fix') {
        ctx.beginPath(); ctx.moveTo(sx - r1 * 0.6, sy); ctx.lineTo(sx + r1 * 0.6, sy); ctx.moveTo(sx, sy - r1 * 0.6); ctx.lineTo(sx, sy + r1 * 0.6); ctx.stroke();
      }
      if (it.type === 'load') {
        const [dx, dy] = dirVec(it.angle);
        const L = Math.max(30, r1 + 22);
        arrow(sx - dx * (L + r1 * 0.2), sy - dy * (L + r1 * 0.2), sx - dx * r1 * 0.2, sy - dy * r1 * 0.2, ORANGE, 2.4);
        label(`${fmt(it.force)} N`, sx - dx * (L + 14), sy - dy * (L + 14), ORANGE);
      } else if (it.dir && it.dir !== 'xy') {
        label(it.dir === 'y' ? '上下のみ' : '左右のみ', sx, sy + r1 + 11, BLUE);
      }
      if (selected) {
        ctx.setLineDash([4, 3]); ctx.strokeStyle = '#fff'; ctx.lineWidth = 1.5;
        ctx.beginPath(); ctx.arc(sx, sy, r1 + 5, 0, Math.PI * 2); ctx.stroke(); ctx.setLineDash([]);
      }
    });

    // Overall dimensions, kept clear of the support symbols drawn outside the edges.
    ctx.fillStyle = '#8b95a3'; ctx.font = '11px -apple-system, "Hiragino Sans", sans-serif';
    ctx.textAlign = 'center'; ctx.textBaseline = 'top';
    ctx.fillText(`${fmt(spec.W)} mm`, x0 + w / 2, y0 + h + (spec.edges.bottom ? 16 : 9));
    ctx.save(); ctx.translate(x0 - (spec.edges.left ? 17 : 11), y0 + h / 2); ctx.rotate(-Math.PI / 2); ctx.textBaseline = 'bottom'; ctx.fillText(`${fmt(spec.H)} mm`, 0, 0); ctx.restore();
  }

  // ---- hit testing and pointer input ----
  function hit(sx, sy, { edges = true } = {}) {
    for (let i = spec.items.length - 1; i >= 0; i--) {
      const it = spec.items[i];
      if (it.type === 'void') {
        const [ax, ay] = toS(it.x - it.w / 2, it.y + it.h / 2), [bx, by] = toS(it.x + it.w / 2, it.y - it.h / 2);
        if (sx >= ax - 6 && sx <= bx + 6 && sy >= ay - 6 && sy <= by + 6) return { kind: 'item', i };
        continue;
      }
      const [cx, cy] = toS(it.x, it.y);
      if (Math.hypot(sx - cx, sy - cy) <= Math.max(18, ((it.d > 0 ? it.d / 2 : 0) + it.ring) * view.s + 6)) return { kind: 'item', i };
    }
    if (!edges) return null;
    const [x0, y0] = toS(0, spec.H), [x1, y1] = toS(spec.W, 0), tol = 16;
    const along = { left: sy > y0 - tol && sy < y1 + tol, right: sy > y0 - tol && sy < y1 + tol, top: sx > x0 - tol && sx < x1 + tol, bottom: sx > x0 - tol && sx < x1 + tol };
    const dist = { left: Math.abs(sx - x0), right: Math.abs(sx - x1), top: Math.abs(sy - y0), bottom: Math.abs(sy - y1) };
    let best = null;
    for (const side of SIDES) if (along[side] && dist[side] < tol && (!best || dist[side] < dist[best])) best = side;
    return best ? { kind: 'edge', side: best } : null;
  }
  const local = (e) => { const r = canvas.getBoundingClientRect(); return [e.clientX - r.left, e.clientY - r.top]; };
  const clampX = (x) => Math.min(spec.W, Math.max(0, Math.round(x)));
  const clampY = (y) => Math.min(spec.H, Math.max(0, Math.round(y)));
  let gesture = null;

  canvas.addEventListener('pointerdown', (e) => {
    if (ui.run) return;
    canvas.setPointerCapture(e.pointerId);
    const [sx, sy] = local(e);
    const [wx, wy] = toW(sx, sy);
    if (ui.tool === 'select') {
      const h = hit(sx, sy);
      ui.sel = h;
      if (h?.kind === 'item') {
        const it = spec.items[h.i];
        gesture = { type: 'move', i: h.i, dx: it.x - wx, dy: it.y - wy, moved: false, sx, sy };
      }
      renderPanel(); draw();
    } else if (ui.tool === 'void') {
      gesture = { type: 'rect', a: [clampX(wx), clampY(wy)], b: [clampX(wx), clampY(wy)] };
    } else {
      // Tapping an edge with the support / load tool applies it to the whole edge.
      const h = hit(sx, sy);
      const inside = wx > 0 && wx < spec.W && wy > 0 && wy < spec.H;
      if (h?.kind === 'edge' && (!inside || Math.min(wx, spec.W - wx, wy, spec.H - wy) * view.s < 8)) {
        spec.edges[h.side] = ui.tool === 'fix' ? { type: 'fix', dir: 'xy' } : { type: 'load', angle: h.side === 'top' ? -90 : h.side === 'bottom' ? 90 : h.side === 'left' ? 0 : 180, force: 100 };
        ui.sel = h;
      } else {
        spec.items.push({ ...DEFAULTS[ui.tool], x: clampX(wx), y: clampY(wy) });
        ui.sel = { kind: 'item', i: spec.items.length - 1 };
      }
      setTool('select');
      changed();
    }
  });
  canvas.addEventListener('pointermove', (e) => {
    if (!gesture) return;
    const [sx, sy] = local(e);
    const [wx, wy] = toW(sx, sy);
    if (gesture.type === 'move') {
      if (!gesture.moved && Math.hypot(sx - gesture.sx, sy - gesture.sy) < 4) return;
      gesture.moved = true;
      const it = spec.items[gesture.i];
      it.x = clampX(wx + gesture.dx); it.y = clampY(wy + gesture.dy);
      markStale();
      requestDraw();
    } else if (gesture.type === 'rect') {
      gesture.b = [clampX(wx), clampY(wy)];
      draw();
      const [ax, ay] = toS(...gesture.a), [bx, by] = toS(...gesture.b);
      ctx.setLineDash([5, 4]); ctx.strokeStyle = RED; ctx.lineWidth = 1.5;
      ctx.strokeRect(Math.min(ax, bx), Math.min(ay, by), Math.abs(bx - ax), Math.abs(by - ay)); ctx.setLineDash([]);
    }
  });
  const up = () => {
    const g = gesture;
    gesture = null;
    if (!g) return;
    if (g.type === 'move' && g.moved) { renderPanel(); changed(); }
    if (g.type === 'rect') {
      const [ax, ay] = g.a, [bx, by] = g.b;
      const w = Math.abs(bx - ax), h = Math.abs(by - ay);
      const it = w < 3 && h < 3 ? { ...DEFAULTS.void, x: ax, y: ay } : { type: 'void', x: (ax + bx) / 2, y: (ay + by) / 2, w: Math.max(2, w), h: Math.max(2, h) };
      spec.items.push(it);
      ui.sel = { kind: 'item', i: spec.items.length - 1 };
      setTool('select');
      changed();
    }
  };
  canvas.addEventListener('pointerup', up);
  canvas.addEventListener('pointercancel', up);

  // ---- tools, presets, selected-item panel ----
  const TOOL_HINT = {
    select: '穴・辺・禁止範囲をタップで選択、ドラッグで移動します。',
    fix: '固定するネジ穴の位置をタップ。辺をタップするとその辺全体を固定します。',
    load: '力がかかる位置をタップ。辺をタップするとその辺全体に力をかけます。',
    void: '材料を置きたくない範囲をドラッグで囲みます（他の部品が通る場所など）。',
  };
  const toolBar = el('div');
  function setTool(t) {
    ui.tool = t;
    toolBar.replaceChildren(segmented([['select', '選択'], ['fix', '固定'], ['load', '荷重'], ['void', '禁止範囲']], t, (v) => { ui.tool = v; renderPanel(); }));
    renderPanel();
  }
  const presetRow = el('div', { class: 'sketch-tools' }, PRESETS.map((p) => el('button', {
    type: 'button', class: 'btn', title: p.desc,
    onclick: () => {
      if (ui.run) return;
      const q = spec.quality;
      Object.keys(spec).forEach((k) => delete spec[k]);
      Object.assign(spec, normalize(clone(p.spec)), { quality: q });
      ui.sel = null; ui.result = null;
      renderDomain(); changed(); layout(true);
      toast(p.desc, 2500);
    },
  }, p.label)));

  const panel = el('div', { class: 'topo-panel' });
  const angleField = (obj) => {
    const quick = [[-90, '↓'], [0, '→'], [90, '↑'], [180, '←']];
    return el('div', { class: 'field' },
      el('span', {}, '力の向き'),
      el('div', { class: 'row' },
        numField({ label: '角度°（右=0）', value: obj.angle, step: 15, onChange: (v) => { obj.angle = ((v + 540) % 360) - 180; changed(); } }),
        el('div', { class: 'topo-quick' }, quick.map(([a, s]) => el('button', { type: 'button', class: 'btn' + (Math.abs(obj.angle - a) < 1e-6 || Math.abs(obj.angle - a) === 360 ? ' on' : ''), onclick: () => { obj.angle = a; changed(); renderPanel(); } }, s))),
        numField({ label: '力 N', value: obj.force, min: 1, step: 10, onChange: (v) => { obj.force = v; changed(); } })));
  };
  const dirSeg = (obj) => el('div', { class: 'field' }, el('span', {}, '固定する方向'),
    segmented([['xy', '全方向'], ['y', '上下のみ'], ['x', '左右のみ']], obj.dir || 'xy', (v) => { obj.dir = v; changed(); }));
  const delBtn = (fn) => el('button', { type: 'button', class: 'btn danger', style: { width: '100%', marginTop: '8px' }, onclick: fn }, icon('trash'), '削除');

  function renderPanel() {
    panel.replaceChildren();
    const s = ui.sel;
    if (!s) { panel.append(el('p', { class: 'hint' }, TOOL_HINT[ui.tool])); return; }
    if (s.kind === 'edge') {
      const e = spec.edges[s.side];
      const cur = e ? e.type : 'none';
      panel.append(el('div', { class: 'field' }, el('span', {}, SIDE_LABEL[s.side]),
        segmented([['none', '条件なし'], ['fix', '固定'], ['load', '荷重']], cur, (v) => {
          if (v === 'none') delete spec.edges[s.side];
          else if (v === 'fix') spec.edges[s.side] = { type: 'fix', dir: 'xy' };
          else spec.edges[s.side] = { type: 'load', angle: s.side === 'top' ? -90 : s.side === 'bottom' ? 90 : s.side === 'left' ? 0 : 180, force: 100 };
          changed(); renderPanel();
        })));
      if (e?.type === 'fix') panel.append(dirSeg(e));
      if (e?.type === 'load') panel.append(angleField(e), el('p', { class: 'hint' }, '辺全体に均等にかかる力です（棚板の重さなど）。辺に沿って薄い面が残ります。'));
      return;
    }
    const it = spec.items[s.i];
    if (!it) { ui.sel = null; renderPanel(); return; }
    const remove = () => { spec.items.splice(s.i, 1); ui.sel = null; changed(); renderPanel(); };
    const pos = el('div', { class: 'row two' },
      numField({ label: 'X mm', axis: 'x', value: it.x, step: 1, min: 0, max: spec.W, onChange: (v) => { it.x = v; changed(); } }),
      numField({ label: 'Y mm', axis: 'y', value: it.y, step: 1, min: 0, max: spec.H, onChange: (v) => { it.y = v; changed(); } }));
    if (it.type === 'void') {
      panel.append(el('div', { class: 'field' }, el('span', {}, '禁止範囲（材料を置かない）'), el('div', { class: 'row two' },
        numField({ label: '幅 mm', value: it.w, min: 1, step: 1, onChange: (v) => { it.w = v; changed(); } }),
        numField({ label: '高さ mm', value: it.h, min: 1, step: 1, onChange: (v) => { it.h = v; changed(); } }))), pos, delBtn(remove));
      return;
    }
    panel.append(el('div', { class: 'field' }, el('span', {}, '種類'), segmented([['fix', '固定（ネジ穴・支点）'], ['load', '荷重（力がかかる所）']], it.type, (v) => {
      if (v === it.type) return;
      Object.assign(it, { type: v }, v === 'fix' ? { dir: 'xy' } : { angle: it.angle ?? -90, force: it.force ?? 100 });
      changed(); renderPanel();
    })));
    if (it.type === 'fix') panel.append(dirSeg(it)); else panel.append(angleField(it));
    panel.append(
      el('div', { class: 'row two', style: { marginBottom: '6px' } },
        numField({ label: '穴径 mm（0=穴なし）', value: it.d, min: 0, step: 0.5, onChange: (v) => { it.d = v; changed(); } }),
        numField({ label: '周りの肉厚 mm', value: it.ring, min: 0.5, step: 0.5, onChange: (v) => { it.ring = v; changed(); } })),
      pos, delBtn(remove));
  }

  // ---- design area and run ----
  // Fields are rebuilt only for presets: rebuilding on every edit would steal the focus
  // (and close the iPhone keyboard) when moving from one field to the next.
  const domainBox = el('div');
  const sepBox = el('div');
  let sepShown = null;
  function renderDomain() {
    domainBox.replaceChildren(
      el('div', { class: 'field' }, el('span', {}, '設計領域（この範囲の中で形を決めます）'), el('div', { class: 'row' },
        numField({ label: '幅 mm', value: spec.W, min: 10, max: 2000, step: 5, onChange: (v) => { setSize(v, spec.H); } }),
        numField({ label: '高さ mm', value: spec.H, min: 10, max: 2000, step: 5, onChange: (v) => { setSize(spec.W, v); } }),
        numField({ label: '厚み mm', value: spec.t, min: 1, step: 1, onChange: (v) => { spec.t = v; changed(); } }))),
      el('div', { class: 'row two' },
        numField({ label: '残す材料 %', value: Math.round(spec.vol * 100), min: 10, max: 80, step: 5, integer: true, onChange: (v) => { spec.vol = v / 100; changed(); } }),
        segmented([[0, '速い'], [1, '標準'], [2, '細かい']], spec.quality, (v) => { spec.quality = v; changed(); })),
      sepBox,
    );
    sepShown = null;
    syncSeparate();
  }
  // "Separate load cases" only matters with two or more loads.
  function syncSeparate() {
    const loads = spec.items.filter((i) => i.type === 'load').length + SIDES.filter((s) => spec.edges[s]?.type === 'load').length;
    const show = loads > 1;
    if (show === sepShown) return;
    sepShown = show;
    sepBox.replaceChildren(show ? el('label', { class: 'check' },
      el('input', { type: 'checkbox', checked: !!spec.separate, onchange: (e) => { spec.separate = e.target.checked; changed(); } }),
      '荷重を別々に考える（同時にはかからない力のどれにも耐える形）') : '');
  }
  function setSize(W, H) {
    spec.W = W; spec.H = H;
    for (const it of spec.items) { it.x = Math.min(W, it.x); it.y = Math.min(H, it.y); }
    changed(); layout(true);
  }

  const runBtn = el('button', { type: 'button', class: 'btn accent topo-run', onclick: () => run() });
  const status = el('div', { class: 'hint' });
  const stats = el('div');
  function markStale() {
    if (ui.result && !ui.result.stale) { ui.result.stale = true; ui.stress = false; renderRun(); }
  }
  function changed() {
    markStale();
    syncSeparate();
    draw();
  }
  function renderRun() {
    runBtn.replaceChildren(ui.run ? '停止' : ui.result ? 'もう一度最適化する' : '最適化する');
    runBtn.classList.toggle('danger', !!ui.run);
    stats.replaceChildren();
    const res = ui.result;
    if (ui.run) {
      const l = ui.live;
      status.textContent = l?.it ? `計算中（${l.phase === 0 ? 'あら削り' : '仕上げ'}）… ${l.it} 回目 ・ 材料 ${Math.round(l.vol * 100)}%（途中で止めた形でも作成できます）` : '計算の準備中…';
      return;
    }
    if (ui.note) { stats.append(el('div', { class: 'warnbox' }, ui.note)); }
    if (!res) { status.textContent = '「最適化する」を押すと、力の伝わらない部分の材料が少しずつ削られていきます。'; return; }
    if (res.stale) { status.textContent = '条件が変わりました。もう一度最適化してください。'; return; }
    status.textContent = res.stopped ? `途中で止めました（${res.it} 回目）。この形で部品を作成できます。` : `完了 ・ ${res.it} 回の計算で ${(res.ms / 1000).toFixed(1)} 秒`;
    const s = res.spec;
    const grams = (a) => (a * s.t) / 1000 * mat.density;
    if (res.ev) {
      const ev = res.ev;
      const worst = Math.max(...ev.defl.map(Math.abs)), worstSolid = Math.max(...ev.deflSolid.map(Math.abs));
      const pct = Math.round((1 - ev.area / ev.solidArea) * 100);
      const ratio = ev.stressP98 / mat.strength;
      stats.append(el('dl', { class: 'stat' },
        el('dt', {}, '重さ'), el('dd', {}, `${grams(ev.area).toFixed(1)} g（板のままなら ${grams(ev.solidArea).toFixed(1)} g ・ ${pct}% 軽量）`),
        el('dt', {}, 'たわみ'), el('dd', {}, `${worst < 0.01 ? worst.toFixed(3) : worst.toFixed(2)} mm（板のままなら ${worstSolid < 0.01 ? worstSolid.toFixed(3) : worstSolid.toFixed(2)} mm）`),
        el('dt', {}, '応力の目安'), el('dd', {}, `${ev.stressP98.toFixed(1)} MPa（${mat.name} の強さの約 ${Math.max(1, Math.round(ratio * 100))}%）`)),
      el('label', { class: 'check' }, el('input', { type: 'checkbox', checked: ui.stress, onchange: (e) => { ui.stress = e.target.checked; draw(); } }), '応力を色で表示（青: 低い → 赤: 高い）'));
      if (ratio > 0.5) stats.append(el('div', { class: 'warnbox' }, '応力が材料の強さに近いため、厚み・残す材料を増やすことをおすすめします。'));
    } else if (res.prob) {
      const area = res.x.reduce((sum, v, e) => sum + (res.prob.passive[e] > 0 || (res.prob.passive[e] === 0 && v > res.threshold) ? 1 : 0), 0) * res.prob.hx * res.prob.hy;
      stats.append(el('dl', { class: 'stat' }, el('dt', {}, '重さ'), el('dd', {}, `${grams(area).toFixed(1)} g`)));
    }
  }

  async function run() {
    if (ui.run) { ui.run.stop(); return; }
    let prob;
    try { prob = discretize(spec); } catch (e) { ui.note = e.message; renderRun(); return; }
    ui.note = prob.warnings.join(' ') || null;
    ui.sel = null; renderPanel();
    ui.result = null; ui.stress = false;
    ui.live = { prob, x: null, it: 0, vol: spec.vol, phase: 0 };
    const snap = clone(spec);
    const t0 = performance.now();
    const coarse = coarseLevel(spec, prob);
    ui.run = startRun(prob, coarse, { maxIter: 80, minIter: 20, stall: 0.0025 }, { E: mat.E, t: spec.t }, (m) => {
      // The first (coarse) phase runs on its own, smaller grid.
      Object.assign(ui.live, { x: m.x, it: m.it, vol: m.vol, phase: m.phase, prob: m.phase === 0 && coarse ? coarse : prob });
      renderRun(); requestDraw();
    });
    renderRun(); draw();
    try {
      const r = await ui.run.promise;
      // Stopped early: keep the last picture (on whichever grid it was computed) once a
      // shape has had a few iterations to form.
      const x = r?.x || (ui.live.it >= 6 ? ui.live.x : null), xp = r ? prob : ui.live.prob;
      if (!r && !x) ui.note = '計算を止めました。';
      if (x) {
        const threshold = r?.threshold ?? pickThreshold(x, xp);
        ui.result = { prob: xp, x, threshold, ev: r?.ev || null, it: r?.it || ui.live.it, ms: performance.now() - t0, spec: snap, stale: false, stopped: !r, shapes: densityToShapes(x, xp, { threshold }) };
      }
      if (ui.result && !ui.result.shapes.length) { ui.note = '形が残りませんでした。残す材料を増やしてください。'; ui.result = null; }
      const pieces = ui.result?.shapes.length || 0;
      if (pieces > 1) {
        ui.note = [ui.note, `形が ${pieces} つに分かれています。力の伝わらない固定穴や荷重がないか確認してください（このまま作成もできます）。`].filter(Boolean).join(' ');
      }
    } catch (e) {
      console.error(e);
      ui.note = '計算できませんでした: ' + e.message;
    }
    ui.run = null;
    renderRun(); draw();
  }

  const body = [
    el('div', { class: 'field', style: { marginTop: '0' } }, el('span', {}, 'テンプレート'), presetRow),
    wrap, toolBar, panel, domainBox,
    runBtn, status, stats,
    el('p', { class: 'hint' }, `材料: ${mat.name}（設定で変更）。完成した形は平らに寝かせて印刷すると、力が積層に沿って流れて強くなります。数値は目安です。`),
  ];
  setTool('select');
  renderDomain();
  renderRun();

  const ro = new ResizeObserver(() => layout());
  const d = document.getElementById('dlg');
  const onClick = (e) => {
    const b = e.target.closest('button[type=submit]');
    if (!b || b.value !== 'ok') return;
    if (ui.run) { e.preventDefault(); toast('計算中です。「停止」を押すか、終わるまでお待ちください'); return; }
    if (!ui.result) { e.preventDefault(); toast('先に「最適化する」を押してください'); return; }
    if (ui.result.stale) { e.preventDefault(); toast('条件が変わっています。もう一度最適化してください'); }
  };
  d.addEventListener('click', onClick);
  const v = await openDialog({
    title: editNode ? 'トポロジー最適化（再設計）' : 'トポロジー最適化',
    body,
    buttons: [{ label: 'キャンセル', value: 'cancel' }, { label: editNode ? '置き換える' : '部品を作成', value: 'ok', cls: 'accent' }],
    onOpen: () => { ro.observe(wrap); layout(true); },
  });
  d.removeEventListener('click', onClick);
  ro.disconnect();
  ui.run?.stop();
  store.setSetting('topo', spec);
  if (v !== 'ok' || !ui.result || ui.result.stale) return;
  const count = app.S.doc.nodes.filter((n) => n.topo).length + 1;
  insertPart(buildPart(ui.result, `最適化パーツ ${count}`), editNode);
  toast(editNode ? '形を置き換えました' : '最適化した形を作成しました。グループなので後から穴などを追加できます', 3000);
}
