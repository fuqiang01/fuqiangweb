// 导航
$('.banner-bot').on('click','li', function () {
    $('.' + this.id)
        .siblings()
        .css('display','none')
        .end()
        .fadeIn();
        
})

// 联系我们
$('.map-left span').hover( function () {
    $('.' + this.id)
        .addClass('active')
        .siblings('.active')
        .removeClass('active')
}, function () {})