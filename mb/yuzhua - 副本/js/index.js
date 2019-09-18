

function init() {
    swiperInit();
    bindEvent();
}
init();

function bindEvent() {
    var lock1 = true;
    var lock2 = true;
    //topBanner关闭
    $('.top-banner .close-btn').on('click', function () {
        $('.top-banner').slideUp();
    })

    // banner内浮动内容
    $('.float-left>ul>li').hover(function () {
        lock1 = false;
        $(this).getActive();
        $('.float-left .info .info-item, .info-home').fadeOut();
        $('.' + this.id).fadeIn();
    }, function () {
        lock1 = true;
        setTimeout( function () {
            if ( lock1 && lock2 ) {
                $('#zqjy').getActive();
                $('.float-left .info .info-item').fadeOut();
                $('.info-home').fadeIn();
            }
        },20)
    })
    $('.info-item,.info-home').hover( function () {
        lock2 = false;
    }, function () {
        lock2 = true;
        setTimeout( function () {
            if ( lock1 && lock2 ) {
                $('#zqjy').getActive();
                $('.float-left .info .info-item').fadeOut();
                $('.info-home').fadeIn();
            }
        },20)
    })

    // 热门服务
    $('.hot-server .info li').hover(function () {
        $(this).getActive();
    }, function () {})

    // 知产交易
    $('.chanquan .left ul li').hover( function () {
        $(this).getActive();
        $('.' + this.id).getActive();
    }, function () {})
}



// 轮播图初始化
function swiperInit() {

    //banner初始化
    new Swiper('.swiper-banner', {
        loop: true, // 循环模式选项
        autoplay: true,//自动切换
        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
        },
    })

    //交易指数轮播
    new Swiper('.swiper-jiaoyizhishu', {
        direction: 'vertical', // 垂直切换选项
        loop: true, // 循环模式选项
        autoplay: true,//自动切换
    })

    //交易动态轮播
    new Swiper('.swiper-dongtai', {
        direction: 'vertical', // 垂直切换选项
        loop: true, // 循环模式选项
        autoplay: true,//自动切换
    })

    //网站公告轮播
    new Swiper('.swiper-gonggao', {
        direction: 'vertical', // 垂直切换选项
        loop: true, // 循环模式选项
        autoplay: true,//自动切换
    })
}




