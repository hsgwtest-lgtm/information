// Trip Trace — IndexedDB persistence for the current trip (photos stay on this device only).
const DB = 'trip-trace', VER = 1;

function open() {
  return new Promise((res, rej) => {
    const r = indexedDB.open(DB, VER);
    r.onupgradeneeded = () => {
      const db = r.result;
      if (!db.objectStoreNames.contains('photos')) db.createObjectStore('photos', { keyPath: 'id' });
      if (!db.objectStoreNames.contains('meta')) db.createObjectStore('meta');
    };
    r.onsuccess = () => res(r.result);
    r.onerror = () => rej(r.error);
  });
}

async function tx(store, mode, fn) {
  const db = await open();
  return new Promise((res, rej) => {
    const t = db.transaction(store, mode);
    const out = fn(t.objectStore(store));
    t.oncomplete = () => res(out && 'result' in out ? out.result : undefined);
    t.onerror = () => rej(t.error);
  });
}

export async function loadPhotos() {
  try { return (await tx('photos', 'readonly', s => s.getAll())) || []; } catch { return []; }
}
export async function savePhotos(photos) {
  try {
    await tx('photos', 'readwrite', s => {
      for (const p of photos) {
        const { url, ...rest } = p; // object URLs are per-session
        s.put(rest);
      }
    });
  } catch { /* storage may be unavailable in private mode */ }
}
export async function loadMeta() {
  try { return (await tx('meta', 'readonly', s => s.get('trip'))) || {}; } catch { return {}; }
}
export async function saveMeta(meta) {
  try { await tx('meta', 'readwrite', s => s.put(meta, 'trip')); } catch { /* ignore */ }
}
export async function clearAll() {
  try {
    await tx('photos', 'readwrite', s => s.clear());
    await tx('meta', 'readwrite', s => s.clear());
  } catch { /* ignore */ }
}
