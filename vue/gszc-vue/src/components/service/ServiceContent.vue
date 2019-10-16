<template>
  <div class="service-content">
    <p class="title">{{ serviceConItem.title }}</p>
    <div class="info" v-html="serviceConItem.innerHtml"></div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['serviceConItem'])
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/service/servicecontent";
</style>