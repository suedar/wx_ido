Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  data: { 
    // nickname: '包子布衣'
  },
  properties: {
    isUpgrade: {
      type: Boolean
    },
    nickname: {
      type: String
    }
  },
  methods: {
    cancel() {
      // console.log(this)
      // this.isUpgrade = false
      this.setData({
        isUpgrade: false
      })
    }
  }
})