
import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    slidesPerGroup: 3,
    spaceBetween: 15,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
/*     breakpoints: {
        1200: {
            slidesPerView: 5,
            spaceBetween: 40,
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        }
    } */
});
