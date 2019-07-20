var regPhone = /^(13[0-9]{9})|(18[0-9]{9})|(14[0-9]{9})|(17[0-9]{9})|(15[0-9]{9})$/;
var regName = /^\D{2,6}$/;
var newUserInformationAjax = throttleFun(userInformationAjax, 30000);


//用户信息提交函数
function userInformationAjax(url, data) {
    $.ajax({
        url: url,
        type: "POST",
        data: data,
        dataType: "json",
        success: function (res) {
            console.log(res);
            alert("提交成功,我们将尽快联系您");
        },
        error: function (err) {
            console.log(err);
            alert("请勿重复提交");
        }
    });
}

//节流函数
function throttleFun(fun, time) {
    var lastDate = 0;
    return function () {
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

        //关闭弹窗
        $(dom)
            .parents('.submit-wrapper')
            .find('input.phoneNum')
            .popover("destroy");

        $(dom)
            .parents('.submit-wrapper')
            .find('input.name')
            .popover("destroy");

        var data = [
            {"name": "guestcontent", "value": cict},
            {"name": "budget", "value": "企业名称:" + companyName},
            {"name": "recontent", "value": href},
            {"name": "xiazainame", "value": name},
            {"name": "xiazaitel", "value": phoneNum}];


        return function (url) {
            newUserInformationAjax(url, data);
        }
    } else {

        //显示弹窗
        if (!regPhone.test(phoneNum)) {
            $(dom)
                .parents('.submit-wrapper')
                .find('input.phoneNum')
                .popover("show");
        }
        if (!regName.test(name)) {
            $(dom)
                .parents('.submit-wrapper')
                .find('input.name')
                .popover("show");

        }
    }
}


/*
字段
$model->username = $ddd['xiazainame'] ;
$model->tel = $ddd['xiazaitel'] ;
$model->guestcontent = $ddd['guestcontent'] ;//来源城市
$model->budget = $ddd['budget'] ; //预算
$model->recontent = $ddd['recontent'] ; //落地ID
*/
