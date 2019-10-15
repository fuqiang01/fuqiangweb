<template>
  <div class="content">
    <Hot />
    <Service />
    <News />
    <Contact />
  </div>
</template>

<script>
import Hot from "@/components/index/Hot";
import Service from "@/components/index/Service";
import News from "@/components/index/News";
import Contact from "@/components/index/Contact";
export default {
  components: {
    Hot,
    Service,
    News,
    Contact
  }
};
</script>

<style lang="scss" scoped>
.content {
  padding-top: 50px;
}
</style>