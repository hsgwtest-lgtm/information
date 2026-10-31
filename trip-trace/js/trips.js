// Creating trips and adding photos to them.
import * as db from './db.js';
import { readPhoto } from './importer.js';
import { progress, toast } from './ui.js';

export function newTrip(title = '新しい旅') {
  return {
    id: db.newId(), title, titleAuto: true, createdAt: Date.now(), updatedAt: Date.now(),
    highlightCount: 3, spotRadiusM: 200, mapStyle: 'auto',
    modes: {}, exclusions: {}, stars: {}, spotNames: {},
    stats: null, cover: null,
  };
}

/** Read files into a trip, in small batches so memory stays low on phones. Returns {added, located, skipped}. */
export async function importFiles(trip, fileList) {
  const files = [...fileList];
  const known = new Set((await db.getPhotos(trip.id)).map(p => p.id));
  let added = 0, located = 0, skipped = 0, lastUrl = null;
  const batch = [];
  try {
    for (let i = 0; i < files.length; i++) {
      progress(`写真を読み込み中… ${i + 1} / ${files.length}`, i / files.length, lastUrl);
      let p;
      try { p = await readPhoto(files[i], trip.id); } catch { skipped++; continue; }
      if (known.has(p.id)) { skipped++; continue; }
      known.add(p.id);
      batch.push(p);
      added++;
      if (p.lat != null) located++;
      if (p.thumb) {
        if (lastUrl) URL.revokeObjectURL(lastUrl);
        lastUrl = URL.createObjectURL(p.thumb);
      }
      if (batch.length >= 8) await db.putPhotos(batch.splice(0));
    }
    if (batch.length) await db.putPhotos(batch);
  } finally {
    progress(null);
    if (lastUrl) URL.revokeObjectURL(lastUrl);
  }
  try { await navigator.storage?.persist?.(); } catch { /* optional */ }
  return { added, located, skipped };
}

export async function createTripFromFiles(files) {
  const trip = newTrip();
  await db.putTrip(trip);
  const r = await importFiles(trip, files);
  if (!r.added) {
    await db.deleteTrip(trip.id);
    toast('写真を読み込めませんでした');
    return null;
  }
  if (!r.located) toast('位置情報のある写真がありませんでした。写真を選ぶときに「位置情報を含める」をオンにしてください', 6000);
  return trip.id;
}
