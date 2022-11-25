import React from 'react'
import Genre from './Genre'
import TracksOfTheWeek from './TracksOfTheWeek'
import RecentArtists from './RecentArtists'


function MusicContent() {
  var coverSongs = [...new Array(10)].map((_, number) => {

    return (
      <div key={number} className="h-56 w-48 bg-white m-2 flex-shrink-0 rounded-xl p-1">
        <p>Hello {number}</p>
      </div>
    )
  })
  return (
    <div className=" bg-black flex flex-col flex-1 m-2  ">
      <div
        className="overflow-x-scroll flex w-full  scrollbar-hide">
        {coverSongs}
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
