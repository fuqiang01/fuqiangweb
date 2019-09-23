// 顾问团队&员工风采&新闻资讯
$('.team .title li')
    .add('.mien .title li')
    .add('.news-wrapper .left .title li')
    .hover( function () {
        $(this).getActive();
        $('.' + this.id).getActive();
    }, function () {

    })

  