import React from 'react'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'

const LayOut = () => {
  return (
    <div>
        <NavBar></NavBar>

        {/*  it is used to fetch the children from the elements */}
        <Outlet></Outlet>
    </div>
  )
}

export default LayOut