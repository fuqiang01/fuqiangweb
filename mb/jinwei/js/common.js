var windowHeight = $(window).height();
var scrollTop = $(window).scrollTop();


// 侧边框
$('.goTop').on('click', function () {
    $('html,body').animate({ 'scrollTop': 0 }, 500);
})
$('.rb-hidden').on('click', function () {
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
$('.popupWindow-wrapper').on('click', function (e) {
    if (e.target !== this) {
        return;
    }
    $('.popupWindow-wrapper').fadeOut();
    return false;
})
$('.popW-shut-btn').click(function () {
    $('.popupWindow-wrapper').fadeOut();
})

//滚动条监听
$(window).scroll(function () {

    scrollTop = $(window).scrollTop();
    scrollTop > 100 ? $('.goTop').fadeIn() : $('.goTop').fadeOut();
})