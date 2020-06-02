$('.box-btn').click(function () {
    var text = $('.input').val();
    if( text == ''){
        return
    }
    $('.input').val('');
    renderYh(text)
})

//客服渲染
function renderKf(text) {
    var $Text = $('<p class="text" />').text( text);
    var $Img = $('<img />').attr('src','./img/header_img.jpg');
    renderDate();
    $('<div class="kf" />')
        .dataa('time', new Date().getTime() )
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
    console.log($('.content div:last'))
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