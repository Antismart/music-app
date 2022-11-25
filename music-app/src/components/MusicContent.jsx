import React from 'react'

function MusicContent() {
  var coverSongs = [...new Array(10)].map((_, number) => {
    return (
      <div key={number} className="h-56 w-1/4 bg-white m-2 flex-shrink-0">
        <p>Hello {number}</p>
      </div>
    )
  })
  return (
    <div className="bg-green-200 flex flex-col flex-1 m-2  border border-red-500">
      <div
        className="overflow-x-scroll flex w-full border-2 border-violet-400"
        style={{ scrollbarWidth: 0 }}
      >
        {coverSongs}
      </div>
      <div className='border-4 border-green-500 flex flex-1'>

      </div>
    </div>
  )
}

export default MusicContent
