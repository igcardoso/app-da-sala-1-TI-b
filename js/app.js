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
window.addEventListener('online', () => {
  document.getElementById("home").style.display = "block"
  document.getElementById("offline").style.display = "none"
});
window.addEventListener('offline', () => {
  document.getElementById("home").style.display = "none"
  document.getElementById("offline").style.display = "block"
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


document.addEventListener("DOMContentLoaded", function () {
  /**
  * .get(): busca um resultado apenas uma vez
  */
  firebase.firestore().collection('cards').get().then(snapshot => {

    // Os documentos dentro da minha coleção, retorna um objeto e deve-se utilizar um forEach
    // snapshot.docs()

    // Uma propriedade que retorna um booleano se o snapshot estiver vazio
    // snapshot.empty

    // São os metadados da coleção
    // snapshot.metadata

    // Retorna a query utilizada no filtro para esse get
    // snapshot.query

    // O numero de documentos dentro dessa coleção
    // snapshot.size

    // retorna um array com as mudanças que essa coleção sofreu desde a ultima leitura
    // snapshot.docChanges

    snapshot.docs.forEach(card => {

      // Retorna os dados do meu documento
      // card.data()

      // Retorna o UID do meu documento
      // card.id

      // Retorna um booleano caso o documento passado seja igual ao documento utilizado (serve para docs e collections)
      // card.isEqual(doc)

      adicionaCardATela(card.data(), card.id);
    });
  });

  /**
  * .onSnapshot(): Observando em tempo real
  */
  // firebase.firestore().collection('cards').onSnapshot(snapshot => {
  // Usar dessa forma é equivalente ao .on('value') do Realtime Database
  // snapshot.docs.forEach();

  // Traz todos os dados com o evento de 'added' na primeira chamada e depois
  // traz apenas os novos documentos ou documentos que sofreram alterações
  //     snapshot.docChanges().forEach(card => {
  //         if(card.type == 'added') {
  //             adicionaCardATela(card.doc.data(), card.doc.id);
  //         };

  //         if(card.type == 'modified') {
  //             console.log('modified');
  //         };

  //         if(card.type == 'removed') {
  //             console.log('removed');
  //         };
  //     });
  // });

  /**
  * Consultas
  */

  /**
  * .where(campo, operador, valor): Retorna dados que obedecerem a condição passada
  * .where não aceita || ou && e nem !=
  * colecao where
  * - doc
  * - - colecao where
  */
  //  firebase.firestore().collection('cards').where('idade', ">", 25).where('idade', "<", 35).get().then(snapshot => {
  //     snapshot.docs.forEach(card => {
  //         adicionaCardATela(card.data(), card.id);
  //     });
  //  });

  /**
  * Ordenação
  * .orderBy(campo, ordenação): Ordena pelo campo e pelo tipo de ordenação passados, tipo não obrigatório
  * OBS: ao usar juntamente do .where() deve-se ordenar pelo mesmo campo
  */
  // firebase.firestore().collection('cards').where('curtidas', ">", 0).orderBy('curtidas', 'desc').get().then(snapshot => {
  //     snapshot.docs.forEach(card => {
  //         adicionaCardATela(card.data(), card.id);
  //     });
  // });

  /**
  * Limite
  * .limit(numero): Retorna apenas o numero de resultados que foi passado no metodo.
  */
  // firebase.firestore().collection('cards').limit(3).get().then(snapshot => {
  //     snapshot.docs.forEach(card => {
  //         adicionaCardATela(card.data(), card.id);
  //     });
  // });

  /**
  * Cursores / filtrar
  * .startAt(valor): Começa a filtrar no valor passado. Funciona como o operador >=
  * .startAfter(valor): ||. funciona como o operador >
  * .endBefore(valor): ||. Funciona como o operador de <
  * .endAt(valor): ||. Funciona como o operador de <=
  * Os cursores aceitam além de um valor, um documento para começar o filtro.
  */
  // var startAt;
  // firebase.firestore().collection('cards').limit(3).get().then(snap => {
  //     startAt = snap.docs[snap.docs.length - 1];
  //     firebase.firestore().collection('cards').startAt(startAt).get().then(snapshot => {
  //         snapshot.docs.forEach(card => {
  //             adicionaCardATela(card.data(), card.id);
  //         });
  //     });
  // })
});


function adicionaCardATela(informacao, id) {
  /**
  * HEADER DO CARD
  */
  let header = document.createElement("div");
  header.classList.add('cards');
  // ===================================

  /**
  * CONTENT DO CARD
  */
  let content = document.createElement("p");
  content.classList.add('card-text');
  content.innerText = informacao.idade + ' anos.';
  // ===================================

  /**
  * BOTÕES DO CARD
  */
  let inner = document.createElement("div");
  inner.classList.add('row')
  // Botão adicionar
  let button_add = document.createElement("button");
  button_add.classList.add('btn', 'btn-link', 'col-3');
  button_add.setAttribute('onclick', "curtir('" + id + "')");
  button_add.innerText = '+';
  inner.appendChild(button_add);

  // Contador de curtidas
  let counter = document.createElement("span");
  counter.innerHTML = informacao.curtidas;
  counter.classList.add('col-3', 'text-center', 'count-number');
  inner.appendChild(counter);

  // Botão de subtrair
  let button_sub = document.createElement("button");
  button_sub.classList.add('btn', 'btn-link', 'col-3');
  button_sub.setAttribute('onclick', "descurtir('" + id + "')");
  button_sub.innerText = '-';
  inner.appendChild(button_sub);
  // ===================================

  // Botão de excluir
  let button_del = document.createElement("button");
  button_del.classList.add('btn', 'btn-danger', 'col-3');
  button_del.setAttribute('onclick', "deletar('" + id + "')");
  button_del.innerText = 'x';
  inner.appendChild(button_del);
  // ===================================

  /**
  * CARD
  */
  let card = document.createElement("div");
  card.classList.add('card');
  card.id = id;
  let card_body = document.createElement("div");
  card_body.classList.add('card-body');
  // ===================================

  // popula card
  card_body.appendChild(header);
  card_body.appendChild(content);
  card_body.appendChild(inner);
  card.appendChild(card_body);

  // insere no container
  CARD_CONTAINER.appendChild(card);
}