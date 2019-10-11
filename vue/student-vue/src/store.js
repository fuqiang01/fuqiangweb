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
  },
  mutations: {
    setStuList ( state, payload) {
      state.stuList = payload;
    },
    setModifyingStu( state, data){
      state.modifyingStu = data;
    },
    setShowFrom( state, bool){
      state.showFrom = bool;
    },
    setCont( state, cont) {
      state.cont = cont;
    }
  },
  actions: {
    getStuList({commit}){
      console.log(1111)
      api.findByPage()
            .then( res => {
              commit( 'setCont', res.data.data.cont);
              commit( 'setStuList', res.data.data.findByPage);
            })
            .catch( err => {
                console.log(err)
            })
    }
  },
});
