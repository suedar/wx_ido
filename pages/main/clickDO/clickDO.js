// pages/main/clickDO/clickDO.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    letter: '3456',
    foodImage: 'chips',
    foodNumber: 3,
    calorieData: 225,
    hidePending: true
  },
  // 做不了 小程序采用一次性渲染模式
  // rollData: function(realData, index = 0){
  //   let roundData, randomData;
  //   if(index == 0) {
  //     roundData = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  //     roundData.splice(roundData.find((item, index) => {
  //       if (item === realData[index]) {
  //         return index;
  //       }
  //     }), 1)
  //     randomData = roundData[Math.floor(Math.random() * 9)];
  //   }
  //   else {
  //     roundData = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  //     roundData.splice(roundData.find((item, index) => {
  //       if (item === realData[index]) {
  //         return index;
  //       }
  //     }), 1)
  //     randomData = roundData[Math.floor(Math.random() * 10)];
  //   }
  //   this.rollFunc(randomData, realData, roundData, index)
  // },
  // rollFunc: function(randomData, realData, roundData, index) {
  //   let arrData = `letter[${index}]`;
  //   console.log(randomData, realData, roundData, index)
  //   this.setData({
  //     [arrData]: randomData
  //   })
  //   if(randomData == realData[index]) {
  //     if(++index === (realData.length-1)) {
  //       console.log(33333)
  //       return;
  //     }else {
  //       this.rollData(realData, index)
  //     }
  //   }
  //   if(++randomData > 9 ){
  //     if(index === 0) {
  //       randomData = 1
  //     } else {
  //       randomData = 0
  //     }
  //   }
  //   this.rollFunc(randomData, realData,roundData,index)
  // },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let userData = wx.getStorageSync('userData')
    let letter = wx.getStorageSync('targetStep');
    this.setData({
      userData,
      letter
    })
    // this.rollData([1,2,3,4])
    // 加载下面的数据

    wx.request({
      url: 'https://wxapi.devoted.net.cn/sport/heatTransfer',
      method: 'POST',
      data: { stepNum: letter },
      success: (res) => {
        console.log(res.data.data);
        let sportData = res.data.data;
        const foodChoice = ['cola', 'chips', 'hamburger'];
        let choice = Math.floor(Math.random()*3);
        let foodImage = foodChoice[choice];
        this.setData({
          calorieData: sportData.calorie,
          foodImage: foodImage,
          foodNumber: sportData.food[foodImage]
        })
      }
    })

    let runData = {}
    wx.getWeRunData({
      success: (res) => {
        runData.iv = res.iv;
        runData.encryptedData = res.encryptedData;
        runData.openId = wx.getStorageSync('openId');
        console.log(runData)
        wx.request({
          url: 'https://wxapi.devoted.net.cn/sport/stepInfo',
          method: 'POST',
          data: runData,
          success: (res) => {
            console.log(res)
          }
        })
      }
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
  
  },
  showDown() {
    this.setData({
      hidePending: false
    })
  }
})