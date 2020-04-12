import Page from "../base/Page";
import Spirit from "../base/Spirit";
import Background from "../derived/Background";
import { imgElement } from "../types";
import Ground from "../derived/Ground";
import CenterSpirit from "../derived/CenterSpirit";
import { TITLES_INFO, START_BTN, WINDOW_WIDTH } from "../config";
import Bird from "../derived/Bird";
import Game from "../base/Game";


export default class StartPage extends Page {

    clickEvent = (e: any, game: Game) => {
        // 获取startBtn的左顶点坐标
        const startBtnPointX = (WINDOW_WIDTH - START_BTN.width) / 2;
        const startBtnPointY = START_BTN.top;
        // 判断是否点击的是开始按钮
        if(
            e.offsetX >= startBtnPointX && 
            e.offsetX <= startBtnPointX + START_BTN.width &&
            e.offsetY >= startBtnPointY &&
            e.offsetY <= startBtnPointY + START_BTN.height  
        ){
            // 跳转到preparePage页面
            game.goPreparePage();
        }
    }

    constructor(
        private _ctx: CanvasRenderingContext2D | null,
        private _imgElement: imgElement
    ) {
        super([
            new Background(_ctx, _imgElement.BG_LIGHT),
            new Ground(_ctx, _imgElement.GROUND),
            new CenterSpirit(_ctx, _imgElement.TITLE, TITLES_INFO.startTitle),
            new Bird(_ctx, [
                _imgElement.BIRD_RED_1,
                _imgElement.BIRD_RED_2,
                _imgElement.BIRD_RED_3
            ], 200, { maxY: 200, speed: -5 }),
            new CenterSpirit(_ctx, _imgElement.START, START_BTN)
        ])
    }
}

