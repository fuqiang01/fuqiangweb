<template>
  <div class="gsdl">
    <Banner />
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
    ...mapMutations(["setServiceConItem"]),
    getData(id) {
      var arr = this.serviceCon.filter(function(ele) {
        return ele.id == id;
      });
      this.setServiceConItem(arr[0]);
    }
  },
  mounted() {
    const id = this.$route.params.id;
    this.getData(id);
  },
  beforeRouteUpdate(to, from, next) {
    this.getData(to.params.id);
    next();
  }
};
</script>