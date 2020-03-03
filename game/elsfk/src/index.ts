import Square from './core/Square';
import SquarePageViewer from './core/viewer/SquarePageViewer';
import $ from 'jquery'
import SquareGroup from './core/SquareGroup';
import {createTeris} from './core/Teris'
import { MoveDirection } from './core/types';
import GamePageViewer from './core/viewer/GamePageViewer';
import Game from './core/Game';

const gpv = new GamePageViewer($("#panel"), $('#next'), $('#score'), $("#obscuration"));
new Game(gpv).start();


