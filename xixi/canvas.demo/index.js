//对象函数: 画布的id,宽,高,要渲染的原点的个数
function MyCanvas( id, w, h, num){
    this.canvas = document.getElementById(id);
    this.canvas.width = w;
    this.canvas.height = h;
    this.width = w;
    this.height = h;
    this.num = num;
    this.ctx = this.canvas.getContext('2d');  
    this.ctx.strokeStyle = 'rgba(0,0,0,0.1)';
    this.ctx.strokeWidth = 1;
    this.ctx.fillStyle = 'rgba(0,0,0,0.09)';
    this.init();//初始化
}

//初始化
MyCanvas.prototype.init = function () {
    var self = this;
    this.initCanvasArr();//初始化数组
    setInterval( function () { //开始画
        self.draw();
    }, 16)
}

// 画圆
MyCanvas.prototype.drawArc = function ( x, y, r) {
    this.ctx.beginPath();
    this.ctx.arc(x , y , r , 0 , Math.PI * 2 , 0 );
    this.ctx.fill();
    this.ctx.stroke();
}

//画线
MyCanvas.prototype.drawLine = function ( beginX, beginY, toX, toY, opacity) {
    this.ctx.beginPath();
    this.ctx.moveTo( beginX, beginY);
    this.ctx.lineTo( toX, toY); 
    this.ctx.strokeStyle = 'rgba(0,0,0,' + opacity + ')';
    this.ctx.stroke();
}

//绘制圆的坐标,半径的数组
MyCanvas.prototype.initCanvasArr = function () {
    this.canvasArr = [];
    for( var i = 0; i < this.num; i++) {
        this.canvasArr.push({
            x: myRandom(0,this.width),//圆心x坐标
            y: myRandom(0,this.height),//圆心y坐标
            r: myRandom(2,8),//圆半径
            moveX: myRandom(-0.5,0.5),//每帧x轴方向运动的距离
            moveY: myRandom(-0.5,0.5) //每帧y轴方向运动的距离
        })
    }
}

//开始绘制
MyCanvas.prototype.draw = function () {
    this.ctx.clearRect( 0, 0, this.width, this.height);//清空画布
    this.move();//重新修改原点坐标值
    var arr = this.canvasArr;
    for ( var i = 0; i < this.num; i++ ) {
        this.drawArc( arr[i].x, arr[i].y, arr[i].r);//画圆
        for ( var j = 0; j < this.num; j++ ) {
            //利用勾股定律算出线段长度
            var a = Math.pow( ( arr[j].x - arr[i].x ) , 2);
            var b = Math.pow( ( arr[j].y - arr[i].y ) , 2);
            var c = Math.sqrt( Math.abs(a) + Math.abs(b) );//绘制的线段长度
            var cof = c === 100 ? 1 : 1 / Math.abs( c - 100 );//透明度参考系数
            var opacity = cof > 0.03 ? 0.03 : cof;//线段越长透明度越低
            this.drawLine(  arr[i].x, arr[i].y, arr[j].x, arr[j].y, opacity);//画线
        }
    }
}

//运动函数,重新修改原点坐标值
MyCanvas.prototype.move = function () {
    var self = this;
    this.canvasArr.forEach( function ( ele) {
        ele.x += ele.moveX;
        ele.y += ele.moveY;
        if ( ele.x < 0) {
            ele.x = self.width;
        }
        if ( ele.x > self.width ) {
            ele.x = 0;
        }
        if (ele.y < 0) {
            ele.y = self.height;
        }
        if ( ele.y > self.height ) {
            ele.y = 0;
        }
    })
}

// 随机数函数
function myRandom( min, max){
    return Math.random() * ( max - min ) + min;
}
