<template>
    <div class="home">
        <PlainText :data="contentList[0]"/>
        <SmallImg :data="contentList[1]" />
    </div>
</template>

<script>
import { mapState } from 'vuex'
import PlainText from '@/components/contentlist/PlainText'
import SmallImg from '@/components/contentlist/SmallImg'
export default {
    components: {
        PlainText,
        SmallImg,
    },
    computed: {
        ...mapState(['contentList'])
    }
}
</script>

<style>

</style>