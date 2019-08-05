// banner区域数字
var yonghu = 0;
var qiye = 0;
var zhuanli = 0;

var temp1 = setInterval( function () {
    $('.yonghu').text(yonghu)
    if ( yonghu >= 396902 ) {
        clearInterval(temp1)
        $('.yonghu').text(396902)
    }
    yonghu+= 1000;
},1)

var temp2 = setInterval( function () {
    $('.qiye').text(qiye)
    if ( qiye >= 2889 ) {
        clearInterval(temp2)
        $('.qiye').text(2889)
    }
    qiye+= 10;
},1)

var temp3 = setInterval( function () {
    $('.zhuanli').text(zhuanli)
    if ( yonghu >= 374000 ) {
        clearInterval(temp3)
        $('.zhuanli').text(374000)
    }
    zhuanli += 1000;
},1)