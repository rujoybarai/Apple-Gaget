import { Children, createContext, useEffect, useState } from "react";
import { Products } from "./Products";



export const AppContext = createContext(null);

//.......

export default function AppStore ({children}){
  const saveProductDetail = JSON.parse(localStorage.getItem("ProductDetail")) ||null;

  const [Allproduct ,setALLproduct]=useState(Products);

  const [ProductDetail,setProductDetail]=useState(saveProductDetail);

  
  

  useEffect(()=>{
    localStorage.setItem("ProductDetail",JSON.stringify(ProductDetail));
  })


  return(

    <AppContext.Provider value={{Allproduct,setALLproduct,setProductDetail,ProductDetail}}>
    {children}
    </AppContext.Provider>
  )  
}