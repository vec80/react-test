const CACHE_NAME = 'react-test-cache';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  // 他にキャッシュしたいファイルを指定する
];

self.addEventListener('install', function(event) {
  // ファイルをキャッシュする
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  // キャッシュからファイルを取得する
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        return response || fetch(event.request);
      })
  );
});
