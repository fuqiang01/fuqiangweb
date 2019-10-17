<template>
  <ul class="side-box">
    <li @mouseenter="mouseEnter('phone')" @mouseleave="mouseLeave">
      <div class="img">
        <img src="@/assets/img/rightNav_phone.png" />
      </div>
      <transition name="box">
        <div class="hover-show phone" v-show="showBox === 'phone'">
          <div class="box-wrapper">
            <p class="p1">固定电话:</p>
            <p class="p2">400-123-1234</p>
            <p class="p1">24小时服务热线:</p>
            <p class="p2">12345678912</p>
          </div>
        </div>
      </transition>
    </li>
    <li @mouseenter="mouseEnter('kf')" @mouseleave="mouseLeave">
      <div class="img">
        <img src="@/assets/img/rightNav_kf.png" alt />
      </div>
      <transition name="box">
        <div class="hover-show kf" v-show="showBox === 'kf'">
          <div class="box-wrapper">
            <p class="title">留下您的联系方式,我们将尽快联系您</p>
            <input type="text" placeholder="请输入您的称呼" />
            <input type="text" placeholder="请输入您的联系方式" />
            <p class="kf-btn">确认提交</p>
          </div>
        </div>
      </transition>
    </li>
    <li @mouseenter="mouseEnter('wx')" @mouseleave="mouseLeave">
      <div class="img">
        <img src="@/assets/img/rightNav_wx.png" alt />
      </div>
      <transition name="box">
        <div class="hover-show wx" v-show="showBox === 'wx'">
          <div class="box-wrapper">
            <img :src="model.wxCode" alt />
            <p>打开微信扫一扫</p>
          </div>
        </div>
      </transition>
    </li>
    <li @click="goTop">
      <div class="img">
        <img src="@/assets/img/rightNav_db.png" alt />
      </div>
    </li>
  </ul>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      showBox: ""
    };
  },
  computed: {
    ...mapState(["model"])
  },
  methods: {
    goTop() {
      let top = document.documentElement.scrollTop;
      const each = Math.round(top / 25);
      let temp = setInterval(_ => {
        top -= each;
        if (top <= 0) {
          top = 0;
          clearInterval(temp);
        }
        document.documentElement.scrollTop = document.body.scrollTop = top;
      }, 16);
    },
    mouseLeave() {
      this.showBox = "";
    },
    mouseEnter(str) {
      this.showBox = str;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/sidebox.scss";
</style>