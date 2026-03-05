import { motion } from "framer-motion";
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";

export default function Cart() {
const {deleteCart,CartData,totalPrice,setCartData,setPrice}=useContext(AppContext);

 const deleteItem =(item)=>{
  setCartData(prev => prev.filter(product=>product.id !== item.id ));
  setPrice(prev => prev>0 ? prev -=item.price *item.qounty : 0);


 }

  return (
    <div className="absolute inset-0 z-40 flex items-start justify-center bg-black/50">
      
      <div className="bg-white w-96 min-h-80 lg:w-lg lg:min-h-80 rounded-2xl shadow-2xl p-6 z-50  mt-40  flex flex-col gap-1 relative">
         <h1 className="lg:text-2xl text-center font-bold">Cart</h1>
            <p className="font-semibold text-3xl text-gray-500 cursor-pointer absolute right-6 top-3" onClick={deleteCart}>X</p>

         <div className="w-[90%] min-h-50  mx-auto flex flex-col justify-center items-start gap-2">

            {Array.isArray(CartData) && CartData.map((item,i)=>(

                  <div className="w-full h-20  rounded-2xl flex justify-evenly items-center" key={i}>
              <div className="w-20 h-full  rounded-lg"><img src={`${item.img}`} alt=""  className="rounded-lg h-full w-full object-cover"/> </div>
              <h2 className="font-semibold">{item.title.slice(0,15)}</h2>
              <p>৳{item.price}</p>
              <p className="font-bold">{item.qounty}x</p>
              <p className="font-bold text-2xl text-red-700 cursor-pointer" onClick={()=> deleteItem(item)} >X</p>


            </div>
             

            ))}

      
          
           </div>
           {/*  */}

         <div className="w-[70%] mx-auto h-20  rounded-2xl flex justify-around items-center">
            <h1 className="font-bold text-xl ">Total: <span className="font-medium text-lg">{totalPrice}</span> </h1>
            <motion.button className=" bg-orange-500 text-white px-2 py-1 rounded-lg cursor-pointer " whileTap={{scale:0.9, opacity:0.7, transition:{duration:0.5}}}>Check out</motion.button>
         </div>


      </div>

    </div>
  );
}