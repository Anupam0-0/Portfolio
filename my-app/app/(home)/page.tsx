import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Skills from './components/Skills'

const page = () => {
  return (
    <>
      <div className='min-h-[250vh] bg-black overflow-hidden'>
        <div className='dark:bg-black bg-white  dark:bg-grid-white/[0.1] bg-grid-black/[0.2] relative'>
        <div className='max-w-7xl mx-auto px-5 '>
          <Navbar /> 
          <HeroSection />
        </div>

        <div className='h-10 xl:h-32 bg-gradient-to-t from-black absolute -bottom-5 left-0 xl:bottom-0 w-full'>
        </div>

        <div className='max-w-7xl mx-auto p-5 mt-20'>
          <Skills />
        </div>

      </div>
    </div> 
      
    </>
  )
}

export default page
