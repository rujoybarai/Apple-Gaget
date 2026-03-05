
import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './Component/Footer'
import Navber from './Component/Navber'
import AppStore from './Context/AppContext'
import { ToastContainer } from 'react-toastify';
import Cart from './Component/Cart'
import { useState } from 'react'

 

function App() {
const [cart,setCart]=useState(false);



  return (
  <AppStore setCart={setCart}>


    <Navber/>
   <ToastContainer/>
     {cart && <Cart/>}
     <Outlet/>
     <Footer/>
  </AppStore>
  )
}

export default App
