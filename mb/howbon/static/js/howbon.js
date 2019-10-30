$(document).ready(function () {

    if($(".hbjs-sec").length){
        $(".hbjs-sec .string").css("height",100+$(".hbjs-sec .lxwm-fz-content-detail").length*94);
        $(".hbjs-sec .lxwm-fz-content-detail:odd").addClass("right");
        $(".hbjs-sec .lxwm-fz-content-detail:even").addClass("left");
        var fc_first=$("#box ul li:first-child");
        var fc_last=$("#box ul li:last-child");
        var fc_width=$("#box ul li").width();
        var interval=3000;
        var timeout=2000;
        $('#box ul').css('margin-left','-'+fc_width*2+'px');
        $('#box ul').prepend(fc_last.prop("outerHTML"));
        $('#box ul').append(fc_first.prop("outerHTML"));
        $('#box ul').css('width',($('ul li').length)*fc_width);
        $('#box').css('width',fc_width);
        var timer=setInterval(auto,interval);
        var timer2=null;

        $('.lxwm-qyfc .next').click(function(){
            clearTimeout(timer2);
            clearInterval(timer);
            auto();
            timer2=setTimeout(function(){
                timer=setInterval(auto,interval);
            },timeout);
        });

        $('.lxwm-qyfc .prev').click(function(){
            clearTimeout(timer2);
            clearInterval(timer);
            $('#box ul').stop(false,true).prepend($("#box ul li.active").prop("outerHTML"));
            $('#box ul li:last-child').remove();
            $('#box ul').css({'margin-left':'-='+fc_width+'px'});
            $('#box ul').animate({'margin-left':['+='+fc_width+'px','easeInOutExpo']},700);
            $('#box ul li.active').prev().addClass('active').siblings().removeClass('active');
            timer2=setTimeout(function(){
                timer=setInterval(auto,interval);
            },timeout);
        });

        $('#box').mouseenter(function(){
            clearTimeout(timer2);
            clearInterval(timer);
        }).mouseleave(function(){
            timer2=setTimeout(function(){
                timer=setInterval(auto,interval);
            },timeout);
        });

        function auto(){
            $('#box ul').stop(false,true).append($("#box ul li.active").prop("outerHTML"));
            $('#box ul li:first-child').remove();
            $('#box ul').css({'margin-left':'+='+fc_width+'px'});
            $('#box ul').animate({'margin-left':['-='+fc_width+'px','easeInOutExpo']},700);
            $('#box ul li.active').next().addClass('active').siblings().removeClass('active');
        }


    }

    $(".index-fwxm .fwxm-sort ul li").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
        $(".fwxm-classify ul").eq($(this).index()).addClass("active").siblings().removeClass("active")
    });
    $(".shfw-sec .shfw-content ul li").mouseenter(function () {
        $(this).addClass("active").siblings().removeClass("active");
        if ($(this).index() == 0) {
            $(".shfw-sec .shfw-content ul").css("transform", "perspective(4000px) rotateY(20deg)")
        } else {
            $(".shfw-sec .shfw-content ul").css("transform", "perspective(4000px) rotateY(-20deg)")
        }
    });
    for (var i = 0; i < $(".sbcl-sec ul li").length / 4; i++) {
        $(".sbcl-sec ul li").eq(2 + i * 4).css("backgroundColor", "rgb( 45, 66, 110)");
        $(".sbcl-sec ul li a").eq(2 + i * 4).css("color", "rgb( 255, 255, 255)");
        $(".sbcl-sec ul li").eq(3 + i * 4).css("backgroundColor", "rgb( 45, 66, 110)");
        $(".sbcl-sec ul li a").eq(3 + i * 4).css("color", "rgb( 255, 255, 255)");
    }
    $(".more-sec .more-classify>li").mouseenter(function () {
        $(this).addClass("active").siblings().removeClass()
    });
    if ($("#da-slider").length) {
        $("#da-slider").cslider({autoplay: true, interval: 6000})
    }

    if($('#hwslider').length){

        banner();
        $("#hwslider").hwSlider({
            autoPlay: true,
            arrShow: true,
            dotShow: true,
            touch: true,
            interval:4000

        });

        $(window).resize(function(){
            banner()
        });

        function banner(){
            var banHeight=parseInt($('.index-banner').css('width'))/(1920/450)+'px';
            $('.index-banner').css('height',banHeight);
        }
    }
    if ($(".twlb-sec").length) {
        var oBox = $(".twlb-content .twlb-detail");
        oBox.find("img").attr("src", $(".twlb-content .twlbImg:first-child img").attr("src"));
        oBox.find(".twlb-intro h3").html($(".twlb-content .twlbImg:first-child .content-h3").html());
        oBox.find(".twlb-intro .twlb-intro-content").html($(".twlb-content .twlbImg:first-child .content-twlb-intro-content").html());
        oBox.find(".twlb-intro .more").attr("href", $(".twlb-content .twlbImg:first-child .src").attr("href"));
        $("#intro").css("width", 1170 - parseInt(oBox.find("img").css("width")) + "px");
        $(".twlb-content .twlbImg").mouseenter(function () {
            var imgSrc = $(this).find("img").attr("src");
            var title = $(this).find(".content-h3").html();
            var content = $(this).find(".content-twlb-intro-content").html();
            var href = $(this).find(".src").attr("href");
            oBox.find("img").attr("src", imgSrc);
            oBox.find(".twlb-intro h3").html(title);
            oBox.find(".twlb-intro .twlb-intro-content").html(content);
            oBox.find(".twlb-intro .more").attr("href", href);
            var left = $(this).offset().left + 130 - $(".twlb-content .twlbImg:first-child").offset().left + "px";
            if ($(this).index() > 3) {
                $(".point2").show();
                $(".point1").hide()
            } else {
                $(".point2").hide();
                $(".point1").show()
            }
            $(".point").css("left", left);
            $("#intro").css("width", 1170 - parseInt(oBox.find("img").css("width")) + "px")
        })
    }

    if ($(".gsjs-sec .gsjs-classify").length) {
        var index = 0;
        $(".bg .detail h1").html($(".gsjs-sec .gsjs-classify ul li:first-child").find(".put-title").html());
        $(".bg .detail .content-in").html($(".gsjs-sec .gsjs-classify ul li:first-child").find(".put-content").html());
        $(".gsjs-sec .gsjs-classify ul li").click(function () {
            var obj = $(this);
            if (obj.index() != index) {
                obj.find(".word").fadeIn("slow");
                obj.siblings().find(".word").fadeOut("fast");
                obj.find(".foot").fadeIn("slow");
                obj.siblings().find(".foot").fadeOut("fast");
                obj.addClass("active").siblings().removeClass("active");
                $(".bg .detail h1,.bg .detail .content-in").animate({left: [1200, "easeInOutCirc"]}, function () {
                    $(".bg .detail h1").html(obj.find(".put .put-title").html());
                    $(".bg .detail .content-in").html(obj.find(".put .put-content").html());
                    setTimeout(function () {
                        $(".bg .detail h1").animate({left: 0}, "easeInOutBounce");
                        setTimeout(function () {
                            $(".bg .detail .content-in").animate({left: 0}, "easeInOutBounce")
                        }, 200)
                    }, 100)
                });
                if ($(this).index() % 2 != 0) {
                    $(".gsjs-sec .gsjs-content .gsjs-box").animate({scrollTop: [900, "easeInOutCirc"]})
                } else {
                    $(".gsjs-sec .gsjs-content .gsjs-box").animate({scrollTop: [0, "easeInOutCirc"]})
                }
                index = obj.index()
            } else {
                return false
            }
        })
    }
    if ($("#gla").length) {
        $(function () {
            if ($("#gla")) {
                $(".gla_inbox").corner("8px");
                $("#gla_box>ul").roundabout({
                    minOpacity: 1,
                    btnNext: ".next",
                    duration: 1000,
                    reflect: true,
                    btnPrev: ".prev",
                    autoplay: true,
                    autoplayPauseOnHover: true,
                    autoplayDuration: 5000,
                    tilt: 0,
                    shape: "figure8"
                })
            }
        })
    }

    if($('.index-tzgg').length){
        $('.index-tzgg .tzgg-title .classify p').click(function(){
            $(this).addClass('active').siblings().removeClass();
            $('.index-tzgg .box ul').eq($(this).index()).fadeIn('fast').siblings().hide();
        })

    }

    if($('.xwlb-sec').length){
        $('.xwlb-sec .nav-menu ul>li').click(function(){
            $(this).find('ol').stop(true,false).slideToggle();
            $(this).siblings().find('ol').slideUp();
            $(this).find('.right').toggleClass('active');
            $(this).siblings().find('.right').removeClass('active');
        });

        $('.xwlb-sec .new-content').css({'transform':'translate(0,30px)','opacity':'0'});
        setTimeout(function(){
            $('.xwlb-sec .new-content').css({'transform':'translate(0,0)','opacity':'1','transition':'0.3s'});
        },0)
    }

    if ($("canvas").length&&$.browser.msie&&($.browser.version > 7)) {
        var dash1 = document.getElementById("dash1").getContext("2d");
        var dash2 = document.getElementById("dash2").getContext("2d");
        var dash3 = document.getElementById("dash3").getContext("2d");
        var dash4 = document.getElementById("dash4").getContext("2d");
        var dash5 = document.getElementById("dash5").getContext("2d");
        drawDashLine(dash1, 180, 0, 90, 100, 4);
        drawDashLine(dash2, 0, 0, 100, 100, 4);
        drawDashLine(dash3, 0, 180, 100, 0, 4);
        drawDashLine(dash4, 0, 0, 70, 70, 4);
        drawDashLine(dash5, 180, 0, 70, 70, 4);
        function getBeveling(x, y) {
            return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2))
        }

        function drawDashLine(context, x1, y1, x2, y2, dashLen) {
            dashLen = dashLen === undefined ? 5 : dashLen;
            var beveling = getBeveling(x2 - x1, y2 - y1);
            var num = Math.floor(beveling / dashLen);
            for (var i = 0; i < num; i++) {
                context[i % 2 == 0 ? "moveTo" : "lineTo"](x1 + (x2 - x1) / num * i, y1 + (y2 - y1) / num * i)
            }
            context.stroke()
        }
    }

    if($('.message-sec').length){
        var email=/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
        var qq=/^\d{5,11}$/;
        $('#txtUserEmail').blur(function(){
            email.test($(this).val()) == false?$(this).siblings('.tip').show():$(this).siblings('.tip').hide();
        });
        $('#txtUserQQ').blur(function(){
            qq.test($(this).val()) == false?$(this).siblings('.tip').show():$(this).siblings('.tip').hide();
        });
    }

    // 弹窗
    $('.f-contactUs-btn').on('click', function () {
        $('.popupWindow-wrapper').fadeIn();
        return false;
    })
    $('.popupWindow-wrapper').on('click', function (e) {
        if (e.target !== this) {
            return;
        }
        $('.popupWindow-wrapper').fadeOut();
        return false;
    })
    $('.popW-shut-btn').click(function () {
        $('.popupWindow-wrapper').fadeOut();
    })

});


