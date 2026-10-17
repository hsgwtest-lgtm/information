// Runs lattice / shell jobs (sdf.js) off the main thread.
// in:  { job: 'lattice' | 'shell', pos: Float32Array (world triangles), open?: Uint8Array, opts }
// out: { type: 'progress', p, label } …, then { type: 'done', positions, volume, pieces, dropped }
//      or { type: 'error', message }
import { latticeJob, shellJob } from './sdf.js';

self.onmessage = (e) => {
  const { job, pos, open, opts } = e.data;
  const progress = (p, label) => self.postMessage({ type: 'progress', p, label });
  try {
    const r = job === 'shell' ? shellJob(pos, open, opts, progress) : latticeJob(pos, opts, progress);
    self.postMessage({ type: 'done', ...r }, [r.positions.buffer]);
  } catch (err) {
    self.postMessage({ type: 'error', message: err?.message || String(err) });
  }
};
