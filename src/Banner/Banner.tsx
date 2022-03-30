import React from 'react'
import awsIcon from '../Assets/DarkIcons/aws.png'
import dockerIcon from '../Assets/DarkIcons/docker.png'
import electronIcon from '../Assets/DarkIcons/electron.png'
import googleCloudIcon from '../Assets/DarkIcons/googlecloud.png'
import graphQLIcon from '../Assets/DarkIcons/graphql.png'
import javascriptIcon from '../Assets/DarkIcons/javascript.png'
import kubernetesIcon from '../Assets/DarkIcons/kubernetes.png'
import postgresIcon from '../Assets/DarkIcons/postgres.png'
import pythonIcon from '../Assets/DarkIcons/python.png'
import seleniumIcon from '../Assets/DarkIcons/selenium.png'
import serverlessIcon from '../Assets/DarkIcons/serverless.png'
import sqliteIcon from '../Assets/DarkIcons/sqlite.png'
import svelteIcon from '../Assets/DarkIcons/svelte.png'
import typescriptIcon from '../Assets/DarkIcons/typescript.png'
import './Banner.scss'

export enum Skill {
  aws = 'aws',
  docker = 'docker',
  electron = 'electron',
  googlecloud = 'googlecloud',
  graphql = 'graphql',
  javascript = 'javascript',
  kubernetes = 'kubernetes',
  postgres = 'postgres',
  python = 'python',
  selenium = 'selenium',
  serverless = 'serverless',
  sqlite = 'sqlite',
  svelte = 'svelte',
  typescript = 'typescript',
}

interface BannerProps {
  skill: Skill
}

interface BannerContent {
  name?: string
  image?: string
  alt?: string
  color?: string
}

function Banner(props: BannerProps): JSX.Element {
  const { skill } = props
  const content: BannerContent = {}

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
    case 'electron':
      content.name = 'Electron'
      content.image = electronIcon
      content.alt = 'Electron icon'
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
    case 'kubernetes':
      content.name = 'Kubernetes'
      content.image = kubernetesIcon
      content.alt = 'Kubernetes icon'
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
    case 'serverless':
      content.name = 'Serverless'
      content.image = serverlessIcon
      content.alt = 'Serverless Framework icon'
      break
    case 'sqlite':
      content.name = 'SQLite'
      content.image = sqliteIcon
      content.alt = 'SQLite icon'
      break
    case 'svelte':
      content.name = 'Svelte'
      content.image = svelteIcon
      content.alt = 'Svelte icon'
      break
    case 'typescript':
      content.name = 'TypeScript'
      content.image = typescriptIcon
      content.alt = 'TypeScript icon'
      break
  }

  return (
    <div className="banner">
      <img className="banner-icon" src={content.image} alt={content.alt} />
      <p className="banner-text">{content.name}</p>
    </div>
  )
}

export default Banner
