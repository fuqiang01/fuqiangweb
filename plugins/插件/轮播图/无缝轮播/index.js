var carouselLen = $('.carousel-wrapper>ul>li').length;
var carouselWidth = $('.carousel-wrapper').width();
var carouselLeft = $('.carousel-wrapper').offset().left;
var index = 0;
var temp = null;

carouselFun();


// 初始化函数
function carouselFun() {

    // 容器宽度赋予
    $('.carousel-wrapper>ul').css('width', carouselWidth * carouselLen);
    $('.carousel-wrapper>ul>li').css('width', carouselWidth);

    temp = setInterval(function () {

        carouselMove('right');
    }, 5000);

    // 左右按钮事件
    $('.btn-prev').click(function () {

        carouselMove('left');
    })
    $('.btn-last').click(function () {

        carouselMove('right');
    })

    // 圆点点击事件
    $('.bot>ul').on('click', 'li', function () {

        index = $(this).index();
        carouselMove();
    })
}

// // 运动函数
function carouselMove(direction) {

    var botIndex;
    clearInterval(temp);

    if (direction == 'right') {

        index++;
        if (index == carouselLen) {
            index = 1;
            $('.carousel-wrapper>ul').animate({
                left: 0
            }, 0);
        }
    } else if (direction == 'left') {

        index--;
        if (index < 0) {
            index = carouselLen - 2;
            $('.carousel-wrapper>ul').animate({
                left: (1 - carouselLen) * carouselWidth
            }, 0);
        }
    }

    $('.carousel-wrapper>ul').animate( {

        left: -1 * index * carouselWidth
    }, 1000);

    $('.bot>ul>li').each( function ( index, ele) {

        $(ele).css('backgroundColor', '#999');
    })

    if ( index == carouselLen - 1) {

        botIndex = 0;
    } else {
        botIndex = index;
    }
    $('.bot>ul>li').eq( botIndex).css('backgroundColor', '#fff');

    temp = setInterval(function () {

        carouselMove('right');
    }, 5000);
}