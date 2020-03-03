import Game from "./Game";

// 方向
export enum Dir {
    left, right
}
// 坐标
export interface IPoint {
    x: number
    y: number
}
// 动物的显示实现
export interface IAnimalViewer {
    show(): void
    die(): void
    drop(): void
    isDie: boolean
    dropTimer?: NodeJS.Timeout
}
export interface IWormViewer extends IAnimalViewer {
    vanish(): boolean
}
export interface IPandaViewer extends IAnimalViewer {
    peak(tagetPointY: number): boolean
    switchDirection(originX: number, targetX: number, moveDirection: moveDirection): void
    init(): void
}
// 动物的类型
export enum animalName {
    worm = 'worm',
    panda = 'panda'
}
// 运动方向
export enum moveDirection {
    up, down, left, right
}
// 游戏状态
export enum gameState {
    init, playing, pause, over
}
// 游戏实现类
export interface IGameViewer {
    gameDom: JQuery<HTMLElement>
    init(game: Game): void
    onGameStart(): void
    onGamePuase(): void
    onGameOver(): void
    showScore(score: number): void
}