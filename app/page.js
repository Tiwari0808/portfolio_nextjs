import React from 'react'
import Navbar from './component/Navbar'
import Header from './component/Header'
import About from './component/About'
import Services from './component/Services'
import Project from './component/Project'
import Connect from './component/Connect'
import Footer from './component/Footer'

const page = () => {

  return (
    <div className=''>
    <Navbar/>
    <Header/>
    <About/>
    <Services/>
    {/* <Project/>
    <Connect/>
    <Footer/> */}
    </div>
  )
}

export default page
