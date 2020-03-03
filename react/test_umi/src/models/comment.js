import Api from '../api'
export default{
    state: [],
    reducers: {
        setComments(state, {payload}){
            return payload;
        },
    },
    effects: {
        *queryCommentsById({payload}, {call, put}){
            const data = yield call(Api.getComments, payload)
            yield put({
                type: 'setComments',
                payload: data
            })
        },
        *addComment({payload}, {call, put}){
            yield call(Api.addComment, payload)
            yield put({
                type: 'queryCommentsById',
                payload: payload.blogId
            })
        }
    }
}
