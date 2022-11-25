import React from 'react'

import SearchBar from './SearchBar'
import MusicContent from './MusicContent'

function Music() {
  return (
    <div className='h-screen w-9/12 bg-orange-200 p-2 flex flex-col'>
        <SearchBar/>
        <MusicContent/>
    </div>
  )
}

export default Music