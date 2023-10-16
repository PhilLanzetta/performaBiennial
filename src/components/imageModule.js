import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

const ImageModule = ({ content, support }) => {
  return (
    <div
      className={`module-image-container ${
        content.margin === 'In-text' ? 'max-width' : ''
      }`}
    >
      {content.images.length === 1 ? (
        support ? (
          <div className='program-supporter-logo'>
            <figure key={content.imageModule}>
              <GatsbyImage
                image={content.images[0].image.gatsbyImageData}
                alt={content.images[0].description}
                className='image'
              ></GatsbyImage>
            </figure>
            <figcaption>{content.images[0].caption}</figcaption>
          </div>
        ) : (
          <div className='single-col-image'>
            <figure key={content.imageModule}>
              <GatsbyImage
                image={content.images[0].image.gatsbyImageData}
                alt={content.images[0].description}
                className='image'
              ></GatsbyImage>
            </figure>
            <figcaption>{content.images[0].caption}</figcaption>
          </div>
        )
      ) : (
        content.images.map((image, index) => {
          if (image.caption === 'Lead Supporter') {
            return (
              <div key={index} className='lead-supporter-logo'>
                <figure>
                  <GatsbyImage
                    image={image.image.gatsbyImageData}
                    alt={image.image.description}
                    className='image'
                  ></GatsbyImage>
                </figure>
                <figcaption>{image.caption}</figcaption>
              </div>
            )
          } else if (support) {
            return (
              <div key={index} className='program-supporter-logo'>
                <figure>
                  <GatsbyImage
                    image={image.image.gatsbyImageData}
                    alt={image.image.description}
                    className='image'
                  ></GatsbyImage>
                </figure>
                <figcaption>{image.caption}</figcaption>
              </div>
            )
          } else
            return (
              <div key={index} className='two-col-image'>
                <figure>
                  <GatsbyImage
                    image={image.image.gatsbyImageData}
                    alt={image.image.description}
                    className='image'
                  ></GatsbyImage>
                </figure>
                <figcaption>{image.caption}</figcaption>
              </div>
            )
        })
      )}
    </div>
  )
}

export default ImageModule
