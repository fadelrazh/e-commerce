const CACHE_NAME: string = 'e-commerce-cache-v1';
const urlsToCache: string[] = [
  '/',
  '/index.html',
  '/manifest.json',
];

self.addEventListener('install', (event: ExtendableEvent) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache: Cache) => cache.addAll(urlsToCache))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event: ExtendableEvent) => {
  event.waitUntil(
    caches.keys().then((cacheNames: string[]) => {
      return Promise.all(
        cacheNames.map((cacheName: string) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
          return null;
        })
      );
    })
  );
});

self.addEventListener('fetch', (event: FetchEvent) => {
  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse: Response | undefined) => {
        if (cachedResponse) {
          return cachedResponse;
        }

        return fetch(event.request)
          .then((networkResponse: Response) => {
            if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
              return networkResponse;
            }

            const responseToCache = networkResponse.clone();

            caches.open(CACHE_NAME)
              .then((cache: Cache) => {
                cache.put(event.request, responseToCache);
              });

            return networkResponse;
          });
      })
  );
});

const register = () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
      .then((registration: ServiceWorkerRegistration) => {
        console.log('Service Worker registered with scope:', registration.scope);
      })
      .catch((error: Error) => {
        console.error('Service Worker registration failed:', error);
      });
  }
};

export { register };
