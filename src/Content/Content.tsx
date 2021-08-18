import React from "react";
import About from "../About/About";
import Projects from "../Projects/Projects";
import './Content.css';
import Contact from "../Contact/Contact";
import ScrollProgressBar from "../ScrollProgressBar/ScrollProgressBar";

function Content () {
  return (
    <main
      className='content-container'
    >
      <ScrollProgressBar />
      <section
        className='about'
        id='about'
      >
        <div
          className='section-container'
        >
          <About />
        </div>
      </section>
      <section
        className='projects'
        id='projects'
      >
        <div
          className='section-container'
        >
          <Projects />
        </div>
      </section>
      <section
        className='contact'
        id='contact'
      >
        <div
          className='section-container'
        >
          <Contact />
        </div>
      </section>
    </main>
  )
}

export default Content
