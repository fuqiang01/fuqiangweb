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