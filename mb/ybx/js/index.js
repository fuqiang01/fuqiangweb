var solX = 0;
var solY = 0;


$('.sol-right').on('mousemove', function (e) {
    // console.log('ax' + e.pageX)
    // console.log('ay' + e.pageY)
    solX = e.pageX;
    solY = e.pageY;

})
$('.sol-right').find('.item').on('mouseover', function (e) {
    // console.log('bx' + e.pageX)
    // console.log('by' + e.pageY)

    var itemX = $(this).offset().left;
    var itemY = $(this).offset().top;
    var itemW = $(this).outerWidth();
    var itemH = $(this).outerHeight();


    var x = e.pageX;
    var y = e.pageY;


    if (solX < itemX || solX > (itemX + itemW)) {


        if (x > solX) {
            console.log('左');
        } else {
            console.log('右');
        }
    }

    if (solY < itemY || solY > (itemY + itemH)) {

        if (y > solY) {
            console.log('上');
        } else {
            console.log('下');
        }
    }

    $(this).on('mouseout', function (e) {
        var x = e.pageX;
        var y = e.pageY;
        console.log('ax' + solX)
        console.log('ay' + solY)
        console.log('bx' + e.pageX)
        console.log('by' + e.pageY)


        if (solX < itemX && solX < (itemX + itemW)) {

            if (x > solX) {
                console.log('左出');
            } else {
                console.log('右出');
            }
        }

        if (solY > itemY && solY < (itemY + itemH)) {

            if (y > solY) {
                console.log('上出');
            } else {
                console.log('下出');
            }
        }
    })

})