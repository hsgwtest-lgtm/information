// IndexedDB persistence for projects, imported mesh blobs and version snapshots.
// Pro uses its own database so it never disturbs the free app on the same origin.
const DB_NAME = 'pocket-cad-pro';
const DB_VER = 2; // v2: + library
const FREE_DB = 'pocket-cad';
const dbs = new Map();

function open(name, ver, upgrade) {
  if (!dbs.has(name)) {
    dbs.set(name, new Promise((resolve, reject) => {
      const req = ver ? indexedDB.open(name, ver) : indexedDB.open(name);
      req.onupgradeneeded = () => upgrade?.(req.result, req);
      req.onsuccess = () => {
        // Never block the other app (or a newer tab) from upgrading its schema.
        req.result.onversionchange = () => { req.result.close(); dbs.delete(name); };
        resolve(req.result);
      };
      req.onerror = () => { dbs.delete(name); reject(req.error); };
    }));
  }
  return dbs.get(name);
}

const db = () => open(DB_NAME, DB_VER, (d) => {
  if (!d.objectStoreNames.contains('projects')) d.createObjectStore('projects', { keyPath: 'id' });
  if (!d.objectStoreNames.contains('meshes')) d.createObjectStore('meshes', { keyPath: 'id' });
  if (!d.objectStoreNames.contains('versions')) {
    d.createObjectStore('versions', { keyPath: 'id' }).createIndex('project', 'projectId');
  }
  if (!d.objectStoreNames.contains('library')) d.createObjectStore('library', { keyPath: 'id' });
});

async function tx(store, mode, fn, database = db()) {
  const d = await database;
  if (!d.objectStoreNames.contains(store)) return undefined;
  return new Promise((resolve, reject) => {
    const t = d.transaction(store, mode);
    const s = t.objectStore(store);
    const r = fn(s);
    t.oncomplete = () => resolve(r && 'result' in r ? r.result : undefined);
    t.onerror = () => reject(t.error);
    t.onabort = () => reject(t.error);
  });
}

const summarize = (all) => (all || []).map(({ id, name, updated }) => ({ id, name, updated })).sort((a, b) => b.updated - a.updated);

export const listProjects = async () => summarize(await tx('projects', 'readonly', (s) => s.getAll()));
export const getProject = (id) => tx('projects', 'readonly', (s) => s.get(id));
export const putProject = (p) => tx('projects', 'readwrite', (s) => s.put(p));
export const deleteProject = async (id) => {
  await tx('projects', 'readwrite', (s) => s.delete(id));
  for (const v of await listVersions(id)) await deleteVersion(v.id);
};

// Mesh data is stored separately so undo snapshots and autosaves stay small.
export const getMesh = async (id) => (await tx('meshes', 'readonly', (s) => s.get(id)))?.data;
export const putMesh = (id, data) => tx('meshes', 'readwrite', (s) => s.put({ id, data }));

// ---- version history (named snapshots of a project) ----
export const listVersions = async (projectId) => {
  const all = await tx('versions', 'readonly', (s) => s.index('project').getAll(projectId));
  return (all || []).map(({ id, name, time, thumb, count }) => ({ id, name, time, thumb, count })).sort((a, b) => b.time - a.time);
};
export const getVersion = (id) => tx('versions', 'readonly', (s) => s.get(id));
export const putVersion = (v) => tx('versions', 'readwrite', (s) => s.put(v));
export const deleteVersion = (id) => tx('versions', 'readwrite', (s) => s.delete(id));

// ---- my parts library (shared by all projects) ----
export const listLibrary = async () => {
  const all = await tx('library', 'readonly', (s) => s.getAll());
  return (all || []).map(({ id, name, time, thumb }) => ({ id, name, time, thumb })).sort((a, b) => b.time - a.time);
};
export const getLibrary = (id) => tx('library', 'readonly', (s) => s.get(id));
export const putLibrary = (item) => tx('library', 'readwrite', (s) => s.put(item));
export const deleteLibrary = (id) => tx('library', 'readwrite', (s) => s.delete(id));

// ---- read-only access to the free app's data (upgrade path) ----
function freeDb() {
  // An upgrade here means the free app's DB does not exist yet. Abort so we do not
  // create an empty database that the free app would later fail to initialise.
  return open(FREE_DB, 0, (d, req) => { req.transaction.abort(); });
}
export const listFreeProjects = async () => {
  try { return summarize(await tx('projects', 'readonly', (s) => s.getAll(), freeDb())); } catch { dbs.delete(FREE_DB); return []; }
};
export const getFreeProject = (id) => tx('projects', 'readonly', (s) => s.get(id), freeDb());
export const getFreeMesh = async (id) => (await tx('meshes', 'readonly', (s) => s.get(id), freeDb()))?.data;

export function getSetting(key, def) {
  try {
    const v = localStorage.getItem('pocketcadpro.' + key);
    return v == null ? def : JSON.parse(v);
  } catch { return def; }
}
export function setSetting(key, value) {
  try { localStorage.setItem('pocketcadpro.' + key, JSON.stringify(value)); } catch { /* private mode */ }
}
