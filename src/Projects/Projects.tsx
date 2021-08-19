import React from "react";
import ProjectOwlApi from "./ProjectOwlApi";
import ProjectVaultBot from "./ProjectVaultBot";
import './Projects.scss'
import ProjectHackathon from "./ProjectHackathon";

function Projects () {
  return (
    <>
      <h2>projects</h2>
      <hr />
      <ProjectVaultBot />
      <ProjectOwlApi />
      <ProjectHackathon />
    </>
  )
}

export default Projects
