$('.box-btn').click(function () {
    var text = $('.input').val();
    if( text == ''){
        return
    }
    $('.input').val('');
    renderYh(text);
    requestData( text );
})

//客服渲染
function renderKf(text) {
    var $Text = $('<p class="text" />').text( text);
    var $Img = $('<img />').attr('src','./img/header_img.jpg');
    renderDate();
    $('<div class="kf" />')
        .data('time', new Date().getTime() )
        .append($Img)
        .append($Text)
        .appendTo('.content')
}

//用户渲染
function renderYh(text) {
    var $Text = $('<p class="text" />').text( text);
    var $Img = $('<img />').attr('src','./img/header_img.jpg');
    renderDate();
    $('<div class="yh" />')
        .data('time', new Date().getTime() )
        .append($Text)
        .append($Img)
        .appendTo('.content')

}

// 时间渲染
function renderDate(){
    var nextTime = $('.content div:last').data('time');
    var nowTime = new Date().getTime();
    if ( nowTime - nextTime < 60000 ){
        return false;
    }
    var h = new Date().getUTCHours();
    var m = new Date().getUTCMinutes();
    $('<p class="date">\
        <span class="date">今天</span>\
        <span class="time">'+ h + ':' + m +'</span>\
      </p>').appendTo('.content')
}

//发送请求
function requestData( text ){
    $.ajax( {
        url: '/chat',
        type: 'get',
        data: {
            text
        },
        success (res) {
            console.log(res);
            renderKf(res);
        },
        error( err) {
            console.log(err);
        }
    })
}