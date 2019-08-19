//轮播图初始化
var mySwiper = new Swiper('.swiper-container', {
    loop: true, // 循环模式选项
})

var certifySwiper = new Swiper('.swiper-news', {
    watchSlidesProgress: true,
    slidesPerView: 'auto',
    centeredSlides: true,
    loop: true,
    loopedSlides: 5,
    // autoplay: true,
    on: {
        progress: function (progress) {
            for (i = 0; i < this.slides.length; i++) {
                var slide = this.slides.eq(i);
                var slideProgress = this.slides[i].progress;

                modify = 1;
                if (Math.abs(slideProgress) > 1) {
                    modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
                }
                translate = slideProgress * modify * 200 + 'px';
                scale = 1 - Math.abs(slideProgress) / 5;
                zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
                slide.transform('translateX(' + translate + ') scale(' + scale + ')');
                slide.css('zIndex', zIndex);
                slide.css('opacity', 1);
                if (Math.abs(slideProgress) > 3) {
                    slide.css('opacity', 0);
                }
            }
        },
        setTransition: function (transition) {
            for (var i = 0; i < this.slides.length; i++) {
                var slide = this.slides.eq(i)
                slide.transition(transition);
            }
        }
    }
})

// 创业开办
var newBgArr = ["pccc.png", "wheel5.png", "wheel6.png"];
var lastBgArr = ["wheel4.png","wheel2.png","wheel3.png"];
$('.cy-info').find('li').hover(function () {

    var newIndex = $(this).index();
    var lastIndex = $(this).siblings('.active').index();

    $(this)
        .addClass('active')
        .css('backgroundImage','url("./img/' + newBgArr[newIndex] + '")')
        .siblings('.active')
        .removeClass('active')
        .css('backgroundImage','url("./img/' + lastBgArr[lastIndex] + '")')
}, function () {})

// 自主做账
$('.zizhu-info .right li').hover( function () {

    var index = $(this).index();
    $(this)
        .addClass('active')
        .siblings('.active')
        .removeClass('active')
        $('.zizhu-info .left')
            .find('img')
            .filter('.show')
            .removeClass('show')
            .end()
            .eq(index)
            .addClass('show')
})

//加盟
$('.jiameng .img div').hover( function () {
    $('.' + this.id)
        .addClass('show')
        .siblings('.show')
        .removeClass('show')
}, function () {})