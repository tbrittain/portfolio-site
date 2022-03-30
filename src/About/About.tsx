import React, { useState } from 'react'
import './About.scss'
import Collapse from '@kunukn/react-collapse'
import ImageCarousel, { ImageCarouselProps } from '../ImageCarousel/ImageCarousel'
import image1 from '../Assets/About/1.jpg'
import image2 from '../Assets/About/2.jpg'
import image4 from '../Assets/About/4.jpg'

const aboutImages: ImageCarouselProps = [
  {
    img: image1,
    alt: 'Trey at the summit of Old Baldy in Garner State Park, Texas',
    label: 'Summit of Old Baldy in Garner State Park, Texas',
  },
  {
    img: image2,
    alt: 'Trey in the San Juan Mountains near Silverton, Colorado',
    label: 'San Juan Mountains near Silverton, Colorado',
  },
  {
    img: image4,
    alt: 'Trey and Lauren posing near a lagoon in Apalachicola, Florida',
    label: 'Near Apalachicola, Florida',
  },
]

function About(): JSX.Element {
  const [open, setOpen] = useState(false)
  return (
    <>
      <div>
        <h2>about</h2>
        <hr />
        <p>
          My name is Trey Brittain and I am a Junior Software Consultant at
          Entrance Consulting in Houston, Texas. My languages of choice are
          TypeScript/JavaScript and Python, but I also have some experience
          working with Go, C#, and R.
        </p>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <button className="about-expand" onClick={() => setOpen(!open)}>
            <p>{open ? 'less' : 'more'}</p>
          </button>
        </div>
        <Collapse isOpen={open}>
          <p>
            I graduated from the University of St. Thomas in Houston, Texas in
            the Spring of 2021 with a BS in Cell & Molecular Biology. During my
            undergraduate, my work in research laboratories focusing in
            bioinformatics led to me discovering a passion for programming.
          </p>
          <p>
            For frontend development, I primarily use React, but I am also
            interested in working with other frameworks such as Vue, Next.js,
            and Svelte. For backend development, I have experience working with
            Express, Koa, and Apollo GraphQL.
          </p>
          <p>
            In my free time, I enjoy listening to and thinking about music,
            cycling, following baseball (and sabermetrics), taking in the great
            outdoors, and occasionally playing video games.
          </p>
          <div className="about-carousel-container">
            <ImageCarousel images={aboutImages} />
          </div>
        </Collapse>
      </div>
    </>
  )
}

export default About
