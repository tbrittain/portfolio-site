import React from "react";
import ProjectOwlApi from "./ProjectOwlApi";
import ProjectVaultBot from "./ProjectVaultBot";
import './Projects.css'
import ProjectHackathon from "./ProjectHackathon";

function Projects () {
  return (
    <div
      style={{
        width: '100%'
      }}
    >
      <h2 id='projects'>projects</h2>
      <hr />
      <ProjectVaultBot />
      <ProjectOwlApi />
      <ProjectHackathon />
    </div>
  )
}

export default Projects
