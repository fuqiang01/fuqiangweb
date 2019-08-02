

$('.pla-left').on('click', 'p', function () {


})

$('.pla-left > p').hover( function () {

    $(this)
        .addClass('active')
        .siblings('.active')
        .removeClass('active');

    $('.' + this.id)
        .addClass('active')
        .siblings('.active')
        .removeClass('active')
        
})