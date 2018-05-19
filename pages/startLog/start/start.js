// pages/startLog/start/start.js
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
    new Promise((resolve, rejecte) => {
      let needInfo = {};      
      wx.login({
        success: res => {
          //发送 res.code 到后台换取 openId, sessionKey, unionId
          needInfo.code = res.code
        },
        fail: () => {
          wx.navigateBack({
            delta: -1
          })
        }
      })
      wx.getUserInfo({
        success: (res) => {
          needInfo.iv = res.iv;
          needInfo.encryptedData = res.encryptedData;
        },
        fail: () => {
          wx.navigateBack({
            delta: -1
          })
        }
      })
      resolve(needInfo)
    }).then((res)=>{
      console.log(res)
      wx.request({
        url: 'https://wxapi.devoted.net.cn/user/oauth',
        method: 'POST',
        data: res,
        success: (response) => {
          console.log(response)
        }
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