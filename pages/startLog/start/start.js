// pages/startLog/start/start.js
import { setClockDay, getOpenId, setLevel} from '../../../utils/func';
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
    new Promise((resolve, reject) => {
      let needInfo = {};      
      let openIdInfo = '';
      wx.login({
        success: res => {
          needInfo.code = res.code;
          openIdInfo = res.code;
          wx.getUserInfo({
            success: (res) => {
              needInfo.iv = res.iv;
              needInfo.encryptedData = res.encryptedData;
              console.log(needInfo)
              wx.request({
                url: 'https://wxapi.devoted.net.cn/user/oauth',
                method: 'POST',
                data: needInfo,
                success: (response) => {
                  if (response.statusCode !== 500) {
                    wx.setStorageSync('userData', response.data.data) 
                    wx.setStorageSync('openId', response.data.data.openId)
                    resolve();
                  }
                }
              })
            }
          })
        }
      })
    }).then(()=> {
      let openId = getOpenId();
      console.log(openId)
      wx.request({
        url: 'https://wxapi.devoted.net.cn/user/stepInfo',
        method: 'POST',
        header: {
          'content-type': 'application/x-www-from-urlencoded' // 默认值
        },
        data: {openId: openId},
        success: (res) => {
          console.log(res)
        }
      })      
    }).then(() => {
      wx.request({
        url: 'https://wxapi.devoted.net.cn/sport/hitokoto',
        success: (res) => {
          // console.log(res)
          wx.setStorage({
            key: 'word',
            data: res.data.data.hitokoto
          })
        }
      })
    }).then(() => {
      // 请求完设置一些东西
      setClockDay();
    }).then(() => {
        wx.redirectTo({
        url: '../../main/main/main',
      })
    }).catch(() => {
      wx.navigateBack({
        delta: -1
      })
    })

    // 这里要多做一步问询的处理 
    
    // wx.redirectTo({
    //     url: '../../main/main/main',
    //   })
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