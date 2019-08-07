function Swiper(wrapper, obj) {
    this.$wrapper = $(wrapper);
    this.wrapperWidth = this.$wrapper.width();
    this.wrapperHeight = this.$wrapper.height();
    this.$imgWrapperList = this.$wrapper.find('.img-wrapper').find('li');
    this.singleWidthArr = [];
    this.blocks = obj.blocks || 5;
    this.speed = obj.speed || 800;
    this.numConversion();
    this.init();
}

Swiper.prototype.swiperIn = function ($dom) {
    $dom.css('zIndex', '2');
    var self = this;
    $dom.find('div').each(function (index, ele) {
        setTimeout((function ($ele) {
            return function () {
                $ele.animate({ 'top': 0, 'opacity': 1 }, self.speed);
            }
        })($(ele)), 50 * index);
    })
}

Swiper.prototype.swiperOut = function ($dom) {
    var time = this.speed + this.blocks * 50;
    $dom.css('zIndex', '0')
    setTimeout(function () {
        $dom.find('div').css({
            'top': 500,
            'opacity': '0'
        })
    }, time)
}

Swiper.prototype.init = function () {
    var self = this;
    var index = 0;
    this.$imgWrapperList.each(function (index, ele) {
        var imgSrc = $(ele).data('imgsrc');
        var left = 0;
        for (var i = 0; i < self.blocks; i++) {
            left += self.singleWidthArr[i - 1] || 0;
            var $div = $('<div><img src=' + imgSrc + '></div>')
                .css({
                    'position': 'absolute',
                    'width': self.singleWidthArr[i],
                    'height': self.wrapperHeight,
                    'left': left,
                    'top': 500,
                    'opacity': '0',
                    'overflow': 'hidden'
                })
                .find('img')
                .css({
                    'position': 'absolute',
                    'left': -1 * left,
                    'height': self.wrapperHeight,
                    'width': self.wrapperWidth
                })
                .end();
            $div.appendTo(ele);
        }
    })
    this.swiperIn($('.img-wrapper li').eq(index));
    setInterval(function () {
        swiper.swiperOut($('.img-wrapper li').eq(index));
        index = index === $('.img-wrapper li').length - 1 ? 0 : index + 1;
        swiper.swiperIn($('.img-wrapper li').eq(index));
    }, 3000)
}

Swiper.prototype.numConversion = function () {
    var eachNum = this.wrapperWidth / this.blocks;
    var floorNum = Math.floor(eachNum);
    var ceilNum = Math.ceil(eachNum);
    var floatNum = eachNum - floorNum;
    var modifyNum = floatNum > 0.5 ? ceilNum * this.blocks - this.wrapperWidth : this.wrapperWidth - (eachNum - 1) * this.blocks;
    for (var i = 0; i < this.blocks; i++) {
        var addNum = (i < modifyNum * 2) && (i % 2 == 0) ? floorNum : ceilNum;
        this.singleWidthArr.push(addNum);
    }
}


var swiper = new Swiper('#swiper', {
    blocks: 15
})

