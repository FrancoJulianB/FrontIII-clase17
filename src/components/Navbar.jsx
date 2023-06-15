import React from 'react'
import { routes } from '../utils/routes'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <Link to={routes.home}><h4 className='link'>Home</h4></Link>
        
    </nav>
  )
}

export default Navbar