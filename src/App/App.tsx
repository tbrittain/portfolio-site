import React from 'react'
import Content from '../Content/Content'
import Nav from '../Nav/Nav'
import './App.scss'

function App() {
  return (
    <body className="app">
      <div className="app-container">
        <Nav />
        <Content />
      </div>
    </body>
  )
}

export default App
