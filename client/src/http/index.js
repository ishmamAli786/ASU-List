import axios from 'axios'


const api =axios.create({
    baseURL: process.env.REACT_APP_ROOT,
    withCredentials:true,
    headers:{
        'Content-Type': 'application/json',
        Accept: 'application/json'
        // 'Content-Type': 'multipart/form-data',
        // Accept: 'multipart/form-data'
    }
})


export const register = (data)=>api.post('/auth/register',{...data})
export const login = (data)=>api.post('/auth/login',{...data})
export const getAllCategory = ()=>api.get('/category')
export const getAllProduct = ()=>api.get(`product`)
export const addProduct = (data)=> api.post('/product',data,{
    headers:{
      'Content-Type': 'multipart/form-data'},
      transformRequest: data => data,
      })
export const getAllProductByPage = (pageNo)=>api.get(`product?page=${pageNo}`)
export const getAllProductByName = (data)=>api.get(`product?keyword=${data}`)
export const getProductById = (id)=>api.get(`/product/getByProduct/${id}`)
export const forgetPassword = (data)=>api.post('/auth/forgetPassword',{...data})
export const getProductByCategoryId = (id)=>api.get(`/product/getByCategory/${id}`)