<template>
  <div class="kjfw">
    <Banner />
    <Content />
  </div>
</template>

<script>
import Banner from "@/components/service/Banner";
import Content from "@/components/service/Content";
export default {
  components: {
    Banner,
    Content
  },
  data() {
    return {
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