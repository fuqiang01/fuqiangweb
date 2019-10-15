<template>
    <div class="content-wrapper">
        <div class="content container clearfloat">
            <ServiceList />
            <ServiceContent />
        </div>
    </div>
</template>

<script>
import ServiceList from '@/components/service/ServiceList'
import ServiceContent from '@/components/service/ServiceContent'
export default {
    components: {
        ServiceList,
        ServiceContent
    }
}
</script>


<style lang="scss" scoped>
    @import '@/assets/style/service/content';
</style>