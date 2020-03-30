import { IAnimalViewer, Dir, animalName } from "../types";
import $ from 'jquery'
import pageConfig from './pageConfig'
import Animal from "../Animal";
const wormImg = require('../../img/worm_2.png').default;

export default abstract class AnimalViewer implements IAnimalViewer {
    protected _dom?: JQuery<HTMLElement>
    protected _isDie: boolean = false
    get isDie(){
        return this._isDie
    }
    dropTimer?: NodeJS.Timeout
    show(): void {
        if (this._isDie) return;
        const animalType: animalName = this._animal.name;
        if (!this._dom) {
            this._dom = $('<div>').css({
                position: 'absolute',
                width: pageConfig[animalType].width + 'px',
                height: pageConfig[animalType].height + 'px',
                backgroundImage: `url(${wormImg})`, // 先全部设置成虫子的图片，熊猫会初始化修改的
                transform: 'rotateY(0deg)',
                backgroundSize: '100% 100%'
            }).appendTo(this._container);
        }
        // 判断在竹子的哪一边
        const bam = pageConfig.bamboo;
        const num = this._animal.direction === Dir.left ? 0 : bam.width + pageConfig[animalType].width;
        this._dom.css({
            left: bam.bambooToEdge + (this._animal.point.x - 1) * (bam.bambooToBamboo + bam.width) + num - pageConfig[animalType].width + 'px',
            bottom: this._animal.point.y * pageConfig[animalType].height
        })
        if(this._animal.direction === Dir.left && this._animal.name === animalName.worm){
            this._dom.css({
                transform: 'rotateY(-180deg)'
            })
        }
    }
    die(): void {
        if (this._isDie || !this._dom) return;
        this._dom.remove();
        this._isDie = true;
    }
    drop(): void {
        if (this._isDie || !this._dom) return;
        const dropSpeed = pageConfig[this._animal.name].dropSpeed;
        this.dropTimer = setInterval(_ => {
            const newY: number = this._animal.point.y - dropSpeed;
            const newX: number = this._animal.direction === Dir.left 
                ? this._animal.point.x - 0.001
                : this._animal.point.x + 0.001
            this._animal.point = {
                x: newX,
                y: newY
            }
            if (newY < -1) {
                this.dropTimer && clearInterval(this.dropTimer);
                this.die();
            }
        }, 1000 / 240)
    }
    constructor(
        protected _animal: Animal,
        protected _container: JQuery<HTMLElement>
    ) { }
}