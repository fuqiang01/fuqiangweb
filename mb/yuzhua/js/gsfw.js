// 顾问团队&员工风采&新闻资讯
$('.team .title li')
    .add('.mien .title li')
    .add('.news-wrapper .left .title li')
    .hover(function () {
        $(this).getActive();
        $('.' + this.id).getActive();
    }, function () {

    })

//核名下拉栏
$('.heming .drop-down > div').on('click', function () { //下拉栏点击展开
    $(this)
        .parents('.drop-down')
        .siblings('.drop-down')
        .find('ul')
        .slideUp();
    $(this)
        .parents('.drop-down')
        .find('ul')
        .slideToggle();
})
$('.heming .drop-down li').on('click', function () { //下拉选项点击显示
    var val = $(this).text();
    $(this)
        .parents('.drop-down')
        .find('div')
        .find('span')
        .text(val)
    $(this).parents('ul').slideUp();
})

$('.team .heming > div').on('click', function () {
    $(this).getActive();
})