import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import SideBar from './components/SideBar'
import SearchBar from './components/SearchBar'
import FriendsActivity from './components/FriendsActivity'
import Music from './components/Music'
import MusicContent from './components/MusicContent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='h-screen w-screen flex'>
      <SideBar/>
      {/* <SearchBar/> */}
      <Music/>
      {/* <MusicContent/> */}
      <FriendsActivity/>
    </div>
  )
}

export default App
