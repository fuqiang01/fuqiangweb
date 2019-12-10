var domTop = $('.content .left').offset().top;
var domHeight = $('.content .left').outerHeight();
//var contentHeight = $('.content').outerHeight(); //不能在这获取高度，数值不对，因为如果有图片的话，图片是异步加载
var contentTop = $('.content').offset().top;
$(document).scroll(function (e) {
    var wTop = $(window).scrollTop();
    var contentHeight = $('.content').outerHeight();
    console.log(wTop)
    if (wTop < domTop - 70) {
        console.log(1)
        $('.content .left').hasClass('class-absolute') && $('.content .left').removeClass('class-absolute');
        $('.content .left').hasClass('class-fixed') && $('.content .left').removeClass('class-fixed');
    }
    else if (wTop < contentTop + contentHeight - 50 - 70 - domHeight) {
        console.log(2)
        $('.content .left').hasClass('class-absolute') && $('.content .left').removeClass('class-absolute');
        $('.content .left').hasClass('class-fixed') || $('.content .left').addClass('class-fixed');
    }
    else {
        console.log(3)
        $('.content .left').hasClass('class-absolute') || $('.content .left').addClass('class-absolute');
        $('.content .left').hasClass('class-fixed') && $('.content .left').removeClass('class-fixed');
    }
})