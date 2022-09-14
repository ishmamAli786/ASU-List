import {categoryConstant} from './../constants/category.constant'

const initialState ={
    loading:false,
    categories:[]
}


const categoryReducer=(state=initialState,action)=>{
    switch(action.type){
            case categoryConstant.CATEGORY_GETALL_REQUEST:
            return{
                ...state,
                loading:true
            }
            break;
            case categoryConstant.CATEGORY_GETALL_SUCCESS:
            return{
                ...state,
                loading:false,
                categories:action.payload                
            }
            break;
            case categoryConstant.CATEGORY_GETALL_FAILURE:
            return{
                ...state,
                loading:false,   
            }
            break;
        default:return state
    }

}

export default categoryReducer;