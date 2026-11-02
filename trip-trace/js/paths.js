// Geometry for each move: a list of legs [{mode, coords, hours, approx?, label?}].
import { route } from './net.js';
import { travelHours } from './analyze.js';
import { greatCircle, bow, straight, distKm, pathKm } from './geo.js';

function fromRoute(r, fallbackMode) {
  return r.parts.map(p => {
    const k = pathKm(p.coords);
    const share = r.km > 0 ? k / r.km : 1;
    const hours = p.mode === 'boat' ? travelHours('boat', k) : (r.hours || travelHours(fallbackMode, r.km)) * share;
    return { mode: p.mode, coords: p.coords, hours };
  });
}

async function ground(profile, a, b, mode) {
  const r = await route(profile, a, b);
  if (r?.parts?.length) return fromRoute(r, mode);
  if (r?.none) return [{ mode: 'boat', coords: bow(a, b), hours: travelHours('boat', distKm(a, b)), approx: true }];
  return [{ mode, coords: straight(a, b), hours: travelHours(mode, distKm(a, b)), approx: true }];
}

/** Rail line between two points: the road route when it runs alongside, otherwise a straight line. */
async function rail(a, b, label) {
  const d = distKm(a, b);
  const r = await route('car', a, b);
  const hours = travelHours('train', d);
  if (r?.parts?.length && r.parts.every(p => p.mode === 'car') && r.km <= d * 1.6 + 0.5) {
    return { mode: 'train', coords: r.parts[0].coords, hours, label, approx: true };
  }
  return { mode: 'train', coords: straight(a, b), hours, label, approx: true };
}

export async function legsFor(move, a, b) {
  switch (move.mode) {
    case 'plane':
      return [{ mode: 'plane', coords: greatCircle(a, b), hours: travelHours('plane', distKm(a, b)) }];
    case 'walk':
      return ground('foot', a, b, 'walk');
    case 'car':
      return ground('car', a, b, 'car');
    case 'boat': {
      const r = await route('car', a, b);
      const boatKm = r?.parts?.filter(p => p.mode === 'boat').reduce((s, p) => s + pathKm(p.coords), 0) || 0;
      if (r?.parts?.length && boatKm > 0.5 * r.km) return fromRoute(r, 'car');
      return [{ mode: 'boat', coords: bow(a, b), hours: travelHours('boat', distKm(a, b)), approx: true }];
    }
    case 'train': {
      const A = move.stationA, B = move.stationB;
      if (A && B && A.name !== B.name) {
        const legs = [];
        if (distKm(a, A) > 0.08) legs.push(...await ground('foot', a, A, 'walk'));
        legs.push(await rail(A, B, `${A.name} → ${B.name}`));
        if (distKm(B, b) > 0.08) legs.push(...await ground('foot', B, b, 'walk'));
        return legs;
      }
      return [await rail(a, b, null)];
    }
    default:
      return [{ mode: move.mode, coords: straight(a, b), hours: travelHours(move.mode, distKm(a, b)), approx: true }];
  }
}

/** Immediate placeholder until the real geometry arrives. */
export function draftLegs(move, a, b) {
  const coords = move.mode === 'plane' ? greatCircle(a, b) : straight(a, b);
  return [{ mode: move.mode, coords, hours: travelHours(move.mode, distKm(a, b)), draft: true }];
}

export function summarize(legs) {
  let km = 0, hours = 0;
  const by = {};
  const seq = [];
  for (const l of legs) {
    const k = pathKm(l.coords);
    km += k;
    hours += l.hours || 0;
    by[l.mode] = (by[l.mode] || 0) + k;
    if (seq[seq.length - 1] !== l.mode) seq.push(l.mode);
  }
  const main = Object.entries(by).sort((x, y) => y[1] - x[1])[0]?.[0];
  return { km, hours, main, seq, label: legs.find(l => l.label)?.label || null };
}
