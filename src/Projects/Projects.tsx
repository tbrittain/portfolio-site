import React from "react";
import ProjectVaultBot from "./ProjectVaultBot";
import ProjectHackathon from "./ProjectHackathon";
import ProjectBingeable from "./ProjectBingeable";
import ProjectFranchiseUtility from './ProjectFranchiseUtility'
import './Projects.scss'

function Projects (): JSX.Element {
  return (
    <>
      <h2>projects</h2>
      <hr />
      <ProjectBingeable />
      <ProjectVaultBot />
      <ProjectFranchiseUtility />
      <ProjectHackathon />
    </>
  )
}

export default Projects
