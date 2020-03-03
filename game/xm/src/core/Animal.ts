import { IPoint, Dir, IAnimalViewer, animalName, moveDirection } from "./types";

export default abstract class Animal {
    // 坐标,x代表在第几根竹子上，y代表在竹子上的垂直距离
    private _point: IPoint = {
        x: 0,
        y: 0
    }
    // 方向，也就是处于竹子的左边还是右边
    private _direction: Dir = Dir.left;
    // 用来实现展示的类
    protected _viewer?: IAnimalViewer
    // 动物的名称，是虫子还是熊猫
    abstract name: animalName
    // 每次移动的距离和自己大小的比率
    private _ratio: number = 0.1
    get ratio(){
        return this._ratio;
    }
    set ratio(val){
        this._ratio = val;
    }
    set point(val: IPoint) {
        this._point = val;
        if (this._viewer) {
            this._viewer.show();
        }
    }
    get point() {
        return this._point
    }
    set direction(val: Dir) {
        this._direction = val;
        if(this._viewer) this._viewer.show()
    }
    get direction() {
        return this._direction
    }
    set viewer(val) {
        this._viewer = val
    }
    get viewer() {
        return this._viewer
    }

}

