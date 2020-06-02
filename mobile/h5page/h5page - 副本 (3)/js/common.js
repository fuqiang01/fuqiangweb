



function init() {
    changeFontSize ();
}
init();

// 使用动态改变html字体大小的方式,通过rem单位来动态的改变页面个元素的大小
$(window).resize( function () {
    changeFontSize();
})

function changeFontSize () {
    var windowW = $(window).width();
    $('html').css('fontSize', windowW / 10 + 'px');
}

//返回顶部按钮
$(window).scroll( function () {

    var scrollT = $(window).scrollTop();
    if ( scrollT >= 300) {
        $('.goTop').fadeIn();
    } else {
        $('.goTop').fadeOut();
    }
})
$('.goTop').click( function () {
    $('html,body').animate( { scrollTop : 0 }, 500);
})




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

















