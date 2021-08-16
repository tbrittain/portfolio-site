import React from "react";
import awsIcon from '../Assets/DarkIcons/aws.png'
import dockerIcon from '../Assets/DarkIcons/docker.png'
import googleCloudIcon from '../Assets/DarkIcons/googlecloud.png'
import graphQLIcon from '../Assets/DarkIcons/graphql.png'
import javascriptIcon from '../Assets/DarkIcons/javascript.png'
import postgresIcon from '../Assets/DarkIcons/postgres.png'
import pythonIcon from '../Assets/DarkIcons/python.png'
import typescriptIcon from '../Assets/DarkIcons/typescript.png'
import './Banner.css'

export enum Skill {
  aws = 'aws',
  docker = 'docker',
  googlecloud = 'googlecloud',
  graphql = 'graphql',
  javascript = 'javascript',
  postgres = 'postgres',
  python = 'python',
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
      content.color = '#FE9903'
      break
    case 'docker':
      content.name = 'Docker'
      content.image = dockerIcon
      content.alt = 'Docker icon'
      content.color = '#2396ED'
      break
    case 'googlecloud':
      content.name = 'Google Cloud'
      content.image = googleCloudIcon
      content.alt = 'Google Cloud icon'
      content.color = '#FFFFFF'
      break
    case 'graphql':
      content.name = 'GraphQL'
      content.image = graphQLIcon
      content.alt = 'GraphQL icon'
      content.color = '#000'
      break
    case 'javascript':
      content.name = 'JavaScript'
      content.image = javascriptIcon
      content.alt = 'JavaScript icon'
      content.color = '#F0DB4E'
      break
    case 'postgres':
      content.name = 'PostgreSQL'
      content.image = postgresIcon
      content.alt = 'PostgreSQL icon'
      content.color = '#336791'
      break
    case 'python':
      content.name = 'Python'
      content.image = pythonIcon
      content.alt = 'Python icon'
      content.color = '#3770A0'
      break
    case 'typescript':
      content.name = 'TypeScript'
      content.image = typescriptIcon
      content.alt = 'TypeScript icon'
      content.color = '#007ACD'
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