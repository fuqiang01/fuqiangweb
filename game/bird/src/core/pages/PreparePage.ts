import Page from "../base/Page"
import Game from "../base/Game"
import { imgElement } from "../types"
import Background from "../derived/Background"
import Ground from "../derived/Ground"
import { TITLES_INFO, START_BTN, READY_INFO } from "../config"
import Bird from "../derived/Bird"
import CenterSpirit from "../derived/CenterSpirit"
import Score from "../derived/Score"

export default class StartPage extends Page {

    clickEvent = (e: any, game: Game) => {
        game.goRuningPage();
    }

    constructor(
        private _ctx: CanvasRenderingContext2D | null,
        private _imgElement: imgElement
    ) {
        super([
            new Background(_ctx, _imgElement.BG_LIGHT),
            new Ground(_ctx, _imgElement.GROUND),
            new Score(_ctx, [
                _imgElement.NUM_0,
                _imgElement.NUM_1,
            ], true),
            new CenterSpirit(_ctx, _imgElement.READY, TITLES_INFO.readyTitle),
            new CenterSpirit(_ctx, _imgElement.INFO, READY_INFO)
        ])
    }
}