import Spirit from "../base/Spirit";

export default class Pipe extends Spirit{
    constructor(
        protected ctx: CanvasRenderingContext2D | null,
        protected element: CanvasImageSource
    ){
        super(ctx, {
            x: 0,
            y: 0
        }, element, 100, 100);
    }
}