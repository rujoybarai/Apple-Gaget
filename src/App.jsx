
import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './Component/Footer'
import Navber from './Component/Navber'
import AppStore from './Context/AppContext'
import { ToastContainer } from 'react-toastify';
import Cart from './Component/Cart'
import { useState } from 'react'
import Login from './Auth/Login'
import Register from './Auth/Register'

 

function App() {
const [cart,setCart]=useState(false);
const [LoginPage,setLoginPage]=useState(false);
const [RegisterPage,setRegisterPage]=useState(false);




  return (
  <AppStore setCart={setCart} setLoginPage={setLoginPage} setRegisterPage={setRegisterPage}>


    <Navber/>
   <ToastContainer/>
     {cart && <Cart/>}
     {LoginPage && <Login/>}
      {RegisterPage && <Register/>}
     <Outlet/>
     <Footer/>
  </AppStore>
  )
}

export default App
