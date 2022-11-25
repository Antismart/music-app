import React from 'react'
import Settings from './Settings'
import User from './User'


function FriendsActivity() {
  return (
    <div className='flex flex-col flex-1 bg-black'>
       <div className='flex '>
         <Settings/>
         <User/>
       </div>
       <div className=' bg-neutral-900 text-white h-full rounded-xl p-1 m-2'>
         <div className=''>
           <span className=' text-sm m-3'>Friends Activity</span>
           <div>
               <div className=' bg-white h-11 w-11 rounded-full m-5'> </div>
           </div>
           <div>
               <div className=' bg-white h-11 w-11 rounded-full m-5'> </div>
           </div>
           <div>
               <div className=' bg-white h-11 w-11 rounded-full m-5'> </div>
           </div>
           <div>
               <div className=' bg-white h-11 w-11 rounded-full m-5'> </div>
           </div>
           <div>
               <div className=' bg-white h-11 w-11 rounded-full m-5'></div>
           </div>
           <div>
               <div className=' bg-white h-11 w-11 rounded-full m-5'></div>
           </div>
           <div>
               <div className=' bg-white h-11 w-11 rounded-full m-5'></div>
           </div>
           <div className='  m-2'>
               <div className=' bg-neutral-700 text-white  rounded-2xl h-10 w-full '><h1 className=' text-lg text-center p-2 '>View All</h1></div>
           </div>
         </div>
        
       </div>
     </div>
  )
}

export default FriendsActivity