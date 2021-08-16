import React from "react";
import ProjectVaultBot from "./ProjectVaultBot";

function Projects () {
  return (
    <section className='projects'>
      <h2 id='projects'>projects</h2>
      <hr />
      <ProjectVaultBot />
      <hr 
        className='project-break'
      />
    </section>
  )
}

export default Projects
