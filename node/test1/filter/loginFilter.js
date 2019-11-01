const url = require('url');


function loginFilter( request, response ) {

    var pathName = url.parse(request.url).pathname;
    if ( pathName == '/login.html' || pathName == '/login' ) {
        return true;
    }
    if ( request.headers.cookie ) {
        let arr = request.headers.cookie.split(';');
        for ( var i = 0; i < arr.length; i++) {
            if ( arr[i].split('=')[0].trim() == 'id' ) {
                return true;
            }
        }
    }
    response.writeHead(302, {"location": "/login.html"});
    response.end();
    return false;
}


module.exports = loginFilter;