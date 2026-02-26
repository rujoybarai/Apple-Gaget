import React, { useContext } from 'react'
import Card2 from '../Component/Card2'
import { AppContext } from '../Context/AppContext'

export default function Offers() {
    const{Allproduct}=useContext(AppContext);
    let LatestOffers=Allproduct?.filter(item=> item.discount !== null);
  return (
    <div className='container mx-auto w-full h-[90vh] lg:w-full lg:h-lvh  flex flex-col gap-5 mt-5 mb-5'>

        <h1 className=' text-3xl lg:text-5xl font-bold mt-5 text-gray-900 mb-2 px-10'>Latest Offers</h1>
        
           <div className='h-[70vh] lg:h-[80vh] lg:w-full flex flex-col '>
                    <h5 className=' ml-10 mt-3 mb-10'>Showing:<span className='text-md font-semibold'>({LatestOffers.length} items)</span></h5>
        
                    <div className='w-full lg:h-[90vh] lg:w-full overflow-y-auto  flex flex-wrap items-start justify-evenly gap-1 lg:gap-10' id='scroll'>
                      {LatestOffers?.map(item=>(
                        <Card2 item={item} key={item.Code}/>
                      ))}
                    </div>
        
                </div>

    </div>
  )
}
