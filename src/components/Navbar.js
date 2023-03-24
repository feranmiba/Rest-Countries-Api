import React, { useState } from 'react'
import Details from './Details'
import Country from './Country'
import './all.css'
import { Routes, Route } from 'react-router-dom'
import { FaMoon, FaSun } from 'react-icons/fa'

function Navbar() {
  const [mode, setMode] = useState(true)
  const change = () => {
    document.body.classList.toggle('dark')
   setMode(!mode)
  }

  
  return (
    <div>
    <div className="navbar-con">
        <p>Where in the world ?</p>
        <div onClick={change} >
          {
            mode ? (
              <button> <FaSun /> Light Mode</button>
            ) : (
              <button className='sun'> <FaMoon /> Dark Mode</button>
            )
          }
        </div>
        </div>
        <div>
      
        </div>
        <div>
          <Routes>
            <Route path='/' element={ <Details />} />
            <Route path='/:name' element={<Country/>}/>
          </Routes>
        </div>
    </div>
  )
}

export default Navbar