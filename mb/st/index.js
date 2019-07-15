var windowTop = $(window).height();
var scrollTop = $(window).scrollTop();
var delay = 0;
var lastTime = 0;

function init() {
    swiperInit();
    getShowInActive();
    bindEvent();
}

init();


// swiper插件初始化函数
function swiperInit() {
    new Swiper('.swiper-container', {
        loop: true, // 循环模式选项
        autoplay: true,//自动播放
        autoplay: {
            delay: 5000,//5秒切换一次
        },
        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
        },
        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })

    new Swiper('.recommended-swiper', {
        //direction: 'vertical', // 垂直切换选项
        loop: true, // 循环模式选项
        autoplay: true,
        on: {
            slideChangeTransitionStart: function () {

                $('.recommended-swiper')
                    .find('.text')
                    .find('h2,h3,p')
                    .removeClass('showIn-active')

                $('.recommended-swiper')
                    .find('.text')
                    .eq(this.snapIndex)
                    .find('h2,h3,p')
                    .each(function (index, ele) {
                        addShowInActive($(ele));
                    })
            },
        },
        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
        },
    })
}






function bindEvent() {

    //监听滚动条滚动
    $(window).scroll(function () {

        scrollTop = $(window).scrollTop();
        var hasClass = $('header').hasClass('header-hover');

        // 动态改变header样式
        if (scrollTop <= 5) {
            $('header').removeClass('header-hover');
        } else if (!hasClass) {
            $('header').addClass('header-hover');
        }
        //监听元素是否要要以动画的形式显现出来
        getShowInActive();
    })
    //header被hover时的样式改变
    // $('header').hover(function () {
    //     $('header').addClass('header-hover');
    // }, function () {
    //     $('header').removeClass('header-hover');
    // })

    // header区域导航栏hover事件
    $('header nav ul li').hover(function () {
        $(this).find('.hover-show').fadeIn();
    }, function () {
        $(this).find('.hover-show').fadeOut();
    })

    // 侧边栏
    $('.kf-item1').hover( function () {
        $('.nav1').fadeIn();
    }, function () {
        $('.nav1').fadeOut();
    })

    $('.kf-item2').hover( function () {
        $('.nav2').fadeIn();
    }, function () {
        $('.nav2').fadeOut();
    })

    $('.kf-item3').hover( function () {
        $('.nav3').fadeIn();
    }, function () {
        $('.nav3').fadeOut();
    })

    $('.kf-item4').click( function () {
        $('html,body').animate({'scrollTop':'0'},800);
    })
}


//让需要以动画显示出来的元素获得相应的类名
function getShowInActive() {

    $('.showIn').each(function (index, ele) {

        var domtop = $(ele).offset().top;
        var hasFlag = $(ele).hasClass('flag'); //看看是否有标记

        //大于scrolltop

        if ( domtop >= scrollTop && ( domtop <= (windowTop + scrollTop) ) && !hasFlag) {

            $(ele).addClass('flag');//先给一个标记
            addShowInActive($(ele));
        }
    })
}

//防抖函数,如果100毫秒以内触发了多个需要添加动态的元素,给他们加个延迟,免得一块显示不好看
function getDelay() {

    var nowTime = new Date().getTime();
    if (nowTime - lastTime < 100) {
        delay += 100;
    } else {
        delay = 0;
    }
    lastTime = nowTime;
    return delay;
}

function addShowInActive($dom) {

    var time = getDelay();//通过防抖函数来获取延迟时间

    setTimeout(() => {
        $dom.addClass('showIn-active');
    }, time);
}
