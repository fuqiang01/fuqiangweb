//侧边框
$('.right-box li').hover(function () {
    $(this)
        .find('.hover-show')
        .slideDown();
}, function () {
    $(this)
        .find('.hover-show')
        .slideUp();
})
$('.goTop').click(function () {
    console.log(111)
    $('html,body').animate({ 'scrollTop': 0 }, 800)
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