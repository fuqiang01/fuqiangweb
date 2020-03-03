import { gameState, Dir, IPoint, moveDirection, IGameViewer } from "./types";
import Worm from "./Worm";
import { myRandom } from "./util";
import gameConfig from "./gameConfig";
import WormTeam from "./WormTeam";
import GamePageViewer from "./viewer/GamePageViewer";
import Panda from "./Panda";
import PandaViewer from "./viewer/PandaViewer";
import WormViewer from "./viewer/WormViewer";
import Relus from "./Relus";

export default class Game {
    // 游戏状态
    private _gameState: gameState = gameState.init
    get gameState() {
        return this._gameState
    }
    // 所有虫子的数组
    private _exists: Worm[] = []
    // 积分
    private _score: number = 0;
    // 一个队伍最多可以有几个虫子
    private _mostWorm: number = gameConfig.levels[0].mostWorm
    // 虫子每个单位时间移动的距离
    private _ratio: number = 0.1
    // 虫子爬行时间间隔
    private _crawlDuration: number = gameConfig.levels[0].crawlDuration
    // 生成虫子的时间间隔
    private _addDuration: number = gameConfig.levels[0].addDuration
    // 虫子爬行的定时器
    private _crawlTimer?: NodeJS.Timeout
    // 添加虫子的定时器
    private _addTimer?: NodeJS.Timeout
    // 游戏唯一的熊猫
    private _panda: Panda = Panda.createPanda();
    get panda() {
        return this._panda;
    }

    // 添加虫子
    private _addWorm() {
        this._addTimer && clearInterval(this._addTimer);
        this._addTimer = setInterval(_ => {
            const direction: Dir = Math.random() > 0.5 ? Dir.left : Dir.right;
            const x: number = myRandom(1, gameConfig.bambooSum + 1);
            const wormSum: number = myRandom(1, this._mostWorm + 1);
            if (this._canAdd(direction, x)) {
                // 添加
                const wormTeam = new WormTeam(x, direction, wormSum);
                this._exists = this._exists.concat(wormTeam.team);
                wormTeam.team.forEach(ele => {
                    ele.viewer = new WormViewer(ele, this._viewer.gameDom);
                    ele.viewer.show();
                })
            } else {
                this._addWorm();
            }
        }, this._addDuration)
    }
    // 判断是否可以添加这一组虫子
    private _canAdd(direction: Dir, pointX: number): boolean {
        return this._exists.every(ele => {
            return !(
                ele.direction === direction &&
                ele.point.x === pointX &&
                ele.point.y < 2  // 至少和上一个队伍隔两个虫子的位置，要不然熊猫过不去
            )
        })
    }
    // 初始化函数
    private _init() {
        this._exists.forEach(ele => ele.viewer?.die());
        this._exists = [];
        this._score = 0;
        // 显示分数
        this._viewer.showScore(this._score);
        // 添加熊猫
        this._panda.viewer = new PandaViewer(this._panda, this._viewer.gameDom);
        this._panda.viewer.init();
        // 初始化游戏等级
        this._handleLevels();
    }
    // 开始游戏
    private _start(): void {
        if (this._gameState === gameState.playing) return;
        if (this._gameState === gameState.over) {
            if (this._panda.viewer && !this._panda.viewer.isDie) {
                this._panda.viewer.dropTimer && clearInterval(this._panda.viewer.dropTimer)
                this._panda.viewer.die();
            };
            this._init()
        }
        this._gameState = gameState.playing;
        // 启动自动添加虫子的函数
        this._addWorm();
        // 启动虫子爬行函数
        this._wormCrawl();
        this._viewer.onGameStart();
    }
    get start() {
        return this._start;
    }
    // 暂停游戏
    private _pause(): void {
        if (this._gameState != gameState.playing) return;
        this._gameState = gameState.pause;
        this._clearTimer();
        this._viewer.onGamePuase();
    }
    get pause() {
        return this._pause
    }
    // 关闭计时器
    private _clearTimer() {
        this._crawlTimer && clearInterval(this._crawlTimer);
        this._addTimer && clearInterval(this._addTimer);
    }
    // 结束游戏
    private _over() {
        if (this._gameState !== gameState.playing) return;
        this._gameState = gameState.over;
        this._panda.viewer!.drop();
        this._clearTimer();
        this._viewer.onGameOver();
    }
    // 虫子爬行函数
    private _wormCrawl() {
        this._crawlTimer && clearInterval(this._crawlTimer);
        this._crawlTimer = setInterval(_ => {
            this._panda.ratio = this._ratio;
            this._exists.forEach(ele => {
                ele.ratio = this._ratio;
                ele.move(); // 爬行
                // 是否爬出了界面
                if (ele.viewer!.vanish()) {
                    this._removeWorm(ele);
                    ele.viewer!.die();
                }
                // 是否与熊猫碰撞
                if (Relus.isCrash(this._panda, ele)) {
                    if (this._panda.isDown) {
                        // 增加积分
                        this._score += 1;
                        this._viewer.showScore(this._score);
                        // 处理游戏等级
                        this._handleLevels();
                        ele.viewer!.drop();
                        this._removeWorm(ele);
                    } else {
                        // 游戏结束
                        this._over();
                    }
                }
            })
        }, this._crawlDuration)
    }
    // 处理游戏等级
    private _handleLevels() {
        let level = gameConfig.levels.filter(ele => ele.score <= this._score).pop();
        if (!level) {
            level = gameConfig.levels[0];
        }
        if (
            this._mostWorm === level.mostWorm &&
            this._crawlDuration === level.crawlDuration &&
            this._addDuration === level.addDuration &&
            this._ratio === level.wormRatio
        ) {
            return;
        }
        console.log('切换等级了')
        this._mostWorm = level.mostWorm;
        this._crawlDuration = level.crawlDuration;
        this._addDuration = level.addDuration;
        this._ratio = level.wormRatio;
        this._addWorm();
        this._wormCrawl()
    }
    // 销毁虫子
    private _removeWorm(worm: Worm) {
        this._exists = this._exists.filter(ele => ele != worm);
    }
    // 控制熊猫运动函数
    controlLeft() {
        if (this._gameState === gameState.playing) {
            this._panda.move(moveDirection.left);
        }
    }
    controlRight() {
        if (this._gameState === gameState.playing) {
            this._panda.move(moveDirection.right);
        }
    }
    controlUp() {
        if (this._gameState === gameState.playing) {
            this._panda.move(moveDirection.up);
        }
    }
    controlDown() {
        if (this._gameState === gameState.playing) {
            this._panda.move(moveDirection.down);
        }
    }

    constructor(
        private _viewer: IGameViewer
    ) {
        // 游戏数据初始化
        this._init();
        // 游戏界面初始化
        this._viewer.init(this);
    }
}