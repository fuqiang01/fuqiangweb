function init() {
    renderList(companyTransferData);//列表渲染
}
init();


// 顶部轮播图初始化
mySwiper = new Swiper('.swiper-jiaoyidongtai', {
    direction: 'vertical', // 垂直切换选项
    loop: true, // 循环模式选项
    slidesPerView: 'auto',//根据slide的宽度自动调整展示数量。
    spaceBetween: 10,//每个slide的间距
    autoplay: true,//自动切换
})


//筛选
$('.screening .drop-down >div').on('click', function () { //下拉栏点击展开
    console.log(11)
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
$('.screening .drop-down li').on('click', function () { //下拉选项点击显示
    var val = $(this).text();
    $(this)
        .parents('.drop-down')
        .find('p')
        .find('span')
        .text(val)
    $(this).parents('ul').slideUp();
})
$('.screening .i-wrapper a')
    .add('.screening .drop-down li')
    .on('click', function () {
        var type = $(this).parents('.info-type').data('type');
        var val = $(this).text();
        var $Dom = $('<span class="flag">' + val + '</span>');
        var $Self = $(this);
        if ($(this).hasClass('active')) {
            return false;
        }
        $(this).addClass('active');
        $Dom.on('click', function () {
            $Self.removeClass('active');
            $(this).remove();
            renderList( getFilterData());//重新渲染列表
        })
        $Dom.data('type', type).appendTo('.screening .l-bot');
        renderList( getFilterData());//重新渲染列表
        return false;
    })
$('.screening .l-bot .empty').on('click', function () {
    $(this)
        .siblings('.flag')
        .remove();
    renderList( getFilterData());//重新渲染列表
})

// 排序
$('.sorting .arrangement').on('click', 'span', function() {
    $(this).getActive();
    renderList( getFilterData());//重新渲染列表
})
$('.sorting > span').on('click', function () {
    $(this).getActive();
})
$('.sorting-com')
    .add('.sorting-time')
    .on('click', function () {
        renderList( getFilterData());//重新渲染列表
    })
$('.sorting-price').click( function () {
    var data = getFilterData();
    data.sort( function (a, b) {
        return parseFloat(b.price) - parseFloat(a.price);
    })
    renderList( data);//重新渲染列表
})

//列表样式1渲染函数
function renderListOne(data) {
    emptyList();
    data.forEach(function (ele) {
        $('<li>\
            <h3>'+ ele.name + '</h3>\
            <p class="price">'+ ele.price + '</p>\
            <div class="introduce clearfloat">\
                <div class="item">\
                    <p class="p1">'+ ele.industry + '</p>\
                    <p class="p2">行业类别</p>\
                </div>\
                <div class="item">\
                    <p class="p1">'+ ele.tax + '</p>\
                    <p class="p2">纳税类型</p>\
                </div>\
                <div class="item">\
                    <p class="p1">'+ ele.time + '</p>\
                    <p class="p2">经营时间</p>\
                </div>\
                <div class="item">\
                    <p class="p1">'+ ele.capital + '</p>\
                    <p class="p2">注册资本</p>\
                </div>\
            </div>\
            <div class="btn-wrapper">\
                <a href="#" class="f-contactUs-btn">立即购买</a>\
                <a href="#" class="f-contactUs-btn">立即咨询</a>\
            </div>\
            <p class="bottom">发布时间: 刚刚发布</p>\
        </li>').appendTo('.type-one');
    })
    bindPopupWindow();
}

//列表样式2渲染函数
function renderListTwo(data) {
    emptyList();
    data.forEach(function (ele) {
        $('<li class="clearfloat">\
            <div class= "left" >\
                <h3>' + ele.name + '</h3>\
                <ul class="introduce clearfloat">\
                    <li>\
                        <p class="p1">企业行业</p>\
                        <p class="p2">' + ele.industry + '</p>\
                    </li>\
                    <li>\
                        <p class="p1">企业类型</p>\
                        <p class="p2">' + ele.type + '</p>\
                    </li>\
                    <li>\
                        <p class="p1">经营时间</p>\
                        <p class="p2">' + ele.time + '</p>\
                    </li>\
                    <li>\
                        <p class="p1">纳税类型</p>\
                        <p class="p2">' + ele.tax + '</p>\
                    </li>\
                    <li>\
                        <p class="p1">注册资本</p>\
                        <p class="p2">' + ele.capital + '</p>\
                    </li>\
                    <li>\
                        <p class="p1">所在地区</p>\
                        <p class="p2">' + ele.region + '</p>\
                    </li>\
                    <li>\
                        <p class="p1">出售价格</p>\
                        <p class="p2 price">' + ele.price + '</p>\
                    </li>\
                </ul>\
            </div >\
            <div class="right">\
                <p>发布时间：' + ele.date + '</p>\
                <p>' + ele.address + ' 丨 ' + ele.yearRegistration + ' 丨 正常报税</p>\
                <div class="btn-wrapper">\
                    <a href="#" class="f-contactUs-btn">\
                        <img src="./img/icon26 (1).png" alt="">\
                    </a>\
                    <a href="#" class="f-contactUs-btn">\
                        <img src="./img/icon27 (1).png" alt="">\
                        <span>联系客服</span>\
                    </a>\
                </div>\
            </div>\
        </li>').appendTo('.type-two');
    })
    bindPopupWindow();
}

//清空列表
function emptyList() {
    $('.type-one')
        .add('.type-two')
        .empty()
}

// 绑定弹窗事件
function bindPopupWindow() {
    $('.f-contactUs-btn').on('click', function () {
        $('.popupWindow-wrapper').fadeIn();
        return false;
    })
}

// 筛选
function getFilterData() {
    var arr = [];
    if ( $('.screening .l-bot .flag').length === 0 ) {
        return companyTransferData;
    }
    $('.screening .l-bot .flag').each(function (index, ele) {
        switch ($(ele).data('type')) {
            case 'industry':
                arr = arr.concat(companyTransferData.filter(function (obj) {
                    return obj.industry === $(ele).text();
                }));
                break;
            case 'type':
                arr = arr.concat(companyTransferData.filter(function (obj) {
                    return obj.type === $(ele).text();
                }));
                break;
            case 'time':
                arr = arr.concat(companyTransferData.filter(function (obj) {
                    return obj.time === $(ele).text();
                }));
                break;
            case 'tax':
                arr = arr = companyTransferData.filter(function (obj) {
                    return obj.tax === $(ele).text();
                });
                break;
            case 'capital':
                arr = arr.concat(companyTransferData.filter(function (obj) {
                    return obj.capital === $(ele).text();
                }));
                break;
            case 'region':
                arr = arr.concat(companyTransferData.filter(function (obj) {
                    return obj.region === $(ele).text();
                }));
                break;
            case 'address':
                arr = arr.concat(companyTransferData.filter(function (obj) {
                    return obj.address.indexOf($(ele).text()) !== -1;
                }));
                break;
            case 'price':
                arr = arr.concat(companyTransferData.filter(function (obj) {
                    return obj.priceRange === $(ele).text();
                }));
        }
    })
    return deWeight(arr);
}

//去重函数
function deWeight(arr) {
    var idArr = [];
    var newArr = arr.filter(function (ele) {
        var rock = true;
        idArr.forEach(function (id) {
            if (ele.id === id) {
                console.log(111)
                rock = false;
            }
        })
        idArr.push(ele.id);
        return rock;
    })
    return newArr;
}

//列表渲染函数
function renderList( data) {
    var index = $('.arrangement .active').index();
    switch(index){
        case 0: 
            renderListOne(data);
            break;
        case 1:
            renderListTwo(data);
    }
}