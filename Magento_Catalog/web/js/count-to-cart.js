//Set quantity of product add to cart
define(['jquery'], function ($) {
    $('.decrease-qty').click(function (event) {
        event.preventDefault();
        let qtyInput = $(this).siblings('.qty');
        let currentValue = parseFloat(qtyInput.val());
        if (currentValue > 1) {
            qtyInput.val(currentValue - 1);
        }
    });

    $('.increase-qty').click(function (event) {
        event.preventDefault();
        let qtyInput = $(this).siblings('.qty');
        let currentValue = parseFloat(qtyInput.val());
        qtyInput.val(currentValue + 1);
    });
})
