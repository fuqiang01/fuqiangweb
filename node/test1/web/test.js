const studentService = require('../service/studentService');
let path = new Map(); // 创建要导出的map集合
const url = require('url');

function getData( request, reaponse) { // 获取动态数据 /getData 的方法
    reaponse.writeHead(200)
    reaponse.write('<html><body>getData</body></html>');
}
path.set( "/getData", getData ); // 将这个方法存入到map集合内

function login( request, response) {

    request.on('data', function (data) {
        let dataObj = JSON.parse( data.toString() );
        studentService.queryStudentByStuNum( dataObj.stuNum, function ( result ) {
            let res = '';
            if ( result == null || result.length === 0 ) {
                res = 'fail';
            } else {
                let password = result[0].password;
                if ( dataObj.password == password ) {
                    res = 'ok';
                    response.writeHead(200,{"Set-Cookie": `id=${result[0].stu_num}`});
                } else {
                    res = 'fail';
                }
            };
            response.write(res);
            response.end();
        });
    });
}
path.set("/login", login)

module.exports.path = path; // 导出这个map集合

