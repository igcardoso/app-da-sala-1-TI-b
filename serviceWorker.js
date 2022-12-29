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
  "/accets/media/svg/bx-angle-left.svg",
  "/accets/media/svg/bx-angle-right.svg",
  "/accets/media/svg/bx-conexao-alt.svg",
  "/accets/media/svg/bx-group-alt.svg",
  "/accets/media/svg/bx-home-alt.svg",
  "/accets/media/svg/bx-ideia-alt.svg",
  "/accets/media/svg/bx-link.svg",
  "/accets/media/svg/bx-mail-alt.svg",
  "/accets/media/svg/bx-message-scuare-dots.svg",
  "/accets/media/svg/bx-micropone-alt.svg",
  "/accets/media/svg/bx-notification-alt.svg",
  "/accets/media/svg/bx-teme-alt.svg"
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
