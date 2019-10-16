<template>
  <ul class="footer-benefit container clearfloat">
    <li v-for="(item,index) in listArr" :key="index">
      <div>
        <img :src="item.src" alt />
        <span>{{ item.title }}</span>
      </div>
      <p>{{ item.viceTitle }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      listArr: [
        {
          src: require('@/assets/img/footer_icon_1.png'),
          title: '一站式服务',
          viceTitle: '一站式纠纷解决方案规范工商行业标准'
        },
        {
          src: require('@/assets/img/footer_icon_2.png'),
          title: '专业顾问',
          viceTitle: '行业顾问竞标模式专人解决财税问题'
        },
        {
          src: require('@/assets/img/footer_icon_3.png'),
          title: '安全保障',
          viceTitle: '重金打造安全系统严格保护个人隐私'
        },
        {
          src: require('@/assets/img/footer_icon_4.png'),
          title: '赔付保障',
          viceTitle: '全程专属顾问服务提供先行赔付保障'
        }
      ]
    }
  }
}
</script>


<style lang="scss" scoped>
    @import '@/assets/style/footer/benefit';
</style>