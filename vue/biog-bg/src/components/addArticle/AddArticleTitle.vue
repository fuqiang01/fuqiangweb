<template>
    <div class="add-article-title">
        <a-form-item v-if=" showFromItemObj.title ">
            <a-input v-model="titleVal" placeholder="标题">
                <a-icon slot="prefix" type="font-size" style="color: rgba(0,0,0,.25)" />
            </a-input>
        </a-form-item>
        <div class="add-article-title-music">
            <a-form-item v-if="showFromItemObj.songName">
                <a-input
                    v-model="songName"
                    placeholder="歌名"
                    style="width: 300px; marginRight: 10px;">
                    <a-icon slot="prefix" type="star" style="color: rgba(0,0,0,.25)" />
                </a-input>
            </a-form-item>
            <a-form-item v-if="showFromItemObj.singer">
                <a-input v-model="singer" placeholder="歌手" style="width: 245px">
                    <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
                </a-input>
            </a-form-item>
            <a-form-item style="width: 100%;marginLeft: 10px;" v-if="showFromItemObj.buzz">
                <a-input v-model="buzz" placeholder="热评">
                    <a-icon slot="prefix" type="fire" style="color: rgba(0,0,0,.25)" />
                </a-input>
            </a-form-item>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
    computed: {
        ...mapState(["fromData", "showFromItemObj"]),
        titleVal: {
            get() {
                return this.fromData.title;
            },
            set(value) {
                this.setFromData({ title: value });
            }
        },
        songName: {
            get() {
                return this.fromData.songName;
            },
            set(value) {
                this.setFromData({ songName: value });
            }
        },
        singer: {
            get() {
                return this.fromData.singer;
            },
            set(value) {
                this.setFromData({ singer: value });
            }
        },
        buzz: {
            get() {
                return this.fromData.buzz;
            },
            set(value) {
                this.setFromData({ buzz: value });
            }
        }
    },
    methods: {
        ...mapMutations(["setFromData"])
    }
};
</script>

<style>
.add-article-title-music {
    display: flex;
}
</style>