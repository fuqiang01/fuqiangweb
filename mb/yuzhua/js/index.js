var map;
function init() {
    swiperInit();
    mapInit();
    bindEvent();
    renderMapAddress();
}
init();

// 事件绑定
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
        setTimeout(function () {
            if (lock1 && lock2) {
                $('#zqjy').getActive();
                $('.float-left .info .info-item').fadeOut();
                $('.info-home').fadeIn();
            }
        }, 20)
    })
    $('.info-item,.info-home').hover(function () {
        lock2 = false;
    }, function () {
        lock2 = true;
        setTimeout(function () {
            if (lock1 && lock2) {
                $('#zqjy').getActive();
                $('.float-left .info .info-item').fadeOut();
                $('.info-home').fadeIn();
            }
        }, 20)
    })

    // 热门服务
    $('.hot-server .title li').on('click', function () {
        $(this).getActive();
        $('.' + this.id).getActive();
    })
    $('.hot-server .info .drop-down').on('click', function () {
        $(this)
            .siblings('.drop-down')
            .find('.drop-down-box')
            .slideUp();
        $(this)
            .find('.drop-down-box')
            .slideToggle();
    })
    $('.hot-server .info .drop-down-box dd').on('click', function () {
        var val = $(this).text();
        $(this)
            .parents('.drop-down-box')
            .siblings('p')
            .find('span')
            .text(val)
    })

    // 工商服务
    $('.server .left li').hover(function () {
        $(this).getActive();
        $('.' + this.id).getActive();
    }, function () {

    })

    // 顾问团队
    $('.guwen-team .title li').hover(function () {
        $(this).getActive();
        $('.' + this.id).getActive();
    }, function () {

    })

    // 新闻资讯
    $('.news-wrapper .left .title li').hover(function () {
        $(this).getActive();
        $('.' + this.id).getActive();
    }, function () {

    })

    //服务城市
    $('.server-city .letter-wrapper').on('click', 'li', function () {
        var index = $(this).index() - 1;
        renderMapAddress(index);
    })
    $('.server-city .city-wrapper').on('click', 'li', function () {
        var coordinates = $(this).data('coordinates');
        markPointsToCenter (coordinates);
    })
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

    //精选服务
    new Swiper('.swiper-jinxuan', {
        loop: true, // 循环模式选项
        slidesPerView: 'auto',//根据slide的宽度自动调整展示数量。
        spaceBetween: 0,//每个slide的间距
        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.jinxuan-right',
            prevEl: '.jinxuan-left',
        },
    })
}

//mapData渲染
function renderMapAddress(index) {
    var data = [];
    var $domWrapper = $('.map-wrapper .info .city-wrapper');
    $domWrapper.empty();

    if (index >= 0 && index <= 4) {
        data = addressMapData[index];
    } else {
        for (var i = 0; i < addressMapData.length; i++) {
            data = data.concat(addressMapData[i]);
        }
    }

    data.forEach(function (ele, index) {
        $('<li/>')
            .text(ele.address)
            .data({ 'coordinates': ele.coordinates })
            .appendTo($domWrapper)
    })
}

//map初始化
function mapInit() {
    //基本地图加载
    map = new AMap.Map("map", {
        mapStyle: 'amap://styles/whitesmoke',
        resizeEnable: true,
        center: [113.365922, 31.719517], //地图中心点
        zoom: 7,//地图显示的缩放级别
        zoomEnable: false, //地图是否可缩放
    });
    //添加标记点
    addressMapData.forEach(function (ele) {
        ele.forEach(function (ele, i) {
            var marker = new AMap.Marker({
                position: ele.coordinates
            })
            map.add(marker);
            marker.on('click', function(e){
                markPointsToCenter( [e.lnglat.Q, e.lnglat.P] );
            });
        })
    })
    //打开信息窗体
    openInfo([113.365922, 31.719517]);
}

function openInfo(coordinates) {
    //构建信息窗体中显示的内容
    var info = [];
    info.push("<p style='text-align:center;font-size:20px;font-weight:bold;padding:5px 20px;'>金税通</p>")
    info.push("<p style='font-size:14px;padding:5px 20px;'>电话 : 010-84107000");
    info.push("<p style='padding:5px 20px;text-align:center;'><a href='#' style='background-color:#cc5656;padding: 5px 15px;display:inline-block;'>联系我们</a></p>");

    var infoWindow = new AMap.InfoWindow({
        content: info.join("")  //使用默认信息窗体框样式，显示信息内容
    });

    infoWindow.open(map, coordinates);
}

//让指定坐标开启窗体并居中
function markPointsToCenter (coordinates) {
    map.setZoomAndCenter(7, coordinates); //居中
    openInfo(coordinates); //开启窗体
}