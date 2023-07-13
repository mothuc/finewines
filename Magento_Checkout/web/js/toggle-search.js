require(['jquery'], function ($) {
    $(document).ready(function () {
        $("#toggle-search").click(function () {
            console.log(1)
            $("#search_mini_form").toggle();
        });
    })
});

