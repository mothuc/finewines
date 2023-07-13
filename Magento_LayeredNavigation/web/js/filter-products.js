define(['jquery'], function ($) {

    $(document).ready(function () {
        $('.filter-options-title').click(function () {
            let parentItem = $(this).parent('.filter-options-item');

            // Toggle 'active' class for the clicked parent item
            parentItem.toggleClass('active');

            // Remove 'active' class from other parent items
            $('.filter-options-item').not(parentItem).removeClass('active');

            // Slide up other content items
            $('.filter-options-content').not($(this).next('.filter-options-content')).slideUp();

            // Slide toggle the content item of the clicked title
            $(this).next('.filter-options-content').slideToggle();
        });

        let filterContent = $('.block-content.filter-content');

        // Check screen width on page load and resize
        $(window).on('load resize', function () {
            if ($(window).width() > 768) {
                filterContent.show()
            } else {
                filterContent.hide();
            }
        });

        //Toggle tab filter on mobile
        $('#filter-toggle').click(function () {
            filterContent.toggle(500);
        });

        //Hide tab filter when click close
        $('.filter-content-title').click(function () {
            filterContent.hide(500);
        });
    });

})
