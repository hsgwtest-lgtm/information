// Trip Trace service worker.
// App files: network first, so updates arrive right away; cached copies keep it opening offline.
// Libraries and fonts: cache first. Map tiles and lookups go straight to the network (the browser caches them).
const VERSION = 'trip-trace-cinema-1';
const SHELL = [
  './', './index.html', './manifest.json', './css/app.css', './icons/icon.svg', './icons/icon-192.png',
  './js/app.js', './js/analyze.js', './js/cinema.js', './js/db.js', './js/editor.js', './js/engine.js', './js/exif.js',
  './js/fmt.js', './js/geo.js', './js/icons.js', './js/importflow.js', './js/library.js', './js/model.js', './js/net.js',
  './js/paths.js', './js/sample.js', './js/tripview.js', './js/ui.js',
];
const LIBS = [
  'https://unpkg.com/maplibre-gl@5.24.0/dist/maplibre-gl.js',
  'https://unpkg.com/maplibre-gl@5.24.0/dist/maplibre-gl.css',
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
  const isLib = LIBS.includes(req.url) || url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com';
  if (isLib) {
    e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(res => {
      if (res.ok || res.type === 'opaque') { const copy = res.clone(); caches.open(VERSION).then(c => c.put(req, copy)); }
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
