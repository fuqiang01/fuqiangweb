import Spirit from "../base/Spirit";
import { BIRD_WIDTH, BIRD_HEIGHT, WINDOW_WIDTH, FAN_WING_SPEED, WINDOW_HEIGHT, GROUND_HEIGHT } from "../config";
import { upAndDownScope } from "../types";

export default class Bird extends Spirit{
    // 初始速度
    private _speed: number = 0
    // 加速度
    private _acceleration = 0.45
    fanWing(){
        // 获取应该渲染第几个图片
        const index = Math.floor( (Date.now() % (this.elements.length * FAN_WING_SPEED)) / FAN_WING_SPEED) ;
        this.element = this.elements[index]
    }
    show(){
        this.fanWing();
        this.drop();
        this.upAndDown();
        super.show();
    }
    // 小鸟下坠
    drop(){
        let y = this.point.y + this._speed;
        if(y >= WINDOW_HEIGHT - GROUND_HEIGHT - BIRD_HEIGHT){
            y = WINDOW_HEIGHT - GROUND_HEIGHT - BIRD_HEIGHT;
        }
        this._speed += this._acceleration;
        this.point = {
            x: this.point.x,
            y
        }
    }
    // 小鸟上飞
    fly(){
        this._speed = -100;
    }
    // 上下飞行方法
    upAndDown(){
        if(!this.upAndDownScope) return;
        if(this.point.y >= this.upAndDownScope.maxY){
            this._speed = this.upAndDownScope.speed;
        }
    }
    constructor(
        protected ctx: CanvasRenderingContext2D | null,
        protected elements: CanvasImageSource[],
        protected top: number,
        protected upAndDownScope?: upAndDownScope
    ){
        super(ctx, {
            x: (WINDOW_WIDTH - BIRD_WIDTH) / 2,
            y: top
        }, elements[0], BIRD_WIDTH, BIRD_HEIGHT);
    }
}