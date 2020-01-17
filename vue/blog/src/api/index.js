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
    getInfoById(){
        return MyAxios.get(Urls.getInfoById);
    }
}