// Trip Trace service worker: app shell network-first, libraries cache-first, map tiles cached as you browse.
const VERSION = 'trip-trace-v1';
const SHELL = ['./', './index.html', './style.css', './manifest.json', './js/app.js', './js/trip.js', './js/net.js', './js/store.js', './js/sample.js', './icons/icon.svg'];
const LIBS = ['https://unpkg.com/leaflet@1.9.4/dist/leaflet.css', 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js', 'https://cdn.jsdelivr.net/npm/exifr@7.1.3/dist/full.umd.js'];
const TILE_CACHE = 'trip-trace-tiles';
const TILE_MAX = 600;

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => Promise.all([c.addAll(SHELL).catch(() => {}), c.addAll(LIBS).catch(() => {})])).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSION && k !== TILE_CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

async function trimTiles(cache) {
  const keys = await cache.keys();
  for (let i = 0; i < keys.length - TILE_MAX; i++) await cache.delete(keys[i]);
}

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.hostname.endsWith('basemaps.cartocdn.com')) {
    e.respondWith(caches.open(TILE_CACHE).then(async c => {
      const hit = await c.match(req);
      if (hit) return hit;
      const res = await fetch(req);
      if (res.ok || res.type === 'opaque') { c.put(req, res.clone()); trimTiles(c); }
      return res;
    }));
    return;
  }
  if (LIBS.includes(req.url)) {
    e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(res => { caches.open(VERSION).then(c => c.put(req, res.clone())); return res; })));
    return;
  }
  if (url.origin === location.origin) {
    e.respondWith(fetch(req).then(res => { const copy = res.clone(); caches.open(VERSION).then(c => c.put(req, copy)); return res; })
      .catch(() => caches.match(req).then(hit => hit || caches.match('./index.html'))));
  }
});
