<template>
  <header>
    <div class="container clearfloat">
      <div class="logo">
        <a href="/">
          <img src="@/assets/img/logo.jpg" alt="logo" />
        </a>
      </div>
      <ul>
        <router-link v-for="(item,index) in navData"
                      :key="index"
                      :to="{name: item.url}"
                      tag="li" 
                      class="nav-item">{{ item.title }}</router-link>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      navData: [
        {
          title: '首页',
          url: 'index'
        },
        {
          title: '工商代理',
          url: 'gsdl'
        },
        {
          title: '会计服务',
          url: 'kjfw'
        },
        {
          title: '知识产权',
          url: 'zscq'
        },
        {
          title: '顾问团队',
          url: 'gwtd'
        },
        {
          title: '财税资讯',
          url: 'cszx'
        },
        {
          title: '关于我们',
          url: 'lxwm'
        }
      ]
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/style/header";
</style>