import axios from 'axios'
// import qs from 'qs'

/**
 * @module 'service/index'
 * @desc 分装service层，用以区分开发环境和生产环境
 * @author LieZuoPing
 */
// let api = `http://client-m-server.test.zhizhudj.com/` // 测试部署地址
let api = `https://client-m-server.zhizhudj.com/` // 线上部署地址
let baseUrl = ''
let imgBaseUrl = ''
if (process.env.NODE_ENV === 'development') { // 开发环境
  baseUrl = `/app/matchDetail/dist/index.html#/`
  imgBaseUrl = '../../static/'
} else if (process.env.NODE_ENV === 'production') { // 生产环境
  imgBaseUrl = './static/'
  baseUrl = `/app/matchDetail/dist/index.html#/`
}

/**
 * @desc 获取赛事信息接口
 * @author LieZuoPing
 * @param {
 *    id: id, 
 *    user: user, 
 *    token: token,
 *    appid: appid,
 *  }
 */
const asyncApi = (param) => {
  // return axios.post(`${api}api`, qs.stringify(param, {
  //   indices: false
  // }))
  return axios.get(`${api}api`, {
    params: {...param, time: Date.parse(new Date())}
  })
}

/**
 * 并发获取赛事没有结束的axios请求
 */
const asyncAxiosAll = (param, paramList) => {
  return axios.all([
    // asyncGetMatchInfo(param),
    // asyncGetMatchInfoDetail(param), // 获取详情页 赛程列表
    // asyncGetMatchTeamTotal(paramList), // 获取参赛战队信息
    // asyncGetMatchSeasonResultList(param) // 获取赛事成绩列表
  ])
}



// 最后统一暴露出来
export {
  api, // 端口
  baseUrl,
  imgBaseUrl, // 图片基础地址\
  asyncApi,
  asyncAxiosAll
}
