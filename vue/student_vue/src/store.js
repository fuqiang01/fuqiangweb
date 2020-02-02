import Vue from 'vue';
import Vuex from 'vuex';
import api from './api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    stuList: [],
    modifyingStu: {},
    showFrom: false,
    cont: 0,
    searchText: '',
    nowPage: 1, 
  },
  mutations: {
    setStuList(state, payload) {
      state.stuList = payload;
    },
    setModifyingStu(state, data) {
      state.modifyingStu = data;
    },
    setShowFrom(state, bool) {
      state.showFrom = bool;
    },
    setCont(state, cont) {
      state.cont = cont;
    },
    setSearchText(state, text) {
      state.searchText = text;
    },
    setNowPage(state, page){
      state.nowPage = page;
    }
  },
  actions: {
    getStuList({ commit, state }) {
      if (state.searchText) {
        api.searchStudent(state.searchText, state.nowPage)
          .then(res => {
            commit('setCont', res.data.data.cont);
            commit('setStuList', res.data.data.searchList);
          })
          .catch(err => {
            console.log(err)
          })
      } else {
        api.findByPage(state.nowPage)
          .then(res => {
            commit('setCont', res.data.data.cont);
            commit('setStuList', res.data.data.findByPage);
          })
          .catch(err => {
            console.log(err)
          })
      }
    }
  },
});
