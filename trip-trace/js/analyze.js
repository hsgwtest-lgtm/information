// Trip analysis: pure functions, no DOM and no network.
// photos → outliers removed → spots (nearby shots grouped) → segments (moves with an estimated mode) → highlights.
import { distKm } from './geo.js';
import { fmtKm, fmtDur, dayKey } from './fmt.js';

export const MODES = {
  walk:  { icon: '🚶', label: '徒歩',        color: '#10b981', kmh: 4.5 },
  train: { icon: '🚃', label: '電車',        color: '#f59e0b', kmh: 45 },
  car:   { icon: '🚕', label: '車・タクシー', color: '#ec4899', kmh: 30 },
  boat:  { icon: '⛴️', label: '船',          color: '#0ea5e9', kmh: 25 },
  plane: { icon: '✈️', label: '飛行機',      color: '#8b5cf6', kmh: 700 },
};
export const MODE_LIST = ['walk', 'train', 'car', 'boat', 'plane'];

export const CFG = {
  spotRadiusM: 200,     // a photo joins the current spot within this distance of its centre
  spotLongGapMin: 180,  // after this long, a photo must be very close to stay in the same spot
  attachMin: 45,        // a photo without GPS joins the spot taken within this many minutes
  blockGapH: 48,        // photos separated from the main group by this gap are date outliers
  minorBlockRatio: 0.2, // ...if their group is smaller than this share of the main group
  maxAccM: 1500,        // GPS error radius above which a position is not trusted
  spikeMinKm: 2,        // a "spike" goes at least this far away from both neighbours
  spikeRatio: 0.3,      // ...while the neighbours are close to each other
  spikeKmh: 80,         // ...and going there and back would need this speed
  impossibleKmh: 1000,  // faster than any airliner
  impossibleMinKm: 30,
  walkAlwaysKm: 1.0,
  walkMaxKm: 3.0,
  walkKmh: 4.5,
  planeAlwaysKm: 800,
  planeMinKm: 300,
  planeKmh: 250,
  longGroundKm: 25,     // without station data, long ground moves default to train
};

const byTime = (a, b) => a.time - b.time;
const located = p => p.lat != null && p.lon != null;
const speedKmh = (p, q) => distKm(p, q) / Math.max(Math.abs(q.time - p.time) / 3.6e6, 1 / 60);

/**
 * Find photos that should not be on the map.
 * keep: Set of ids the user forced back in (never flagged, but still used as neighbours).
 * Returns Map id → reason.
 */
export function detectOutliers(photos, keep = new Set(), cfg = CFG) {
  const reasons = new Map();
  const timed = photos.filter(p => p.time != null).sort(byTime);

  // 1) Date outliers: small groups of photos days away from the main group.
  if (timed.length >= 3) {
    const blocks = [];
    let cur = [timed[0]];
    for (let i = 1; i < timed.length; i++) {
      if (timed[i].time - timed[i - 1].time > cfg.blockGapH * 3.6e6) { blocks.push(cur); cur = []; }
      cur.push(timed[i]);
    }
    blocks.push(cur);
    if (blocks.length > 1) {
      const biggest = Math.max(...blocks.map(b => b.length));
      for (const b of blocks) {
        if (b.length >= biggest || b.length > Math.max(2, biggest * cfg.minorBlockRatio)) continue;
        for (const p of b) if (!keep.has(p.id)) reasons.set(p.id, '撮影日が他の写真から離れています');
      }
    }
  }

  // 2) Low-accuracy positions.
  for (const p of photos) {
    if (!located(p) || p.acc == null || keep.has(p.id) || reasons.has(p.id)) continue;
    if (p.acc > cfg.maxAccM) reasons.set(p.id, `位置の誤差が大きい写真です（±${fmtKm(p.acc / 1000)}）`);
  }

  // 3) Position spikes and impossible jumps, judged against time-ordered neighbours.
  let pts = timed.filter(p => located(p) && !reasons.has(p.id));
  for (let pass = 0; pass < 5; pass++) {
    let changed = false;
    for (let i = 0; i < pts.length; i++) {
      const x = pts[i];
      if (keep.has(x.id)) continue;
      const a = pts[i - 1], b = pts[i + 1];
      let bad = false;
      if (a && b) {
        const dax = distKm(a, x), dxb = distKm(x, b), dab = distKm(a, b);
        const hours = Math.max((b.time - a.time) / 3.6e6, 1 / 60);
        const spike = dax >= cfg.spikeMinKm && dxb >= cfg.spikeMinKm &&
          dab <= cfg.spikeRatio * Math.min(dax, dxb) && (dax + dxb) / hours > cfg.spikeKmh;
        const impossible = speedKmh(a, x) > cfg.impossibleKmh && dax > cfg.impossibleMinKm &&
          speedKmh(x, b) > cfg.impossibleKmh && dxb > cfg.impossibleMinKm;
        bad = spike || impossible;
      } else if (a || b) {
        // First or last photo: flag only if its one neighbour is consistent with the next one.
        const n1 = a || b, n2 = a ? pts[i - 2] : pts[i + 2];
        const jump = speedKmh(n1, x) > cfg.impossibleKmh && distKm(n1, x) > cfg.impossibleMinKm;
        bad = jump && (!n2 || speedKmh(n1, n2) <= cfg.impossibleKmh);
      }
      if (bad) {
        reasons.set(x.id, '前後の写真から大きく外れた位置です');
        pts.splice(i, 1);
        i--;
        changed = true;
      }
    }
    if (!changed) break;
  }
  return reasons;
}

/** Group time-ordered located photos into spots. */
export function clusterSpots(photos, cfg = CFG) {
  const pts = photos.filter(p => located(p) && p.time != null).sort(byTime);
  const spots = [];
  let cur = null;
  for (const p of pts) {
    if (cur) {
      const dM = distKm(cur, p) * 1000;
      const gapMin = (p.time - cur.end) / 60000;
      if (dM <= cfg.spotRadiusM && (gapMin <= cfg.spotLongGapMin || dM <= cfg.spotRadiusM / 2)) {
        cur.photos.push(p);
        cur.located++;
        cur.lat += (p.lat - cur.lat) / cur.located;
        cur.lon += (p.lon - cur.lon) / cur.located;
        cur.end = p.time;
        continue;
      }
    }
    cur = { lat: p.lat, lon: p.lon, start: p.time, end: p.time, photos: [p], located: 1 };
    spots.push(cur);
  }
  return spots;
}

/** Put photos that have a time but no GPS into the spot closest in time. Returns the ones left over. */
export function attachUnlocated(spots, photos, cfg = CFG) {
  const left = [];
  for (const p of photos) {
    if (located(p)) continue;
    if (p.time == null || !spots.length) { left.push(p); continue; }
    let best = null, bestMin = Infinity;
    for (const s of spots) {
      const m = p.time < s.start ? (s.start - p.time) / 60000 : p.time > s.end ? (p.time - s.end) / 60000 : 0;
      if (m < bestMin) { bestMin = m; best = s; }
    }
    if (bestMin <= cfg.attachMin) {
      best.photos.push(p);
      best.photos.sort(byTime);
      best.start = Math.min(best.start, p.time);
      best.end = Math.max(best.end, p.time);
    } else left.push(p);
  }
  return left;
}

/**
 * Estimate how the traveller got from one spot to the next.
 * stations: {spotKey: {name, lat, lon} | null}; a missing key means "not looked up".
 */
export function classify(from, to, stations, cfg = CFG) {
  const km = distKm(from, to);
  const gapH = Math.max((to.start - from.end) / 3.6e6, 1 / 60);
  const kmh = km / gapH;
  if (km < cfg.walkAlwaysKm) return { mode: 'walk', reason: `${fmtKm(km)}と近いので徒歩` };
  if (km >= cfg.planeAlwaysKm || (km >= cfg.planeMinKm && kmh >= cfg.planeKmh))
    return { mode: 'plane', reason: `${fmtKm(km)}を${fmtDur(gapH)}で移動` };
  if (km <= cfg.walkMaxKm && km / cfg.walkKmh <= gapH) return { mode: 'walk', reason: '歩ける距離と時間' };
  const A = stations?.[from.key], B = stations?.[to.key];
  if (A !== undefined && B !== undefined) {
    if (A && B && A.name !== B.name) return { mode: 'train', reason: `${A.name}駅と${B.name}駅が近い`, from: A, to: B };
    return { mode: 'car', reason: A || B ? '片方の近くに駅がない' : '近くに駅がない' };
  }
  return km >= cfg.longGroundKm
    ? { mode: 'train', reason: `${fmtKm(km)}の長距離` }
    : { mode: 'car', reason: '駅の情報を待っています' };
}

/** Spots worth a station lookup: endpoints of moves that are neither walks nor flights. */
export function spotsNeedingStations(spots, cfg = CFG) {
  const need = new Set();
  for (let i = 0; i + 1 < spots.length; i++) {
    const r = classify(spots[i], spots[i + 1], null, cfg);
    if (r.mode !== 'walk' && r.mode !== 'plane') { need.add(spots[i]); need.add(spots[i + 1]); }
  }
  return [...need];
}

/** Pick up to n photos spread evenly across the spot; starred photos always come first. */
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

export const segKey = (a, b) => `${a.key}>${b.key}`;

/**
 * Full analysis.
 * trip: { exclusions: {id: 'out'|'in'}, stars: {id: true}, modes: {segKey: mode}, highlightCount, spotRadiusM }
 */
export function analyze(photos, trip = {}, stations = null) {
  const cfg = { ...CFG, spotRadiusM: trip.spotRadiusM || CFG.spotRadiusM };
  const ex = trip.exclusions || {};
  const keep = new Set(Object.keys(ex).filter(id => ex[id] === 'in'));
  const candidates = photos.filter(p => ex[p.id] !== 'out');
  const auto = detectOutliers(candidates, keep, cfg);

  const excluded = [];
  const kept = [];
  for (const p of photos) {
    if (ex[p.id] === 'out') excluded.push({ photo: p, reason: '手動で除外しました', auto: false });
    else if (auto.has(p.id)) excluded.push({ photo: p, reason: auto.get(p.id), auto: true });
    else kept.push(p);
  }

  const spots = clusterSpots(kept, cfg);
  const unplaced = attachUnlocated(spots, kept, cfg).map(p => ({
    photo: p, reason: p.time == null ? '撮影日時がありません' : '位置情報がなく、近い時刻の写真もありません',
  }));

  const dayKeys = [];
  spots.forEach((s, i) => {
    s.idx = i;
    s.key = s.photos.find(located).id;
    s.off = s.photos.find(p => p.off)?.off || null;
    const dk = dayKey(s.start, s.off);
    if (!dayKeys.includes(dk)) dayKeys.push(dk);
    s.day = dayKeys.indexOf(dk);
    s.highlights = pickHighlights(s.photos, trip.highlightCount ?? 3, trip.stars || {});
  });
  const days = dayKeys.map((k, i) => ({ key: k, index: i, start: spots.find(s => s.day === i).start, off: spots.find(s => s.day === i).off }));

  const segments = [];
  for (let i = 0; i + 1 < spots.length; i++) {
    const from = spots[i], to = spots[i + 1];
    const auto = classify(from, to, stations, cfg);
    const key = segKey(from, to);
    const forced = trip.modes?.[key];
    segments.push({
      idx: i, key, from: i, to: i + 1, km: distKm(from, to),
      auto: auto.mode, mode: forced && MODES[forced] ? forced : auto.mode, forced: !!(forced && MODES[forced]),
      reason: auto.reason, stationFrom: auto.from || stations?.[from.key] || null, stationTo: auto.to || stations?.[to.key] || null,
      newDay: to.day !== from.day,
    });
  }
  return { spots, segments, excluded, unplaced, days, used: kept.length - unplaced.length };
}

/** Rough travel time for the clock during replay. */
export function travelHours(mode, km) {
  if (mode === 'plane') return km / MODES.plane.kmh + 0.5;
  return km / (MODES[mode]?.kmh || 30);
}
