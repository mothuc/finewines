//Add slider for homepage
define(['jquery', 'slick'], function ($) {
    $(document).ready(function() {
        $('.slide2').css("display", "block")
        $('.slider').slick({
            arrows: false,
            slidesToShow: 1,
            autoplay: true,
            autoplaySpeed: 2000,
        });
    });
})
