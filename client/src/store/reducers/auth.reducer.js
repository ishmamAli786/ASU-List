import {authConstant} from './../constants/auth.constant'

const initialState ={
    token:null,
    users:[],
    authenticate:false,
    errors:[],
    loading:false,
    dataSignup:{},
    message:''
}


const authReducer=(state=initialState,action)=>{
    switch(action.type){
            case authConstant.USER_REGISTER_REQUEST:
            return{
                ...state,
                loading:true
                
            }
            break;
            case authConstant.USER_REGISTER_SUCCESS:
            return{
                ...state,
                loading:false,
                message:action.payload                
            }
            break;
            case authConstant.USER_REGISTER_FAILURE:
            return{
                ...state,
                loading:false,
                errors:action.payload.err
                
            }
            break;
            case authConstant.USER_LOGIN_REQUEST:
              return{
                  ...state,
                  loading:true,
                  
              }
              break;
              case authConstant.Google_SIGNIN_SUCESS:
                return{
                    ...state,
                    loading:false,
                  message:action.payload    
                }
                break;
                case authConstant.Facebook_SIGNIN_SUCESS:
                return{
                    ...state,
                    loading:false,
                  message:action.payload     
                }
                break;
              case authConstant.USER_LOGIN_SUCCESS:
                return{
                    ...state,
                    authenticate:true,
                    message:action.payload
                    
                }
                break;
                case authConstant.USER_LOGIN_FAILURE:
                return{
                    ...state,
                    authenticating:false,
                    errors:action.payload.err
                }
                break;
            case 'SIGNUP_DATA':
            return{
                ...state,
                signupData:action.payload           
            }
            break;
            case authConstant.CLEAR_ERRORS:
          return {
            ...state,
            loading:false,
            errors:[]
          };
          case authConstant.CLEAR_MESSAGES:
          return {
            ...state,
            loading:false,
            message:''
          };
        break;
        case authConstant.CLEAR_ERRORS:
          return {
            ...state,
            loading:false,
            errors:[]
          };
            break;
            case authConstant.RESERT_PASSWORD_REQUEST:
          return {
            ...state,
            loading:false,
          };
            break;
            case authConstant.RESERT_PASSWORD_SUCCESS:
          return {
            ...state,
            loading:true,
            message:action.payload
          };
            break;
            case authConstant.RESERT_PASSWORD_FAILURE:
                return {
                  ...state,
                  loading:false,
                  errors:action.payload.err
                };
                  break;
        default:return state
    }

}

export default authReducer;