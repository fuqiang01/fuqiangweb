


$('.list-wrapper>ul>li').hover(function () {

    var _this = $(this);
    $('.list-open').fadeIn();

    $.ajax({

        url: 'http://www.fuqiangweb.cn/moke/list.json',
        type: 'GET',
        // data : {
        //     // 列表自定义属性
        //     data : _this.data('num')
        // },
        success: function (data) {
            console.log(data)
            // data.forEach( function ( ele, index) {
            //     $('<li/>')
            //         .text( ele)
            //             .appendTo('.list-open>ul')
            // })
        }
    })
}, function () {

    $('.list-open').fadeOut();
    $('.list-open>ul').empty();
})