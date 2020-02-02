<template>
    <div class="contact">
        <span>找不到你需要的服务？立即联系客服对您进行一对一指导服务</span>
        <span class="contact-kf" @click="onClick">
          <img src="@/assets/img/contact_kf.png" alt />
          <span>联系客服</span>
        </span>
      </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  methods: {
    ...mapMutations(['setContactUsShow']),
    onClick(){
      this.setContactUsShow(true);
    }
  }
}
</script>

<style lang="scss" scoped>
    @import '../../assets/style/index/contact';
</style>