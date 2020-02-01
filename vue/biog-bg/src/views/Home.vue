<template>
    <div class="home">
        <HomeHeader />
        <div class="home-content">
            <div class="home-content-left">
                <HomeAnalysis />
                <HomeComments />
            </div>
             <div class="home-content-right">
                 <HomeQuickNav />
                 <HomeArticlesSum />
                 <HomeWordCloud />
             </div>
        </div>
    </div>
</template>

<script>
import HomeHeader from '@/components/home/HomeHeader'
import HomeAnalysis from '@/components/home/HomeAnalysis'
import HomeQuickNav from '@/components/home/HomeQuickNav'
import HomeArticlesSum from '@/components/home/HomeArticlesSum'
import HomeComments from '@/components/home/HomeComments'
import HomeWordCloud from '@/components/home/HomeWordCloud'
import {mapActions} from 'vuex'
export default {
    components: {
        HomeHeader,
        HomeAnalysis,
        HomeQuickNav,
        HomeArticlesSum,
        HomeComments,
        HomeWordCloud
    },
    methods: {
        ...mapActions(['queryUserInfo'])
    },
    mounted(){
        this.queryUserInfo()
    }
}
</script>

<style lang="scss">
.home-content{
    margin: 20px;
    display: flex;
    justify-content: space-between;
    .home-content-left{
        width: 70%;
    }
    .home-content-right{
        width: 29%;
    }
}
</style>