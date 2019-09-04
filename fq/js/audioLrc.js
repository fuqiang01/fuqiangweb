function AudioLrc(lrcUrl, audio, $RenderDom, delay) {

    this.lrcUrl = lrcUrl;
    this.audio = audio;
    this.$RenderDom = $RenderDom;
    this.delay = delay || 0;
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
        self.rollLrc();
    }
    this.audio.onpause = function () {
        self.noRollLrc();
    }
    this.audio.onended = function () {
        self.noRollLrc();
        $(this)
            .siblings('.audio-play-btn')
            .css('backgroundImage', 'url("../img/stop.png")');
        self.$RenderDom.css('top', self.renderDomTop);
    }
}



AudioLrc.prototype.parsingLrc = function (lrc) {
    const self = this;
    const lrcLineArr = lrc.split('\n');//把每一行都分割开成数组
    const reg = /\[\d*:\d*\.\d*\]/g;
    // console.log(lrcLineArr)

    lrcLineArr.forEach(ele => {

        // console.log(ele.match(reg))
        const timeArr = ele.match(reg);//当前行时间数组
        const content = ele.replace(reg, '');//当前行歌词
        // console.log(content)
        if (timeArr) {
            timeArr.forEach(ele => {
                const min = ele.match(/\[\d*/)[0].slice(1) * 60;
                const sec = ele.match(/:\d*\.\d*/)[0].slice(1);
                const time = parseInt(min) + parseInt(sec);
                self.lrcArr.push([time, content]);
                // console.log(lrcObj);
            })
        }
    });

    this.lrcArr.sort(function (a, b) {
        return a[0] - b[0];
    })

    this.lrcArr.forEach(ele => {
        this.lrcTimeArr.push(ele[0]);
        this.lrcContentArr.push(ele[1]);
    })


}

AudioLrc.prototype.renderLrc = function () {
    this.lrcContentArr.forEach(ele => {
        $('<li/>').text(ele).appendTo(this.$RenderDom);
    })
}

AudioLrc.prototype.rollLrc = function () {
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





