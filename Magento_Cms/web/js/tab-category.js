//Add tabs category section in homepage
define(['jquery', 'jquery/ui', 'slick'], function ($) {
    $(function() {
        $("#tabs-2").css("display", "block");
        $("#tabs-3").css("display", "block");
        $("#tabs").tabs({
            show: { effect: "fade", duration: 600 },
            hide: { effect: "fade", duration: 600 },
        });
    });
})
