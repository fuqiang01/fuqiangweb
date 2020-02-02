<template>
  <div class="service container">
    <div class="title">
      <ul>
        <li v-for="(item,index) in titleLinkList" :key="index">
          <a :href="item.url">{{ item.title }}</a>
        </li>
      </ul>
      <h2>{{ title }}</h2>
    </div>
    <dl class="clearfloat">
      <dt>
        <h2>{{ dataList.dt.title }}</h2>
        <p>{{ dataList.dt.viceTitle }}</p>
        <img :src="dataList.dt.src" alt />
      </dt>
      <dd :class="{'f-2': item.num === 2, 'f-3': item.num === 3}" v-for="item in dataList.dd" :key="item.id">
        <h3>{{ item.title }}</h3>
        <p>{{ item.viceTitle }}</p>
        <img :src="item.src" />
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },
  props:['title','titleLinkList', 'dataList']
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/index/service";
</style>