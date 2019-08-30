$('.content .left dt').on('click', function () {

    this.rotateNum = this.rotateNum ? 0 : 90;

    $(this)
        .find('span')
        .css('transform', 'rotate(' + this.rotateNum + 'deg)')
        .end()
        .nextUntil('dt')
        .slideToggle();
})