<template>
  <div class="news-wrapper">
    <div class="news container clearfloat">
      <div class="left">
        <div class="img">
          <img src="@/assets/img/news_1.jpg" alt />
        </div>
        <div class="text">
          <div class="title">
            <a href="#">更多 &gt;</a>
            <h3>
              热门报道
              <span class="glyphicon glyphicon-triangle-right"></span>
            </h3>
          </div>
          <router-link v-for="item in hotNews" :key="item.id" :to="{name: 'news',params:{id:item.id}}">{{ item.title }}</router-link>
        </div>
      </div>
      <div class="right">
        <div class="img">
          <img src="@/assets/img/news_1.jpg" alt />
        </div>
        <div class="text">
          <div class="title">
            <a href="#">更多 &gt;</a>
            <h3>
              最新报道
              <span class="glyphicon glyphicon-triangle-right"></span>
            </h3>
          </div>
          <router-link v-for="item in newNews" :key="item.id" :to="{name: 'news',params:{id:item.id}}">{{ item.title }}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hotNews: [
        {
          id: "123",
          title: "注册公司需要什么步骤?"
        },
        {
          id: "124",
          title: "注册公司需要什么步骤?"
        },
        {
          id: "125",
          title: "注册公司需要什么步骤?"
        }
      ],
      newNews: [
        {
          id: "223",
          title: "代理记账的流程?"
        },
        {
          id: "224",
          title: "代理记账的流程?"
        },
        {
          id: "225",
          title: "代理记账的流程?"
        }
      ],
    }
  }
}
</script>

<style lang="scss" scoped>
    @import '../../assets/style/index/news'
</style>