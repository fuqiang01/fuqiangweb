$('.process li').hover( function () {
    $(this).getActive();
}, function (){})

 //交易动态轮播
 new Swiper('.swiper-dynamic', {
    direction: 'vertical', // 垂直切换选项
    loop: true, // 循环模式选项
    autoplay: true,//自动切换
})