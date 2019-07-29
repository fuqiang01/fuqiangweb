//基本地图加载
var map = new AMap.Map("container", {
    resizeEnable: true,
    center: [113.365922, 31.719517], //地图中心点
    zoom: 18 //地图显示的缩放级别
});

//标记
var marker = new AMap.Marker({
    position: [113.365922, 31.719517] //位置
})
map.add(marker);


// 事件
$('.input').on('input', function() {
    var val = $(this).val();
    preventShaking(getSearchAddress, val);
})

$('.input-btn').click(function() {
    var val = $('.input').val();
    getSearchAddress(val);
})

$(document).click(function(e) {
    if (e.target === $('canvas')[0]) {
        $('.searchAddress > ul').empty();
    }
})

$('.searchAddress > ul').on('click', 'li', function() {
    var lng = $(this).data('lng');
    var lat = $(this).data('lat');
    var text = $(this).find('h4').text();
    $('.input').val(text);
    route(lng, lat);
    $('.searchAddress > ul').empty();
})

$('.position-btn').click(function() {
    $(this).find('div').addClass('positioning');
    getPosition();
})

// 获取定位信息
function getPosition() {
    map.plugin('AMap.Geolocation', function() {
        geolocation = new AMap.Geolocation({
            enableHighAccuracy: true, //是否使用高精度定位，默认:true
            timeout: 10000, //超过10秒后停止定位，默认：无穷大
            maximumAge: 0, //定位结果缓存0毫秒，默认：0
            convert: true, //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
            showButton: false, //显示定位按钮，默认：true
            buttonPosition: 'LB', //定位按钮停靠位置，默认：'LB'，左下角
            buttonOffset: new AMap.Pixel(10, 20), //定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
            showMarker: true, //定位成功后在定位到的位置显示点标记，默认：true
            showCircle: true, //定位成功后用圆圈表示定位精度范围，默认：true
            panToLocation: true, //定位成功后将定位到的位置作为地图中心点，默认：true
            zoomToAccuracy: true //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
        });

        map.addControl(geolocation);
        geolocation.getCurrentPosition();
        AMap.event.addListener(geolocation, 'complete', function(data) {

            var lng = data.position.lng;
            var lat = data.position.lat;
            route(lng, lat);
            $('.position-btn').find('div').removeClass('positioning');
        }); //返回定位信息
        AMap.event.addListener(geolocation, 'error', onError); //返回定位出错信息
    });
}

// 规划路线
function route(longitude, latitude) {

    AMap.plugin('AMap.Driving', function() {
        var driving = new AMap.Driving({
            // 驾车路线规划策略，AMap.DrivingPolicy.LEAST_TIME是最快捷模式
            policy: AMap.DrivingPolicy.LEAST_TIME,
            map: map
        })

        var startLngLat = [longitude, latitude]
        var endLngLat = [113.365922, 31.719517]

        map.clearMap(); //删除所有覆盖物,用来删除以前规划的路线

        driving.search(startLngLat, endLngLat, function(status, result) {
            // 未出错时，result即是对应的路线规划方案
            // if (status === 'complete') {
            //     alert('绘制驾车路线完成')
            // } else {
            //     alert('获取驾车数据失败：' + result)
            // }
        })
    })
}

//获取搜索内容
function getSearchAddress(keywords) {

    AMap.plugin('AMap.Autocomplete', function() {
        // 实例化Autocomplete
        var autoOptions = {
            city: '全国'
        }
        var autoComplete = new AMap.Autocomplete(autoOptions);
        autoComplete.search(keywords, function(status, result) {
            // 搜索成功时，result即是对应的匹配数据
            rendersSearchData(result.tips);
        })
    })
}

// 渲染搜索数据
function rendersSearchData(data) {

    $('.searchAddress > ul').empty();
    if (!data) {
        return;
    }
    data.forEach(function(ele, index) {

        var $Dom = $("<li data-lng=" + ele.location.lng + " data-lat=" + ele.location.lat + ">\
                    <h4>" + ele.name + "</h4>\
                    <p>" + ele.district + ele.address + "</p>\
                </li>")

        $Dom.appendTo('.searchAddress > ul');
    })
}

// 防抖函数
var preventShaking = (function() {

    var temp = null;
    return function(fun) {

        var arr = Array.prototype.slice.call(arguments, 1)
        clearTimeout(temp);
        temp = setTimeout(function() {
            fun.apply(this, arr);
        }, 1000)
    }
})()