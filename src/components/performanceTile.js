import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import { Link } from 'gatsby'
import { AddToCalendarButton } from 'add-to-calendar-button-react'

const PerformanceTile = ({ performanceTile, day, handleCategoryFilter }) => {
  const {
    slug,
    tileImage,
    title,
    performanceHeadline,
    locationText,
    ticketPrice,
    performanceDates,
    ticketLink,
    category,
    artists,
    locationMapLink,
  } = performanceTile

  const times = performanceDates.filter(
    (performanceDate) =>
      new Date(performanceDate.startTime).toLocaleDateString('en-us', {
        month: 'short',
        day: '2-digit',
      }) === day
  )
  return (
    <div className='performance-tile'>
      <h2>{day}</h2>
      <Link to={`/${slug}`}>
        <GatsbyImage
          image={tileImage.gatsbyImageData}
          alt={tileImage.description}
        ></GatsbyImage>
        <div className='tile-artist-container'>
          {artists.map((artist, index) => {
            return <p key={index}>{artist.name}</p>
          })}
        </div>
        <p className='tile-title'>{title}</p>
      </Link>
      {category && (
        <button
          className='primary-button'
          onClick={() => handleCategoryFilter(category)}
        >
          {category}
        </button>
      )}
      <div>
        <a
          href={locationMapLink}
          target='_blank'
          rel='noreferrer'
          className='tile-location'
        >
          {locationText}
        </a>
        <a
          href={ticketLink}
          target='_blank'
          rel='noreferrer'
          className='tile-time-price'
        >
          <div className='tile-time-price-item'>
            {times.map((time, index) => {
              const timeString = new Date(time.startTime)
                .toLocaleTimeString('en-us', {
                  hour: 'numeric',
                  minute: 'numeric',
                })
                .split(':')
              const timeOfDay = new Date(time.startTime)
                .toLocaleTimeString('en-us', {
                  hour: 'numeric',
                  minute: 'numeric',
                })
                .split(' ')[1]
              return (
                <p key={index} className='performance-tile-time'>{`${
                  timeString[0]
                }${
                  timeString[1].split(' ')[0] === '00'
                    ? ''
                    : `:${timeString[1].split(' ')[0]}`
                }${timeOfDay.toLowerCase()}`}</p>
              )
            })}
          </div>
          <div className='tile-time-price-item'>{ticketPrice}</div>
        </a>
        <Link to={`/${slug}`}>
          <div
            dangerouslySetInnerHTML={{
              __html: performanceHeadline.childMarkdownRemark.html,
            }}
            className='lofty'
          ></div>
        </Link>
      </div>
      <div className='tile-bottom'>
        <a
          href={ticketLink}
          target='_blank'
          rel='noreferrer'
          className='secondary-button rounded'
        >
          {ticketPrice !== 'Free' ? 'Buy Tickets' : 'RSVP'}
        </a>
        <AddToCalendarButton
          name={title}
          startDate={new Date(times[0].startTime).toLocaleString('en-CA', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
          })}
          startTime={new Date(times[0].startTime).toLocaleString('en-CA', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
          })}
          endTime={new Date(times[0].endTime).toLocaleString('en-CA', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
          })}
          location={locationText}
          options={['Google', 'Apple', 'iCal', 'Outlook.com']}
          listStyle='overlay'
          buttonStyle='text'
          timeZone='EST'
          hideCheckmark
          hideBranding
          inline
          styleLight="--btn-background: #fff; --btn-text: #000; --font: 'Helvetica Neue', sans-serif; --btn-underline: none --btn-shadow: none; --btn-border: none;"
        ></AddToCalendarButton>
      </div>
    </div>
  )
}

export default PerformanceTile
