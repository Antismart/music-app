import React from 'react'
import spotifyIcon from "../assets/Images/spotifyIcon.png";


function SideBar() {
  return (
    <div className='h-screen w-20  bg-black'>
      <div>
         <img  className=' bg-black'  src={spotifyIcon} alt='icon'/>
      </div>
      <div>
       <span className="  material-symbols-sharp  m-6"  style={{color:"white" }}>
           home
      </span>
      <span class="material-symbols-sharp m-6" style={{color:"white"}}> 
         explore
      </span>
      <span class="material-symbols-sharp m-6" style={{color:"white"}}>
        mic
      </span>
      <span class="material-symbols-sharp m-6" style={{color:"white"}}>
         schedule
      </span>
      </div>
    </div>
  )
}

export default SideBar