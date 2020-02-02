<template>
  <div class="banner-con">
    <ul class="title clearfloat">
      <li>
        <a href="#">美团外卖</a>
      </li>
      <li>
        <a href="#">猫眼电影</a>
      </li>
      <li>
        <a href="#">美团酒店</a>
      </li>
    </ul>
    <el-row>
      <el-col :span="14" class="con-1" >
        <el-carousel height="240px">
          <el-carousel-item>
            <a href="#">
                <img src="../assets/img/banner_1.jpg" alt="">
            </a>
          </el-carousel-item>
          <el-carousel-item>
            <a href="#">
                <img src="../assets/img/banner_2.jpg" alt="">
            </a>
          </el-carousel-item>
        </el-carousel>
      </el-col>
      <el-col :span="4" class="con-2">
        <a href="#">
          <img src="../assets/img/banner_img_1.jpg" alt />
        </a>
      </el-col>
      <el-col :span="6" class="con-3">
        <div class="img">
          <img src="../assets/img/avatar.jpg" alt />
        </div>
        <p>Hi!你好</p>
        <a href="#">
          <el-button round class="con-btn">注册</el-button>
        </a>
        <br />
        <a href="#">
          <el-button round class="con-btn">马上登陆</el-button>
        </a>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="7" class="con-4" >
        <a href="#">
          <img src="../assets/img/banner_img_1.jpg" alt />
        </a>
      </el-col>
      <el-col :span="7" class="con-5" >
        <a href="#">
          <img src="../assets/img/banner_img_1.jpg" alt />
        </a>
      </el-col>
      <el-col :span="4" class="con-6">
        <a href="#">
          <img src="../assets/img/banner_img_1.jpg" alt />
        </a>
      </el-col>
      <el-col :span="6" class="con-7">
        <div class="img">
          <img src="../assets/img/download-qr.png" alt />
        </div>
        <p class="p1">美团手机App版</p>
        <p class="p2">
            <span>1元起</span>
            吃喝玩乐
        </p>
      </el-col>
    </el-row>
  </div>
</template>


<style lang="scss" scoped>
@import "../assets/style/bannercon";
</style>