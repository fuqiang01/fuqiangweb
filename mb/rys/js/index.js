
// 创业开办
var newBgArr = ["pccc.png", "wheel5.png", "wheel6.png"];
var lastBgArr = ["wheel4.png","wheel2.png","wheel3.png"];
$('.cy-info').find('li').hover(function () {

    var newIndex = $(this).index();
    var lastIndex = $(this).siblings('.active').index();

    $(this)
        .addClass('active')
        .css('backgroundImage','url("../img/' + newBgArr[newIndex] + '")')
        .siblings('.active')
        .removeClass('active')
        .css('backgroundImage','url("../img/' + lastBgArr[lastIndex] + '")')
})

// 自主做账
$('.zizhu-info .right li').hover( function () {

    var index = $(this).index();
    $(this)
        .addClass('active')
        .siblings('.active')
        .removeClass('active')
        $('.zizhu-info .left')
            .find('img')
            .filter('.show')
            .removeClass('show')
            .end()
            .eq(index)
            .addClass('show')
})

//加盟
$('.jiameng .img div').hover( function () {
    $('.' + this.id)
        .addClass('show')
        .siblings('.show')
        .removeClass('show')
}, function () {})