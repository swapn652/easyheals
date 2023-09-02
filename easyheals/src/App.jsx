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
        <div className="absolute top-[36em] lg:left-[3.5em] xl:left-[0em] 2xl:right-[3.3em]">
          <Partners/>
        </div>
      </div>
    </>
  )
}

export default App
