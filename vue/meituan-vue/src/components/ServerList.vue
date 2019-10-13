<template>
  <div class="server-list">
    <dl class="list">
      <dt>全部服务</dt>
      <dd>
        <i class="el-icon-arrow-right"></i>
        <i class="el-icon-knife-fork"></i>
        <a href="#">美食</a>
      </dd>
      <dd>
        <i class="el-icon-arrow-right"></i>
        <i class="el-icon-knife-fork"></i>
        <a href="#">美食</a>
      </dd>
      <dd>
        <i class="el-icon-arrow-right"></i>
        <i class="el-icon-knife-fork"></i>
        <a href="#">美食</a>
      </dd>
    </dl>
    <div class="info" v-show="isinfo">
        <dl>
            <dt>
                <a href="#">更多<i class="el-icon-arrow-right"></i></a>
                <p>美食</p>
            </dt>
            <dd>
                <a href="#">代金券</a>
            </dd>
            <dd>
                <a href="#">代金券</a>
            </dd>
            <dd>
                <a href="#">代金券</a>
            </dd>
            <dd>
                <a href="#">代金券</a>
            </dd>
            <dd>
                <a href="#">代金券</a>
            </dd>
        </dl>
        <dl>
            <dt>
                <a href="#">更多<i class="el-icon-arrow-right"></i></a>
                <p>美食</p>
            </dt>
            <dd>
                <a href="#">代金券</a>
            </dd>
            <dd>
                <a href="#">代金券</a>
            </dd>
            <dd>
                <a href="#">代金券</a>
            </dd>
            <dd>
                <a href="#">代金券</a>
            </dd>
            <dd>
                <a href="#">代金券</a>
            </dd>
        </dl>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            isinfo: false
        }
    }
}
</script>


<style lang="sass" scoped>
    @import '../assets/style/serverlist'
</style>