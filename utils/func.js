

// class getOpenId {
//   constructor() {
//   }
// }

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

function setLevel(level) {
  let userData = wx.getStorageSync('userData');
  const pre = ['白', '包', '豆', '青', '炸', '尊'];
  const nick = ['新手小白', '包子布衣', '豆腐秀才', '青团举人', '酱面学士', '火锅翰林']
  userData.pre = pre[level];
  userData.nick = nick[level]
  wx.setStorageSync('userData', userData)
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
    needDay: '打卡33天'
  },
  {
    pre: '尊',
    nick: '火锅翰林',
    needDay: '打卡50天'
  }
]
export {
  getOpenId,
  setLevel,
  idoStage
}