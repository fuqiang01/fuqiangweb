export default{
    // 游戏界面
    interface: {
        height: 300
    },
    // 虫子
    worm: {
        width: 20,
        height: 30,
        dropSpeed: 0.03 // 掉落速度
    },
    // 熊猫
    panda: {
        width: 30,
        height: 40,
        dropSpeed: 0.03, // 掉落速度
        rotateDirection: 100 // 熊猫切换方向的动画时间
    },
    // 竹子
    bamboo: {
        width: 20,
        sum: 3, // 游戏中竹子的总数
        bambooToEdge: 150, // 两侧竹子距离边缘的距离,这个距离一定要比熊猫和虫子的宽度大，否则会跑到游戏界面外
        bambooToBamboo: 80 // 两竹子之间的距离，这个距离一定要比虫子的宽度的两倍大，否则会重叠
    }
}