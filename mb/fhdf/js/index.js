function init() {
    nowMessageRoll();
}
init();



function nowMessageRoll() {// 最新消息展示滚动
    var wrapWidth = $('.now-message .info').width();
    var len = $('.now-message .info .item-wrap a').length;
    var left = 0;
    //340是我给每个子元素设置了300的宽和左右各20px的margin
    $('.now-message .info .item-wrap').width( len * 340 );

    setInterval( function () {
        left -= 1;
        left = left <= ( len * 340 * -1 ) ? wrapWidth : left;
        $('.now-message .info .item-wrap')
            .css( 'left', left);
    }, 16)
}
