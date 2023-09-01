import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/Navbar'
import { Partners } from './components/Partners'
import { BookConsultation } from './components/BookConsultation'
import { LocationDoctors } from './components/LocationDoctors'

function App() {
  

  return (
    <>
    <Navbar/>
    <BookConsultation/>
    <LocationDoctors/>
    {/* <Partners/> */}
    </>
  )
}

export default App
