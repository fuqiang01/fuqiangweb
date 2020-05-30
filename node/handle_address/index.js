// import {provinceList as dataList} from './data'
const dataList = require('./data');
const fs = require('fs');

const newData = [];

dataList.forEach(data => {
    console.log(`正在处理：${data.name}`)
    const dataObj = {
        label: data.name,
        children: []
    }
    newData.push(dataObj);
    if(!data.city_list) return;
    data.city_list.forEach( city => {
        let cityObj = {
            label: city.name,
            children: []
        }
        if(city.name === '市辖区'){
            cityObj = dataObj;
        } else{
            dataObj.children.push(cityObj)
        }
        if(!city.area_list) return;
        city.area_list.forEach( area => {
            const areaObj = {
                label: area.name
            }
            cityObj.children.push(areaObj)
        })
    })
})

console.log('正在写入')
fs.writeFileSync('./address.json', JSON.stringify(newData));
console.log('写入完成')