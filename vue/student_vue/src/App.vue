<template>
  <div id="app">
    <div class="header">
      <img src="./assets/logo.png" alt />
      <span>渡一教育</span>
    </div>
    <div class="content">
      <dl class="left">
        <dt>学生管理</dt>
        <router-link to="/" tag="dd">学生列表</router-link>
        <router-link to="/addStu" tag="dd">新增学生</router-link>
      </dl>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
* {
  padding: 0;
  margin: 0;
}
html,body,#app{
  width: 100%;
  height: 100%;
}
.header {
  height: 70px;
  background: #354457;
  color: #b3bcc5;
  padding-left: 20px;
  img {
    height: 50px;
    vertical-align: middle;
  }
  span {
    line-height: 70px;
  }
}
.content{
  height: calc(100% - 70px);
  .left{
    float: left;
    width: 200px;
    background: #4d5e70;
    color: #b3bcc5;
    box-sizing: border-box;
    height: 100%;
    dt{
      font-size: 18px;
      font-weight: bold;
      padding: 10px;
    }
    dd{
      line-height: 40px;
      cursor: pointer;
      padding: 0 30px;
      &.active{
        background:#ddd;
        color: #354457;
      }
    }
  }
  .right{
    float: left;
    width: calc(100% - 200px);
    height: 100%;
    background: #f5f5f5;
  }
}
</style>
