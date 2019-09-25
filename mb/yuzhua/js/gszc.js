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
})

// 公司注册类型&注册流程
$('.type .info li')
    .add('.process .info li')
    .hover(function () {
        $(this).getActive();
    }, function () { })