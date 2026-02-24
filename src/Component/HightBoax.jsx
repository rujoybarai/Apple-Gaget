import React, { useRef } from "react";

import { ChevronRight } from "lucide-react";
import { ChevronLeft } from "lucide-react";
import { motion } from 'framer-motion';
import SlideBox from './SlideBox';


export default function HightBoax({t1,t2}) {
     const scroolRef = useRef(null);
      const prevSlide =()=>{
   scroolRef.current?.scrollBy({
    left:-300,behavior:'smooth'
   })
 }
  const nextSlide =()=>{
    scroolRef.current?.scrollBy({
      left:300,behavior:'smooth'
    })
  }
  return (
   <div className="container mx-auto  w-[90%] lg:w-full mt-6 flex flex-col gap-5  justify-center items-center">


        <div className=" container mx-auto w-full lg:h-[100px]  lg:w-full  flex justify-between items-center ">
          <h1 className="font-bold text-xl  lg:text-5xl ml-10">
           {t1 && t1}{" "}
            <span className="bg-gradient-to-r from-[#F0522D] via-[#F6A94A] to-[#852DF0] bg-clip-text text-transparent">
              {t2 && t2}
            </span>
          </h1>
          <div className="flex justify-center items-center mr-10 gap-4">
            <motion.button className="cursor-pointer h-8 w-8 rounded-full  " onClick={prevSlide}
            whileTap={{
              opacity:0.7,scale:0.9,backgroundColor:'gray'
            }}
            >
              <ChevronLeft />
            </motion.button>
            <motion.button className="cursor-pointer h-8 w-8 rounded-full" onClick={nextSlide}
               whileTap={{
              opacity:0.7,scale:0.9,backgroundColor:'gray'
            }}>
              <ChevronRight />
            </motion.button>
          </div>
        </div>

       
       {/* trend product cards */}

       <SlideBox scroll={scroolRef}/>

      </div>
  )
}
