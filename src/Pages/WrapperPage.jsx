// Pages and Comps
import Homepage from './Homepage'
import Aboutme from './AboutMe'
import Navbar from '../Components/Navbar'

// Libraries
import React from 'react'
import { Route, Routes } from 'react-router-dom'



export default function WrapperPage () {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/AboutMe" element={<Aboutme />} />
      </Routes>
    </div>
  )
}
