import React from "react";
import awsIcon from '../Assets/DarkIcons/aws.png'
import dockerIcon from '../Assets/DarkIcons/docker.png'
import googleCloudIcon from '../Assets/DarkIcons/googlecloud.png'
import graphQLIcon from '../Assets/DarkIcons/graphql.png'
import javascriptIcon from '../Assets/DarkIcons/javascript.png'
import postgresIcon from '../Assets/DarkIcons/postgres.png'
import pythonIcon from '../Assets/DarkIcons/python.png'
import seleniumIcon from '../Assets/DarkIcons/selenium.png'
import typescriptIcon from '../Assets/DarkIcons/typescript.png'
import './Banner.scss'

export enum Skill {
  aws = 'aws',
  docker = 'docker',
  googlecloud = 'googlecloud',
  graphql = 'graphql',
  javascript = 'javascript',
  postgres = 'postgres',
  python = 'python',
  selenium = 'selenium',
  typescript = 'typescript'
}

interface BannerProps {
  skill: Skill
}

interface BannerContent {
  name?: string,
  image?: string,
  alt?: string,
  color?: string
}

function Banner (props: BannerProps) {
  const { skill } = props
  let content: BannerContent = {}

  switch (skill) {
    case 'aws':
      content.name = 'AWS'
      content.image = awsIcon
      content.alt = 'AWS icon'
      break
    case 'docker':
      content.name = 'Docker'
      content.image = dockerIcon
      content.alt = 'Docker icon'
      break
    case 'googlecloud':
      content.name = 'Google Cloud'
      content.image = googleCloudIcon
      content.alt = 'Google Cloud icon'
      break
    case 'graphql':
      content.name = 'GraphQL'
      content.image = graphQLIcon
      content.alt = 'GraphQL icon'
      break
    case 'javascript':
      content.name = 'JavaScript'
      content.image = javascriptIcon
      content.alt = 'JavaScript icon'
      break
    case 'postgres':
      content.name = 'PostgreSQL'
      content.image = postgresIcon
      content.alt = 'PostgreSQL icon'
      break
    case 'python':
      content.name = 'Python'
      content.image = pythonIcon
      content.alt = 'Python icon'
      break
    case 'selenium':
      content.name = 'Selenium'
      content.image = seleniumIcon
      content.alt = 'Selenium icon'
      break
    case 'typescript':
      content.name = 'TypeScript'
      content.image = typescriptIcon
      content.alt = 'TypeScript icon'
      break
  }

  return (
    <div
      className='banner'
    >
      <img
        className='banner-icon'
        src={content.image}
        alt={content.alt}
      />
      <p
        className='banner-text'
      >
        {content.name}
      </p>
    </div>
  )
}

export default Banner