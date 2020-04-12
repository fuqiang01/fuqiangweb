import Spirit from "../base/Spirit";
import { WINDOW_WIDTH } from "../config";
import { spiritInfo } from "../types";

export default class Title extends Spirit{
    constructor(
        protected ctx: CanvasRenderingContext2D | null,
        protected element: CanvasImageSource,
        protected spiritInfo: spiritInfo
    ){
        super(ctx, {
            x: (WINDOW_WIDTH - spiritInfo.width) / 2,
            y: spiritInfo.top
        }, element, spiritInfo.width, spiritInfo.height);
    }
}