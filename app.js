import { ajax, login } from './utils/util.js'
//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    // var logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)
    // let needInfo = {};
    // wx.login({
    //   success: res => {
    //     console.log(res)
    //     //发送 res.code 到后台换取 openId, sessionKey, unionId
    //     wx.request({
    //       url: 'https://wxapi.devoted.net.cn/user/login/' + res.code,
    //       method: 'GET',
    //       success: (response) => {
    //         needInfo.code = response.code
    //       }
    //     })
    //   },
    //   fail: () => {
    //     wx.navigateBack({
    //       delta: -1
    //     })
    //   }
    // })
    // wx.getUserInfo({
    //   success: (res) => {
    //     needInfo.iv = res.iv;
    //     needInfo.encryptedData = res.encryptedData;
    //   }
    // })
  },
  globalData: {
    userInfo: null
  },
  Util: {
    ajax,
    login
  }
})