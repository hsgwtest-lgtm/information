// Involute spur gear outline (counter-clockwise, centered on the origin).
// m: module, z: teeth, alphaDeg: pressure angle, backlash: mm removed from each tooth.

const inv = (a) => Math.tan(a) - a;

export function gearOutline({ m, z, alphaDeg = 20, backlash = 0.1, flankSteps = 8 }) {
  z = Math.max(6, Math.round(z));
  const alpha = alphaDeg * Math.PI / 180;
  const rp = m * z / 2;
  const rb = rp * Math.cos(alpha);
  const ra = rp + m;
  const rf = Math.max(rp - 1.25 * m, m * 0.5);
  const pitchAngle = (2 * Math.PI) / z;
  // Half tooth angle at the base circle, reduced for backlash.
  const halfBase = Math.PI / (2 * z) + inv(alpha) - backlash / (2 * rp);
  const halfAt = (r) => {
    if (r <= rb) return halfBase;
    const t = Math.acos(rb / r);
    return halfBase - inv(t);
  };
  const flankStart = Math.max(rf, rb);
  const radii = [];
  if (rf < rb) radii.push(rf);
  for (let k = 0; k <= flankSteps; k++) radii.push(flankStart + (ra - flankStart) * (k / flankSteps) ** 1.3);
  const pts = [];
  const polar = (r, a) => pts.push([r * Math.cos(a), r * Math.sin(a)]);
  for (let t = 0; t < z; t++) {
    const c = t * pitchAngle;
    // Rising (right) flank: angle increases with radius.
    for (const r of radii) polar(r, c - Math.max(0, halfAt(r)));
    // Tip land.
    const tipHalf = Math.max(0, halfAt(ra));
    if (tipHalf > 0) polar(ra, c + tipHalf * 0.0);
    // Falling (left) flank back to the root.
    for (let k = radii.length - 1; k >= 0; k--) polar(radii[k], c + Math.max(0, halfAt(radii[k])));
    // Root land up to the next tooth.
    const a0 = c + halfBase, a1 = c + pitchAngle - halfBase;
    if (a1 > a0) for (let k = 1; k <= 3; k++) polar(rf, a0 + (a1 - a0) * k / 4);
  }
  // Drop consecutive duplicates (pointy tips produce them).
  return pts.filter((p, i) => {
    const q = pts[(i + pts.length - 1) % pts.length];
    return Math.hypot(p[0] - q[0], p[1] - q[1]) > 1e-4;
  }).map(([x, y]) => [Math.round(x * 1e4) / 1e4, Math.round(y * 1e4) / 1e4]);
}

export const gearInfo = (m, z) => ({ pitchDia: m * z, outerDia: m * (z + 2), rootDia: m * (z - 2.5) });
