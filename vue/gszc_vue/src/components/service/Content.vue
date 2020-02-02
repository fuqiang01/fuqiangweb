<template>
  <div class="content-wrapper">
    <div class="content container clearfloat">
      <ServiceList :list="list" />
      <ServiceContent />
    </div>
  </div>
</template>

<script>
import ServiceList from "@/components/service/ServiceList";
import ServiceContent from "@/components/service/ServiceContent";
export default {
  components: {
    ServiceList,
    ServiceContent
  },
  props: ["list"],
};
</script>


<style lang="scss" scoped>
@import "@/assets/style/service/content";
</style>