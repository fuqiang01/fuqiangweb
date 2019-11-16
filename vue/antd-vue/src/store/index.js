import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    siderCollapsed: false
  },
  mutations: {
    setSiderCollapsed ( state, boolean) {
      state.siderCollapsed = boolean;
    }
  },
  actions: {
  },
  modules: {
  }
})
