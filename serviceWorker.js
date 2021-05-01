const cacheName = 'cache-v1';
const resourcesToPrecache = [
  '/',
  'index.html',
  'style.css',
  'images/HOUSE99.png',
  'images/handsome-man-barber-shop-styling-hair.jpg',
  'images/close.png',
  'images/cristiano-ronaldo.jpg',
  'images/david-beckham.jpg',
  'images/footer-img.jpg',
  'images/handsome-man-cutting-beard-barber-salon.jpg',
  'images/HOUSE99-192-192.png',
  'images/HOUSE99-512.png',
  'images/menu.png',
  'images/pic-1.jpg',
  'images/pic-2.jpg',
  'images/pic-3.jpg',
  'images/pic-4.jpg',
  'images/Webp.net-resizeimage.jpg',
  'images/zayn-malik.jpg',
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
