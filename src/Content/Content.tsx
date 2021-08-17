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
      >
        <About />
      </section>
      <section
        className='projects'
      >
        <Projects />
      </section>
      <section
        className='contact'
      >
        <Contact />
      </section>
    </main>
  )
}

export default Content
