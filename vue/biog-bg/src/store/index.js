import Vue from 'vue'
import Vuex from 'vuex'
import Api from "@/api";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sliderCollapsed: false,
    fromData: {
      title: '',
      songName: '',
      singer: '',
      buzz: '',
      styleType: 'plainText',
      blogType: 'knowledge',
      weight: 1,
      imgFileData: '',
      musicVideoData: '',
      origin: '',
      originUrl: '',
      tags: '',
      richText: ''
    },
    showFromItemObj: {},
    articleList: [],
    articleFilterConditions: {
      origin: 'originAll',
      type: 'typeAll',
      info: ''
    }
  },
  getters: {
  },
  mutations: {
    setSliderCollapsed(state, bool) {
      state.sliderCollapsed = bool;
    },
    setFromData(state, obj) {
      state.fromData = {
        ...state.fromData,
        ...obj
      }
    },
    setShowFromItemObj(state, obj) {
      state.showFromItemObj = {
        ...state.showFromItemObj,
        ...obj
      }
    },
    setArticleList(state, arr) {
      state.articleList = arr
    },
    setArticleFilterConditions(state, obj){
      state.articleFilterConditions = {
        ...state.articleFilterConditions,
        ...obj
      }
    }
  },
  actions: {
    queryArticleList({ commit, state }) {
      Api.getContentList(state.articleFilterConditions).then(res => {
        console.log(res.data)
        commit('setArticleList', res.data.data)
      });
    }
  },
  modules: {
  }
})
