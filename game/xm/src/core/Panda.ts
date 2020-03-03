import { animalName, IPoint, moveDirection, Dir, IPandaViewer, IAnimalViewer } from "./types";
import Animal from "./Animal";
import Relus from "./Relus";

export default class Panda extends Animal {
    protected _viewer?: IPandaViewer
    readonly name: animalName = animalName.panda
    private static _panda?: Panda
    private constructor() {
        super();
    }
    static createPanda() {
        if (!this._panda) this._panda = new Panda();
        return this._panda;
    }
    // 是否处于旋转状态
    private _isRotate: boolean = false
    get isRotate(){
        return this._isRotate
    }
    set isRotate(val: boolean){
        this._isRotate = val;
    }
    // 是否处于下落状态，也就是坐虫子的状态，这个时候碰到虫子虫子会死亡
    private _isDown: boolean = false
    get isDown(){
        return this._isDown
    }
    set isDown(val: boolean){
        this._isDown = val
    }

    // 运动方法
    move(targetPointOrDirection: IPoint | moveDirection) {
        if (isPoint(targetPointOrDirection)) {
            if (Relus.canMove(this, targetPointOrDirection)) {
                this.point = targetPointOrDirection;
            }
        } else {
            let targetPoint: IPoint = this.point;
            switch (targetPointOrDirection) {
                case moveDirection.up:
                    targetPoint = {
                        x: this.point.x,
                        y: this.point.y + this.ratio
                    }
                    break;
                case moveDirection.down:
                    targetPoint = {
                        x: this.point.x,
                        y: this.point.y - this.ratio
                    }
                    break;
                case moveDirection.left:
                    if(this._isRotate) break;
                    let tempDirection: Dir = Dir.left;
                    if (this.direction === Dir.left) {
                        targetPoint = {
                            x: this.point.x - 1,
                            y: this.point.y
                        }
                        tempDirection = Dir.right;
                    }
                    if(!Relus.canMove(this, targetPoint)){
                        targetPoint = this.point;
                        break;
                    }
                    this.viewer!.switchDirection(this.point.x, targetPoint.x, targetPointOrDirection);
                    this.direction = tempDirection;
                    break;
                case moveDirection.right:
                    if(this._isRotate) break;
                    tempDirection = Dir.right;
                    if (this.direction === Dir.right) {
                        targetPoint = {
                            x: this.point.x + 1,
                            y: this.point.y
                        }
                        tempDirection = Dir.left;
                    }
                    if(!Relus.canMove(this, targetPoint)){
                        targetPoint = this.point;
                        break;
                    }
                    this.viewer!.switchDirection(this.point.x, targetPoint.x, targetPointOrDirection);
                    this.direction =tempDirection;
                    break;
            }
            this.move(targetPoint);
        }
    }
    get viewer() {
        return this._viewer
    }
    set viewer(val) {
        this._viewer = val;
        if (val) val.show();
    }
}

function isPoint(obj: any): obj is IPoint {
    return obj.x != undefined && obj.y != undefined;
}