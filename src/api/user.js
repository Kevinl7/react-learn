import { service } from '../utils/request'

const BASE = 'https://easy-mock.com/mock/5d2180f4e5758344eaec3456/react'
export function login(data) {
  return service(BASE + '/user/login', data, 'post')
}

export function getProduct(data) {
  return service(BASE + '/product', data)
}

export function getDetail(data) {
  return service(BASE + '/getDetail', data)
}

export function getOne(data) {
  return service(BASE + '/getDetail', data)
}

export function getTwo(data) {
  return service(BASE + '/getDetail', data)
}