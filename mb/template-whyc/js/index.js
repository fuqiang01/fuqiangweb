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