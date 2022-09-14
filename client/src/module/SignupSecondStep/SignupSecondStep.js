import React,{useState,useEffect} from 'react'
import Navbar from './../../component/Common/Navbar/Navbar';
import Button from '@material-ui/core/Button';
import {makeStyles } from '@material-ui/core/styles';
import './SignupSecondStep.scss';
import ic from '../../../src/assets/icons/Message.png'
import location from '../../../src/assets/icons/Location.png'
import Calender from '../../../src/assets/icons/Calendar.png'
import phone from '../../../src/assets/icons/Fill 1.png'
import profile from '../../../src/assets/icons/Profile.png'
import { useDispatch,useSelector } from 'react-redux';
import {signup,clearErrors,clearMessages,signupData} from '../../store/actions/index';
import toast, { Toaster } from 'react-hot-toast';
import { useLocation,useNavigate } from 'react-router-dom';

const SignupSecondStep = () => {
  const classes = useStyles();
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { state } = useLocation();
  const {firstName,lastName,email,birthday,password} = state
  const [userName,setUserName] = useState('');
  const [userEmail,setUserEmail] = useState('');
  const [userPhone,setUserPhone] = useState('');
  const [userBirthday,setUserBirthday] = useState('');
  const [userLocation,setUserLocation] = useState('');
  const {loading,errors,message}=useSelector(state=>state.authReducer)

  const handleSubmit=()=>{
    if(userName == ''){
      return toast.error('userName is required')
    }
    else if(userEmail == ''){
      return toast.error('userEmail is required')
    }
    else if(userPhone == ''){
      return toast.error('userPhone is required')
    }
    else if(userBirthday == ''){
     return toast.error('userBirthday is required')
    }
    else if(userLocation == ''){
      return toast.error('userLocation is required')
    }
    else{
      const user ={firstName,lastName,birthday,email,password,userName,userEmail,userPhone,userBirthday,userLocation}
      dispatch(signup(user))
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
      setTimeout(() => navigate('/login'), 2000);
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
        <h3 className="child_div_signup">Register</h3>
        <p className="child_div_signupPrag" style={{marginTop:'-20px'}}>Enter your Credentials</p>
        <hr/>
        <div className="sub_child_div">
        <div>
          <p className="sub_child_asuList" style={{marginBottom:'18px',marginTop:'35px'}}>Welcome to ASU List</p>
        </div>
        <div>
        <div className="editing_listing_div" style={{marginTop: "20px"}}>
         <img src={profile} alt="image" style={{marginLeft:"20px"}}/> 
          <input type="text" value={userName} onChange={(e)=>setUserName(e.target.value)} placeholder="Albert" className="editing_lisitng_input"/>
        </div>
        <div className="editing_listing_div" style={{marginTop: "20px"}}>
         <img src={ic} alt="image" style={{marginLeft:"20px"}}/> 
          <input type="text" value={userEmail} onChange={(e)=>setUserEmail(e.target.value)} placeholder="albert23@gmail.com" className="editing_lisitng_input"/>
        </div>
        <div className="editing_listing_div" style={{marginTop: "20px"}}>
         <img src={phone} alt="image" style={{marginLeft:"20px"}}/> 
          <input type="number" value={userPhone} onChange={(e)=>setUserPhone(e.target.value)} placeholder="+1234567890" className="editing_lisitng_input"/>
        </div>
        <div className="editing_listing_div" style={{marginTop: "20px"}}>
         <img src={Calender} alt="image" style={{marginLeft:"20px"}}/> 
          <input type="date" value={userBirthday} onChange={(e)=>setUserBirthday(e.target.value)} placeholder="15/08/2022" className="editing_lisitng_input"/>
        </div>
        <div className="editing_listing_div" style={{marginTop: "20px"}}>
         <img src={location} alt="image" style={{marginLeft:"20px"}}/> 
          <input type="text" value={userLocation} onChange={(e)=>setUserLocation(e.target.value)} placeholder="New York" className="editing_lisitng_input"/>
        </div>
          <div>
          <Button variant="contained"  onClick={()=>handleSubmit()} className={classes.sub_child_div_btn}>
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
    marginTop:'15px',
    marginBottom:'30px',
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


export default SignupSecondStep