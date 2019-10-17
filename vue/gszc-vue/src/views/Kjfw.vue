<template>
  <div class="kjfw">
    <Banner :title="title" />
    <Content :list="list"/>
  </div>
</template>

<script>
import Banner from "@/components/service/Banner";
import Content from "@/components/service/Content";
import { mapState, mapMutations } from "vuex";
export default {
  components: {
    Banner,
    Content
  },
  data() {
    return {
      title: '会计服务',
      list: [
        {
          id: "21",
          title: "财务审计"
        },
        {
          id: "22",
          title: "税务代办"
        },
        {
          id: "23",
          title: "税收筹划"
        }
      ]
    };
  },
  computed: {
    ...mapState(["serviceCon"])
  },
  methods: {
    ...mapMutations(["setServiceConItem"]),
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