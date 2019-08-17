var arr = ['降低经营成本','掌握资金流向','更好管理库存','合理避免税负','没有坏账损失','实时查看营收'];
var len = arr.length;
var n = 1;
var i = 0;
var timp = null;

changeText();

function changeText() {
    timp = setInterval(function () {

        $('.banner-title-text').text( arr[i].slice(0,n) );
        
        if ( n <= arr[i].length ){
            n++;
        } else {
            i = i < len - 1 ? i + 1 : 0;
            n = 1;
            clearInterval(timp);
            setTimeout( function () {
                changeText();
            },500)
        }
    }, 200);
}






