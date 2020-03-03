import Animal from "./Animal"
import { animalName, moveDirection, IWormViewer } from "./types"


export default class Worm extends Animal{    
    protected _viewer?: IWormViewer
    readonly name: animalName = animalName.worm
    move(){
        this.point = {
            x: this.point.x,
            y: this.point.y + this.ratio
        }
    }
    get viewer(){
        return this._viewer;
    }
    set viewer(val){
        this._viewer = val
    }
}