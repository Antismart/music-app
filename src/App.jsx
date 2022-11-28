// import { useState } from 'react'

import './App.css'
import Home from './components/Home'

// import SideBar from './components/SideBar'

// import FriendsActivity from './components/FriendsActivity'
// import Music from './components/Music'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='h-screen w-screen flex bg-black'>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          
        </Routes>
      </Router>
      {/* <SideBar/>
      <Music/>
      <FriendsActivity/> */}
    </div>
  )
}

export default App
