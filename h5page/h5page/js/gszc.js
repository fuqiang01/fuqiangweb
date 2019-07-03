

// 热门问答时间绑定
$('.porblem-title').on( 'click', 'li', function () {

    $(this)
        .siblings('.active')
            .removeClass('active')
                .end()
                    .addClass('active');
    
    $('.porblem-content').css('display', 'none');
    $('.' + this.id).css('display', 'block');
})

$('.porblem-content').on( 'click', '.question', function () {
    
    
    if ( $(this).hasClass('tagged') ) {
        $(this).removeClass('tagged');
    } else {
        $(this).addClass('tagged');
    }

    $(this).next('.answer').fadeToggle();
})