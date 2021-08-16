import React from 'react';
import Content from '../Content/Content';
import Nav from '../Nav/Nav';
import './App.css';

function App() {
  return (
    <body className="app">
      <div className='app-container'>
        <div className='nav-container'>
          <Nav
            currentAnchor='test'
          />
        </div>
        <Content />
      </div>
    </body>
  );
}

export default App;
