$(function () {

    $('.burger-btn').click(function () {
        $('.mobile-menu, .overlay').fadeIn();
    });
    $('.close-btn, .overlay').click(function () {
        $('.mobile-menu, .overlay').fadeOut();
    });

    new Swiper(".promo-swiper", {
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    new Swiper(".news-swiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        slidesPerGroup: 1,
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

        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },

            1200: {
                slidesPerView: 3,
                spaceBetween: 30,
            }
        }
    });

    new Swiper(".types-swiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        slidesPerGroup: 1,
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

        breakpoints: {
            576: {
                slidesPerView: 2,
                spaceBetween: 20,
            },

            992: {
                slidesPerView: 3,
                spaceBetween: 20,
            },

            1200: {
                slidesPerView: 4,
                spaceBetween: 30,
            }
        }
    });
})