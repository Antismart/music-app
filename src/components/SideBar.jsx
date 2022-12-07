// import React from 'react'
// import spotifyIcon from "../assets/Images/spotifyIcon.png";
// import Links from "./Links"


// function SideBar() {
//   return (
//     <div className='h-screen w-20  '>
//       <div>
//          <img  className=' bg-black'  src={spotifyIcon} alt='icon'/>
//       </div>
//       <div>
//         <Links/>
//         {/* <div>
//             <span className="  material-symbols-sharp  m-6"  style={{color:"white" }}>
//            home
//             </span>
//         </div> */}
//       <span className="material-symbols-sharp m-6" style={{color:"white"}}> 
//          explore
//       </span>
//       <span className="material-symbols-sharp m-6" style={{color:"white"}}>
//         mic
//       </span>
//       <span className="material-symbols-sharp m-6" style={{color:"white"}}>
//          schedule
//       </span>
//       </div>
//     </div>
//   )
// }

// export default SideBar

import React from "react";
import {useState} from "react";
import {NavLink} from "react-router-dom";
import { HiHome, HiSearchCircle, HiOutlineMenu, HiMicrophone, HiClock} from  "react-icons/hi";
import spotifyIcon from "../assets/Images/spotifyIcon.png";
import {RiCloseLine} from "react-icons/ri"


const links =[
  { name: 'Home', to: '/', icon: HiHome},
  { name: 'Explore', to: '/explore',icon: HiSearchCircle},
  { name: 'Lyrics', to :'/lyrics', icon:HiMicrophone},
  { name: 'RecentlyPlayed', to: 'recentlyPlayed', icon: HiClock},
];

const NavLinks =({handleClick}) => (
  <div>
    {links.map((item) =>(
      <NavLink
      key={item.name}
      to={item.to}
      className="flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-cyan-400"
      onClick={() => handleClick && handleClick()}>
        <item.icon className="w-6 h-6 mr-3"/>
        {/* { item.name} */}
      </NavLink>
    ))}
  </div>
);

const SideBar = () =>{
  const [mobileMenuOpen, setMobileMenuOpen]= useState(false);
  return (
    <>
       <div className=" h-screen w-20 md:flex hidden flex-col py-2 px-4  bg-[#000000]">
        <img src={spotifyIcon} alt="logo" className="w-full h-14 object-contain" />
        <NavLinks />
      </div>

      {/* Mobile sidebar */}
      <div className="absolute md:hidden block top-6 right-3">
        {!mobileMenuOpen ? (
          <HiOutlineMenu className="w-6 h-6 mr-2 text-white" onClick={() => setMobileMenuOpen(true)} />
        ) : (
          <RiCloseLine className="w-6 h-6 mr-2 text-white" onClick={() => setMobileMenuOpen(false)} />
        )}
      </div>

      <div className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#483D8B] backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${mobileMenuOpen ? 'left-0' : '-left-full'}`}>
        <img src={spotifyIcon} alt="logo" className="w-full h-14 object-contain" />
        <NavLinks handleClick={() => setMobileMenuOpen(false)} />
     </div>
    </>
  );

}


export default SideBar;