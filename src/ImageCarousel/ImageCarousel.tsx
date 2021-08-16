import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './ImageCarousel.css'

interface ImageDetails {
  img: string,
  alt: string,
  label?: string
}

export type ImageCarouselProps = ImageDetails[]

function ImageCarousel (props: { images: ImageCarouselProps }) {
  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      interval={7000}
      showThumbs={false}
      centerMode={true}
      showIndicators={false}
      showStatus={false}
    >
      {
        props.images.map(image => (
          <div
            className='carousel-container'
          >
            <img
              src={image.img}
              alt={image.alt}
            />
            {
              image.label &&
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center'
                }}
              >
                <p
                  className='image-label'
                >
                  {image.label}
                </p>
              </div>
            }
          </div>
        ))
      }
    </Carousel>
  )
}

export default ImageCarousel
