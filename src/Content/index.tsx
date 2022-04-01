import React from 'react'
import About from '../About'
import Projects from '../Projects'
import './Content.scss'
import Contact from '../Contact'
import ScrollProgressBar from '../Elements/ScrollProgressBar'

function Content() {
  return (
    <main className="content-container">
      <ScrollProgressBar />
      <section className="about" id="about">
        <div className="section-container">
          <About />
        </div>
      </section>
      <section className="projects" id="projects">
        <div className="section-container">
          <Projects />
        </div>
      </section>
      <section className="contact" id="contact">
        <div className="section-container">
          <Contact />
        </div>
      </section>
    </main>
  )
}

export default Content
