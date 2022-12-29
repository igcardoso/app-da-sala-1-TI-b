const staticDevCoffee = "dev-coffee-site-v1";
const assets = [
  "/",
  "/index.html",
  "/manifest.html",
  "/accets/css/app.css",
  "/accets/js/index.js",
  "/accets/js/jquery.min.js",
  "/accets/media/20221224203650.png",
  "/accets/media/icon-multiple.png",
  "/accets/media/IMG-20220930-WA0047.jpg",
  "/accets/media/IMG_20221223_182141.jpg",
  "/accets/media/IMG_20221224_102948~2.jpg",
  "/accets/media/IMG_20221224_171140.jpg",
  "/accets/media/IMG_20221224_171224.jpg",
  "/accets/media/IMG_20221224_182958.jpg",
  "/accets/media/Logotipo_IFET.svg.png",
  "/accets/media/svg/bx-angle-left.svg"
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});
