<template>
    <div class="gwtd">
        <Banner :title="title" />
        <Content />
    </div>
</template>

<script>
import Banner from '@/components/service/Banner'
import Content from '@/components/team/Content'
export default {
    data(){
        return{
            title: '顾问团队'
        }
    },
    components: {
        Banner,
        Content
    }
}
</script>