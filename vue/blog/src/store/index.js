import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    appDom: null,
    aboutBgWhite: false,
    distanceFromBottom: null,
    distanceNum: 100
  },
  getters:{
    isSold(state){
      if ( state.distanceFromBottom === null) return false;
      return state.distanceFromBottom - state.distanceNum <= 0
    }
  },
  mutations: {
    setAppDom(state, dom){
      state.appDom = dom;
    },
    setAboutBgWhite(state, boolean){
      state.aboutBgWhite = boolean;
    },
    setDistanceFromBottom(state, number){
      state.distanceFromBottom = number;
    },
  },
  actions: {
    
  },
  modules: {
    
  }
})
