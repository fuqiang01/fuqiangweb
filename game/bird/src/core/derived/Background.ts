import Spirit from "../base/Spirit";
import { BG_WIDTH, BG_HEIGHT, BG_OFFSET, MOVE_DISPLACEMENT, WINDOW_HEIGHT } from "../config";

export default class Background extends Spirit{
    // 重写绘制函数，因为绘制一次宽度不够需要绘制两次
    show() {
        this.ctx?.drawImage(this.element, this.point.x, this.point.y, this.width, this.height);
        this.ctx?.drawImage(this.element, this.point.x + this.width - BG_OFFSET, this.point.y, this.width, this.height);
    }
    move(){
        let x = this.point.x - MOVE_DISPLACEMENT;
        if(x <= -this.width){
            const tempNum = -x - this.width;
            x = this.width - BG_OFFSET - tempNum;
        }
        this.point = {
            x,
            y: this.point.y
        }
        this.show();
    }
    constructor(
        protected ctx: CanvasRenderingContext2D | null,
        protected element: CanvasImageSource
    ){
        super(ctx,{
            x: 0,
            y: 0
        }, element, BG_WIDTH, WINDOW_HEIGHT);
    }
}