import GamePageViewer from "./core/viewer/GamePageViewer";
import $ from 'jquery'
import Game from "./core/Game";

const gamePageViewer = new GamePageViewer($('#game-interface'), $('#score'), $('#game-state'))
const game = new Game(gamePageViewer);