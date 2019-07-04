var date = new Date();
var year = date.getFullYear();
var month = date.getMonth();
var day = date.getDate();
var week = date.getDay();
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();

randerData();
//将 ( 0, 100)的整数转换成中文大写的
function getChineseNumbers(num) {

    num = parseInt(num);
    var arr = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十"];

    if (num <= 0 || num >= 100) {
        return num;
    } else if (num <= 10) {
        return arr[num - 1];
    }

    var ten = parseInt(num / 10);
    var bits = parseInt(num % 10);

    if (ten === 1) {
        return ("十" + arr[bits - 1])
    }

    if (bits === 0) {
        return (arr[ten - 1] + "十");
    } else {
        return (arr[ten - 1] + "十" + arr[bits - 1])
    }

}


function randerData() {

    var arr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    $('<span class="year">二零一九年</span>').addClass('active').appendTo('.container');
    getDom(12, month + 1, '', '月', 100, "month");
    getDom(arr[month], day, '', '号', 180, "day");
    getDom(7, week, '星期', '', 260, "week");
    getDom(24, hours, '', '点', 340, "hours");
    getDom(60, minutes, '', '分', 420, "minutes");
    getDom(60, seconds, '', '秒', 500, "seconds");
}

function getDom(allNum, nowNum, before, after, x, className) {

    var angle = 360 / allNum;

    for (var i = 1; i <= allNum; i++) {
        var $Dom = $("<span class=" + className + ">" + before + getChineseNumbers(i) + after + "</span>")
            .css("transform", "rotateZ(" + ( angle * ( i - nowNum ) ) + "deg) translateX(" + x + "px)")
        if ( i - nowNum == 0 ) { 
            $Dom.addClass('active');
        }
        $Dom.appendTo('.container');
    }

}

function rotating () {
    $('.seconds.active').removeClass('active');
    $('.seconds').each( function ( index, ele) {
        $(ele).css("transform", "rotateZ(" + ( 6 * ( index - seconds ) ) + "deg) translateX(500px)");
    })
    $('.seconds').eq(seconds % 60).addClass('active');
    if (seconds % 60 == 0) {
        $('.minutes.active').removeClass('active');
        $('.minutes').each( function ( index, ele) {
            $(ele).css("transform", "rotateZ(" + ( 6 * ( index - minutes ) ) + "deg) translateX(400px)")
        })
        $('.minutes').eq(minutes).addClass('active');
        minutes++;
    }
}

setInterval(() => {
    rotating ();
    seconds++;
}, 1000);
