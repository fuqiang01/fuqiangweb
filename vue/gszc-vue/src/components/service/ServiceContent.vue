<template>
  <div class="service-content">
    <p class="title">{{ serviceConItem.title }}</p>
    <template v-if="id == 3">
      <mymap />
      <div class="model-wrapper">
        <p>电话: {{ model.phone }}</p>
        <p>邮箱: {{ model.email }}</p>
        <p>QQ: {{ model.qq }}</p>
        <p>地址: {{ model.address }}</p>
      </div>
    </template>
    <div class="info" v-html="serviceConItem.innerHtml"></div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import mymap from "@/components/Map";
export default {
  components: {
    mymap
  },
  computed: {
    ...mapState(["serviceConItem", "model"]),
    id() {
      return this.$route.params.id;
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/style/service/servicecontent";
</style>