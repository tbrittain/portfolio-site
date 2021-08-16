import React from "react";
import About from "../About/About";
import Projects from "../Projects/Projects";
import './Content.css';

function Content () {
  return (
    <div
      className='content-container'
    >
      <About />
      <Projects />
    </div>
  )
}

export default Content
