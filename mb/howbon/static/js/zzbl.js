$(function () {
    $(".green,.blue,.roseo,.purple").css({"cursor":"pointer"})
    $(".green").hover(function () {
        $("#box1").show();
        $("#text1").show();
        $("#span").text();
        $("#span").text("总承包资质");
        $("#box1").css("background-image", "url(./static/images/bc.png)");
        $("#box1_img").css({ "background-image": "url(./static/images/bb1.png)" });
    });
    $(".blue").hover(function () {
        $("#text4").show();
        $("#box1").show();
        $("#span").text();
        $("#span").text("工程设计资质");
        $("#box1").css("background-image", "url(./static/images/bc-1.png)");
        $("#box1_img").css({ "background-image": "url(./static/images/bb2.png)" });
    });
    $(".roseo").hover(function () {
        $("#text2").show();
        $("#box1").show();
        $("#span").text();
        $("#span").text("专业承包资质");
        $("#box1").css("background-image", "url(./static/images/bc-2.png)");
        $("#box1_img").css({ "background-image": "url(./static/images/bb3.png)" });
    });
    $(".purple").hover(function () {
        $("#text3").show();
        $("#box1").show();
        $("#span").text();
        $("#span").text("工程勘察资质");
        $("#box1").css("background-image", "url(./static/images/bc-3.png)");            
        $("#box1_img").css({ "background-image": "url(./static/images/bb4.png)" });
    });
    $("#box1").mouseleave(function () {
        $("#box1").hide();
        $("#text1,#text2,#text3,#text4").hide();
        
    });
    /**资质证书循环展示**/
    var time = setInterval(swiper, 5000);

    $(".s_left").click(function () {
        clearInterval(time);
        $(".s_img_box:first").insertAfter(".s_img_box:last");
    });
    $(".s_right").click(function () {
        clearInterval(time);
        $(".s_img_box:last").insertBefore(".s_img_box:first");
    });
    $(".s_left,.s_right").mouseleave(function () {
        clearInterval(time);
        time = setInterval(swiper, 5000);
    });
    function swiper() {
        $(".s_img_box:first").insertAfter(".s_img_box:last");
    }
});

/**易创专注资质办理   值得您的托付！**/
function come() {
    document.getElementById("bb").style.width = "40px";
    document.getElementById("bb").style.height = "80px";
    document.getElementById("bb").style.backgroundColor = "#4a90e2";
    document.getElementById("bb").style.padding = "20px 0 20px 40px";
}
function out() {
    document.getElementById("bb").style.backgroundColor = "white";
}

function come1() {
    document.getElementById("pp").style.width = "40px";
    document.getElementById("pp").style.height = "80px";
    document.getElementById("pp").style.backgroundColor = "#4a90e2";
    document.getElementById("pp").style.padding = "20px 0 20px 40px";
}
function out1() {
    document.getElementById("pp").style.backgroundColor = "white";
}


function come2() {
    document.getElementById("zz").style.width = "40px";
    document.getElementById("zz").style.height = "80px";
    document.getElementById("zz").style.backgroundColor = "#4a90e2";
    document.getElementById("zz").style.padding = "20px 0 20px 40px";
}
function out2() {
    document.getElementById("zz").style.backgroundColor = "white";
}
function come3() {
    document.getElementById("gg").style.width = "40px";
    document.getElementById("gg").style.height = "80px";
    document.getElementById("gg").style.backgroundColor = "#4a90e2";
    document.getElementById("gg").style.padding = "20px 0 20px 40px";
}
function out3() {
    document.getElementById("gg").style.backgroundColor = "white";
}


// ==============================================================================================================================

$("#hwslider").find("img").css({ "cursor": "pointer" }).click(function () {
    window.open("https://ddt.zoosnet.net/LR/Chatpre.aspx?id=DDT27223861&lng=cn", "_blank");
});
$("#text1,#text2,#text3,#text4").find("li,p").css({ "cursor": "pointer" });
$("#text1,#text4,#text3").find("li,p").hover(function () {
    $(this).css({ "color": "#ffd434" });
}, function () {
    $(this).css({ "color": "#fff" });
});
$("#text2").find("li,p").hover(function () {
    $(this).css({ "color": "#0b50b1" });
}, function () {
    $(this).css({ "color": "#fff" });
});
$("#text1").find("li").click(function () {
    window.location.href = 'http://howbon.net/zzbllmdh/300.html';
})
$("#text2").find("li").click(function () {
    window.location.href = 'http://howbon.net/zzbllmdh/301.html';
})
$("#text3").find("li").click(function () {
    window.location.href = 'http://howbon.net/zzbllmdh/307.html';
})
$("#text4").find("p:first").click(function () {
    window.location.href = 'http://howbon.net/zzbllmdh/303/1.html';
});
$("#text4").find("p").eq(1).click(function () {
    window.location.href = 'http://howbon.net/zzbllmdh/306.html';
});
$("#text4").find(".hyzz").click(function () {
    window.location.href = 'http://howbon.net/zzbllmdh/304.html';
})
$("#text4").find(".zxzz").click(function () {
    window.location.href = 'http://howbon.net/zzbllmdh/306.html';
})
$("#box1_box").find("#span").click(function () {
    var title = $(this).text();
    if (title == "总承包资质") {
        window.location.href = 'http://howbon.net/zzbllmdh/300.html';
    }
    else if (title == "工程设计资质") {
        window.location.href = 'http://howbon.net/zzbllmdh/303/1.html';
    }
    else if (title == "专业承包资质") {
        window.location.href = 'http://howbon.net/zzbllmdh/301.html';
    }
    else if (title == "工程勘察资质") {
        window.location.href = 'http://howbon.net/zzbllmdh/307.html';
    }
})
$(".right_box").find(".li1").click(function () {
    window.location.href = 'http://howbon.net/zzbllmdh/302.html';
});
$(".right_box").find(".li2").click(function () {
    window.location.href = 'http://howbon.net/zzbllmdh/310.html';
});
$(".right_box").find(".li3").click(function () {
    window.location.href = 'http://howbon.net/zzbllmdh/311.html';
});
$(".right_box").find(".li4").click(function () {
    window.location.href = 'http://howbon.net/zzbllmdh/309.html';
});
$(".right_box").find(".li5").click(function () {
    window.location.href = 'http://howbon.net/zzbllmdh/313.html';
});
$(".right_box").find(".li6").click(function () {
    window.location.href = 'http://howbon.net/zzbllmdh/308.html';
});
$(".right_box").find(".li7").click(function () {
    window.location.href = 'http://howbon.net/zzbllmdh/315.html';
});
$(".right_box").find(".li8").click(function () {
    window.location.href = 'http://howbon.net/zzbllmdh/314.html';
});
$(".right_box").find(".li9").click(function () {
    window.location.href = 'http://howbon.net/zzbllmdh/316.html';
});
$(".right_box").find(".li10").click(function () {
    window.location.href = 'http://howbon.net/zzbllmdh/312.html';
});
$("#box1_box").find("#span").css({ "cursor": "pointer" });
$("#box1_box").find("#span").hover(function () {
    if ($(this).text() == "专业承包资质") {
        $(this).css({ "color": "#0b50b1" });
    } else {
        $(this).css({ "color": "#ffd434" });
    }
}, function () {
    $(this).css({ "color": "#fff" });
});
$(".right_box_img").find("li").css({ "cursor": "pointer" });
$(".right_box_img").find("li").hover(function () {
    $(this).css({ "color": "#00aef3" });
}, function () {
    $(this).css({ "color": "#000" });
});
