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
      <div className="relative w-screen"> 
        <MainSection/>
        <div className="absolute self-center top-[36em] xl:left-0 lg:left-10">
          <Partners/>
        </div>
      </div>
    </>
  )
}

export default App
