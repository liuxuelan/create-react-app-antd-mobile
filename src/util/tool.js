// import querystring from 'querystring'

/**
 * 本地存储函数localStorage
 */
export function localStore (nameSpace, data) {
  if (data) {
    return window.localStorage.setItem(nameSpace, JSON.stringify(data))
  }
  return (nameSpace && JSON.parse(window.localStorage.getItem(nameSpace))) || null
}

/**
 * 本地存储函数sessionStorage
 */
export function sessionStore (nameSpace, data) {
  if (data) {
    return window.sessionStorage.setItem(nameSpace, JSON.stringify(data))
  }
  return (nameSpace && JSON.parse(window.sessionStorage.getItem(nameSpace))) || null
}

/**
 * 获取url单个参数名称函数
 */
export function getUrlParam (name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)') // 构造一个含有目标参数的正则表达式对象
  var r = window.location.search.substr(1).match(reg) // 匹配目标参数
  if (r !== null) {
    return r[2]
  }
  return null // 返回参数值
}
/**
 * 把url参数转为JSON对象
 */
export function getRequest () {
  let url = location.hash // 获取url中"?"符后的字串
  let theRequest = {}
  let strs = ''
  if (url.indexOf('?') !== -1) {
    let str = url.substr(url.indexOf('?') + 1)
    strs = str.split('&')
    for (let i = 0; i < strs.length; i++) {
      theRequest[strs[i].split('=')[0]] = unescape(strs[i].split('=')[1])
    }
  }
  return theRequest
}

// 判断两位小数
export function toFixed (num) {
  let arr = num.toString().split('.')
  if (arr.length > 1) {
    let n = num.toString().split('.')[1].length
    if (n > 2) {
      return false
    } else {
      return true
    }
  } else {
    return true
  }
}
/**
 * 去掉字符串中的所有空格
 * @param {*} str
 * @param {*} isGlobal
 */
export function Trim (str, isGlobal) {
  let result = ''
  result = str.replace(/(^\s+)|(\s+$)/g, '')
  if (isGlobal.toLowerCase() === 'g') {
    result = result.replace(/\s/g, '')
  }
  return result
}

/**
 * 判断手机类型
 */
export function appType () {
  let u = navigator.userAgent
  let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1 // android终端
  let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) // ios终端
  if (isAndroid) {
    return 'android'
  }
  if (isIOS) {
    return 'ios'
  }
}
/**
 * 调用原生的方法
 * @param str Object
 * {
 *  type: 'OpenNewWeb', // 打开新的页面
 *   data: querystring.stringify(data)
 * }
 */
export function fnNative (str) {
  console.log(JSON.stringify(str))
  if (appType() === 'ios') { // 调用原生ios方法
    window.webkit.messageHandlers.callbackZZDJ.postMessage(JSON.stringify(str))
    console.log(appType(), '方法调用成功')
  }
  if (appType() === 'android') {
    // window.JavascriptInterface.spiderESports.sendInfo()(JSON.stringify(str))
    window.spiderESports.sendInfo(JSON.stringify(str))
    console.log(appType(), '方法调用成功')
  }
}
