import React from "react";
import ProjectOwlApi from "./ProjectOwlApi";
import ProjectVaultBot from "./ProjectVaultBot";
import './Projects.css'

function Projects () {
  return (
    <div>
      <h2 id='projects'>projects</h2>
      <hr />
      <ProjectVaultBot />
      <hr 
        className='project-break'
      />
      <ProjectOwlApi />
    </div>
  )
}

export default Projects
