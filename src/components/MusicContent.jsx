import React from 'react'
import Genre from './Genre'
import TracksOfTheWeek from './TracksOfTheWeek'
import RecentArtists from './RecentArtists'


function MusicContent() {
  var coverSongs = [...new Array(10)].map((_, number) => {

    return (
      <div key={number} className="h-56 w-48 bg-white m-2 flex-shrink-0 rounded-xl p-1">
        <p>Hello {number}</p>
        <img src='https://o.remove.bg/downloads/6b6d648d-8bb7-40dd-9047-64e03352bc48/istockphoto-1174131779-1024x1024-removebg-preview.png' alt='img' />
      </div>
    )
  })
  return (
    <div className=" bg-black flex flex-col flex-1 m-2  ">
      <div
        className="overflow-x-scroll flex w-full "
        style={{ scrollbarWidth: 'none'}}
      >
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
