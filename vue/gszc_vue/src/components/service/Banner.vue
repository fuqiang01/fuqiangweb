<template>
    <div class="banner">
        <h3 class="container">{{ title }}</h3>
    </div>
</template>

<script>
export default {
    props: ['title']
}
</script>

<style lang="scss" scoped>
    @import '@/assets/style/service/banner';
</style>