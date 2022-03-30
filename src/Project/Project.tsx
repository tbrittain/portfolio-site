import React, { useState } from 'react'
import Banner, { Skill } from '../Banner/Banner'

import Collapse from '@kunukn/react-collapse'
import './Project.scss'

type Skills = Skill[]

interface ProjectProps {
  name: string
  image: string
  imageAlt: string
  children: JSX.Element
  skills: Skills
  link?: string
}

function Project(props: ProjectProps) {
  const [open, setOpen] = useState(false)
  const { name, image, imageAlt, skills, children } = props

  return (
    <div className="project-container">
      <div className="project-details">
        <img className="project-image" src={image} alt={imageAlt} />
        <h3 className="project-title">{name}</h3>
        <button className="project-expand" onClick={() => setOpen(!open)}>
          {open ? '–' : '+'}
        </button>
      </div>
      <Collapse isOpen={open}>
        <>
          <div className="project-info">{children}</div>
          {props.link && (
            <div className="project-link">
              <a href={props.link} target="_blank" rel="noopener noreferrer">
                View source on GitHub ↗
              </a>
            </div>
          )}
        </>
      </Collapse>
      <div className="project-skills">
        {skills.map((skill) => (
          <Banner skill={Skill[skill]} />
        ))}
      </div>
    </div>
  )
}

export default Project
