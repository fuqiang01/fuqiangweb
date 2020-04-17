// 窗口的宽高
export const WINDOW_WIDTH = window.innerWidth;
export const WINDOW_HEIGHT = window.innerHeight;

// 背景的宽高
export const BG_WIDTH = 288;
export const BG_HEIGHT = 512;
// 背景偏移量，测试为第二张向左偏移13px背景就看不出来是多张拼凑的了
export const BG_OFFSET = 13; 

// 地面的宽高
export const GROUND_WIDTH = 336;
export const GROUND_HEIGHT = 112;

// 管道宽高
export const PIPE_WIDTH = 54;
export const PIPE_HEIGHT = 640;
// 上下管道间隔距离
export const PIPE_INTERVAL = 100;

// 小鸟宽高
export const BIRD_WIDTH = 34;
export const BIRD_HEIGHT = 24;
// 煽动翅膀的速度，也就是每多少毫秒煽动一下翅膀
export const FAN_WING_SPEED = 100;

// 单位时间运动的像素值
export const MOVE_DISPLACEMENT = 20;

// 各个页面标题
export const TITLES_INFO = {
    startTitle: {
        top: 100, // 距离页面顶部的距离
        width: 178,
        height: 48
    },
    readyTitle: {
        top: 200,
        width: 184,
        height: 50
    }
}

// 开始游戏按钮
export const START_BTN = {
    width: 104,
    height: 58,
    top: 400
}

// ready页面的info图片信息
export const READY_INFO = {
    top: 300,
    width: 114,
    height: 98
}

// 分数
export const NUM = {
    width: 24,
    height: 36
}
