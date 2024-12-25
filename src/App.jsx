import { useState } from 'react'
import './App.css'

import HeroSection from './comp/Hero'
import Navbar from './comp/NavBar'
import AboutSection from './comp/About'
import React from 'react'
import Skills from './comp/Skills'
import Education from './comp/Edu'

function App() {

  return (
   <div className='min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white'>
    <Navbar/>
   <HeroSection/>
   <AboutSection/>
   <Skills/>
   <Education/>
   </div>
  )
}

export default App
