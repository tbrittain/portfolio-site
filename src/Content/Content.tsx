import React from "react";
import About from "../About/About";
import Projects from "../Projects/Projects";
// import { Scrollbars } from 'react-custom-scrollbars-2';
import CustomScrollbar from "../CustomScrollbar/CustomScrollbar";
import './Content.css';

function Content () {
  return (
    <main
      className='content-container'
    >
      <CustomScrollbar
      >
        <About />
        <Projects />
      </CustomScrollbar>
    </main>
  )
}

export default Content
