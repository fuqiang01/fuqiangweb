<template>
  <div class="link container">
    <span>友情链接 :</span>
    <a v-for="item in linkList" :key="item.id" :href="item.url">{{ item.title }}</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      linkList: [
        {
          id: 1,
          url: "#",
          title: "湖北楚威"
        },
        {
          id: 2,
          url: "#",
          title: "上海易创"
        },
        {
          id: 3,
          url: "#",
          title: "金税通"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/footer/link";
</style>