const bgLight:string = require("../assets/img/bg_light.png").default;

const bg:string = require("../assets/audio/bg.mp3").default;


// 预加载所有的图片资源
function preloadImg(imgArr: string[]){
    let num: number = 1;
    return new Promise(resolve => {
        imgArr.forEach(ele => {
            const img = new Image();
            img.src = ele;
            img.onload = _ => {
                if(num === imgArr.length){
                    resolve(true);
                }else{
                    num++;
                }
            }
        })
    })
}

// 预加载所有的音频资源
function preloadAudio(audioArr: string[]){
    let num: number = 1;
    return new Promise(resolve => {
        audioArr.forEach(ele => {
            const audio = new Audio();
            audio.src = ele;
            audio.onload = _ => {
                if(num === audioArr.length){
                    resolve(true);
                }else{
                    num++;
                }
            }
        })
    })
}