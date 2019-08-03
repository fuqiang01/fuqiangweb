



$('.map-left').on('click', 'span', function () {

    $('.' + this.id)
        .addClass('active')
        .siblings('.active')
        .removeClass('active');
})