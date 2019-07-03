


// 初始化函数
function init () {
    bindEvent ();
}
init();

//事件绑定函数
function bindEvent () {

    // header区域地址切换
    $('.bs-example-modal-lg .row').on('click', 'div', function () {

        var nowAddress = $(this).text();
        var $P = $('.position');
        var $H = $('.bs-example-modal-lg .modal-title');
        $P.text( nowAddress);
        $H.text( nowAddress);
        //判断是否有急速预约(主页的)
        if ( $( '.appointment')) {
            $('.appointment-location').text( nowAddress);
        }
        // 判断是否有快速注册通道的(公司注册页面的)
        if ( $( '.channel-position')) {
            $( '.channel-position').text( nowAddress);
        }
        //弹出框隐藏
        $('.bs-example-modal-lg').modal('hide');
    })

    // 全部服务按钮展开，隐藏
    $('.all-service .all-btn').click( function () {
        $('.all-service-list').slideToggle();
    })
    
    // 全部服务列表hover事件
    $('.all-service-list > li').hover( function () {
        $('.' + this.id).show();
    }, function () {
        $('.' + this.id).hide();
    })

    $('.service-list-hover').hover( function () {
        $(this).show();
    }, function () {
        $(this).hide();
    })

    // 侧边栏弹框
    $('.rightBar li').click( function () {
        if ( this.id ) {
            $( '.' + this.id).fadeToggle(); 
        }
    })
    // 侧边栏返回顶部
    $('.goTop').click( function () {
        $('html,body').animate( { scrollTop : 0 }, 500);
    })
}