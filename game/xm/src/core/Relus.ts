import { IPoint } from "./types";
import gameConfig from "./gameConfig";
import Panda from "./Panda";
import Worm from "./Worm";
import pageConfig from "./viewer/pageConfig";

export default class Relus {
    // 熊猫能否运动到指定坐标
    static canMove(panda: Panda, targetPoint: IPoint) {
        const x = targetPoint.x;
        const y = targetPoint.y;
        return (x > 0 && y >= 0 && x <= gameConfig.bambooSum && !panda.viewer!.peak(y))
    }
    // 熊猫是否碰撞到了这个虫子
    static isCrash(panda: Panda, worm: Worm): boolean {
        const pandaBot = panda.point.y * pageConfig.panda.height;
        const wormBot = worm.point.y * pageConfig.worm.height;
        return (
            panda.point.x === worm.point.x &&
            panda.direction === worm.direction &&
            pandaBot <= wormBot + pageConfig.worm.height &&
            pandaBot + pageConfig.panda.height >= wormBot
        )
    }
}