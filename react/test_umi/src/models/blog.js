import Api from '../api'
export default{
    state: {},
    reducers: {
        setBlog(state, {payload}){
            return payload;
        },
        giveLikeOrCancelLike(state, {payload}){
            if(state.isLike){
                Api.cancelLikeByBlog(state.id); // 取消点赞
                state.likeNumber = state.likeNumber - 1;
            }else{
                Api.giveLikeByBlog(state.id); // 点赞
                state.likeNumber = state.likeNumber + 1;
            }
            state.isLike = !state.isLike;
            return {...state};
        },
        addComment(state, {payload}){
            state.messageNumber = state.messageNumber + 1;
            return {...state};
        }
    },
    effects: {
        *queryBlog({payload}, {call, put}){
            const data = yield call(Api.getBlogById, payload);
            yield put({
                type: 'setBlog',
                payload: {
                    ...data,
                    isLike: false
                }
            })
        }
    }
}