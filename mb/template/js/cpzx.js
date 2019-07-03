
// 左侧类型栏点击展开时事件
$('dt').click(function () {
    $(this).nextUntil('dt').slideToggle();
})

// 右侧类型名称赋值
$('dl').on( 'click', 'dd', function () {
    var text = $(this).text();
    $('.typeName').text( text);
})
