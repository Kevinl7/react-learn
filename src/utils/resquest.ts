import axios from 'axios'
import { getToken } from './auth'

export const server = axios.create({
  baseURL: 'http://yapi.demo.qunar.com/mock/79442',
  timeout: 6000
})


// 全局请求拦截
server.interceptors.request.use((config:any) => {
  config.headers['token'] = getToken()
  return config
}, (error) => {
  return Promise.reject(error)
})

// 全局响应拦截
server.interceptors.response.use((response:any) => {
  return response.data
}, (error) => {
  return Promise.reject(error)
})





export const get = (url:string, params:any) => {
  return server.get(url, {params})
}


export const post = (url:string, data:any) => {
  return server.post(url, data)
}
