import { Point } from "./types";

export default class Spirit {

    show(ctx: CanvasRenderingContext2D | null) {
        const img = new Image();
        img.src = this.imgSrc;
        img.onload = _ => {
            ctx?.drawImage(img, this.point.x, this.point.y, this.width, this.height);
        }  
    }

    constructor(
        protected point: Point, 
        protected imgSrc: string,
        protected width: number,
        protected height: number
    ) {

    }
}