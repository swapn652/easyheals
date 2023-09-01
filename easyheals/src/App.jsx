import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/Navbar'
import { Partners } from './components/Partners'
import { BookConsultation } from './components/BookConsultation'
import { LocationDoctors } from './components/LocationDoctors'
import { ServicesProvided } from './components/ServicesProvided'

function App() {
  

  return (
    <>
    <Navbar/>
    <BookConsultation/>
    <LocationDoctors/>
    <ServicesProvided/>
    {/* <Partners/> */}
    </>
  )
}

export default App
