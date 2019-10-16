<template>
  <div class="content">
    <Hot />
    <Service :title="gszc.title" :titleLinkList="gszc.titleLinkList" :dataList="gszc.dataList" />
    <Service :title="csfw.title" :titleLinkList="csfw.titleLinkList" :dataList="csfw.dataList" />
    <Service :title="zscq.title" :titleLinkList="zscq.titleLinkList" :dataList="zscq.dataList" />
    <News />
    <Contact />
  </div>
</template>

<script>
import Hot from "@/components/index/Hot";
import Service from "@/components/index/Service";
import News from "@/components/index/News";
import Contact from "@/components/index/Contact";
export default {
  data() {
    return {
      gszc: {
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
          dt: {
            title: "公司注册",
            viceTitle: "专属企业代理人一对一服务做boss，足不出户创办公司",
            src: require("@/assets/img/gongshang_1.jpg")
          },
          dd: [
            {
              id: "1",
              title: "公司注册",
              viceTitle: "专属企业代理人一对一服务做boss，足不出户创办公司",
              src: require("@/assets/img/gongshang_2.jpg"),
              num: 3 //2代表一行放连个,3代表一行放三个
            },
            {
              id: "2",
              title: "公司注册",
              viceTitle: "专属企业代理人一对一服务做boss，足不出户创办公司",
              src: require("@/assets/img/gongshang_3.jpg"),
              num: 3
            },
            {
              id: "3",
              title: "公司注册",
              viceTitle: "专属企业代理人一对一服务做boss，足不出户创办公司",
              src: require("@/assets/img/gongshang_4.jpg"),
              num: 3
            },
            {
              id: "4",
              title: "公司注册",
              viceTitle: "专属企业代理人一对一服务做boss，足不出户创办公司",
              src: require("@/assets/img/gongshang_5.jpg"),
              num: 2
            },
            {
              id: "5",
              title: "公司注册",
              viceTitle: "专属企业代理人一对一服务做boss，足不出户创办公司",
              src: require("@/assets/img/gongshang_5.jpg"),
              num: 2
            }
          ]
        }
      },
      csfw: {
        title: "财税服务",
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
          dt: {
            title: "股权转让",
            viceTitle: "专属企业代理人一对一服务做boss，足不出户创办公司",
            src: require("@/assets/img/caishui_1.jpg")
          },
          dd: [
            {
              id: "1",
              title: "外资企业变更",
              viceTitle: "专属企业代理人一对一服务做boss，足不出户创办公司",
              src: require("@/assets/img/caishui_2.jpg"),
              num: 2 //2代表一行放连个,3代表一行放三个
            },
            {
              id: "2",
              title: "内资公司变更(法人)",
              viceTitle: "专属企业代理人一对一服务做boss，足不出户创办公司",
              src: require("@/assets/img/caishui_3.jpg"),
              num: 2
            },
            {
              id: "3",
              title: "内资公司变更(法人)",
              viceTitle: "专属企业代理人一对一服务做boss，足不出户创办公司",
              src: require("@/assets/img/caishui_4.jpg"),
              num: 3
            },
            {
              id: "4",
              title: "外资代表处变更",
              viceTitle: "专属企业代理人一对一服务做boss，足不出户创办公司",
              src: require("@/assets/img/caishui_5.jpg"),
              num: 3
            },
            {
              id: "5",
              title: "内资公司注销",
              viceTitle: "专属企业代理人一对一服务做boss，足不出户创办公司",
              src: require("@/assets/img/caishui_6.jpg"),
              num: 3
            }
          ]
        }
      },
      zscq: {
        title: "知识产权",
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
          dt: {
            title: "商标注册",
            viceTitle: "专属企业代理人一对一服务做boss，足不出户创办公司",
            src: require("@/assets/img/chanquan_1.jpg")
          },
          dd: [
            {
              id: "1",
              title: "发明专利",
              viceTitle: "专属企业代理人一对一服务做boss，足不出户创办公司",
              src: require("@/assets/img/chanquan_2.jpg"),
              num: 2 //2代表一行放连个,3代表一行放三个
            },
            {
              id: "2",
              title: "实用新用专利",
              viceTitle: "专属企业代理人一对一服务做boss，足不出户创办公司",
              src: require("@/assets/img/chanquan_3.jpg"),
              num: 2
            },
            {
              id: "3",
              title: "外观设计专利(法人)",
              viceTitle: "专属企业代理人一对一服务做boss，足不出户创办公司",
              src: require("@/assets/img/chanquan_4.jpg"),
              num: 3
            },
            {
              id: "4",
              title: "商标注册",
              viceTitle: "专属企业代理人一对一服务做boss，足不出户创办公司",
              src: require("@/assets/img/chanquan_5.jpg"),
              num: 3
            },
            {
              id: "5",
              title: "商标VIP",
              viceTitle: "专属企业代理人一对一服务做boss，足不出户创办公司",
              src: require("@/assets/img/chanquan_6.jpg"),
              num: 3
            }
          ]
        }
      }
    };
  },
  components: {
    Hot,
    Service,
    News,
    Contact
  }
};
</script>

<style lang="scss" scoped>
.content {
  padding-top: 50px;
}
</style>