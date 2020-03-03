import { IPandaViewer, animalName, Dir, moveDirection } from "../types";
import AnimalViewer from "./AnimalViewer";
import pageConfig from "./pageConfig";
import Panda from "../Panda";

export default class PandaViewer extends AnimalViewer implements IPandaViewer {
    // 熊猫初始化
    init(): void {
        const x = Math.ceil(pageConfig.bamboo.sum / 2);
        // 减去 0.01 很重要（当然这里随便减去一个数都行），要不让一开始直接触顶的话就动不了了
        const y = (pageConfig.interface.height - pageConfig.panda.height) / pageConfig.panda.height - 0.01;
        this._animal.point = { x, y };
        this._animal.direction = Dir.right;
        this._dom!.css({
            backgroundImage: 'url(../../../public/img/panda_bg.jpg)',
            zIndex: 3
        })
    }
    // 熊猫切换在竹子上的方向
    switchDirection(originX: number, targetX: number, direction: moveDirection): void {
        if (!this._dom) return;
        const left = parseInt(this._dom.css('left'));
        let newLeft: number, originDegree: number, targetDegree: number;
        if (targetX - originX === 0)
            newLeft = direction === moveDirection.left
                ? left - pageConfig.bamboo.width - pageConfig.panda.width
                : left + pageConfig.bamboo.width + pageConfig.panda.width
        else
            newLeft = direction === moveDirection.left
                ? left + pageConfig.panda.width - pageConfig.bamboo.bambooToBamboo
                : left - pageConfig.panda.width + pageConfig.bamboo.bambooToBamboo

        if (this._animal.direction === Dir.right) {
            originDegree = 0;
            targetDegree = -180;
        } else {
            originDegree = -180;
            targetDegree = 0;
        }
        (this._animal as  Panda).isRotate = true;
        this._dom.animate({ left: newLeft }, pageConfig.panda.rotateDirection);
        pandaRotate(this._dom, {
            originDegree,
            targetDegree,
            duration: pageConfig.panda.rotateDirection
        }, () => {(this._animal as  Panda).isRotate = false})
    }
    // 熊猫是否触顶
    peak(targentPointY: number): boolean {
        if (!this._dom) return false;
        const bot = targentPointY * pageConfig.panda.height
        return bot >= pageConfig.interface.height - pageConfig.panda.height;
    }

}
interface rotateConfig {
    originDegree: number
    targetDegree: number
    duration: number
}

// jquery的animate方法不能处理旋转的问题，这个方法就是用来处理旋转动画的
function pandaRotate(dom: JQuery<HTMLElement>, rotateConfig: rotateConfig, callback: Function) {
    let { originDegree, targetDegree, duration } = rotateConfig;
    const durationK = 1000 / 60;
    const degreeK = ((targetDegree - originDegree) / duration) * durationK;
    dom.css('transform', `rotateY(${originDegree}deg)`);
    let timer = setInterval(() => {
        originDegree += degreeK;
        if ((degreeK > 0 && originDegree >= targetDegree) || (degreeK < 0 && originDegree <= targetDegree)) {
            originDegree = targetDegree;
            clearInterval(timer);
            callback()
        }
        dom.css('transform', `rotateY(${originDegree}deg)`)
    }, durationK)
}