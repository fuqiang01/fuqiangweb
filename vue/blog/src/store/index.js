import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    appDom: null,
    aboutBgWhite: false,
  },
  mutations: {
    setAppDom(state,dom){
      state.appDom = dom;
    },
    setAboutBgWhite(state,boolean){
      state.aboutBgWhite = boolean;
    }
  },
  actions: {
    
  },
  modules: {
  }
})
