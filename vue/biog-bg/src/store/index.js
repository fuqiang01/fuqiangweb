import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sliderCollapsed: false,
    fromData: {
      title: '',
      songName: '',
      singer: '',
      buzz: '',
      type: '',
      weight: 1,
      imgFileData: '',
      musicVideoData:'',
      origin: '',
      originUrl: '',
      tags: '',
      richText: ''
    },
    showFromItemObj: {}
  },
  getters: {
  },
  mutations: {
    setSliderCollapsed(state, bool){
      state.sliderCollapsed = bool;
    },
    setFromData(state, obj){
      state.fromData = {
        ...state.fromData,
        ...obj
      }
    },
    setShowFromItemObj(state, obj){
      state.showFromItemObj = {
        ...state.showFromItemObj,
        ...obj
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
