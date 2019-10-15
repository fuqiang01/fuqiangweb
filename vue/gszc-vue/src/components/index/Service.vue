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
        <h2>{{ dataList.dd.title }}</h2>
        <p>{{ dataList.dd.viceTitle }}</p>
        <img :src="dataList.dd.src" alt />
      </dt>
      <dd :class="{'f-2': item.num === 2, 'f-3': item.num === 3}" v-for="item in dataList.dd" :key="item.id">
        <h3>{{ item.title }}</h3>
        <p>{{ item.viceTitle }}</p>
        <img :src="item.src" alt />
      </dd>
      <dd class="f-3">
        <h3>内资有限公司注册</h3>
        <p>专属企业代理人一对一服务做boss，足不出户创办公司</p>
        <img src="@/assets/img/gongshang_3.jpg" alt />
      </dd>
      <dd class="f-3">
        <h3>集团公司注册</h3>
        <p>专属企业代理人一对一服务做boss，足不出户创办公司</p>
        <img src="@/assets/img/gongshang_4.jpg" alt />
      </dd>
      <dd class="f-2 left">
        <h3>分公司注册</h3>
        <p>专属企业代理人一对一服务做boss，足不出户创办公司</p>
        <img src="@/assets/img/gongshang_5.jpg" alt />
      </dd>
      <dd class="f-2 left">
        <h3>有限合伙企业注册</h3>
        <p>专属企业代理人一对一服务做boss，足不出户创办公司</p>
        <img src="@/assets/img/gongshang_5.jpg" alt />
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "工商注册",
      titleLinkList: [
        {
          url: "#",
          title: "注册公司"
        },
        {
          url: "#",
          title: "代理记账"
        },
        {
          url: "#",
          title: "公司变更"
        },
        {
          url: "#",
          title: "公司年报"
        },
        {
          url: "#",
          title: "更多>>"
        }
      ],
      dataList: {
        dd: {
          title: "公司注册",
          viceTitle: "专属企业代理人一对一服务做boss，足不出户创办公司",
          src: require("@/assets/img/gongshang_1.jpg")
        },
        dt: [
          {
            id: '1',
            title: "公司注册",
            viceTitle: "专属企业代理人一对一服务做boss，足不出户创办公司",
            src: require("@/assets/img/gongshang_1.jpg"),
            num: 3//2代表一行放连个,3代表一行放三个
          },
          {
             id: '2',
            title: "公司注册",
            viceTitle: "专属企业代理人一对一服务做boss，足不出户创办公司",
            src: require("@/assets/img/gongshang_1.jpg"),
            num: 3
          },
          {
             id: '3',
            title: "公司注册",
            viceTitle: "专属企业代理人一对一服务做boss，足不出户创办公司",
            src: require("@/assets/img/gongshang_1.jpg"),
            num: 3
          },
          {
             id: '4',
            title: "公司注册",
            viceTitle: "专属企业代理人一对一服务做boss，足不出户创办公司",
            src: require("@/assets/img/gongshang_1.jpg"),
            num: 2
          },
          {
             id: '5',
            title: "公司注册",
            viceTitle: "专属企业代理人一对一服务做boss，足不出户创办公司",
            src: require("@/assets/img/gongshang_1.jpg"),
            num: 2
          },
        ]
      }
    };
  }
  // props:[]
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/index/service";
</style>