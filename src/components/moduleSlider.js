import React from 'react'
import Slider from 'react-slick'
import { GatsbyImage } from 'gatsby-plugin-image'

function NextArrow(props) {
  const { onClick } = props
  return (
    <div
      className={props.addClassName}
      onClick={onClick}
      onKeyDown={onClick}
      role='button'
      tabIndex={0}
      aria-label='go to next'
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 30 30'
        className='hero-svg'
      >
        <path
          id='Path_118'
          data-name='Path 118'
          d='M0,8,5.436,0,11,8'
          transform='translate(19.688 9.5) rotate(90)'
          fill='none'
        />
      </svg>
    </div>
  )
}

function PrevArrow(props) {
  const { onClick } = props
  return (
    <div
      className={props.addClassName}
      onClick={onClick}
      onKeyDown={onClick}
      role='button'
      tabIndex={0}
      aria-label='go to previous'
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 30 30'
        className='hero-svg'
      >
        <path
          id='Path_118'
          data-name='Path 118'
          d='M0,0,5.436,8,11,0'
          transform='translate(18.313 9.5) rotate(90)'
          fill='none'
        />
      </svg>
    </div>
  )
}

const ModuleSlider = ({ content }) => {
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    nextArrow: <NextArrow addClassName='next-button' />,
    prevArrow: <PrevArrow addClassName='prev-button' />,
    useTransform: false,
    autoplay: true,
  }

  return (
    <div
      className={
        content.margin === 'In-text'
          ? 'module-slider-container-in-text'
          : 'module-slider-container'
      }
    >
      <Slider {...settings} className='home-slider'>
        {content.images.map((image, index) => (
          <div className='module-slide-container' key={index}>
            <GatsbyImage
              image={image.image?.gatsbyImageData}
              alt={image.image?.description}
              className='module-slide-image'
            ></GatsbyImage>
            <p
              className={`home-slider-text-module ${
                image?.imageIsLight ? 'dark-text' : 'light-text'
              }`}
            >
              {image.caption}
            </p>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default ModuleSlider
