//app.js
App({
  onLaunch: function () {
    const self = this;
    wx.login({
      success (res) {
        if (res.code) {
          wx.request({
            url: 'https://www.fqiang.co/onLogin',
            data: {
              code: res.code
            },
            success( res ) {
              self.globalData.userId = res.data;
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
  },
  globalData: {
    userId: null
  }
})