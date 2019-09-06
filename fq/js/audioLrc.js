function AudioLrc(lrcUrl, audio, $RenderDom, delay) {
    this.lrcUrl = lrcUrl;//歌词地址
    this.audio = audio;//歌词对应的音频audio原生dom
    this.$RenderDom = $RenderDom;//歌词要渲染到的容器
    this.delay = delay || 0;//歌词延迟时间
    this.lrcArr = [];
    this.lrcTimeArr = [];
    this.lrcContentArr = [];
    this.renderDomTop = $RenderDom.position().top;
    this.top = this.renderDomTop;
    this.lineNum = 0;
    this.temp = null;
    this.init();
}
AudioLrc.prototype.init = function () {
    const self = this;
    $.ajax({
        url: this.lrcUrl,
        success: function (res) {
            self.parsingLrc(res); //获取歌词文件,并处理好保存
            self.renderLrc();//渲染歌词到页面
        }
    })
    this.audio.onplay = function () {
        self.rollLrc();//歌词滚动
    }
    this.audio.onpause = function () {
        self.noRollLrc();//歌词停止滚动
    }
    this.audio.onended = function () {
        self.noRollLrc();//歌词停止滚动
        $(this)//改变播放按钮图片
            .siblings('.audio-play-btn')
            .css('backgroundImage', 'url("../img/stop.png")');
        self.$RenderDom.css('top', self.renderDomTop);//歌词滚动到最初始的位置
    }
}
AudioLrc.prototype.parsingLrc = function (lrc) {
    const self = this;
    const lrcLineArr = lrc.split('\n');//把每一行都分割开成数组
    const reg = /\[\d*:\d*\.\d*\]/g;//用来匹配时间的正则
    lrcLineArr.forEach(ele => {
        const timeArr = ele.match(reg);//当前行时间数组
        const content = ele.replace(reg, '');//当前行歌词
        if (timeArr) {
            timeArr.forEach(ele => {
                const min = ele.match(/\[\d*/)[0].slice(1) * 60;
                const sec = ele.match(/:\d*\.\d*/)[0].slice(1);
                const time = parseInt(min) + parseInt(sec);
                self.lrcArr.push([time, content]);//将时间和对应歌词存在二维数组中
            })
        }
    });
    this.lrcArr.sort(function (a, b) {//根据时间将二维数组排序
        return a[0] - b[0];
    })
    this.lrcArr.forEach(ele => {//将事件数组和内容数组分开
        this.lrcTimeArr.push(ele[0]);
        this.lrcContentArr.push(ele[1]);
    })
}
AudioLrc.prototype.renderLrc = function () { //歌词渲染函数
    this.lrcContentArr.forEach(ele => {
        $('<li/>').text(ele).appendTo(this.$RenderDom);
    })
}
AudioLrc.prototype.rollLrc = function () { //歌词滚动函数
    this.temp = setInterval(() => {
        if (this.audio.currentTime >= (parseInt(this.lrcTimeArr[this.lineNum]) + this.delay)) {
            this.$RenderDom
                .find('li')
                .eq(this.lineNum)
                .setActive()
            this.$RenderDom.css('top', this.top);
            this.top -= 50;
            this.lineNum++;
        }
    }, 10)
}
AudioLrc.prototype.noRollLrc = function () {
    clearInterval(this.temp);
}





