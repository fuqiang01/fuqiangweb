import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    contentList: [
      {
        id: 1,
        type: 'plainText',
        title: '标题文本',
        describe: '我们在小程序的项目开发过程中，也不可避免的需要使用到字体图标，毕竟小程序那2M代码包大小的限制，还是挺让人隐隐作痛的。相对于传统web项目中使用iconfont字体图标，微信小程序中使用iconfont字体图标还是有一定的区别。就让我们开始如何在微信小程序中使用iconfont字体图标吧。',
        mainText: '正文文本,这是一个富文本',
        date: '2019-12-13',
        like: 999,
        messageLen: 10,
        score: 5,
        keywords: [{text: '关键词一',url: '#'},{text: '关键词二',url: '#'}],
        origin: {
          text: '某一篇文章',
          url: 'https://www.baidu.com'
        }
      },
      {
        id: 2,
        type: 'smallImg',
        title: '标题文本',
        imgSrc: 'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2462146637,4274174245&fm=26&gp=0.jpg',
        describe: '我们在小程序的项目开发过程中，也不可避免的需要使用到字体图标，毕竟小程序那2M代码包大小的限制，还是挺让人隐隐作痛的。相对于传统web项目中使用iconfont字体图标，微信小程序中使用iconfont字体图标还是有一定的区别。就让我们开始如何在微信小程序中使用iconfont字体图标吧。',
        mainText: '正文文本，这是一个富文本',
        date: '2019-12-13',
        like: 999,
        messageLen: 10,
        score: 5,
        keywords: [{text: '关键词一',url: '#'},{text: '关键词二',url: '#'}],
        origin: {
          text: '某一篇文章',
          url: 'https://www.baidu.com'
        }
      }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
