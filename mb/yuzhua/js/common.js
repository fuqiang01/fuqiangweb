

$('.nav-bar .nav-list').hover( function () {
    $(this)
        .find('.hover-show')
        .fadeIn(200)
}, function () {
    $(this)
    .find('.hover-show')
    .fadeOut(200)
})