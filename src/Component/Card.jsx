import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import { useNavigate } from 'react-router-dom';


export default function Card({item}) {
  const {setProductDetail}=useContext(AppContext);
  const navigate =useNavigate();

  const handClick =()=>{
     setProductDetail(item);
     navigate("/productdetails");

  }
  return (
    <div id='card' className=" h-70 w-64 lg:h-80 lg:w-70 border-2  border-gray-200 shadow-md  rounded-2xl flex shrink-0 flex-col justify-baseline items-start  p-2 pb-4 m-5 cursor-pointer"onClick={handClick} >
      <div className='w-full h-[70%]  '>
      <img src={`${item.img[0]}`} alt=""  className='bg-cover w-full h-full'/>

      </div>
      <h4 className='font-semibold lg:text-xl text-md px-1'>{item.title.slice(0,20)}</h4>
      <h4 className='font-semibold text-md mt-1 px-1 '> ৳{item.price}</h4>
      <div className='flex items-center justify-center gap-2 mt-1 px-1'>
        {item.Bprice &&( <p className='line-through text-gray-500 text-sm'>৳{item.Bprice}</p>)}
      {item.discount && (<p className='bg-green-300 text-gray-600 px-2.5 rounded-2xl text-sm'>৳ {item.discount} OFF </p>)}
      </div>

  
    </div>
  )
}
