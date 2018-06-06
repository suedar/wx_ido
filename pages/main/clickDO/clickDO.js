// pages/main/clickDO/clickDO.js
import { getOpenId } from '../../../utils/func.js';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    letter: '3456',
    foodImage: 'chips',
    foodNumber: 3,
    calorieData: 225,
    hidePending: true,
    todayPercent: 0,
    loadingShow: true,
    isUpgrade: false,
    isUnDone: false,
    isDone: false,
    isShowCard: false,
    // isFinish: true,
    todayCal: 123,
    todayStep: 123,
    sportDay: 12,
    level: 0,
    nick: '豆腐秀才'
  },
  /**
   * 生命周期函数--监听页面加载
   */
  getSportData() {
    return new Promise((resolve) => {
      let runData = {}
      wx.getWeRunData({ 
        success: (res) => {
          runData.iv = res.iv;
          runData.encryptedData = res.encryptedData;
          runData.openId = wx.getStorageSync('openId');
          wx.request({
            url: 'https://wxapi.devoted.net.cn/sport/stepInfo',
            method: 'POST',
            data: runData,
            success: (res) => {
              // console.log(res)
              let sportData = [...res.data.stepInfoList];
              // console.log([...sportData])
              resolve(sportData.pop().step);
            }
          })
        }
      })
    }).then((todaySport) => {
      // let todayTarget = wx.getStorageSync('targetStep')
      let letter = wx.getStorageSync('targetStep')
      let todayPercent = ((todaySport / letter) * 100).toFixed(2);
      if (todayPercent > 100) {
        todayPercent = 100;
      }
      // todayPercent = todayPercent - 100;
      this.setData({
        todayPercent: todayPercent - 100
      })
      return [todayPercent, todaySport];
      })
  },
  showCard() {
    this.setData({
      isDone: true,      
      isFinish: false
    })
  },
  checkUpgrade() {
    let level = this.level;
    let sportDay = this.sportDay;
    let upGrade = false;
    let nick = '新手小白'
    if (sportDay === 1) {
      if (level === 0) {
        upGrade = true;
        nick = '包子布衣'
      }
    }
    else if (sportDay === 7) {
      if(level === 1) {
        upGrade = true;
        nick = '豆腐秀才'
      }
    } 
    else if (sportDay === 21) {
      if (level === 2) {
        upGrade = true
        nick = '青团举人'
      }
    }
    else if (sportDay === 39) {
      if (level === 3) {
        upGrade = true
        nick = '酱面学士'        
      }
    }
    else if (sportDay === 66) {
      if (level === 4) {
        upGrade = true
        nick = '火锅翰林'        
      }
    }
    this.setData({
      isUpgrade: upGrade,
      nick
    })
  },
  showFinishCard() {
    new Promise((resolve) => {
      let openId = getOpenId()
      wx.request({
        url: 'https://wxapi.devoted.net.cn/user/stepInfo',
        method: 'POST',
        data: { openId },
        success: (res) => {
          let data = res.data.data;
          this.setData({
            sportDay: data.sportDay,
            level: data.level
          })
          resolve()
        }
      })
    }).then(() => {
      this.setData({
        isShowCard: true
      })
    })
    
  },
  setSportData(res) {
    let [percent, todayStep] = res;
    return new Promise((resolve) => {
      wx.request({
        url: 'https://wxapi.devoted.net.cn/sport/heatTransfer',
        method: 'POST',
        data: { stepNum: todayStep },
        success: (res) => {
          let data = res.data.data;
          this.setData({
            todayCal: data.calorie,
            todayStep
          })
          resolve(percent);
        }
      })
    })
  },
  onLoad: function (options) {
    let userData = wx.getStorageSync('userData')
    let letter = wx.getStorageSync('targetStep');
    this.setData({
      userData,
      letter,
      nick: userData.nick
    })
    // this.rollData([1,2,3,4])
    // 加载下面的数据

      new Promise((resolve, reject) => {
        wx.checkSession({
          success: function () {
            resolve()
            //session_key 未过期，并且在本生命周期一直有效
          },
          fail: function () {
            // session_key 已经失效，需要重新执行登录流程
            let needInfo = {};
            wx.login({
              success: res => {
                needInfo.code = res.code;
                openIdInfo = res.code;
                wx.getUserInfo({
                  success: (res) => {
                    needInfo.iv = res.iv;
                    needInfo.encryptedData = res.encryptedData;
                    wx.request({
                      url: 'https://wxapi.devoted.net.cn/user/oauth',
                      method: 'POST',
                      data: needInfo,
                      success: (response) => {
                        resolve()
                      }
                    })
                  }
                })
              }
            })
          }
        })
      }).then(() => {
        // 请求今日步数
        return this.getSportData();
      }).then((res) => {
        return this.setSportData(res)
        }).then((res) => {
          console.log(res)
        new Promise((resolve) => {
          let now = new Date().getHours();
          if (now > 22) {
            let flag = wx.getStorageSync('flag');
            if (!flag) {
              if (res >= 100) {
                this.setData({
                  isDone: true,
                  isFinish: true                  
                })
              }
              else {
                this.setData({
                  isUnDone: true,
                  isFinish: false
                })
              }
              wx.setStorageSync('flag', 1);
              resolve()
            }
            else {
              resolve();
            }
          }
          else {
            resolve()
          }
        }).then(() => {
          this.setData({
            loadingShow: false
          })
        })
      })
    wx.request({
      url: 'https://wxapi.devoted.net.cn/sport/heatTransfer',
      method: 'POST',
      data: { stepNum: letter },
      success: (res) => {
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

    // new Promise((resolve) => {
    //   let data = this.getSportInfo();
    //   resolve(data)
    //   console.log(data)      
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
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  showDown() {
    this.setData({
      hidePending: false
    })
    wx.pageScrollTo({
      scrollTop: 300,
      duration: 500
    })
  }
})