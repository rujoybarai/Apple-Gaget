import React from 'react'
import img1 from "../assets/HeroPic/pic4.webp";

export default function Card() {
  return (
    <div id='card' className=" h-70 w-64 lg:h-80 lg:w-70 border-2  border-gray-200 shadow-md  rounded-2xl flex shrink-0 flex-col justify-baseline items-start  p-2 pb-4 m-5 ">
      <div className='w-full h-[70%]  '>
      <img src={`${img1}`} alt=""  className='bg-cover w-full h-full'/>

      </div>
      <h4 className='font-semibold lg:text-2xl text-xl px-1'>Galaxy S26 Ultra 5G</h4>
      <h4 className='font-semibold text-md mt-1 px-1 '> ৳175,000</h4>
      <div className='flex items-center justify-center gap-2 mt-1 px-1'>
         <p className='line-through text-gray-500 text-sm'>৳ 180000</p>
      <p className='bg-green-300 text-gray-600 px-2.5 rounded-2xl text-sm'>৳ 5,000 OFF </p>
      </div>

  
    </div>
  )
}
