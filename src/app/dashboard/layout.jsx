import React from 'react'
import Sidebar from '../ui/dashboard/sidebar/sidebar'
import Navbar from '../ui/dashboard/navbar/navbar'
import DashbardFooter from '../ui/dashboard/footer/footer'

const layout = ({ children }) => {
  return (
    <div className='fle h-screen'>
        <div className='fle-[1] bg-[#F9FAFB] p- h-scree'>
            <Sidebar/>
        </div>
        <div className='fle-[4] p- ml-0  lg:ml-64'>
            <Navbar/>
            { children }
            <DashbardFooter/>
        </div>
    </div>
  )
}

export default layout