import React from "react";
import Banner from "../Banner/Banner";
import { Skill } from "../Banner/Banner";
import './Project.css'

type Skills = Skill[]

interface ProjectProps {
  name: string,
  image: string,
  imageAlt: string,
  children: JSX.Element,
  skills: Skills,
  link?: string
}

function Project (props: ProjectProps) {
  const { name, image, imageAlt, skills, children } = props
  return (
    <div
      className='project-container'
    >
      <div
        className='project-details'
      >
        <img
          className='project-image'
          src={image}
          alt={imageAlt}
        />
        <h3
          className='project-title'
        >
          {name}
        </h3>
      </div>
      <div className='project-info'>
        {children}
      </div>
      {props.link &&
        <div
          className='project-link'
        >
          <a
            href={props.link}
            target='_blank'
            rel='noopener noreferrer'
          >
            View source on GitHub ↗
          </a>
        </div>
      }
      <div
        className='project-skills'
      >
        {skills.map(skill => (
          <Banner
            skill={Skill[skill]}
          />
        ))}
      </div>
    </div>
  )
}

export default Project
