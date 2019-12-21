<template>
    <div class="music">
        <div class="img" :style="{backgroundImage: `url(${data.coverSrc})` }" @click="onSwitch">
            <img v-if="play" src="@/assets/img/music_s.png" />
            <img v-else src="@/assets/img/music_p.png" />
        </div>
        <div class="text">
            <p class="song-name">{{ data.songName }}</p>
            <p class="singer">{{ data.singer }}</p>
            <p class="buzz">{{ data.buzz }}</p>
            <p class="buzz-from" v-if="data.buzzFrom">--- {{ data.buzzFrom }}</p>
        </div>
        <div class="progress-wrap">
            <a-progress :percent="percent" :strokeWidth="2" :format="_ => ''" strokeColor="#fff" />
        </div>
        <audio :src="data.dataFile" ref="audio"></audio>
    </div>
</template>

<script>
export default {
    props: ["data"],
    data() {
        return {
            play: false,
            percent: 0,
            temp: null
        };
    },
    methods: {
        onSwitch() {
            const audio = this.$refs.audio;
            this.play = !this.play;
            if (this.play) {
                audio.play();
                this.runProgress();
            } else {
                audio.pause();
                clearInterval(this.temp);
            }
        },
        runProgress() {
            clearInterval(this.temp)
            const audio = this.$refs.audio;
            const totalTime = Math.floor(audio.duration);
            this.temp = setInterval(() => {
                const currentTime = Math.floor(audio.currentTime);
                this.percent = currentTime / totalTime * 100;
            }, 1000);
        }
    }
};
</script>

<style lang="scss">
.music {
    background: rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    padding: 30px 50px;
    border-radius: 5px;
    display: flex;
    position: relative;
    margin-bottom: 15px;
    .img {
        width: 150px;
        height: 150px;
        border-radius: 5px;
        flex: 0 auto;
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        img {
            width: 50px;
        }
    }
    .text {
        flex: 1 auto;
        color: #fff;
        padding: 10px 0 0 30px;
        p {
            line-height: 25px;
            font-size: 18px;
            font-weight: bold;
            &.buzz {
                font-size: 16px;
                font-weight: 100;
                margin-bottom: 5px;
            }
            &.buzz-from {
                font-size: 14px;
                font-weight: 100;
                margin: 0;
            }
        }
    }
    .progress-wrap {
        position: absolute;
        bottom: -6px;
        left: 0;
        width: 100%;
        .ant-progress-outer {
            padding: 0;
        }
        .ant-progress-inner {
            background-color: rgba(0, 0, 0, 0.3);
        }
    }
}
</style>