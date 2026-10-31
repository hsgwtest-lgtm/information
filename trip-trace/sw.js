// Trip Trace service worker.
// App files: network first (updates show up right away), cached for offline use.
// Libraries: cache first. Map tiles and APIs are never intercepted.
const VERSION = 'trip-trace-v2.0.0';
const SHELL = [
  './', './index.html', './manifest.json', './css/app.css', './icons/icon.svg',
  './js/main.js', './js/analyze.js', './js/db.js', './js/fmt.js', './js/geo.js', './js/importer.js', './js/legs.js',
  './js/library.js', './js/mapview.js', './js/replay.js', './js/sample.js', './js/services.js', './js/trips.js',
  './js/tripview.js', './js/ui.js',
];
const LIBS = [
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js',
  'https://cdn.jsdelivr.net/npm/exifr@7.1.3/dist/full.umd.js',
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION)
    .then(c => Promise.all([c.addAll(SHELL).catch(() => {}), c.addAll(LIBS).catch(() => {})]))
    .then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (LIBS.includes(req.url)) {
    e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(res => {
      const copy = res.clone();
      caches.open(VERSION).then(c => c.put(req, copy));
      return res;
    })));
    return;
  }
  if (url.origin !== location.origin) return;
  e.respondWith(fetch(req).then(res => {
    if (res.ok) { const copy = res.clone(); caches.open(VERSION).then(c => c.put(req, copy)); }
    return res;
  }).catch(() => caches.match(req).then(hit => hit || caches.match('./index.html'))));
});
