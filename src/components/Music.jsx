import React from 'react'

import SearchBar from './SearchBar'
import MusicContent from './MusicContent'
import SongBar from './Play'

function Music() {
  return (
    <div className='h-screen w-9/12 bg-black p-2 flex flex-col'>
        <SearchBar/>
        <MusicContent/>
        <SongBar/>
    </div>
  )
}

export default Music