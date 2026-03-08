import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'

export default function Login() {
    const {deleteLogin,clickRegister}=useContext(AppContext);

  return (
    <div className='absolute inset-0 z-40 flex items-start justify-center bg-black/50'>

        <div className='w-[90%] h-fit lg:w-lg lg:h-[50vh] bg-white z-50 mt-52 rounded-2xl flex flex-col items-center justify-start relative py-5'>
         <p className='absolute right-7 top-3 text-4xl font-normal text-gray-500 cursor-pointer'  onClick={deleteLogin}>X</p>
         <h2 className='text-center text-3xl font-bold mt-5 mb-2 '>Login</h2>

         <input type="text" placeholder='Enter your email' className='w-[60%] h-10 rounded-md pl-5 border-2 border-gray-300 outline-none focus:border-blue-200 mt-8'  />
         
         <input type="text" placeholder='Enter your password' className='w-[60%] h-10 rounded-md pl-5 border-2 border-gray-300 outline-none focus:border-blue-200 mt-3'  />

         <button className='text-xl font-bold mt-5 bg-amber-500 text-white py-1 px-3 rounded-xl cursor-pointer ' >Login</button>


         <p className='mt-4 font-normal'>Not a member? <span className='text-blue-500 cursor-pointer' onClick={clickRegister}>Register</span></p>

        </div>


    </div>
  )
}
