// Pages and Comps
import Homepage from './Homepage'
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
      </Routes>
    </div>
  )
}
