import pageConfig from "./pageConfig";
import $ from 'jquery'
import { moveDirection, IGameViewer, gameState } from "../types";
import Game from "../Game";

export default class GamePageViewer implements IGameViewer {
    constructor(
        private _gameDom: JQuery<HTMLElement>,
        private _scoreDom: JQuery<HTMLElement>,
        private _stateDom: JQuery<HTMLElement>
    ) { }
    get gameDom() {
        return this._gameDom;
    }
    private _init(game: Game): void {
        // 设置游戏界面的宽高
        const bam = pageConfig.bamboo;
        this._gameDom.css({
            width: bam.bambooToEdge * 2 + bam.sum * bam.width + (bam.sum - 1) * bam.bambooToBamboo,
            height: pageConfig.interface.height
        })
        // 添加竹子
        for (let i = 0; i < bam.sum; i++) {
            $('<div>').css({
                width: bam.width,
                height: pageConfig.interface.height,
                position: 'absolute',
                left: bam.bambooToEdge + i * (bam.width + bam.bambooToBamboo),
                top: 0,
                background: 'green'
            }).appendTo(this._gameDom)
        }
        // 绑定事件
        let up: boolean = false;
        let down: boolean = false;
        // 设置一个定时器一直运行，来判断是否需要上下运动，这样运动起来看着比较流畅
        setInterval(_ => {
            if (up) {
                game.controlUp()
            }
            if (down) {
                game.controlDown();
            }
        }, 1000 / 60)
        $(document).keydown(e => {
            if (e.keyCode === 37) {
                game.controlLeft();
            }
            else if (e.keyCode === 38) {
                up = true;
            }
            else if (e.keyCode === 39) {
                game.controlRight();
            }
            else if (e.keyCode === 40) {
                down = true;
                if (game.panda.point.y >= game.panda.ratio) {
                    game.panda.isDown = true;
                }
            }
            else if (e.keyCode === 32) {
                if (game.gameState === gameState.playing) {
                    game.pause();
                } else {
                    game.start()
                }
            }
        })
        $(document).keyup(e => {
            if (e.keyCode === 38) {
                up = false
            }
            else if (e.keyCode === 40) {
                down = false
                game.panda.isDown = false
            }
        })
    }
    get init() {
        return this._init;
    }
    onGameStart() {
        this._stateDom
            .removeClass()
            .addClass('playing')
            .text('正在游戏中')
    }
    onGamePuase() {
        this._stateDom
            .removeClass()
            .addClass('puase')
            .text('游戏暂停')
    }
    onGameOver() {
        this._stateDom
            .removeClass()
            .addClass('over')
            .text('游戏结束')
    }
    showScore(score: number): void {
        this._scoreDom.text(score)
    }
}