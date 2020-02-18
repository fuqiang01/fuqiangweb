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
            <a-tag v-for="(item, index) in hotTags" :key="index" @click="tagAdd(item)">{{ item }}</a-tag>
        </div>
    </a-form-item>
</template>

<script>
import { getRandomColor } from '@/util'
import {mapState, mapMutations, mapActions} from 'vuex'
export default {
    data(){
        return{
            addTagValue: '',
            addTagInputVisible: false
        }
    },
    computed:{
        ...mapState(['fromData', 'showFromItemObj', 'hotTags']),
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
        ...mapMutations(['setFromData', 'setHotTags']),
        ...mapActions(['queryHotTags']),
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
            this.setHotTags([...this.hotTags, item])
        },
        tagAdd(item){
            if(!this.canAddTag(item)) return;
            const arr = [...this.fromData.tags, item];
            const newHotTags = this.hotTags.filter(ele => ele !== item);
            this.setHotTags(newHotTags);
            this.setFromData({tags: arr})
        },
        addTagInputEnter(e){
            const val = e.target.value;
            if(!this.canAddTag(val)) return;
            const arr = [...this.fromData.tags, val];
            this.setFromData({tags: arr})
            this.addTagInputVisible = false;
            this.addTagValue = '';
        },
        canAddTag(tagName){
            if(!this.fromData.tags.includes(tagName)) return true;
            this.$message.error("添加新标签失败，不能够重复创建标签" + tagName + "!");
            return false;
        }
    },
    mounted(){
        this.queryHotTags();
    }
};
</script>

<style>
</style>