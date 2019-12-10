//公司坐标
var lnglat = [113.365922, 31.719517];
var map = new AMap.Map('map', {
    resizeEnable: true,
    center: lnglat, //地图中心点
    zoom: 16,//地图缩放大小
    scrollWheel: false, // 禁止鼠标滚轮缩放
    mapStyle: 'amap://styles/macaron', //设置地图皮肤

    pitch: 80,
    rotation: -15,
    viewMode: '3D',//开启3D视图,默认为关闭
    buildingAnimation: true,//楼块出现是否带动画
    expandZoomRange: true,
    zooms: [3, 20],
});
var marker = new AMap.Marker({
    position: lnglat  //标记点坐标
});
marker.setMap(map);  //添加标记点


AMap.plugin([
    'AMap.ToolBar',
], function(){
    // 在图面添加工具条控件，工具条控件集成了缩放、平移、定位等功能按钮在内的组合控件
    map.addControl(new AMap.ToolBar({
        // 简易缩放模式，默认为 false
        liteStyle: true
    }));
});


// 框体内部标签
var content = '<div class="info-title">湖北楚威企业代理登记有限公司</div><div class="info-content">' +
    '<p>业务范围 : 注册公司 代理记账 网站建设 税务代理 APP制作</p>' +
    '<p>地址 : 随州市曾都区沿河大道147号</p>' +
    '<p>网站建设 : <span>13886861003</span></p></div>';

//框体下边的搜索栏
var infowindow = new AMap.AdvancedInfoWindow({
    content: content,
    // placeSearch: false,
    // asOrigin: false,
    offset: new AMap.Pixel(0, -30)
});
infowindow.open(map, lnglat);


