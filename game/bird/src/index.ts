import Game from "./core/base/Game";
import Preload from "./core/base/Preload";


const canvas = document.getElementsByTagName("canvas")[0];
// 设置canvas填充整个屏幕
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");
const preload = new Preload();
const game = new Game(ctx, preload);

// 绑定点击事件
canvas.addEventListener("click", game.canvasClick);