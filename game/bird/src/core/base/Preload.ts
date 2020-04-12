// 导入所有图片资源
import BG_LIGHT from "../../assets/img/bg_light.png";
import BG_NIGHT from "../../assets/img/bg_night.png";
import BIRD_BLUE_1 from "../../assets/img/bird_blue_1.png";
import BIRD_BLUE_2 from "../../assets/img/bird_blue_2.png";
import BIRD_BLUE_3 from "../../assets/img/bird_blue_3.png";
import BIRD_RED_1 from "../../assets/img/bird_red_1.png";
import BIRD_RED_2 from "../../assets/img/bird_red_2.png";
import BIRD_RED_3 from "../../assets/img/bird_red_3.png";
import BIRD_YELLO_1 from "../../assets/img/bird_yello_1.png";
import BIRD_YELLO_2 from "../../assets/img/bird_yello_2.png";
import BIRD_YELLO_3 from "../../assets/img/bird_yello_3.png";
import EFFECT from "../../assets/img/effect.png";
import GAMEOVER from "../../assets/img/gameover.png";
import GROUND from "../../assets/img/ground.png";
import INFO from "../../assets/img/info.png";
import LIST from "../../assets/img/list.png";
import MEDA_1 from "../../assets/img/meda_1.png";
import MEDA_2 from "../../assets/img/meda_2.png";
import MEDA_3 from "../../assets/img/meda_3.png";
import MEDAL_GOLD from "../../assets/img/medal_gold.png";
import MEDAL_SILVER from "../../assets/img/medal_silver.png";
import NEW from "../../assets/img/new.png";
import NUM_0 from "../../assets/img/num_0.png";
import NUM_1 from "../../assets/img/num_1.png";
import NUM_2 from "../../assets/img/num_2.png";
import NUM_3 from "../../assets/img/num_3.png";
import NUM_4 from "../../assets/img/num_4.png";
import NUM_5 from "../../assets/img/num_5.png";
import NUM_6 from "../../assets/img/num_6.png";
import NUM_7 from "../../assets/img/num_7.png";
import NUM_8 from "../../assets/img/num_8.png";
import NUM_9 from "../../assets/img/num_9.png";
import PIPE from "../../assets/img/pipe.png";
import RANK from "../../assets/img/rank.png";
import READY from "../../assets/img/ready.png";
import START from "../../assets/img/start.png";
import TITLE from "../../assets/img/title.png";
// 导入所有音频资源
import AUDIO_BG from "../../assets/audio/bg.mp3";
import AUDIO_BUMP from "../../assets/audio/bump.mp3";
import AUDIO_FLY from "../../assets/audio/fly.wav";
import AUDIO_SCORE from "../../assets/audio/score.mp3";

import { staticDataObj, imgElement, audioElement, } from "../types";

export default class Preload {
    private _imgObj: staticDataObj = {
        BG_LIGHT, BG_NIGHT, BIRD_RED_1, BIRD_RED_2, BIRD_RED_3, BIRD_BLUE_1, BIRD_BLUE_2, BIRD_BLUE_3,
        BIRD_YELLO_1, BIRD_YELLO_2, BIRD_YELLO_3, EFFECT, GAMEOVER, GROUND, INFO, LIST, MEDA_1, MEDA_2,
        MEDA_3, MEDAL_GOLD, MEDAL_SILVER, NEW, NUM_0, NUM_1, NUM_2, NUM_3, NUM_4, NUM_5, NUM_6, NUM_7,
        NUM_8, NUM_9, PIPE, RANK, READY, START, TITLE
    }
    private _audioObj: staticDataObj = { AUDIO_BG, AUDIO_BUMP, AUDIO_FLY, AUDIO_SCORE };

    // 预加载完成的所有元素对象
    readonly imgElement: imgElement = {}
    readonly audioElement: audioElement = {}

    // 预加载所有的图片资源
    private preloadImg(imgObj: staticDataObj) {
        let num: number = 1;
        const _that = this;
        return new Promise(resolve => {
            for (const prop in imgObj) {
                const img = new Image();
                img.src = imgObj[prop];
                img.addEventListener("load", _ => {
                    _that.imgElement[prop] = img;
                    if (num === Object.keys(imgObj).length) {
                        resolve();
                    } else {
                        num++;
                    }
                })
            }
        })
    }
    // 预加载所有的音频资源
    private preloadAudio(audioObj: staticDataObj) {
        let num: number = 1;
        const _that = this;
        return new Promise(resolve => {
            for (const prop in audioObj) {
                const audio = new Audio();
                audio.src = audioObj[prop];
                audio.addEventListener("canplay", _ => {
                    _that.audioElement[prop] = audio;
                    if (num === Object.keys(audioObj).length) {
                        resolve();
                    } else {
                        num++;
                    }
                })

            }
        })
    }
    // 预加载函数，返回一个promise，游戏的后续操作都要等到资源加载完毕执行，也就是放到该函数的then中执行
    public preload() {
        return Promise.all([
            this.preloadImg(this._imgObj),
            this.preloadAudio(this._audioObj)
        ])
    }
}







