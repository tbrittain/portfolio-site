import React from 'react'
import './Nav.scss'

function Nav () {
  return (
    <div
      className='nav-container'
    >
      <h1
        className='title'
      >
        Trey Brittain
      </h1>
      <nav className='nav'>
        <a href='#about'>about</a>
        <a href='#projects'>projects</a>
        <a href='#contact'>contact</a>
      </nav>
    </div>
  )
}

export default Nav
