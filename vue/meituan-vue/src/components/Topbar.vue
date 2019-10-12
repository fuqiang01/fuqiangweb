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
            <p>我的美团</p>
            <div class="hover-show">
              <a href="#">我的订单</a>
              <a href="#">我的收藏</a>
              <a href="#">我的订单</a>
              <a href="#">我的收藏</a>
              <a href="#">我的订单</a>
            </div>
          </li>
          <li>
            <p>我的美团</p>
            <div class="hover-show">
              <a href="#">我的订单</a>
              <a href="#">我的收藏</a>
              <a href="#">我的订单</a>
              <a href="#">我的收藏</a>
              <a href="#">我的订单</a>
            </div>
          </li>
          <li>
            <p>我的美团</p>
            <div class="hover-show">
              <a href="#">我的订单</a>
              <a href="#">我的收藏</a>
              <a href="#">我的订单</a>
              <a href="#">我的收藏</a>
              <a href="#">我的订单</a>
            </div>
          </li>
          <li>
            <p>我的美团</p>
            <div class="hover-show">
              <a href="#">我的订单</a>
              <a href="#">我的收藏</a>
              <a href="#">我的订单</a>
              <a href="#">我的收藏</a>
              <a href="#">我的订单</a>
            </div>
          </li>
          <li>
            <p>我的美团</p>
            <div class="hover-show">
              <a href="#">我的订单</a>
              <a href="#">我的收藏</a>
              <a href="#">我的订单</a>
              <a href="#">我的收藏</a>
              <a href="#">我的订单</a>
            </div>
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
.topbar{
    background: #F8F8F8;
    color: #999;
    .left{
        .table-city{
            background: #F4F4F4;
            border: 1px solid #e5e5e5;
            border-radius: 2px;
            padding: 0 2px;
            color: #666;
        }
        .city-list{
            a{
                padding: 0 5px;
                color: #999;
            }
        }
        .login{
            color: #FE8C00;
            padding: 0 5px;
        }
        .registered{
            padding: 0 5px;
        }
    }
    .right{
        ul{
            li{
                display: inline-block;
                .hover-show{
                    display: none;
                }
            }
        }
    }
}
</style>