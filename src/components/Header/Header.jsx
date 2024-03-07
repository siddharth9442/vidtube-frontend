import React from 'react'
import Navigation from './Navigation'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <div>
            <Link to={'/'}>LOGO</Link>
        </div>
        <Navigation />
    </div>
  )
}

export default Header