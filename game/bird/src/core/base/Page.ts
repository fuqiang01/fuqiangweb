import Spirit from "./Spirit";
import Game from "./Game";

export default abstract class Page{
    showPage(){
        this._showList.forEach(spirit => spirit.show())
    }
    clickEvent = (e: any, game: Game) => {}
    constructor(
        private _showList: Spirit[]
    ){}
}