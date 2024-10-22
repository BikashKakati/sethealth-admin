import Navbar from '@/components/navbar/Navbar'
import React from 'react'
import { Outlet } from 'react-router-dom'

const RootLayout:React.FC = () => {
  return (
    <div className=''>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default RootLayout