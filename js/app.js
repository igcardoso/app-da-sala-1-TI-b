

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}


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
  
  document.getElementById("transition-animation").style.left = "4.8%"
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
  
  document.getElementById("transition-animation").style.left = "4.8%"
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