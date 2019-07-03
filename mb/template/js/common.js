var windowH = $(window).height();
var $domList = $('.f-tag');
var scrollH = $(window).scrollTop();





addAnimation();

// 侧边栏弹框
$('.rightBar li').click(function () {
    if (this.id) {
        $('.' + this.id).fadeToggle();
    }
})
// 侧边栏返回顶部
$('.goTop').click(function () {
    $('html,body').animate({ scrollTop: 0 }, 500);
})



$(window).scroll(function () {
    scrollH = $(window).scrollTop();
    addAnimation();
})

// 动态的给元素添加动画类名
function addAnimation() {

    var delate = 0;
    $domList.each(function (index, ele) {
        var top = $(ele).offset().top;
        if (scrollH + windowH > top + 30 && !$(ele).hasClass('animationShow')) {
            delate += 50;
            setTimeout( function () {
                $(ele).addClass('animationShow');
            }, delate)
        }
    })
}

