<template>
    <div class="upload-file">
        <UploadImg v-if="showUploadImg"/>
        <UploadMusicVideo v-if="showUploadMusicVideo"/>
    </div>
</template>

<script>
import UploadImg from './UploadImg'
import UploadMusicVideo from './UploadMusicVideo'
export default {
    components: {
        UploadImg,
        UploadMusicVideo
    },
    computed: {
        showUploadImg(){
            const arr = ['smallImg', 'bigImg', 'music'];
            return ( arr.includes(this.$route.params.type) );
        },
        showUploadMusicVideo(){
            const arr = ['music', 'video'];
            return ( arr.includes(this.$route.params.type) );
        }
    },
    mounted(){
        console.log(this.$route.params.type)
    }
};
</script>

<style>
.upload-file{
    display: flex;
}
</style>