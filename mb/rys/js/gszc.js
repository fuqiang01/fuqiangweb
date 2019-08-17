$('.company .left li').hover( function () {
    $(this)
        .add('.' + this.id)
        .addClass('active')
        .siblings('.active')
        .removeClass('active')

},function() {})