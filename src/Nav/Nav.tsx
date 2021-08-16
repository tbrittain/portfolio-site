import React from "react";
import './Nav.css'

interface NavProps {
  currentAnchor: string
}

function Nav (props: NavProps) {
  return (
    <nav className='nav'>
      <a href='#about'>about</a>
      <a href='#projects'>projects</a>
      <a href='#contact'>contact</a>
    </nav>
  )
}

export default Nav
