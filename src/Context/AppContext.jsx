import { Children, createContext, useEffect, useState } from "react";
import { Products } from "./Products";



export const AppContext = createContext(null);

//.......

export default function AppStore ({children,setCart}){

  const saveProductDetail = JSON.parse(localStorage.getItem("ProductDetail")) ||null;
  const storeCartData = JSON.parse(localStorage.getItem("CartData")) ;
  const saveCartData = Array.isArray(storeCartData)? storeCartData :[];
  const saveTotalPrice = JSON.parse(localStorage.getItem("totalPrice")) || 0;

  const [Allproduct ,setALLproduct]=useState(Products);

  const [ProductDetail,setProductDetail]=useState(saveProductDetail);


  // Cart
  
  const [CartData,setCartData]=useState(saveCartData);
  const [totalPrice,setPrice]= useState(saveTotalPrice);

  const clickCart =()=>{
    setCart(true);
  }

  const deleteCart =()=>{
    setCart(false);
  }

  console.log(CartData);
  
  

  useEffect(()=>{
    localStorage.setItem("ProductDetail",JSON.stringify(ProductDetail));
    localStorage.setItem("CartData",JSON.stringify(CartData));
    localStorage.setItem("totalPrice",JSON.stringify(totalPrice));
  },[ProductDetail,CartData,totalPrice]);


  return(

    <AppContext.Provider value={{Allproduct,setALLproduct,setProductDetail,ProductDetail,clickCart,deleteCart,setCartData,CartData,totalPrice,setPrice}}>
    <div className="relative">
      {children}
    </div>
    </AppContext.Provider>
  )  
}