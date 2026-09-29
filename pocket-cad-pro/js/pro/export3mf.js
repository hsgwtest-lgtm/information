// 3MF (one object per part, with colors) and OBJ writers.
import { Vector3 } from '../../vendor/vendor.js';

const xmlEsc = (s) => String(s).replace(/[<>&"']/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;', "'": '&apos;' }[c]));

// Shared-vertex mesh in world coordinates from a non-indexed geometry + matrix.
function indexed({ geometry, matrix }) {
  const p = geometry.getAttribute('position').array;
  const flip = matrix.determinant() < 0;
  const map = new Map();
  const verts = [], tris = [];
  const v = new Vector3();
  const idx = (i) => {
    v.set(p[i], p[i + 1], p[i + 2]).applyMatrix4(matrix);
    const key = `${Math.round(v.x * 1e4)},${Math.round(v.y * 1e4)},${Math.round(v.z * 1e4)}`;
    let k = map.get(key);
    if (k === undefined) { k = verts.length / 3; map.set(key, k); verts.push(v.x, v.y, v.z); }
    return k;
  };
  for (let i = 0; i < p.length; i += 9) {
    const a = idx(i), b = idx(i + 3), c = idx(i + 6);
    if (a === b || b === c || a === c) continue;
    if (flip) tris.push(a, c, b); else tris.push(a, b, c);
  }
  return { verts, tris };
}

const num = (x) => (Math.round(x * 1e4) / 1e4).toString();

// parts: [{ geometry, matrix, name, color '#rrggbb' }]
export function build3mfModel(parts) {
  const out = [];
  out.push('<?xml version="1.0" encoding="UTF-8"?>\n<model unit="millimeter" xml:lang="ja-JP" xmlns="http://schemas.microsoft.com/3dmanufacturing/core/2015/02">\n');
  out.push(' <metadata name="Application">Pocket CAD Pro</metadata>\n <resources>\n  <basematerials id="1">\n');
  parts.forEach((p) => out.push(`   <base name="${xmlEsc(p.name)}" displaycolor="${(p.color || '#cccccc').toUpperCase()}FF"/>\n`));
  out.push('  </basematerials>\n');
  parts.forEach((p, i) => {
    const { verts, tris } = indexed(p);
    out.push(`  <object id="${i + 2}" type="model" name="${xmlEsc(p.name)}" pid="1" pindex="${i}">\n   <mesh>\n    <vertices>\n`);
    for (let k = 0; k < verts.length; k += 3) out.push(`     <vertex x="${num(verts[k])}" y="${num(verts[k + 1])}" z="${num(verts[k + 2])}"/>\n`);
    out.push('    </vertices>\n    <triangles>\n');
    for (let k = 0; k < tris.length; k += 3) out.push(`     <triangle v1="${tris[k]}" v2="${tris[k + 1]}" v3="${tris[k + 2]}"/>\n`);
    out.push('    </triangles>\n   </mesh>\n  </object>\n');
  });
  out.push(' </resources>\n <build>\n');
  parts.forEach((_, i) => out.push(`  <item objectid="${i + 2}"/>\n`));
  out.push(' </build>\n</model>\n');
  return out.join('');
}

const CONTENT_TYPES = '<?xml version="1.0" encoding="UTF-8"?>\n<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="model" ContentType="application/vnd.ms-package.3dmanufacturing-3dmodel+xml"/></Types>';
const RELS = '<?xml version="1.0" encoding="UTF-8"?>\n<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Target="/3D/3dmodel.model" Id="rel0" Type="http://schemas.microsoft.com/3dmanufacturing/2013/01/3dmodel"/></Relationships>';

export async function build3mf(parts) {
  return zip([
    ['[Content_Types].xml', CONTENT_TYPES],
    ['_rels/.rels', RELS],
    ['3D/3dmodel.model', build3mfModel(parts)],
  ]);
}

export function buildObj(parts) {
  const out = ['# Pocket CAD Pro\n'];
  let base = 1;
  for (const p of parts) {
    const { verts, tris } = indexed(p);
    out.push(`o ${p.name.replace(/\s+/g, '_')}\n`);
    for (let k = 0; k < verts.length; k += 3) out.push(`v ${num(verts[k])} ${num(verts[k + 1])} ${num(verts[k + 2])}\n`);
    for (let k = 0; k < tris.length; k += 3) out.push(`f ${tris[k] + base} ${tris[k + 1] + base} ${tris[k + 2] + base}\n`);
    base += verts.length / 3;
  }
  return out.join('');
}

// ---- minimal ZIP writer (deflate via CompressionStream when available) ----
const CRC_TABLE = (() => {
  const t = new Uint32Array(256);
  for (let n = 0; n < 256; n++) { let c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1; t[n] = c >>> 0; }
  return t;
})();
function crc32(bytes) {
  let c = 0xffffffff;
  for (let i = 0; i < bytes.length; i++) c = CRC_TABLE[(c ^ bytes[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}
async function deflateRaw(bytes) {
  if (typeof CompressionStream === 'undefined') return null;
  try {
    const cs = new CompressionStream('deflate-raw');
    const buf = await new Response(new Blob([bytes]).stream().pipeThrough(cs)).arrayBuffer();
    return new Uint8Array(buf);
  } catch { return null; }
}

export async function zip(files) {
  const enc = new TextEncoder();
  const chunks = [], central = [];
  let offset = 0;
  for (const [name, content] of files) {
    const data = typeof content === 'string' ? enc.encode(content) : content;
    const nameB = enc.encode(name);
    const crc = crc32(data);
    const packed = await deflateRaw(data);
    const method = packed && packed.length < data.length ? 8 : 0;
    const body = method === 8 ? packed : data;
    const local = new DataView(new ArrayBuffer(30));
    local.setUint32(0, 0x04034b50, true);
    local.setUint16(4, 20, true);
    local.setUint16(6, 0x0800, true); // UTF-8 names
    local.setUint16(8, method, true);
    local.setUint32(14, crc, true);
    local.setUint32(18, body.length, true);
    local.setUint32(22, data.length, true);
    local.setUint16(26, nameB.length, true);
    chunks.push(new Uint8Array(local.buffer), nameB, body);
    const cen = new DataView(new ArrayBuffer(46));
    cen.setUint32(0, 0x02014b50, true);
    cen.setUint16(4, 20, true);
    cen.setUint16(6, 20, true);
    cen.setUint16(8, 0x0800, true);
    cen.setUint16(10, method, true);
    cen.setUint32(16, crc, true);
    cen.setUint32(20, body.length, true);
    cen.setUint32(24, data.length, true);
    cen.setUint16(28, nameB.length, true);
    cen.setUint32(42, offset, true);
    central.push(new Uint8Array(cen.buffer), nameB);
    offset += 30 + nameB.length + body.length;
  }
  const cenSize = central.reduce((n, c) => n + c.length, 0);
  const end = new DataView(new ArrayBuffer(22));
  end.setUint32(0, 0x06054b50, true);
  end.setUint16(8, files.length, true);
  end.setUint16(10, files.length, true);
  end.setUint32(12, cenSize, true);
  end.setUint32(16, offset, true);
  return new Blob([...chunks, ...central, new Uint8Array(end.buffer)], { type: 'model/3mf' });
}
