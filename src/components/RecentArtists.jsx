import React, {useEffect, useState} from "react";
import axios from "axios";

 const RecentArtists =() => {
const [artists, setArtists] = useState([])

useEffect(() => {
  console.log('effect')
  axios
  .get('http://localhost:5174/artist')
  .then(response => {
    console.log('promise fulfilled')
    setArtists(response.data)
  })
}, [])


  return (
    <>
     <div className="bg bg-black max-h-60   w-60 m-">
     <h3 className="font-thin text-sm pl-8 text-white">Recent Artists</h3>
    <div className="max-h-48 p-2  overflow-y-auto  flex  justify-center flex-wrap gap-4  scrollbar-hide ">
      {/* <h1>images</h1> */}
      {artists.slice(0, 8).map(artist=> 
     
      <div className=" " key={artist.id}>
        <div className="bg-slate-300 h-24 w-24 rounded-md">
         <img className="  object-cover h-full w-full  " src={artist.image} alt={artist.CoverName}/>
         </div>
      </div>
     )};
     </div>
   </div>  
    </>
  )
}; 

export default RecentArtists;