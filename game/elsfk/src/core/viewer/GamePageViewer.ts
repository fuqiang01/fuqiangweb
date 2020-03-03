import { GameViewer, GameStatus } from "../types";
import SquareGroup from "../SquareGroup";
import SquarePageViewer from "./SquarePageViewer";
import PageConfig from "./PageConfig";
import GameConfig from "../GameConfig";
import Game from "../Game";
import $ from 'jquery'

export default class GamePageViewer implements GameViewer {
    onGameStart(): void {
        this.gameStatusDom.hide()
    }
    onGamePause(): void {
        this.gameStatusDom
            .css("display", 'flex')
            .find('span')
            .text('游戏暂停')
        
    }
    onGameOver(): void {
        this.gameStatusDom
            .css("display", 'flex')
            .find('span')
            .text('游戏结束')
    }
    showScore(score: number): void {
        this.scoreDom.text(score)
    }
    init(game: Game): void {
        // 设置游戏页面宽高
        this.panelDom.css({
            width: PageConfig.SquareSize.width * GameConfig.panelSize.width,
            height: PageConfig.SquareSize.height * GameConfig.panelSize.height
        })
        // 设置下一个方块显示区域的大小
        this.nextDom.css({
            width: PageConfig.SquareSize.width * GameConfig.nextSize.width,
            height: PageConfig.SquareSize.height * GameConfig.nextSize.height
        })
        // 绑定键盘事件
        $(document).keydown( e => {
            if(e.keyCode === 37){
                game.controlLeft();
            }
            else if(e.keyCode === 38){
                game.controlRotate();
            }
            else if(e.keyCode === 39){
                game.controlRight()
            }
            else if(e.keyCode === 40){
                game.controlDown()
            }
            else if(e.keyCode === 32){
                if(game.gameStatus === GameStatus.playing){
                    game.pause();
                    return;
                }
                game.start();
            }
        })
    }
    showNext(teris: SquareGroup): void {
        teris.squares.forEach(ele => {
            ele.viewer = new SquarePageViewer(ele, this.nextDom);
        })
    }
    switch(teris: SquareGroup): void {
        teris.squares.forEach(ele => {
            ele.viewer && ele.viewer.remove();
            ele.viewer = new SquarePageViewer(ele, this.panelDom);
        })
    }

    constructor(
        private panelDom: JQuery<HTMLElement>,
        private nextDom: JQuery<HTMLElement>,
        private scoreDom: JQuery<HTMLElement>,
        private gameStatusDom: JQuery<HTMLElement>
    ) { }
}