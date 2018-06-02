Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  data: {
    // userData: {
    //   avatarUrl: '',
    //   nickName: '',
    //   pre: '',
    //   nick: ''
    // }
  },
  properties: {
    userData:{
      type: Object
    }
  },
  methods: {
    toHeadInfo() {
      wx.navigateTo({
        url: '../../headInfo/headInfo',
      })
    }
  }
})