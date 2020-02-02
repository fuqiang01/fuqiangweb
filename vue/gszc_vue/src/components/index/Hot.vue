<template>
  <div class="hot container">
    <div class="title clearfloat">
      <a href="#">更多 &gt;</a>
      <img src="@/assets/img/hot_title.png" alt />
      <span>热门推荐</span>
    </div>
    <ul class="clearfloat">
      <li v-for="item in hotList" :key="item.id">
        <a :href="item.url">
          <div class="img">
            <img :src="item.src" alt />
            <div class="hover">
              <img src="@/assets/img/hot_im.png" alt />
            </div>
          </div>
          <p class="hot-service">{{ item.title }}</p>
          <p class="price">{{ item.price }}</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hotList: [
        {
          id: "1",
          url: "#",
          src: require("@/assets/img/hot_1.png"),
          title: "注册公司",
          price: "￥4500"
        },
        {
          id: "2",
          url: "#",
          src: require("@/assets/img/hot_2.png"),
          title: "小规模代理记账",
          price: "面议"
        },
        {
          id: "3",
          url: "#",
          src: require("@/assets/img/hot_3.png"),
          title: "一般纳税人",
          price: "面议"
        },
        {
          id: "4",
          url: "#",
          src: require("@/assets/img/hot_4.png"),
          title: "资质代办",
          price: "面议"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/index/hot";
</style>