// import { useState } from 'react'

import './App.css'
import Home from './components/Home'

 
 
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
 
  return (
    <div className='h-screen w-screen flex bg-black'>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          
        </Routes>
      </Router>
     </div>
  )
}

export default App
