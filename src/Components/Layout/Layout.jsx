import React from 'react'
import Nav from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import  Footercomp  from './../Footer/Footer';

export default function Layout() {
  return (
    <div>
      <Nav />
      <Outlet />
      <Footercomp/>
    </div>
  )
}
