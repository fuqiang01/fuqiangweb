<template>
  <div id="app">
    <MyHeader />
    <router-view />
    <MyFooter />
    <SideBox />
    <ContactUs />
  </div>
</template>

<script>
import MyHeader from "@/components/MyHeader";
import MyFooter from "@/components/footer/MyFooter";
import SideBox from "@/components/SideBox";
import ContactUs from "@/components/ContactUs";
export default {
  components: {
    MyHeader,
    MyFooter,
    SideBox,
    ContactUs
  },
};
</script>



<style lang="scss">
  @import './assets/style/common'
</style>
