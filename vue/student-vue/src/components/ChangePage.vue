<template>
  <div class="changePage">
    <ul>
      <li @click="onFirstClick" :class="[nowPage === 1 && 'failure']">首页</li>
      <li @click="onPrevClick" :class="[nowPage === 1 && 'failure']">上一页</li>
      <li v-for="(item,index) in pageArr" :key="index" :class="[item === nowPage && 'active']"
        @click="onNumClick(item)">{{ item }}</li>
      <li @click="onNextClick" :class="[nowPage === allPageNum && 'failure']">下一页</li>
      <li @click="onLastClick" :class="[nowPage === allPageNum && 'failure']">尾页</li>
    </ul>
  </div>
</template>

<script>
  import { mapState, mapMutations, mapActions } from "vuex";
  import api from "../api";
  export default {
    data() {
      return {
        // nowPage: 1,
      };
    },
    computed: {
      ...mapState(["cont", 'nowPage']),
      allPageNum() {
        return parseInt( Math.ceil(this.cont / api.size) );
      },
      pageArr() {
        let pageArr = [];
        if (this.allPageNum <= 5) {
          for (let i = 1; i <= this.allPageNum; i++) {
            pageArr.push(i);
          }
        } else {
          if (this.nowPage <= 3) {
            for (let i = 1; i <= 5; i++) {
              pageArr.push(i);
            }
          } else if (this.nowPage >= this.allPageNum - 2) {
            for (let i = this.allPageNum - 4; i <= this.allPageNum; i++) {
              pageArr.push(i);
            }
          } else {
            for (let i = 0; i < 5; i++) {
              pageArr.push(this.nowPage - 2 + i);
            }
          }
        }
        return pageArr;
      },
    },
    methods: {
      ...mapMutations(['setStuList', 'setNowPage']),
      ...mapActions(['getStuList']),
      onFirstClick() {
        if (this.nowPage === 1) {
          return;
        }
        this.setNowPage(1);
      },
      onPrevClick() {
        if (this.nowPage === 1) {
          return;
        }
        this.setNowPage(this.nowPage - 1);
      },
      onNextClick() {
        if (this.nowPage === this.allPageNum) {
          return;
        }
        this.setNowPage(this.nowPage + 1);
      },
      onLastClick() {
        if (this.nowPage === this.allPageNum) {
          return;
        }
        this.setNowPage(this.allPageNum);
      },
      onNumClick(num) {
        this.setNowPage(num);
      }
    },
    watch: {
      nowPage() {
        this.setNowPage( this.nowPage);
        this.getStuList();
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
        user-select: none;
        &.active {
          background: #4d5e70;
          color: #fff;
          border-color: #4d5e70;
        }

        &.failure {
          color: #aaa;
          cursor: no-drop;
        }
      }
    }
  }
</style>