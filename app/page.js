import React from 'react'
import Navbar from './component/Navbar'
import Header from './component/Header'
import About from './component/About'

const page = () => {
  return (
    <div className='flex flex-col'>
    <Navbar/>
    <Header/>
    <About/>
    </div>
  )
}

export default page
