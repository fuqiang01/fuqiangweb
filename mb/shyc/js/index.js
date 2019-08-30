$('.zhuce .title li,.daili-wrapper .title li').hover( function () {
    $(this).getActive();
    $('.' + this.id).getActive();
}, function () {})