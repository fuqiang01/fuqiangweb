<template>
  <div class="amap-page-container">
    <el-amap vid="amapDemo" :zoom="zoom" :center="center" class="amap-demo">
      <el-amap-marker
        :position="center"
        :visible="marker.visible"
        :draggable="marker.draggable"
      ></el-amap-marker>
      <el-amap-info-window :position="center" :content="windowContent"></el-amap-info-window>
    </el-amap>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: "amap-page",
  data() {
    return {
      zoom: 17,
      center: [113.366021, 31.719505],
      marker: {
        visible: true,
        draggable: false
      },
    };
  },
  computed: {
      ...mapState(['model']),
      windowContent() {
          return    `<div class="map-info-wrapper">
                        <p class="p1">湖北楚威企业登记代理有限公司</p>
                        <p class="p2">业务范围: 注册公司 代理记账 资质代办 网站建设 APP制作</p>
                        <p class="p3">公司地址: 随州市曾都区沿河大道147号</p>
                        <p class="p4">联系电话: ${this.model.phone}</p>
                    </div>`
      }
  },
  methods: {},
};
</script>

<style lang="scss">
@import "@/assets/style/map.scss";
</style>


