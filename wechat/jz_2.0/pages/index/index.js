//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    address: app.globalData.userInfo.address,
    topicType: "摩托车（D/E/F）理论题",
  },
  // 页面加载时触发
  onLoad(){
    this.getLocation();
  },
  // 页面显示/切入前台时触发
  onShow(){
    // 进入到该页面时马上将当前科目设置为未知
    app.globalData.currentSubject = 0;
    // 进入到该页面时马上将当前练习类型为未知
    app.globalData.practiceType = null;
  },
  // 获取用户地理位置
  getLocation() {
    const _this = this;
    wx.getLocation({
      success(res) {
        let latitude = res.latitude;
        let longitude = res.longitude;
        // wx自带的方法只能获取经纬度，这里再调用腾讯地图接口来获得城市名称
        wx.request({
          url: `https://apis.map.qq.com/ws/geocoder/v1/?location=${latitude},${longitude}&key=${app.globalData.tencentMapKey}`,
          success: res => {
            const city = res.data.result.address_component.city;
            _this.setData({
              address: city
            })
            app.globalData.userInfo.address = city;
          }
        })
      }
    })
  },
  // 跳转到exerciseOptions页面
  goEOPage(e){
    const subject = e.currentTarget.dataset.subject;
    app.globalData.currentSubject = subject;
    wx.navigateTo({
      url: "/pages/exerciseOptions/exerciseOptions"
    })
  },
  // 跳转到答题页面
  goAQPage(e){
    const {subject, practice} = e.currentTarget.dataset;
    app.globalData.currentSubject = subject;
    app.globalData.practiceType = practice;
    wx.navigateTo({
      url: "/pages/answerQuestions/answerQuestions"
    })
  },
  // 跳转到考试信息介绍页面
  goTMPage(e){
    const {subject, practice} = e.currentTarget.dataset;
    app.globalData.currentSubject = subject;
    app.globalData.practiceType = practice;
    wx.navigateTo({
      url: "/pages/testMsg/testMsg"
    })
  },
  // 跳转到交通标志页面
  goTSPage(e){
    const {mark} = e.currentTarget.dataset;
    app.globalData.markType = mark;
    wx.navigateTo({
      url: "/pages/trafficSigns/trafficSigns"
    })
  },
  // 跳转到标志列表页
  goTSLPage(e){
    const {mark} = e.currentTarget.dataset;
    app.globalData.markType = mark;
    wx.navigateTo({
      url: '/pages/trafficSignsList/trafficSignsList'
    });
  },
})
