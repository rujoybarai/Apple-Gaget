import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import { Link } from 'react-router-dom';

export default function ProductDetails() {
    const {ProductDetail}=useContext(AppContext);

    const [ primaryImg,setprimaryImg]=useState(0);
    const imgClick=(id)=>{
        setprimaryImg(id);
    }
  return (
    <div className='container h-[1000px] mx-auto lg:h-lvh flex flex-wrap items-center justify-evenly mt-5 mb-5'> 
     
      <div className='w-[80%] lg:w-[30%] lg:h-[80vh] flex flex-col gap-5'>
        <div className='w-full h-[70%] border-2 border-gray-400 shadow-md rounded-xl '>
            <img src={`${ProductDetail.img[primaryImg]}`} alt="" className='w-full h-full object-cover rounded-xl' />
        </div>
        <div className='w-full h-[20%] flex gap-5 '>

          {ProductDetail && ProductDetail.img?.map((item,i)=>(
         
          <div className='w-[30%] h-full border-2  border-gray-400  rounded-md cursor-pointer'  key={i} onClick={()=>imgClick(i)} >
            <img src={`${item}`} alt="" className='w-full h-full object-cover rounded-md'  />
           </div>

          ))}
        </div>
      </div>


{/*  */}

      <div className='w-[80%] h-[80vh] lg:w-[60%] lg:h-[80vh] flex flex-col items-start '>

        <div className='flex  mb-1'>
            <p className='font-normal text-sm text-gray-400 cursor-pointer'><Link to={"/"}>Home</Link></p>
             <p className='font-normal text-sm text-gray-400'>/{ProductDetail.catagory}</p>
              <p className='font-normal text-sm text-gray-400'>/{ProductDetail.subCatagory}</p>
        </div>


        <h3 className='text-sm lg:text-md font-bold mt-3'>Brand: <span className='text-gray-500'>{ProductDetail.subCatagory}</span></h3>
        <h1 className='text-xl lg:text-4xl font-semibold mt-5' >{ProductDetail.title}</h1>

        <div className='w-full h-20   flex gap-2 items-center  '> 
         <h1 className='text-sm lg:text-2xl font-semibold  ' >৳{ProductDetail.price}<span className='text-md lg:text-xl font-normal text-gray-400'>(Cash Price)</span><span className='text-md lg:text-xl font-semibold line-through text-gray-400'>৳{ProductDetail.Bprice}</span></h1>
         <h3 className='text-[12px] lg:text-[16px] font-bold px-2  border-r-2  border-l-2 border-gray-400'>Availability: <span className='font-normal text-gray-500'>{ProductDetail.Availability}</span></h3>
           <h3 className='text-[12px] lg:text-[16px] font-bold px-2'>Code:<span className='font-normal text-gray-500'>{ProductDetail.Code}</span></h3>
         </div>
          <div class=" border-2 mt-3 h-20 w-60 lg:h-26 lg:w-90 border-gray-400 rounded-xl ">
         <h2 class=" text-sm lg:text-md font-bold text-gray-700 ml-4 mt-3">Storage:</h2>
         <div class="flex  items-center gap-1 mt-2 w-full">
        {ProductDetail && ProductDetail.storage?.map((item,i)=>(
           <button class="px-2 py-1 ml-2 border rounded-full text-gray-400 text-[12px] lg:text-sm" key={i}>
          {item}
        </button>

        ))}
      
    
      </div>
    </div>

       <div class="mt-5 h-16 lg:h-26 ">
      <h2 class="font-semibold text-gray-700 mb-2">Select Quantity:</h2>
      <div class="flex items-center bg-gray-100 w-fit rounded-full px-2 py-1">
        <button class="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow text-lg font-bold">
          −
        </button>
        <span class="px-6 text-lg font-medium">1</span>
        <button class="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow text-lg font-bold">
          +
        </button>
      </div>
    </div>

     <motion.button class=" w-30 mt-8 lg:w-30 bg-orange-500 cursor-pointer text-white font-semibold py-2 rounded-full shadow-lg " whileHover={{scale:1.05}} whileTap={{scale:0.9,transition:{duration:0.5}}}>
      Shop Now
    </motion.button>


      </div>

    </div>
  )
}
