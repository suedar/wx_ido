// pages/story/story.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    content: '白色的铁盒子，车窗是内嵌式的，根本无法开启，门外的插销完好无损，整间车厢内没有一丝缝隙，除了车门对面的车壁上有一个五厘米见方的小孔，张杰（S山的工作人员）亲自为陈寒关上车门，并且他与检票人员一口认定，没有人接近这辆缆车，那么究竟是什么人能够这样如幽灵般潜入一个无人接近的密室里，神不知鬼不觉的杀害死者并砍下头颅，又带着死者的头颅如轻烟般消失了。<br>那么凶手究竟是如何做到的呢？难道是所有的S山工作人员都在说谎，合谋杀害陈寒？在故意布置成不可能犯罪混淆视听？',
    sid: 1,
    showDay: 1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // let clockDay = wx.getStorageSync('clockDay');
    // this.setData({
    //   clockDay
    // })
    // let clockDay = 45;
    console.log(options.query)

    //html属性失效 采用style
    let content = this.data.content;
    content = content.split(/\<br\>/).join('<br><div class="text"></div>');
    content = `<div class="text" style="width:30px;height:30px;"></div>${content}`;
    this.setData({
      content
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