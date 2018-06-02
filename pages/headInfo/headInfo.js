// pages/headInfo/headInfo.js
import { idoStage, getOpenId} from '../../utils/func.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userData: {
      avatarUrl: 'https://wx.qlogo.cn/mmopen/vi_32/TVAicR3KQSMc1ibT8slo1R6YrjFZRibqaDuUZiaEKHibI8Er9u9VUUPFr2yg8odykvcWictp24vgulUbufZEZ4p7uwUg/132',
      nickName: 'cookie_🍪',
      pre: '白',
      nick: '新手小白',
      totalFootStep: 2345,
      totalka: 10,
      day: 10,
      cal: 6666,
    },
    idoStage: idoStage.slice(1,6),
    calcPos: 0,
    scrollPos: 0,
    loadingShow: true,
    // cal: 666
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let userData = wx.getStorageSync('userData');    
    new Promise((resolve, reject) => {
      let openId = getOpenId()
      wx.request({
        url: 'https://wxapi.devoted.net.cn/user/stepInfo',
        method: 'POST',
        data: { openId },
        success: (res) => {
          let data = res.data.data;
          userData.totalFootStep = data.allStepNum;
          userData.day = data.sportDay
          userData.totalka = data.clockDay;
          resolve(data.allStepNum)
        }
      })
    }).then((stepNum) => {
      wx.request({
        url: 'https://wxapi.devoted.net.cn/sport/heatTransfer',
        method: 'POST',
        data: { stepNum },
        success: (res) => {
          let data = res.data.data;
          // console.log(data)
          userData.cal = data.calorie
          // resolve/
        }
      })
    }).then(() => {
      // console.log(userData)
      let calcPos = 0;
      let totalKa = userData.totalka;
      if (totalKa === 1) {
        calcPos = 20;
      }
      else if (totalKa < 7) {
        calcPos = 20 + (totalKa - 1) / 6 * 20
      }
      else if (totalKa < 21) {
        calcPos = 40 + (totalKa - 7) / 14 *20
      }
      else if (totalKa < 39) {
        calcPos = 60 + (totalKa - 21) / 18 * 20
      }
      else if (totalKa < 66) {
        calcPos = 80 + (totalKa - 39) / 27 * 20
      }
      else {
        calcPos = 100
      }
      this.setData({
        userData,
        calcPos,
        loadingShow: false
      })
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */

  clickBottom() {
    this.setData({
      scrollPos: -100
    })
  },
  getDown() {
    this.setData({
      scrollPos: 0
    })
  },
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})