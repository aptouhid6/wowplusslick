$(document).ready(function () {
    new WOW().init();

    $('.custom').slick({
                dots: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                arrows: true,
            });
});
