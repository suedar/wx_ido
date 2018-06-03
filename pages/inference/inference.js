// pages/inference/inference.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scrollThree: [
      ['密室杀人——不可能事件', '是鬼怪还是人为？', '死者也能开口说话？', '新的转机', '是他杀还是被杀'],
      ['当猜想直面现实', '时间——一切的关键', '真相只有一个！', '浑水摸鱼', '变色油漆，优秀'],
      ['好一个瞒天过海', '天网恢恢疏而不漏！']
    ],
    indicatorDots: true,
    font: []
  },
  getMargin(item, index) {
    let size = item.length;
    let randSize = Math.random() * 10
    if (size + randSize > 19) {
      this.getMargin(item);
    }
    else {
      return randSize.toFixed(2);
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  changeAll() {
    let temp = this.data.scrollThree;
    let newArr = [...temp[0], ...temp[1], ...temp[2]];
    let tempArr = [];
    newArr.forEach((item, index) => {
      tempArr.push(this.getMargin(item, index));
    })
    const color = this.randArr([
      { bg: 'fcf3ca', color: 'ef7b7b' },
      { bg: 'c4eada', color: '919190' },
      { bg: '97de95', color: '08c299' },
      { bg: 'dde0ab', color: 'feffdf' },
      { bg: 'a2738c', color: 'eaafaf' },
      { bg: '307672', color: 'e4eddb' },
      { bg: 'ff8364', color: 'ff4d4d' },
      { bg: 'fa9856', color: 'ede862' },
      { bg: '7e6752', color: 'f4eec0' },
      { bg: 'f2d1a8', color: 'ebebeb' },
      { bg: 'f7f6e7', color: 'c1c0b9' },
      { bg: 'e99b9b', color: 'ffd8d8' },
      { bg: 'fafafa', color: 'ffe9e3' },
      { bg: 'f38181', color: '756c83' },
      { bg: 'f8f398', color: 'e46161' },
      { bg: '4a2c2c', color: 'd3504a' },
      { bg: 'f5fac8', color: 'aee8e6' },
      { bg: 'd4a5a5', color: 'ffecda' },
      { bg: 'fb5660', color: '464545' }
    ])

    this.setData({
      constData: {
        font: tempArr,
        color
      }
    })
  },
  onLoad: function (options) {
    // console.log(this)
    this.changeAll();
    let initData = this.data.constData
    // console.log(initData)
    this.setData({
      font: initData.font,
      color: initData.color
    })

    // let clockDay = wx.getStorageSync('clockDay');
    // this.setData({
    //   clockDay
    // })

    // 设置能显示的页数
    let clockDay = wx.getStorageSync('clockDay');
    let showDay = Math.ceil(Math.sqrt(clockDay * 2));
    wx.setStorageSync('showday', showDay -1);

    new Promise((resolve, reject) => {
      wx.request({
        url: 'https://wxapi.devoted.net.cn/story/getStoryList',
        success: (res) => {
          let storyId = res.data.data[0].id;
          wx.setStorageSync('storyId', storyId);
          // console.log(storyId)
          resolve(storyId)
        }
      })
    }).then((id) => {
      wx.request({
        url: 'https://wxapi.devoted.net.cn/story/storySummarize',
        data: {id},
        method: 'POST',
        success: (res) => {
          console.log(res)
          let sidArr = [];
          res.data.data.forEach((item) => {
            sidArr.push(item.sid);
          })
          wx.setStorageSync('sidArr', sidArr);
        }
      })
    })
  },
  randArr(arr) {
    var ret = [],
      i = arr.length,
      n;
    arr = arr.slice(0);

    while (--i >= 0) {
      n = Math.floor(Math.random() * i);
      ret[ret.length] = arr[n];
      arr[n] = arr[i];
    }
    return ret;
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  clickStory(item) {
    let index = item.target.dataset.index;
    let showday = wx.getStorageSync('showday');
    if (index < showday) {
      wx.navigateTo({
        url: '../story/story?index=' + index,
      })
    }
    
  },
  toBg() {
    wx.redirectTo({
      url: '../detail/detail',
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