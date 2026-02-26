
import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './Component/Footer'
import Navber from './Component/Navber'
import AppStore from './Context/AppContext'
import { ToastContainer } from 'react-toastify';

function App() {


  return (
  <AppStore>
    <Navber/>
   <ToastContainer/>

     <Outlet/>

    <Footer/>
     
   </AppStore>
  )
}

export default App
