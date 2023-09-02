import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/Navbar'
import { Partners } from './components/Partners'
import { MainSection } from './components/MainSection/MainSection'

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
