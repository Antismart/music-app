import React, {useEffect, useState} from "react";
import willypaul from "../assets/Images/willypaul.png";
import khaligragh from "../assets/Images/khaligragh-1.png";
import lilwayne from "../assets/Images/lilwyne.png";
import lilnas from "../assets/Images/lilnas.png"
import davido from "../assets/Images/davido.png"
import nickiminaj from "../assets/Images/nickiminaj.png"
import ssaru from "../assets/Images/ssaru.png"
import koffee from "../assets/Images/koffee.png"
import getAuth from "../get_Auth";
import axios from "axios"
// import { Credentials } from "../Utils/Credentials"
import qs from 'qs'

// function RecentArtists() {
//     return (
//         <div className="bg bg-black max-h-60   w-60 m-2 " >
//            <h1 className=" font-thin text-sm text-white">Recent Artists</h1>
//           <div className=" max-h-48 overflow-y-auto  flex  justify-center flex-wrap gap-3  scrollbar-hide">
//               <div className=" bg-yellow-500 h-28  w-28 m-0 rounded-xl p-1">
//               <img className=" object-contain h-24  w-20z m-2 " src={willypaul} alt="istock" />
//               </div>
//               <div className=" bg-red-600 h-28 w-28 m-0 rounded-xl p-1">
//                 <img className=" object-contain h-28 w-32" src={khaligragh} alt="img"/>
//               </div>
//               <div className=" bg-blue-600 h-28 w-28 m-0 rounded-xl p-1">
//               <img className=" object-contain h-28 w-32" src={lilwayne} alt="img"/>
//               </div>
//               <div className=" bg-gray-500 h-28 w-28 m-0 rounded-xl">
//               <img className=" object-contain h-28 w-32" src={lilnas} alt="img"/>
//               </div>
//               <div className=" bg-purple-600 h-28 w-28 m-0 rounded-xl p-1">
//               <img className=" object-contain h-28 w-32" src={davido} alt="img"/>
//               </div>
//               <div className= " bg-orange-500 h-28 w-28 m-0 rounded-xl p-1">
//               <img className=" object-contain h-28 w-32" src={nickiminaj} alt="img"/>
//               </div>
//               <div className=" bg-indigo-400 h-28 w-28 m-0 rounded-xl p-1">
//               <img className=" object-contain h-28 w-32" src={ssaru} alt="img"/>
//               </div>
//               <div className=" bg-green-700  h-28 w-28 m-0 rounded-xl">
//               <img className=" object-contain h-28 w-32" src={koffee} alt="img"/>
//               </div>
              
              
//           </div>
//         </div>
//     )
// }
// export default RecentArtists


function RecentArtists() {
  // const spotify = Credentials();
  // const [token, setToken ] = useState("");
  const [Artists, setArtists] = useState([]);
  
  
  let artist =[
    {
      id:1,
      name: "Willypaul",
      image:[{url: willypaul}],
    },
    {
      id:2,
      name:"Khaligragh",
      image:[{url: khaligragh}],
    },
    {
      id:3,
      name:"Lilwayne",
      image:[{url:lilwayne}],
    },
    {
      id:4,
      name:"Lilnas",
      image:[{url:lilnas}],
    },
    {
      id:5,
      name:"Davido",
      image:[{url: davido}],
    },
    {
      id:6,
      name:"Nickiminaj",
      image:[{url:nickiminaj}],
    },
    {
      id:7,
      name:"Ssaru",
      image:[{url:ssaru}],
    },
    {
      id:8,
      name:"Koffee",
      image:[{url:koffee}],
    },
  ];

  const getArtists = async (artist_id) => {
    //request token using getAuth() function
    const access_token = await getAuth();
    //console.log(access_token);
  
    const api_url = ` https://api.spotify.com/v1/artists/${artist_id}`;
    //console.log(api_url);
    try{
      const response = await axios.get(api_url, {
        headers: {
          'Authorization': `Bearer ${access_token}`,
          'Content-Type': 'application/json'
        }
      });
      //console.log(response.data);
      return response.data;
    }catch(error){
      console.log(error);
    }  
    setArtists([...getArtists.data.Artists, ...artist]),
    []
  };
  
  console.log(getArtists('0TnOYISbd1XYRBk9myaseg'));
 

return (
  <>
    <h3 className="font-thin text-sm text-white">Recent Artists</h3>
    <div className=" h-60 w-64 bg-slate-300">
      {Artists.map((artist) => {
        return (
          <div key={artist.id} className=" ">
            <img src={artist.image[0].url} alt="" title={artist.name} />
          </div>
        );
      })}
    </div>
  </>
);
}

export default RecentArtists;