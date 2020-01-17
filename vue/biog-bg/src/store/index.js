import Vue from 'vue'
import Vuex from 'vuex'
import Api from "@/api";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        sliderCollapsed: false,
        fromData: { // 新增文章对应数据
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
        showFromItemObj: {}, // 要显示的新增文章框（页面会自动处理）
        articleList: [], // 存放文章列表
        articleFilterConditions: { // 存储文章筛选条件
            origin: 'originAll',
            type: 'typeAll',
            info: ''
        },
        commentsData:[], // 存储评论数组
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
        },
        setCommentsDate(state, arr) {
            state.commentsData = arr;
        }
    },
    actions: {
        queryArticleList({ commit, state }) {
            Api.getContentList(state.articleFilterConditions)
                .then(res => {
                    commit('setArticleList', res.data.data)
                });
        },
        queryComments({ commit }){
            Api.getNotAuditComment()
                .then( res => {
                    commit('setCommentsDate', res.data)
                })
        }
    },
    modules: {
    }
})
