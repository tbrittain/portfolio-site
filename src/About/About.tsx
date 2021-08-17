import React from "react";
import './About.css';
import ImageCarousel, { ImageCarouselProps } from "../ImageCarousel/ImageCarousel";
import image1 from '../Assets/1.jpg';
import image2 from '../Assets/2.jpg';
import image3 from '../Assets/3.jpg';

const aboutImages: ImageCarouselProps = [
  {
    img: image1,
    alt: 'Trey at the summit of Old Baldy in Garner State Park, Texas',
    label: 'Summit of Old Baldy in Garner State Park, Texas'
  },
  {
    img: image2,
    alt: 'Trey in the San Juan Mountains near Silverton, Colorado',
    label: 'San Juan Mountains near Silverton, Colorado'
  },
  {
    img: image3,
    alt: 'Trey posing near a valley of the San Juan Mountains near Durango, Colorado',
    label: 'Near Durango, Colorado'
  }
]

function About () {
  return (
    <div
      style={{
        margin: 'auto'
      }}
    >
      <div>
        <h2 id='about'>about</h2>
        <hr/>
        <p>
          My name is Trey Brittain and I am an aspiring Full Stack Developer based in Houston, Texas. 
          My languages of choice are TypeScript/JavaScript and Python, but I also have some experience working
          with Java, C#, and R.
        </p>
        <p>
          I graduated from the University of St. Thomas in Houston, Texas in the Spring of 2021 with a BS in Cell & Molecular Biology.
          During my undergraduate, my work in research laboratories focusing in bioinformatics led to me discovering a passion for programming.
        </p>
        <p>
          For frontend development, I primarily use React (but I am also interested in working with other frameworks such as Vue and Angular).
          For backend development, I have experience working with Express, but I am progressively learning ASP.NET as well.
          Using Express, I have created both traditional REST APIs as well as GraphQL APIs using Apollo GraphQL.
        </p>
        <p>
          In my free time, I enjoy listening to and thinking about music, cycling, following baseball (and sabermetrics),
          taking in the great outdoors, and occasionally playing video games.
        </p>
      </div>
      <div
        className='about-carousel-container'
      >
        <ImageCarousel
          images={aboutImages}
        />
      </div>
    </div>
  )
}

export default About
