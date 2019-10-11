<template>
  <div class="changePage">
    <ul>
      <li @click="onFirstClick" :class="[activeIndex === 1 && 'failure']">首页</li>
      <li @click="onPrevClick" :class="[activeIndex === 1 && 'failure']">上一页</li>
      <li
        v-for="(item,index) in pageArr"
        :key="index"
        :class="[item === activeIndex && 'active']"
        @click="onNumClick(item)">{{ item }}</li>
      <li @click="onNextClick" :class="[activeIndex === allPageNum && 'failure']">下一页</li>
      <li @click="onLastClick" :class="[activeIndex === allPageNum && 'failure']">尾页</li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import api from "../api";
export default {
  data() {
    return {
      activeIndex: 1,
    };
  },
  computed: {
    ...mapState(["cont"]),
    allPageNum() {
        return parseInt(this.cont / api.size) + 1;
    },
    pageArr() {
      let pageArr = [];
      if (this.allPageNum <= 5) {
        for (let i = 1; i <= this.allPageNum; i++) {
          pageArr.push(i);
        }
      } else {
        if (this.activeIndex <= 3) {
          for (let i = 1; i <= 5; i++) {
            pageArr.push(i);
          }
        } else if (this.activeIndex >= this.allPageNum - 2) {
          for (let i = this.allPageNum - 4; i <= this.allPageNum; i++) {
            pageArr.push(i);
          }
        } else {
          for (let i = 0; i < 5; i++) {
            pageArr.push(this.activeIndex - 2 + i);
          }
        }
      }
      return pageArr;
    },
  },
  methods: {
      ...mapMutations(['setStuList']),
    onFirstClick() {
      if (this.activeIndex === 1) {
        return;
      }
      this.activeIndex = 1;
    },
    onPrevClick() {
      if (this.activeIndex === 1) {
        return;
      }
      this.activeIndex--;
    },
    onNextClick() {
      if (this.activeIndex === this.allPageNum) {
        return;
      }
      this.activeIndex++;
    },
    onLastClick() {
      if (this.activeIndex === this.allPageNum) {
        return;
      }
      this.activeIndex = this.allPageNum;
    },
    onNumClick(num) {
      this.activeIndex = num;
    }
  },
  watch: {
      activeIndex() {
          api.findByPage( this.activeIndex)
            .then( res =>{
                this.setStuList(res.data.data.findByPage)
            })
      }
  }
};
</script>




<style lang="less" scoped>
.changePage {
  text-align: right;
  padding: 50px 50px 0 0;
  ul {
    li {
      display: inline-block;
      text-decoration: none;
      padding: 5px 10px;
      border: 1px solid #e0e0e0;
      margin: 0 3px;
      cursor: pointer;
      &.active {
        background: #4d5e70;
        color: #fff;
        border-color: #4d5e70;
      }
      &.failure {
        color: #aaa;
      }
    }
  }
}
</style>