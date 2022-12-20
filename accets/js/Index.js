
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
