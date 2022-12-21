import React from 'react';
import user1 from "../assets/Images/user.png";

function User() {
  return( 
      <div className=" bg-gray-900 h-10 w-20 m-2 rounded-full flex ">
        <div className=' bg-gray-900 h-10 w-1/2  rounded-full'>
          <select className=' m-2 bg-gray-900  '></select>
        </div>
        <div className=' h-10 w-1/2 bg-emerald-300 rounded-full '>
            <img className=' object-contain h-11 ' src={user1} alt="user1" />
        </div>
      </div>
)
}

export default User
 