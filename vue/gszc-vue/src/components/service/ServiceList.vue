<template>
  <ul class="service-list">
    <router-link tag="li" v-for="item in list" :key="item.id" :to="{name: 'gsdl',params:{id:item.id}}">{{ item.title }}</router-link>
  </ul>
</template>

<script>
export default {
  data(){
    return{
      
    }
  },
  props: ['list']
}
</script>

<style lang="scss" scoped>
    @import '@/assets/style/service/servicelist';
</style>