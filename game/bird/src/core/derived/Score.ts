import Spirit from "../base/Spirit";
import { NUM, WINDOW_WIDTH } from "../config";

export default class Score extends Spirit{
    show(){
        const len = this.elements.length;
        const pointX = this.positionCenter ? (WINDOW_WIDTH - NUM.width * len) / 2 : 0;
        for(let i = 0; i < len; i++){
            const x = pointX + i * NUM.width;
            this.ctx?.drawImage(this.elements[i], x,  this.positionCenter ? 100 : 0 , NUM.width, NUM.height);
        }
    }
    constructor(
        protected ctx: CanvasRenderingContext2D | null,
        protected elements: CanvasImageSource[],
        protected positionCenter?: boolean, // 是否居中绘制，也就是是不是在ready页面
    ){
        super(ctx, {
            x: 0,
            y: 100
        }, elements[0], 100, 100);
    }
}