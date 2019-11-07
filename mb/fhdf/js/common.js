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
// 侧边框
$('.gotop').on('click', function () {
    $('html,body').animate({ 'scrollTop': 0 }, 500);
})