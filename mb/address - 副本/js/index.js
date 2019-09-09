$('.sheng,.shi').on('click', function () {
    $(this).find('ul').slideToggle();
})

function init () {
    renderTable(addressData);
    renderChoose (addressData);
}
init();

//渲染列表函数
function renderTable(data) {
    data.forEach(function (ele) {
        var $wrapper = $('<div class="clearfloat table-item" />');
        $('<div class="letter"/>')
            .text(ele.letter)
            .css("lineHeight", ele.arr.length * 50 + 'px')
            .appendTo($wrapper);
        ele.arr.forEach( function (ele) {
            var $Item = $('<div class="item clearfloat">\
                        <div class="sheng">' + ele.province + '</div>\
                        <div class="shi">\
                            <div class="a-wrapper"></div>\
                        </div>\
                    </div>');
            ele.city.forEach( function (ele) {
                $Item
                    .find('.a-wrapper')
                    .append('<a class="' + ele.colorClass + '" href="' + ele.href + '">' + ele.name + '</a>');
            })
            $Item.appendTo($wrapper);
        })
        $wrapper.appendTo('.table-wrapper');
    })
}

//渲染城市选择
function renderChoose (data) {
    data.forEach( function (ele, indexf) {
        ele.arr.forEach( function (ele, indexs) {
            $('<li data-indexf="' + indexf + '" data-indexs="' + indexs + '"/>')
                .text(ele.province)
                .appendTo('.sheng ul')
        })
    })
    //给每个省份绑定点击事件,填充省份对应的城市
    $('.sheng ul').on('click', 'li', function () {
        var address = $(this).text();
        var indexf = $(this).data("indexf");
        var indexs = $(this).data("indexs");
        $('.sheng-show-address').text(address);
        $('.shi ul').empty();
        data[indexf].arr[indexs].city.forEach( function (ele) {
            $('<li><a href="' + ele.href + '">' + ele.name + '</a></li>').appendTo('.shi ul');
        })
    })
}
//搜索框
$('.input-wrapper input').on('input', function () {
    var val = $(this).val();
    $('.inputedResults').empty();
    addressData.forEach( function (ele) {
        ele.arr.forEach( function (ele) {
            ele.city.forEach( function (ele) {
                if ( val && ele.name.indexOf(val) !== -1 ) {
                    $('<li><a href="' + ele.href + '">' + ele.name + '</a></li>').appendTo('.inputedResults');
                } 
            })
        })
    })
})
$('.input-wrapper input').on('focus', function () {//聚焦显示
    $('.inputedResults').slideDown();
})
$('.input-wrapper input').on('blur', function () {//失焦隐藏
    $('.inputedResults').slideUp();
})
$('.search').click( function () {//搜索按钮点击显示
    $('.inputedResults').slideDown();
})