import React from 'react'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Login'
import Browse from './Browse'

const Body = () => {

    const appRounter =  createBrowserRouter([
        {
            path: "/",
            element: <Login/>
        },
        {
            path: 'browse',
            element: <Browse/>
        }
    ])
  return (
    <div>
        <RouterProvider router = {appRounter}/>
    </div>
  )
}

export default Body