import { Link, navigate } from "gatsby"
import React, { useState, useEffect } from "react"
import Loader from "./loader"

const apiKey = process.env.GATSBY_WEATHER_KEY
const cityName = "new york"

const Header = ({ location, handleCategoryFilter }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(true)
  const [weatherData, setWeatherData] = useState(null)
  const [nyTime, setNyTime] = useState(
    new Date().toLocaleTimeString("en-US", {
      timeZone: "America/New_York",
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
    })
  )

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const convertToFahrenheit = temp => {
    return Math.round(temp * (9 / 5) + 32)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setNyTime(
        new Date().toLocaleTimeString("en-US", {
          timeZone: "America/New_York",
          hour: "numeric",
          minute: "2-digit",
          second: "2-digit",
        })
      )
    }, 1000)
    return () => clearInterval(interval)
  }, [nyTime])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
      )
      const data = await response.json()
      setWeatherData(data)
      setLoading(false)
    }
    fetchData()
  }, [])

  return (
    <div className="header-container">
      <div className="header-main">
        <div className="header-logo-container">
          <Link
            to="/"
            className="header-logo-link"
            onClick={() => setIsOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="header-logo"
              viewBox="0 0 22.872 59.195"
            >
              <defs>
                <clipPath id="clip-path">
                  <rect
                    id="Rectangle_180"
                    data-name="Rectangle 180"
                    width="22.872"
                    height="59.195"
                    fill="none"
                  />
                </clipPath>
              </defs>
              <g
                id="Group_511"
                data-name="Group 511"
                clipPath="url(#clip-path)"
              >
                <path
                  id="Path_98"
                  data-name="Path 98"
                  d="M390.478,197.081c0-3.088.382-3.86,1.757-3.86,3.283,0,3.666,6.52,3.666,12.611,0,8.665-.841,13.469-4.772,13.469h-.65v-22.22Zm-10.348,51.9h13.594v-2.059c-2.367-.171-3.246-.6-3.246-7.549V222.733h2.254a7.971,7.971,0,0,0,6.453-3c2.176-2.746,3.818-7.292,3.818-14.327,0-5.833-1.031-9.779-3.246-12.783-1.947-2.66-5.155-2.831-8.477-2.831H380.131v2.059c2.367.172,3.246.6,3.246,7.55v39.978c0,6.949-.878,7.378-3.246,7.549v2.059Z"
                  transform="translate(-380.13 -189.79)"
                  fill="#000"
                />
              </g>
            </svg>
          </Link>
        </div>
        <div className="header-broadcast-container">
          <Link
            to="/broadcast"
            className="broadcast-link"
            onClick={() => setIsOpen(false)}
          >
            Broadcast{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="header-view-icon"
              viewBox="0 0 11.3 7.525"
            >
              <path
                id="iconmonstr-eye-9"
                d="M7.063,7.762A1.413,1.413,0,1,1,5.65,6.351,1.413,1.413,0,0,1,7.063,7.762ZM11.3,7.551s-2,3.973-5.643,3.973C2.276,11.525,0,7.551,0,7.551S2.093,4,5.657,4C9.28,4,11.3,7.551,11.3,7.551ZM8,7.762A2.354,2.354,0,1,0,5.65,10.114,2.355,2.355,0,0,0,8,7.762Z"
                transform="translate(0 -4)"
              />
            </svg>
          </Link>
        </div>
        <div>{new Date().toLocaleDateString("en-us").replace(/\//g, ".")}</div>
        <div>{nyTime}</div>
        <div>
          {loading ? (
            <Loader></Loader>
          ) : (
            <span className="header-weather">
              {convertToFahrenheit(weatherData.main.temp)}&deg;
            </span>
          )}
        </div>
        <div>
          <button
            id="navIcon"
            className={`${isOpen ? "open" : ""}`}
            onClick={toggleMenu}
            aria-label={`${isOpen ? "Close Menu" : "Open Menu"}`}
            name="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
      <div className={`secondary-menu ${isOpen ? "secondary-show" : ""}`}>
        <Link to="/#calendar" onClick={() => setIsOpen(false)}>
          Calendar
        </Link>
        <Link to="/artists" onClick={() => setIsOpen(false)}>
          2023 Artists
        </Link>
        {location?.pathname === "/" ? (
          <button
            className="header-button"
            onClick={() => {
              handleCategoryFilter(["Performa Commission"])
              navigate("/#calendar")
              setIsOpen(false)
            }}
          >
            Performa Commissions
          </button>
        ) : (
          <Link to="/#calendar" state={{ category: ["Performa Commission"] }}>
            Performa Commissions
          </Link>
        )}
        <a
          href="https://google.com"
          target="_blank"
          rel="noreferrer"
          onClick={() => setIsOpen(false)}
        >
          Tickets
        </a>
        <Link to="/the-hub" onClick={() => setIsOpen(false)}>
          The Hub
        </Link>
        <Link to="/pavilions" onClick={() => setIsOpen(false)}>
          Finnish Pavilion
        </Link>
        <Link to="/supporters" onClick={() => setIsOpen(false)}>
          Biennial Supporters
        </Link>
        <a
          href="https://performa-arts.org/attend-a-gala"
          target="_blank"
          rel="noreferrer"
          onClick={() => setIsOpen(false)}
        >
          Opening Night Gala
        </a>
        <Link to="/about" onClick={() => setIsOpen(false)}>
          About Performa
        </Link>
      </div>
    </div>
  )
}

export default Header
