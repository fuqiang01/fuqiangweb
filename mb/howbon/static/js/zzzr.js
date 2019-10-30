//公司环境点击效果
$(".cc > div").mouseover(function () {
    $(this).parents().siblings(".e-big2").find(".e-b-box").hide();
    $(this).parents().siblings(".e-big").find(".e-b-box").hide();
    $(this).parents().siblings(".e-big2").find(".e-b-box").eq($(this).index()).stop().animate({
        left: 100, opacity: 'show',
    }, 800);
    $(this).parents().siblings(".e-big").find(".e-b-box").eq($(this).index()).stop().animate({
        left: 100, opacity: 'show',
    }, 800);
});

function scroll() {
    $(".e-big2").find(".e-b-box").show();
    $(".e-big").find(".e-b-box").show();
    $(".e-big ul").animate({ "margin-left": "-573px", "transition": "width 0.2", }, 'slow', function () {

        $(".e-big ul li:eq(0)").appendTo($(".e-big ul"))
        $(".e-big ul").css({ "margin-left": 0 })
    })
    $(".e-big2 ul").animate({ "margin-left": "-573px" }, 'slow', function () {
        $(".e-big2 ul li:eq(0)").appendTo($(".e-big2 ul"))
        $(".e-big2 ul").css({ "margin-left": 0 })
    })
}
setInterval(scroll, 10000)

$(function () {
    var $this = $(".black-div");
    var scrollTimer;
    $this.hover(function () {
        clearInterval(scrollTimer);
    }, function () {
        scrollTimer = setInterval(function () {
            scrollNews($this);
        }, 2000);
    }).trigger("mouseout");

    function scrollNews(obj) {
        $(".black-div-box .black-div").animate({ "margin-top": "-50px" }, "slow", function () {
            $(".black-div-box .black-div .black-box:eq(0)").appendTo($(".black-div-box .black-div"));
            $(".black-div-box .black-div").css({ "margin-top": 0 })
        })
    }
    setInterval(scrollNews($this), 20000)
})