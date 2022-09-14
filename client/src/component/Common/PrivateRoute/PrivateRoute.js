import React from 'react'
import { Navigate,Outlet } from 'react-router-dom'
import {Home} from './../../../../src/module'

const PrivateRoute = () => {
  const isLogged=false
  return isLogged?<Outlet/>:<Home showAlert="showAlert"/>
}

export default PrivateRoute