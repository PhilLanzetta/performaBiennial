import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import { Link, navigate } from 'gatsby'
import { AddToCalendarButton } from 'add-to-calendar-button-react'

const calendarStyle = `--base-font-size-l: 8px;
  --base-font-size-m: 8px;
  --base-font-size-s: 8px;
  --font: 'Helvetica Neue', sans-serif;
  --keyboard-focus: #0706fe;
  --btn-background: transparent;
  --btn-background-hover: transparent;
  --btn-text: #0706fe;
  --btn-text-hover: #0706fe;
  --btn-shadow: none;
  --btn-shadow-hover: none;
  --btn-shadow-active: none;
  --list-background: #fff;
  --list-background-hover: #ceff75;
  --list-text: #0706fe;
  --list-text-hover: #0706fe;
  --list-close-background: #e5e5e5;
  --list-close-text: #777;
  --list-shadow: none;
  --list-shadow-modal: none;
  --modal-text: #0706fe;
  --modal-background: #fff;
  --modal-btn-bar: #c6c8cd;
  --modal-btn-background: #0706fe;
  --modal-btn-secondary-background: #ceff75;
  --modal-btn-background-hover: #fff;
  --modal-btn-text: #ceff75;
  --modal-btn-text-hover: #161616;
  --modal-btn-secondary-text: #0706fe;
  --modal-shadow: none;
  --modal-shadow-btn: none;
  --modal-shadow-btn-hover: none;
  --date-btn-text: #1d1d1e;
  --date-btn-text-secondary: #3a3a3f;
  --date-btn-cal-day-text: #fff;
  --date-btn-cal-month-text: #d3d2d7;
  --date-btn-cal-background: #313132;
  --date-btn-background: #eae9ed;
  --date-btn-background-hover: #fff;
  --date-btn-shadow: none;
  --date-btn-shadow-hover: none;
  --checkmark-background: none;
  --overlay-background: none;
  --overlay-cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23777' width='16' height='16' viewBox='0 0 122.878 122.88'%3E%3Cpath d='M1.426 8.313a4.87 4.87 0 0 1 0-6.886 4.87 4.87 0 0 1 6.886 0l53.127 53.127 53.127-53.127a4.87 4.87 0 0 1 6.887 0 4.87 4.87 0 0 1 0 6.886L68.324 61.439l53.128 53.128a4.87 4.87 0 0 1-6.887 6.886L61.438 68.326 8.312 121.453a4.87 4.87 0 0 1-6.886 0 4.87 4.87 0 0 1 0-6.886l53.127-53.128L1.426 8.313h0z'/%3E%3C/svg%3E") 16 16, crosshair;
  --icon-ms365-color: #ea3e23;
  --icon-yahoo-color: #5f01d1;
  --icon-filter: none;
  --btn-underline: none 
  --btn-shadow: none; 
  --btn-border: none;`

const PerformanceTile = ({ performanceTile, day, handleCategoryFilter }) => {
  const {
    slug,
    tileImage,
    title,
    performanceHeadline,
    locationText,
    ticketPrice,
    performanceDates,
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
        <div className='performance-image-container'>
          <div className='overlay'></div>
          <GatsbyImage
            image={tileImage.gatsbyImageData}
            alt={tileImage.description}
            className='performance-tile-image'
          ></GatsbyImage>
        </div>
        <div className='tile-artist-container'>
          {artists.map((artist, index) => {
            return <p key={index}>{artist.name}</p>
          })}
        </div>
        <p className='tile-title'>{title}</p>
      </Link>
      {category === 'Performa Commission' && (
        <button
          className='primary-button tertiary-font'
          onClick={() => {
            handleCategoryFilter(category)
            navigate('/#calendar')
          }}
        >
          {category}
        </button>
      )}
      <div>
        <a
          href={locationMapLink}
          target='_blank'
          rel='noreferrer'
          className='tile-location tertiary-font'
        >
          {locationText}
        </a>
        <a
          href={times[0].ticketUrl}
          target='_blank'
          rel='noreferrer'
          className='tile-time-price'
        >
          <div className='tile-time-price-item tertiary-font'>
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
                <p
                  key={index}
                  className='performance-tile-time tertiary-font'
                >{`${timeString[0]}${
                  timeString[1].split(' ')[0] === '00'
                    ? ''
                    : `:${timeString[1].split(' ')[0]}`
                }${timeOfDay.toLowerCase()}`}</p>
              )
            })}
          </div>
          <div className='tile-time-price-item tertiary-font'>
            {ticketPrice}
          </div>
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
          href={times[0].ticketUrl}
          target='_blank'
          rel='noreferrer'
          className='secondary-button rounded'
        >
          {ticketPrice?.toLowerCase().includes('free') ? 'RSVP' : 'Buy Tickets'}
        </a>
        <div className='calendar-btn'>
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
            buttonStyle='round'
            timeZone='America/New_York'
            hideCheckmark
            hideBranding
            hideBackground
            inline
            size='3'
            styleLight={calendarStyle}
          ></AddToCalendarButton>
        </div>
      </div>
    </div>
  )
}

export default PerformanceTile
