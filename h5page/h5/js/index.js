new Swiper('.swiper-banner', {
    loop: true, // 循环模式选项
    autoplay: true,//自动播放
})

new Swiper('.swiper-hot', {
    loop: true, // 循环模式选项
    autoplay: true,//自动播放
    slidesPerView: 'auto',//同时显示数量
    spaceBetween: 10,//间距
})

var newsInfo = new Swiper('.news-info', {
    on: {
        slideChangeTransitionStart: function () {
            var index = this.activeIndex;
            var num = index * 2.5 + 0.7;
            $('.scroll-bar .line').css('left', num + 'rem')
        },
    },
})