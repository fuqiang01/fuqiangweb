<template>
  <div class="header">
    <div class="container">
      <el-row>
        <el-col :span="6">
          <a href="#" class="logo">
            <img src="../assets/img/logo.png" alt />
          </a>
        </el-col>
        <el-col :span="18">
          <div class="input-wrapper">
            <input
              type="text"
              placeholder="搜索商品或地点"
              v-model="searchValue"
              @blur="onBlur"
              @focus="onFocus"
            />
            <span>
              <i class="el-icon-search"></i>
            </span>
            <dl class="hot-box" v-show="hotBoxShow">
              <dt>热门搜索</dt>
              <dd v-for="(item,index) in hotData" :key="index">
                <a :href="item.url">{{ item.text }}</a>
              </dd>
            </dl>
            <ul class="search-box" v-show="searchBoxShow">
              <li v-for="(item,index) in searchData" :key="index">
                <a :href="item.url">{{ item.text }}</a>
              </li>
            </ul>
          </div>
          <div class="recommended">
            <a v-for="(item,index) in recommendedData" :key="index" :href="item.url">{{ item.text }}</a>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchValue: "",
      inputFocus: false,
      hotData: [
        {
          text: "武汉欢乐谷",
          url: "#"
        },
        {
          text: "黄鹤楼",
          url: "#"
        },
        {
          text: "武汉星空失恋博物馆",
          url: "#"
        },
        {
          text: "武汉海昌极地海洋公园",
          url: "#"
        }
      ],
      searchData: [
        {
          text: "随州",
          url: "#"
        }
      ],
      recommendedData: [
        {
          text: "武汉欢乐谷",
          url: "#"
        },
        {
          text: "黄鹤楼",
          url: "#"
        },
        {
          text: "武汉星空失恋博物馆",
          url: "#"
        },
        {
          text: "武汉海昌极地海洋公园",
          url: "#"
        }
      ]
    };
  },
  computed: {
    searchBoxShow() {
      return this.searchValue !== "" && this.inputFocus;
    },
    hotBoxShow() {
      return this.inputFocus && this.searchValue == "";
    }
  },
  methods: {
    onBlur() {
      this.inputFocus = false;
    },
    onFocus() {
      this.inputFocus = true;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/myheader";
</style>