// Reads a picked photo: EXIF time/GPS via exifr, plus a display copy and a thumbnail made on-device.
const pad = n => String(n).padStart(2, '0');

function exifTime(ex) {
  const d = ex?.DateTimeOriginal || ex?.CreateDate;
  if (!(d instanceof Date) || Number.isNaN(d.getTime())) return { time: null, off: null };
  const off = ex.OffsetTimeOriginal || ex.OffsetTime || null;
  if (off && /^[+-]\d\d:\d\d$/.test(off)) {
    // exifr builds the Date from the wall-clock fields in the device zone; anchor it to the camera's offset.
    const iso = `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}${off}`;
    const t = Date.parse(iso);
    if (!Number.isNaN(t)) return { time: t, off };
  }
  return { time: d.getTime(), off: null };
}

async function decode(file) {
  // <img> applies the EXIF orientation on Safari and Chrome, so portrait shots stay upright.
  const url = URL.createObjectURL(file);
  try {
    const img = new Image();
    img.src = url;
    await img.decode();
    return { src: img, w: img.naturalWidth, h: img.naturalHeight, done: () => URL.revokeObjectURL(url) };
  } catch {
    URL.revokeObjectURL(url);
  }
  try {
    const bmp = await createImageBitmap(file);
    return { src: bmp, w: bmp.width, h: bmp.height, done: () => bmp.close?.() };
  } catch {
    return null;
  }
}

function toBlob(src, w, h, max, quality) {
  const s = Math.min(1, max / Math.max(w, h));
  const c = document.createElement('canvas');
  c.width = Math.max(1, Math.round(w * s));
  c.height = Math.max(1, Math.round(h * s));
  const g = c.getContext('2d');
  g.imageSmoothingQuality = 'high';
  g.drawImage(src, 0, 0, c.width, c.height);
  return new Promise(r => c.toBlob(r, 'image/jpeg', quality));
}

export async function readPhoto(file, tripId) {
  let ex = null;
  try {
    ex = await exifr.parse(file, { tiff: true, exif: true, gps: true, ifd1: false, xmp: false, icc: false, iptc: false, jfif: false, ihdr: false });
  } catch { /* no EXIF */ }
  const { time, off } = exifTime(ex);
  let lat = null, lon = null, acc = null;
  if (ex && Number.isFinite(ex.latitude) && Number.isFinite(ex.longitude) && !(ex.latitude === 0 && ex.longitude === 0)) {
    lat = +ex.latitude.toFixed(6);
    lon = +ex.longitude.toFixed(6);
    if (Number.isFinite(ex.GPSHPositioningError)) acc = Math.round(ex.GPSHPositioningError);
  }
  let full = null, thumb = null, w = null, h = null;
  const img = await decode(file);
  if (img) {
    w = img.w; h = img.h;
    full = await toBlob(img.src, w, h, 1600, 0.82);
    thumb = await toBlob(img.src, w, h, 360, 0.72);
    img.done();
  }
  return {
    id: `${tripId}:${file.name}:${time ?? file.size}`,
    tripId, name: file.name, time, off, lat, lon, acc, w, h, full, thumb,
  };
}
