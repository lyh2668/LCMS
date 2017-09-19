import axios from 'axios'
import conf from '../config'

axios.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

axios.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.resolve(error.response)
})

const jsonRequest = (url, params, method) => {
  let methods = ['post', 'get']
  let m = method
  // 默认为 get
  if (methods.indexOf(m) === -1) {
    m = 'get'
  }

  return axios({
    method: m,
    url: conf.baseUrl + url,
    data: params,
    timeout: conf.timeout
  })
}

export default {
  jsonRequest
}
