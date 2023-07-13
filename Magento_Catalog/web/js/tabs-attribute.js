// Add tabs attribute product
define(['jquery', 'jquery/ui'], function ($) {
    $(function () {
        $("#tabs-product-attribute").tabs({
            active: 0,
            activate: function(event, ui) {
                // Callback function to be executed when a tab changes
                var currentTabId = ui.newPanel.attr('id');
                // Check if the first tab is changed
                if (currentTabId === 'tab1') {
                    $('#seeMoreBtn').show();
                } else  {
                    $('#seeMoreBtn').hide();
                }

            }
        });

        let $content = $('#tab1.desc');
        let originalText = $content.html();
        let maxHeight = 200; // Maximum height in pixels to show before truncating
        let isCollapsed = true;

        // Truncate the text content initially
        if ($content.height() > maxHeight) {
            $content.css({
                'overflow': 'hidden',
                'height': maxHeight + 'px'
            });

            // Insert "See more/See less" button
            $content.after('<span id="seeMoreBtn">...See more></span>');

            $('#seeMoreBtn').click(function () {
                if (isCollapsed) {
                    // Expand the content
                    $content.css({
                        'overflow': 'auto',
                        'height': 'auto'
                    });
                    $(this).text('< See less');
                    isCollapsed = false;
                } else {
                    // Collapse the content
                    $content.css({
                        'overflow': 'hidden',
                        'height': maxHeight + 'px'
                    });
                    $(this).text('...See more >');
                    isCollapsed = true;
                }
            });
        }

    });
});
