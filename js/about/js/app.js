var config = {
  apiKey: "AIzaSyAfYYbhdqzTZnD4gaPjOfYC1F-m6SNgiLg",
  authDomain: "infinix-d200d.firebaseapp.com",
  projectId: "infinix-d200d",
  storageBucket: "infinix-d200d.appspot.com",
  messagingSenderId: "618474026565",
  appId: "1:618474026565:web:2db11006169e62d5cd952c",
  measurementId: "G-Q6K70V3GBZ"
};
firebase.initializeApp(config);
// Apenas para remover um warning
firebase.firestore().settings({
  timestampsInSnapshots: true,

});

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