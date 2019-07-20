var regPhone = /^(13[0-9]{9})|(18[0-9]{9})|(14[0-9]{9})|(17[0-9]{9})|(15[0-9]{9})$/;
var regName = /^\D{2,6}$/;
var newUserInformationAjax = throttleFun(userInformationAjax, 30000);
var sendUrl = 'https://smapp.shyccw.com/tel';

//用户信息提交函数
function userInformationAjax(data) {
    $.ajax({
        url: sendUrl,
        type: "POST",
        data: data,
        dataType: "json",
        success: function(res) {
            console.log(res);
            alert("提交成功,我们将尽快联系您");
        },
        error: function(err) {
            console.log(err);
            alert("请勿重复提交");
        }
    });
}

//节流函数
function throttleFun(fun, time) {
    var lastDate = 0;
    return function() {
        var nowDate = new Date().getTime();
        if (nowDate - lastDate > time) {
            fun.apply(this, arguments);
            lastDate = nowDate;
        } else {
            alert("提交成功,我们将尽快联系您(*^__^*)");
        }
    }
}

//提交数据函数
function sendUserInfo(dom) {

    var phoneNum = $(dom)
        .parents('.submit-wrapper')
        .find('input.phoneNum')
        .val() || "";

    var name = $(dom)
        .parents('.submit-wrapper')
        .find('input.name')
        .val() || "";

    var companyName = $(dom)
        .parents('.submit-wrapper')
        .find('input.company-name')
        .val() || "";

    var cict = $('.position').text() || "";
    var href = location.href;

    if (regPhone.test(phoneNum) && regName.test(name)) {

        //关闭错误信息
        $(dom)
            .parents('.submit-wrapper')
            .find('input.phoneNum')
            .css('color', '#777')
            .parents('.phoneNumBorder')
            .css('borderColor', '#ccc')

        $(dom)
            .parents('.submit-wrapper')
            .find('input.name')
            .css('color', '#777')
            .parents('.phoneNumBorder')
            .css('borderColor', '#ccc')

        var data = [
            { "name": "guestcontent", "value": cict },
            { "name": "budget", "value": "企业名称:" + companyName },
            { "name": "recontent", "value": href },
            { "name": "xiazainame", "value": name },
            { "name": "xiazaitel", "value": phoneNum }
        ];

        newUserInformationAjax(data);

    } else {

        //显示错误信息
        if (!regPhone.test(phoneNum)) {
            $(dom)
                .parents('.submit-wrapper')
                .find('input.phoneNum')
                .css('color', 'red')
                .val('请输入正确的手机号码')
                .parents('.phoneNumBorder')
                .css('borderColor', 'red')
        }
        if (!regName.test(name)) {
            $(dom)
                .parents('.submit-wrapper')
                .find('input.name')
                .css('color', 'red')
                .val('请输入2~6位字符')
                .parents('.nameBorder')
                .css('borderColor', 'red')

        }
    }
}


$('.name,.phoneNum').on('focus', function() {
    $(this)
        .css('color', '#777')
        .val('')
        .parents('.nameBorder,.phoneNumBorder')
        .css('borderColor', '#ccc')
})

/*
字段
$model->username = $ddd['xiazainame'] ;
$model->tel = $ddd['xiazaitel'] ;
$model->guestcontent = $ddd['guestcontent'] ;//来源城市
$model->budget = $ddd['budget'] ; //预算
$model->recontent = $ddd['recontent'] ; //落地ID
*/