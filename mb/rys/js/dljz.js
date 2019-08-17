$('.service-list dl').hover( function () {
    $(this)
        .addClass('active')
        .siblings('.active')
        .removeClass('active')
}, function () {})