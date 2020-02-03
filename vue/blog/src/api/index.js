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
        });
    },
    getContentList(data){
        return MyAxios.get(Urls.getContentList, {
            params: data
        });
    },
    getBlogById(id){
        return MyAxios.get(Urls.getBlogById, {
            params: {id}
        });
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
        return MyAxios.post(Urls.addComment, data)
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
        })
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