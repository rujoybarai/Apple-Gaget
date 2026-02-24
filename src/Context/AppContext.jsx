import { Children, createContext, useState } from "react";
import { Products } from "./Products";



export const AppContext = createContext(null);

//.......

export default function AppStore ({children}){

  const [Allproduct ,setALLproduct]=useState(Products);


  return(

    <AppContext.Provider value={{Allproduct}}>
    {children}
    </AppContext.Provider>
  )  
}