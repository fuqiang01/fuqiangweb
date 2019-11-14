function CodeCanvas(dom, len) {
    var self = this;
    this.canvas = document.querySelector(dom);
    this.ctx = this.canvas.getContext('2d');
    this.colorArr = ['#D2691E','	#FF8C00','#808000','#006400','#008B8B','#5F9EA0','#000080','#4B0082'];
    this.codeLen = len || 4;
    this.interferenceLen = 20;
    this.codeText = '';
    this.stroke();
    this.canvas.onclick = function () {
        self.stroke();
    }
}

CodeCanvas.prototype.createCode = function () { //绘制验证码
    this.codeText = '';
    for ( var i = 0; i < this.codeLen; i++) {
        var tempText = myRandom (1, 10);
        this.codeText += tempText;
        this.ctx.fillStyle = this.colorArr[myRandom(0,8)];
        this.ctx.font = '20px sans-serif';
        this.ctx.fillText( tempText, 15 * i + 3, myRandom(16,29));
    }
}

CodeCanvas.prototype.createInterference = function () { //绘制干扰线
    for ( var i = 0; i < this.interferenceLen; i++) {
        this.ctx.strokeStyle = this.colorArr[myRandom(0,8)];
        this.ctx.beginPath();
        this.ctx.moveTo( myRandom(0,  this.canvas.width + 30), myRandom( 0, this.canvas.height + 30) );
        this.ctx.lineTo( myRandom(0,  this.canvas.width + 30), myRandom( 0, this.canvas.height + 30) );
        this.ctx.lineWidth = 0.5;
        this.ctx.closePath();
        this.ctx.stroke();
    }
}

CodeCanvas.prototype.stroke = function () {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.createCode();
    this.createInterference();
}

function myRandom ( min, max) {
    return Math.floor( Math.random() * ( max - min ) + min );
}




