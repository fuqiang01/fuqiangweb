<template>
  <div class="topbar">
    <el-row class="container">
      <el-col :span="10" class="left">
        <i class="el-icon-location-outline"></i>
        <span>上海</span>
        <router-link :to="{name:'home'}" class="table-city">切换城市</router-link>
        <span class="city-list">
          [
          <a href="#">上海</a>
          <a href="#">北京</a>
          <a href="#">深圳</a>
          ]
        </span>
        <router-link to="{name: 'login'}" class="login">立即登录</router-link>
        <router-link to="{name: 'registered'}" class="registered">注册</router-link>
      </el-col>
      <el-col :span="10" :offset="4" class="right">
        <ul>
          <li>
            <a href="#">我的美团</a>
            <div class="hover-show">
              <a href="#">我的订单</a>
              <a href="#">我的收藏</a>
              <a href="#">我的订单</a>
              <a href="#">我的收藏</a>
              <a href="#">我的订单</a>
            </div>
          </li>
          <li class="phone-app">
            <a href="#" >手机APP</a>
          </li>
          <li>
            <a href="#">商家中心</a>
            <div class="hover-show">
              <a href="#">登录商家中心</a>
              <a href="#">我想合作</a>
              <a href="#">免费合作美团排队</a>
              <a href="#">登录商家中心</a>
              <a href="#">我想合作</a>
              <a href="#">免费合作美团排队</a>
            </div>
          </li>
          <li>
            <a href="#">美团规则</a>
            <div class="hover-show">
              <a href="#">规则中心</a>
              <a href="#">规则目录</a>
              <a href="#">规则评议院</a>
            </div>
          </li>
          <li class="web-nav">
            <a href="#">网站导航</a>
            <el-row :gutter="20" class="hover-show">
              <el-col :span='6'>
                <dl class="clearfloat">
                  <dt>酒店旅游</dt>
                  <dd>国际机票</dd>
                  <dd>国际机票</dd>
                  <dd>国际机票</dd>
                  <dd>国际机票</dd>
                  <dd>国际机票</dd>
                  <dd>国际机票</dd>
                  <dd>国际机票</dd>
                </dl>
              </el-col>
              <el-col :span='4'>
                <dl class="clearfloat">
                  <dt>酒店旅游</dt>
                  <dd>国际机票</dd>
                  <dd>国际机票</dd>
                  <dd>国际机票</dd>
                  <dd>国际机票</dd>
                  <dd>国际机票</dd>
                  <dd>国际机票</dd>
                  <dd>国际机票</dd>
                </dl>
              </el-col>
              <el-col :span='2'>
                <dl class="clearfloat">
                  <dt>酒店旅游</dt>
                  <dd>国际机票</dd>
                  <dd>国际机票</dd>
                  <dd>国际机票</dd>
                  <dd>国际机票</dd>
                  <dd>国际机票</dd>
                </dl>
              </el-col>
              <el-col :span='12'>
                <dl class="app">
                  <dt>手机应用</dt>
                  <dd>
                    <img src="../assets/img/meituan.png" alt="">
                  </dd>
                  <dd>
                    <img src="../assets/img/meituan.png" alt="">
                  </dd>
                  <dd>
                    <img src="../assets/img/meituan.png" alt="">
                  </dd>
                  <dd>
                    <img src="../assets/img/meituan.png" alt="">
                  </dd>
                  <dd>
                    <img src="../assets/img/meituan.png" alt="">
                  </dd>
                  
                </dl>
              </el-col>
            </el-row>
          </li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
  @import '@/assets/style/topbar.scss';
</style>