const fs = require('fs'); // 导入fs模块
const globalConfig = require('./config'); // 导入配置文件对象
let pathMap = new Map(); // 创建要导出的map集合,用来放( 地址, 方法 )
// 获取web层内的所有文件,放入到一个数组中
let files = fs.readdirSync( globalConfig.web_path );

files.forEach( ele => {
    let temp = require('./' + globalConfig.web_path + '/' + ele );
    if ( temp.path ) { // 如果对应的方法存在,就放入到map集合中
        for ( let [k, v] of temp.path ) {
            // 一个key值只能出现一次,否则报错
            if ( pathMap.get( k ) == null ) {
                pathMap.set( k, v)
            } else {
                throw new Error("url path异常,url:" + k);
            }
        }
    }
})

module.exports = pathMap; // 导出map集合