import { get, post } from '../utils/resquest'


export const login = (params:any) => {
  return get('/login', params)
}