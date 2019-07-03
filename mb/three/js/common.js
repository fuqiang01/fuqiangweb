
// 初始化函数
function init () {
    bindEvent ();
}
init();

//事件绑定函数
function bindEvent () {

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