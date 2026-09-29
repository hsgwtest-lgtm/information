// Offline-first service worker. Bump VERSION whenever any cached file changes.
// The prefix must not start with "pocket-cad-": the free app's worker deletes
// every cache with that prefix on the same origin.
const PREFIX = 'pcpro-';
const VERSION = PREFIX + 'v1.1.1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './css/style.css',
  './js/main.js',
  './js/geometry.js',
  './js/viewport.js',
  './js/stl.js',
  './js/storage.js',
  './js/ui.js',
  './js/sketch.js',
  './js/bezier.js',
  './js/license.js',
  './js/license-config.js',
  './js/pro/features.js',
  './js/pro/threads.js',
  './js/pro/gear.js',
  './js/pro/trace.js',
  './js/pro/lithophane.js',
  './js/pro/analysis.js',
  './js/pro/export3mf.js',
  './js/pro/advanced.js',
  './js/pro/templates.js',
  './js/pro/pattern.js',
  './js/pro/loft.js',
  './js/pro/drawing.js',
  './js/pro/edges.js',
  './vendor/vendor.js',
  './vendor/helvetiker_bold.typeface.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/apple-touch-icon.png',
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith(PREFIX) && k !== VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  e.respondWith(
    caches.match(req, { ignoreSearch: true }).then((hit) => hit || fetch(req).then((res) => {
      if (res.ok && res.type === 'basic') {
        const copy = res.clone();
        caches.open(VERSION).then((c) => c.put(req, copy));
      }
      return res;
    }).catch(() => (req.mode === 'navigate' ? caches.match('./index.html') : Response.error()))),
  );
});
