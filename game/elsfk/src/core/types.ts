import SquareGroup from "./SquareGroup";
import Game from "./Game";

// 坐标
export interface Point {
    x: number
    y: number
}

export interface IViewer {
    show(): void
    remove(): void
}

export type Shape = Point[];

export enum MoveDirection {
    left, right, down
}

export enum GameStatus {
    init, //初始化
    playing, // 游戏中
    pause, //暂停
    over // 结束
}

export interface GameViewer {
    showNext(teris: SquareGroup): void
    switch(teris: SquareGroup): void
    init(game: Game): void
    showScore(score: number): void
    onGameStart(): void
    onGamePause(): void
    onGameOver(): void
}