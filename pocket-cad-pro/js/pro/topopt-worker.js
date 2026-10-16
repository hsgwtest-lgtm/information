// Runs the topology optimizer (topopt.js) off the main thread so the editor stays smooth.
// in:  { prob, coarse, opts, phys: { E, t } }
// out: { type: 'iter', it, phase, vol, x, nelx, nely } per iteration,
//      then { type: 'done', it, x, threshold, ev } or { type: 'error', message }
import { optimize, evaluate, pickThreshold } from './topopt.js';

self.onmessage = (e) => {
  const { prob, coarse, opts, phys } = e.data;
  try {
    const run = optimize(prob, coarse, opts);
    let r = run.next();
    while (!r.done) {
      const { sim, phase } = r.value;
      self.postMessage({ type: 'iter', it: sim.it + (sim.prevIters || 0), phase, vol: sim.volFrac(), x: Float32Array.from(sim.xPhys), nelx: sim.prob.nelx, nely: sim.prob.nely });
      r = run.next();
    }
    const sim = r.value;
    const threshold = pickThreshold(sim.xPhys, sim.prob);
    self.postMessage({ type: 'done', it: sim.it + (sim.prevIters || 0), x: Float32Array.from(sim.xPhys), threshold, ev: evaluate(sim, sim.xPhys, { ...phys, threshold }) });
  } catch (err) {
    self.postMessage({ type: 'error', message: err?.message || String(err) });
  }
};
