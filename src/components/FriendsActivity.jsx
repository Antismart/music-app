import React, {useState,useEffect} from 'react'
import Settings from './Settings'
import User from './User' 
import axios from 'axios'


function FriendsActivity() {
  const [friends, setFriends] = useState([])
    
    useEffect(() => {
      console.log('effect')
      axios
      .get('http://localhost:5174/artist')
      .then(response => {
        setFriends(response.data)
      })
    }, [])
  return (
    <div className='flex flex-col flex-1 bg-black'>
       <div className='flex '>
         <Settings/>
         <User/>
       </div>
       <div className=' bg-neutral-900 text-white h-full rounded-xl p-1 m-2'>
         <div className=''>
           <span className=' text-sm m-3'>Friends Activity</span>
           
           <div className='flex p-2  flex-col'>
            {friends.slice(17, 23).map(friend =>
            <div className='flex m-4' key={friend.id}>
            <img  className=' bg-white h-11 w-11 rounded-full  '  src={friend.image}  />
              
               <div  className=' self-center w-32 h-10 ' >
                <h1 className='text-xs'>{friend.name}</h1>
                 <h1 className=' text-xs'>{friend.content} </h1> 
               </div> 
           </div>
            )}
             <div className='  '>
               <div className=' bg-neutral-700 text-white  rounded-2xl h-10 w-full '><h1 className=' text-lg text-center p-2 '>View All</h1></div>
          </div> 
           </div>
         </div> 
        
       </div>
     </div>
  )
}

export default FriendsActivity