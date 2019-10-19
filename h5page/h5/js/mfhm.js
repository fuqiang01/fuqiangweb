var swiperShi = new Swiper('.swiper-shi', {
    direction: 'vertical', // 垂直切换选项
    slidesPerView: 'auto',//同时显示数量
    centeredSlides: true,//active元素居中
})


renderSheng(init_city_picker);

function renderSheng(data) {
    data.forEach(function (ele, index) {
        $('<div class="swiper-slide" />')
            .text(ele.text)
            .data('index', index)
            .appendTo('.swiper-sheng .swiper-wrapper')
    })
    new Swiper('.swiper-sheng', {
        direction: 'vertical', // 垂直切换选项
        slidesPerView: 'auto',//同时显示数量
        centeredSlides: true,//active元素居中
        on: {
            slideChangeTransitionStart: function () {
                $('.swiper-shi .swiper-wrapper').empty();
                var nowIndex = $('.swiper-sheng .swiper-slide-active').data('index');
                data[nowIndex].children.forEach(function (ele) {
                    $('<div class="swiper-slide" />')
                        .text(ele.text)
                        .appendTo('.swiper-shi .swiper-wrapper')
                })
                swiperShi.updateSlides();//更新数量
                swiperShi.updateSlidesClasses();//更新类名
            },
        },
    })
}

//地址选择器
$('.form-wrapper .address').click( function () {
    $('.fixed-box').addClass('active')
})
$('.cancel').click(function () {
    $('.fixed-box').removeClass('active')
})
$('.determine').click(function () {
    var sheng = $('.swiper-sheng .swiper-slide-active').text();
    var shi = $('.swiper-shi .swiper-slide-active').text();
    $('.form-wrapper .address > span').text( sheng + ' ' + shi);
    $('.fixed-box').removeClass('active')
})

// 下拉框
$('.show-box').on('click', function () {
    $(this).siblings('ul').slideToggle()
})
$('.drop-down ul').on('click', 'li', function () {
    var text = $(this).text();
    $(this)
        .parents('.drop-down')
        .find('.show-box>span')
        .text( text)
        .end()
        .find('ul')
        .slideUp()
})
