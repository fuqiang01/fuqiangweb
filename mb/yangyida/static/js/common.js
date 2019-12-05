//通用js


var consultinterval;
var time = Number("30") * 1000;//第一次打开时间，单位是毫秒
var more_time = Number("60") * 1000;
//除了第一次打开，后续重复打开时间，单位是毫秒
if (time == 0) time = more_time;
$(function () {
    //根据弹窗展现机制展现弹窗
    resetinterval();
    //咨询秘书点击事件
    $("#consult_secretary").click(function () {
        consult_secretary_show();
    });

    //关闭咨询秘书弹窗
    $(".consult_secretary_modal_content_close img").click(function () {
        consult_secretary_hide();
    });
    //免费咨询
    $(".consult_free").click(function () {
    });

    //在线咨询
    $(".consult_online").click(function () {
    });

    //稍后再说
    $(".consult_wait").click(function () {
        consult_secretary_hide();
    });
});

//显示咨询秘书的弹窗
function consult_secretary_show() {
    $("#consult_secretary").addClass("display-none");
    //动画效果
    $("#consult_secretary_modal").css({
        width: '700px',
        height: '377px',
        top: 'calc((100% - 377px) / 2)',
        right: 'calc((100% - 700px) / 2)'
    });
    $(".consult_secretary_modal_content").css({
        width: "700px",
        height: "296px"
    });
    $(".consult_secretary_modal_img").css({
        width: "200px",
        height: "377px"
    });
}

//隐藏咨询秘书的弹窗
function consult_secretary_hide() {
    $("#consult_secretary").removeClass("display-none");
    //动画效果
    $("#consult_secretary_modal").css({
        width: '0px',
        height: '7px',
        top: 'calc(100% - 400px)',
        right: '0'
    });
    $(".consult_secretary_modal_content").css({
        width: "0",
        height: "0"
    });
    $(".consult_secretary_modal_img").css({
        width: "0",
        height: "0"
    });

    //弹窗每次关闭，都重置time的值为more_time
    time = more_time;
    resetinterval();
}

//重置计时器
function resetinterval() {
    clearInterval(consultinterval);
    if (time > 0) //如果计时器的秒数大于零，则计时器继续
    {
        consultinterval = setInterval(function () {
            if ($("#consult_secretary_modal").css("width") == "0px" && ($(".expert-modal").length == 0 || $(".expert-modal").hasClass("display-none"))
                && ($(".addorder-form").length == 0 || $(".addorder-form").hasClass("display-none")))//如果弹窗是关闭状态,且未出现提交订单的弹窗，则打开弹窗
            {
                consult_secretary_show();
            }
        }, time);
    }
}





var swiper = new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.next',
        prevEl: '.prev',
    },
});
var swiper_expert = new Swiper('.swiper-container-expert', {
    navigation: {
        nextEl: '.next',
        prevEl: '.prev',
    },
});


