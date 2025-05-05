// Service Worker para Portfolio - Jason Guerra
const CACHE_NAME = "portfolio-v1";

// Recursos que queremos cachear inmediatamente
const PRECACHE_RESOURCES = [
  "/",
  "/index.html",
  "/profile-pic/profile_pic_optimized.webp",
  "/web-dev.png",
  "/manifest.json",
];

// Instalar el service worker y cachear recursos críticos
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        console.log("Service Worker: Cacheando archivos críticos");
        return cache.addAll(PRECACHE_RESOURCES);
      })
      .then(() => self.skipWaiting())
  );
});

// Activar el service worker y limpiar cachés antiguos
self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheWhitelist.indexOf(cacheName) === -1) {
              console.log(
                "Service Worker: Eliminando caché antigua",
                cacheName
              );
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => self.clients.claim())
  );
});

// Estrategia de caché: Stale-While-Revalidate para recursos estáticos
self.addEventListener("fetch", (event) => {
  // Ignorar solicitudes que no sean GET o no sean HTTP/HTTPS
  if (event.request.method !== "GET" || !event.request.url.startsWith("http")) {
    return;
  }

  // Ignorar solicitudes de análisis y tracking
  if (
    event.request.url.includes("/analytics") ||
    event.request.url.includes("/tracking")
  ) {
    return;
  }

  // Aplicar caché para recursos estáticos
  if (isStaticResource(event.request.url)) {
    event.respondWith(
      caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((cachedResponse) => {
          // Incluso si está en caché, obtener una versión fresca para actualizarla
          const fetchPromise = fetch(event.request)
            .then((networkResponse) => {
              // Si la respuesta es válida, almacenarla en caché
              if (networkResponse && networkResponse.status === 200) {
                cache.put(event.request, networkResponse.clone());
              }
              return networkResponse;
            })
            .catch(() => {
              // En caso de error de red, servir desde caché
              console.log(
                "Service Worker: Fallback a caché para",
                event.request.url
              );
              return cachedResponse;
            });

          // Devolver la respuesta en caché mientras se actualiza en segundo plano
          return cachedResponse || fetchPromise;
        });
      })
    );
  }
});

// Función para detectar recursos estáticos
function isStaticResource(url) {
  const staticExtensions = [
    ".js",
    ".css",
    ".png",
    ".jpg",
    ".jpeg",
    ".gif",
    ".webp",
    ".svg",
    ".woff",
    ".woff2",
    ".ttf",
    ".eot",
  ];

  return (
    staticExtensions.some((ext) => url.endsWith(ext)) ||
    url.includes("/profile-pic/") ||
    url.includes("/projects-pic/")
  );
}
