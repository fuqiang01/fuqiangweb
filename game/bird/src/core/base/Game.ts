import { gameState } from "../types";
import Preload from "./Preload";
import Spirit from "./Spirit";
import Background from "../derived/Background";
import Ground from "../derived/Ground";
import Pipe from "../derived/Pipe";
import Bird from "../derived/Bird";
import Page from "./Page";
import StartPage from "../pages/StartPage"
import PreparePage from "../pages/PreparePage"

export default class Game {
    // 游戏状态
    private _state: gameState = gameState.init
    // 游戏显示的页面
    private _page?: Page
    // 游戏开始
    start() {
        if (this._state === gameState.playing) return;
        this._state = gameState.playing;
    }

    // 开启游戏主线程
    runRoot(){
        console.log("运行了")
        this._page?.showPage();
        requestAnimationFrame(_ => {
            this.runRoot()
        })
    }
    // 画布点击事件
    canvasClick = (e:any) => {
        this._page?.clickEvent(e, this);
    }
    // 前往startPage页面
    goStartPage(){
        this._page = new StartPage(this._ctx, this._preload.imgElement);
    }
    // 前往preparePage页面
    goPreparePage(){
        this._page = new PreparePage(this._ctx, this._preload.imgElement)
    }
    constructor(
        private _ctx: CanvasRenderingContext2D | null,
        private _preload: Preload
    ) {
        this
            ._preload
            .preload()
            .then(_ => {
                this.goStartPage();
                this.runRoot();
            })
    }
}