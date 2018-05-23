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
    // new Promise((resolve, rejecte) => {
      let needInfo = {};      
      wx.login({
        success: res => {
          //发送 res.code 到后台换取 openId, sessionKey, unionId
          needInfo.code = res.code
          wx.getUserInfo({
            success: (res) => {
              console.log(res)
              needInfo.iv = res.iv;
              needInfo.encryptedData = res.encryptedData;
              console.log(needInfo)
              wx.request({
                url: 'https://wxapi.devoted.net.cn/user/oauth',
                method: 'GET',
                data: needInfo,
                success: (response) => {
                  console.log(response)
                }
              })
            },
            fail: () => {
              wx.navigateBack({
                delta: -1
              })
            }
          })
        },
        fail: () => {
          wx.navigateBack({
            delta: -1
          })
        }
      })
      
    //   resolve(needInfo)
    // }).then((res)=>{
      // console.log(res)
      // wx.request({
      //   url: 'https://wxapi.devoted.net.cn/user/oauth',
      //   method: 'POST',
      //   data: needInfo,
      //   success: (response) => {
      //     console.log(response)
      //   }
      // })
    // })
  // wx.getWeRunData({
  //     success: (res) => {
  //       console.log('wx.getWeRunData: ')
  //       console.log(res)        
  //     }
  //   })
    // 出错了 先用假数据
    // let res = {
    //     "openId": "oGnrz0GutS1PYDoPKU-BUQ-rj5BI",
    //     "pre": "白",
    //     "nick": "新手小白", 
    //     "nickName": "cookie_🍪",
    //     "gender": 2,
    //     "language": "zh_CN",
    //     "city": "Shantou",
    //     "province": "Guangdong",
    //     "country": "China",
    //     "avatarUrl": "https://wx.qlogo.cn/mmopen/vi_32/TVAicR3KQSMc1ibT8slo1R6YrjFZRibqaDuUZiaEKHibI8Er9u9VUUPFr2yg8odykvcWictp24vgulUbufZEZ4p7uwUg/132",
    //     "createTime": 1526742468,
    //     "watermark": {
    //       "timestamp": 1526742468,
    //       "appid": "wx4c3e3eebd30ade1f"
    //     }
    // };

    // wx.request({
    //   url: 'https://wxapi.devoted.net.cn/sport/hitokoto',
    //   success: (res) => {
    //     // console.log(res)
    //     wx.setStorage({
    //       key: 'word',
    //       data: res.data.data.hitokoto
    //     })
    //     // wx.setStorageSync('word', res)        
    //   }
    // })

    // 这里要多做一步问询的处理 
    
    // wx.setStorageSync('userData', res)
    // wx.redirectTo({
    //   url: '../../main/main/main',
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