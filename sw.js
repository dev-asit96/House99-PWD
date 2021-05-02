const cache_name = 'pages-cache-v1';
const urlsToCache = [
  '/',
  'index.html',
  'style.css',
  'images/HOUSE99.png',
  'images/handsome-man-barber-shop-styling-hair-min.jpg',
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
const self = this;

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cache_name).then((cache) => {
      console.log('Opened cache');

      return cache.addAll(['index.html', 'style.css', 'offline.html']);
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
