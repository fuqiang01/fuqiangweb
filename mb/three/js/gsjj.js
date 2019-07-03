
//赋予active类名
$('.navbar-default .nav-right>li.active').removeClass('active');
$('.navbar-default .nav-right>li').eq(6).addClass('active');


$('.gsjj-info .col-md-2 dd').click( function () {

    $('.gsjj-info .col-md-2 dd.active').removeClass('active');
    $(this).addClass('active');
    $('.gsjj-info .col-md-10 > div').css('display','none');
    $('.' + this.id).css('display','block');
})