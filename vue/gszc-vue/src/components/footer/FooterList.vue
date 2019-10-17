<template>
  <div class="footer-list container clearfloat">
    <div class="fList-left">
      <dl v-for="(item,index) in linkList" :key="index">
        <dt>{{ item.title }}</dt>
        <dd v-for="(listItem,i) in item.list" :key="i">
          <a :href="listItem.url">{{ listItem.title }}</a>
        </dd>
      </dl>
    </div>
    <div class="fList-center">
      <h3>客服热线</h3>
      <h2>{{ model.phone }}</h2>
      <p>周一至周五 08:30-17:30</p>
    </div>
    <div class="fList-right">
      <img :src="model.wxCode" alt />
      <p>湖北楚威官方微信</p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return{
      linkList: [
        {
          title: '关于我们',
          list: [
            {
              url: '#',
              title: '公司介绍'
            },
            {
              url: '#',
              title: '联系我们'
            },
            {
              url: '#',
              title: '关于我们'
            }
          ]
        },
        {
          title: '新闻热点',
          list: [
            {
              url: '#',
              title: '最新新闻'
            },
            {
              url: '#',
              title: '最热新闻'
            }
          ]
        },
        {
          title: '热门服务',
          list: [
            {
              url: '#',
              title: '公司注册'
            },
            {
              url: '#',
              title: '代理记账'
            },
            {
              url: '#',
              title: '资质代办'
            }
          ]
        }
      ]
    }
  },
  computed: {
    ...mapState(['model'])
  }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/style/footer/footerlist';
</style>