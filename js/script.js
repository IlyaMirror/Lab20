$(document).ready(function () {
    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 3,
        arrows: false,
        dots: true,
        dotsClass: 'slick-dots',
        resposive: [{
            breakpoint: 1025,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]
    });
});
$(document).ready(function () {
    $(".owl-carousel").owlCarousel();
});