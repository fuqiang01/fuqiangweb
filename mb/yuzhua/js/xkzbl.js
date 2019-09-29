// 行业必备资质
$('.necessary .left li').hover( function () {
    $(this)
        .add('.' + this.id)    
        .getActive();
}, function () {})

// 在线问答
$('.question li').hover(function () {
    $(this).getActive();
}, function () {})