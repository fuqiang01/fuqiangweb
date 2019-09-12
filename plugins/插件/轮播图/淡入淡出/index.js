var carouselLen = $('.carousel-wrapper>ul>li').length;
var index = 0;
var temp = null;

carouselFun();

// 初始化函数
function carouselFun () {

    temp = setInterval ( function () {

        carouselMove( 'right');
    }, 5000);

    // 左右按钮事件
    $('.btn-prev').click( function () {

        carouselMove( 'left');
    })
    $('.btn-last').click( function () {

        carouselMove( 'right');
    })

    // 圆点点击事件
    $('.bot>ul').on( 'click', 'li', function () {
        
        carouselOut();
        index = $(this).index();
        carouselIn();
    })
}

// 运动函数
function carouselMove ( direction) {

    carouselOut();

    if ( direction == 'right') {

        index ++;
        if ( index == carouselLen) {
            index = 0;
        }
    } else if ( direction == 'left') {

        index --;
        if ( index < 0) {
            index = carouselLen - 1;
        }
    }

    carouselIn();
}


function carouselOut () {

    $('.carousel-wrapper>ul>li').eq( index).fadeOut();
    $('.bot>ul>li').eq( index).css( 'background', '#999');

    clearInterval( temp);
}
function carouselIn () {

    $('.carousel-wrapper>ul>li').eq( index).fadeIn();
    $('.bot>ul>li').eq( index).css( 'background', '#fff');

    temp = setInterval ( function () {

        carouselMove( 'right');
    }, 5000);
}