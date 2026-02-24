import { Children, createContext } from "react";



export const AppContext = createContext(null);

//.......

export default function AppStore ({children}){


  return(

    <AppContext.Provider value={{}}>
    {children}
    </AppContext.Provider>
  )  
}