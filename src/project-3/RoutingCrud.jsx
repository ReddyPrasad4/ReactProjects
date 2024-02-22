import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LayoutCrud from './LayoutCrud'
import Data from './Data'
import Create from './Create'
import View from './View'
import Update from './Update'

let route = createBrowserRouter([{
    path: '/',
    element: <LayoutCrud></LayoutCrud>,
    children: [
        {
            // path :'/',         
            index: true,
            element: <Create></Create>
        },
        {
            path: '/data',
            element: <Data></Data>
        },
        {
            path: '/view',
            element : <View></View>
        },
        {
            path: '/view/:id',
            element: <View></View>
        },
        {
            path: '/update',
            element: <Update></Update>
        },
        {
            path : '/update/:id',
            element : <Update></Update>
        }
    ]
}])
const RoutingCrud = () => {
    return (
        <RouterProvider router={route}></RouterProvider>
    )
}

export default RoutingCrud