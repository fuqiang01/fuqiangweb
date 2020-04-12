export type Point = {
    x: number,
    y: number
}

export type staticDataObj =  {
    [prop: string]: string
}

export type imgElement = {
    [prop: string]: HTMLImageElement
}

export type audioElement = {
    [prop: string]: HTMLAudioElement
}

export enum gameState{
    init,
    playing,
    paused,
    over
}

export type spiritInfo = {
    width: number,
    height: number,
    top: number
}

export type upAndDownScope = {
    maxY: number, // 所允许的下降的最低高度
    speed: number, // 到达最大下降高度后给的方向速度，为一个负数，负数越小反向爬升的距离越大
}