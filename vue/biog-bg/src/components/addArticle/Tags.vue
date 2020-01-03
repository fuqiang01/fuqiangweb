<template>
    <a-form-item class="tags" v-if="showFromItemObj.tags">
        <div class="tag-selected">
            <a-tag
                v-for="(item, index) in fromData.tags"
                :key="item"
                :color="tagColorArr[index]"
                closable
                @close="tagClose(item)"
            >{{ item }}</a-tag>
            <a-button
                type="dashed"
                icon="plus"
                size="small"
                style="color: rgba(0,0,0,.25)"
                @click="addTagBtnClick"
                v-if="!addTagInputVisible"
            >添加</a-button>
            <a-tooltip placement="top" trigger="focus" v-else>
                <template slot="title">
                    <span>{{ addTagValue }}</span>
                </template>
                <a-input
                    size="small"
                    style="width: 100px;"
                    allowClear
                    v-model="addTagValue"
                    @blur="addTagInputBlur"
                    ref="addTagInput"
                    @pressEnter="addTagInputEnter"
                />
            </a-tooltip>
        </div>
        <div class="tag-unselected">
            <a-tag v-for="item in unselectedTag" :key="item" @click="tagAdd(item)">{{ item }}</a-tag>
        </div>
    </a-form-item>
</template>

<script>
import { getRandomColor } from '@/util'
import {mapState, mapMutations} from 'vuex'
export default {
    data(){
        return{
            addTagValue: '',
            addTagInputVisible: false,
            unselectedTag: ['标签一', '标签二', '标签三', '标签四', '标签五', '标签六', '标签七', '标签八', '标签九', '标签十']
        }
    },
    computed:{
        ...mapState(['fromData', 'showFromItemObj']),
        tagColorArr(){
            const len = this.fromData.tags.length;
            let colorArr = [];
            for ( let i = 0; i < len; i++){
                const color = this.getColor();
                colorArr.push( color );
            }
            return colorArr;
        }
    },
    methods: {
        ...mapMutations(['setFromData']),
        addTagBtnClick(){
            this.addTagInputVisible = true;
            this.$nextTick( () => {
                this.$refs.addTagInput.focus();
            })
        },
        addTagInputBlur(){
            this.addTagInputVisible = false;
        },
        getColor(){
            const color = getRandomColor();
            if ( color <= "#E0FFFF" ) return color;
            return this.getColor();
        },
        tagClose(item){
            const arr = this.fromData.tags.filter( ele => ele !== item );
            this.setFromData({tags: arr})
            this.unselectedTag.push(item);
        },
        tagAdd(item){
            const index = this.unselectedTag.indexOf(item);
            const arr = [...this.fromData.tags, item];
            this.unselectedTag.splice(index, 1);
            this.setFromData({tags: arr})
        },
        addTagInputEnter(e){
            const val = e.target.value;
            const arr = [...this.fromData.tags, val];
            this.setFromData({tags: arr})
            this.addTagInputVisible = false;
        }
    }
};
</script>

<style>
</style>