import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LayOut from './LayOut'
import Products from './Products'
import Orders from './Orders'
import Cart from './Cart'
import CheckOut from './CheckOut'

let route = createBrowserRouter([
    {
        path: '/',
        element: <LayOut></LayOut>,
        children: [
            {
                // to Open the this element when the LayOut loads 
                index: true,
                element: <Products></Products>
            },
            {
                path: '/cart',
                element: <Cart></Cart>
            },
            {
                path: '/order',
                element: <Orders></Orders>
            },
            {
                path : '/checkout',
                element : <CheckOut></CheckOut>
            }
        ]
    }
])
const Routing = () => {
    return (
        <div>
            <RouterProvider router={route}></RouterProvider>
        </div>
    )
}

export default Routing