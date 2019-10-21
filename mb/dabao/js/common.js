//侧边框
$('.right-box li').hover(function() {
    $(this)
        .find('.hover-show')
        .slideDown();
}, function () {
    $(this)
        .find('.hover-show')
        .slideUp();
})
$('.goTop').click( function () {
    console.log(111)
    $('html,body').animate({'scrollTop': 0},800)
})