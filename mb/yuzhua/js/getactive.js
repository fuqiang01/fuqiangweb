$.fn.extend( {
    getActive: function () {
        $(this)
            .addClass('active')
            .siblings('.active')
            .removeClass('active')
    }
})