
// 侧边框
$('.goTop').on('click', function () {
    $('html,body').animate({ 'scrollTop': 0 }, 500);
})
$('.footer-hidden').on('click', function () {
    $('.show-box').fadeOut();
    $('.hidden-box').fadeIn();
})
$('.hidden-box').on('click', function () {
    $('.hidden-box').fadeOut();
    $('.show-box').fadeIn();
})

// 弹窗
$('.f-contactUs-btn').on('click', function () {
    $('.popupWindow-wrapper').fadeIn();
    return false;
})
$('.popupWindow-wrapper').on('click', function ( e ) {
    if ( e.target !== this ) {
        return;
    }
    $('.popupWindow-wrapper').fadeOut();
    return false;
})
$('.popW-shut-btn').click( function () {
    $('.popupWindow-wrapper').fadeOut();
})

// 底边框
$('.buttomBar > p').on('click',function () {

    $(this).animate({'left':'-300px'},300,function () {
            $('.buttomBar > div').animate({'left':'0'},500);
    })
})
$('.shutDown').on('click',function () {
    $('.buttomBar > div').animate({'left':'-100%'},500,function() {
        $('.buttomBar > p').animate({'left':'0'},300)
    });
})

//滚动监听
$(window).scroll( function () {
    var top = $(window).scrollTop();

    if ( top >= 30 ) {
        $('header').addClass('header-fixed');
        $('.topbar').css('paddingBottom', 80);
        top > 100 ? $('.goTop').fadeIn() : $('.goTop').fadeOut();
    } else {
        $('header').removeClass('header-fixed');
        $('.topbar').css('paddingBottom', 0);
    }
})