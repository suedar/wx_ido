// class getOpenId {
//   constructor() {
//   }
// }

// 获取openid
function getOpenId () {
  let openId = wx.getStorageSync('openId')
  // console.log(openId)
  if (!openId) {
    
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

// 设置等级
function setLevel(level) {
  let userData = wx.getStorageSync('userData');
  const pre = ['白', '包', '豆', '青', '炸', '尊'];
  const nick = ['新手小白', '包子布衣', '豆腐秀才', '青团举人', '酱面学士', '火锅翰林']
  userData.pre = pre[level];
  userData.nick = nick[level]
  wx.setStorageSync('userData', userData)
}
// 设置目标步数
function setTarget(isIncrease = 0) {
  let openId = getOpenId()
  wx.request({
    url: 'https://wxapi.devoted.net.cn/sport/targetStep',
    method: 'POST',
    data: { isIncrease, openId},
    success: (res) => {
      wx.setStorageSync('targetStep', res.data.data.targetStep)
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
  setTarget
}