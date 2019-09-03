'use strict';

var config = {
  SWVersion: 11,
  cachedFiles: [
    '/offline-page.html',
    '/css/style_offline.css',
    '/img/icons.png'
  ]
};
config.cacheName = 'offline-cache-v' + config.SWVersion;

// Кэшируем ресурсы
this.addEventListener('install', event => {
  event.waitUntil(
    caches.open(config.cacheName).then((cache) => {
      return cache.addAll(config.cachedFiles);
    })
  );
});


// Удаляем старые кэши
this.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return cacheNames.filter(cacheName => !config.cacheName.includes(cacheName));
    }).then(cachesToDelete => {
      return Promise.all(cachesToDelete.map(cacheToDelete => {
        return caches.delete(cacheToDelete);
      }));
    }).then(() => this.clients.claim())
  );
});


this.addEventListener('fetch', event => {
  if (event.request.mode === 'navigate' || (event.request.method === 'GET' && event.request.headers.get('accept').includes('text/html'))) {
    event.respondWith(
      fetch(event.request.url).then(
        // return caches.match('offline-page.html');
      ).catch(error => {
        return caches.match('offline-page.html');
      })
    );
  }
  else{
    event.respondWith(caches.match(event.request)
      .then( (response) => {
        return response || fetch(event.request);
      })
    );
  }
});
