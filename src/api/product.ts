import { get, post } from '../utils/resquest'


export const getList = (params:any) => {
  return get('/getList', params)
}