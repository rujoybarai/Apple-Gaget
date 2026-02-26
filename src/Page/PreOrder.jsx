import React from 'react'
import { toast, Bounce  } from 'react-toastify';

export default function PreOrder() {

    const  handleSubmit =(e)=>{
       e.preventDefault();

        toast.success('Submit successful!', {
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
    }
  return (
    <div className="min-h-screen bg-white font-sans text-zinc-800 flex flex-col items-center py-12 px-4">
  <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-10 leading-tight">
    Looking for Somethings <br/> Different?
  </h1>

  <form className="w-full max-w-2xl space-y-5" onSubmit={handleSubmit}>
    
    <div className="space-y-1.5">
      <label className="text-sm font-semibold">Product Information <span className="text-red-500">*</span></label>
      <input type="text" placeholder="Enter product name/URL" 
             className="w-full p-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-1 focus:ring-orange-400 outline-none placeholder:text-gray-400 text-sm"/>
    </div>

    <div className="space-y-1.5">
      <label className="text-sm font-semibold">Your Name <span className="text-red-500">*</span></label>
      <input type="text" placeholder="Enter your name" 
             className="w-full p-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-1 focus:ring-orange-400 outline-none placeholder:text-gray-400 text-sm"/>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="space-y-1.5">
        <label className="text-sm font-semibold">Email <span className="text-red-500">*</span></label>
        <input type="email" placeholder="Enter Email" 
               className="w-full p-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-1 focus:ring-orange-400 outline-none placeholder:text-gray-400 text-sm"/>
      </div>
      <div className="space-y-1.5">
        <label className="text-sm font-semibold">Phone Number <span className="text-red-500">*</span></label>
        <input type="tel" placeholder="Enter Phone Number" 
               className="w-full p-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-1 focus:ring-orange-400 outline-none placeholder:text-gray-400 text-sm"/>
      </div>
    </div>

    <div className="space-y-1.5">
      <label className="text-sm font-semibold">Address</label>
      <input type="text" placeholder="Enter address" 
             className="w-full p-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-1 focus:ring-orange-400 outline-none placeholder:text-gray-400 text-sm"/>
    </div>


    <div className="flex items-start space-x-3 pt-2">
      <input type="checkbox" id="terms" className="mt-1 w-4 h-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500"/>
      <label htmlFor="terms" className="text-xs text-zinc-600 leading-normal">
        I hereby accept the terms and conditions of pre-order and read the 
        <a href="#" className="text-zinc-800 underline font-semibold">pre-order terms and conditions</a> carefully.
      </label>
    </div>

    <button type="submit" 
            className="w-30 bg-[#ff7903] hover:bg-[#f7b075] text-white font-bold py-2  rounded-full transition-all  mt-4 text-sm tracking-wide cursor-pointer active:bg-amber-50">
      Submit
    </button>
  </form>
</div>
  )
}
