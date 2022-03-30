import React from 'react'
import crawlerLogo from '../Assets/Projects/crawler.png'
import Project from '../Project/Project'
import { Skill } from '../Banner/Banner'

function ProjectCrawler () {
  const crawlerSkills = [
    Skill.python,
    Skill.selenium
  ]
  return (
    <Project
      name='Newegg Crawler'
      image={crawlerLogo}
      imageAlt='Graphics card'
      skills={crawlerSkills}
      link='https://github.com/tbrittain/newegg-crawler'
    >
      <div>
        <p />
      </div>
    </Project>
  )
}

export default ProjectCrawler
