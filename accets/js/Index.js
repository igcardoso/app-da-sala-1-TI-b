
const debounce = function(func, wait, immediate) {
  let timeout;
  return function(...args) {
    const context = this;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll() {
  const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 8);
  target.forEach(function(element) {
    if((windowTop) > element.offsetTop) {
      element.classList.add(animationClass);
    } else {
      element.classList.remove(animationClass);
    }
  })
}

animeScroll();

if(target.length) {
  window.addEventListener('scroll', debounce(function() {
    animeScroll();
  }, 200));
}

$(document).ready(() => {
  $('').click(() => {
    $('').toggleClass('active')
    $('').toggleClass('active')
  });
  
  
  
  // setting owl carousel

  let navText = ["<img width='43rem' src='images/icons transparent/bx-chevron-left.ico' />", "<img width='43rem' src='images/icons transparent/bx-chevron-right.ico' />"
    ]

  $('#hero-carousel').owlCarousel({
    items: 1,
    dots: false,
    loop: true,
    nav: true,
    navText: navText,
    autoplay: false,
    autoplayHoverPause: false
  });

  $('#top-movies-slide').owlCarousel({
    items: 3,
    dots: false,
    loop: true,
    autoplay: true,
    margin: 2,
    autoplayHoverPause: true,
    responsive: {
      500: {
        items: 4
      },
      1000: {
        items: 4
      },
      1280: {
        items: 6
      },
      1600: {
        items: 6
      }
    }
  });

  $('.movies-slide').owlCarousel({
    items: 3,
    dots: false,
    nav: true,
    loop: false,
    center: false,
    navText: navText,
    margin: 2,
    focusOnSelect: true,
    responsive: {
      500: {
        items: 4
      },
      1000: {
        items: 5
      },
      1280: {
        items: 6
      },
      1600: {
        items: 6
      }
    }
  });
});

  var tt9032400 = "<iframe class='iframe" + "' src='https://drive.google.com/file/d/1Nd5RCvAsusk0reXWyDWNCqF1i4rSOy7I" + "/preview' allow='autoplay" + "'>";

// BUTTON PLAY FILMS AND SERIES


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


