<template>
  <div class="banner">
    <el-carousel height="520px">
      <el-carousel-item v-for="(item,index) in bannerData" :key="index">
        <a :href="item.url">
          <img :src="item.src" alt="banner图" />
        </a>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data(){
    return {
      bannerData:[
        {
          url: '#',
          src: require('@/assets/img/banner_1.jpg'),
        },
        {
          url: '#',
          src: require('@/assets/img/banner_1.jpg'),
        },
        {
          url: '#',
          src: require('@/assets/img/banner_1.jpg'),
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/style/index/banner';
</style>