$('.sheng,.shi').on('click', function () {
    $(this).find('ul').slideToggle();
})


renderTable(addressData);

function renderTable(data) {
    data.forEach(function (ele) {
        var $wrapper = $('<div class="clearfloat table-item" />');
        var $P = $('<p/>').text(ele.letter + ':');
        var $Ul = $('<ul class="clearfloat" />');
        ele.arr.forEach( function (ele) {
            $('<li>\
            <a class="' + ele.colorClass + '" href="' + ele.href + '">' + ele.name + '</a>\
            </li>').appendTo($Ul);
        })
        $wrapper.append($P,$Ul).appendTo('.table-wrapper');
    })
}

renderChoose (newCityList);

function renderChoose (data) {
    data.forEach( function (ele, index) {
        $('<li data-index="' + index + '">' + ele.province + '</li>')
        .appendTo('.sheng ul')
    })
    $('.sheng ul').on('click', 'li', function () {
        var address = $(this).text();
        var index = $(this).data("index");
        $('.sheng-show-address').text(address);
        $('.shi ul').empty();
        data[index].city.forEach( function (ele) {
            $('<li><a href="' + ele.href + '">' + ele.name + '</a></li>').appendTo('.shi ul');
        })
    })
}

$('.input-wrapper input').on('input', function () {
    var val = $(this).val();
    $('.inputedResults').empty();
    cityList.forEach( function (ele) {
        ele.city.forEach( function (ele) {
            if ( val && ele.name.indexOf(val) !== -1 ) {
                $('<li><a href="' + ele.href + '">' + ele.name + '</a></li>').appendTo('.inputedResults');
            } 
        })
    })
})
$('.input-wrapper input').on('focus', function () {
    $('.inputedResults').slideDown();
})
$('.input-wrapper input').on('blur', function () {
    $('.inputedResults').slideUp();
})
$('.search').click( function () {
    $('.inputedResults').slideDown();
})