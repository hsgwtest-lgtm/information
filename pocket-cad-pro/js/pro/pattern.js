// Hole pattern layouts. Hexagons have corners on ±X (flat top and bottom), matching
// the 'pattern' kind in geometry.js.
//   size: across flats (hex) / diameter (circle) / side (square)
//   rib:  wall thickness left between neighbouring holes
// `inside(x, y, reach)` decides whether a hole centred at (x, y) fits; `reach` is the
// hole's outer radius so callers can keep a margin.

export function patternPoints({ shape, size, rib, x0, x1, y0, y1, inside }) {
  const pts = [];
  if (shape === 'hex') {
    const pitch = size + rib; // centre distance between neighbouring hexes (flat to flat)
    const rc = pitch / Math.sqrt(3);
    const dx = 1.5 * rc, dy = pitch;
    const reach = size / Math.sqrt(3);
    const cols = Math.floor((x1 - x0) / dx) + 2, rows = Math.floor((y1 - y0) / dy) + 2;
    const cx = (x0 + x1) / 2, cy = (y0 + y1) / 2;
    for (let i = -Math.ceil(cols / 2); i <= Math.ceil(cols / 2); i++) {
      for (let j = -Math.ceil(rows / 2); j <= Math.ceil(rows / 2); j++) {
        const x = cx + i * dx, y = cy + j * dy + (Math.abs(i) % 2 ? dy / 2 : 0);
        if (inside(x, y, reach)) pts.push([round(x), round(y)]);
      }
    }
  } else {
    const pitch = size + rib;
    const reach = shape === 'square' ? size * Math.SQRT1_2 : size / 2;
    const nx = Math.floor((x1 - x0) / pitch) + 2, ny = Math.floor((y1 - y0) / pitch) + 2;
    const cx = (x0 + x1) / 2, cy = (y0 + y1) / 2;
    for (let i = -Math.ceil(nx / 2); i <= Math.ceil(nx / 2); i++) {
      for (let j = -Math.ceil(ny / 2); j <= Math.ceil(ny / 2); j++) {
        const x = cx + i * pitch, y = cy + j * pitch;
        if (inside(x, y, reach)) pts.push([round(x), round(y)]);
      }
    }
  }
  return pts;
}

const round = (v) => Math.round(v * 1000) / 1000;

// Points around a hole's rim, used to check the hole lies fully inside a part.
export function rimSamples(x, y, r, n = 8) {
  return Array.from({ length: n }, (_, k) => [x + r * Math.cos((k / n) * Math.PI * 2), y + r * Math.sin((k / n) * Math.PI * 2)]);
}
