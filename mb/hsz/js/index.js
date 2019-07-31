



$('.banner-form .address,.banner-form .glyphicon').on('click', function () {

    var $D = $('.banner-form .glyphicon');
    $(this).siblings('ul').slideToggle();

    if ( $D.hasClass('active') ) {
        $D.removeClass('active');
    } else {
        $D.addClass('active')
    }
})

$('.banner-form ul').on('click', 'li', function () {

    var text = $(this).text();
    $('.banner-form .address').text(text);
    $(this).parent().slideUp();
})





$('.banner-form button').on('click', function () {

    var address = $(this).siblings('.address').text();
    var url = location.href;

    $('input[name=guestcontent]').val(address);
    $('input[name=recontent]').val(url);
    return false;
})