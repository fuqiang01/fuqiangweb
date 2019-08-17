$('.map-left span').hover( function () {
    $('.' + this.id)
        .addClass('active')
        .siblings('.active')
        .removeClass('active')
}, function () {})