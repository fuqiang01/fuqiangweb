var windowHeight = $(window).height();
var scrollTop = $(window).scrollTop();
var delay = 0;
var lastTime = 0;


function init() {
    getShowInActive();
    bindEvent();
}
init();

function bindEvent() {

    // 侧边框
    $('.goTop').on('click', function () {
        $('html,body').animate({ 'scrollTop': 0 }, 500);
    })
    $('.hidden').on('click', function () {
        $('.show-box').fadeOut();
        $('.hidden-box').fadeIn();
    })
    $('.hidden-box').on('click', function () {
        $('.hidden-box').fadeOut();
        $('.show-box').fadeIn();
    })

    //滚动条监听
    $(window).scroll(function () {

        scrollTop = $(window).scrollTop();
        scrollTop > 100 ? $('.goTop').fadeIn() : $('.goTop').fadeOut();

        //监听元素是否要要以动画的形式显现出来
        getShowInActive();
    })
}

//让需要以动画显示出来的元素获得相应的类名
function getShowInActive() {

    $('.f-left,.f-right,.f-top,.f-bottom,.f-line').each(function (index, ele) {
        var domtop = $(ele).offset().top;
        var domHeight = $(ele).outerHeight();
        var hasFlag = $(ele).hasClass('f-flag'); //看看是否有标记
        //大于scrolltop
        if (domtop >= (scrollTop - domHeight) && (domtop <= (windowHeight + scrollTop)) && !hasFlag) {

            $(ele).addClass('f-flag');//先给一个标记
            //看看是不是主页的那一条直线
            $(ele).hasClass('f-line') ?  $(ele).addClass('go') : addShowInActive($(ele));
        }
        if (hasFlag && domtop < (scrollTop - domHeight) || (domtop > (windowHeight + scrollTop))) {

            $(ele).removeClass('f-flag');
            $(ele).hasClass('f-line') ? $(ele).removeClass('go') : $(ele).removeClass('f-aniIn');
        }
    })
}



//防抖函数,如果100毫秒以内触发了多个需要添加动态的元素,给他们加个延迟,免得一块显示不好看
function getDelay() {

    var nowTime = new Date().getTime();
    if (nowTime - lastTime < 150) {
        delay += 150;
    } else {
        delay = 0;
    }
    lastTime = nowTime;
    return delay;
}

function addShowInActive($dom) {

    var time = getDelay();//通过防抖函数来获取延迟时间

    setTimeout(function () {
        $dom.addClass('f-aniIn');
    }, time);
}