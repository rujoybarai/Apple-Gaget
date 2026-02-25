import React from 'react'
import { motion } from 'framer-motion'
import { useContext } from 'react';
import { AppContext } from '../Context/AppContext';
import { useNavigate } from 'react-router-dom';

export default function Card2({item}) {
  const {setProductDetail}=useContext(AppContext);
   const navigate =useNavigate();

  const handClick =()=>{
     setProductDetail(item);
     navigate("/productdetails");

  }

  return (
    <div id='card' className=" h-66 w-40 lg:h-95 lg:w-70 border-2  border-gray-200 shadow-md  rounded-2xl flex shrink-0 flex-col justify-baseline items-start  p-2 pb-4 m-5 cursor-pointer snap-y" >
      <div className='w-full lg:h-56 h-36  '>
      <img src={`${item.img[0]}`} alt=""  className='bg-cover w-full h-full'/>

      </div>
      <h4 className='font-semibold lg:text-xl text-sm px-1'>{item.title.slice(0,15)}</h4>
      <h4 className='font-semibold text-[13px] lg:text-xl mt-1 px-1 '> ৳{item.price}</h4>
      <div className='flex items-center justify-center gap-2 mt-1 px-1'>
        {item.Bprice &&( <p className='line-through text-gray-500 text-[12px] lg:text-sm'>৳{item.Bprice}</p>)}
      {item.discount && (<p className='bg-green-300 text-gray-600 px-0.5 lg:px-2.5 rounded-2xl text-[11px] lg:text-sm'>৳ {item.discount} OFF </p>)}
      </div>

      <motion.button className=" w-20 lg:w-40 mx-auto mt-2 lg:mt-4  py-1 rounded-xl text-[13px] lg:text-md font-normal border-2 border-gray-400 cursor-pointer" whileHover={{backgroundColor:"#F27F20",color:"white",borderColor:"white"}} whileTap={{opacity:0.7,scale:0.9,transition:{duration:0.5}}} onClick={handClick}>Shop Now</motion.button>
    </div>
  )
}