import {categoryConstant} from './../constants/category.constant';
import {getAllCategory} from './../../http/index'




export const getCategory=()=>{
    return async(dispatch)=>{
        dispatch({type:categoryConstant.CATEGORY_GETALL_REQUEST})
        const res=await getAllCategory()
        if(res.status === 200){
            dispatch({type:categoryConstant.CATEGORY_GETALL_SUCCESS,payload:res.data})
        }
         if(res.data.status === 400){
         dispatch({type:categoryConstant.CATEGORY_GETALL_FAILURE,payload:{err:res.data.message}})
        }
    }
}


// // Clearing Errors
// export const clearErrors = () => async (dispatch) => {
//     dispatch({ type: authConstant.CLEAR_ERRORS });
//   };