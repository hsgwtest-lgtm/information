// Travel Replay Simulator - Service Worker
const CACHE_NAME = 'travel-replay-v1.0.0';

const APP_SHELL = [
  './',
  './index.html',
  './manifest.json',
];

const CDN_ASSETS = [
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js',
  'https://cdn.jsdelivr.net/npm/exifr@7.1.3/dist/full.umd.cjs',
];

// Install: pre-cache app shell and CDN libraries
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      // Cache CDN resources first (failures tolerated)
      const cdnPromise = cache.addAll(CDN_ASSETS).catch(() => {});
      // Cache app shell (best-effort; pages can still load online)
      const shellPromise = cache.addAll(APP_SHELL).catch(() =>
        cache.add('./index.html').catch(() => {})
      );
      return Promise.all([shellPromise, cdnPromise]);
    }).then(() => self.skipWaiting())
  );
});

// Activate: delete stale caches
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

// Fetch: cache-first for local assets, network-first for CDN
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests and browser-extension requests
  if (request.method !== 'GET' || !url.protocol.startsWith('http')) return;

  const isLocal = url.origin === self.location.origin;

  if (isLocal) {
    // Cache-first: serve from cache, fall back to network then update cache
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
    // Network-first for CDN: try network, fall back to cache
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
