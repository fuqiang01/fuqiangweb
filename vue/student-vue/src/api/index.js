import Urls from "./urls";
import Axios from "axios";

const appkey = "206234924_1548123333876";
const myAjax = Axios.create( {
    baseURL: Urls.baseURL,
    method: 'get',
    params: {
        appkey
    }
});
const size = 5;

export default {
    
    size,

    findAll() {
        return myAjax.get(Urls.findAll);
    },
    findByPage(page = 1){
        return myAjax.get(Urls.findByPage,{
            params: {
                page,
                size
            }
        });
    },
    addStudent(data) {
        return myAjax.get(Urls.addStudent,{
            params: {
                ...data
            }
        });
    },
    delBySno( sNo) {
        return myAjax.get(Urls.delBySno, {
            params: {
                sNo
            }
        })
    },
    updateStudent (data){
        return myAjax.get(Urls.updateStudent,{
            params: {
                ...data
            }
        });
    },
    searchStudent( text, page = 1){
        return myAjax.get(Urls.searchStudent,{
            params: {
                sex: -1,
                search: text,
                page,
                size
            }
        });
    }
}