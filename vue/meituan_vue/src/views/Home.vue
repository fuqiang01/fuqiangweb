<template>
  <div class="home">
    <Topbar />
    <MyHeader />
    <router-view />
    <MyFooter />
  </div>
</template>

<script>
import Topbar from '@/components/Topbar';
import MyHeader from '@/components/MyHeader';
import MyFooter from '@/components/MyFooter';

export default {
  components: {
    Topbar,
    MyHeader,
    MyFooter
  }
};
</script>

<style lang="scss">
  
</style>
