import Worm from "./Worm";
import { Dir, IPoint } from "./types";

export default class WormTeam{
    // 虫子数组
    private _team: Worm[] = []
    get team(){
        return this._team;
    }
    constructor(
        private _pointX: number,
        private _direction: Dir,
        private _wormSum: number
    ){
        for(let i = 0; i < _wormSum; i++){
            const worm = new Worm();
            worm.point = {
                x: _pointX,
                y: -i - 1
            }
            worm.direction = _direction;
            this._team.push(worm);
        }
    }
}