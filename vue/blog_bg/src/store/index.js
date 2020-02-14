import Vue from 'vue'
import Vuex from 'vuex'
import Api from "@/api";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        rootLoading: false,
        sliderCollapsed: false,
        fromData: { // 文章数据
            id: '',
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
        articleSum: 0,
        articleFilterConditions: { // 存储文章筛选条件
            origin: 'originAll',
            type: 'typeAll',
            info: '',
            pageSize: 10000, // 每页显示的数量，写多点直接得到所有的文章，以后想优化再改
            pageNum: 1 // 当前请求的页码
        },
        commentsData:[], // 存储评论数组
        userInfo: {}, // 用户信息
        hotTags: [], // 热门标签
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
        setArticleSum(state, sum){
            state.articleSum = sum;
        },
        setArticleFilterConditions(state, obj){
            state.articleFilterConditions = {
                ...state.articleFilterConditions,
                ...obj
            }
        },
        setCommentsDate(state, arr) {
            state.commentsData = arr;
        },
        setUserInfo(state, obj){
            state.userInfo = {
                ...state.userInfo,
                ...obj
            }
        },
        setHotTags(state , arr) {
            state.hotTags = arr
        },
        setRootLoading(state, boolean){
            state.rootLoading = boolean
        }
    },
    actions: {
        queryArticleList({ commit, state }) { // 获取文章列表
            Api.getContentList(state.articleFilterConditions)
                .then(res => {
                    commit('setArticleList', res.data.data)
                    commit('setArticleSum', res.data.sum)
                });
        },
        queryComments({ commit }){ // 获取未审核的评论
            Api.getNotAuditComment()
                .then( res => {
                    commit('setCommentsDate', res.data)
                })
        },
        queryUserInfo({commit, state}){
            Api.getUserInfoByUser(state.userInfo.user)
                .then(res => {
                   commit('setUserInfo', res.data);
                })
        },
        // 获取热门标签
        queryHotTags({commit}){
            const sum = 100; // 要获取的数量
            Api.getHotTags(sum)
                .then(res => {
                    const data = res.data.map(ele => ele.name)
                    commit('setHotTags', data)
                })
        }
    },
    modules: {
    }
})
