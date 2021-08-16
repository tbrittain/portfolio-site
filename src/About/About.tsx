import React from "react";
import './About.css';

function About () {
  return (
    <div className='about'>
      <h2 id='about'>about</h2>
      <hr className='horizontal-bar'/>
      <p>
        My name is Trey Brittain and I am an aspiring Full Stack Developer based in Houston, Texas. 
        My languages of choice are TypeScript/JavaScript and Python, but I also have some experience working
        with Java, C#, and R.
      </p>
      <p>
        For frontend development, I primarily use React (but I am also interested in working with other frameworks such as Vue and Angular).
        For backend development, I have experience working with Express, but I am progressively learning ASP.NET as well.
        Within Express, I have worked with the creation of both traditional REST APIs as well as GraphQL APIs through Apollo GraphQL.
      </p>
      <p>
        In my free time, I enjoy listening to and thinking about music, cycling, following baseball (and sabermetrics), and occasionally playing 
        video games.
      </p>
    </div>
  )
}

export default About
