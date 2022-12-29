if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}

$(document).ready(function() {
  $('#intro .enter-button').click(function() {
  
    $('#intro').css({
      display: 'none'
    });
    
    $('#home').css({
      display: 'block'
    });
  
    
  });
});

$(document).ready(function() {
  $('.containment-of-menus .op1').click(function() {
  
    $('#intro').css({
      display: 'none'
    });
    
    $('#schedules').css({
      display: 'block'
    });
    
    $('#notations').css({
      display: 'none'
    });
    
    $('#websites').css({
      display: 'none'
    });
    
    $('#emails').css({
      display: 'none'
    });
    
    $('#groups').css({
      display: 'none'
    });
    
    $('#evidences').css({
      display: 'none'
    });
    
    $('.containment-of-menus .transition-animation').css({
      left: '4.8%'
    });
    
    $('.containment-of-menus .op1 svg').css({
      fill: 'var(--second-page-selector-color)'
    });
  
    $('.containment-of-menus .op2 svg').css({
      fill: 'var(--page-selector-icon-color)'
    });
    
    $('.containment-of-menus .op3 svg').css({
      fill: 'var(--page-selector-icon-color)'
    });
    
    $('.containment-of-menus .op5 svg').css({
      fill: 'var(--page-selector-icon-color)'
    });
    
    $('.containment-of-menus .op6').css({
      
    });
    
    $('.containment-of-menus .op7 svg').css({
      fill: 'var(--page-selector-icon-color)'
    });
    
  });
});

$(document).ready(function() {
  $('.containment-of-menus .op2').click(function() {
  
    $('#intro').css({
      display: 'none'
    });
    
    $('#schedules').css({
      display: 'none'
    });
    
    $('#notations').css({
      display: 'block'
    });
    
    $('#websites').css({
      display: 'none'
    });
    
    $('#emails').css({
      display: 'none'
    });
    
    $('#groups').css({
      display: 'none'
    });
    
    $('#evidences').css({
      display: 'none'
    });
    
    $('.containment-of-menus .transition-animation').css({
      left: '27.5%'
    });
    
    $('.containment-of-menus .op1 svg').css({
      fill: 'var(--page-selector-icon-color)'
    });
  
    $('.containment-of-menus .op2 svg').css({
      fill: 'var(--second-page-selector-color)'
    });
    
    $('.containment-of-menus .op3 svg').css({
      fill: 'var(--page-selector-icon-color)'
    });
    
    $('.containment-of-menus .op5 svg').css({
      fill: 'var(--page-selector-icon-color)'
    });
    
    $('.containment-of-menus .op6').css({
     
    });
    
    $('.containment-of-menus .op7 svg').css({
      fill: 'var(--page-selector-icon-color)'
    });
    
  });
});

$(document).ready(function() {
  $('.containment-of-menus .op3').click(function() {
  
    $('#intro').css({
      display: 'none'
    });
    
    $('#schedules').css({
      display: 'none'
    });
    
    $('#notations').css({
      display: 'none'
    });
    
    $('#websites').css({
      display: 'block'
    });
    
    $('#emails').css({
      display: 'none'
    });
    
    $('#groups').css({
      display: 'none'
    });
    
    $('#evidences').css({
      display: 'none'
    });
    
    $('.containment-of-menus .transition-animation').css({
      left: '50.4%'
    });
    
    $('.containment-of-menus .op1 svg').css({
      fill: 'var(--page-selector-icon-color)'
    });
  
    $('.containment-of-menus .op2 svg').css({
      fill: 'var(--page-selector-icon-color)'
    });
    
    $('.containment-of-menus .op3 svg').css({
      fill: 'var(--second-page-selector-color)'
    });
    
    $('.containment-of-menus .op5 svg').css({
      fill: 'var(--page-selector-icon-color)'
    });
    
    $('.containment-of-menus .op6').css({
     
    });
    
    $('.containment-of-menus .op7 svg').css({
      fill: 'var(--page-selector-icon-color)'
    });
  });
});

$(document).ready(function() {
  $('.containment-of-menus .op4').click(function() {
  
    $('#intro').css({
      display: 'none'
    });
    
    $('#schedules').css({
      display: 'none'
    });
    
    $('#notations').css({
      display: 'none'
    });
    
    $('#websites').css({
      display: 'none'
    });
    
    $('#emails').css({
      display: 'block'
    });
    
    $('#groups').css({
      display: 'none'
    });
    
    $('#evidences').css({
      display: 'none'
    });
    
    $('.containment-of-menus .transition-animation').css({
      left: '27.6%'
    });
    
    $('.bottom-menu .containment-remaining-buttons').css({
      display: 'block'
    });
    
    $('.containment-of-menus .op1').css({
      display: 'none'
    });
  
    $('.containment-of-menus .op2').css({
      display: 'none'
    });
    
    $('.containment-of-menus .op3').css({
      display: 'none'
    });
    
    $('.containment-of-menus .op4').css({
      display: 'none'
    });
    
    $('.containment-of-menus .op5 svg').css({
      fill: 'var(--second-page-selector-color)'
    });
    
    $('.containment-of-menus .op6 svg').css({
      fill: 'var(--page-selector-icon-color)'
    });
    
    $('.containment-of-menus .op7 svg').css({
      fill: 'var(--page-selector-icon-color)'
    });
  });
});

$(document).ready(function() {
  $('.containment-of-menus .op5').click(function() {
  
    $('#intro').css({
      display: 'none'
    });
    
    $('#schedules').css({
      display: 'none'
    });
    
    $('#notations').css({
      display: 'none'
    });
    
    $('#websites').css({
      display: 'none'
    });
    
    $('#emails').css({
      display: 'block'
    });
    
    $('#groups').css({
      display: 'none'
    });
    
    $('#evidences').css({
      display: 'none'
    });
    
    $('.containment-of-menus .transition-animation').css({
      left: '27.6%'
    });
    
    $('.containment-of-menus .op1').css({
      display: 'none'
    });
  
    $('.containment-of-menus .op2').css({
      display: 'none'
    });
    
    $('.containment-of-menus .op3').css({
      display: 'none'
    });
    
    $('.containment-of-menus .op4').css({
      display: 'none'
    });
    
    $('.containment-of-menus .back svg').css({
      fill: 'var(--page-selector-color)'
    });
    
    $('.containment-of-menus .op5 svg').css({
      fill: 'var(--second-page-selector-color)'
    });
    
    $('.containment-of-menus .op6 svg').css({
      fill: 'var(--page-selector-icon-color)'
    });
    
    $('.containment-of-menus .op7 svg').css({
      fill: 'var(--page-selector-icon-color)'
    });
  });
});

$(document).ready(function() {
  $('.containment-of-menus .op6').click(function() {
  
    $('#intro').css({
      display: 'none'
    });
    
    $('#schedules').css({
      display: 'none'
    });
    
    $('#notations').css({
      display: 'none'
    });
    
    $('#websites').css({
      display: 'none'
    });
    
    $('#emails').css({
      display: 'none'
    });
    
    $('#groups').css({
      display: 'block'
    });
    
    $('#evidences').css({
      display: 'none'
    });
    
    $('.containment-of-menus .transition-animation').css({
      left: '50.4%'
    });
    
    $('.containment-of-menus .op1').css({
      display: 'none'
    });
  
    $('.containment-of-menus .op2').css({
      display: 'none'
    });
    
    $('.containment-of-menus .op3').css({
      display: 'none'
    });
    
    $('.containment-of-menus .op4').css({
      display: 'none'
    });
    
    $('.containment-of-menus .back svg').css({
      fill: 'var(--page-selector-color)'
    });
    
    $('.containment-of-menus .op5 svg').css({
      fill: 'var(--page-selector-icon-color)'
    });
    
    $('.containment-of-menus .op6 svg').css({
      fill: 'var(--second-page-selector-color)'
    });
    
    $('.containment-of-menus .op7 svg').css({
      fill: 'var(--page-selector-icon-color)'
    });
  });
});

$(document).ready(function() {
  $('.containment-of-menus .op7').click(function() {
  
    $('#intro').css({
      display: 'none'
    });
    
    $('#schedules').css({
      display: 'none'
    });
    
    $('#notations').css({
      display: 'none'
    });
    
    $('#websites').css({
      display: 'none'
    });
    
    $('#emails').css({
      display: 'none'
    });
    
    $('#groups').css({
      display: 'none'
    });
    
    $('#evidences').css({
      display: 'block'
    });
    
    $('.containment-of-menus .transition-animation').css({
      left: '74.1%'
    });
    
    $('.containment-of-menus .op1').css({
      display: 'none'
    });
  
    $('.containment-of-menus .op2').css({
      display: 'none'
    });
    
    $('.containment-of-menus .op3').css({
      display: 'none'
    });
    
    $('.containment-of-menus .op4').css({
      display: 'none'
    });
    
    $('.containment-of-menus .back svg').css({
      fill: 'var(--page-selector-color)'
    });
    
    $('.containment-of-menus .op5 svg').css({
      fill: 'var(--page-selector-icon-color)'
    });
    
    $('.containment-of-menus .op6 svg').css({
      fill: 'var(--page-selector-icon-color)'
    });
    
    $('.containment-of-menus .op7 svg').css({
      fill: 'var(--second-page-selector-color)'
    });
  });
});

$(document).ready(function() {
  $('.containment-of-menus .back').click(function() {
  
    $('#intro').css({
      display: 'none'
    });
    
    $('#schedules').css({
      display: 'block'
    });
    
    $('#notations').css({
      display: 'none'
    });
    
    $('#websites').css({
      display: 'none'
    });
    
    $('#emails').css({
      display: 'none'
    });
    
    $('#groups').css({
      display: 'none'
    });
    
    $('#evidences').css({
      display: 'none'
    });
    
    $('.containment-of-menus .transition-animation').css({
      left: '4.8%'
    });
    
    $('.bottom-menu .containment-remaining-buttons').css({
      display: 'none'
    });
    
    $('.containment-of-menus .op1').css({
      display: 'inline'
    });
  
    $('.containment-of-menus .op2').css({
      display: 'inline'
    });
    
    $('.containment-of-menus .op3').css({
      display: 'inline'
    });
    
    $('.containment-of-menus .op4').css({
      display: 'inline'
    });
    
    $('.containment-of-menus .op1 svg').css({
      fill: 'var(--second-page-selector-color)'
    });
  
    $('.containment-of-menus .op2 svg').css({
      fill: 'var(--page-selector-icon-color)'
    });
    
    $('.containment-of-menus .op3 svg').css({
      fill: 'var(--page-selector-icon-color)'
    });
    
    
  });
});

$(document).ready(function() {
  $('#websites .containment-options .op1').click(function() {
    window.location.href = 'https://ava.ifba.edu.br/course/view.php?id=4940'
  });
});

$(document).ready(function() {
  $('#websites .containment-options .op2').click(function() {
    window.location.href = 'https://suap.ifba.edu.br/accounts/login/?next=/'
  });
});

$(document).ready(function() {
  $('#websites .containment-options .op3').click(function() {
    window.location.href = 'https://classroom.google.com/u/0/'
  });
});


