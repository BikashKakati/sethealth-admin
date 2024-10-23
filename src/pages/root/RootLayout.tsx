import Wrapper from '@/components/common/Wrapper'
import Navbar from '@/components/navbar/Navbar'
import React from 'react'
import { Outlet } from 'react-router-dom'

const RootLayout: React.FC = () => {
  return (
    <div className='flex flex-col items-center justify-center h-full w-full'>
      <Navbar />
      <Wrapper className='my-5'>
        <Outlet />
      </Wrapper>
    </div>
  )
}

export default RootLayout