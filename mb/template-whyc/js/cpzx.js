var productListData = null;


function init() {
    bindEvent();
    getProductListData();
    $('.product-directory dt').eq(0).trigger('click');
}

init();




function bindEvent() {

    // 左侧类型栏点击展开时事件
    $('dt').click(function() {
        $(this).nextUntil('dt').slideToggle();
    })

    // 左侧类型名称
    $('dl').on('click', 'dd', function() {

        $('.product-directory .active').removeClass('active');
        $(this).addClass('active');

        var text = $(this).text();
        $('.typeName').text(text);
    })

    // 产品目录
    $('.product-directory').on('click', 'dd', function() {
        var id = this.id;
        var data = productListData[id];
        renderProductList(data);
    })


}






function getProductListData() {

    $.ajax({
        url: "http://demo.cwgszc.com/template/moke/product.json",
        type: "get",
        dataType: 'json',
        success: function(res) {
            productListData = res;
            renderProductList(res.gszc);
        },
        error: function(err) {
            console.log(err)
        }

    })
}


function renderProductList(data) {


    $('.typeNum').text(data.length);

    $('.product-list').empty();
    data.forEach(function(ele, index) {
        var $Dom = $('<div class="col-md-4 col-sm-6 col-xs-12 f-tag animationShow">\
                    <div class="product-item">\
                        <img src="./mokeimg/' + ele.imgName + '" alt="">\
                        <p class="product-name">' + ele.title + '</p>\
                        <p class="product-info">' + ele.info + '</p>\
                        <p class="product-info-hover"></p>\
                        <p class="product-price">\
                            <span>商品价格:</span>\
                            <span>' + ele.price + '</span>\
                        </p>\
                        <p class="product-sales">\
                            <span>商品人气:</span>\
                            <span>已有' + ele.sales + '人购买</span>\
                        </p>\
                        <p class="product-details">\
                            <a href="./productDetails.html?id=' + ele.id + ';index=' + index + '">立即购买</a>\
                        </p>\
                    </div>\
                </div>')

        $Dom.appendTo('.product-list');

        $('.product-info').hover(function() {
            var val = $(this).text();
            $(this)
                .next('.product-info-hover')
                .text(val)
                .fadeIn();
        })
        $('.product-info-hover').hover(function() {}, function() {
            $(this).fadeOut();
        })

    })
}