var pageInit = function (arr) {

    var path = location.pathname;
    var newInitLink, newInitScript, newInitActive;

    for ( var i = 0; i < arr.length; i++) {

        if ( path === arr[i][0] ) {
            newInitLink = initLink( arr[i][1] );
            newInitActive = initActive( arr[i][3] );
            newInitScript = initScript( arr[i][2] );
            return {
                newInitLink, newInitScript, newInitActive
            };
        }
    }

    function initLink ( path) {
        var path = path;
        return function () {
            var oLink = document.getElementsByClassName('myLink')[0];
            oLink.href = path;
        }
    }
    function initActive ( index) {
        var index = index;
        return function () {
            var navList = document.getElementsByClassName('nav-item');
            navList[ index ].classList.add('active');
        }
    }
    function initScript ( path) {
        var path = path;
        return function () {
            var oScript = document.getElementsByClassName('myScript')[0];
            oScript.src = path;
        }
    }

};