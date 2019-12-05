$(function () {
    //处理下拉框
    dropdownlisthandler();

    //点击专家服务弹框的空白处关闭弹窗
    document.body.onclick = function(e){
        e = e || window.event;
        var target = e.target || e.srcElement;
        //点击搜索框的其他地方，则关闭搜索框
        if(!$(target).hasClass("next-expert")&&!$(target).hasClass("prev-expert")&&
            !$(target).hasClass("expert-list-item-service-desc-img")&&$(target).attr("class")!=null){
            $(".expert-modal").addClass("display-none");
            $("body").css("overflow","auto");
        }
    }

    var nav_tools_control = $('.nav-tools-control');
    nav_tools_control.hover(function() {
        $(this).find(".iprco-nav-tools").removeClass('yyd-hid');
        $(this).find('.nav-active').css("border-bottom", "NONE");
    }, function() {
        $(this).find(".iprco-nav-tools").addClass('yyd-hid');
        $(this).find('.nav-active').css("border-bottom", "3px solid #ff7955");
    });
    var iprco_nav_tools = $('.iprco-nav-tools');
    iprco_nav_tools.hover(function() {
        $(this).parent().find('.nav-active').css("border-bottom", "NONE");
    }, function() {
        //$(this).parent().find('.nav-active').css("border-bottom", "3px solid #ff7955");
    });

    //显示和隐藏二维码悬浮框
    var QRcode_tools_control = $('.QRcode-tools-control');
    QRcode_tools_control.hover(function() {
        $(this).find(".QRcode-tools").removeClass('yyd-hid');
    }, function() {
        $(this).find(".QRcode-tools").addClass('yyd-hid');
    });

    //点击“不知如何选择，立即咨询”类似按钮时触发
    $(".consult-button").click(function(){
        //查找页面关键词
        var pathname=window.location.pathname;
        var lastindex=pathname.lastIndexOf("/");
        var result=pathname.substr(lastindex+1,pathname.indexOf(".")-lastindex-1);

        var e=$(this).data("e");
        if(e!=null&&e!="")
        {
            result=e;
        }

        //跳转页面
        var url="/"+result;
        var ishavesuffix=$(this).data("ishavesuffix");
        if(ishavesuffix=="1")
        {
            url+="_POPUP";
        }
        window.open(url);
    });

    var tab_item = $('.tabs-item');
    var tab_box = $(".yyd-tables-box");
    var tab_desc = $(".yyd-main-tabs-desc");

    $(".tabs-item").hover(function() {
        var yyd = $(this).data("yyd");
        tab_item.removeClass("is-active");
        tab_box.hide();
        tab_desc.hide();

        $(this).addClass("is-active");
        $(this).find(".yyd-main-tabs-desc").show();
        $(".box-"+yyd).show();
    });

    var tab1_item = $(".tab1-item");
    var tardemark_tab1_box = $(".tardemark-tab1-box");

    tab1_item.hover(function() {
        var tdk = $(this).data('tdk');
        tab1_item.removeClass("is-active");
        tardemark_tab1_box.hide();

        $(this).addClass("is-active");
        $(".tdk-"+tdk).show();
    });

    var contract_nav = $(".contract-nav-item");
    var ciu = $(".contactus-info-ul");
    contract_nav.click(function() {
        var s = $(this).data("s");
        contract_nav.removeClass("is-active");
        $(this).addClass("is-active");

        ciu.hide();
        $(".contractus-"+s).show();
        if(s == 'cn') {
            initMap();
        } else if(s == 'en') {
            initMap2();
        }
    });

    var pass_control = $(".pass-control");
    var i = 0;
    pass_control.click(function() {
        var ts = $(this);
        var obj = ts.parent().find("input");
        if(i == 0) {
            ts.removeClass('pass-show');
            ts.addClass('pass-hide');
            obj.attr('type', 'text');
            i = 1
        } else {
            ts.removeClass('pass-hide');
            ts.addClass('pass-show');
            obj.attr('type', 'password');
            i = 0
        }
    });

    var sign_banner = $(".sign-banner-item");
    var pass_login = $(".input-pass");
    var code_login = $(".input-code-warp");
    sign_banner.click(function() {
        var t = $(this).data('t');
        sign_banner.removeClass("is-active");
        $(this).addClass("is-active");
        if(t == 1) {
            code_login.addClass("yyd-hid");
            pass_login.removeClass("yyd-hid");
            $(".sig_button").data('t', 1);
        } else if(t == 2) {
            code_login.removeClass("yyd-hid");
            pass_login.addClass("yyd-hid");
            $(".sig_button").data('t', 2);
        }
    });

    var sms_send = $(".sms-send");
    sms_send.click(function() {
        var obj = $(this);
        var t = obj.data('t');
        var phone = $(".phone").val();
        var success_msg = $('.success-msg');
        var num = $(".num").val();
        success_msg.addClass('yyd-hid');
        if(!phone) {
            $(".error-msg-m").html("请输入手机号码");
            $(".error-msg-m").removeClass('yyd-hid');
        } else {
            $.ajax({
                type: 'post',
                url: '/user/sms',
                data: {phone: phone, t: t, num: num,smschecked:$("[name='smschecked']").val()},
                dataType: 'json',
                success: function(json) {
                    if(json.status == 1) {
                        $(".verify").val('');
                        $(".dialog-verify").addClass("yyd-hid");
                        $(".error-msg").hide();
                        success_msg.removeClass('yyd-hid');
                        var time = json.time;
                        var interval = setInterval(function () {
                            time--;
                            if (time <= 0) {
                                clearInterval(interval);
                                obj.removeClass('yyd-hid');
                                $(".resend-code").addClass('yyd-hid');
                                $(".resend-code").addClass('yyd-hid').removeClass('disabled').removeAttr('disabled style');
                            } else {
                                $(".resend-code").html('重新发送'+time+'s').removeClass('yyd-hid').attr('disabled', true).css('cursor','not-allowed');
                                obj.addClass('yyd-hid');
                            }
                        }, 1000);
                    } else {
                        if(json.status == -2) {
                            // $(".user-sign-sver").show();
                            //弹出弹窗
                            if($(".dialog-verify").hasClass("yyd-hid"))
                            {
                                $(".dialog-verify").removeClass("yyd-hid");
                                $(".verify").val('');
                                $(".verifyimg").click();
                                $(".error-msg").addClass("yyd-hid");
                                $(".error-msg").css("display",'none');
                            }
                            else
                            {
                                show_err_msg(json.msg);
                            }
                        }
                        else if(json.status == -4)
                        {
                            alert(json.msg);
                        }
                        else if(json.status == -5)
                        {
                            $(".verifyimg").click();
                            show_err_msg(json.msg);
                        }
                        else
                        {
                            show_err_msg(json.msg);
                        }
                    }
                }
            });
        }
    });

    var reg_button = $(".reg_button");
    var sig_button = $(".sig_button");
    reg_button.click(function() {
        var reg_form = $(".reg_form");
        $.ajax({
            type: 'post',
            url: reg_form.attr('action'),
            data: reg_form.serialize(),
            dataType: 'json',
            success: function(json) {
                if(json.status == 1) {
                    window.location.href = json.url;
                } else{
                    /*$(".error-msg").html(json.msg);
                    $(".error-msg").show();*/
                    show_err_msg(json.msg);
                }
            }
        });
        return false;
    });
    sig_button.click(function() {
        var t = $(this).data('t');
        var phone = $(".phone").val();
        var pass = $(".pass").val();
        var code = $(".code").val();
        var sig_form = $(".sig_form");
        var num = $(".num").val();

        $.ajax({
            type: 'post',
            url: '/user/getNonce',
            dataType: 'json',
            success: function(res) {
                if(res.state == 'SUCCESS') {
                    var nonce = res.nonce;
                    $.ajax({
                        type: 'post',
                        url: sig_form.attr('action'),
                        data: {phone: phone, pass: md5(nonce + md5(pass)), code: md5(nonce + md5(code)), type: t, nonce: nonce, num: num,smschecked:$("[name='smschecked']").val()},
                        dataType: 'json',
                        success: function(json) {
                            if(json.status == 1) {
                                window.location.href = json.url;
                            } else {
                                if(json.status == -2) {
                                    //弹出弹窗
                                    if($(".dialog-verify").hasClass("yyd-hid"))
                                    {
                                        $(".dialog-verify").removeClass("yyd-hid");
                                        $(".verify").val('');
                                        $(".verifyimg").click();
                                        $(".error-msg").addClass("yyd-hid");
                                        $(".error-msg").css("display",'none');
                                    }
                                    else
                                    {
                                        show_err_msg(json.msg);
                                    }
                                }
                                else if(json.status == -4)
                                {
                                    alert(json.msg);
                                }
                                else if(json.status == -5)
                                {
                                    $(".verifyimg").click();
                                    show_err_msg(json.msg);
                                }
                                else if(json.status== -3)
                                {
                                    //隐藏弹窗
                                    if(!$(".dialog-verify").hasClass("yyd-hid")) {
                                        $(".dialog-verify").addClass("yyd-hid");
                                        $(".verify").val('');
                                        $(".num").val('');
                                    }
                                    show_err_msg(json.msg);
                                }
                                else
                                {
                                    show_err_msg(json.msg);
                                }
                            }
                        }
                    });
                } else {
                    alert('登录请求失败，请重试');
                }

            }
        });
        return false;
    });

    var step1_button = $(".step1_button");
    var step2_button = $(".step2_button");
    step1_button.click(function() {
        var step1_form = $(".step1_form");
        $.ajax({
            type: 'post',
            url: step1_form.attr('action'),
            data: step1_form.serialize(),
            dataType: 'json',
            success: function(json) {
                if(json.status == 1) {
                    window.location.href = json.url;
                } else {
                    // $(".error-msg").html(json.msg);
                    // $(".error-msg").show();
                    show_err_msg(json.msg);
                }
            }
        });
        return false;
    });


    var item_control_squ = $(".item-control-squ");
    item_control_squ.click(function() {
        var t = $(this).data('type');
        var p = $(this).data('p');
        if(p) {
            $('.p-select').addClass('yyd-hid');
            $("."+p).removeClass('yyd-hid');
        }
        $(this).parent().find(".item-control-squ").removeClass("is-active");
        $(this).addClass("is-active");
        $(this).parent().find(".cs-hval").val(t);
    });

    var banner_login = $(".banner-login");
    var login_s_div = $(".banner-login-status");
    banner_login.hover(function() {
        login_s_div.show();
    }, function() {
        login_s_div.hide();
    });

    var user_gout = $(".user-gout");
    user_gout.click(function() {
        $.ajax({
            type: 'post',
            url: '/user/signout',
            dataType: 'json',
            success: function(json) {
                window.location.reload();
            }
        });
        return false;
    });

    var ajax_form = $(".ajax_form");
    ajax_form.find("input[type='submit']").click(function() {
        var dg_img = $(".dg-img");
        var dg_title = $(".dg-title");
        var dg_desc = $(".dg-desc");
        var mask = $(".mask");
        var mask_dialog = $(".mask-dialog");
        var m_c_icon = $(".rt-icon-link");
        var m_c_btn = $(".mask-button-close");
        $.ajax({
            type: 'post',
            url: ajax_form.attr('action'),
            data: ajax_form.serialize(),
            dataType: 'json',
            success: function(json) {
                if(json.url) {
                    window.location.href = json.url;
                } else {
                    if(json.status == 1) {
                        dg_img.removeClass('mask-dg-img-warning').removeClass('mask-dg-img-notice').addClass('mask-dg-img-success');
                        dg_title.removeClass('mask-dg-tilte-notice').addClass('mask-dg-tilte-success');
                        m_c_icon.click(refhdg);
                        m_c_btn.click(refhdg);
                    } else {
                        dg_img.removeClass('mask-dg-img-success').removeClass('mask-dg-img-notice').addClass('mask-dg-img-warning');
                        dg_title.removeClass('mask-dg-tilte-success').addClass('mask-dg-tilte-notice');
                        m_c_icon.click(closedg);
                        m_c_btn.click(closedg);
                    }
                    dg_title.html(json.msg_title);
                    dg_desc.html(json.msg);
                    mask.show();
                    mask_dialog.show();
                }

            }
        });
        return false;
    });

    $(".yyd-agreement").click(showAgreement);
    $(".close-btn").click(closeAgreement);
    $(".agree-btn").click(closeAgreement);



    var change_list = $(".change-list");
    change_list.click(function() {
        let obj = $(this);
        let url = obj.data('url');
        $.ajax({
            type: 'post',
            url: url,
            data: {ranum: Math.random()},
            dataType: 'html',
            success: function(html) {
                obj.parent().parent().find('.items-content-list').html(html);
            }
        });
    });

    //点击回车触发提交弹窗
    $(".open-addorder-form-input").keydown(function(event){
        var _this=$(this);
        if(event.keyCode==13)
        {
            _this.next(".open-addorder-form").click();
        }
    });

    //打开提交弹窗
    $(".open-addorder-form").click(function(){
        var _this=$(this);
        var country=_this.data("country");
        var stid=_this.data("stid");
        var usage=_this.data("usage");
        var formtype=_this.data("formtype");
        var fromitem=_this.data("fromitem");
        var isshowcompanyname=_this.data("isshowcompanyname");
        var key=_this.data("key");
        var data={country:country,stid:stid,usage:usage,formtype:formtype,fromitem:fromitem,isshowcompanyname:isshowcompanyname};
        if(key=="brand_name")
        {
            data["brand_name"]=_this.prev("[name='keyword']").val();
        }
        if(key=="company_name")
        {
            data.company_name=_this.prev("[name='keyword']").val();
        }
        $.ajax({
            type: 'post',
            url: "/order/addorder",
            data:data,
            dataType: 'html',
            success: function(html) {
                $(".addorder-form").removeClass("display-none");

                //禁止网页滚动
                $("body").css("overflow","hidden");

                //计算网页高度
                var pageheight=document.body.clientHeight ;
                var contentheight=$(".addorder-form-content").height();
                var margin_top=(Number(pageheight)-Number(contentheight))/2;
                $(".addorder-form-content").css("margin-top",margin_top);
                $(".addorder-form-content").html(html);
                dropdownlisthandler();//处理下拉框
            }
        });
    });

    $("yyd-tardemark-tabs .tardemark-tab1-box .tab1-box-item").hover(function(){
        var _this=$(this);
        _this.find(".item-button").css("height","36px");
        _this.find(".item-button").css("item-button-link","36px");
        _this.css("back");
    });


    //专家板块交互
    // var timeout;
    // $(".expert-list-item").hover(function(){
    //     var _this=$(this);
    //     timeout=setTimeout(function(){
    //
    //     $(".expert-list-item").each(function(){
    //         var item=$(this);
    //         if(item.hasClass("show"))
    //         {
    //             item.removeClass("show");
    //             item.css("width","120px");
    //             var content=item.find(".expert-list-item-content");
    //             if(content.data("margin_left")!=null&&content.data("margin_left")!="")
    //             {
    //                 content.css("margin-left",content.data("margin_left"));
    //             }
    //         }
    //     });
    //     _this.addClass("show");
    //     _this.css("width","720px");
    //     _this.find(".expert-list-item-content").css("margin-left","0px");
    //
    //     },200);
    // });

    var timer;
    $(".expert-list-item").on({
        "mouseenter":function(){
            var _this=$(this);
            clearTimeout(timer);
            timer=setTimeout(function(){
                //这里触发hover事件
                $(".expert-list-item").each(function(){
                    var item=$(this);
                    if(item.hasClass("show"))
                    {
                        item.removeClass("show");
                        item.css("width","120px");
                        var content=item.find(".expert-list-item-content");
                        if(content.data("margin_left")!=null&&content.data("margin_left")!="")
                        {

                            content.css("margin-left",content.data("margin_left"));
                        }
                    }
                });
                _this.addClass("show");
                _this.css("width","720px");
                _this.find(".expert-list-item-content").css("margin-left","0px");

            },200);
        },
        "mouseleave":function(){
            clearTimeout(timer);
        }
    });

    //专家板块，服务照片弹出层
    var swiper_expert;
    $(".expert-list-item-service-desc-img").click(function(){
        $(".expert-modal").removeClass("display-none");
        //禁止网页滚动
        $("body").css("overflow","hidden");
        var _this=$(this);
        var id=_this.data("id");
        var index=_this.data("index");
        var expertdocument=$("#expertdocument-"+id).val();
        if(expertdocument!=null&&expertdocument!="")
        {
            expertdocument=$.parseJSON(expertdocument);
        }
        var html='<div class="swiper-container swiper-container-expert">\n' +
            '            <div class="swiper-wrapper">';
        for(var i=0;i<expertdocument.length;i++)
        {
            var item=expertdocument[i];
            html+='<div class="swiper-slide" data-index="'+i+'">\n' +
                '                    <div>\n' +
                '                        <img src="'+item.url+'" style="max-width: calc(100% - 100px);max-height: calc(90% - 100px);"/>\n' +
                '                        <br/>\n<div style="margin-top: 20px;\n' +
                '    text-shadow: 1px 1px 5px black;\n' +
                '    color: white;\n' +
                '    font-size: 20px;\n' +
                '    font-weight: 500;">' +item.desc +'</div>'+
                '                    </div>\n' +
                '                </div>';
        }
        html+='</div><div class="prev-expert"></div>\n' +
            '            <div class="next-expert"></div></div>';
        $(".expert-modal-content").html(html);
        swiper_expert = new Swiper('.swiper-container-expert', {
            navigation: {
                nextEl: '.next-expert',
                prevEl: '.prev-expert',
            },
            loop: true, // 循环模式选项
        });
        swiper_expert.slideTo(index+1);
    });

    //攻略相关
    var strategy_item_width=310;//单个攻略宽度
    var strategy_item_count=4;//攻略总个数
    //攻略上一页
    $(".strategy-box-prev a").click(function(){
        var _this=$(this);
        _this.attr("disabled","disabled");
        $(".strategy-box-next a").css("display","block");
        var margin_left=Number($(".strategy-list").css("margin-left").replace("px",""));
        if(margin_left<0)
        {
            $(".strategy-list").css("margin-left",(margin_left+strategy_item_width)+"px");
            if(margin_left+strategy_item_width==0)
            {
                $(".strategy-box-prev a").css("display","none");
            }
        }
        _this.removeAttr("disabled");
    });
    //攻略下一页
    $(".strategy-box-next a").click(function(){
        var _this=$(this);
        _this.attr("disabled","disabled");
        $(".strategy-box-prev a").css("display","block");
        var margin_left=Number($(".strategy-list").css("margin-left").replace("px",""));
        if(margin_left>-strategy_item_width*(strategy_item_count-3))
        {
            $(".strategy-list").css("margin-left",(margin_left-strategy_item_width)+"px");
            if(margin_left-strategy_item_width==-strategy_item_width*(strategy_item_count-3))
            {
                $(".strategy-box-next a").css("display","none");
            }
        }
        _this.removeAttr("disabled");
    });
    //单击攻略卡片，先记录事件再进行跳转
    $(".strategy-item").click(function(){
        var _this=$(this);
        var seo_word=_this.data("seo_word");
        var href=_this.data("href");
        var countrysimple=_this.data("simplecountry");
        //记录事件
        handleOutboundLinkClicks("COREG_EXP",countrysimple,"EXPARTICLE");
        window.open(href+'?seo_word='+seo_word);
    });

    //点击遮罩层关闭弹窗
    $(".dialog-verify .dialog-mask-bg").click(function(){
        $(".dialog-verify").addClass("yyd-hid");
        $(".verify").val('');
        $(".num").val('');
    });
});

//点击遮罩层关闭弹窗
function dialoghide(obj)
{
    $(".dialog-verify").addClass("yyd-hid");
    $(".num").val('');
    $(".verify").val('');
    $(".error-msg").addClass("yyd-hid");
    $(".error-msg").css("display",'none');
}

/**
 * 错误提示消息
 * m - 手机号码提示
 * p - 密码提示
 * c - 动态码提示
 * d - 滑块提示
 */
function show_err_msg(msg) {
    $(".success-msg").addClass('yyd-hid');
    $(".error-msg").hide();
    if(msg!=null&&msg.indexOf("-yyd-") != -1) {
        var msg_arr = msg.split("-yyd-");
        var msg_content = msg_arr[0];
        var msg_position = msg_arr[1];
        $(".error-msg-"+msg_position).html(msg_content);
        $(".error-msg-"+msg_position).show();
    } else {
        $(".error-msg").html(msg);
        $(".error-msg").show();
    }

}

function closedg() {
    $(".mask").hide();
    $(".mask-dialog").hide();
}
function refhdg() {
    window.location.reload();
}
function showAgreement() {
    $(".dialog-mask").removeClass("yyd-hid");
}
function closeAgreement() {
    $(".dialog-mask").addClass("yyd-hid");
}

//处理下拉框
function dropdownlisthandler(){
    //处理下拉框
    var selects=$(".select-control");

    if(selects.length>0)
    {
        for(var i=0;i<selects.length;i++)
        {
            //判断如果已经处理，则不处理
            if($(selects[i]).css("display")=="none")
            {
                return false;
            }
            $(selects[i]).css("display","none");
            var placeholder=$.trim($($(selects[i]).find("option")[0]).html());
            var htm=$.trim($(selects[i]).find("option:selected").html());
            if(placeholder==htm)
            {
                htm="";
            }
            var inputs='<input readonly="readonly" class="input-control input-control-selectuse" type="tex" value="'+htm+'" placeholder="'+placeholder+'">';
            $(selects[i]).parent().append($(inputs));
            var width=$(selects[i]).parent().width();
            var options='<div class="select-options yyd-hid" style="width: '+width+';"><ul>';
            var oldoptions=$(selects[i]).find("option");
            options+="<li class='li-placeholder' data-val=''>"+placeholder+"</li>";
            for(var a=1;a<oldoptions.length;a++)
            {
                var selected="";
                if($(oldoptions[a]).attr("selected")!=undefined)
                {
                    selected="select";
                }
                options+="<li class='"+selected+"' data-val='"+$(oldoptions[a]).attr("value")+"'>"+$(oldoptions[a]).html()+"</li>";
            }
            options+='</ul></div>';
            $(selects[i]).parent().append(options);
        }
    }
    $(document).click(function(e){//所有点击事件，都隐藏下拉框
        $('.select-options').addClass('yyd-hid');
        $(".addorder-form-steps-range").css("height","214px");
    });

    //点击关闭弹窗按钮进行关闭
    $(".btn-close").click(function(){
        $(".addorder-form").addClass("display-none");
        $(".addorder-form .addorder-form-content").html("");
        $("body").css("overflow","auto");
    });

    $(".input-control-selectuse").click(function(){
        var _this=$(this);
        if(_this.next().hasClass("yyd-hid"))
        {
            $(".addorder-form-steps-range").css("height","428px");
            _this.next().removeClass("yyd-hid");
        }
        else
        {
            $(".addorder-form-steps-range").css("height","214px");
            _this.next().addClass("yyd-hid");
        }
        event.stopPropagation(); //不再派发事件

    });
    $(".select-options li").click(function(){
        var _this=$(this);
        var val=_this.data("val");
        _this.parent().parent().prev().prev().val(val);
        _this.parent().parent().prev().val(_this.html());
        if(val=='')
        {
            _this.parent().parent().prev().val('');
        }
        _this.parent().parent().addClass("yyd-hid");
        $(".select-options li").removeClass("select");
        _this.addClass("select");
    });
}

//移除loading效果
function completeLoading() {
    document.getElementById("loadingDiv").remove();
}
//展示loading效果
function showLoading()
{
    //在页面未加载完毕之前显示的loading Html自定义内容
    var _LoadingHtml = '<div id="loadingDiv" style="display: none; ">' +
        '<div id="over" style="position: fixed;top: 0;left: 0; width: 100%;height: 100%; background-color: #f5f5f5;opacity:0.5;z-index: 20000;">' +
        '<div id="layout" style="position: absolute;top: 40%; left: 40%;width: 20%; height: 20%; text-align:center;">' +
        '<img style="margin-top: 25%;" src="/assets/img/time.gif" /></div></div></div>';
    //呈现loading效果
    $("body").append(_LoadingHtml);
    // document.getElementById("loadingDiv").style.display="block";
}

//图形验证码弹窗中的“验证”按钮单击事件
function smsbtnfunction(){
    $(".num").val($(".verify").val());
    var t=$("[name='t']").val();
    if(t==5)//如果是提交订单弹窗中的操作
    {
        if($(".addorder-form-steps").css("margin-left")!="-900px")
        {
            $(".addorder-form-content .addorder-sms").click();
        }
        else
        {
            $(".addorder-form-content .resend-code").removeAttr("disabled");
            $(".addorder-form-content .resend-code").click();
        }
    }
    else
    {
        if($(".sig_button").data("t")=="1") {
            $(".sig_button").click();
        }
        else
        {
            $(".sms-send").click();
        }
    }
}


