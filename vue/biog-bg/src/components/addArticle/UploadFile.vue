<template>
    <div class="upload-file">
        <UploadImg v-if="showFromItemObj.imgFileData"/>
        <UploadMusicVideo v-if="showFromItemObj.musicVideoData"/>
    </div>
</template>

<script>
import UploadImg from './UploadImg'
import UploadMusicVideo from './UploadMusicVideo'
import {mapState} from 'vuex'
export default {
    components: {
        UploadImg,
        UploadMusicVideo
    },
    computed: {
        ...mapState(['showFromItemObj'])
    },
    mounted(){
        
    }
};
</script>

<style>
.upload-file{
    display: flex;
}
</style>