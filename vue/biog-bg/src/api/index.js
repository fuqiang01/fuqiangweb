import Axios from 'axios'
import Urls from './urls'

const MyAxios = Axios.create({
    baseURL: Urls.baseURL
})

export default{
    getComments(){
        return MyAxios.get(Urls.getComments);
    },
    getWordCloud(){
        return MyAxios.get(Urls.getWordCloud);
    },
    getContentList(){
        return MyAxios.get(Urls.getContentList);
    }
}