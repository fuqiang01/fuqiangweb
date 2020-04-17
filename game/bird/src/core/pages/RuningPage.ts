import Page from "../base/Page"
import Game from "../base/Game"
import { imgElement } from "../types"
import Background from "../derived/Background"
import Ground from "../derived/Ground"
import { TITLES_INFO, START_BTN, READY_INFO } from "../config"
import Bird from "../derived/Bird"
import CenterSpirit from "../derived/CenterSpirit"
import Score from "../derived/Score"
import Pipe from "../derived/Pipe"

export default class StartPage extends Page {

    clickEvent = (e: any, game: Game) => {
        console.log("zheshi")
    }

    constructor(
        private _ctx: CanvasRenderingContext2D | null,
        private _imgElement: imgElement
    ) {
        super([
            new Background(_ctx, _imgElement.BG_LIGHT),
            new Ground(_ctx, _imgElement.GROUND),
            new Score(_ctx, [_imgElement.NUM_0]),
            new Pipe(_ctx, _imgElement.PIPE),
            new Bird(_ctx, [
                _imgElement.BIRD_RED_1,
                _imgElement.BIRD_RED_2,
                _imgElement.BIRD_RED_3
            ], 200),
        ])
    }
}