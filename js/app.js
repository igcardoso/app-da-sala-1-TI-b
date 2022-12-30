function isRunningStandalone() {
    return (window.matchMedia('(display-mode: standalone)').matches);
}
...
if (isRunningStandalone()) {
   /* código que sera executado se o site estiver em modo standalone */
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}
