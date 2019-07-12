import '../less/index.less'
import $ from 'jquery'
import Swiper from 'swiper'

let windowHeight = getWindowSize().h;


function init () {
    swiperInit();
    bindEvent ();
    $('.swiper-container').height( windowHeight);
}

init();


//swiper插件初始化
function swiperInit () {

    // banner区域
    new Swiper ('.swiper-container', {
        loop: true, // 循环模式选项
        autoplay:true,
        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })

    // 服务推荐区域
    const Swiper1 = new Swiper('.rec-swiper-left', {
        //是否可以循环
        loop: true,
        //是否自动播放
        autoplay:true,
    });
    const Swiper2 = new Swiper('.rec-swiper-right',{
        loop: true,
        //轮播模式,默认滚动,fade代表淡入淡出
        effect : 'fade',
        fadeEffect: {
            crossFade: true,
        },
        controller: {
            control: Swiper1, //控制Swiper1
        },
    })
    //Swiper1控制Swiper2，需要在Swiper2初始化后
    Swiper1.controller.control = Swiper2;

    // 新闻中心区域
    new Swiper ('.news-swiper', {
        effect : 'coverflow',
        //同时显现的图片数量
        slidesPerView: 3,
        //是否让正在显示的图片居中,默认在最左边
        centeredSlides: true,
        coverflowEffect: {
            rotate: 30,
            stretch: 10,
            depth: 60,
            modifier: 2,
            slideShadows : true
        },
    })
}

function getWindowSize() {

    let w = $(window).width();
    let h = $(window).height();
    return {
        w,h
    }
}

function bindEvent () {

    // header
    $(window).scroll( function () {

        let top = $(window).scrollTop();
        let hasClass = $('header').hasClass('header-hover');

        if ( top === 0 ) {
            $('header').removeClass('header-hover');
        } else if ( top !== 0 && !hasClass ) {
            $('header').addClass('header-hover');
        }
    })
}



