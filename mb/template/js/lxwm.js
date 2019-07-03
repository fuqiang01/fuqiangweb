var map = new AMap.Map('container', {
    resizeEnable: true, //是否监控地图容器尺寸变化
    zoom: 17, //初始化地图层级
    center: [113.365949, 31.71956] //初始化地图中心点
});

marker = new AMap.Marker({
    icon: "https://a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png",
    position: [113.365949, 31.71956],
    offset: new AMap.Pixel(-13, -30)
});
marker.setMap(map);