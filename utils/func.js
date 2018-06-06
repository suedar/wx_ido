// class getOpenId {
//   constructor() {
//   }
// }

// 获取openid
function getOpenId () {
  let openId = wx.getStorageSync('openId')
  // console.log(openId)
  if (!openId) {
    wx.login({
      success: res => {
        let needInfo = {};
        needInfo.code = res.code;
        wx.getUserInfo({
          success: (res) => {
            needInfo.iv = res.iv;
            needInfo.encryptedData = res.encryptedData;
            wx.request({
              url: 'https://wxapi.devoted.net.cn/user/oauth',
              method: 'POST',
              data: needInfo,
              success: (response) => {
                wx.setStorageSync('userData', response.data.data)
                wx.setStorageSync('openId', response.data.data.openId)
                return response.data.data.openId
              }
            })
          }
        })
      }
    })
  } else {
    // console.log(openId)
    return openId;
  }
}


// fail: () => {
//   wx.navigateBack({
//     delta: -1
//   })
// }
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
// 设置等级
function setLevel(level = 0) {
  // console.log(level)
  // console.log(333)
  let userData = wx.getStorageSync('userData');
  // console.log(userData)
  const pre = ['白', '包', '豆', '青', '炸', '尊'];
  const nick = ['新手小白', '包子布衣', '豆腐秀才', '青团举人', '酱面学士', '火锅翰林']
  // console.log(pre[level],nick[level])
  userData.pre = pre[level];
  userData.nick = nick[level]
  // console.log(userData)
  wx.setStorageSync('userData', userData)
}
// 设置目标步数
function setTarget(isIncrease = 0) {
  return new Promise((resolve) => {
    let target = wx.getStorageSync('targetStep');
    if (target) {
      resolve(target)
    }
    else {
      let openId = getOpenId()
      console.log(isIncrease, openId)
      wx.request({
        url: 'https://wxapi.devoted.net.cn/sport/targetStep',
        method: 'POST',
        data: { isIncrease, openId },
        success: (res) => {
          console.log(res)
          wx.setStorageSync('targetStep', res.data.data.targetStep)
          resolve();
        }
      })
    }
  })
  
}
// 设置打卡天数
function setClockDay() {
  let openId = getOpenId();
  wx.request({
    url: 'https://wxapi.devoted.net.cn/user/stepInfo',
    method: 'POST',
    data: {openId},
    success: (response) => {
      // console.log(response)
        if (response.data.data) {
          // console.log(response)
          wx.setStorageSync('clockDay', response.data.data.clockDay)
        }
        else {
          wx.setStorageSync('clockDay', 0)          
        }
    }
  })
}

const idoStage = [
  {
    pre: '白',
    nick: '新手小白',
    needDay: '打卡0天'
  }, {
    pre: '包',
    nick: '包子布衣',
    needDay: '打卡1天'
  },
  {
    pre: '豆',
    nick: '豆腐秀才',
    needDay: '打卡7天'
  },
  {
    pre: '青',
    nick: '青团举人',
    needDay: '打卡21天'
  },
  {
    pre: '炸',
    nick: '酱面学士',
    needDay: '打卡39天'
  },
  {
    pre: '尊',
    nick: '火锅翰林',
    needDay: '打卡66天'
  }
]
export {
  getOpenId,
  setLevel,
  idoStage,
  setClockDay,
  setTarget,
  sleep
}