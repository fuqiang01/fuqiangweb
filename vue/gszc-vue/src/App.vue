<template>
  <div id="app">
    <MyHeader />
    <router-view />
    <MyFooter />
  </div>
</template>

<script>
import MyHeader from "@/components/MyHeader";
import MyFooter from "@/components/footer/MyFooter";
export default {
  components: {
    MyHeader,
    MyFooter,
  },
};
</script>



<style lang="scss">
  @import './assets/style/common'
</style>
