
// 初始化函数
function init () {
    bindEvend ();
}
init();


// 事件绑定函数
function bindEvend () {

    // 急速预约
    $('.appointment-location').click( function () {
        $('.bs-example-modal-lg').modal('show');
    })
    $('.appointment-btn').click( function () {

        var name = $(this).prev().val();
        var phoneNum = $(this).prev().prev().val();
    })
}