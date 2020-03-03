import Api from '../api'
export default{
    state: [],
    reducers: {
        setBlogList(state, {payload}){
            return state.concat(payload);
        }
    },
    effects: {
        *queryBlogList({payload}, {call, put}){
            const data = yield call(Api.getContentList, payload);
            yield put({
                type: 'setBlogList',
                payload: data
            })
        }
    }
}