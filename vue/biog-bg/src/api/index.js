import Axios from 'axios'
import Urls from './urls'

const MyAxios = Axios.create({
    baseURL: Urls.baseURL
})

export default {
    getNotAuditComment() {
        return MyAxios.get(Urls.getNotAuditComment);
    },
    getWordCloud() {
        return MyAxios.get(Urls.getWordCloud);
    },
    getContentList(data) {
        return MyAxios.get(Urls.getContentList, {
            params: data
        });
    },
    addBlog(formData) {
        return MyAxios.post(Urls.addBlog, formData)
    },
    getLogs(){
        return MyAxios.get(Urls.getLogs)
    },
    getTagViews(num){
        return MyAxios.get(Urls.getTagViews,{
            params: {
                number: num
            }
        })
    },
    getBlogTypeViews(){
        return MyAxios.get(Urls.getBlogTypeViews)
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
    commentAudit(id){
        return MyAxios.get(Urls.commentAudit,{
            params: {
                id
            }
        })
    },
    deleteComment(id){
        return MyAxios.get(Urls.deleteComment,{
            params: {
                id
            }
        })
    },
    setFileToCos(formData){
        return MyAxios.post(Urls.setFileToCos, formData);
    },
    addComment(data){
        return MyAxios.post(Urls.addComment, data)
    }
}