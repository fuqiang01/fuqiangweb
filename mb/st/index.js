var windowTop = $(window).height();
var scrollTop = $(window).scrollTop();
var delay = 0;
var lastTime = 0;

function init() {
    getShowInActive();
    bindEvent();
}

init();




function bindEvent() {

    //监听滚动条滚动
    $(window).scroll(function () {

        scrollTop = $(window).scrollTop();
        var hasClass = $('header').hasClass('header-hover');

        // 动态改变header样式
        if (top <= 5) {
            $('header').removeClass('header-hover');
        } else if (!hasClass) {
            $('header').addClass('header-hover');
        }
        //监听元素是否要要以动画的形式显现出来
        getShowInActive();
    })
    //header被hover时的样式改变
    $('header').hover(function () {
        $('header').addClass('header-hover');
    }, function () {
        $('header').removeClass('header-hover');
    })
    // header区域导航栏hover事件
    // $('header nav ul li').hover(function () {
    //     $(this).find('.hover-show').fadeIn();
    // }, function () {
    //     $(this).find('.hover-show').fadeOut();
    // })

}


//让需要以动画显示出来的元素获得相应的类名
function getShowInActive() {

    $('.showIn').each(function (index, ele) {

        var domtop = $(ele).offset().top;
        var hasFlag = $(ele).hasClass('flag'); //看看是否有标记

        if ( ( (windowTop + scrollTop) >= domtop ) && !hasFlag ) {
            
            $(ele).addClass('flag');//先给一个标记
            var time = getDelay();//通过防抖函数来获取延迟时间

            setTimeout(() => {
                $(ele).addClass('showIn-active');
            }, time);
        }
    })
}

//防抖函数,如果100毫秒以内触发了多个需要添加动态的元素,给他们加个延迟,免得一块显示不好看
function getDelay () {

    var nowTime = new Date().getTime();
    if ( nowTime - lastTime < 100) {
        delay += 100;
    } else {
        delay = 0;
    }
    lastTime = nowTime;
    return delay;
}