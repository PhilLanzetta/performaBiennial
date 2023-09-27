import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import { Link } from 'gatsby'
import { AddToCalendarButton } from 'add-to-calendar-button-react'

const calendarStyle = `--base-font-size-l: 8px;
  --base-font-size-m: 8px;
  --base-font-size-s: 8px;
  --font: 'Helvetica Neue', sans-serif;
  --keyboard-focus: #0706fe;
  --btn-background: #fff;
  --btn-background-hover: #fff;
  --btn-border: #0706fe;
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
  --list-shadow: rgba(0 0 0 / 20%) 2px 5px 18px -1px, rgba(0 0 0 / 40%) 2px 2px 10px -3px;
  --list-shadow-modal: rgba(0 0 0 / 60%) 3px 6px 40px -5px, rgba(0 0 0 / 60%) 3px 3px 15px -4px;
  --modal-text: #0706fe;
  --modal-background: #fff;
  --modal-btn-bar: #c6c8cd;
  --modal-btn-background: #0706fe;
  --modal-btn-secondary-background: #ceff75;
  --modal-btn-background-hover: #fff;
  --modal-btn-text: #ceff75;
  --modal-btn-text-hover: #161616;
  --modal-btn-secondary-text: #0706fe;
  --modal-shadow: drop-shadow(5px 8px 30px rgba(0 0 0 / 70%));
  --modal-shadow-btn: rgba(0 0 0 / 10%) 2px 3px 10px -3px,rgba(0 0 0 / 25%) 1px 1px 8px -4px;
  --modal-shadow-btn-hover: rgba(0 0 0 / 35%) 3px 5px 15px -2px,rgba(0 0 0 / 20%) 2px 4px 25px -6px;
  --date-btn-text: #1d1d1e;
  --date-btn-text-secondary: #3a3a3f;
  --date-btn-cal-day-text: #fff;
  --date-btn-cal-month-text: #d3d2d7;
  --date-btn-cal-background: #313132;
  --date-btn-background: #eae9ed;
  --date-btn-background-hover: #fff;
  --date-btn-shadow: rgba(0 0 0 / 40%) 1px 3px 15px -4px, rgba(0 0 0 / 20%) 1px 1px 8px -4px;
  --date-btn-shadow-hover: rgba(0 0 0 / 40%) 4px 6px 18px -1px, rgba(0 0 0 / 35%) 4px 5px 25px -2px;
  --checkmark-background: radial-gradient(circle,#fff 0,rgba(255 255 255 / 80%) 40%,rgba(255 255 255 / 0%) 70%);
  --overlay-background: rgba(20 20 20 / 25%);
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
          buttonStyle='round'
          timeZone='EST'
          hideCheckmark
          hideBranding
          inline
          styleLight={calendarStyle}
        ></AddToCalendarButton>
      </div>
    </div>
  )
}

export default PerformanceTile
