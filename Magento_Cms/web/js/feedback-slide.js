//Add slider for feedback section
define(['jquery', 'slick'], function ($) {
    $(document).ready(function () {
        $('#feedback-2').css("display", "block")
        $('.feedback-container').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true, // Enable fade transition
            cssEase: 'linear',
            autoplay: true,
            autoplaySpeed: 2000,
            arrows: false,
        });
    });
})
