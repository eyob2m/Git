import React from 'react'
import Menu from './Menu'
import Reducer from './Reducer'
import State from './state.jsx'
import Effect from './effect.jsx'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  
  } from 'react-router-dom'
  
  
  
  
  const router = createBrowserRouter([
    {
  
      path: "/",
      element: <Menu />
  
    },
    {
  
      path: "/effect",
      element: <Effect />
  
    },
    {
  
      path: "/reducer",
      element: <Reducer />
  
    },
    {
  
      path: "/state",
      element: <State />
  
    }


  
  ])
  
  export default  function App(){
  return (
  
  <RouterProvider router={router} />
  
  )
  
  }
