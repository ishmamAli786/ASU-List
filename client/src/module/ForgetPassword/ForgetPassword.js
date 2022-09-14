import React,{useState,useEffect} from 'react'
import Navbar from '../../component/Common/Navbar/Navbar';
import Button from '@material-ui/core/Button';
import {makeStyles } from '@material-ui/core/styles';
import {Select,InputLabel,MenuItem} from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import './ForgetPassword.scss';
import ic from '../../assets/icons/Message.png'
import {forgetpassword,clearErrors,clearMessages} from './../../store/actions/auth.action'
import { useDispatch,useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const ForgetPassword = () => {
  const dispatch = useDispatch()
  const classes = useStyles();
  const navigate = useNavigate()
  const [age, setAge] = React.useState('United States (+1)');
  const {loading,errors,message} = useSelector((state)=>state.authReducer)
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  useEffect(()=>{
    if(errors.length > 0){
      toast.error(errors)
      dispatch(clearErrors());
    }
    if(message){
      toast.success(message)
      dispatch(clearMessages())
      setTimeout(() => navigate('/login'), 2000);
    }
  },[errors,message])


  const handleForgetPassword=()=>{
    const data ={email,password}
      dispatch(forgetpassword(data))
  }
  return (
    <>
    <Navbar isLogin="true"/>
    <Toaster toastOptions={{
    style: {
      fontSize:"14px"
    },
  }}/>
    <div className="parent_div">
      <div className="child_div">
        <h3 className="child_div_signup">Forgot Password</h3>
        <p className="child_div_signupPrag">Please enter your email and account</p>
        <hr/>
        <div className="sub_child_div">
        <div>
          <p className="sub_child_asuList">Welcome to ASU List</p>
        </div>
        <div>
        <div className="editing_listing_div">
         <img src={ic} alt="image" className="editing_listing_div_img"/> 
          <input type="email" value={email} placeholder="email" autoComplete="off" onChange={(e)=>setEmail(e.target.value)} className="editing_lisitng_input" required/>
        </div>
        <div className="editing_listing_div">
         <img src={ic} alt="image" className="editing_listing_div_img"/> 
          <input type="password" value={password} placeholder="password" autoComplete="off" onChange={(e)=>setPassword(e.target.value)} className="editing_lisitng_input" required/>
        </div>
          <div>
          <Button variant="contained"  className={classes.sub_child_div_btn} onClick={()=>handleForgetPassword()}>
          Continue
          </Button>
          </div>
        </div>
        </div>
      </div>
    </div>
    </>
  )
}




const useStyles = makeStyles(() => ({
  sub_child_div_btn:{
    width:'100%',
    margin:'10px 0px',
    fontWeight: '600',
    fontSize: '18px',
    borderRadius: '9px',
    backgroundColor: '#DF1462 !important',
    color:'#fff',
  },
  sub_child_textField: {
    '&:hover': {
      backgroundColor: '#ffffff !important',
      boxShadow: 'none !important',
    },
    '&:active': {
      boxShadow: 'none !important',
      backgroundColor: '#3c52b2 !important',
    },
  },
}));


export default ForgetPassword