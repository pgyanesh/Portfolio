import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='navbar-container'>
      <ul className='nav-list'>
        <li className='list'>@</li>
        <li className='list'>#about</li>
        <li className='list'>#skills</li>
        <li className='list'>#projects</li>
      </ul>
    </div>
  )
}

export default Navbar
