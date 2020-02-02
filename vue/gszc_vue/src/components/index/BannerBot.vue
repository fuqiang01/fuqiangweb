<template>
  <div class="banner_bot">
    <div class="container clearfloat">
      <ul>
        <li>
          <p>
            <span class="yonghu">{{ yonghu }}</span>万
          </p>
          <div>
            <img src="@/assets/img/banner_bot_1.png" alt />
            <span>累计服务用户</span>
          </div>
        </li>
        <li class="line"></li>
        <li>
          <p>
            <span class="qiye">{{ qiye }}</span>家
          </p>
          <div>
            <img src="@/assets/img/banner_bot_1.png" alt />
            <span>累计服务企业</span>
          </div>
        </li>
        <li class="line"></li>
        <li>
          <p>
            <span class="zhuanli">{{ zhuanli }}</span>万
          </p>
          <div>
            <img src="@/assets/img/banner_bot_1.png" alt />
            <span>累计申请专利</span>
          </div>
        </li>
      </ul>
      <div class="right">
        <div>
          <img src="@/assets/img/banner_bot_4.png" alt />
          <span>服务热线</span>
        </div>
        <p>{{ model.phone }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      yonghu: 390000,
      qiye: 0,
      zhuanli: 370000
    }
  },
  computed: {
    ...mapState(['model'])
  },
  methods: {
    animateNum( data, maxNum) {
      const temp = setInterval(_ => {
        if ( this[data] <= maxNum ) {
          this[data] += 7;
        } else {
          clearInterval( temp);
          this[data] = maxNum;
        }
      },1)
    }
  },
  created() {
    this.animateNum( 'yonghu', 396902);
    this.animateNum( 'qiye', 2889);
    this.animateNum( 'zhuanli', 374000)
  }
}
</script>


<style lang="scss" scoped>
    @import '../../assets/style/index/bannerbot'
</style>