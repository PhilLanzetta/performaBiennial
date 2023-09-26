import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

const ImageModule = ({ content }) => {
  return (
    <div className='module-image-container'>
      {content.images.length === 1 ? (
        <>
          <figure key={content.imageModule} className='single-col-image'>
            <GatsbyImage
              image={content.images[0].image.gatsbyImageData}
              alt={content.images[0].description}
              className='image'
            ></GatsbyImage>
          </figure>
          <figcaption>{content.images[0].caption}</figcaption>
        </>
      ) : (
        content.images.map((image, index) => (
          <>
            <figure key={index} className='two-col-image'>
              <GatsbyImage
                image={image.image.gatsbyImageData}
                alt={image.image.description}
                className='image'
              ></GatsbyImage>
            </figure>
            <figcaption>{image.caption}</figcaption>
          </>
        ))
      )}
    </div>
  )
}

export default ImageModule
