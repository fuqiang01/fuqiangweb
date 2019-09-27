// 行业必备资质
$('.necessary .left li').hover( function () {
    $(this)
        .add('.' + this.id)    
        .getActive();
}, function () {})