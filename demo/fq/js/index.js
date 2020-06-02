
// 多图
$('.show-click-view').click(function () {
    $(this)
        .parents('.item')
        .find('.click-view')
        .fadeIn();
})

$('.click-view').click(function (e) {
    if (e.target === this) {
        $(this).fadeOut();
    }
})

//音频文件初始化
$('audio').each(function (index, ele) {
    
    const url = $(this).data('url');

    const $RenderDom = $(this)
        .parents('.info')
        .find('.right')
        .find('ul');
     // AudioLrc( 歌词地址, 歌曲audio原生dom, 要把歌词渲染到哪, 歌词延迟时间(可不传))
    new AudioLrc(url, ele, $RenderDom);
})

// 音频播放
$('.audio-play-btn').on('click', function () {
    const audio = $(this).siblings('audio')[0];

    if (audio.paused) {
        audio.play();
        $(this).css('backgroundImage', 'url("../img/play.png")');
    } else {
        audio.pause();
        $(this).css('backgroundImage', 'url("../img/stop.png")');
    }
})

