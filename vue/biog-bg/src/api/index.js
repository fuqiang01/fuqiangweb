import Axios from 'axios'
import Urls from './urls'

const MyAxios = Axios.create({
    baseURL: Urls.baseURL
})

export default {
    getComments() {
        return MyAxios.get(Urls.getComments);
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
    }
}