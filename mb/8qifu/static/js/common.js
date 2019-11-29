$('#showcity').click(function () {
    if ($("#topcity").css('display') == 'none') {
        $("#topcity").css("display", "block");
    } else {
        $("#topcity").css("display", "none");
    }
})

//input获得焦点事件
var Span = $(".cs-yhm-list p span");
var Input = $(".cs-input-hy input");
$(document).ready(function () {
    $(".cs-input-hy input").focus(function () {
        $(".hy01").fadeIn(500);
    });
    $(".cs-input-hy input").blur(function () {
        $(".hy01").fadeOut(500);
    });
    $(Span).click(function () {
        $(Input).val($(this).text());
    });
});

//banner
jQuery(".banner-mid").slide({mainCell: ".bd ul", effect: "left", autoPlay: true});

//wow
var wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: true,
    live: true
});
wow.init();

//返回顶部
$(".back-top").click(function () {
    $(window).scrollTop(0);
});

