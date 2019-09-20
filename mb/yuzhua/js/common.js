
// 导航
$('.nav-bar .nav-list').hover(function () {
    $(this)
        .find('.hover-show')
        .fadeIn(200)
}, function () {
    $(this)
        .find('.hover-show')
        .fadeOut(200)
})

// 侧边框
$('.go-top').click( function () {
    $('html,body').animate( {scrollTop:0}, 500);
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