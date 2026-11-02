// IndexedDB. Everything stays on this device.
//   trips:  trip records (title, settings, edits, stats, cover Blob)
//   photos: {id, tripId, name, time, off, lat, lon, acc, w, h, full: Blob, thumb: Blob}
//   media:  per-trip background music {name, blob}
//   cache:  route / place lookups
const NAME = 'trip-trace-cinema';
let opening = null;

function open() {
  if (opening) return opening;
  opening = new Promise((resolve, reject) => {
    const req = indexedDB.open(NAME, 1);
    req.onupgradeneeded = () => {
      const db = req.result;
      db.createObjectStore('trips', { keyPath: 'id' });
      db.createObjectStore('photos', { keyPath: 'id' }).createIndex('tripId', 'tripId');
      db.createObjectStore('media');
      db.createObjectStore('cache');
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => { opening = null; reject(req.error); };
  });
  return opening;
}

async function tx(names, mode, body) {
  const db = await open();
  return new Promise((resolve, reject) => {
    const t = db.transaction(names, mode);
    const stores = {};
    for (const n of [].concat(names)) stores[n] = t.objectStore(n);
    let out;
    try { out = body(stores); } catch (e) { t.abort(); reject(e); return; }
    t.oncomplete = () => resolve(out instanceof IDBRequest ? out.result : out);
    t.onerror = () => reject(t.error);
    t.onabort = () => reject(t.error || new Error('transaction aborted'));
  });
}

export const uid = () => (crypto.randomUUID ? crypto.randomUUID() : `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 10)}`);

export async function trips() {
  const all = await tx('trips', 'readonly', s => s.trips.getAll());
  return all.sort((a, b) => (b.stats?.start ?? b.createdAt) - (a.stats?.start ?? a.createdAt));
}
export const trip = id => tx('trips', 'readonly', s => s.trips.get(id));
export function saveTrip(t) {
  t.updatedAt = Date.now();
  return tx('trips', 'readwrite', s => { s.trips.put(t); });
}
export const photos = tripId => tx('photos', 'readonly', s => s.photos.index('tripId').getAll(tripId));
export const savePhotos = list => tx('photos', 'readwrite', s => { for (const p of list) s.photos.put(p); });

export function removeTrip(id) {
  return tx(['trips', 'photos', 'media'], 'readwrite', s => {
    s.trips.delete(id);
    s.media.delete(id);
    const cur = s.photos.index('tripId').openKeyCursor(IDBKeyRange.only(id));
    cur.onsuccess = () => {
      const c = cur.result;
      if (!c) return;
      s.photos.delete(c.primaryKey);
      c.continue();
    };
  });
}

export const music = id => tx('media', 'readonly', s => s.media.get(id));
export const saveMusic = (id, value) => tx('media', 'readwrite', s => { if (value) s.media.put(value, id); else s.media.delete(id); });

export async function cacheGet(key) {
  try { return await tx('cache', 'readonly', s => s.cache.get(key)); } catch { return undefined; }
}
export async function cacheSet(key, value) {
  try { await tx('cache', 'readwrite', s => { s.cache.put(value, key); }); } catch { /* best effort */ }
}
