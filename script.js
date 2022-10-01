$(function () {

    $('.burger-btn').click(function () {
        $('.mobile-menu, .overlay').fadeIn();
    });
    $('.close-btn, .overlay').click(function () {
        $('.mobile-menu, .overlay').fadeOut();
    });

    $('.menu-catalog-btn').click(function () {
        $('.catalog-popup>.catalog-list').fadeIn();
    });

    $('body').click(function (e) {
        const element = $(e.target);
        if (element.parents('.catalog-list').length !== 0) {
            return;
        }
        if (element.is('.menu-catalog-btn')) {
            return;
        }
        $('.catalog-list').fadeOut();
        $('.popup-item .category-label').removeClass('active')
    });

    $('.popup-item .category-label').click(function () {
        var willShow = false;
        if(!$(this).is('.active')) {
            willShow = true;
        }
        const parentList = $(this).parents('.catalog-list:first');
        parentList.find('.popup-item .category-label').removeClass('active');
        parentList.find('.catalog-list').fadeOut();

        if(willShow) {
            $(this).siblings('.catalog-list').fadeIn();
            $(this).addClass('active');
        }
    })

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