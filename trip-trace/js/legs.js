// Turns a segment (from spot → to spot, with a mode) into drawable legs: [{mode, coords, label?, approx?}].
import { route } from './services.js';
import { travelHours } from './analyze.js';
import { greatCircle, softCurve, distKm, pathKm } from './geo.js';

const straight = (a, b) => [[a.lat, a.lon], [b.lat, b.lon]];

async function ground(profile, a, b, mode) {
  const r = await route(profile, a, b);
  if (r?.parts?.length) return r.parts.map(p => ({ mode: p.mode, coords: p.coords }));
  if (r?.none) return [{ mode: 'boat', coords: softCurve(a, b, 40, 0.08), approx: true, note: '陸路がないため船で表示' }];
  return [{ mode, coords: straight(a, b), approx: true, offline: true }];
}

export async function buildLegs(seg, from, to) {
  switch (seg.mode) {
    case 'plane':
      return [{ mode: 'plane', coords: greatCircle(from, to) }];
    case 'boat': {
      // Use the real ferry line when the road network has one, otherwise a gentle curve.
      const r = await route('car', from, to);
      const boatKm = r?.parts?.filter(p => p.mode === 'boat').reduce((s, p) => s + pathKm(p.coords), 0) || 0;
      if (r?.parts?.length && boatKm > 0.5 * (r.km || 1)) return r.parts.map(p => ({ mode: p.mode, coords: p.coords }));
      return [{ mode: 'boat', coords: softCurve(from, to, 40, 0.08), approx: true }];
    }
    case 'walk':
      return ground('foot', from, to, 'walk');
    case 'car':
      return ground('car', from, to, 'car');
    case 'train': {
      const A = seg.stationFrom, B = seg.stationTo;
      if (A && B && A.name !== B.name) {
        const legs = [];
        if (distKm(from, A) > 0.08) legs.push(...await ground('foot', from, A, 'walk'));
        legs.push({ mode: 'train', coords: softCurve(A, B), approx: true, label: `${A.name} → ${B.name}` });
        if (distKm(B, to) > 0.08) legs.push(...await ground('foot', B, to, 'walk'));
        return legs;
      }
      return [{ mode: 'train', coords: softCurve(from, to), approx: true }];
    }
    default:
      return [{ mode: seg.mode, coords: straight(from, to), approx: true }];
  }
}

/** Placeholder shown until the real route arrives. */
export function draftLegs(seg, from, to) {
  if (seg.mode === 'plane') return [{ mode: 'plane', coords: greatCircle(from, to), draft: true }];
  return [{ mode: seg.mode, coords: straight(from, to), draft: true }];
}

/** Summary used by the timeline: icon sequence, dominant mode and distance. */
export function legSummary(legs) {
  const seq = [];
  const byMode = {};
  let km = 0, hours = 0;
  for (const l of legs) {
    const d = pathKm(l.coords);
    km += d;
    hours += travelHours(l.mode, d);
    byMode[l.mode] = (byMode[l.mode] || 0) + d;
    if (seq[seq.length - 1] !== l.mode) seq.push(l.mode);
  }
  const main = Object.entries(byMode).sort((a, b) => b[1] - a[1])[0]?.[0];
  return { seq, main, km, hours, train: legs.find(l => l.label)?.label || null, note: legs.find(l => l.note)?.note || null };
}
