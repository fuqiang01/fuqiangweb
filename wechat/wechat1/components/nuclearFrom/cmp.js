// components/nuclearFrom/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    industryType: [
      [
        "科技类",
        "服务类",
        "管理类",
        "咨询类",
        "其他"
      ], [
        "网络科技",
        "通讯科技",
        "激光科技",
        "海洋科技",
        "生物医药科技",
        "新能源科技"
      ]
    ],
    industryTypeIndex: 0,
    companyType: [
      "有限公司",
      "有限责任公司",
      "合伙企业",
      "股份有限公司"
    ],
    companyTypeIndex: 0,
    address: ['湖北省', '随州市', '曾都区']
  },


  /**
   * 组件的方法列表
   */
  methods: {
    addressChange: function (e) {
      this.setData({
        address: e.detail.value
      })
    },

    industryTypeChange: function (e) {
      this.setData({
        industryTypeIndex: e.detail.value[1]
      });
    },

    industryTypeColumnChange: function (e) {

      if (e.detail.column == 1) {
        return;
      }

      var arr = this.data.industryType;
      switch (e.detail.value) {
        case 0: {
          arr[1] = [
            "网络科技",
            "通讯科技",
            "激光科技",
            "海洋科技",
            "生物医药科技",
            "新能源科技"
          ]
        }
        break;
        case 1: {
          arr[1] = [
            "生活服务",
            "企业服务",
            "租赁服务",
            "其他服务"
          ]
        }
        break;
        case 2: {
          arr[1] = [
            "企业管理",
            "酒店管理",
            "物业管理"
          ]
        }
        break;
        case 3: {
          arr[1] = [
            "战略咨询",
            "IT咨询",
            "商务咨询"
          ]
        }
        break;
        case 4: {
          arr[1] = [
            "建筑装潢",
            "批发采购",
            "软件开发"
          ]
        }
      }
      this.setData({
        industryType: arr
      })
    },

    companyTypeChange: function (e) {
      this.setData({
        companyTypeIndex: e.detail.value
      })
    }
  }
})
