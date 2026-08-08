const CACHE_VERSION = 'wedding-rsvp-v1';
const CORE_CACHE = `${CACHE_VERSION}-core`;
const IMAGE_CACHE = `${CACHE_VERSION}-images`;
const CORE_ASSETS = [
  './',
  './index.html',
  './styles.css?v=20260808-3',
  './app.js?v=20260808-6'
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CORE_CACHE).then((cache) => cache.addAll(CORE_ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key.startsWith('wedding-rsvp-') && ![CORE_CACHE, IMAGE_CACHE].includes(key))
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  const isOptimizedImage = url.pathname.includes('/assets/thumbs/') || url.pathname.includes('/assets/display/');
  if (!isOptimizedImage) return;

  event.respondWith(
    caches.open(IMAGE_CACHE).then(async (cache) => {
      const cached = await cache.match(request);
      if (cached) return cached;

      const response = await fetch(request);
      if (response.ok) cache.put(request, response.clone());
      return response;
    })
  );
});
