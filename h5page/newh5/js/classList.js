
function init () {
    changeConH ();
}
init();


//使content区域加上topbar区域高度占窗口高度的100%
function changeConH () {
    var windowH = $(window).height();
    var topbarH = $('.topbar').height();
    $('.content').height( windowH - topbarH);
}

$(window).scroll( function () {
    changeConH ();
})

// 类型与详情绑定
$('.type').on( 'click', 'li', function () {

    $(this).siblings('.active').removeClass('active');
    $(this).addClass('active');
    $('.list > dl').hide();
    $('.' + this.id).show();
})