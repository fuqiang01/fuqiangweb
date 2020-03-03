import { Shape, Point } from "./types";
import GameConfig from './GameConfig'
import Square from "./Square";

export default abstract class TerisRule {
    static canMove(shape: Shape, targetPoint: Point, exist: Square[]) {
        let result: boolean = true;
        const targetSquarePoints: Point[] = shape.map(ele => ({
            x: ele.x + targetPoint.x,
            y: ele.y + targetPoint.y
        }))
        // 判断边界
        result = targetSquarePoints.every(ele => {
            const x = ele.x;
            const y = ele.y;
            return x >= 0 && x < GameConfig.panelSize.width && y >= 0 && y < GameConfig.panelSize.height;
        })
        if(result === false ) return false;
        // 判断重叠
        result = !exist.some(ex => targetSquarePoints.some(tsp => tsp.x === ex.point.x && tsp.y === ex.point.y))
        return result;
    }
    static deleteSquares(exist: Square[]): number{
        const ys = exist.map(e => e.point.y);
        const minY = Math.min(...ys);
        const maxY = Math.max(...ys);
        let num = 0; // 消除的行数
        for( let y = minY; y <= maxY; y++){
            // 判断某一行是否消除
            if(this.deleteLine(exist, y)){
                num++;
            }
        }
        return num;
    }
  
    static deleteLine(exist: Square[], y: number): boolean{
        const squares = exist.filter(e => e.point.y === y);
        if(squares.length === GameConfig.panelSize.width){
            // 删除这一行
            squares.forEach( ele => { 
                // 删除Dom元素
                ele.viewer && ele.viewer.remove();
                // 在页面显示的方块数组中删除
                const index = exist.indexOf(ele);
                exist.splice(index, 1);
            }); 
            // 把所消除行上边的方块向下移动一个单位
            exist.forEach(ele => {
                if(ele.point.y < y){
                    ele.point = {
                        x: ele.point.x,
                        y: ele.point.y + 1
                    }
                }
            })
            return true;
        }
        return false;
    }
}