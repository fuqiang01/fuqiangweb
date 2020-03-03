import AnimalViewer from "./AnimalViewer";
import { IWormViewer, animalName } from "../types";
import pageConfig from "./pageConfig";

export default class WormViewer extends AnimalViewer implements IWormViewer{
    vanish(): boolean {
        if(!this._dom) return false;
        const bot = parseInt(this._dom.css('bottom'));
        return bot >= pageConfig.interface.height;
    }
    
}