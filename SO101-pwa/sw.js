// SO101 PWA — Service Worker (Cache-first with network fallback for CDN)
const CACHE_NAME = 'so101-pwa-v1.0.0';

const APP_SHELL = [
  './',
  './index.html',
  './manifest.json',
  './css/style.css',
  './js/main.js',
  './js/robot.js',
  './js/viewer.js',
  './js/controls.js',
  './js/ik.js',
  './js/sequencer.js',
  './js/objects.js',
  './js/animation.js',
  './js/bridge.js',
];

const CDN_ASSETS = [
  'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js',
  'https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/OrbitControls.js',
];

// Install: pre-cache app shell, CDN best-effort
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      const cdnPromise = cache.addAll(CDN_ASSETS).catch(() => {});
      const shellPromise = cache.addAll(APP_SHELL).catch(() =>
        cache.add('./index.html').catch(() => {})
      );
      return Promise.all([shellPromise, cdnPromise]);
    }).then(() => self.skipWaiting())
  );
});

// Activate: remove stale caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

// Fetch: cache-first for local, network-first for CDN
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  if (request.method !== 'GET' || !url.protocol.startsWith('http')) return;

  const isLocal = url.origin === self.location.origin;

  if (isLocal) {
    event.respondWith(
      caches.match(request).then(cached => {
        if (cached) return cached;
        return fetch(request).then(response => {
          if (response.ok) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(request, clone));
          }
          return response;
        }).catch(() => caches.match('./index.html'));
      })
    );
  } else {
    event.respondWith(
      fetch(request).then(response => {
        if (response.ok) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(request, clone));
        }
        return response;
      }).catch(() => caches.match(request))
    );
  }
});
