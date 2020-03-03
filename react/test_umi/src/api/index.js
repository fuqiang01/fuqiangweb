import Axios from 'axios'
import Urls from './urls'

const MyAxios = Axios.create({
    baseURL: Urls.baseURL,
    method: 'get'
})

export default{
    getComments(blogId){
        // blogId 为0代表实在主页评论的
        return MyAxios.get(Urls.getComments, {
            params: {
                blogId
            }
        }).then(res => res.data);
    },
    getContentList(data){
        return MyAxios.get(Urls.getContentList, {
            params: data
        }).then( res => res.data);
    },
    getBlogById(id){
        return MyAxios.get(Urls.getBlogById, {
            params: {id}
        }).then(res => res.data);
    },
    giveLikeByComment(id){
        return MyAxios.get(Urls.giveLikeByComment, {
            params: {
                id
            }
        })
    },
    cancelLikeByComment(id){
        return MyAxios.get(Urls.cancelLikeByComment,{
            params: {
                id
            }
        })
    },
    addComment(data){
        return MyAxios.post(Urls.addComment, data).then(res => res.data);
    },
    setFileToCos(formData){
        return MyAxios.post(Urls.setFileToCos, formData);
    },
    cancelLikeByBlog(id){
        return MyAxios.get(Urls.cancelLikeByBlog, {
            params: {
                id
            }
        })
    },
    giveLikeByBlog(id){
        return MyAxios.get(Urls.giveLikeByBlog, {
            params: {
                id
            }
        }).then(res => res.data)
    },
    addScore(data){
        return MyAxios.get(Urls.addScore, {
            params: data
        })
    },
    addBrowseNum(blogId){
        return MyAxios.get(Urls.addBrowseNum, {
            params: { blogId }
        })
    }
}