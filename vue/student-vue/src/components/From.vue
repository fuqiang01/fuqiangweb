<template>
  <div class="wrapper" @click="wrapperOnClick" v-show="showFrom">
    <ul>
      <li>
        <label for="name">姓名:</label>
        <input type="text" placeholder="请输入姓名" id="name" v-model="dataObj.name" />
      </li>
      <li>
        <label>性别:</label>
        <input type="radio" name="sex" value="0" v-model="dataObj.sex" />
        <span>男</span>
        <input type="radio" name="sex" value="1" v-model="dataObj.sex" />
        <span>女</span>
      </li>
      <li>
        <label for="sNo">学号:</label>
        <input type="text" placeholder="请输入学号" id="sNo" v-model="dataObj.sNo" />
      </li>
      <li>
        <label for="email">邮箱:</label>
        <input type="text" placeholder="请输入邮箱" id="email" v-model="dataObj.email" />
      </li>
      <li>
        <label for="birth">出生年月:</label>
        <input type="text" placeholder="请输入出生年月" id="birth" v-model="dataObj.birth" />
      </li>
      <li>
        <label for="phone">电话:</label>
        <input type="text" placeholder="请输入电话" id="phone" v-model="dataObj.phone" />
      </li>
      <li>
        <label for="address">住址:</label>
        <input type="text" placeholder="请输入住址" id="address" v-model="dataObj.address" />
      </li>
      <li>
        <label></label>
        <span class="submit" @click="onSubmit">修改</span>
        <span class="reset" @click="onReset">重置</span>
      </li>
    </ul>
  </div>
</template>

<script>
import api from "../api";
import { mapState, mapMutations, mapActions } from 'vuex';
export default {
  data() {
    return {
      a: 1
    };
  },
  computed: {
      ...mapState(['modifyingStu','showFrom']),
      dataObj() {
        return {
          a: this.a,
          ...this.modifyingStu 
        }
      }
  },
  methods: {
    ...mapMutations(['setShowFrom', 'setModifyingStu']),
    ...mapActions(['getStuList']),
    wrapperOnClick (e) {
        if (e.target === document.querySelector('.wrapper')) {
          this.setShowFrom(false);
          this.a++;
        }
    },
    onSubmit() {
      api
        .updateStudent(this.dataObj)
        .then(res => {
          alert(res.data.msg);
          this.setShowFrom(false);
          this.getStuList();
        })
        .catch(err => {
          alert(err.data.msg);
        });
    },
    onReset() {
      this.setModifyingStu({
        name: "",
        sNo: "",
        sex: 0,
        email: "",
        birth: "",
        phone: "",
        address: ""
      })
    }
  }
};
</script>

<style lang="less" scoped>
.wrapper {
  text-align: center;
  position: fixed;
  z-index: 3;
  background: rgba(0,0,0,.3);
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  ul {
    list-style: none;
    display: inline-block;
    text-align: left;
    padding: 100px 200px;
    margin-top: 100px;
    background: #fff;
    li {
      margin-bottom: 10px;
      label {
        width: 80px;
        text-align: right;
        display: inline-block;
        padding-right: 20px;
      }
      span {
        margin-right: 20px;
      }
      input[type="text"] {
        line-height: 25px;
        padding-left: 15px;
        width: 200px;
      }
      .submit,
      .reset {
        padding: 5px 30px;
        background: #a4a4a4;
        border-radius: 5px;
        cursor: pointer;
        &:hover {
          background: #bbb;
        }
      }
    }
  }
}
</style>