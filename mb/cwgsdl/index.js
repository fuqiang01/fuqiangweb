var windowHeight = getWindowSize().h;
function init() {
    swiperInit();
    bindEvent();
    $('.swiper-container').height(windowHeight);
}

init();


//swiper插件初始化
function swiperInit() {

    // banner区域
    var bannerSwiper = new Swiper('.swiper-container', {
        loop: true, // 循环模式选项
        autoplay: 5000,
        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    })

    $('.swiper-button-next').click( function () {
        bannerSwiper.swipeNext();
    })
    $('.swiper-button-prev').click( function () {
        bannerSwiper.swipePrev();
    })

    // 服务推荐区域
    var Swiper1 = new Swiper('.rec-swiper-left', {
        loop: true,//是否可以循环
        autoplay: 5000,//是否自动播放
        onSlideChangeStart: function(swiper){
            var index = (swiper.activeIndex - 1 ) % 4;
            $('.rec-swiper-right .swiper-slide')
                .eq(index)
                .addClass('active')
                .siblings('.active')
                .removeClass('active');
        }
    });

    // 新闻中心区域
    new Swiper('.news-swiper', {
        effect: 'coverflow',
        slidesPerView: 3,//同时显现的图片数量
        initialSlide: 1,//中间显示第二张
        centeredSlides: true,//是否让正在显示的图片居中,默认在最左边
        tdFlow: {
            rotate : 50,
        }
    })
}

function getWindowSize() {

    var w = $(window).width();
    var h = $(window).height();
    return {
        w : w,
        h : h
    };
}

function bindEvent() {
    
    // header
    $(window).scroll(function() {

        var top = $(window).scrollTop();
        var hasClass = $('header').hasClass('header-hover');

        if (top === 0) {
            $('header').removeClass('header-hover');
        } else if (top !== 0 && !hasClass) {
            $('header').addClass('header-hover');
        }
    })
}