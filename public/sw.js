const version = "0.6.18";
const cacheName = `airhorner-${version}`;
self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache
        .addAll([
          `/`,
          `/index.html`,
          `/logo192.png`,
          `/favicon.ico`,
          `/logo512.png`,
          `/styles`,
          `controledemodulos-01.png`
        ])
        .then(() => self.skipWaiting());
    })
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches
      .open(cacheName)
      .then(cache => cache.match(event.request, { ignoreSearch: true }))
      .then(response => {
        return response || fetch(event.request);
      })
  );
});

console.log("Service Worker Loaded");

self.addEventListener("push", e => {
  const data = e.data.json();
  console.log("Push Recieved...");
  self.registration.showNotification(data.title, {
    body: "Notified by Traversy Media!",
    icon: "kitten.png"
  });
});
