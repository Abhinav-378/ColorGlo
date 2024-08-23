import React, { useEffect } from 'react'
import ComplexNavbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
function Layout() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);
  return (
    <>
        <ComplexNavbar />
        <Outlet />
        <Footer />
    </>
  )
}

export default Layout
