import React, {useState, useEffect} from 'react'
import Genre from './Genre'
import axios from 'axios';
import TracksOfTheWeek from './TracksOfTheWeek'
import RecentArtists from './RecentArtists'


function MusicContent() {
  
    const [songs, setSongs] = useState([])
    
    useEffect(() => {
      console.log('effect')
      axios
      .get('http://localhost:5174/artist')
      .then(response => {
        setSongs(response.data)
      })
    }, [])
 
  return (
    <div className=" bg-black flex flex-col flex-1 m-2 ">
      <div className=" overflow-x-scroll flex w-full  scrollbar-hide  ">
          {songs.slice(8, 16).map(cover=> 
        <div key={cover.id} className="h-56 w-48 bg-white m-2 flex-shrink-0 rounded-xl overflow-hidden ">
           <img  className=' object-cover h-full w-full  ' src={cover.image} alt={cover.CoverName}/>
        </div>
         )}
      </div>
      <div className=' flex flex-1'>
        <Genre/>
        <TracksOfTheWeek/>
        <RecentArtists/>
      </div>
    </div>
  
  )
}

export default MusicContent
