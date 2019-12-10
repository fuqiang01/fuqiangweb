// 弹窗
$('.server-type').on('click', 'li', function () {
    if ( $(this).hasClass('active') ) {
        $(this).removeClass('active')
    } 
    else{
        $(this).addClass('active')
    }
})
$('.popup-shut-btn').click(function () {
    $('.popup-box').slideUp();
})
$('.f-contactUs-btn').click(function () {
    $('.popup-box').slideDown();
})
//绘制二维码
var codeCanvas = new CodeCanvas('.code');
var codeText = codeCanvas.codeText; // 二维码数字

// header
$(document).scroll(function () {
    var wTop = $(window).scrollTop();
    if ( wTop >= 710 ) {
        $('.header').hasClass('header-dark') || $('.header').addClass('header-dark')
    } 
    else {
        $('.header').hasClass('header-dark') && $('.header').removeClass('header-dark')
    }
})