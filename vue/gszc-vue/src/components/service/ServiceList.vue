<template>
  <ul class="service-list">
    <router-link tag="li" v-for="item in list" :key="item.id" :to="{name: route,params:{id:item.id}}">{{ item.title }}</router-link>
  </ul>
</template>

<script>
export default {
  data(){
    return{
      route: ''
    }
  },
  props: ['list'],
  created() {
    this.route = this.$route.name
  }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/style/service/servicelist';
</style>