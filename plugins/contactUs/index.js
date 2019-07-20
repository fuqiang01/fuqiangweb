var showContactUsPopover = (function() {

    var $Wrapper = $('<div/>').css({
        backgroundColor: 'rgba(0, 0, 0, .3)',
        position: 'fixed',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        display: 'none'
    })

    $Wrapper.on('click', function(e) {
        if (e.target === this) {
            $(this).fadeOut();
        }
        return false;
    })

    var $Content = $('<div/>').css({
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#fff',
        boxShadow: '0 0 10px rgba(0, 0, 0, .3)',
        padding: '30px 50px',
        minWidth: '235px'
    })

    var $ContentBg = $('<div/>').css({
        position: 'absolute',
        width: '200px',
        height: '150px',
        backgroundImage: 'url("./bg.png")',
        backgroundSize: '100% 100%',
        top: '91px',
        left: '305px'
    })

    var $ShutBtn = $('<div/>')
        .text('x')
        .css({
            position: 'absolute',
            border: '1px solid #ccc',
            width: '20px',
            height: '20px',
            textAlign: 'center',
            lineHeight: '15px',
            color: '#ccc',
            right: '10px',
            top: '10px',
            cursor: 'pointer'
        })
    $ShutBtn.hover(function() {
        $(this).css({
            backgroundColor: 'red',
            borderColor: 'red',
            color: '#fff'
        })
    })
    $ShutBtn.on('click', function(e) {
        $Wrapper.fadeOut();
        return false;
    })

    var $Ul = $('<ul>\
                    <li>24小时联系电话:123123123123123</li>\
                    <li>留下您的联系方式我们将尽快联系您</li>\
                    <li>\
                        <label for="name">称呼:</label>\
                        <input type="text" id="name" placeholder="请输入您的称呼,如陈先生" autocomplete="off">\
                    </li>\
                    <li>\
                        <label for="phoneNum">电话:</label>\
                        <input type="text" id="phoneNum" placeholder="请输入您的手机号码" autocomplete="off">\
                    </li>\
                    <li class="submit-btn">提交</li>\
                </ul>');

    $Ul
        .css({ listStyle: 'none', padding: '0' })
        .find('li')
        .css({ padding: '10px 0', textAlign: 'center' })
        .filter('.submit-btn')
        .css({ backgroundColor: 'rgb(0, 160, 234)', color: '#fff' })
        .end()
        .find('input')
        .css({ border: '1px solid #ccc', padding: '10px' })

    $ContentBg
        .add($ShutBtn)
        .add($Ul)
        .appendTo($Content);
    $Wrapper
        .append($Content)
        .appendTo('body');

    return function() {

        $Wrapper.fadeToggle();

    }

})();

$.extend({
    showContactUsPopover
})