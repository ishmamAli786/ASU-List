import {productConstant} from './../constants/product.constant';
import {getAllProduct,getProductById,getAllProductByName,getProductByCategoryId,getAllProductByPage,addProduct} from './../../http/index'




export const getProduct=()=>{
    return async(dispatch)=>{
        dispatch({type:productConstant.PRODUCT_GETALL_REQUEST})
        const res=await getAllProduct()
        if(res.status === 200){
            dispatch({type:productConstant.PRODUCT_GETALL_SUCCESS,payload:{product:res.data.product,productCount:res.data.productCount}})
        }
         if(res.data.status === 400){
         dispatch({type:productConstant.PRODUCT_GETALL_FAILURE,payload:{err:res.data.message}})
        }
    }
}

export const getAllProductBypage=(pageNo)=>{
    return async(dispatch)=>{
        dispatch({type:productConstant.PRODUCT_GETALL_REQUEST})
        const res=await getAllProductByPage(pageNo)
        if(res.status === 200){
            dispatch({type:productConstant.PRODUCT_GET_BY_PAGE_SUCCESS,payload:{product:res.data.product,productCount:res.data.productCount}})
        }
         if(res.data.status === 400){
         dispatch({type:productConstant.PRODUCT_GETALL_FAILURE,payload:{err:res.data.message}})
        }
    }
}

export const getProductByName=(name)=>{
    return async(dispatch)=>{
        dispatch({type:productConstant.PRODUCT_GETALL_REQUEST})
        const res=await getAllProductByName(name)
        if(res.status === 200){
            dispatch({type:productConstant.PRODUCT_GETALL_SUCCESS,payload:{product:res.data.product,productCount:res.data.productCount}})
        }
         if(res.data.status === 400){
         dispatch({type:productConstant.PRODUCT_GETALL_FAILURE,payload:{err:res.data.message}})
        }
    }
}

export const getProductByCategoryid=(id)=>{
    return async(dispatch)=>{
        dispatch({type:productConstant.PRODUCT_GETALL_REQUEST})
        const res=await getProductByCategoryId(id)
        if(res.status === 200){
            dispatch({type:productConstant.PRODUCT_GETALL_SUCCESS,payload:{product:res.data.product,productCount:res.data.productCount}})
        }
         if(res.data.status === 400){
         dispatch({type:productConstant.PRODUCT_GETALL_FAILURE,payload:{err:res.data.message}})
        }
    }
}

export const getProductByid=(id)=>{
    return async(dispatch)=>{
        dispatch({type:productConstant.PRODUCT_GETBYID_REQUEST})
        const res=await getProductById(id)
        if(res.status === 200){
            dispatch({type:productConstant.PRODUCT_GETBYID_SUCCESS,payload:res.data})
        }
         if(res.data.status === 400){
         dispatch({type:productConstant.PRODUCT_GETBYID_FAILURE,payload:{err:res.data.message}})
        }
    }
}

export const addproduct=(data)=>
{
    return async(dispatch)=>{
        dispatch({type:productConstant.ADD_PRODUCT_REQUEST})
        const res=await addProduct(data);
        if(res.status === 200){
            dispatch({type:productConstant.ADD_PRODUCT_SUCCESS,payload:res.data})
        }
         if(res.data.status === 400){
         dispatch({type:productConstant.ADD_PRODUCT_FAILURE,payload:{err:res.data.message}})
        }
    }
}