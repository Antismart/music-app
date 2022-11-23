// import { useState } from 'react'

import './App.css'

import SideBar from './components/SideBar'

import FriendsActivity from './components/FriendsActivity'
import Music from './components/Music'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='h-screen w-screen flex'>
      <SideBar/>
      <Music/>
      <FriendsActivity/>
    </div>
  )
}

export default App
