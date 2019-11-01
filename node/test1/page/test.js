function A() {
    var a = 1;
    B(function (){
        console.log(a)
    })
}


function B( fun){
    var a = 2;
    fun();
}

A();