// FUJINFO — Service Worker
const CACHE = 'fujinfo-2026-v2';

const SHELL = [
  './',
  './index.html',
  './style.css',
  './main.js',
  './manifest.json',
];

const CDN = [
  'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE).then(cache => {
      const cdnPromise   = cache.addAll(CDN).catch(() => {});
      const shellPromise = cache.addAll(SHELL).catch(() =>
        cache.add('./index.html').catch(() => {})
      );
      return Promise.all([shellPromise, cdnPromise]);
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);
  if (request.method !== 'GET' || !url.protocol.startsWith('http')) return;

  const isLocal = url.origin === self.location.origin;

  if (isLocal) {
    event.respondWith(
      caches.match(request).then(cached => {
        if (cached) return cached;
        return fetch(request).then(res => {
          if (res.ok) {
            const clone = res.clone();
            caches.open(CACHE).then(c => c.put(request, clone));
          }
          return res;
        }).catch(() => caches.match('./index.html'));
      })
    );
  } else {
    // Network-first for CDN and GSI tile data; fall back to cache
    event.respondWith(
      fetch(request).then(res => {
        if (res.ok) {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(request, clone));
        }
        return res;
      }).catch(() => caches.match(request))
    );
  }
});
