// ソウル食べ歩き帖 - Service Worker (offline first)
const CACHE = 'seoul-guide-v2';
const RUNTIME = 'seoul-runtime-v1';
const ASSETS = [
  './', './index.html', './manifest.json',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => c.addAll(ASSETS.slice(0, 3)).then(() => Promise.all(ASSETS.slice(3).map(u => c.add(u).catch(() => {})))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE && k !== RUNTIME).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// 見た地図タイル・写真・Wikipedia情報は保存して、オフラインでも再表示する
const RUNTIME_HOSTS = ['tile.openstreetmap.org', 'upload.wikimedia.org', 'en.wikipedia.org', 'unpkg.com'];

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);

  if (url.origin === self.location.origin) {
    e.respondWith(
      caches.open(CACHE).then(async c => {
        const hit = await c.match(e.request, { ignoreSearch: true });
        const net = fetch(e.request).then(r => { if (r.ok) c.put(e.request, r.clone()); return r; }).catch(() => null);
        return hit || (await net) || c.match('./index.html');
      })
    );
    return;
  }

  if (RUNTIME_HOSTS.some(h => url.hostname === h || url.hostname.endsWith('.' + h))) {
    e.respondWith(
      caches.match(e.request).then(hit => hit || fetch(e.request).then(r => {
        if (r.ok || r.type === 'opaque') { const copy = r.clone(); caches.open(RUNTIME).then(c => c.put(e.request, copy)); }
        return r;
      }).catch(() => hit || Response.error()))
    );
  }
});
