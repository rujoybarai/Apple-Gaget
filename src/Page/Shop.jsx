import React, { useContext, useRef, useState } from 'react'
import { Play } from 'lucide-react'
import { motion } from 'framer-motion'
import { AppContext } from '../Context/AppContext'
import Card2 from '../Component/Card2';



export default function Shop() {

 const {Allproduct,setALLproduct}=useContext(AppContext);
 const [ShopProduct,setShopProduct]=useState(Allproduct);
  let initialPrice= useRef();
  let targetPrice =useRef();

 const ClickCatagory=(name)=>{
    setShopProduct(Allproduct);
    setShopProduct(prev => prev.filter(item=> item.catagory == name));
 }
  const ClickBrand=(name)=>{
    setShopProduct(Allproduct);
    setShopProduct(prev => prev.filter(item=> item.subCatagory == name));
 }
   const ClickRange=()=>{
    setShopProduct(Allproduct);
    let initial =initialPrice.current.value || 0;
    let target = targetPrice.current.value || 100000;
    setShopProduct(prev => prev.filter(item=> item.price >= initial && item.price <= target));
 }
  return (
    <div className=' w-full h-[800px] mx-auto lg:w-[95%] lg:h-lvh  grid grid-rows-6 lg:grid-cols-5 gap-4 mt-5 mb-5'>

        <div className='border-2 border-gray-400 rounded-xl flex flex-col lg:row-span-6 row-span-2 '>

           
        <h2 className='font-semibold text-2xl text-gray-800 my-2 px-3'>Filters</h2>
        <hr className='border-gray-400' />

        <h4 className='mt-1 text-gray-800 ml-3 text-sm font-bold '>Price Range</h4>
        <div className='flex items-center justify-evenly gap-0.5 w-full mt-1 mb-3'>
            <input type="text" placeholder='0' className='w-[30%] border-2 border-gray-400 rounded-md px-1.5 outline-none ' ref={initialPrice} />
            <input type="text" placeholder='100000......' className='w-[30%] border-2  border-gray-400  rounded-md px-1.5 outline-none' ref={targetPrice}/>
            <motion.div className='w-[15%] bg-blue-400 rounded-sm flex items-center justify-center cursor-pointer' onClick={ClickRange} whileTap={{opacity:0.7,backgroundColor:"lightgreen"}}><Play strokeWidth={1.25} color='white' /></motion.div>
        </div>
        <hr className='border-gray-400' />
        <div className='flex  flex-wrap lg:flex-col items-start justify-center gap-0.5 w-full mt-1 mb-3'>
            <h4 className='mt-1 text-gray-950 ml-3 text-md font-bold '>catagory</h4>
            
        <motion.p className='mt-1 text-gray-700 ml-5 t font-semibold text-[14px] cursor-pointer ' whileHover={{color:"blue",scale:"1.05",transition:{duration:0.5}}} onClick={() => ClickCatagory("mobile")}>mobile</motion.p>
        <motion.p className='mt-1 text-gray-700 ml-5 t font-semibold text-[14px] cursor-pointer ' whileHover={{color:"blue",scale:"1.05",transition:{duration:0.5}}}  onClick={() => ClickCatagory("watch")}>watch</motion.p>
        <motion.p className='mt-1 text-gray-700 ml-5 t font-semibold text-[14px] cursor-pointer ' whileHover={{color:"blue",scale:"1.05",transition:{duration:0.5}}}  onClick={() => ClickCatagory("headphone")}>headphone</motion.p>
       < motion.p className='mt-1 text-gray-700 ml-5 t font-semibold text-[14px] cursor-pointer ' whileHover={{color:"blue",scale:"1.05",transition:{duration:0.5}}}  onClick={() => ClickCatagory("laptop")}>laptop</motion.p>
        <motion.p className='mt-1 text-gray-700 ml-5 t font-semibold text-[14px] cursor-pointer ' whileHover={{color:"blue",scale:"1.05",transition:{duration:0.5}}}  onClick={() => ClickCatagory("Adapter")}>Adapter</motion.p>
        <motion.p className='mt-1 text-gray-700 ml-5 t font-semibold text-[14px] cursor-pointer ' whileHover={{color:"blue",scale:"1.05",transition:{duration:0.5}}}  onClick={() => ClickCatagory("Gadgets & Accessories")}>Gadgets & Accessories</motion.p>
       

          
        </div>
        <hr className='border-gray-400' />
              <div className='flex flex-wrap  lg:flex-col items-start justify-center gap-0.5 w-full mt-1 mb-3'>
            <h4 className='mt-1 text-gray-950 ml-3 text-md font-bold '>Brand</h4>
            
        <motion.p className='mt-1 text-gray-700 ml-5 t font-semibold text-[14px] cursor-pointer ' whileHover={{color:"blue",scale:"1.05",transition:{duration:0.5}}} onClick={()=>ClickBrand("Apple")}>Apple</motion.p>
        <motion.p className='mt-1 text-gray-700 ml-5 t font-semibold text-[14px] cursor-pointer ' whileHover={{color:"blue",scale:"1.05",transition:{duration:0.5}}} onClick={()=>ClickBrand("Samsung")}>Samsung</motion.p>
        <motion.p className='mt-1 text-gray-700 ml-5 t font-semibold text-[14px] cursor-pointer ' whileHover={{color:"blue",scale:"1.05",transition:{duration:0.5}}} onClick={()=>ClickBrand("Oneplus")}>One plus</motion.p>
       < motion.p className='mt-1 text-gray-700 ml-5 t font-semibold text-[14px] cursor-pointer ' whileHover={{color:"blue",scale:"1.05",transition:{duration:0.5}}} onClick={()=>ClickBrand("Realme")}>Realme</motion.p>
        <motion.p className='mt-1 text-gray-700 ml-5 t font-semibold text-[14px] cursor-pointer ' whileHover={{color:"blue",scale:"1.05",transition:{duration:0.5}}} onClick={()=>ClickBrand("Xiaomi")}>Xiaomi</motion.p>
        <motion.p className='mt-1 text-gray-700 ml-5 t font-semibold text-[14px] cursor-pointer ' whileHover={{color:"blue",scale:"1.05",transition:{duration:0.5}}} onClick={()=>ClickBrand("Anker")}>Anker</motion.p>
        <motion.p className='mt-1 text-gray-700 ml-5 t font-semibold text-[14px] cursor-pointer ' whileHover={{color:"blue",scale:"1.05",transition:{duration:0.5}}} onClick={()=>ClickBrand("Marshall")}>Marshall</motion.p>
       

          
        </div>
    
           

        </div>

        <div className='lg:col-span-4  lg:row-span-6 row-span-4  flex flex-col'>
            <h5 className=' ml-5 mt-3 mb-10'>Showing:<span className='text-md font-semibold'>({ShopProduct.length} items)</span></h5>

            <div className='w-full lg:h-[90vh] lg:w-full overflow-y-auto  flex flex-wrap items-start justify-evenly gap-1 lg:gap-10' id='scroll'>
              {ShopProduct?.map(item=>(
                <Card2 item={item} key={item.Code}/>
              ))}
            </div>

        </div>

    </div>
  )
}
