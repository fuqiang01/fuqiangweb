import { Point, imgElement } from "../types";

export default class Spirit {
    
    // 绘制方法
    show() {
        this.ctx?.drawImage(this.element, this.point.x, this.point.y, this.width, this.height);
    }
    
    constructor(
        protected ctx: CanvasRenderingContext2D | null,
        protected point: Point,  // 坐标
        protected element: CanvasImageSource, // 要进行绘制的元素
        protected width: number, 
        protected height: number,
    ) {

    }
}