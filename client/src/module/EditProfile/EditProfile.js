import React,{useState} from 'react'
import Navbar from './../../CommonComponents/Navbar/Navbar';
import Button from '@material-ui/core/Button';
import {makeStyles } from '@material-ui/core/styles';
import {Select,InputLabel,MenuItem} from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import './EditProfile.scss';
import Password from '../../CommonComponents/Password/Password'
import ic from '../../../src/assets/icons/Message.png'

const ForgetPassword = () => {
  const classes = useStyles();
  const [age, setAge] = React.useState('United States (+1)');


  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
    <Navbar/>
    <div className="parent_div">
      <div className="child_div">
        <h3 className="child_div_signup">Edit Profile</h3>
        <hr/>
        <div className="sub_child_div">
        <div>
          <p className="sub_child_asuList" style={{marginBottom:'18px',marginTop:'35px'}}>Welcome to ASU List</p>
        </div>
        <div className="editing_listing_div">
         <img src={ic} alt="image" style={{marginLeft:"20px"}}/> 
          <input type="text" placeholder="Albert" className="editing_lisitng_input"/>
        </div>
        <div className="editing_listing_div" style={{marginTop: "20px"}}>
         <img src={ic} alt="image" style={{marginLeft:"20px"}}/> 
          <input type="text" placeholder="Albert" className="editing_lisitng_input"/>
        </div>
        <div className="editing_listing_div" style={{marginTop: "20px"}}>
         <img src={ic} alt="image" style={{marginLeft:"20px"}}/> 
          <input type="text" placeholder="Albert" className="editing_lisitng_input"/>
        </div>
        <div className="editing_listing_div" style={{marginTop: "20px"}}>
         <img src={ic} alt="image" style={{marginLeft:"20px"}}/> 
          <input type="text" placeholder="Albert" className="editing_lisitng_input"/>
        </div>
        <div className="editing_listing_div" style={{marginTop: "20px"}}>
         <img src={ic} alt="image" style={{marginLeft:"20px"}}/> 
          <input type="text" placeholder="Albert" className="editing_lisitng_input"/>
        </div>
        <div className="editing_listing_div" style={{marginTop: "20px"}}>
         <img src={ic} alt="image" style={{marginLeft:"20px"}}/> 
          <input type="text" placeholder="Albert" className="editing_lisitng_input"/>
        </div>
        <div>
          <div>
          <Button variant="contained"  className={classes.sub_child_div_btn}>
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