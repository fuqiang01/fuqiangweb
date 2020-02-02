<template>
    <div class="article-origin">
        <a-input placeholder="文章来源" v-model="origin" v-if="showFromItemObj.origin">
            <a-icon slot="prefix" type="login" style="color: rgba(0,0,0,.25)" />
        </a-input>
        <a-input placeholder="文章来源URL地址" v-model="originUrl" v-if="showFromItemObj.originUrl">
            <a-icon slot="prefix" type="cloud" style="color: rgba(0,0,0,.25)" />
        </a-input>
    </div>
</template>

<script>
import { mapState, mapMutations} from 'vuex'
export default {
    computed: {
        ...mapState(['fromData', 'showFromItemObj']),
        origin: {
            get(){
                return this.fromData.origin;
            },
            set(value){
                this.setFromData({ origin: value})
            }
        },
        originUrl: {
            get(){
                return this.fromData.originUrl;
            },
            set(value){
                this.setFromData({ originUrl: value})
            }
        }
    },
    methods: {
        ...mapMutations(['setFromData'])
    }
};
</script>

<style>
</style>