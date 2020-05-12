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
  addResult,
  getTextOrImageTopic,
  getRightOrWrongTopic,
  getTestTypeTopic,
  getKnowledgeTypeTopic,
  getChapterTypeTopoics

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
    imgBaseUrl: "", // 访问图片的根地址
    userId: null, // 用户id
    currentSubject: null, // 当前科目
    practiceType: null, // 练习类型，是模拟考试还谁顺序练习。。。
    topicArr: [], // 题目对象集合
    current: 0, // swiper当前的显示页
    showIndex: 0, //显示项为当前题目数组的第几项
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
  startTimer() {
    clearInterval(tempTimer);
    tempTimer = setInterval(() => {
      const currentTime = this.data.countdownTime - 1;
      this.setData({
        countdownTime: currentTime
      })
      if (currentTime <= 0) {
        // 倒计时结束
        clearInterval(tempTimer);
        this.onOver();
      }
    }, 1000);
  },
  // 题目做正确了执行
  correct(e) {
    this.addDidArr(e.detail);
    this.changeSumObj('yes');
    this.toNext();
    if (this.data.practiceType === 'test') return;
    addRightTopic(this.data.currentSubject, this.data.userId, e.detail.id);
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
    // 如果题目数据不为数组、或者数组为空就不用比较了
    if ( !Array.isArray(this.data.topicArr) || this.data.topicArr.length === 0) return;
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
    if (this.data.practiceType === 'test') return;
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
  // 请求顺章练习的题目
  requestOrderTopics() {
    const subject = this.data.currentSubject;
    const userId = this.data.userId;
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
              wx.showLoading({
                title: "重置中..."
              });
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
        // 先判断请求的数据和已有的数据是否都为数组
        const data = Array.isArray(res.data.data) ? res.data.data : [];
        const tempArr = Array.isArray(this.data.topicArr) ? this.data.topicArr : [];
        const newArr = tempArr.concat(data);
        this.setData({
          topicArr: removeDuplicateForObjArr(newArr) // 调用一下去重函数
        })
      })
    })
    // 请求题目数量
    getRightWrongNotDoneTopicNumber(subject, userId).then(res => {
      const data = res.data.data;
      this.setData({
        sumObj: {
          yes: data.rightNumber,
          no: data.wrongNumber,
          all: data.rightNumber + data.wrongNumber + data.notDoneNumber
        }
      })
    })
  },
  // 请求模拟考试的题目
  requestTestTopics() {
    const subject = this.data.currentSubject;
    getTestTopic(subject).then(res => {
      this.setData({
        topicArr: res.data.data,
        'sumObj.all': 50
      })
      // 请求收藏的题目id数组
      this.getCollectionTopicIdsArr();
      // 关闭加载框
      wx.hideLoading();
      // 启动计时器
      this.startTimer();
    })
  },
  // 请求错题
  requestWrongTopics() {
    const subject = this.data.currentSubject;
    const userId = this.data.userId;
    getWrongTopic(subject, userId).then(res => {
      const data = res.data.data;
      // 关闭加载框
      wx.hideLoading();
      // 先判断当前是否错题
      if (data.length === 0) {
        this.myShowModal("错误")
        return;
      }
      this.setData({
        topicArr: data,
        "sumObj.all": data.length
      })
      // 请求收藏的题目id数组
      this.getCollectionTopicIdsArr();
    })
  },
  // 请求收藏
  requestCollectTopics() {
    const subject = this.data.currentSubject;
    const userId = this.data.userId;
    getCollectionTopic(subject, userId).then(res => {
      const data = res.data.data;
      // 关闭加载框
      wx.hideLoading();
      // 先判断当前是否有收藏的题目
      if (data.length === 0) {
        this.myShowModal("收藏")
        return;
      }
      this.setData({
        topicArr: data,
        "sumObj.all": data.length
      })
      // 请求收藏的题目id数组
      this.getCollectionTopicIdsArr();
    })
  },
  // 请求随机练习
  requestRandomTopics() {
    const subject = this.data.currentSubject;
    const userId = this.data.userId;
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
              wx.showLoading({
                title: "重置中..."
              });
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
    // 请求题目数量
    getRightWrongNotDoneTopicNumber(subject, userId).then(res => {
      const data = res.data.data;
      this.setData({
        sumObj: {
          yes: data.rightNumber,
          no: data.wrongNumber,
          all: data.rightNumber + data.wrongNumber + data.notDoneNumber
        }
      })
    })
  },
  // 请求按内容类型分类的题目
  requestContentTypeTopics(type) {
    const subject = this.data.currentSubject;
    getTextOrImageTopic(subject, type).then(res => {
      this.setData({
        topicArr: res.data.data,
        'sumObj.all': res.data.data.length
      })
      // 关闭加载框
      wx.hideLoading();
      // 请求收藏的题目id数组
      this.getCollectionTopicIdsArr();
    })
  },
  // 请求按答案类型分类的题目
  requestAnswerTypeTopics(type) {
    const subject = this.data.currentSubject;
    getRightOrWrongTopic(subject, type).then(res => {
      this.setData({
        topicArr: res.data.data,
        'sumObj.all': res.data.data.length
      })
      // 关闭加载框
      wx.hideLoading();
      // 请求收藏的题目id数组
      this.getCollectionTopicIdsArr();
    })
  },
  // 请求按试题类型分类的题目
  requestTestTypeTopics(type) {
    const subject = this.data.currentSubject;
    getTestTypeTopic(subject, type).then(res => {
      const data = res.data.data;
      // 关闭加载框
      wx.hideLoading();
      // 先判断当前是否有题目
      if (data.length === 0) {
        this.myShowModal()
        return;
      }
      this.setData({
        topicArr: data,
        'sumObj.all': data.length
      })
      // 请求收藏的题目id数组
      this.getCollectionTopicIdsArr();
    })
  },
  // 请求按知识点类型分类的题目
  requestKnowledgeTypeTopics(type) {
    const subject = this.data.currentSubject;
    getKnowledgeTypeTopic(subject, type).then(res => {
      const data = res.data.data;
      // 关闭加载框
      wx.hideLoading();
      // 先判断当前是否有题目
      if (data.length === 0) {
        this.myShowModal()
        return;
      }
      this.setData({
        topicArr: data,
        'sumObj.all': data.length
      })
      // 请求收藏的题目id数组
      this.getCollectionTopicIdsArr();
    })
  },
  // 请求某一章节的题目
  requestChapterTypeTopoics(type) {
    const subject = this.data.currentSubject;
    getChapterTypeTopoics(subject, type).then(res => {
      const data = res.data.data;
      // 关闭加载框
      wx.hideLoading();
      // 先判断当前是否有题目
      if (data.length === 0) {
        this.myShowModal()
        return;
      }
      this.setData({
        topicArr: data,
        'sumObj.all': data.length
      })
      // 请求收藏的题目id数组
      this.getCollectionTopicIdsArr();
    })
  },
  // 如果没有请求到题目的弹窗
  myShowModal(text = "") {
    wx.showModal({
      title: `当前没有任何${text}题目哦！`,
      showCancel: false,
      success() {
        wx.navigateBack({
          delta: 1
        })
      }
    })

  },
  // 根据练习的类型请求题目数据
  setTopicArr() {
    const type = app.globalData.typeValue;
    let title = type; // 用来动态设置页面标题的
    // 根据练习类型确定要请求的题目]
    switch (this.data.practiceType) {
      case 'order':
        title = '顺章练习';
        this.requestOrderTopics();
        break;
      case 'test':
        title = '模拟考试';
        this.requestTestTopics();
        break;
      case 'wrong':
        title = '错题回顾';
        this.requestWrongTopics();
        break;
      case 'collect':
        title = "我的收藏";
        this.requestCollectTopics();
        break;
      case 'random':
        title = "随机练习";
        this.requestRandomTopics();
        break;
      case 'contentType':
        this.requestContentTypeTopics(type);
        break;
      case 'answerType':
        this.requestAnswerTypeTopics(type);
        break;
      case 'testType':
        this.requestTestTypeTopics(type);
        break;
      case 'knowledgeType':
        this.requestKnowledgeTypeTopics(type);
        break;
      case 'chapterType':
        let num = type == 1 ? "一" : type == 2 ? "二" : "三";
        title = `第${num}章节`;
        this.requestChapterTypeTopoics(type);
    }
    // 设置标题为该练习类型
    wx.setNavigationBarTitle({
      title
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
    const results = this.data.sumObj.yes * 2;
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
    const score = this.data.sumObj.yes * 2;
    const timeConsuming = 30 * 60 - this.data.countdownTime;
    addResult(subject, userId, score, timeConsuming);
  },
  // 是否到达最后一题了
  isLastTopic() {
    if (this.data.showIndex >= this.data.topicArr.length - 1) { // 到了最后一题了
      if (this.data.practiceType === 'test') { // 做的模拟考试
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
      // 判断是否请求服务器错误,失败的话弹出按提示并且推出当前页面回到主页
      if(res.data.msg === "失败"){
        wx.showModal({
          title: '请求失败',
          content: '抱歉，服务器开小差了，请重新请求！',
          showCancel: false,
          success: (result) => {
            wx.redirectTo({
              url: '/pages/index/index'
            });
          }
        });
        return;
      }
      this.setData({
        collectionTopicIdsArr: res.data.data
      })
      this.handleCollection();
    })
  },
  // 处理子组件点击收藏按钮事件
  onCollectionClick() {
    // 如果当前题目数组中没有任何题目或者不是一个数组，直接返回
    if (!Array.isArray(this.data.topicArr) || this.data.topicArr.length === 0) return;
    const currentId = this.data.topicArr[this.data.showIndex].id;
    const collectionTopicIdsArr = this.data.collectionTopicIdsArr;
    let newArr;
    // 千万注意currentId是number，而collectiontopicIdsArr中每一项的id为string
    if (collectionTopicIdsArr.includes(currentId.toString())) {
      newArr = collectionTopicIdsArr.filter(id => id != currentId.toString());
    } else {
      newArr = [...collectionTopicIdsArr, currentId.toString()];
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
    const userId = app.globalData.userInfo.userId;
    const subject = app.globalData.currentSubject;
    const practiceType = app.globalData.practiceType;
    const imgBaseUrl = `https://fqiang-1300549778.cos.ap-chongqing.myqcloud.com/jz/topic_${subject}/`;
    this.setData({
      userId,
      currentSubject: subject,
      practiceType,
      imgBaseUrl
    })
    // 显示一个加载框
    wx.showLoading({
      mask: true,
      title: '加载中...'
    })
    // 判断是否获取到了userId，如果还没有获取到就把调用函数写到回调中
    if (app.globalData.userInfo.userId) {
      this.setTopicArr();
    } else {
      app.globalData.loginCallback = userId => {
        this.setData({
          userId
        })
        this.setTopicArr();
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
  onShow: function () { },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () { },

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
      title: '摩托车驾照理论题',
      path: '/pages/index/index'
    }
  }
})