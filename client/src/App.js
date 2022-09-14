import React,{useEffect} from 'react'
import WebFont from 'webfontloader';
import Modal from './../src/component/CreateProfileModal/Modal'
import Routes from './Routes'



function App() {
  useEffect(()=>{
    WebFont.load({
      google:{
        families:["Poppins"]
      }
    })
  },[])


  return <Routes/>
}

export default App;
