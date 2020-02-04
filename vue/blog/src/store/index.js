import Vue from 'vue'
import Vuex from 'vuex'
import Api from "@/api";
import recursiveComments from '@/util/recursiveComments'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        appDom: null,
        aboutBgWhite: false,
        distanceFromBottom: null,
        distanceNum: 100,
        commentsData: [],
        isLoading: {
            contentList: false,
            context: true
        }
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
        setCommentsDate(state, arr) {
            state.commentsData = arr;
        },
        setIsLoading(state, obj){
            state.isLoading = {
                ...state.isLoading,
                ...obj
            }
        }
    },
    actions: {
        queryComments( {commit}, id = 0){
            Api.getComments(id).then(res => {
                const data = res.data;
                recursiveComments(data, item => { // 遍历每一条评论
                    item.isLike = false; // 重要，如果对象内部的数据没有默认值的话，修改的时候是不会自动刷新的
                    item.showCommentBox = false;
                })
                commit('setCommentsDate', data)
            });
        }
    }
})
