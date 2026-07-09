const CACHE_NAME = 'player-v1';
const ASSETS = [
  '/',
  'index.html',
  'https://cdn.jwplayer.com/libraries/IDzF9Zmk.js',
  'https://vjs.zencdn.net/8.10.0/video-js.css',
  'https://cdn.plyr.io/3.7.8/plyr.css',
  'https://cdn.plyr.io/3.7.8/plyr.js',
  'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=DM+Mono:wght@500&display=swap'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
