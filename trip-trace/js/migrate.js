// One-time import of trips saved by the previous version of Trip Trace (database "trip-trace-v2").
import * as db from './db.js';
import { analyze } from './analyze.js';
import { bounds, centroid, distKm } from './geo.js';

const OLD = 'trip-trace-v2';
const FLAG = 'tt-migrated-v2';

function openOld() {
  return new Promise(resolve => {
    let req;
    try { req = indexedDB.open(OLD); } catch { resolve(null); return; }
    req.onupgradeneeded = e => {
      // The old database does not exist: do not create an empty one.
      if (e.oldVersion === 0) { req.transaction.abort(); }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => resolve(null);
    req.onblocked = () => resolve(null);
  });
}

function all(dbh, store) {
  return new Promise(resolve => {
    try {
      const r = dbh.transaction(store, 'readonly').objectStore(store).getAll();
      r.onsuccess = () => resolve(r.result || []);
      r.onerror = () => resolve([]);
    } catch { resolve([]); }
  });
}

/** Returns the number of trips brought over. */
export async function migrate() {
  try { if (localStorage.getItem(FLAG)) return 0; } catch { return 0; }
  const old = await openOld();
  if (!old) { try { localStorage.setItem(FLAG, '1'); } catch { /* ignore */ } return 0; }
  let count = 0;
  try {
    if (old.objectStoreNames.contains('trips') && old.objectStoreNames.contains('photos')) {
      const trips = (await all(old, 'trips')).filter(t => !t.sample);
      const photos = await all(old, 'photos');
      const have = new Set((await db.trips()).map(t => t.id));
      for (const t of trips) {
        if (have.has(t.id)) continue;
        const list = photos.filter(p => p.tripId === t.id).map(p => ({
          id: p.id, tripId: t.id, name: p.name, time: p.time ?? null, off: p.off ?? null,
          lat: p.lat ?? null, lon: p.lon ?? null, acc: p.acc ?? null, w: p.w ?? null, h: p.h ?? null,
          full: p.full || null, thumb: p.thumb || null,
        }));
        if (!list.length) continue;
        const trip = {
          id: t.id, title: t.title || '旅', titleAuto: !!t.titleAuto, createdAt: t.createdAt || Date.now(), updatedAt: Date.now(),
          settings: { perPlace: t.highlightCount ?? 3, radiusM: t.spotRadiusM || 200, labels: true },
          exclusions: t.exclusions || {}, stars: t.stars || {}, modes: t.modes || {}, names: t.spotNames || {},
          stats: null, cover: t.cover || null, music: null,
        };
        trip.stats = quickStats(list, trip);
        await db.savePhotos(list);
        await db.saveTrip(trip);
        count++;
      }
    }
  } catch { /* leave the old data alone */ }
  old.close();
  try { localStorage.setItem(FLAG, '1'); } catch { /* ignore */ }
  return count;
}

/** Enough for the library card and the globe until the trip is opened and fully analysed. */
function quickStats(photos, trip) {
  const r = analyze(photos, trip);
  if (!r.places.length) return null;
  const first = r.places[0], last = r.places[r.places.length - 1];
  const c = centroid(r.places);
  let km = 0;
  for (const m of r.moves) if (m.mode !== 'plane') km += m.km;
  return {
    start: first.start, end: last.end, off: first.off, days: r.days.length, places: r.places.length, photos: r.used, km,
    center: [c.lon, c.lat], bbox: bounds(r.places), path: r.places.map(p => [p.lon, p.lat]),
    spanKm: Math.max(...r.places.map(p => distKm(p, c))),
  };
}
