const http = require('http'); //导入http模块
const url = require('url'); // 导入url模块
const fs = require('fs'); // 导入fs模块
const globalConfig = require('./config.js'); //导入配置对象
const loader = require('./loader'); // 导入动态文件的map集合
const loginFilter = require('./filter/loginFilter');
//创建服务,request参数是请求的相关信息集合对象, response是连接的客户端对象
http.createServer( function (request, response) {
    const pathName = url.parse(request.url).pathname; // 请求路径
    let isStatic = isStaticRequest(pathName); // 是否请求静态地址

    if ( !loginFilter( request, response) ) {
        return;
    }
    if( isStatic ) { //加载静态文件
        try {
            let data = fs.readFileSync( globalConfig.page_path + pathName );
            response.writeHead(200);
            response.write( data ); // 返回页面
            response.end(); //断开连接
        }catch (e){ // 找不到资源
            response.writeHead(404);
            response.write( '<html><body>404 NotFound</body></html>' );
            response.end(); //断开连接
        }

    } else { // 加载动态文件
        if ( loader.get( pathName ) ) {
            try {
                loader.get( pathName )(request, response); //动态方法执行
            } catch (e) { // 服务器执行出错
                console.log(e);
                response.writeHead(500);
                response.write("<html><body><h1>500 BadServer</h1></body></html>");
                response.end();// 断开连接
            }
        } else { // 找不到文件
            response.writeHead(404);
            response.write("<html><body><h1>404 NotFound</h1></body></html>");
            response.end();// 断开连接
        }
    }
}).listen( globalConfig.port ) // 给创建的服务绑定端口号
function isStaticRequest(pathName) {//判断是否加载静态资源,判断依据是请求路径是否以配置的指定格式结尾
    let lock = false;
    globalConfig.static_file_type.forEach( ele => {
        if( pathName.indexOf( ele ) == pathName.length - ele.length ) {
            lock = true;
        }
    })
    return lock;
}
fs.appendFile('./log/service.log', '服务已开启\n', function() {
    console.log('添加完成')
})