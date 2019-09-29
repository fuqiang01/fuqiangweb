// 员工风采&新闻资讯
$('.mien .title li')
    .add('.news-wrapper .left .title li')
    .hover( function () {
        $(this).getActive();
        $('.' + this.id).getActive();
    }, function () {

    })

  