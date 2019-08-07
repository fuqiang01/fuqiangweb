
$('.service-list').on('click', 'li', function () {
    $(this)
        .addClass('active')
        .siblings('.active')
        .removeClass('active');
    $('.' + this.id)
        .addClass('active')
        .siblings('.active')
        .removeClass('active');
})