$('.process li').hover( function () {
    $(this).getActive();
}, function (){})

 //交易动态轮播
 new Swiper('.swiper-dynamic', {
    direction: 'vertical', // 垂直切换选项
    loop: true, // 循环模式选项
    autoplay: true,//自动切换
})

//下拉栏
$('.dynamic .drop-down > p').on('click', function () { //下拉栏点击展开
    $(this)
        .parents('.drop-down')
        .find('ul')
        .slideToggle();
})
$('.dynamic .drop-down li').on('click', function () { //下拉选项点击显示
    var val = $(this).text();
    $(this)
        .parents('.drop-down')
        .find('p')
        .find('span')
        .text(val)
    $(this).parents('ul').slideUp();
})