// Parametric templates: ready-made, practical designs built from ordinary nodes, so
// everything stays editable afterwards (groups can be ungrouped, params changed).
import { Matrix4 } from '../../vendor/vendor.js';
import { KINDS, defaultParams } from '../geometry.js';
import { GRIDFINITY_BASE } from './loft.js';
import { patternPoints } from './pattern.js';
import { textToShapes } from './trace.js';

const uid = () => Math.random().toString(36).slice(2, 10) + Date.now().toString(36).slice(-4);
const r3 = (v) => Math.round(v * 1000) / 1000;

export const N = (kind, params, pos = [0, 0, 0], extra = {}) => ({
  id: uid(), kind, name: extra.name || KINDS[kind].label,
  params: { ...defaultParams(kind), ...params },
  pos: pos.map(r3), rot: extra.rot || [0, 0, 0], scale: [1, 1, 1],
  color: extra.color || '#4f9dff', hole: !!extra.hole,
});

// Group whose origin is the centre of its children's positions' bounding range
// (children keep their absolute placement).
export const G = (name, children, color = '#4f9dff', op = 'union') => ({
  id: uid(), kind: 'group', name, op, params: {}, pos: [0, 0, 0], rot: [0, 0, 0], scale: [1, 1, 1], color, hole: false, children,
});

// Box helper: bottom at z0.
const cbox = (w, d, h, z0, extra = {}, more = {}) => N('cbox', { w, d, h, r: 0, cb: 0, ct: 0, ...more }, [0, 0, z0 + h / 2], extra);

// Euler angles (deg) for a rotation given by where local X / Y axes should point.
function eulerFromAxes(xAxis, yAxis, eulerDeg) {
  const z = [xAxis[1] * yAxis[2] - xAxis[2] * yAxis[1], xAxis[2] * yAxis[0] - xAxis[0] * yAxis[2], xAxis[0] * yAxis[1] - xAxis[1] * yAxis[0]];
  const m = new Matrix4().set(xAxis[0], yAxis[0], z[0], 0, xAxis[1], yAxis[1], z[1], 0, xAxis[2], yAxis[2], z[2], 0, 0, 0, 0, 1);
  return eulerDeg(m);
}

export const TEMPLATES = [
  {
    id: 'gridfinity', label: 'Gridfinity ビン', icon: 'grid', desc: '世界標準の収納規格（42 mm グリッド）に合う小物入れ',
    params: [['gx', '横のマス数', 2, 1, 1, { int: true }], ['gy', '奥のマス数', 1, 1, 1, { int: true }], ['u', '高さ (7mm単位)', 3, 2, 1, { int: true }],
      ['divx', '仕切り（横）', 1, 0, 1, { int: true }], ['divy', '仕切り（奥）', 0, 0, 1, { int: true }], ['mag', '磁石穴 (0/1)', 0, 0, 1, { int: true }]],
    build(p) {
      const W = 42 * p.gx - 0.5, D = 42 * p.gy - 0.5, H = 7 * p.u, wall = 1.2, floor = 4.75 + 1;
      const inner = [];
      for (let i = 0; i < p.gx; i++) for (let j = 0; j < p.gy; j++) {
        const x = (i - (p.gx - 1) / 2) * 42, y = (j - (p.gy - 1) / 2) * 42;
        inner.push(N('loft', { layers: GRIDFINITY_BASE }, [x, y, 4.75 / 2], { name: 'ベース' }));
        if (p.mag) for (const [mx, my] of [[-13, -13], [13, -13], [13, 13], [-13, 13]]) {
          inner.push(N('cylinder', { dia: 6.5, h: 2.4 + 0.1, seg: 32 }, [x + mx, y + my, (2.4 - 0.1) / 2], { hole: true, name: '磁石穴' }));
        }
      }
      inner.push(cbox(W, D, H - 4.45, 4.45, { name: '本体' }, { r: 3.75 }));
      inner.push(cbox(W - 2 * wall, D - 2 * wall, H - floor + 1, floor, { hole: true, name: '内側' }, { r: 3.75 - wall, cb: 1.5 }));
      // Dividers sit outside the inner group so the cavity hole does not cut them.
      const parts = [G('ビン本体', inner, '#ffb020')];
      const iw = W - 2 * wall, id = D - 2 * wall, dh = H - floor - 1;
      for (let k = 1; k <= p.divx; k++) { const n = cbox(1.2, id, dh + 0.2, floor - 0.2, { name: '仕切り' }); n.pos[0] = r3(-iw / 2 + (iw * k) / (p.divx + 1)); parts.push(n); }
      for (let k = 1; k <= p.divy; k++) { const n = cbox(iw, 1.2, dh + 0.2, floor - 0.2, { name: '仕切り' }); n.pos[1] = r3(-id / 2 + (id * k) / (p.divy + 1)); parts.push(n); }
      return [parts.length > 1 ? G(`Gridfinity ${p.gx}×${p.gy}×${p.u}u`, parts, '#ffb020') : { ...parts[0], name: `Gridfinity ${p.gx}×${p.gy}×${p.u}u` }];
    },
  },
  {
    id: 'tray', label: '小物トレイ', icon: 'tray', desc: '仕切り付きのトレイ。底の角は指で取り出しやすい斜め',
    params: [['w', '幅', 90, 20, 5], ['d', '奥行', 60, 20, 5], ['h', '高さ', 20, 5, 1], ['wall', '壁厚', 1.6, 0.8, 0.2],
      ['divx', '仕切り（横）', 2, 0, 1, { int: true }], ['divy', '仕切り（奥）', 0, 0, 1, { int: true }]],
    build(p) {
      const r = 5, floor = Math.max(1.2, p.wall);
      const body = G('トレイ', [
        cbox(p.w, p.d, p.h, 0, { name: '外形' }, { r, cb: 0.5, ct: 0.4 }),
        cbox(p.w - 2 * p.wall, p.d - 2 * p.wall, p.h - floor + 1, floor, { hole: true, name: '内側' }, { r: r - p.wall, cb: 3 }),
      ], '#57c26a');
      const parts = [body];
      const iw = p.w - 2 * p.wall, id = p.d - 2 * p.wall, dh = p.h - floor - 2;
      for (let k = 1; k <= p.divx; k++) { const n = cbox(p.wall, id, dh + 0.2, floor - 0.2, { name: '仕切り', color: '#57c26a' }); n.pos[0] = r3(-iw / 2 + (iw * k) / (p.divx + 1)); parts.push(n); }
      for (let k = 1; k <= p.divy; k++) { const n = cbox(iw, p.wall, dh + 0.2, floor - 0.2, { name: '仕切り', color: '#57c26a' }); n.pos[1] = r3(-id / 2 + (id * k) / (p.divy + 1)); parts.push(n); }
      return [parts.length > 1 ? G('小物トレイ', parts, '#57c26a') : body];
    },
  },
  {
    id: 'stand', label: 'スマホスタンド', icon: 'stand', desc: '角度と端末の厚みを指定できる卓上スタンド',
    params: [['angle', '角度°', 65, 40, 5], ['dev', '端末の厚み', 12, 5, 1], ['width', '幅', 70, 30, 5]],
    build(p, { eulerDeg }) {
      const a = (p.angle * Math.PI) / 180, th = 5, lipH = 14, floorY = 6;
      const S = [6 + p.dev, floorY];
      const T = [S[0] + 75 * Math.cos(a), S[1] + 75 * Math.sin(a)];
      const Tb = [T[0] + th * Math.sin(a), T[1] - th * Math.cos(a)];
      const L = Math.max(Tb[0] + 12, S[0] + 40);
      const pts = [[0, 0], [L, 0], [L, 4], Tb, T, S, [6, floorY], [6, lipH], [0, lipH]].map((q) => q.map(r3));
      // Sketch x → forward (-Y), sketch y → up (Z), extrusion → across (X).
      const rot = eulerFromAxes([0, -1, 0], [0, 0, 1], eulerDeg);
      return [N('extrude', { h: p.width, pts, curves: null }, [0, 0, 0], { name: 'スマホスタンド', rot, color: '#b07cff' })];
    },
  },
  {
    id: 'pot', label: '植木鉢', icon: 'pot', desc: '排水穴付き。上下の径と高さを自由に',
    params: [['dt', '上の直径', 80, 20, 5], ['db', '下の直径', 60, 15, 5], ['h', '高さ', 70, 10, 5], ['wall', '壁厚', 2, 0.8, 0.2], ['drain', '排水穴径', 8, 0, 1]],
    build(p) {
      const rt = p.dt / 2, rb = p.db / 2, floor = 3;
      const rAt = (z) => rb + (rt - rb) * (z / p.h);
      const pts = [[0, 0], [rb, 0], [rt, p.h], [rt - p.wall, p.h], [rAt(floor) - p.wall, floor], [0, floor]].map((q) => q.map(r3));
      const pot = N('revolve', { seg: 96, angle: 360, pts, curves: null }, [0, 0, p.h / 2], { name: '鉢' });
      const kids = [pot];
      if (p.drain > 0) kids.push(N('cylinder', { dia: p.drain, h: floor * 3, seg: 32 }, [0, 0, floor / 2], { hole: true, name: '排水穴' }));
      return [G('植木鉢', kids, '#ef5f56')];
    },
  },
  {
    id: 'nameplate', label: '名札・プレート', icon: 'plate', desc: '日本語の文字入りプレート。ストラップ穴も',
    text: true,
    params: [['size', '文字の高さ', 12, 3, 1], ['t', '板の厚み', 3, 1, 0.5], ['relief', '文字の高さ(Z)', 1.2, 0.4, 0.2], ['hole', 'ストラップ穴 (0/1)', 1, 0, 1, { int: true }]],
    build(p) {
      const tr = textToShapes({ text: p.text || 'なまえ', font: p.font || 'gothic', bold: true, size: p.size });
      const margin = Math.max(5, p.size * 0.5), holeW = p.hole ? 9 : 0;
      const W = tr.width + margin * 2 + holeW, D = tr.height + margin * 2;
      const plateKids = [cbox(W, D, p.t, 0, { name: '板', color: '#f2f2f2' }, { r: Math.min(5, D / 3), ct: 0.6 })];
      if (p.hole) plateKids.push(N('cylinder', { dia: 4.5, h: p.t * 3, seg: 32 }, [-W / 2 + margin * 0.6 + 2.5, 0, p.t / 2], { hole: true, name: '穴' }));
      const plate = p.hole ? G('プレート', plateKids, '#f2f2f2') : plateKids[0];
      const text = N('outline', { h: p.relief + 0.1, shapes: tr.shapes, src: { type: 'jtext', text: p.text, font: p.font || 'gothic', bold: true, size: p.size } },
        [holeW / 2, 0, p.t - 0.1 + (p.relief + 0.1) / 2], { name: (p.text || '').split('\n')[0].slice(0, 12) || '文字', color: '#4f9dff' });
      return [plate, text];
    },
  },
  {
    id: 'clip', label: 'ケーブルクリップ', icon: 'clip', desc: '机の裏や壁にネジ止めするケーブル整理',
    params: [['dia', 'ケーブル径', 6, 2, 0.5], ['n', '本数', 3, 1, 1, { int: true }], ['width', '幅', 10, 5, 1]],
    build(p) {
      const od = p.dia + 3.2, pitch = od + 2, W = p.n * pitch + 16, base = 2.5;
      const kids = [cbox(W, p.width, base, 0, { name: '台座' }, { r: 2 })];
      const rot = [90, 0, 0];
      for (let i = 0; i < p.n; i++) {
        const x = (i - (p.n - 1) / 2) * pitch, zc = base + od / 2 - 0.8;
        kids.push(N('tube', { od, id: p.dia, h: p.width, seg: 48 }, [x, 0, zc], { rot, name: 'リング' }));
        kids.push(N('box', { w: p.dia * 0.75, d: p.width + 2, h: od / 2 + 1 }, [x, 0, zc + od / 4 + 0.5], { hole: true, name: '差込口' }));
        kids.push(N('cylinder', { dia: p.dia, h: p.width + 2, seg: 48 }, [x, 0, zc], { rot, hole: true, name: '通し穴' }));
      }
      for (const s of [-1, 1]) kids.push(N('cylinder', { dia: 3.6, h: base * 3, seg: 24 }, [s * (W / 2 - 4.5), 0, base / 2], { hole: true, name: 'ネジ穴' }));
      return [G('ケーブルクリップ', kids, '#40464f')];
    },
  },
  {
    id: 'hook', label: '壁掛けフック', icon: 'hook', desc: '皿ネジ用の穴付きフック',
    params: [['width', '幅', 20, 8, 1], ['reach', '奥行', 30, 10, 1], ['height', '高さ', 60, 25, 5], ['t', '厚み', 5, 2, 0.5]],
    build(p, { eulerDeg }) {
      const { t, reach: L, height: H } = p, lip = Math.min(18, H / 3);
      const pts = [[0, 0], [L, 0], [L, lip], [L - t, lip], [L - t, t], [t, t], [t, H], [0, H]].map((q) => q.map(r3));
      const rot = eulerFromAxes([0, -1, 0], [0, 0, 1], eulerDeg);
      const kids = [N('extrude', { h: p.width, pts, curves: null }, [0, 0, 0], { rot, name: 'フック' })];
      for (const z of [H - 10, Math.max(t + 12, H / 2)]) {
        kids.push(N('cylinder', { dia: 4, h: t + 2, seg: 24 }, [0, -t / 2, z], { rot: [90, 0, 0], hole: true, name: 'ネジ穴' }));
        kids.push(N('cone', { d1: 3.8, d2: 8.2, h: 2.2, seg: 32 }, [0, -t + 1.0, z], { rot: [90, 0, 0], hole: true, name: '皿もみ' }));
      }
      return [G('壁掛けフック', kids, '#4f9dff')];
    },
  },
  {
    id: 'coaster', label: 'ハニカムコースター', icon: 'pattern', desc: '上面にハニカム模様の凹み',
    params: [['dia', '直径', 90, 40, 5], ['h', '厚み', 4, 2, 0.5], ['cell', 'セルの大きさ', 8, 3, 1], ['rib', 'リブ幅', 1.6, 0.8, 0.2], ['depth', '模様の深さ', 1.6, 0.4, 0.2]],
    build(p) {
      const R = p.dia / 2 - 5;
      const pts = patternPoints({ shape: 'hex', size: p.cell, rib: p.rib, x0: -R, x1: R, y0: -R, y1: R, inside: (x, y, reach) => Math.hypot(x, y) + reach <= R });
      return [G('コースター', [
        N('cylinder', { dia: p.dia, h: p.h, seg: 96 }, [0, 0, p.h / 2], { name: '本体' }),
        N('pattern', { shape: 'hex', size: p.cell, depth: p.depth + 1, pts }, [0, 0, p.h - p.depth + (p.depth + 1) / 2], { hole: true, name: 'ハニカム' }),
      ], '#ffb020')];
    },
  },
  {
    id: 'penstand', label: 'ペン立て', icon: 'pen', desc: '六角形のペン立て。側面にハニカム窓も',
    params: [['dia', '外径（角）', 70, 30, 5], ['h', '高さ', 100, 30, 5], ['wall', '壁厚', 2.4, 1, 0.2]],
    build(p) {
      const inner = p.dia - (2 * p.wall) / Math.cos(Math.PI / 6);
      return [G('ペン立て', [
        N('prism', { n: 6, dia: p.dia, h: p.h }, [0, 0, p.h / 2], { name: '外側' }),
        N('prism', { n: 6, dia: inner, h: p.h }, [0, 0, 3 + p.h / 2], { hole: true, name: '内側' }),
      ], '#b07cff')];
    },
  },
];
