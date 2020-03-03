import { GameStatus, MoveDirection, GameViewer } from "./types";
import SquareGroup from "./SquareGroup";
import { createTeris } from './Teris'
import GameConfig from "./GameConfig";
import TerisRule from "./TerisRule";
import Square from "./Square";

export default class Game {
    // 游戏状态
    private _gameStatus: GameStatus = GameStatus.init;
    // 当前玩家操作的方块
    private _currentTeris?: SquareGroup;
    // 下一个方块
    private _nextTeris: SquareGroup = createTeris({ x: 3, y: 3 });
    // 定时器
    private _timer?: number;
    // 自动下落间隔时间
    private _duration: number = GameConfig.levels[0].duration;
    // 当前游戏中已经存在的方块
    private _exists: Square[] = [];
    // 积分
    private _score: number = 0;

    get gameStatus(){
        return this._gameStatus;
    }
    constructor(private _viewer: GameViewer) { 
        this._viewer.init(this);
        this._viewer.showScore(this._score);
    }

    private createNext() {
        this._nextTeris = createTeris({ x: 0, y: 0 });
        this.resetCenterPoint(GameConfig.nextSize.width, this._nextTeris);
        this._viewer.showNext(this._nextTeris);
    }

    // 游戏初始化
    private init(){
        this._exists.forEach(ele => {
            ele.viewer && ele.viewer.remove();
        })
        this._currentTeris = undefined;
        this._exists = [];
        this.handleLevels();
    }

    // 游戏开始
    start() {
        if (this._gameStatus === GameStatus.playing) return;
        if(this._gameStatus === GameStatus.over){
            this.init();
        }
        this._gameStatus = GameStatus.playing;
        if(!this._currentTeris){
            this.switchTeris();
        }
        this.aboutDrop();
        this._viewer.onGameStart();
    }

    // 游戏暂停
    pause(){
        if(this._gameStatus !== GameStatus.playing) return;
        this._gameStatus = GameStatus.pause;
        clearInterval(this._timer);
        this._viewer.onGamePause();
    }

    // 切换方块
    private switchTeris() {
        this._currentTeris = this._nextTeris;
        this.resetCenterPoint(GameConfig.panelSize.width, this._currentTeris);
        // 方块一出现就重叠
        if(!TerisRule.canMove(this._currentTeris.shape, this._currentTeris.centerPoint, this._exists)){
            // 游戏结束
            this._gameStatus = GameStatus.over;
            clearInterval(this._timer);
            this._nextTeris.squares.forEach(ele => ele.viewer && ele.viewer.remove())
            this._viewer.onGameOver();
            return;
        }
        this.createNext();
        this._viewer.switch(this._currentTeris);
    }

    // 自由下落
    private aboutDrop() {
        this._timer = setInterval(() => {
            if (!this._currentTeris!.move(MoveDirection.down, this._exists)) {
                // 触底
                this.hitBottom();
            }
        }, this._duration)
    }
    controlLeft() {
        if (this._currentTeris && this._gameStatus === GameStatus.playing) {
            this._currentTeris.move(MoveDirection.left, this._exists)
        }
    }
    controlRight(){
        if (this._currentTeris && this._gameStatus === GameStatus.playing) {
            this._currentTeris.move(MoveDirection.right, this._exists)
        }
    }
    controlDown(){
        if (this._currentTeris && this._gameStatus === GameStatus.playing) {
            while(this._currentTeris.move(MoveDirection.down, this._exists));
            // 触底
            this.hitBottom();
        }
    }
    controlRotate(){
        if (this._currentTeris && this._gameStatus === GameStatus.playing) {
            this._currentTeris.rotate(this._exists);
        }
    }

    // 根据容器宽度，将方块显示到中间，并且y坐标不小于0
    private resetCenterPoint(width: number, teris: SquareGroup) {
        const x = Math.ceil(width / 2) - 1;
        const y = 0;
        teris.centerPoint = { x, y }
        while (teris.squares.some(ele => ele.point.y < 0)) {
            teris.centerPoint = {
                x: teris.centerPoint.x,
                y: teris.centerPoint.y + 1
            }
        }
    }

    // 触底函数
    private hitBottom(){
        // 将这个方块加入到游戏中存在的数组中
        this._exists = this._exists.concat(this._currentTeris!.squares);
        // 切换方块
        this.switchTeris();
        // 处理消除,并且把消除的行数保存下来
        const num: number = TerisRule.deleteSquares(this._exists);
        // 处理积分
        this.addScore(num);
        // 显示积分
        this._viewer.showScore(this._score);
        // 处理游戏等级
        this.handleLevels()
    }

    private handleLevels(){
        const level = GameConfig.levels.filter(ele => ele.score <= this._score).pop();
        this._duration = level ? level.duration : GameConfig.levels[0].duration;
        clearInterval(this._timer);
        this.aboutDrop();
    }

    //添加积分规则
    private addScore(num: number){
        if(num === 1){
            this._score += 10;
        }
        else if(num === 2){
            this._score += 30;
        }
        else if(num === 3){
            this._score += 60;
        }
        else if(num === 4){
            this._score += 120;
        }
        else{
            this._score += num * 40
        }
    }
}