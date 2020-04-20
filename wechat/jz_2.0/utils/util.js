// 根据数组每一项对象的id值来数组去重
export function removeDuplicateForObjArr(arr) {
  let obj = {}
  const newArr = arr.filter(ele => {
    if ( obj[ele.id] ) return false;
    obj[ele.id] = 'a';
    return true;
  });
  return newArr;
}
