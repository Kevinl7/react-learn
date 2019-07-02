import { service } from '../utils/request'

const BASE = ''
export function login(data) {
  return service(BASE + '/user/login', data, 'post')
}