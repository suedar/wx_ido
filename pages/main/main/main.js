// pages/main/main/main.js
import {sleep} from '../../../utils/func.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userData: '',
    word: '',
    isShow: 'main-middle'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    new Promise((resolve) => {
      wx.getSetting({
        success: (response) => {
          // console.log(response)
          if (!response.authSetting['scope.werun']) {
            wx.authorize({
              scope: 'scope.werun',
              success: () => {
                resolve()
              }
            })
          }
          else {
            resolve();
          }
        }
      })
    }).then(() => {
      let userData = wx.getStorageSync('userData')
      // console.log(userData)
      this.setData({
        userData
      })

      let word = wx.getStorage({
        key: 'word',
        success: res => {
          this.setData({
            word: res.data
          })
        },
      })
    })
  },
  clickDO() { 
    new Promise((resolve, reject) => {
      this.setData({
        isShow: 'main-middle isDisapperence'
      })
      setTimeout(resolve, 750)
    }).then(() => {
        wx.redirectTo({
        url: '../clickDO/clickDO',
      })
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
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