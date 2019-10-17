<template>
    <div class="gwtd">
        <Banner :title="title"/>
        <Content />
    </div>
</template>

<script>
import Banner from '@/components/service/Banner'
import Content from '@/components/news/Content'
export default {
    data(){
        return{
            title: '财税资讯'
        }
    },
    components: {
        Banner,
        Content
    }
}
</script>