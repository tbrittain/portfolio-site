import React from 'react'
import bingeableLogo from '../Assets/Projects/bingeable.png'
import Project from '../Project'
import { Skill } from '../Banner'

function ProjectBingeable(): JSX.Element {
  const bingeableSkills = [
    Skill.docker,
    Skill.googlecloud,
    Skill.graphql,
    Skill.postgres,
    Skill.serverless,
    Skill.typescript,
  ]

  return (
    <Project
      name="Bingeable"
      image={bingeableLogo}
      imageAlt="Bingeable logo"
      skills={bingeableSkills}
    >
      <div>
        <p>
          Bingeable is a forthcoming user-aggregated podcast website being
          created to provide a space for users to freely rate and discuss
          podcasts.
        </p>
        <p>
          In its current state, the project is made up of a microservice backend
          architecture hosted on Google Cloud Functions through Serverless
          Framework. Eventually, the microservices will be connected to a
          GraphQL API gateway, which will also handle user authorization through
          Passport.js. The frontend will be created with Next.js for server-side
          rendering capabilities.
        </p>
      </div>
    </Project>
  )
}

export default ProjectBingeable
