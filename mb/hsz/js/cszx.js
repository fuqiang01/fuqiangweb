


$('.category').on('click', 'span', function () {

    $(this)
        .addClass('active')
        .siblings('.active')
        .removeClass('active');

    var index = $(this).index();
    var left = 98 * index;

    $ ('.colorLine').css('left', left);
    
})