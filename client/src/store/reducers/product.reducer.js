import {productConstant} from './../constants/product.constant'

const initialState ={
    loading:false,
    products:[],
    productByid:{},
    message:'',
    productCount:0
}


const productReducer=(state=initialState,action)=>{
    switch(action.type){
            case productConstant.PRODUCT_GETALL_REQUEST:
            return{
                ...state,
                loading:true
            }
            break;
            case productConstant.PRODUCT_GETALL_SUCCESS:
            return{
                ...state,
                loading:false,
                products:action.payload.product,
                productCount:action.payload.productCount                
            }
            break;
            case productConstant.PRODUCT_GET_BY_PAGE_SUCCESS:
            return{
                ...state,
                loading:false,
                products:[...state.products,...action.payload.product],
                productCount:action.payload.productCount                
            }
            break;
            case productConstant.PRODUCT_GETALL_FAILURE:
            return{
                ...state,
                loading:false,
                message:action.payload.err
            }
            break;
            case productConstant.PRODUCT_GETBYID_REQUEST:
                return{
                    ...state,
                    loading:true
                }
                break;
                case productConstant.PRODUCT_GETBYID_SUCCESS:
                return{
                    ...state,
                    loading:false,
                    productByid:action.payload                
                }
                break;
                case productConstant.PRODUCT_GETBYID_FAILURE:
                return{
                    ...state,
                    loading:false,   
                }
                break;
            case productConstant.ADD_PRODUCT_REQUEST:
                return{
                    ...state,
                    loading:true,
                }
                break;
            case productConstant.ADD_PRODUCT_SUCCESS:
                return{
                    ...state,
                    loading:false,
                }
                break;
            case productConstant.ADD_PRODUCT_FAILURE:
                    return{
                        ...state,
                        loading:false,
                    }
                break;
        default:return state
    }

}

export default productReducer;