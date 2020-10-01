
$(function () {

    $('.menu__burger').click(function () {
        $('.main-menu').addClass('active');
    });
    $('.main-menu__close.btn-close__box').click(function () {
        $('.main-menu').removeClass('active');
    });

    $('.menu-link').click(function () {
        $('.main-menu').removeClass('active');
    })

    //start block filter
    $('.block__filter-item').click(function () {
        if ($('.filter__under-block').hasClass('active')) {
            $('.filter__under-block').not($(this)).removeClass('active');
        }
    });
    $('.block__filter-item-1').click(function () {
        $('.filter__under-block-1').addClass('active');
    });
    $('.block__filter-item-2').click(function () {
        $('.filter__under-block-2').addClass('active');
    });
    $('.block__filter-item-3').click(function () {
        $('.filter__under-block-3').addClass('active');
    });
    $('.block__filter-item-4').click(function () {
        $('.filter__under-block-4').addClass('active');
    });
    $('.block__filter-item-5').click(function () {
        $('.filter__under-block-5').addClass('active');
    });
    $('.block__filter-item-6').click(function () {
        $('.filter__under-block-6').addClass('active');
    });
    $('.block__filter-item-7').click(function () {
        $('.filter__under-block-7').addClass('active');
    });
    $('.block__filter-item-8').click(function () {
        $('.filter__under-block-8').addClass('active');
    });


    $('.filter__btn-close').click(function () {
        $('.filter__under-block').removeClass('active').next();

    });
    //end block filter



    //start about-us
    $('.about-us__item').click(function () {
        if ($('.about-us__content').hasClass('active')) {
            $('.about-us__content').not($(this)).removeClass('active');
        }
    });
    $('.about-us__item-1').click(function () {
        $('.about-us__content-1').addClass('active');
    });
    $('.about-us__item-2').click(function () {
        $('.about-us__content-2').addClass('active');
    });
    $('.about-us__item-3').click(function () {
        $('.about-us__content-3').addClass('active');
    });
    $('.about-us__item-4').click(function () {
        $('.about-us__content-4').addClass('active');
    });

    $('.about-us__btn-close').click(function () {
        $('.about-us__content').removeClass('active');
    });
    //end about-us



    //two filter
    var containerEl1 = document.querySelector('[data-ref="block__filter-items"]');
    var containerEl2 = document.querySelector('[data-ref="new__filter-box-items"]');

    var config = {
        controls: {
            scope: 'local'
        }
    };

    var mixer1 = mixitup(containerEl1, config);
    var mixer2 = mixitup(containerEl2, config);
    //two filter

    const swiperPart = document.querySelector('.swiper-container.start__block'),
        swiperCustomers = document.querySelector('.swiper-container.customers__slide');

    var swiper = new Swiper(swiperPart, {
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
            stopOnLastSlide: true,
        },
    });

    var swiper = new Swiper(swiperCustomers, {
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

});