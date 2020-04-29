import {onLogin} from "./api/index";

//app.js
let app;
App({
  onLaunch: function () {
    app = this;
    this.login();
    this.getUserInfo();
  },
  // 登录
  login() {
    wx.login({
      success(res) {
        onLogin(res.code).then(data => {
          app.globalData.userInfo.userId = data.data.data;
          // 页面需要userId的时候可能这里异步请求并没有完成，所以到时候可以定义一个回调函数在这里调用
          app.globalData.loginCallback && app.globalData.loginCallback(data.data.data);
        }).catch(_ => {
          // 如果无法登陆，也就是服务器关闭了，直接显示服务器维护页面
          wx.reLaunch({
            url: "/pages/serverMaintenance/serverMaintenance"
          })
        })
      }
    })
  },
  // 获取用户信息
  getUserInfo() {
    wx.getSetting({
      success(res){
        // 先看看用户授权没有，授权了就把信息保存到全局，没授权这里就不管，等后边有页面用到用户信息的时候再让用户授权
        if(res.authSetting['scope.userInfo']){
          wx.getUserInfo({
            success (e) {
              app.globalData.userInfo.name = e.userInfo.nickName;
              app.globalData.userInfo.photoUrl = e.userInfo.avatarUrl;
            }
          })
        }
      }
    })
  },
  globalData: {
    tencentMapKey: "SV4BZ-NMPCK-7PFJJ-AXYI5-7DOIE-4NFWX", // 腾讯地图的key值
    userInfo: {
      userId: null, // 用户唯一id
      name: null, // 微信名称
      gender: 0, // 性别：0未知、1男、2女
      photoUrl: null, // 头像url地址
      address: "全国", // 用户定位地址精确到市，默认为全国
      isSuper: true, // 改用户是否为超级用户，如果是的话就有回复和删除留言的能力
    },
    currentSubject: 0, // 当前科目，1：科目一；4：科目四；其他数字：未知
    loginCallback: null, // 登录的回调函数
    practiceType: null, // 练习类型，order: 顺章练习；test：模拟考试；wrong：错题；random：随机；collect：收藏
    typeValue: "", // 在专项练习和章节练习中具体的分类名称（比如：正确题、错误题等）
  }
})