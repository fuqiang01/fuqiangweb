var oImg = document.getElementById('img');
loadImg( oImg, 'https://w.wallhaven.cc/full/kw/wallhaven-kwlxy6.jpg');

function loadImg( img, src) {
    var image = new Image();
    img.src = "./img/home_bg.jpg"
    image.src = src;
    image.onload = function () {
        img.src = src;
    }
}




// function MyImage(_id) {
//     var oImg = document.createElement('img');
//     this.setSrc = function (_src) {
//         oImg.src = _src;
//     }
//     document.getElementById(_id).appendChild(oImg);
// }

// var ProxyImage = (function () {
//     var oImg = new Image();
//     var oMyImage = new MyImage('demo');
//     oImg.onload = function () {
//         oMyImage.setSrc(oImg.src);
//     }
//     return function (occupySrc, src) {
//         oImg.src = src;
//         oMyImage.setSrc(occupySrc);
//     }
// })();


// ProxyImage('./img/home_bg.jpg', 'https://w.wallhaven.cc/full/kw/wallhaven-kwlxy6.jpg');