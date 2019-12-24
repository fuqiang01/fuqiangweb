import Axios from 'axios'
import Urls from './urls'

const MyAxios = Axios.create({
    baseURL: Urls.baseURL,
    method: 'get'
})

export default{
    getComments(){
        return MyAxios.get(Urls.getComments);
    },
    getContentList(){
        return MyAxios.get(Urls.getContentList);
    },
    getInfoById(){
        return MyAxios.get(Urls.getInfoById);
    }
}