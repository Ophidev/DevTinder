import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Body = () => {
  return (
    <div className='w-screen h-screen overflow-hidden'>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Body