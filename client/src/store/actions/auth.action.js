import {authConstant} from './../constants/auth.constant';
import {register,forgetPassword,login} from './../../http/index'
import {auth,GoogleAuthProvider,FacebookAuthProvider} from '../../firebase'




export const signup=(user)=>{
    return async(dispatch)=>{
        dispatch({type:authConstant.USER_REGISTER_REQUEST})
        const res=await register(user)
        if(res.data.status === 200){
            dispatch({type:authConstant.USER_REGISTER_SUCCESS,payload:res.data.message})
        }
         if(res.data.status === 400){
         dispatch({type:authConstant.USER_REGISTER_FAILURE,payload:{err:res.data.message}})
        }
    }
}

export const Login=(user)=>{
    return async(dispatch)=>{
        dispatch({type:authConstant.USER_LOGIN_REQUEST})
        const res=await login(user)
        if(res.data.status === 200){
            dispatch({type:authConstant.USER_LOGIN_SUCCESS,payload:res.data.message})
            localStorage.setItem('token',res.data.token)
            localStorage.setItem('authenticate','true')
        }
         if(res.data.status === 400){
         dispatch({type:authConstant.USER_LOGIN_FAILURE,payload:{err:res.data.message}})
        }
    }
}

export const signupData=(user)=>{
    return{
        type:"SIGNUP_DATA",
        payload:user
    }
}


export const forgetpassword=(data)=>{
    return async(dispatch)=>{
        dispatch({type:authConstant.RESERT_PASSWORD_REQUEST})
        const res=await forgetPassword(data)
        if(res.status === 200){
            dispatch({type:authConstant.RESERT_PASSWORD_SUCCESS,payload:res.data})
        }
         if(res.data.status === 400){
         dispatch({type:authConstant.RESERT_PASSWORD_FAILURE,payload:{err:res.data.message}})
        }
    }
}


export const googleInitiate=()=>{
    return async function(dispatch){
        dispatch({type:authConstant.Google_SIGNIN_REQUEST})
        try{
            await auth.signInWithPopup(GoogleAuthProvider)
            dispatch({type:authConstant.Google_SIGNIN_SUCESS,payload:"Social Login Successfully"})
            localStorage.setItem('authenticate','true')
        }
        catch(err){
            dispatch({type:authConstant.Google_SIGNIN_FAILURE,payload:err}) 
        }
    }
}



export const facebookInitiate=()=>{
    return async function(dispatch){
        dispatch({type:authConstant.Facebook_SIGNIN_REQUEST})
        try{
            await auth.signInWithPopup(FacebookAuthProvider.addScope("user_birthday, email"))
            dispatch({type:authConstant.Facebook_SIGNIN_SUCESS,payload:"Social Login Successfully"})
            localStorage.setItem('authenticate','true')
        }
        catch(err){
            dispatch({type:authConstant.Facebook_SIGNIN_FAILURE,payload:err}) 
        }
    }
}


export const logoutInitiate=()=>{
    return async function(dispatch){
        dispatch({type:authConstant.Logout_START_REQUEST})
        try{
            const user = await auth.signOut()
        /// if we want to add displayname after adding email and password then we use this method
        // await user.updateProfile({displayName})
        // dispatch({type:authConstant.Logout_START_SUCESS})
        }
        catch(err){
            dispatch({type:authConstant.Logout_START_FAILURE,payload:err}) 
        }
    }
}

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: authConstant.CLEAR_ERRORS });
  };

  // Clearing Messages
export const clearMessages = () => async (dispatch) => {
    dispatch({ type: authConstant.CLEAR_MESSAGES });
  };