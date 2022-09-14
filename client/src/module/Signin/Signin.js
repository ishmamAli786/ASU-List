import React,{useEffect,useState} from 'react'
import Navbar from '../../component/Common/Navbar/Navbar';
import Button from '@material-ui/core/Button';
import {makeStyles } from '@material-ui/core/styles';
import {Select,InputLabel,MenuItem} from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import './Signin.scss';
import Password from '../../component/Common/Password/Password'
import fb from './../../assets/icons/fb.png'
import goog from './../../assets/icons/Google.png'
import emailIcon from './../../assets/icons/em.png'
import appleIcon from './../../assets/icons/Apple.png'
import or from './../../assets/icons/or.png'
import { useDispatch,useSelector } from 'react-redux';
import {Login,clearErrors,clearMessages} from './../../store/actions/index'
import {facebookInitiate,googleInitiate,logoutInitiate} from '../../store/actions/index'
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const Signin = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const classes = useStyles();
  const [userLocation,setLocation] = useState('')
  const [userPhone,setPhone] = useState('')
  const {loading,errors,message,authenticate}=useSelector(state=>state.authReducer)


  const handleFacebookLogin =()=>{
    dispatch(facebookInitiate())
  }


  const handleGoogleLogin =()=>{
    dispatch(googleInitiate())
  }

  const handleLogout =()=>{
    dispatch(logoutInitiate())
  }

  const handleSubmit=()=>{
    if(userLocation == ''){
     return toast.error('location is required')
    }
    else if(userPhone == ''){
      return toast.error('phone is required')
    }
    else{
      const user ={userLocation,userPhone}
      dispatch(Login(user))
    }
  }


  useEffect(()=>{
    if(errors.length > 0){
      toast.error(errors)
      dispatch(clearErrors());
    }
    if(message){
      toast.success(message)
      dispatch(clearMessages());
      setTimeout(() => navigate('/'), 2000);
    }
  },[errors,message])
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
        <h3 className="child_div_signin">Log in or sign up</h3><br></br>
        <hr/>
        <div className="sub_child_div">
        <div>
          <p className="sub_child_asuList" style={{marginBottom:'18px',marginTop:'35px'}}>Welcome to ASU List</p>
        </div>
        <div>
          <div className="sub_child_input" style={{marginBottom:"10px"}}>
            <div className="sub_child_textField">
          {/* <InputLabel id="demo-simple-select-label">Country/Region</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
          style={{width:"100%",color:'#A6A6A6'}}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select> */}
        <TextField id="standard-basic" onChange={(e)=>setLocation(e.target.value)} label="Country/Region" className="sub_child_textField"/>
        </div>
          <TextField type="number" id="standard-basic" onChange={(e)=>setPhone(e.target.value)} label="Phone number" className="sub_child_textField"/>
          </div>
          <span className="sub_child_span">We’ll call or text to confirm your number. Standard messages and data rates apply. Privacy Policy.</span>
          <div>
            <div style={{float:'right',marginBottom:"5px",cursor:"pointer"}}>
            <span onClick={()=>navigate('/forget')}>Forgot Password?</span>
            </div>
          <Button variant="contained" onClick={()=>handleSubmit()} className={classes.sub_child_div_btn}>
          Continue
          </Button>
          <div style={{float:'right',margin:"2px 0px",cursor:"pointer"}}>
            <p>Have No Account ?<span onClick={()=>navigate('/signup')} style={{color:'#2253FF'}}>Signup</span></p>
          </div>
          </div>
          {/* <div>
            <img src={fb} alt="image" width="100%"/>
          </div> */}
          <div>
            <img src={or} alt="image" width="100%"/>
          </div>
          <div className={classes.sub_child_main_social_btn_first}>
            <div style={{width:"30%"}}>
              <img src={fb} alt="image"/>
            </div>
            <div className={classes.sub_child_main_social_txt}>
            <Button variant="text" onClick={()=>handleFacebookLogin()}>
              Continue with Facebook
             </Button>
            </div>
          </div>


          <div className={classes.sub_child_main_social_btn}>
            <div style={{width:"30%"}}>
              <img src={goog} alt="image"/>
            </div>
            <div className={classes.sub_child_main_social_txt}>
            <Button variant="text" onClick={()=>handleGoogleLogin()}>
            Continue with Google
             </Button>
            </div>
          </div>

          <div className={classes.sub_child_main_social_btn}>
            <div style={{width:"30%"}}>
              <img src={appleIcon} alt="image"/>
            </div>
            <div className={classes.sub_child_main_social_txt}>
            <Button variant="text">
            Continue with Apple
             </Button>
            </div>
          </div>



          <div className={classes.sub_child_main_social_btn_last}>
            <div style={{width:"30%"}}>
              <img src={emailIcon} alt="image"/>
            </div>
            <div className={classes.sub_child_main_social_txt}>
            <Button variant="text">
            Continue with Email
             </Button>
            </div>
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
  sub_child_main_social_btn_first:{
    marginTop:"5px",
    display:"flex !important",
    justifyContent: "center !important",
    alignItems: "center !important",
    width:"100% !important",
    border:"1px solid #606060 !important",
    borderRadius:"9px",
    padding:"2px 25px !important"
  },
  sub_child_main_social_btn:{
    marginTop:"15px !important",
    display:"flex !important",
    justifyContent: "center !important",
    alignItems: "center !important",
    width:"100% !important",
    border:"1px solid #606060 !important",
    borderRadius:"9px",
    padding:"2px 25px !important"
  },
  sub_child_main_social_btn_last:{
    marginTop:"15px !important",
    display:"flex !important",
    justifyContent: "center !important",
    alignItems: "center !important",
    width:"100% !important",
    border:"1px solid #606060 !important",
    borderRadius:"9px",
    padding:"2px 25px !important",
    marginBottom:"30px"
  },
  sub_child_main_social_txt:{
    width:"70%",
    fontWeight:"500",
    fontSize:"16px",
    color:"#222222"
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


export default Signin