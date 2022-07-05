
window.onload = function() {
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
const swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
      delay: 3000,
    },
// Responsive breakpoints
breakpoints: {
// when window width is >= 480px
480: {
  slidesPerView: 1,
},
// when window width is >= 769px
769: {
  slidesPerView: 1,
},
// when window width is >= 960px
960: {
  slidesPerView: 2,
},
},
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

};


