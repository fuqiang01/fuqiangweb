<template>
  <div class="index">
    <Banner />
    <BannerBot />
    <Content />
  </div>
</template>

<script>
import Banner from '@/components/index/Banner'
import BannerBot from '@/components/index/BannerBot'
import Content from '@/components/index/Content'
export default {
  components:{
    Banner,
    BannerBot,
    Content
  }
};
</script>