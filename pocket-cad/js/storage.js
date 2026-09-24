// IndexedDB persistence for projects and imported mesh blobs.
const DB_NAME = 'pocket-cad';
const DB_VER = 1;
let dbp = null;

function db() {
  if (!dbp) {
    dbp = new Promise((resolve, reject) => {
      const req = indexedDB.open(DB_NAME, DB_VER);
      req.onupgradeneeded = () => {
        const d = req.result;
        if (!d.objectStoreNames.contains('projects')) d.createObjectStore('projects', { keyPath: 'id' });
        if (!d.objectStoreNames.contains('meshes')) d.createObjectStore('meshes', { keyPath: 'id' });
      };
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
  }
  return dbp;
}

async function tx(store, mode, fn) {
  const d = await db();
  return new Promise((resolve, reject) => {
    const t = d.transaction(store, mode);
    const s = t.objectStore(store);
    const r = fn(s);
    t.oncomplete = () => resolve(r && 'result' in r ? r.result : undefined);
    t.onerror = () => reject(t.error);
    t.onabort = () => reject(t.error);
  });
}

export const listProjects = async () => {
  const all = (await tx('projects', 'readonly', (s) => s.getAll())) || [];
  return all.map(({ id, name, updated }) => ({ id, name, updated })).sort((a, b) => b.updated - a.updated);
};
export const getProject = (id) => tx('projects', 'readonly', (s) => s.get(id));
export const putProject = (p) => tx('projects', 'readwrite', (s) => s.put(p));
export const deleteProject = (id) => tx('projects', 'readwrite', (s) => s.delete(id));

// Mesh data is stored separately so undo snapshots and autosaves stay small.
export const getMesh = async (id) => (await tx('meshes', 'readonly', (s) => s.get(id)))?.data;
export const putMesh = (id, data) => tx('meshes', 'readwrite', (s) => s.put({ id, data }));

export function getSetting(key, def) {
  try {
    const v = localStorage.getItem('pocketcad.' + key);
    return v == null ? def : JSON.parse(v);
  } catch { return def; }
}
export function setSetting(key, value) {
  try { localStorage.setItem('pocketcad.' + key, JSON.stringify(value)); } catch { /* private mode */ }
}
