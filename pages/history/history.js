// pages/history/history.js
import { getOpenId } from '../../utils/func.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    historyData: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(getOpenId())
    // let openId = getOpenId();
    // console.log(openId)
    // wx.request({
    //   url: 'https://wxapi.devoted.net.cn/sport/getHistorySportRecord',
    //   method: 'POST',
    //   data: {openId},
    //   success: (res) => {
    //     console.log(res)
    //     let data = res.data.data;
    //     console.log(data)
    //   }
    // })


    let data = [
      {
        "openId": "oGnrz0GutS1PYDoPKU-BUQ-rj5BI",
        "createTime": 1526967829000,
        "stepNum": 251,
        "calorie": 100,
        "targetStep": 800,
        "isClock": 0
      },
      {
        "openId": "oGnrz0GutS1PYDoPKU-BUQ-rj5BI",
        "createTime": 1527054229000,
        "stepNum": 100,
        "calorie": 100,
        "targetStep": 709,
        "isClock": 1
      },
      {
        "openId": "oGnrz0GutS1PYDoPKU-BUQ-rj5BI",
        "createTime": 1527140629000,
        "stepNum": 800,
        "calorie": 60,
        "targetStep": 1000,
        "isClock": 0
      },
      {
        "openId": "oGnrz0GutS1PYDoPKU-BUQ-rj5BI",
        "createTime": 1527227029000,
        "stepNum": 1000,
        "calorie": 50,
        "targetStep": 799,
        "isClock": 1
      }
    ];

    let historyData = []
    data.forEach((item) => {
      // let item = {
      //   stepNum: item.stepNum
      // }
      let newDate = new Date(item.createTime)
      newDate = `${newDate.getMonth() + 1}.${newDate.getDate()}`;
      historyData.push({
        stepNum: item.stepNum,
        date: newDate
      })
    })
    console.log(historyData)
    this.setData({
      historyData
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