new Swiper('.swiper-dynamic', {
    direction: 'vertical', // 垂直切换选项
    loop: true, // 循环模式选项
    autoplay: true,//自动切换
})

new Swiper('.swiper-case', {
    loop: true, // 循环模式选项
    slidesPerView: 3,//根据slide的宽度自动调整展示数量。
    spaceBetween: 10,//每个slide的间距
    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.case-btn-next',
        prevEl: '.case-btn-prev',
    },
    on: {
        slideChangeTransitionEnd: function () {
            var dom = this.slides[this.activeIndex];
            var date = $(dom).find('h4').text();
            var text = $(dom).find('p').text();
            var y = date.substr(0,2);
            var m = date.substr(2,2);
            var d = date.substr(4,2);
            $('.case-show')
                .find('.p3')
                .find('span')
                .text( '20' + y)
                .end()
                .end()
                .find('.p4')
                .text( m + '-' + d)
                .end()
                .find('.p5')
                .text(text);
        },
    },
})

// 公司注册类型&注册流程
$('.type .info li')
    .add('.process .info li')
    .hover(function () {
        $(this).getActive();
    }, function () { })




//下拉栏
$('.query-window .drop-down > p').on('click', function () { //下拉栏点击展开
    $(this)
        .parents('.drop-down')
        .find('ul')
        .slideToggle();
})
$('.query-window .drop-down li').on('click', function () { //下拉选项点击显示
    var val = $(this).text();
    $(this)
        .parents('.drop-down')
        .find('p')
        .find('span')
        .text(val)
    $(this).parents('ul').slideUp();
})