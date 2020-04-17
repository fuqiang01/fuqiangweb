import Spirit from "../base/Spirit";
import { PIPE_WIDTH, PIPE_HEIGHT, WINDOW_WIDTH, GROUND_HEIGHT, WINDOW_HEIGHT, PIPE_INTERVAL } from "../config";

export default class Pipe extends Spirit {
    show() {
        const bottomPipeHeight = WINDOW_HEIGHT - GROUND_HEIGHT - PIPE_INTERVAL;
        this.ctx?.drawImage(this.element, 0, 0, this.width, this.height, this.point.x, bottomPipeHeight - this.height, this.width, bottomPipeHeight)
    }
    constructor(
        protected ctx: CanvasRenderingContext2D | null,
        protected element: CanvasImageSource
    ) {
        super(ctx, {
            x: 0,
            y: 0
        }, element, PIPE_WIDTH, 100);
    }
}