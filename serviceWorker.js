const cacheName = 'cache-v1';
const resourcesToPrecache = [
  '/',
  'index.html',
  'style.css',
  'images/HOUSE99.png',
  'images/handsome-man-barber-shop-styling-hair.jpg',
];

//Install Service workers
self.addEventListener('install', (events) => {
  console.log('Service worker install event!');
  events.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(resourcesToPrecache);
    })
  );
});

//implementing cache-first
self.addEventListener('fetch', (events) => {
  events.respondWith(
    caches.match(events.request).then((cachedResponse) => {
      return cachedResponse || fetch(events.request);
    })
  );
});
