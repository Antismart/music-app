import React, {useState, useEffect} from "react";
import axios from "axios";

function TracksOfTheWeek() {

   const [tracks, setTracks] = useState([])
    
    useEffect(() => {
      console.log('effect')
      axios
      .get('http://localhost:5174/artist')
      .then(response => {
        setTracks(response.data)
      })
    }, [])
    return (
        <div className="bg bg-black text-white max-h-60 w-1/2 m-2 ">
          <h1 className=" text-sm">Tracks of the Week</h1>
          <div className=" bg-neutral-900 rounded-xl p-1 overflow-auto  max-h-48 border border-slate-700 scrollbar-hide ">
            <div className="  h-48  flex  flex-col ">
            {tracks.slice(23, 29).map(track=>
            <div key={track.id} className=" flex" >
                   <img  className="  bg-white h-9 w-9 m-1 rounded-xl " src={track.image} />
                   <div className=" self-center w-96"> <h1 className="text-xs"> {track.name}</h1></div>
                   <div className=" bg-zinc-900 h-9 w-20 rounded-full border border-slate-700 flex">
                       <div className=" w-1/2 flex items-stretch">
                             <span className="  self-center p-2 material-symbols-sharp">
                                 favorite
                             </span>
                       </div>
                     <div className=" w-1/2 bg-zinc-900 h-9 rounded-full border border-slate-700 "></div>
                   </div>
            </div>
                )}  
            </div>
          </div>
        </div>
    )
}
export default TracksOfTheWeek