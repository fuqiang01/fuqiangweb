
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


$('audio').each(function (index, ele) {
    
    var url = $(this).data('url');

    var $RenderDom = $(this)
        .parents('.info')
        .find('.right')
        .find('ul');
     // AudioLrc( 歌词地址, 歌曲audio原生dom, 要把歌词渲染到哪, 歌词延迟时间(可不传))
    this.myAudioLrc = new AudioLrc(url, ele, $RenderDom);
})

// 音频播放
$('.audio-play-btn').on('click', function () {
    var audio = $(this).siblings('audio')[0];
    var audioLrc = audio.myAudioLrc;

    if (audio.paused) {
        audio.play();
        $(this).css('backgroundImage', 'url("../img/play.png")');
        // audioLrc.rollLrc();
    } else {
        audio.pause();
        $(this).css('backgroundImage', 'url("../img/stop.png")');
        // audioLrc.noRollLrc();
    }
})

