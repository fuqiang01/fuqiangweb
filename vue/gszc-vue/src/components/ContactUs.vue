<template>
  <transition name="wrap">
    <div class="contact-us" ref="wrapper" @click="wrapperClick($event)" v-if="contactUsShow">
      <div class="box">
        <p>
          24小时服务热线:
          <span>{{ model.phone }}</span>
        </p>
        <p>留下您的联系方式我们将尽快联系您</p>
        <input type="text" placeholder="请输入您的称呼,如王先生" />
        <input type="text" placeholder="请输入您的手机号码" />
        <div class="popW-btn submit-btn">确认提交</div>
        <span class="popW-shut-btn" @click="shutClick">✖</span>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState(["model", "contactUsShow"])
  },
  methods: {
    ...mapMutations(["setContactUsShow"]),
    wrapperClick(e) {
      if (e.target == this.$refs.wrapper) {
        this.setContactUsShow(false);
      }
    },
    shutClick() {
      this.setContactUsShow(false);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/contactus";
</style>