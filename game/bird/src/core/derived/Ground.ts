import Spirit from "../base/Spirit";
import { WINDOW_HEIGHT, GROUND_HEIGHT, GROUND_WIDTH } from "../config";

export default class Ground extends Spirit{
     // 重写绘制函数，因为绘制一次宽度不够需要绘制两次
    show() {
        this.ctx?.drawImage(this.element, this.point.x, this.point.y, this.width, this.height);
        this.ctx?.drawImage(this.element, this.point.x + this.width, this.point.y, this.width, this.height);
    }
    constructor(
        protected ctx: CanvasRenderingContext2D | null,
        protected element: CanvasImageSource
    ){
        super(ctx, {
            x: 0,
            y: WINDOW_HEIGHT - GROUND_HEIGHT
        }, element, GROUND_WIDTH, GROUND_HEIGHT);
    }
}