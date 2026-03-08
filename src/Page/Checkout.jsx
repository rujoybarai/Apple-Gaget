import React, { useContext, useRef } from 'react'
import { AppContext } from '../Context/AppContext';
import { toast, Bounce  } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


export default function Checkout() {
 
 const {CartData,totalPrice,setCartData,setPrice}=useContext(AppContext);
  const Navigate= useNavigate();

    const nameRef=useRef();
    const emailRef=useRef();
    const numberRef=useRef();
    const AddressRef=useRef();
    const checkRef=useRef();

    const  handleSubmit =(e)=>{
       e.preventDefault();

          const Name=nameRef.current.value;
          const Email=emailRef.current.value;
          const Number=numberRef.current.value;
     
          const Address=AddressRef.current.value;
         const checked=checkRef.current.checked;
          
     if(Name && Email &&Number &&  Address && checked){
            toast.success('successfull!', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
});
       
      Navigate("/");
      setCartData([]);
      setPrice(0);

        
     }else{
      alert("Please fill up all ");
     }


  
    }



    
   
   
  return (
    <div className=' container mx-auto w-[90%] min-h-[40vh] lg:w-full lg:h-lvh grid grid-rows-5 lg:grid-cols-4 py-10 gap-5 '>

        <div className=' row-span-3 max-h-fit lg:row-span-5 lg:col-span-3 flex flex-col justify-start items-center '>
     
           <h2 className=' text-2xl lg:text-5xl font-semibold text-black mt-3 mb-3'>Customer Details</h2>
          
          <form className="w-full max-w-2xl space-y-5 mt-10" onSubmit={handleSubmit} >

    <div className="space-y-1.5">
      <label className="text-sm font-semibold">Your Name <span className="text-red-500">*</span></label>
      <input type="text" placeholder="Enter your name" ref={nameRef}
             className="w-full p-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-1 focus:ring-orange-400 outline-none placeholder:text-gray-400 text-sm"/>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="space-y-1.5">
        <label className="text-sm font-semibold">Email <span className="text-red-500">*</span></label>
        <input type="email" placeholder="Enter Email"  ref={emailRef}
               className="w-full p-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-1 focus:ring-orange-400 outline-none placeholder:text-gray-400 text-sm"/>
      </div>
      <div className="space-y-1.5">
        <label className="text-sm font-semibold">Phone Number <span className="text-red-500">*</span></label>
        <input type="tel" placeholder="Enter Phone Number" ref={numberRef}
               className="w-full p-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-1 focus:ring-orange-400 outline-none placeholder:text-gray-400 text-sm"/>
      </div>
    </div>

    <div className="space-y-1.5">
      <label className="text-sm font-semibold">Address</label>
      <input type="text" placeholder="Enter address"  ref={AddressRef}
             className="w-full p-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-1 focus:ring-orange-400 outline-none placeholder:text-gray-400 text-sm"/>
    </div>


    <div className="flex items-start space-x-3 pt-2">
      <input type="checkbox" id="terms" ref={checkRef}  className="mt-1 w-4 h-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500"/>
      <label htmlFor="terms" className="text-xs text-zinc-600 leading-normal">
        I hereby accept the terms and conditions of pre-order and read the 
        <a href="#" className="text-zinc-800 underline font-semibold">order terms and conditions</a> carefully.
      </label>
    </div>

    <button type="submit" 
            className="w-30 bg-[#63e004] hover:bg-[#44fe00d0] text-white font-bold py-2  rounded-full transition-all  mt-4 text-sm tracking-wide cursor-pointer active:bg-amber-50">
      Confirm
    </button>
  </form>
                                                                                                                                                                                                                                                    

        </div>



        {/*  */}
        <div className=' h-fit row-span-2 lg:row-span-5 lg:col-span-1  flex flex-col items-center justify-start gap-3 '>

             {Array.isArray(CartData) && CartData.map((item,i)=>(

                  <div className="w-full h-20  rounded-2xl flex justify-evenly items-center border-2 border-gray-400" key={i}>
              <div className="w-20 h-full  rounded-lg"><img src={`${item.img}`} alt=""  className="rounded-lg h-full w-full object-cover"/> </div>
              <h2 className="font-semibold">{item.title.slice(0,10)}</h2>
              <p>৳{item.price}</p>
              <p className="font-bold">{item.qounty}x</p>
              


            </div>
             

            ))}
            <p><strong>total cost : </strong>{totalPrice} TK</p>


        </div>


    </div>
  )
}
