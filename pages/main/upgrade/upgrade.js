import { setTarget} from '../../../utils/func.js';

Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  data: { // 估计是用函数的方式
    // num: 30
    // isUpgrade: true
  },
  properties: {
    isUpgrade: {
      type: Boolean
    }
  },
  methods: {
    cancel() {
      // console.log(this)
      // this.isUpgrade = false
      this.setData({
        isUpgrade: false
      })
    },
    getBetter() {
      setTarget(1);
      // this.isUpgrade = false
      this.setData({
        isUpgrade: false
      })
    }
  }
})