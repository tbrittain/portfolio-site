import React from "react";
import awsLogo from '../Assets/awslogo.png'
import Project from "../Project/Project";
import { Skill } from '../Banner/Banner'

function ProjectHackathon () {
  const hackathonSkills = [
    Skill.aws,
    Skill.python
  ]
  return (
    <Project
      name='AWS Lex Chatbot'
      image={awsLogo}
      imageAlt='AWS logo'
      skills={hackathonSkills}
      link='https://github.com/jennyphvn/bot1'
    >
      <div>
        <p>
          In January 2021, I was part of a team that participated in a hackathon hosted by HP and AWS.
          The use case for our project was a chatbot to be developed using AWS services.
        </p>
        <p>
          We created a simple web application displaying a chat window where users could find information
          on select HP products that were stored in an instance of DynamoDB. We used Lex to serve as
          a chatbot template, and trained the Lex model to recognize keywords for a few different query types, 
          such as finding product categories and specific products, and mocking a transaction for products 
          the user wished to purchase.
        </p>
        <p>
          When a Lex keyword was entered by the user, a request was sent to our serverless backend, which took
           the form of several Python Lambda functions. Depending on the query, products or categories were 
           pulled from the DynamoDB by the respective Lambda function and a response was sent back to Lex, 
           which displayed the product information to the user.
        </p>
        <p>
          We received 3rd place in the hackathon for this project.
        </p>
      </div>
    </Project>
  )
}

export default ProjectHackathon
