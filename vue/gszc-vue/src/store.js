import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    phoneNum: '17625652363',
    wxCodeSrc: 'https://demo.cwgszc.com/cwgszc/img/wx_code.jpg',
    serviceCon: [
      {
        id: 11,
        title: '注册公司',
        innerHtml:` <p>
                        <img src="https://www.cwgszc.com/upload/image/20190812/1565572860386615.jpg" alt="">
                    </p>
                    <p>
                        <img src="https://www.cwgszc.com/upload/image/20190812/1565572860284288.jpg" alt="">
                    </p>
                    <p>
                        <img src="https://www.cwgszc.com/upload/image/20190812/1565572860706021.jpg" alt="">
                    </p>
                    <p>
                        <img src="https://www.cwgszc.com/upload/image/20190812/1565572860655060.jpg" alt="">
                    </p>`
      },
      {
        id: 12,
        title: '代理记账',
        innerHtml: `<h3>代理记账</h3>`
      },
      {
        id: 13,
        title: '资质代办',
        innerHtml: `<h3>资质代办</h3>`
      }
    ],
    serviceConItem: {}
  },
  mutations: {
    setServiceConItem(state, con) {
      state.serviceConItem = con
    }
  },
  actions: {

  }
})
