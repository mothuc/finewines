define(['jquery'], function ($) {
    $(document).ready(function () {
        //Toggle input form for search product
        $("#toggle-search").click(function () {
            $("#search_mini_form").slideToggle(500);
        });


        $(document).click(function (event) {
            let target = $(event.target);

            if(!target.closest("#toggle-search").length && !target.closest("#search_mini_form").length ) {
                $("#search_mini_form").hide(200);
            }
        })
    })

});

