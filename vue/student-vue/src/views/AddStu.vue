<template>
  <div class="right">
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
        <span class="submit" @click="onSubmit">提交</span>
        <span class="reset" @click="onReset">重置</span>
      </li>
    </ul>
  </div>
</template>

<script>
import api from "../api";
export default {
  data() {
    return {
      dataObj: {
        name: "",
        sNo: "",
        sex: 0,
        email: "",
        birth: "",
        phone: "",
        address: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log(this.dataObj);
      api
        .addStudent(this.dataObj)
        .then(res => {
          alert(res.data.msg);
        })
        .catch(err => {
          alert(err.data.msg);
        });
    },
    onReset() {
      this.dataObj = {
        name: "",
        sNo: "",
        sex: 0,
        email: "",
        birth: "",
        phone: "",
        address: ""
      };
    }
  }
};
</script>

<style lang="less" scoped>
.right {
  text-align: center;
  ul {
    list-style: none;
    display: inline-block;
    text-align: left;
    padding-top: 100px;
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