$('.gmwd').find('dl').on('click', 'dt', function () {
    if ( !this.myState ) {
        $(this)
            .css('backgroundImage','url("./img/qaless.png")')
            .nextUntil('dt')
            .slideDown()
        this.myState = true;
    } else {
        $(this)
            .css('backgroundImage','url("../img/qadd.png")')
            .nextUntil('dt')
            .slideUp();
        this.myState = false;
    }
})

$('.list-title').on('click', 'li', function () {
    $(this).addClass('active').siblings().removeClass('active');
    $('.' + this.id).fadeIn().siblings().css('display','none');
})