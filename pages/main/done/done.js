Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  data: { // 估计是用函数的方式
    // num: 30
  },
  properties: {
    calorie: {
      type: Number
    },
    footstep:{
      type: Number
    },
    isDone: {
      type: Boolean
    },
    isFinish: {
      type: Boolean
    }
  },
  methods:{
    cancel() {
      this.setData({
        isDone: false
      })
    },
    tocard() {
      this.setData({
        isDone: false
      })
      this.triggerEvent('myevent', '');
    }
  }
})