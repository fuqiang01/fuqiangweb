<template>
    <div class="home">
        <PlainText :data="contentList[0]"/>
        <SmallImg :data="contentList[1]" />
        <BigImg :data="contentList[2]" />
        <Music :data="contentList[3]" />
        <MyVideo :data="contentList[4]" />
        <Talk :data="contentList[5]" />
    </div>
</template>

<script>
import { mapState } from 'vuex'
import PlainText from '@/components/contentlist/PlainText'
import SmallImg from '@/components/contentlist/SmallImg'
import BigImg from '@/components/contentlist/BigImg'
import Music from '@/components/contentlist/Music'
import MyVideo from '@/components/contentlist/MyVideo'
import Talk from '@/components/contentlist/Talk'
export default {
    components: {
        PlainText,
        SmallImg,
        BigImg,
        Music,
        MyVideo,
        Talk
    },
    computed: {
        ...mapState(['contentList'])
    }
}
</script>

<style>

</style>