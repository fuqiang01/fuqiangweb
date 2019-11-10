<template>
  <div class="about">
    <ul>
      <li 
        v-for="(item,index) in arr" 
        :key="item"
        :class="{'active': isActive[index] == 1}"
        @click="onClick(index)">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return{
      arr: [1,2,3],
      isActive: [0,1,0]
    }
  },
  computed: {
    // isActive(){
    //   return [0,1,0];
    // }
  },
  methods: {
    onClick( index ) {
      this.$set( this.isActive, index, 1);
      console.log(this.isActive);
    }
  }
}
</script>

<style>
.active{
  color: red;
}
</style>
