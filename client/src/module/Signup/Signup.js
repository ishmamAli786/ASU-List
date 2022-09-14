import React,{useState} from 'react'
import Navbar from '../../component/Common/Navbar/Navbar';
import Button from '@material-ui/core/Button';
import {makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './Signup.scss';
import {useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const classes = useStyles();
  const navigate = useNavigate()
  const [firstName,setFirstName]  = useState('')
  const [lastName,setLastName]  = useState('')
  const [birthday,setBirthday]  = useState('')
  const [email,setEmail]  = useState('')
  const [password,setPassword]  = useState('')
  const {loading}=useSelector(state=>state.authReducer)


  const handleSubmit=()=>{
    if(firstName == ''){
      return toast.error('firstName is required')
    }
    else if(lastName == ''){
      return toast.error('lastName is required')
    }
    else if(birthday == ''){
     return toast.error('birthday is required')
    }
    else if(password == ''){
     return toast.error('password is required')
    }else{
      const user ={firstName,lastName,birthday,email,password}
      navigate('/signupStep',{ state: { firstName,lastName,birthday,email,password } })
    }
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
        <h3 className="child_div_signup">Signing up</h3><br></br>
        <hr/>
        <div className="sub_child_div">
        <div>
          <p className="sub_child_asuList" style={{marginBottom:'18px',marginTop:'35px'}}>Welcome to ASU List</p>
        </div>
        <div>
          <div className="sub_child_input" style={{marginBottom:"10px"}}>
            <div className="sub_child_textField">
          {/* <InputLabel id="demo-simple-select-label">First name</InputLabel> */}
        {/* <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={firstName}
          onChange={handleChange}
          style={{width:"100%",color:'#A6A6A6'}}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select> */}
        <TextField id="standard-basic" value={firstName} label="First name" onChange={(e)=>setFirstName(e.target.value)} className="sub_child_textField brthd" required/>
        </div>
          <TextField id="standard-basic" value={lastName} label="Last name" onChange={(e)=>setLastName(e.target.value)} className="sub_child_textField brthd" required/>
          </div>
          <span className="sub_child_span1">Make sure it matches the name on your ID</span>
          <div>
          {/* <TextField id="outlined" type="date" label="Birthdate"   variant="outlined" /> */}
          <input style={{padding:"15px",borderRadius:"5px"}} type="date" value={birthday} onChange={(e)=>setBirthday(e.target.value)} className="sub_child_input1 brthd" placeholder='Birthdate' required/>
            <span className="sub_child_span1">To sign up, you need to be atleast 18</span>
          </div>
          <div>
            {/* <input type="email" label="Email" value={email} onChange={(e)=>setEmail(e.target.value)} className="sub_child_input1 brthd" required/> */}
          <TextField id="outlined-basic" type="email"  value={email} onChange={(e)=>setEmail(e.target.value)} variant="outlined" className="sub_child_input1 brthd"  required/>
            <span className="sub_child_span1">We’ll email you for confimation</span>
          </div>
          <div>
            <div style={{display:'flex',justifyContent: 'center',alignItems: 'center'}}>
          <TextField id="outlined-basic" type="password" label="Password" value={password} onChange={(e)=>setPassword(e.target.value)} variant="outlined" className="sub_child_input1 brthd"  required/>
          </div>
            <span className="sub_child_span1">I agree to ASU List <span className="sub_child_span2" style={{color:"#2253FF"}}>Terms and condition</span></span>
          </div>
          <div>
          <Button variant="contained" onClick={()=>handleSubmit()} className={classes.sub_child_div_btn}>
          {loading? '.....':'Agree and continue'}
          </Button>
          <div style={{marginTop:'5px',marginBottom:'20px'}}>
          <span className="sub_child_span1">Already Have An Account <span className="sub_child_span2" style={{color:"#2253FF",cursor:'pointer'}} onClick={()=>navigate('/login')}>Login</span></span>
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
    marginTop:'20px',
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


export default Signup