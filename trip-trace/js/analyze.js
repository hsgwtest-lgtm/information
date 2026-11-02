// Trip analysis: pure functions (no DOM, no network).
// photos → outliers set aside → places (photos taken close together) → moves (with an estimated mode) → highlights.
import { distKm } from './geo.js';
import { km as fmtKm, dur as fmtDur, dayKey } from './fmt.js';

export const MODES = {
  walk:  { label: '徒歩',    by: '歩いて',     kmh: 4.5 },
  train: { label: '電車',    by: '電車で',     kmh: 40 },
  car:   { label: '車',      by: '車で',       kmh: 30 },
  boat:  { label: '船',      by: '船で',       kmh: 22 },
  plane: { label: '飛行機',  by: '飛行機で',   kmh: 750 },
};
export const MODE_ORDER = ['walk', 'train', 'car', 'boat', 'plane'];

export const CFG = {
  radiusM: 200,          // photos within this distance of a place's centre belong to it
  longGapMin: 180,       // after this long, a photo must be very close to stay in the same place
  attachMin: 45,         // a photo without GPS joins the place photographed within this many minutes
  dateGapH: 48,          // a group of photos separated by this gap from the rest…
  minorShare: 0.2,       // …and smaller than this share of the main group is set aside
  maxAccM: 1500,         // GPS error radius above which a position is not trusted
  spikeKm: 2,            // a spike goes at least this far from both neighbours
  spikeRatio: 0.3,       // while the neighbours stay close to each other
  spikeKmh: 80,          // and going there and back would need this speed
  jumpKmh: 1000,         // faster than any airliner
  jumpKm: 30,
  walkAlwaysKm: 1.0,
  walkMaxKm: 3.0,
  walkKmh: 4.5,
  planeAlwaysKm: 800,
  planeMinKm: 300,
  planeKmh: 250,
  longGroundKm: 25,
};

const byTime = (a, b) => a.time - b.time;
const located = p => p.lat != null && p.lon != null;
const kmh = (p, q) => distKm(p, q) / Math.max(Math.abs(q.time - p.time) / 3.6e6, 1 / 60);

/** Photos that should stay off the map. keep: ids the user put back. Returns Map id → reason. */
export function detectOutliers(photos, keep = new Set(), cfg = CFG) {
  const why = new Map();
  const timed = photos.filter(p => p.time != null).sort(byTime);

  // 1. Small groups of photos taken days away from the rest (old photos picked by mistake).
  if (timed.length >= 3) {
    const groups = [[timed[0]]];
    for (let i = 1; i < timed.length; i++) {
      if (timed[i].time - timed[i - 1].time > cfg.dateGapH * 3.6e6) groups.push([]);
      groups[groups.length - 1].push(timed[i]);
    }
    if (groups.length > 1) {
      const main = Math.max(...groups.map(g => g.length));
      for (const g of groups) {
        if (g.length === main || g.length > Math.max(2, main * cfg.minorShare)) continue;
        for (const p of g) if (!keep.has(p.id)) why.set(p.id, '撮影日がほかの写真から離れています');
      }
    }
  }

  // 2. Positions with a large error radius.
  for (const p of photos) {
    if (located(p) && p.acc != null && p.acc > cfg.maxAccM && !keep.has(p.id) && !why.has(p.id)) {
      why.set(p.id, `位置の誤差が大きい写真です（±${fmtKm(p.acc / 1000)}）`);
    }
  }

  // 3. Spikes and impossible jumps against time-ordered neighbours.
  const pts = timed.filter(p => located(p) && !why.has(p.id));
  for (let pass = 0; pass < 5; pass++) {
    let changed = false;
    for (let i = 0; i < pts.length; i++) {
      const x = pts[i];
      if (keep.has(x.id)) continue;
      const a = pts[i - 1], b = pts[i + 1];
      let bad = false;
      if (a && b) {
        const ax = distKm(a, x), xb = distKm(x, b), ab = distKm(a, b);
        const h = Math.max((b.time - a.time) / 3.6e6, 1 / 60);
        const spike = ax >= cfg.spikeKm && xb >= cfg.spikeKm && ab <= cfg.spikeRatio * Math.min(ax, xb) && (ax + xb) / h > cfg.spikeKmh;
        const jump = kmh(a, x) > cfg.jumpKmh && ax > cfg.jumpKm && kmh(x, b) > cfg.jumpKmh && xb > cfg.jumpKm;
        bad = spike || jump;
      } else if (a || b) {
        const n1 = a || b, n2 = a ? pts[i - 2] : pts[i + 2];
        bad = kmh(n1, x) > cfg.jumpKmh && distKm(n1, x) > cfg.jumpKm && (!n2 || kmh(n1, n2) <= cfg.jumpKmh);
      }
      if (bad) { why.set(x.id, '前後の写真から大きく外れた位置です'); pts.splice(i, 1); i--; changed = true; }
    }
    if (!changed) break;
  }
  return why;
}

/** Group time-ordered located photos into places. */
export function clusterPlaces(photos, cfg = CFG) {
  const pts = photos.filter(p => located(p) && p.time != null).sort(byTime);
  const out = [];
  let cur = null;
  for (const p of pts) {
    if (cur) {
      const m = distKm(cur, p) * 1000;
      const gap = (p.time - cur.end) / 60000;
      if (m <= cfg.radiusM && (gap <= cfg.longGapMin || m <= cfg.radiusM / 2)) {
        cur.photos.push(p);
        cur.n++;
        cur.lat += (p.lat - cur.lat) / cur.n;
        cur.lon += (p.lon - cur.lon) / cur.n;
        cur.end = p.time;
        continue;
      }
    }
    cur = { lat: p.lat, lon: p.lon, start: p.time, end: p.time, photos: [p], n: 1 };
    out.push(cur);
  }
  return out;
}

/** Photos with a time but no GPS join the place photographed closest in time. Returns the ones left over. */
export function attachUnlocated(places, photos, cfg = CFG) {
  const left = [];
  for (const p of photos) {
    if (located(p)) continue;
    if (p.time == null || !places.length) { left.push(p); continue; }
    let best = null, gap = Infinity;
    for (const s of places) {
      const m = p.time < s.start ? (s.start - p.time) / 60000 : p.time > s.end ? (p.time - s.end) / 60000 : 0;
      if (m < gap) { gap = m; best = s; }
    }
    if (gap <= cfg.attachMin) {
      best.photos.push(p);
      best.photos.sort(byTime);
      best.start = Math.min(best.start, p.time);
      best.end = Math.max(best.end, p.time);
    } else left.push(p);
  }
  return left;
}

/**
 * Estimate how the traveller moved between two places.
 * stations: {placeKey: {name, lat, lon} | null}; a missing key means "not looked up yet".
 */
export function classify(from, to, stations, cfg = CFG) {
  const d = distKm(from, to);
  const h = Math.max((to.start - from.end) / 3.6e6, 1 / 60);
  if (d < cfg.walkAlwaysKm) return { mode: 'walk', reason: `${fmtKm(d)}と近いので徒歩` };
  if (d >= cfg.planeAlwaysKm || (d >= cfg.planeMinKm && d / h >= cfg.planeKmh)) return { mode: 'plane', reason: `${fmtKm(d)}を${fmtDur(h)}で移動` };
  if (d <= cfg.walkMaxKm && d / cfg.walkKmh <= h) return { mode: 'walk', reason: '歩ける距離と時間' };
  const A = stations?.[from.key], B = stations?.[to.key];
  if (A !== undefined && B !== undefined) {
    if (A && B && A.name !== B.name) return { mode: 'train', reason: `${A.name}駅と${B.name}駅が近い`, a: A, b: B };
    return { mode: 'car', reason: A || B ? '片方の近くに駅がない' : '近くに駅がない' };
  }
  return d >= cfg.longGroundKm ? { mode: 'train', reason: `${fmtKm(d)}の長い移動` } : { mode: 'car', reason: '駅を調べています' };
}

/** Places worth a station lookup: ends of moves that are neither walks nor flights. */
export function placesNeedingStations(places, cfg = CFG) {
  const need = new Set();
  for (let i = 0; i + 1 < places.length; i++) {
    const m = classify(places[i], places[i + 1], null, cfg).mode;
    if (m !== 'walk' && m !== 'plane') { need.add(places[i]); need.add(places[i + 1]); }
  }
  return [...need];
}

/** Up to n photos spread across the visit; starred photos always come first. */
export function pickHighlights(photos, n, stars = {}) {
  if (!n || n >= photos.length) return photos.slice();
  const starred = photos.filter(p => stars[p.id]);
  const rest = photos.filter(p => !stars[p.id]);
  const need = Math.max(0, n - starred.length);
  const picked = [];
  if (need >= rest.length) picked.push(...rest);
  else for (let j = 0; j < need; j++) picked.push(rest[Math.floor((j + 0.5) * rest.length / need)]);
  return [...starred, ...picked].sort(byTime);
}

export const moveKey = (a, b) => `${a.key}>${b.key}`;

/** Rough travel time in hours (route duration wins when known). */
export function travelHours(mode, d, routeHours) {
  if (routeHours && (mode === 'walk' || mode === 'car')) return routeHours;
  if (mode === 'plane') return d / MODES.plane.kmh + 0.6;
  if (mode === 'train') return d / MODES.train.kmh + 0.1;
  return d / (MODES[mode]?.kmh || 30);
}

/**
 * Full analysis.
 * trip: {settings: {perPlace, radiusM}, exclusions: {id: 'out'|'in'}, stars: {id: true}, modes: {moveKey: mode}}
 */
export function analyze(photos, trip = {}, stations = null) {
  const set = trip.settings || {};
  const cfg = { ...CFG, radiusM: set.radiusM || CFG.radiusM };
  const ex = trip.exclusions || {};
  const keep = new Set(Object.keys(ex).filter(id => ex[id] === 'in'));
  const auto = detectOutliers(photos.filter(p => ex[p.id] !== 'out'), keep, cfg);

  const excluded = [], kept = [];
  for (const p of photos) {
    if (ex[p.id] === 'out') excluded.push({ photo: p, reason: '手動で外しました', auto: false });
    else if (auto.has(p.id)) excluded.push({ photo: p, reason: auto.get(p.id), auto: true });
    else kept.push(p);
  }

  const places = clusterPlaces(kept, cfg);
  const unplaced = attachUnlocated(places, kept, cfg).map(p => ({
    photo: p, reason: p.time == null ? '撮影日時がありません' : '位置情報がなく、近い時刻の写真もありません',
  }));

  const dayKeys = [];
  places.forEach((s, i) => {
    s.idx = i;
    s.key = s.photos.find(located).id;
    s.off = s.photos.find(p => p.off)?.off || null;
    const k = dayKey(s.start, s.off);
    if (!dayKeys.includes(k)) dayKeys.push(k);
    s.day = dayKeys.indexOf(k);
    s.highlights = pickHighlights(s.photos, set.perPlace ?? 3, trip.stars || {});
  });
  const days = dayKeys.map((k, i) => {
    const first = places.find(s => s.day === i);
    return { key: k, index: i, start: first.start, off: first.off };
  });

  const moves = [];
  for (let i = 0; i + 1 < places.length; i++) {
    const a = places[i], b = places[i + 1];
    const est = classify(a, b, stations, cfg);
    const key = moveKey(a, b);
    const forced = trip.modes?.[key];
    const ok = forced && MODES[forced];
    moves.push({
      idx: i, key, from: i, to: i + 1, km: distKm(a, b),
      auto: est.mode, mode: ok ? forced : est.mode, forced: !!ok, reason: est.reason,
      stationA: est.a || stations?.[a.key] || null, stationB: est.b || stations?.[b.key] || null,
      newDay: b.day !== a.day,
    });
  }
  return { places, moves, excluded, unplaced, days, used: kept.length - unplaced.length };
}
