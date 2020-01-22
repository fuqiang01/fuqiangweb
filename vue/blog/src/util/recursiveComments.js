export default function recursiveComments(data, callBack){
        data.forEach(ele => {
            callBack(ele);
            if (ele.children && ele.children.length > 0) {
                recursiveComments(ele.children, callBack);
            }
        });
}