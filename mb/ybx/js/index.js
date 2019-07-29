var solX = 0;
var solY = 0;


var itemX = 0;
var itemY = 0;
var itemW = 0;
var itemH = 0;


$('.sol-right').on('mousemove', function (e) {
    solX = e.pageX;
    solY = e.pageY;
})



$('.sol-right').find('.item').on('mouseover', function (e) {
    itemX = $(this).offset().left;
    itemY = $(this).offset().top;
    itemW = $(this).outerWidth();
    itemH = $(this).outerHeight();

    var x = e.pageX;
    var y = e.pageY;

    if (solX < itemX || solX > (itemX + itemW)) {

        if (x > solX) {
            console.log('左');
            $(this).removeClass().addClass('item from-left');
        } else {
            console.log('右');
            $(this).removeClass().addClass('item from-right');
        }
    }

    if (solY < itemY || solY > (itemY + itemH)) {

        if (y > solY) {
            console.log('上');
            $(this).removeClass().addClass('item from-top');
        } else {
            console.log('下');
            $(this).removeClass().addClass('item from-bottom');
        }
    }

})

$('.sol-right').find('.item').on('mouseout', function (e) {
    var outX = e.pageX;
    var outY = e.pageY;
    
    if ( outX - itemX <= 5) {
        console.log('左出')
        $(this).removeClass().addClass('item to-left');
    }
    if ( (itemX + itemW) - outX <= 5 ) {
        console.log('右出')
        $(this).removeClass().addClass('item to-right');
    }
    if ( outY - itemY <= 5) {
        console.log('上出')
        $(this).removeClass().addClass('item to-top');
    }
    if ((itemY + itemH) - outY <= 5) {
        console.log('下出')
        $(this).removeClass().addClass('item to-bottom');
    }
})