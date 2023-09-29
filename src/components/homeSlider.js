import React, { useState, useEffect } from 'react'
import Slider from 'react-slick'
import { GatsbyImage } from 'gatsby-plugin-image'
import logo from '../images/LogoSVG.svg'

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

const HomeSlider = ({ images }) => {
  const [randomizeImages, setRandomizeImages] = useState([])
  const shuffleData = (array) => {
    let currentIndex = array.length,
      randomIndex

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex--

      // And swap it with the current element.
      ;[array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ]
    }

    return array
  }

  useEffect(() => {
    setRandomizeImages(shuffleData(images))
  }, [])

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
    <div className='home-slider-container'>
      <img src={logo} alt='logo' className='slider-logo'></img>
      <Slider {...settings} className='home-slider'>
        {randomizeImages?.map((image, index) => (
          <div className='home-slide-container' key={index}>
            <GatsbyImage
              image={image?.image?.gatsbyImageData}
              alt={image?.image?.description}
              className='home-slide-image'
            ></GatsbyImage>
            <p
              className={`home-slider-text ${
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

export default HomeSlider
