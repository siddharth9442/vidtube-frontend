import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import About from './components/About'
import Home from './components/Home'
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'

const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/signup',
          element: <Signup />
        }
      ]
    }
])

export default router