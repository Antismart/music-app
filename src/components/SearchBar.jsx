import React from 'react'
import { useState, useEffect } from 'react'

function SearchBar() {
  const [query, setQuery]= useState("")
  return (
      <div className=" bg-black  rounded-full p-1 h-10">
      <input className=' w-full h-10 rounded-full' placeholder='Search For Music' onChange={event => setQuery(event.target.value)} />
      </div>
  )
}
export default SearchBar
