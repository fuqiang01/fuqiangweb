import Square from './Square'
import { Shape, Point, MoveDirection } from './types';
import TerisRule from './TerisRule';

export default class SquareGroup {
    private _squares: Square[];
    get squares() {
        return this._squares;
    }

    constructor(
        private _shape: Shape,
        private _centerPoint: Point,
        private _color: string
    ) {
        this._squares = this._shape.map(ele => {
            const sq = new Square();
            sq.point = {
                x: ele.x + this._centerPoint.x,
                y: ele.y + this._centerPoint.y
            }
            sq.color = this._color;
            return sq;
        })
    }

    get shape(){
        return this._shape;
    }

    public set centerPoint(val: Point){
        this._centerPoint = val;
        this.setSquarePoints();
    }

    public get centerPoint(){
        return this._centerPoint;
    }

    private setSquarePoints() {
        this._shape.map((ele, index) => {
            this._squares[index].point = {
                x: ele.x + this._centerPoint.x,
                y: ele.y + this._centerPoint.y
            }
        })
    }
    protected isClock = true; // 是否是顺时针旋转
    private afterRotateShape(): Shape {
        let newSquares: Shape;
        if (this.isClock) {
            newSquares = this._shape.map(ele => {
                return {
                    x: -ele.y,
                    y: ele.x
                }
            })
        }
        else {
            newSquares = this._shape.map(ele => {
                return {
                    x: ele.y,
                    y: -ele.x
                }
            })
        }
        return newSquares;
    }

    public rotate(exists: Square[]) {
        const newShape = this.afterRotateShape();
        const result = TerisRule.canMove(newShape, this._centerPoint, exists);
        if(result){
            this._shape = this.afterRotateShape();
            this.setSquarePoints();
        }
    }
    public move(targetPoint: Point, exists: Square[]): boolean;
    public move(direction: MoveDirection, exists: Square[]): boolean;
    public move(targetPointOrDirection: Point | MoveDirection, exists: Square[]): boolean {
        if (isPoint(targetPointOrDirection)) {
            const result = TerisRule.canMove(this._shape, targetPointOrDirection, exists);
            if (!result) return false;
            this._centerPoint = targetPointOrDirection;
            this.setSquarePoints();
            return true;
        }
        else {
            let targetPoint: Point;
            switch (targetPointOrDirection) {
                case MoveDirection.left:
                    targetPoint = {
                        x: this._centerPoint.x - 1,
                        y: this._centerPoint.y
                    }
                    break;
                case MoveDirection.right:
                    targetPoint = {
                        x: this._centerPoint.x + 1,
                        y: this._centerPoint.y
                    }
                    break;
                case MoveDirection.down:
                    targetPoint = {
                        x: this._centerPoint.x,
                        y: this._centerPoint.y + 1
                    }
                    break;
            }
            return this.move(targetPoint, exists);
        }
    }
}

function isPoint(obj: any): obj is Point {
    return obj.x !== undefined && obj.y !== undefined
}