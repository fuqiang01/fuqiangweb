import {
  getNotDoneTopic,
  getWrongTopic,
  getRightWrongNotDoneTopicNumber,
  getTestTopic,
  addRightTopic,
  addWrongTopic,
  getCollectionTopic,
  getCollectionTopicIds,
  updateCollectionTopic,
  getRandomTopic,
  resetUserTopic,
  addResult
} from "../../api/index.js"
import {
  removeDuplicateForObjArr
} from "../../utils/util.js"

const app = getApp();
let tempTimer = null; // 倒计时的计时器
const util = require('../../utils/util.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userId: null, // 用户id
    currentSubject: null, // 当前科目
    practiceType: null, // 练习类型，是模拟考试还谁顺序练习。。。
    topicArr: [], // 题目对象集合
    current: 0, // swiper当前的显示页
    showIndex: 0, //显示项为当前题目数组的第几项
    yesNum: 0, // 模拟测试中，做对的题目总数
    didArr: [], // 存放做过了的题的信息，[{id: ..., classList: [...]}]
    collectionTopicIdsArr: [], // 收藏的题目id的数组
    currentTopicIsCollection: false, // 当前显示的题目是否为收藏的
    sumObj: {
      yes: 0,
      no: 0,
      all: 0
    }, // 存放做对的题数量，做错的题的数量和题目总数
    countdownTime: 30 * 60, // 倒计时的秒数

    isSame: true, // 确认执行动画之后是否还是原来的(是否滑动了但是没有滑到下一题)
    isTouch: false, // 是否通过滑动来触发下一题
    isToNext: false, // 当前项是否是点击了正确的选项，自动滑动到下一页的
    canChangeIsSame: true
  },
  // 启动计时器
  startTimer(){
    clearInterval(tempTimer);
    tempTimer = setInterval(() => {
      const currentTime = this.data.countdownTime - 1;
      this.setData({
        countdownTime: currentTime
      })
      if(currentTime <= 0){
        // 倒计时结束
        clearInterval(tempTimer);
        this.onOver();
      }
    }, 1000);
  },
  // 题目做正确了执行
  correct(e) {
    this.addDidArr(e.detail);
    if (this.data.type === 'test') {
      this.setData({
        yesNum: this.data.yesNum + 1
      })
    } else {
      addRightTopic(this.data.currentSubject, this.data.userId, e.detail.id);
    }
    this.changeSumObj('yes');
    this.toNext();
  },
  // 自动跳到下一题
  toNext() {
    if (this.isLastTopic()) return;
    this.setData({
      current: this.data.current + 1,
      isToNext: true
    })
  },
  // 判断当前题目是否为收藏
  handleCollection() {
    const currentId = this.data.topicArr[this.data.showIndex].id;
    const currentTopicIsCollection = this.data.collectionTopicIdsArr.includes(currentId.toString());
    this.setData({
      currentTopicIsCollection
    })
  },
  // 题目做错执行
  wrong(e) {
    this.addDidArr(e.detail);
    this.changeSumObj('no');
    if (this.data.type === 'test') return;
    addWrongTopic(this.data.currentSubject, this.data.userId, e.detail.id);
  },
  // 手指触摸事件
  onStart(e) {
    this.setData({
      isTouch: true
    })
  },
  onChange(e) {
    if (this.data.canChangeIsSame) {
      this.setData({
        isSame: false
      })
    } else {
      this.setData({
        canChangeIsSame: true
      })
    }
  },
  // swiper动画结束时触发
  onFinish(e) {
    if (this.data.isSame) return;
    this.setData({
      isSame: true
    })
    if (e.detail.source != 'touch' && !this.data.isToNext) {
      this.setData({
        isTouch: false
      })
      return;
    }
    let current = e.detail.current;
    let showIndex = this.data.showIndex;
    if (current > 0) {
      showIndex = showIndex >= this.data.topicArr.length - 1 ? this.data.topicArr.length - 1 : showIndex + 1;
    } else {
      showIndex = showIndex <= 0 ? 0 : showIndex - 1;
    }
    current = showIndex == 0 ? 0 : 1;
    if (current !== e.detail.current) {
      this.setData({
        canChangeIsSame: false
      })
    }
    this.setData({
      showIndex,
      current,
      isToNext: false,
    })
    
    // 判断当前题目是否为收藏
    this.handleCollection()
  },
  // 将做过的题目的信息存起来，主要目的是因为一面翻过去了这题再返回回来的时候知道刚刚做题目选的什么
  addDidArr(obj) {
    this.setData({
      didArr: [...this.data.didArr, obj]
    })
  },
  // 根据练习的类型请求题目数据
  setTopicArr() {
    let title = '加载中...'; // 用来动态设置页面标题的
    const subject = this.data.currentSubject;
    const userId = this.data.userId;
    // 根据练习类型确定要请求的题目]
    switch (this.data.practiceType) {
      case 'order':
        title = '顺章练习';
        // 请求少量的题目，懒加载
        getNotDoneTopic(subject, userId, true).then(res => {
          const data = res.data.data;
          // 关闭加载框
          wx.hideLoading();
          // 先判断当前是否还有没做完的题
          if (data.length === 0) {
            // 全部按顺序做完了，直接弹框让用户退出当前页面或者重置所有选项（也就是把所有做过的题目清零）
            wx.showModal({
              title: "当前没有未做的题哦！",
              content: "请点击确定按钮返回上一页，或者，点击重置按钮重置所有题目",
              cancelText: "重置",
              success(res) {
                if (res.cancel) { // 点击的重置
                  // 向服务器发送重置请求
                  wx.showLoading({title: "重置中..."});
                  resetUserTopic(subject, userId).then(_ => {
                    // 服务器重置成功，再次发送请求来获取题目数据
                    this.setTopicArr();
                  })
                } else { // 点击的确定
                  wx.navigateBack({
                    delta: 1
                  })
                }
              }
            })
            return;
          }
          this.setData({
            topicArr: data
          })
          // 请求收藏的题目id数组
          this.getCollectionTopicIdsArr();
        }).then(_ => {
          // 马上再请求所有题目，并且去掉重复的
          getNotDoneTopic(subject, userId, false).then(res => {
            const newArr = this.data.topicArr.concat(res.data.data);
            this.setData({
              topicArr: removeDuplicateForObjArr(newArr) // 调用一下去重函数
            })
          })
        })
        break;
      case 'test':
        title = '模拟考试';
        getTestTopic(subject).then(res => {
          this.setData({
            topicArr: res.data.data
          })
          // 请求收藏的题目id数组
          this.getCollectionTopicIdsArr();
          // 关闭加载框
          wx.hideLoading();
          // 启动计时器
          this.startTimer();
        })
        break;
      case 'wrong':
        title = '错题回顾';
        getWrongTopic(subject, userId).then(res => {
          const data = res.data.data;
          // 关闭加载框
          wx.hideLoading();
          // 先判断当前是否错题
          if (data.length === 0) {
            // 没有错题，直接弹框让用户退出当前页面
            wx.showModal({
              title: "当前没有错题哦！",
              showCancel: false,
              success() {
                wx.navigateBack({
                  delta: 1
                })
              }
            })
            return;
          }
          this.setData({
            topicArr: data
          })
          // 请求收藏的题目id数组
          this.getCollectionTopicIdsArr();
        })
        break;
      case 'collect':
        title = "我的收藏";
        getCollectionTopic(subject, userId).then(res => {
          const data = res.data.data;
          // 关闭加载框
          wx.hideLoading();
          // 先判断当前是否有收藏的题目
          if (data.length === 0) {
            // 没有收藏，直接弹框让用户退出当前页面
            wx.showModal({
              title: "当前没有收藏任何题目哦！",
              showCancel: false,
              success() {
                wx.navigateBack({
                  delta: 1
                })
              }
            })
            return;
          }
          this.setData({
            topicArr: data
          })
          // 请求收藏的题目id数组
          this.getCollectionTopicIdsArr();
        })
        break;
      case 'random':
        title = "随机练习";
        getRandomTopic(subject, userId).then(res => {
          const data = res.data.data;
          // 关闭加载框
          wx.hideLoading();
          // 先判断当前是否还有没做完的题
          if (data.length === 0) {
            // 全部按顺序做完了，直接弹框让用户退出当前页面或者重置所有选项（也就是把所有做过的题目清零）
            wx.showModal({
              title: "当前没有未做的题哦！",
              content: "请点击确定按钮返回上一页，或者，点击重置按钮重置所有题目",
              cancelText: "重置",
              success(res) {
                if (res.cancel) { // 点击的重置
                  // 向服务器发送重置请求
                  wx.showLoading({title: "重置中..."});
                  resetUserTopic(subject, userId).then(_ => {
                    // 服务器重置成功，再次发送请求来获取题目数据
                    this.setTopicArr();
                  })
                } else { // 点击的确定
                  wx.navigateBack({
                    delta: 1
                  })
                }
              }
            })
            return;
          }
          this.setData({
            topicArr: data
          })
          // 请求收藏的题目id数组
          this.getCollectionTopicIdsArr();
        })

    }
    // 设置标题为该练习类型
    wx.setNavigationBarTitle({
      title
    })
  },
  // 请求题目数量数据
  setSumObj() {
    // 如果是模拟考试的话题目数量是固定的，不用发送请求
    if (this.data.practiceType === 'test') {
      this.setData({
        sumObj: {
          yes: 0,
          no: 0,
          all: 50
        }
      })
      return;
    }
    getRightWrongNotDoneTopicNumber(this.data.currentSubject, this.data.userId).then(res => {
      const data = res.data.data;
      switch (this.data.practiceType) {
        case "order":
          this.setData({
            sumObj: {
              yes: data.rightNumber,
              no: data.wrongNumber,
              all: data.rightNumber + data.wrongNumber + data.notDoneNumber
            }
          })
          break;
        case "wrong":
          this.setData({
            sumObj: {
              yes: 0,
              no: 0,
              all: data.wrongNumber
            }
          })
          break;
        case "collect":
          this.setData({
            sumObj: {
              yes: 0,
              no: 0,
              all: data.collectionNumber
            }
          })
      }

    })
  },
  // 修改题目数据
  changeSumObj(state) {
    switch (state) {
      case 'yes':
        this.setData({
          'sumObj.yes': this.data.sumObj.yes + 1,
        })
        break;
      case 'no':
        this.setData({
          'sumObj.no': this.data.sumObj.no + 1,
        })
    }
  },
  // 显示模拟考试的成绩
  getResults() {
    const results = this.data.yesNum * 2;
    const str = results >= 90 ? '成绩合格' : '成绩不合格';
    wx.showModal({
      title: '考试结束',
      content: `${str},分数：${results}分`,
      //是否显示取消按钮,默认值true
      showCancel: false,
      success(res) {
        if (res.confirm) {
          wx.reLaunch({
            url: '/pages/index/index'
          })
        }
      }
    })
  },
  // 考试结束事件
  onOver() {
    this.getResults();
    const subject = this.data.currentSubject;
    const userId = this.data.userId;
    const score = this.data.yesNum * 2;
    const timeConsuming = 30 * 60 - this.data.countdownTime;
    addResult(subject, userId, score, timeConsuming);
  },
  // 是否到达最后一题了
  isLastTopic() {
    if (this.data.showIndex >= this.data.topicArr.length - 1) { // 到了最后一题了
      if (this.data.type === 'test') { // 做的模拟考试
        // 倒计时结束
        clearInterval(tempTimer);
        this.onOver();
        return true;
      }
      wx.showToast({
        title: '已经是最后一题',
        icon: 'success',
      })
      return true;
    }
    return false;
  },
  // 请求收藏的题目id数组
  getCollectionTopicIdsArr() {
    getCollectionTopicIds(this.data.currentSubject, this.data.userId).then(res => {
      this.setData({
        collectionTopicIdsArr: res.data.data
      })
      this.handleCollection();
    })
  },
  // 处理子组件点击收藏按钮事件
  onCollectionClick() {
    const currentId = this.data.topicArr[this.data.showIndex].id;
    const collectionTopicIdsArr = this.data.collectionTopicIdsArr;
    let newArr;
    if (collectionTopicIdsArr.includes(currentId)) {
      newArr = collectionTopicIdsArr.filter(id => id != currentId);
    } else {
      newArr = [...this.data.collectionTopicIdsArr, currentId];
    }
    this.setData({
      collectionTopicIdsArr: newArr,
      currentTopicIsCollection: !this.data.currentTopicIsCollection
    })
    // 发送请求
    updateCollectionTopic(this.data.currentSubject, this.data.userId, currentId)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 页面初始化时给用户id、当前科目和练习类型赋值
    this.setData({
      userId: app.globalData.userInfo.userId,
      currentSubject: app.globalData.currentSubject,
      practiceType: app.globalData.practiceType
    })
    // 显示一个加载框
    wx.showLoading({
      mask: true,
      title: '加载中...'
    })
    // 判断是否获取到了userId，如果还没有获取到就把调用函数写到回调中
    if (app.globalData.userInfo.userId) {
      this.setTopicArr();
      this.setSumObj();
    } else {
      app.globalData.loginCallback = userId => {
        this.setData({
          userId
        })
        this.setTopicArr();
        this.setSumObj();
      }
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    // 页面卸载一定要清除定时器
    clearInterval(tempTimer);
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      path: '/pages/index/index'
    }
  }
})