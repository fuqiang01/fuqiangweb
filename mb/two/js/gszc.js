
// 初始化
function init () {
    bindEvent();
}
init();

// 事件绑定函数
function bindEvent () {

    // 急速注册地址按钮
    $( '.channel-position').click( function () {
        $('.bs-example-modal-lg').modal('show');
    })
    // 急速注册马上联系我们
    $(' .channel-btn > span').click( function () {
        
        // 有无注册地址单选框
        var channelPosition = $( 'input[name=channel-position]:checked').val();
        //企业名称
        var channelEnterprise = $( '#channel-enterprise').val();
        //是否核名
        var channelVerify = $( 'input[name=channel-verify]:checked').val();
        //称呼
        var channelName = $( '#channel-name').val();
        //联系方式
        var channelPhone = $( '#channel-phone').val();

        console.log('有无注册地址:' + channelPosition);
        console.log('企业名称:' + channelEnterprise);
        console.log('是否核名:' + channelVerify);
        console.log('称呼:' + channelName);
        console.log('联系方式:' + channelPhone);
    })

    // 急速注册右侧区域
    $('.channelR-top span').click(function () {

        var activeId = $('.channelR-top span.active').attr('id');
        $('.' + activeId).hide();
        $('.channelR-top span.active').removeClass('active');
        $(this).addClass('active');
        $('.' + this.id).show();
    })

    // 工商热门服务
    $('.hInfoClick ul').on( 'click', 'li', function () {

        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
    })
    
    // 注册公司流程
    $('.process-title ul').on('click', 'li', function () {

        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        $('.process-content .active').removeClass('active');
        $('.' + this.id).addClass('active');
    })
}