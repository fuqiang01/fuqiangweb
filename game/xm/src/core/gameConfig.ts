import pageConfig from "./viewer/pageConfig";

export default{
    bambooSum: pageConfig.bamboo.sum,
    levels: [
        { score: 0, mostWorm: 3, crawlDuration: 32, addDuration: 1280, wormRatio: 0.1},
        { score: 20, mostWorm: 4, crawlDuration: 32, addDuration: 960, wormRatio: 0.1},
        { score: 50, mostWorm: 5, crawlDuration: 32, addDuration: 960, wormRatio: 0.1},
        { score: 100, mostWorm: 5, crawlDuration: 32, addDuration: 640, wormRatio: 0.1},
        { score: 150, mostWorm: 5, crawlDuration: 24, addDuration: 640, wormRatio: 0.1},
        { score: 300, mostWorm: 5, crawlDuration: 16, addDuration: 640, wormRatio: 0.1},
        { score: 600, mostWorm: 5, crawlDuration: 16, addDuration: 480, wormRatio: 0.15},
        { score: 1200, mostWorm: 5, crawlDuration: 16, addDuration: 320, wormRatio: 0.15},
        { score: 2400, mostWorm: 5, crawlDuration: 8, addDuration: 320, wormRatio: 0.15}
    ]
}