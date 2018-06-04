// pages/startLog/authorization/authorization.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSetting({
      success: (response) => {
        if (!response.authSetting['scope.userInfo']) {

        }
        else {
          wx.redirectTo({
            url: '../start/start',
          })
        }
      }
    })
  },
  getUserInfo(e) {
    if (e.detail.userInfo) {
      //用户按了允许授权按钮
      wx.redirectTo({
        url: '../start/start',
      })
    } else {
      //用户按了拒绝按钮
    }
    // wx.redirectTo({
    //   url: '../start/start',
    // })
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