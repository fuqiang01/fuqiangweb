// 轮播图初始化
var mySwiper = new Swiper('.swiper-banner', {
    loop: true, // 循环模式选项

    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
    },
})   

// 分类按钮
var pathname = location.pathname;
$('.category')
    .find('a')
    .each(function (index, ele) {
        if ($(ele).attr('href') === pathname) {
            $(ele).addClass('active');
            $('.colorLine').css('left', 98 * index);
        }
    })