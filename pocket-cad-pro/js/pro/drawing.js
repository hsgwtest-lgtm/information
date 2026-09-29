// 三面図 (third-angle orthographic drawing) as an A4 landscape SVG:
// front / top / right views, hidden edges dashed, overall dimensions, title block.
import { BufferGeometry, Float32BufferAttribute, Vector3, Ray, DoubleSide, MeshBVH } from '../../vendor/vendor.js';
import { featureEdges } from './edges.js';

const VIEWS = {
  front: { dir: new Vector3(0, 1, 0), uv: (p) => [p.x, p.z] },
  top: { dir: new Vector3(0, 0, -1), uv: (p) => [p.x, p.y] },
  right: { dir: new Vector3(-1, 0, 0), uv: (p) => [p.y, p.z] },
};
const SCALES = [10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02];
const esc = (s) => String(s).replace(/[<>&"]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;' }[c]));
const n2 = (v) => (Math.round(v * 100) / 100).toString();

// parts: [{ geometry, matrix }] (world space via matrix)
export function buildDrawing(parts, { title = '', date = new Date() } = {}) {
  // World-space triangle soup + BVH for visibility tests.
  let total = 0;
  for (const p of parts) total += p.geometry.getAttribute('position').array.length;
  const soup = new Float32Array(total);
  const v = new Vector3();
  let o = 0;
  const min = new Vector3(Infinity, Infinity, Infinity), max = new Vector3(-Infinity, -Infinity, -Infinity);
  for (const p of parts) {
    const a = p.geometry.getAttribute('position').array;
    for (let i = 0; i < a.length; i += 3) {
      v.set(a[i], a[i + 1], a[i + 2]).applyMatrix4(p.matrix);
      soup[o++] = v.x; soup[o++] = v.y; soup[o++] = v.z;
      min.min(v); max.max(v);
    }
  }
  const world = new BufferGeometry();
  world.setAttribute('position', new Float32BufferAttribute(soup, 3));
  const bvh = new MeshBVH(world);

  const smooth = [];
  const creases = featureEdges(soup, 20, smooth);
  const size = new Vector3().subVectors(max, min);
  const budget = 150000;
  // Silhouettes of curved surfaces: the smooth edges where the surface turns away from the viewer.
  const edgesFor = (dir) => creases.concat(smooth.filter(([, , n1, n2]) => (n1.dot(dir) > 1e-6) !== (n2.dot(dir) > 1e-6)).map(([a, b]) => [a, b]));
  const piecesFor = (len, count) => Math.max(1, Math.min(8, Math.ceil(len / 3), Math.floor(budget / Math.max(1, count))));

  const ray = new Ray();
  const hidden = (point, dir) => {
    ray.origin.copy(point).addScaledVector(dir, -0.02);
    ray.direction.copy(dir).negate();
    const hit = bvh.raycastFirst(ray, DoubleSide);
    return !!hit && hit.distance > 0.05;
  };

  // Per view: polylines split into visible / hidden runs, in model units.
  const project = (view) => {
    const { dir, uv } = VIEWS[view];
    const vis = [], hid = [];
    const edges = edgesFor(dir);
    for (const [a, b] of edges) {
      const pa = uv(a), pb = uv(b);
      if (Math.hypot(pb[0] - pa[0], pb[1] - pa[1]) < 1e-3) continue; // edge seen end-on
      const k = piecesFor(a.distanceTo(b), edges.length);
      let runStart = 0, runHidden = null;
      for (let i = 0; i <= k; i++) {
        const h = i < k ? hidden(new Vector3().lerpVectors(a, b, (i + 0.5) / k), dir) : null;
        if (i === k || (runHidden !== null && h !== runHidden)) {
          const s = new Vector3().lerpVectors(a, b, runStart / k), e = new Vector3().lerpVectors(a, b, i / k);
          (runHidden ? hid : vis).push([uv(s), uv(e)]);
          runStart = i;
        }
        runHidden = h;
      }
    }
    return { vis, hid };
  };
  const views = { front: project('front'), top: project('top'), right: project('right') };

  // ---- layout on A4 landscape (mm) ----
  const W = size.x, D = size.y, H = size.z, gap = 18;
  const areaW = 297 - 30 - 25, areaH = 175 - 15 - 22;
  const scale = SCALES.find((s) => (W + D) * s + gap <= areaW && (H + D) * s + gap <= areaH) || SCALES[SCALES.length - 1];
  // Centre the three views in the drawing area (15..282 × 15..175 minus dimension space).
  const blockW = (W + D) * scale + gap, blockH = (H + D) * scale + gap;
  const frontLeft = 15 + 22 + Math.max(0, (areaW - blockW) / 2);
  const frontBottom = 175 - 14 - Math.max(0, (areaH - blockH) / 2);
  const frontTop = frontBottom - H * scale;
  const topBottom = frontTop - gap;
  const rightLeft = frontLeft + W * scale + gap;
  const place = {
    front: ([u, w]) => [frontLeft + (u - min.x) * scale, frontBottom - (w - min.z) * scale],
    top: ([u, w]) => [frontLeft + (u - min.x) * scale, topBottom - (w - min.y) * scale],
    right: ([u, w]) => [rightLeft + (u - min.y) * scale, frontBottom - (w - min.z) * scale],
  };
  const lines = (segs, view) => segs.map(([a, b]) => {
    const [x1, y1] = place[view](a), [x2, y2] = place[view](b);
    return `M${n2(x1)} ${n2(y1)}L${n2(x2)} ${n2(y2)}`;
  }).join('');

  const dim = (x1, y1, x2, y2, text, vertical = false) => {
    const tx = (x1 + x2) / 2, ty = (y1 + y2) / 2;
    return `<line x1="${n2(x1)}" y1="${n2(y1)}" x2="${n2(x2)}" y2="${n2(y2)}" class="d" marker-start="url(#a)" marker-end="url(#a)"/>` +
      (vertical
        ? `<text x="${n2(tx - 1.5)}" y="${n2(ty)}" class="t" transform="rotate(-90 ${n2(tx - 1.5)} ${n2(ty)})" text-anchor="middle">${text}</text>`
        : `<text x="${n2(tx)}" y="${n2(ty - 1.5)}" class="t" text-anchor="middle">${text}</text>`);
  };
  const ext = (x1, y1, x2, y2) => `<line x1="${n2(x1)}" y1="${n2(y1)}" x2="${n2(x2)}" y2="${n2(y2)}" class="e"/>`;
  const fr = frontLeft + W * scale, rr = rightLeft + D * scale;
  const dy = frontBottom + 8;
  const dims = [
    ext(frontLeft, frontBottom + 1, frontLeft, dy + 1.5), ext(fr, frontBottom + 1, fr, dy + 1.5), dim(frontLeft, dy, fr, dy, n2(W)),
    ext(frontLeft - 1, frontBottom, frontLeft - 9.5, frontBottom), ext(frontLeft - 1, frontTop, frontLeft - 9.5, frontTop), dim(frontLeft - 8, frontBottom, frontLeft - 8, frontTop, n2(H), true),
    ext(rightLeft, frontBottom + 1, rightLeft, dy + 1.5), ext(rr, frontBottom + 1, rr, dy + 1.5), dim(rightLeft, dy, rr, dy, n2(D)),
  ].join('');
  const label = (x, y, t) => `<text x="${n2(x)}" y="${n2(y)}" class="t s">${t}</text>`;
  const scaleText = scale >= 1 ? `${scale}:1` : `1:${Math.round(1 / scale)}`;
  const d = date.toLocaleDateString('ja-JP');
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="297mm" height="210mm" viewBox="0 0 297 210">
<defs><marker id="a" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse"><path d="M0 2L10 5L0 8z" fill="#000"/></marker>
<style>.v{fill:none;stroke:#000;stroke-width:.35;stroke-linecap:round}.h{fill:none;stroke:#666;stroke-width:.2;stroke-dasharray:1.5 1}.d{stroke:#000;stroke-width:.18}.e{stroke:#000;stroke-width:.13}.t{font:3.2px sans-serif;fill:#000}.s{font-size:2.6px;fill:#444}.b{fill:none;stroke:#000;stroke-width:.5}</style></defs>
<rect width="297" height="210" fill="#fff"/>
<rect x="10" y="10" width="277" height="190" class="b"/>
<path class="h" d="${lines(views.front.hid, 'front')}${lines(views.top.hid, 'top')}${lines(views.right.hid, 'right')}"/>
<path class="v" d="${lines(views.front.vis, 'front')}${lines(views.top.vis, 'top')}${lines(views.right.vis, 'right')}"/>
${dims}
${label(frontLeft, topBottom - D * scale - 3, '平面図')}${label(frontLeft, frontTop - 3, '正面図')}${label(rightLeft, frontTop - 3, '右側面図')}
<g transform="translate(177 178)"><rect width="110" height="22" class="b"/><line x1="0" y1="11" x2="110" y2="11" class="e"/><line x1="70" y1="0" x2="70" y2="22" class="e"/>
<text x="3" y="8" class="t">${esc(title || '無題')}</text><text x="3" y="18.5" class="t s">第三角法 ・ 単位 mm ・ 外形 ${n2(W)} × ${n2(D)} × ${n2(H)}</text>
<text x="73" y="8" class="t">尺度 ${scaleText}</text><text x="73" y="18.5" class="t s">${esc(d)} ・ Pocket CAD Pro</text></g>
</svg>`;
  return { svg, scale: scaleText, edges: creases.length };
}
