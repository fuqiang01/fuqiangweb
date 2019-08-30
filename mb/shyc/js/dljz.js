$('.server-info .left li').hover( function () {
    $(this).add('.' + this.id).getActive();
}, function() {})