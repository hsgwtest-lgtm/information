// IndexedDB storage. Everything stays on this device.
//   trips:  {id, title, titleAuto, createdAt, updatedAt, cover (Blob), stats, highlightCount, spotRadiusM,
//            mapStyle, modes, exclusions, stars, spotNames, placeCache}
//   photos: {id, tripId, name, time, off, lat, lon, acc, w, h, full (Blob), thumb (Blob)}
//   kv:     cache for routes and place lookups
const NAME = 'trip-trace-v2';
let dbPromise = null;

function open() {
  if (dbPromise) return dbPromise;
  dbPromise = new Promise((resolve, reject) => {
    const req = indexedDB.open(NAME, 1);
    req.onupgradeneeded = () => {
      const db = req.result;
      db.createObjectStore('trips', { keyPath: 'id' });
      db.createObjectStore('photos', { keyPath: 'id' }).createIndex('tripId', 'tripId');
      db.createObjectStore('kv');
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => { dbPromise = null; reject(req.error); };
  });
  return dbPromise;
}

/** Run fn(stores) inside one transaction; resolves with fn's return value once the transaction commits. */
async function run(names, mode, fn) {
  const db = await open();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(names, mode);
    const stores = Object.fromEntries([].concat(names).map(n => [n, tx.objectStore(n)]));
    let out;
    try { out = fn(stores); } catch (e) { reject(e); return; }
    tx.oncomplete = () => resolve(out && typeof out === 'object' && 'result' in out && 'readyState' in out ? out.result : out);
    tx.onerror = () => reject(tx.error);
    tx.onabort = () => reject(tx.error || new Error('aborted'));
  });
}

export const newId = () => (crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(36) + Math.random().toString(36).slice(2));

export async function listTrips() {
  const all = await run('trips', 'readonly', s => s.trips.getAll());
  return all.sort((a, b) => (b.stats?.start || b.createdAt) - (a.stats?.start || a.createdAt));
}
export const getTrip = id => run('trips', 'readonly', s => s.trips.get(id));
export function putTrip(trip) {
  trip.updatedAt = Date.now();
  return run('trips', 'readwrite', s => { s.trips.put(trip); });
}
export const getPhotos = tripId => run('photos', 'readonly', s => s.photos.index('tripId').getAll(tripId));
export const putPhotos = photos => run('photos', 'readwrite', s => { for (const p of photos) s.photos.put(p); });

export function deleteTrip(id) {
  return run(['trips', 'photos'], 'readwrite', s => {
    s.trips.delete(id);
    const cur = s.photos.index('tripId').openKeyCursor(IDBKeyRange.only(id));
    cur.onsuccess = () => {
      const c = cur.result;
      if (!c) return;
      s.photos.delete(c.primaryKey);
      c.continue();
    };
  });
}

export async function kvGet(key) {
  try { return await run('kv', 'readonly', s => s.kv.get(key)); } catch { return undefined; }
}
export async function kvSet(key, value) {
  try { await run('kv', 'readwrite', s => { s.kv.put(value, key); }); } catch { /* cache is best-effort */ }
}
