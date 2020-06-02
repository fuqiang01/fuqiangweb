$.fn.extend( {
    setActive: function () {
        $(this)
            .addClass('active')
            .siblings('.active')
            .removeClass('active')
    }
})