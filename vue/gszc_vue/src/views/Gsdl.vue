<template>
  <div class="gsdl">
    <Banner :title="title" />
    <Content :list="list" />
  </div>
</template>

<script>
import Banner from "@/components/service/Banner";
import Content from "@/components/service/Content";
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      title: "工商代理",
      list: [
        {
          id: "11",
          title: "公司注册"
        },
        {
          id: "12",
          title: "代理记账"
        },
        {
          id: "13",
          title: "资质代办"
        }
      ]
    };
  },
  computed: {
    ...mapState(["serviceCon"])
  },
  components: {
    Banner,
    Content
  },
  methods: {
    ...mapMutations(["setServiceConItem"])
  },
  mounted() {
    const id = this.$route.params.id;
    this.setServiceConItem(id);
  },
  beforeRouteUpdate(to, from, next) {
    this.setServiceConItem(to.params.id);
    next();
  }
};
</script>