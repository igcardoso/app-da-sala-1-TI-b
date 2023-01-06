if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
    .register("/serviceWorker.js")
    .then(res => console.log("service worker registered"))
    .catch(err => console.log("service worker not registered", err));
  });
}

// análise de instalação da pwa pelos usuários

/*
    window.addEventListener("beforeinstallprompt", function(event) {
    event.userChoice.then(function(result) {
    if (result.outcome == "dismissed") {
    // Usuário dispensou o banner, enviar para o nosso analytics
    } else {
    // Usuário aceitou o banner, enviar para o nosso analytics
    }
    });
    });
    */
window.addEventListener('offline', () => {
  window.location = "cached_local_page.html"
});

let pag1 = document.getElementById("bottomop1")
let pag2 = document.getElementById("bottomop2")
let pag3 = document.getElementById("bottomop3")
let pag4 = document.getElementById("bottomop4")
let backpag = document.getElementById("bottomBackop1")
let pag5 = document.getElementById("bottomop5")
let pag6 = document.getElementById("bottomop6")
let pag7 = document.getElementById("bottomop7")

pag1.addEventListener("click", select1)
pag2.addEventListener("click", select2)
pag3.addEventListener("click", select3)
pag4.addEventListener("click", select4)
backpag.addEventListener("click", backselect)
pag5.addEventListener("click", select5)
pag6.addEventListener("click", select6)
pag7.addEventListener("click", select7)

function select1() {
  document.getElementById("schedules").style.display = "block"
  document.getElementById("bottomSvg1").style.fill = "var(--second-page-selector-color)"
  document.getElementById("bottomSvg2").style.fill = "var(--page-selector-icon-color)"
  document.getElementById("bottomSvg3").style.fill = "var(--page-selector-icon-color)"
  document.getElementById("bottomSvg4").style.fill = "var(--page-selector-icon-color)"
  document.getElementById("bottomSvg5").style.fill = "var(--page-selector-icon-color)"
  document.getElementById("bottomSvg6").style.fill = "var(--page-selector-icon-color)"
  document.getElementById("notations").style.display = "none"
  document.getElementById("websites").style.display = "none"
  document.getElementById("emails").style.display = "none"
  document.getElementById("groups").style.display = "none"
  document.getElementById("evidences").style.display = "none"

  document.getElementById("transition-animation").style.left = "4.6%"
}

function select2() {
  document.getElementById("schedules").style.display = "none"
  document.getElementById("notations").style.display = "block"
  document.getElementById("bottomSvg1").style.fill = "var(--page-selector-icon-color)"
  document.getElementById("bottomSvg2").style.fill = "var(--second-page-selector-color)"
  document.getElementById("bottomSvg3").style.fill = "var(--page-selector-icon-color)"
  document.getElementById("bottomSvg4").style.fill = "var(--page-selector-icon-color)"
  document.getElementById("bottomSvg5").style.fill = "var(--page-selector-icon-color)"
  document.getElementById("bottomSvg6").style.fill = "var(--page-selector-icon-color)"
  document.getElementById("websites").style.display = "none"
  document.getElementById("emails").style.display = "none"
  document.getElementById("groups").style.display = "none"
  document.getElementById("evidences").style.display = "none"

  document.getElementById("transition-animation").style.left = "27.4%"
}

function select3() {
  document.getElementById("schedules").style.display = "none"
  document.getElementById("notations").style.display = "none"
  document.getElementById("websites").style.display = "block"
  document.getElementById("bottomSvg1").style.fill = "var(--page-selector-icon-color)"
  document.getElementById("bottomSvg2").style.fill = "var(--page-selector-icon-color)"
  document.getElementById("bottomSvg3").style.fill = "var(--second-page-selector-color)"
  document.getElementById("bottomSvg4").style.fill = "var(--page-selector-icon-color)"
  document.getElementById("bottomSvg5").style.fill = "var(--page-selector-icon-color)"
  document.getElementById("bottomSvg6").style.fill = "var(--page-selector-icon-color)"
  document.getElementById("emails").style.display = "none"
  document.getElementById("groups").style.display = "none"
  document.getElementById("evidences").style.display = "none"

  document.getElementById("transition-animation").style.left = "50.3%"
}

function select4() {
  document.getElementById("schedules").style.display = "none"
  document.getElementById("notations").style.display = "none"
  document.getElementById("websites").style.display = "none"
  document.getElementById("emails").style.display = "block"
  document.getElementById("bottomSvg1").style.fill = "var(--page-selector-icon-color)"
  document.getElementById("bottomSvg2").style.fill = "var(--page-selector-icon-color)"
  document.getElementById("bottomSvg3").style.fill = "var(--page-selector-icon-color)"
  document.getElementById("bottomSvg4").style.fill = "var(--second-page-selector-color)"
  document.getElementById("bottomSvg5").style.fill = "var(--page-selector-icon-color)"
  document.getElementById("bottomSvg6").style.fill = "var(--page-selector-icon-color)"
  document.getElementById("groups").style.display = "none"
  document.getElementById("evidences").style.display = "none"

  document.getElementById("bottomop1").style.display = "none"
  document.getElementById("bottomop2").style.display = "none"
  document.getElementById("bottomop3").style.display = "none"
  document.getElementById("bottomop4").style.display = "none"
  document.getElementById("containment-remaining-buttons").style.display = "block"

  document.getElementById("transition-animation").style.left = "27.5%"
}

function backselect() {
  document.getElementById("schedules").style.display = "block"
  document.getElementById("notations").style.display = "none"
  document.getElementById("websites").style.display = "none"
  document.getElementById("emails").style.display = "none"

  document.getElementById("bottomSvg1").style.fill = "var(--second-page-selector-color)"
  document.getElementById("bottomSvg2").style.fill = "var(--page-selector-icon-color)"
  document.getElementById("bottomSvg3").style.fill = "var(--page-selector-icon-color)"
  document.getElementById("bottomSvg4").style.fill = "var(--page-selector-icon-color)"
  document.getElementById("bottomSvg5").style.fill = "var(--page-selector-icon-color)"
  document.getElementById("bottomSvg6").style.fill = "var(--page-selector-icon-color)"
  document.getElementById("groups").style.display = "none"
  document.getElementById("evidences").style.display = "none"

  document.getElementById("bottomop1").style.display = "inline"
  document.getElementById("bottomop2").style.display = "inline"
  document.getElementById("bottomop3").style.display = "inline"
  document.getElementById("bottomop4").style.display = "inline"
  document.getElementById("containment-remaining-buttons").style.display = "none"

  document.getElementById("transition-animation").style.left = "4.6%"
}

function select5() {
  document.getElementById("schedules").style.display = "none"
  document.getElementById("notations").style.display = "none"
  document.getElementById("websites").style.display = "none"
  document.getElementById("emails").style.display = "block"
  document.getElementById("bottomSvg1").style.fill = "var(--page-selector-icon-color)"
  document.getElementById("bottomSvg2").style.fill = "var(--page-selector-icon-color)"
  document.getElementById("bottomSvg3").style.fill = "var(--page-selector-icon-color)"
  document.getElementById("bottomSvg4").style.fill = "var(--second-page-selector-color)"
  document.getElementById("bottomSvg5").style.fill = "var(--page-selector-icon-color)"
  document.getElementById("bottomSvg6").style.fill = "var(--page-selector-icon-color)"
  document.getElementById("groups").style.display = "none"
  document.getElementById("evidences").style.display = "none"

  document.getElementById("transition-animation").style.left = "27.5%"
}

function select6() {
  document.getElementById("schedules").style.display = "none"
  document.getElementById("notations").style.display = "none"
  document.getElementById("websites").style.display = "none"
  document.getElementById("emails").style.display = "none"
  document.getElementById("groups").style.display = "block"

  document.getElementById("bottomSvg1").style.fill = "var(--page-selector-icon-color)"
  document.getElementById("bottomSvg2").style.fill = "var(--page-selector-icon-color)"
  document.getElementById("bottomSvg3").style.fill = "var(--page-selector-icon-color)"
  document.getElementById("bottomSvg4").style.fill = "var(--page-selector-icon-color)"
  document.getElementById("bottomSvg5").style.fill = "var(--second-page-selector-color)"
  document.getElementById("bottomSvg6").style.fill = "var(--page-selector-icon-color)"
  document.getElementById("evidences").style.display = "none"

  document.getElementById("transition-animation").style.left = "50.3%"
}

function select7() {
  document.getElementById("schedules").style.display = "none"
  document.getElementById("notations").style.display = "none"
  document.getElementById("websites").style.display = "none"
  document.getElementById("emails").style.display = "none"
  document.getElementById("groups").style.display = "none"
  document.getElementById("evidences").style.display = "block"

  document.getElementById("bottomSvg1").style.fill = "var(--page-selector-icon-color)"
  document.getElementById("bottomSvg2").style.fill = "var(--page-selector-icon-color)"
  document.getElementById("bottomSvg3").style.fill = "var(--page-selector-icon-color)"
  document.getElementById("bottomSvg4").style.fill = "var(--page-selector-icon-color)"
  document.getElementById("bottomSvg5").style.fill = "var(--page-selector-icon-color)"
  document.getElementById("bottomSvg6").style.fill = "var(--second-page-selector-color)"

  document.getElementById("transition-animation").style.left = "74.1%"
}

const db = firebase.firestore()

db.collection('comunicados').onSnapshot((data)=> {
  let cards = document.querySelector('.cards');
  // cards.innerHTML = "";
  data.docs.map(doc => {
    console.log("objeto:", doc.data());
    var cards = document.createElement("div");
    cards.className = 'cards';

    // *******************************

    var container = document.createElement("div");
    container.className = 'container'

    // *******************************

    var user = document.createElement("div");
    user.className = 'topEl user';

    // *******************************

    var imgUser = document.createElement("img");
    imgUser.src = `${doc.data().photograph}`;

    // *******************************

    var text = document.createElement("div");
    text.className = 'topEl text';

    // *******************************

    var name = document.createElement("h1");
    name.id = 'name';
    name.innerHTML += `${doc.data().name}`;

    // *******************************

    var date = document.createElement("p");
    date.id = 'date';
    date.innerHTML += `${doc.data().date}`;

    // *******************************

    var icon = document.createElement("div");
    icon.className = 'topEl icon';
    icon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffffff" viewBox="0 0 24 24" style="transform: ;msFilter:;"><circle cx="18" cy="6" r="3"></circle><path d="M18 19H5V6h8c0-.712.153-1.387.422-2H5c-1.103 0-2 .897-2 2v13c0 1.103.897 2 2 2h13c1.103 0 2-.897 2-2v-8.422A4.962 4.962 0 0 1 18 11v8z"></path></svg>';

    // *******************************

    var message = document.createElement("div");
    message.className = 'message';
    message.innerHTML = `${doc.data().message}`;

    // *******************************

    var adms = document.createElement("div");
    adms.className = 'adms';

    // *******************************

    var img1 = document.createElement("img");
    img1.className = 'img1';
    img1.src = 'images/IMG-20220930-WA0047.jpg';

    // *******************************

    var img2 = document.createElement("img");
    img2.className = 'img2';
    img2.src = 'images/IMG_20221224_171224.jpg';

    // *******************************

    var img3 = document.createElement("img");
    img3.className = 'img3';
    img3.src = 'images/IMG_20221224_171140.jpg';

    // *******************************

    var img4 = document.createElement("img");
    img4.className = 'img4';
    img4.src = 'images/IMG_20221224_182958.jpg';

    // *******************************

    var support = document.createElement("p");
    support.className = 'text';
    support.id = 'support';
    support.innerHTML = "Responder";
    support.addEventListener("click", supportFunction);
    function supportFunction() {
      window.location = 'https://wa.me/55' + `${doc.data().contact}` + '?text=Oi,%20gostaria%20de%20reportar%20um%20erro%20ou%20fazer uma sugestão';
    }

    // *******************************

    document.querySelector("#containment-card-notations").appendChild(cards);
    cards.appendChild(container);
    cards.appendChild(message);
    cards.appendChild(adms);
    adms.appendChild(img1);
    adms.appendChild(img2);
    adms.appendChild(img3);
    adms.appendChild(img4);
    adms.appendChild(support);
    container.appendChild(user);
    container.appendChild(text);
    container.appendChild(icon);
    text.appendChild(name);
    text.appendChild(date);
    user.appendChild(imgUser);

    return doc.data();
  });
})

var nsBw = jejdBrvgEeBeh + jsvEgehWbb + jSueJehYehhe;

var jejdBrvgEeBeh = "AIzaSyAfYYbhdqz"
var jejdBrvgEeBeh = "TZnD4gaPjOfYC1F"
var jejdBrvgEeBeh = "-m6SNgiLg"