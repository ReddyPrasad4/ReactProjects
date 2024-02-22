import React from 'react'
import NavBarCrud from './NavBarCrud'
import { Outlet } from 'react-router-dom'


const LayoutCrud = () => {
    return (
        <div>
            <NavBarCrud></NavBarCrud>
            {/*  it is used to fetch the children from the elements */}

            <Outlet></Outlet>
        </div>
    )
}

export default LayoutCrud