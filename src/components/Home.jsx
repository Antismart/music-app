import React from "react";
import Music from "./Music";
import FriendsActivity from './FriendsActivity'
import SideBar from "./SideBar"
 
const Home =() =>{
    return(
        <>
          <SideBar/> 
          <Music/>
          <FriendsActivity/>
          
        </>
    )
}
export default Home