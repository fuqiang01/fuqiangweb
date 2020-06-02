

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

$(window).scroll( function () {

    var scrollT = $(window).scrollTop();
    if ( scrollT >= 300) {
        $('.goTop').fadeIn();
    } else {
        $('.goTop').fadeOut();
    }
})