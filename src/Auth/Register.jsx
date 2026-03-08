import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'

export default function Register() {
    const {deleteRegister,clickLogin}=useContext(AppContext);

  return (
    <div className='absolute inset-0 z-40 flex items-start justify-center bg-black/50'>

        <div className='w-[90%] h-fit py-5 lg:w-lg lg:h-[70vh] bg-white z-50 mt-30 rounded-2xl flex flex-col items-center justify-start relative'>
         <p className='absolute right-7 top-3 text-4xl font-normal text-gray-500 cursor-pointer'  onClick={deleteRegister}>X</p>
         <h2 className='text-center text-3xl font-bold mt-5 mb-2 '>Register</h2>

         <input type="text" placeholder='Enter your Name' className='w-[60%] h-10 rounded-md pl-5 border-2 border-gray-300 outline-none focus:border-blue-200 mt-8'  />
        <input type="text" placeholder='Enter your Email' className='w-[60%] h-10 rounded-md pl-5 border-2 border-gray-300 outline-none focus:border-blue-200 mt-3'  />
        <input type="text" placeholder='Enter your Phone Number' className='w-[60%] h-10 rounded-md pl-5 border-2 border-gray-300 outline-none focus:border-blue-200 mt-3'  />
         <input type="text" placeholder='Enter your  Address' className='w-[60%] h-10 rounded-md pl-5 border-2 border-gray-300 outline-none focus:border-blue-200 mt-3'  />
         
         <input type="text" placeholder='Enter your password' className='w-[60%] h-10 rounded-md pl-5 border-2 border-gray-300 outline-none focus:border-blue-200 mt-3'  />

         <button className='text-xl font-bold mt-5 bg-amber-500 text-white py-1 px-3 rounded-xl cursor-pointer ' >Register</button>


         <p className='mt-4 font-normal'>Already have an account? <span className='text-blue-500 cursor-pointer' onClick={clickLogin}>Login</span></p>

        </div>


    </div>
  )
}
