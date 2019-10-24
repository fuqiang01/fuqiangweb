//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    serverList: [
      { src: '/img/server_list_1.png', info: '公司注册'},
      { src: '/img/server_list_2.png', info: '代理记账'},
      { src: '/img/server_list_3.png', info: '资质代办'},
      { src: '/img/server_list_4.png', info: '税收筹划'},
      { src: '/img/server_list_5.png', info: '法律服务'},
      { src: '/img/server_list_6.png', info: '灵活用工'},
      { src: '/img/server_list_7.png', info: '财税资讯'},
      { src: '/img/server_list_8.png', info: '招商加盟'},
      { src: '/img/server_list_9.png', info: '电子合同'},
      { src: '/img/server_list_10.png', info: '更多服务'}
    ],
    hotNews: [
      { title: "新闻标题一新闻标题一新闻标题一新闻标题一", url: ""},
      { title: "新闻标题二新闻标题二新闻标题二新闻标题二", url: ""},
      { title: "新闻标题三新闻标题三新闻标题三新闻标题三", url: ""},
    ],
    serverInfoTitle: ["创业法宝","开办公司","企业管理","热门服务"],
    activeIndex: 0,
    serverInfoItem: [
      {
        item2: [
          {
            title: "免费企业核名",
            viceTitle: "同步工商系统",
            itemFlag: "3秒出结果",
            src: "/img/info_1.png"
          },
          {
            title: "工商注册资料包",
            viceTitle: "开公司必备",
            itemFlag: "免费领",
            src: "/img/info_4.png"
          },
          {
            title: "创业合同五件套",
            viceTitle: "解决创业难题",
            itemFlag: "免费领",
            src: "/img/info_8.png"
          },
          {
            title: "免费定制代帐方案",
            viceTitle: "资深会计服务",
            itemFlag: "出错赔付",
            src: "/img/info_2.png"
          }
        ],
        item4: [
          {
            title: "财税管家",
            viceTitle: "一站式服务",
            src: "/img/info_11.png"
          },
          {
            title: "社保代缴",
            viceTitle: "低至15.5/人",
            src: "/img/info_10.png"
          },
          {
            title: "食品资质",
            viceTitle: "加急拿证",
            src: "/img/info_8.png"
          },
          {
            title: "ICP资质",
            viceTitle: "一站式服务",
            src: "/img/info_4.png"
          }
        ]
      },
      {
        item2: [
          {
            title: "普通公司注册",
            viceTitle: "不成功退款",
            itemFlag: "3天取证",
            src: "/img/info_1.png"
          },
          {
            title: "金融公司注册",
            viceTitle: "全行业覆盖",
            itemFlag: "通过率高",
            src: "/img/info_7.png"
          },
          {
            title: "离岸公司注册",
            viceTitle: "1对1代办",
            itemFlag: "零风险",
            src: "/img/info_9.png"
          },
          {
            title: "香港公司注册",
            viceTitle: "不成功退款",
            itemFlag: "税率低",
            src: "/img/info_5.png"
          }
        ],
        item4: [
          {
            title: "无地址注册",
            viceTitle: "轻松拿证",
            src: "/img/info_6.png"
          },
          {
            title: "银行开户",
            viceTitle: "高效安全",
            src: "/img/info_10.png"
          },
          {
            title: "印章刻制",
            viceTitle: "急速出章",
            src: "/img/info_9.png"
          },
          {
            title: "营业执照",
            viceTitle: "3天到手",
            src: "/img/info_8.png"
          }
        ]
      },
      {
        item2: [
          {
            title: "资质办理",
            viceTitle: "全行业资质",
            itemFlag: "1对1服务",
            src: "/img/info_4.png"
          },
          {
            title: "电子合同",
            viceTitle: "在线合同签署",
            itemFlag: "安全高效",
            src: "/img/info_8.png"
          },
          {
            title: "税收筹划",
            viceTitle: "节税达88%",
            itemFlag: "合法合规",
            src: "/img/info_11.png"
          },
          {
            title: "免费法律咨询",
            viceTitle: "专业律师服务",
            itemFlag: "快速响应",
            src: "/img/info_7.png"
          }
        ],
        item4: [
          {
            title: "个税乐",
            viceTitle: "提高收入",
            src: "/img/info_11.png"
          },
          {
            title: "企税乐",
            viceTitle: "降低80%成本",
            src: "/img/info_9.png"
          },
          {
            title: "sass代帐",
            viceTitle: "提高做账效率",
            src: "/img/info_2.png"
          },
          {
            title: "财税管家",
            viceTitle: "一张是服务",
            src: "/img/info_11.png"
          }
        ]
      },
      {
        item2: [
          {
            title: "注册+代帐",
            viceTitle: "1对1服务",
            itemFlag: "全程代办",
            src: "/img/info_1.png"
          },
          {
            title: "无地址注册",
            viceTitle: "轻松开公司",
            itemFlag: "不成功退款",
            src: "/img/info_6.png"
          },
          {
            title: "小规模代理记账",
            viceTitle: "告别糊涂账",
            itemFlag: "出错赔付",
            src: "/img/info_2.png"
          },
          {
            title: "印章刻章",
            viceTitle: "绝对保密",
            itemFlag: "急速出章",
            src: "/img/info_3.png"
          }
        ],
        item4: [
          {
            title: "食品资质",
            viceTitle: "15天拿证",
            src: "/img/info_4.png"
          },
          {
            title: "社保开户",
            viceTitle: "快速高效",
            src: "/img/info_8.png"
          },
          {
            title: "股权变更",
            viceTitle: "专业合规",
            src: "/img/info_9.png"
          },
          {
            title: "个税筹划",
            viceTitle: "提高收入",
            src: "/img/info_11.png"
          }
        ]
      }
    ]
  },
  serverInfoSwiperChange (e) {
    let index = e.detail.current;
    this.setData({
      activeIndex: index,
    })
  },
  serverInfoTitleTap(e){
    let index = e.currentTarget.dataset.index;
    this.setData({
      activeIndex: index,
    })
  },
  onLoad: function () {
    
  }
})
