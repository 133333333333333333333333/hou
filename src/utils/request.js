// 封装axios
// 导入NProgress 对应的js和css
// import NProgress from 'nprogress'
// import 'nprogress/nprogress.css'
import axios from 'axios'
// 在request拦截器中展示进度条 NProgress.start()
// axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
axios.defaults.baseURL = 'https://lianghj.top:8888/api/private/v1/'
// axios.defaults.baseURL = 'https://www.liulongbin.top:8888/api/private/v1/'
axios.interceptors.request.use(config => {
//   NProgress.start()
  // 登录授权 请求验证是否有token  需要授权的 API ，必须在请求头中使用 `Authorization` 字段提供 `token` 令牌
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config // 必须返回否则没有值
})
// 在reponse拦截器中,隐藏进度条 NProgress.done()
axios.interceptors.response.use(config => {
//   NProgress.done()
  return config
})

export default axios
