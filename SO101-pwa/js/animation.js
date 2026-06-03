// SO101 Animation — LERP/SLERP interpolation between poses

/**
 * Linear interpolation between two joint-angle arrays.
 * @param {number[]} from — start angles (6)
 * @param {number[]} to — end angles (6)
 * @param {number} t — 0..1
 * @returns {number[]}
 */
export function lerpAngles(from, to, t) {
  return from.map((a, i) => a + (to[i] - a) * t);
}

/**
 * Linear interpolation for gripper value.
 */
export function lerpGripper(from, to, t) {
  return from + (to - from) * t;
}

/**
 * Animate from one pose to another over `duration` seconds.
 * Calls `onFrame(angles, gripper, t)` each step.
 * Returns a Promise that resolves when done or rejects on cancel.
 *
 * @param {object} opts
 * @param {number[]} opts.fromAngles
 * @param {number[]} opts.toAngles
 * @param {number} opts.fromGripper
 * @param {number} opts.toGripper
 * @param {number} opts.duration — seconds
 * @param {Function} opts.onFrame — (angles, gripper, t) => void
 * @returns {{ promise: Promise<void>, cancel: Function }}
 */
export function animatePose(opts) {
  const {
    fromAngles, toAngles,
    fromGripper, toGripper,
    duration = 1.0,
    onFrame,
  } = opts;

  let cancelled = false;
  const stepMs = 50; // 0.05s per tick
  const totalSteps = Math.max(1, Math.round(duration * 1000 / stepMs));

  const promise = new Promise((resolve, reject) => {
    let step = 0;

    function tick() {
      if (cancelled) {
        reject(new Error('Animation cancelled'));
        return;
      }

      step++;
      const t = Math.min(step / totalSteps, 1);

      const angles = lerpAngles(fromAngles, toAngles, t);
      const gripper = lerpGripper(fromGripper, toGripper, t);

      onFrame(angles, gripper, t);

      if (t < 1) {
        setTimeout(tick, stepMs);
      } else {
        resolve();
      }
    }

    tick();
  });

  return {
    promise,
    cancel() { cancelled = true; },
  };
}
