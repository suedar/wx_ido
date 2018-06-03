Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  data: { // 估计是用函数的方式
    date: `${new Date().getFullYear()}/${new Date().getMonth() < 10 ? `0${new Date().getMonth()}`: new Date().getMonth()}/${new Date().getDate() < 10 ? `0${new Date().getDate()}`: new Date().getDate()}`
  },
  properties: {
    show: {
      type: Boolean
    },
    sportDay: {
      type: Number
    }
  },
  methods: {
    cancel(){
      this.setData({
        show: false
      })
      this.triggerEvent('myevent');
    }
  }
})