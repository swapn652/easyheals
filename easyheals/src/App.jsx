import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/Navbar'
import { Partners } from './components/Partners'
import { BookConsultation } from './components/BookConsultation'
import { LocationDoctors } from './components/LocationDoctors'
import { ServicesProvided } from './components/ServicesProvided'
import { Features } from './components/Doctor/Features'
import { Doctor } from './components/Doctor/Doctor'
import { DoctorWithFeatures } from './components/Doctor/DoctorWithFeatures'
import { MainSection } from './components/MainSection'

function App() {

  return (
    <>
    <Navbar/>
    <MainSection/>
    <div className="mt-20 -ml-14">
      {/* <Partners/> */}
    </div>
    {/* <Doctor/> */}
    {/* <DoctorWithFeatures/> */}
    </>
  )
}

export default App
