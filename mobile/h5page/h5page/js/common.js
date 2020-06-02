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

$('.porblem-content').on( 'click', 'li.question', function () {
    
    
    if ( $(this).hasClass('tagged') ) {
        $(this).removeClass('tagged');
    } else {
        $(this).addClass('tagged');
    }

    $(this).next('.answer').fadeToggle();
})

// topbar

var temp =null;

$('body').on( 'touchstart', function () {

    var prevTop = $(window).scrollTop();
    $(document).on('touchend', function () {
        var nowTop = $(window).scrollTop();
        if ( nowTop - prevTop >= 0 ) {

            clearTimeout(temp);
            temp = setTimeout( function () {
                $('.topbar').fadeOut();
            }, 500);
            return;
        }
        topBarShow ();
    })
})

function topBarShow () {
    
    clearTimeout(temp);
    $('.topbar').css('display', 'flex');
    temp = setTimeout( function () {
        $('.topbar').fadeOut();
    }, 2000);
}