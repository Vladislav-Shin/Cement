var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  autoplay: true,

  navigation: {
    nextEl: ".partners__sliders .swiper-button-next",
    prevEl: ".partners__sliders .swiper-button-prev",
  },

  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    769: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 40,
    },
  },
});

var swiper = new Swiper(".newsSwiper", {
  slidesPerView: 4,
  spaceBetween: 10,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,

  navigation: {
    nextEl: ".news__wrapper .swiper-button-next",
    prevEl: ".news__wrapper .swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
      slidesPerGroup: 1,
    },
    550: {
      slidesPerView: 2,
      slidesPerGroup: 1,
    },
    1199: {
      slidesPerView: 3,
      slidesPerGroup: 1,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});
