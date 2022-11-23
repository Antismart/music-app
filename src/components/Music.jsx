import React from 'react'

import SearchBar from './SearchBar'
import MusicContent from './MusicContent'
import Play from './Play'

function Music() {
  return (
    <div className='h-screen w-9/12 bg-black p-2 flex flex-col'>
        <SearchBar/>
        <MusicContent/>
        <Play/>
    </div>
  )
}

export default Music