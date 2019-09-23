new Swiper ('.swiper-dynamic', {
    direction: 'vertical', // 垂直切换选项
    loop: true, // 循环模式选项
    autoplay: true,//自动切换
})

// 公司注册类型
$('.type .info li').hover(function () {
    $(this).getActive();
}, function () {})