import { get, post } from '../utils/resquest'


export const getList = (params:any) => {
  return get('/getList', params)
}

export const addProduct = (data:any) => {
  return post('/addProduct', data)
}

export const getProduct = (params:number) => {
  return get('/getProduct', params)
}