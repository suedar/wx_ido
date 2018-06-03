// pages/history/history.js
import { getOpenId } from '../../utils/func.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    historyData: [],
    loadingShow: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(getOpenId())
    let openId = getOpenId();
    // console.log(openId)
    new Promise((resolve) => {
      wx.request({
        url: 'https://wxapi.devoted.net.cn/sport/getHistorySportRecord',
        method: 'POST',
        data: { openId },
        success: (res) => {
          // console.log(res)
          let data = res.data.data;
          resolve(data);
        }
      })
    }).then((historyData) => {
      let data = historyData
      let sendData = []
      data.forEach((item) => {
        let newDate = new Date(item.createTime)
        newDate = `${newDate.getMonth() + 1}.${newDate.getDate()}`;
        sendData.push({
          stepNum: item.stepNum,
          date: newDate
        })
      })
      console.log(historyData)
      this.setData({
        historyData: sendData,
        loadingShow: false
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