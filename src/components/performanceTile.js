import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import { Link } from "gatsby"

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
    performanceDate =>
      new Date(performanceDate.startTime).toLocaleDateString("en-us", {
        month: "short",
        day: "2-digit",
      }) === day
  )

  return (
    <div className="performance-tile">
      <Link to={`/${slug}`}>
        <GatsbyImage
          image={tileImage.gatsbyImageData}
          alt={tileImage.description}
        ></GatsbyImage>
        <div className="tile-artist-container">
          {artists.map((artist, index) => {
            return <p key={index}>{artist.name}</p>
          })}
        </div>
      </Link>
      <p className="tile-title">{title}</p>
      {category && (
        <button
          className="primary-button"
          onClick={() => handleCategoryFilter(category)}
        >
          {category}
        </button>
      )}
      <div>
        <a
          href={locationMapLink}
          target="_blank"
          rel="noreferrer"
          className="tile-location"
        >
          {locationText}
        </a>
        <a
          href={ticketLink}
          target="_blank"
          rel="noreferrer"
          className="tile-time-price"
        >
          <div className="tile-time-price-item">
            {times.map((time, index) => {
              const timeString = new Date(time.startTime)
                .toLocaleTimeString("en-us", {
                  hour: "numeric",
                  minute: "numeric",
                })
                .split(":")
              const timeOfDay = new Date(time.startTime)
                .toLocaleTimeString("en-us", {
                  hour: "numeric",
                  minute: "numeric",
                })
                .split(" ")[1]
              return (
                <p key={index}>{`${timeString[0]}${
                  timeString[1].split(" ")[0] === "00"
                    ? ""
                    : `:${timeString[1].split(" ")[0]}`
                }${timeOfDay.toLowerCase()}`}</p>
              )
            })}
          </div>
          <div className="tile-time-price-item">{ticketPrice}</div>
        </a>
        <Link to={`/${slug}`}>
          <div
            dangerouslySetInnerHTML={{
              __html: performanceHeadline.childMarkdownRemark.html,
            }}
            className="lofty"
          ></div>
        </Link>
      </div>
      <div className="tile-bottom">
        <a
          href={ticketLink}
          target="_blank"
          rel="noreferrer"
          className="secondary-button rounded"
        >
          {ticketPrice !== "Free" ? "Buy Tickets" : "RSVP"}{" "}
        </a>
      </div>
    </div>
  )
}

export default PerformanceTile
