// pages/headInfo/headInfo.js
import {idoStage} from '../../utils/func.js';
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
      caloria: 6666,
    },
    idoStage: idoStage.slice(1,6),
    calcPos: 100,
    scrollPos: 0
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let res = {
      "openId": "oGnrz0GutS1PYDoPKU-BUQ-rj5BI",
      "pre": "白",
      "nick": "新手小白",
      "nickName": "cookie_🍪",
      "gender": 2,
      "language": "zh_CN",
      "city": "Shantou",
      "province": "Guangdong",
      "country": "China",
      "avatarUrl": "https://wx.qlogo.cn/mmopen/vi_32/TVAicR3KQSMc1ibT8slo1R6YrjFZRibqaDuUZiaEKHibI8Er9u9VUUPFr2yg8odykvcWictp24vgulUbufZEZ4p7uwUg/132",
      "createTime": 1526742468,
      "watermark": {
        "timestamp": 1526742468,
        "appid": "wx4c3e3eebd30ade1f"
      }
    };
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