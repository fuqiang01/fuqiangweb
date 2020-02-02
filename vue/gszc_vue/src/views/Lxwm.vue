<template>
  <div class="kjfw">
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
      title: "关于我们",
      list: [
        {
          id: 1,
          title: "公司简介"
        },
        {
          id: 2,
          title: "企业文化"
        },
        {
          id: 3,
          title: "联系我们"
        }
      ],
    };
  },
  computed: {
    ...mapState(["serviceCon"])
  },
  components: {
    Banner,
    Content,
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
