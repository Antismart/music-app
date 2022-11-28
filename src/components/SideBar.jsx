import React from 'react'
import spotifyIcon from "../assets/Images/spotifyIcon.png";
import Links from "./Links"


function SideBar() {
  return (
    <div className='h-screen w-20  '>
      <div>
         <img  className=' bg-black'  src={spotifyIcon} alt='icon'/>
      </div>
      <div>
        <Links/>
        {/* <div>
            <span className="  material-symbols-sharp  m-6"  style={{color:"white" }}>
           home
            </span>
        </div> */}
      <span className="material-symbols-sharp m-6" style={{color:"white"}}> 
         explore
      </span>
      <span className="material-symbols-sharp m-6" style={{color:"white"}}>
        mic
      </span>
      <span className="material-symbols-sharp m-6" style={{color:"white"}}>
         schedule
      </span>
      </div>
    </div>
  )
}

export default SideBar