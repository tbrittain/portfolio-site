import React from 'react'
import ProjectVaultBot from './ProjectVaultBot'
import ProjectHackathon from './ProjectHackathon'
import './Projects.scss'

function Projects(): JSX.Element {
  return (
    <>
      <h2>projects</h2>
      <hr />
      <ProjectVaultBot />
      <ProjectHackathon />
    </>
  )
}

export default Projects
