

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}

let pag1 = document.querySelector('.containment-of-menus .op1');

let pag2 = document.querySelector('.containment-of-menus .op2');

let pag3 = document.querySelector('.containment-of-menus .op3');

let pag4 = document.querySelector('.containment-of-menus .op4');

let pag5 = document.querySelector('.containment-of-menus .op5');

let pag6 = document.querySelector('.containment-of-menus .op6');

let pag7 = document.querySelector('.containment-of-menus .op7');

pag1.addEventListener('click', select);
pag2.addEventListener('click', select);
pag3.addEventListener('click', select);
pag4.addEventListener('click', select);
pag5.addEventListener('click', select);
pag6.addEventListener('click', select);
pag7.addEventListener('click', select);

function select() {
  console.log('funciona 1');
}