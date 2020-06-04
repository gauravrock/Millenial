'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "e900d9753bbeed2fc80ab1ce98720794",
"/": "e900d9753bbeed2fc80ab1ce98720794",
"main.dart.js": "352db82dacd5d44dba1fff5e377695b9",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "277ae3ad95f2ad6d4c10aedc24f3947e",
"assets/LICENSE": "ca0ea0791ebc491da40bdef8024d3053",
"assets/AssetManifest.json": "1fc2b97c7df550cf5d58d15d84dd030f",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/assets/images/code.png": "a77c2670a0447a2dc61daa18f912d7c4",
"assets/assets/images/code.jpg": "bba9d1eebf4cbf1c185a32d19ac0ae03"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
