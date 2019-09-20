mySwiper = new Swiper('.swiper-jiaoyidongtai', {
    direction: 'vertical', // 垂直切换选项
    loop: true, // 循环模式选项
    slidesPerView: 'auto',//根据slide的宽度自动调整展示数量。
    spaceBetween: 10,//每个slide的间距
    autoplay: true,//自动切换
})     



$('.screening .drop-down p').on('click', function () {
    $(this)
        .parents('.drop-down')
        .siblings('.drop-down')
        .find('ul')
        .slideUp();
    $(this)
        .parents('.drop-down')
        .find('ul')
        .slideToggle();
})
$('.screening .drop-down li').on('click', function () {
    var val = $(this).text();
    $(this)
        .parents('.drop-down')
        .find('p')
        .find('span')
        .text(val)
    $(this).parents('ul').slideUp();
})