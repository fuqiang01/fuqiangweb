import Axios from 'axios'
import Urls from './urls'

const MyAxios = Axios.create({
    baseURL: Urls.baseURL,
    method: 'get'
})

export default{
    getComments(blogId: number){
        // blogId 为0代表实在主页评论的
        return MyAxios.get(Urls.getComments, {
            params: {
                blogId
            }
        });
    },
    getContentList(data: any){
        return MyAxios.get(Urls.getContentList, {
            params: data
        });
    },
    getBlogById(id: number){
        return MyAxios.get(Urls.getBlogById, {
            params: {id}
        });
    },
    giveLikeByComment(id:number){
        return MyAxios.get(Urls.giveLikeByComment, {
            params: {
                id
            }
        })
    },
    cancelLikeByComment(id: number){
        return MyAxios.get(Urls.cancelLikeByComment,{
            params: {
                id
            }
        })
    },
    addComment(data: any){
        return MyAxios.post(Urls.addComment, data)
    },
    setFileToCos(formData: any){
        return MyAxios.post(Urls.setFileToCos, formData);
    },
    cancelLikeByBlog(id: number){
        return MyAxios.get(Urls.cancelLikeByBlog, {
            params: {
                id
            }
        })
    },
    giveLikeByBlog(id:number){
        return MyAxios.get(Urls.giveLikeByBlog, {
            params: {
                id
            }
        })
    },
    addScore(data: any){
        return MyAxios.get(Urls.addScore, {
            params: data
        })
    },
    addBrowseNum(blogId: number){
        return MyAxios.get(Urls.addBrowseNum, {
            params: { blogId }
        })
    }
}