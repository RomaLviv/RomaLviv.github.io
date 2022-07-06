window.onload = function() {
// FAQ SECTION
const items = document.querySelectorAll(".accordion button");
items.forEach((item) => item.addEventListener("click", toggleAccordion));
function toggleAccordion() {
  const itemToggle = this.getAttribute("aria-expanded");
  for (let item of items) {
    item.setAttribute("aria-expanded", false);
  };
  if (itemToggle === "false") {
    this.setAttribute("aria-expanded", true);
  };
};
// SLIDER OPTIONS
const swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
      delay: 5000,
    },
    breakpoints: {
    480: {
      slidesPerView: 1,
    },
    769: {
      slidesPerView: 1,
    },
    960: {
      slidesPerView: 2,
    },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
// MENU SMOOTH SCROLL  
$('.header a[href^="#"]').click(function() {
    let target = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(target).offset().top
    },500);
    $('.header a[href^="#"]').parent().removeClass('active');
    $(this).parent().addClass('active');
    $('.menu__mobile .menu').toggle(500);
    $('.menu__burger').toggleClass('close');
    return false;
});
// BUTTON SMOOTH SCROLL 
  $('.green_button a[href^="#"]').click(function() {
    let target = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(target).offset().top
    },500);
    return false;
});
// MOBILE MENU
$('.menu__burger').click(function() {
    $('.menu__mobile .menu').fadeToggle();
    $(this).toggleClass('close');
});

// TOP SCROLL
let btn = $('#top_button');
$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});
btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
};


