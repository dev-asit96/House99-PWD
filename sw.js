const cache_name = 'pages-cache-v1';
const urlsToCache = [
  'index.html',
  'style.css',
  'offline.html',
  'images/handsom.jpg',
  'images/house99.png',
  'images/menu.png',
  'images/close.png',
  'images/zayn-malik.jpg',
  'images/special.jpg',
  'images/cristiano-ronaldo.jpg',
  'images/david-beckham.jpg',
  'images/footer-img.png',
  'images/pic-1.jpg',
  'images/pic-2.jpg',
  'images/pic-3.jpg',
  'images/pic-4.jpg',
  'images/house99-192.png',
  'images/house99-512.png',
];
const self = this;

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cache_name).then((cache) => {
      console.log('Opened cache');

      return cache.addAll(urlsToCache);
    })
  );
});

//Listen for request
// Listen for requests
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then(() => {
      return fetch(event.request).catch(() => caches.match('offline.html'));
    })
  );
});
