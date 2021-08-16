import React from "react";
import owlLogo from '../Assets/owl.png'
import Project from "../Project/Project";
import { Skill } from '../Banner/Banner'

function ProjectOwlApi () {
  const owlApiSkills = [
    Skill.docker,
    Skill.graphql,
    Skill.javascript,
    Skill.postgres,
    Skill.python
  ]
  return (
    <Project
      name='Overwatch League (OWL) API'
      image={owlLogo}
      imageAlt='Official OWL logo'
      skills={owlApiSkills}
      link='https://github.com/tbrittain/OWL-API'
    >
      <div>
        <p>
          I created a REST and GraphQL API using publicly-available data from the Overwatch League (OWL) e-sports results.
          Its primary use is to be able to query individual player and team results from historical matches.
        </p>
        <p>
          The REST and GraphQL APIs run on two separate Express servers, and the endpoints exposed by the REST API
          are (mostly) wrapped by the GraphQL API. A separate Python container can be used to update the database
          with updated data, which is necessary since the statistics are released by OWL in the form of CSV files.
        </p>
      </div>
    </Project>
  )
}

export default ProjectOwlApi
