
import React from 'react'
import { Outlet } from 'react-router-dom';
import TopNavbar from '../Components/TopNavbar';
// import Sidebar from '../Components/Sidebar';


function Layout() {
  return (
    <div>

<TopNavbar />


< Outlet/>
    </div>
  )
}

export default Layout