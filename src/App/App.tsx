import React from 'react';
import Content from '../Content/Content';
import Nav from '../Nav/Nav';
import './App.css';

function App() {
  return (
    <body className="app">
      <div className='app-container'>
        <Nav
          currentAnchor='test'
        />
        <Content />
      </div>
    </body>
  );
}

export default App;
