import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import { BsArrowRight } from 'react-icons/bs'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'
import HomeSlider from '../components/homeSlider'
import Ticker from '../components/ticker'
import Calendar from '../components/calendar'
import useWindowSize from '../utils/useWindowSize'

const IndexPage = ({ data, location }) => {
  const allEvents = data.allContentfulPerformance.nodes
  const [weeks, setWeeks] = useState(['1', '2', '3'])
  const [performanceData, setPerformanceData] = useState(allEvents)
  const [firstClick, setFirstClick] = useState(true)
  const [category, setCategory] = useState(location.state?.category || [])
  const carouselImages = data.contentfulHomePage.carouselImages
  const hubContent = data.contentfulHomePage
  const tickerText = data.contentfulHomePage.tickerText
  const { width } = useWindowSize()
  const mobile = width < 781

  function onlyUnique(value, index, array) {
    return array.indexOf(value) === index
  }

  const handleCategoryFilter = (input) => {
    if (category.includes(input)) {
      setCategory(category.filter((item) => item !== input))
    } else {
      setCategory([...category, input])
    }
  }

  const filterByCategory = (array) => {
    return [
      ...array,
      category
        .map((term) =>
          array.filter((performance) => performance.category === term)
        )
        .reduce((a, b) => a.concat(b), []),
    ]
  }

  const handleFilterClick = (type, value) => {
    if (type === 'week') {
      if (firstClick) {
        setWeeks([value])
        setFirstClick(false)
      } else {
        if (weeks.includes(value)) {
          const removeWeek = weeks.filter((week) => week !== value)
          if (removeWeek.length) {
            setWeeks(removeWeek)
          } else {
            setWeeks(['1', '2', '3'])
            setFirstClick(true)
          }
        } else {
          setWeeks([value, ...weeks])
        }
      }
    } else if (type === 'category') {
      handleCategoryFilter(value)
    }
  }

  useEffect(() => {
    let result = allEvents
    if (category.length) {
      result = filterByCategory(result)
      result = result
        .filter((item) => item.length)
        .reduce((a, b) => a.concat(b), [])
        .filter(onlyUnique)
    }
    setPerformanceData(result)
  }, [category])
  return (
    <Layout location={location} handleCategoryFilter={setCategory}>
      <HomeSlider images={carouselImages}></HomeSlider>
      <Ticker text='Tickets Available Now!' big></Ticker>
      <div className='home-hub-container'>
        <h2 className='home-hub'>Visit the Hub</h2>
        <div className='page-container'>
          <div
            className='home-hub-description'
            dangerouslySetInnerHTML={{
              __html: hubContent.theHubDescription.childMarkdownRemark.html,
            }}
          ></div>
          <div className='home-hub-locations'>
            <div>
              <h2>Location</h2>
              <div
                className='home-hub-location-item'
                dangerouslySetInnerHTML={{
                  __html: hubContent.theHubLocations.childMarkdownRemark.html,
                }}
              ></div>
            </div>
            <div>
              <h2>Opening Hours</h2>
              <div
                className='home-hub-location-item'
                dangerouslySetInnerHTML={{
                  __html: hubContent.theHubHours.childMarkdownRemark.html,
                }}
              ></div>
            </div>
            <div>
              <h2>Learn More</h2>
              <div className='home-hub-location-item'>
                <p>
                  For more information about events and programming at The Hub,
                  visit{' '}
                  <Link to='/the-hub' className='underline'>
                    The Hub
                  </Link>{' '}
                  page.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Ticker textArray={tickerText} big></Ticker>
      <div className='calendar-container' id='calendar'>
        <h2 className='calendar-title'>Event Calendar</h2>
        <div className='page-container'>
          <div className='filter-container'>
            <div className='filter-preface'>
              Filter <BsArrowRight></BsArrowRight>
            </div>
            <div className='weeks-filter-container'>
              <button
                className={`filter-button ${
                  !firstClick
                    ? weeks.includes('1')
                      ? 'filter-button-active'
                      : ''
                    : ''
                }`}
                onClick={() => handleFilterClick('week', '1')}
              >
                WEEK 1 <span>(NOV. 01–07)</span>
              </button>
              <button
                className={`filter-button ${
                  !firstClick
                    ? weeks.includes('2')
                      ? 'filter-button-active'
                      : ''
                    : ''
                }`}
                onClick={() => handleFilterClick('week', '2')}
              >
                WEEK 2 <span>(NOV. 08–14)</span>
              </button>
              <button
                className={`filter-button ${
                  !firstClick
                    ? weeks.includes('3')
                      ? 'filter-button-active'
                      : ''
                    : ''
                }`}
                onClick={() => handleFilterClick('week', '3')}
              >
                WEEK 3 <span>(NOV. 15–19)</span>
              </button>
            </div>
            <div className='event-filter-container'>
              <button
                className={`filter-button ${
                  category.includes('Performa Commission')
                    ? 'filter-button-active'
                    : ''
                }`}
                onClick={() =>
                  handleFilterClick('category', 'Performa Commission')
                }
              >
                {mobile ? 'COMMISSIONS' : 'PERFORMA COMMISSIONS'}
              </button>
              <button
                className={`filter-button ${
                  category.includes('Performa Institute Free Public Event')
                    ? 'filter-button-active'
                    : ''
                }`}
                onClick={() =>
                  handleFilterClick(
                    'category',
                    'Performa Institute Free Public Event'
                  )
                }
              >
                {mobile ? 'HUB EVENTS' : 'PERFORMA HUB EVENTS'}
              </button>
              <button
                className={`filter-button ${
                  category.includes('Finnish Pavilion')
                    ? 'filter-button-active'
                    : ''
                }`}
                onClick={() =>
                  handleFilterClick('category', 'Finnish Pavilion')
                }
              >
                {mobile ? 'FINNISH PAVILION' : 'FINNISH PAVILION'}
              </button>
              <button
                className={`filter-button ${
                  category.includes('Protest & Performance')
                    ? 'filter-button-active'
                    : ''
                }`}
                onClick={() =>
                  handleFilterClick('category', 'Protest & Performance')
                }
              >
                {mobile
                  ? 'PROTEST & PERFORMANCE'
                  : 'PROTEST & PERFORMANCE: A WAY OF LIFE'}
              </button>
              <button
                className={`filter-button ${
                  category.includes('Broadcast') ? 'filter-button-active' : ''
                }`}
                onClick={() => handleFilterClick('category', 'Broadcast')}
              >
                BROADCASTS
              </button>
            </div>
          </div>
          {weeks.includes('1') && (
            <div className='calendar-week-container'>
              <h2 className='week-heading'>Week 1: November 01-07</h2>
              <Calendar
                dates={[
                  '2023-11-01 EST',
                  '2023-11-02 EST',
                  '2023-11-03 EST',
                  '2023-11-04 EST',
                  '2023-11-05 EST',
                  '2023-11-06 EST',
                  '2023-11-07 EST',
                ]}
                performanceData={performanceData}
                handleCategoryFilter={handleCategoryFilter}
              ></Calendar>
            </div>
          )}
          {weeks.includes('2') && (
            <div className='calendar-week-container'>
              <h2 className='week-heading'>Week 2: November 08-14</h2>
              <Calendar
                dates={[
                  '2023-11-08 EST',
                  '2023-11-09 EST',
                  '2023-11-10 EST',
                  '2023-11-11 EST',
                  '2023-11-12 EST',
                  '2023-11-13 EST',
                  '2023-11-14 EST',
                ]}
                performanceData={performanceData}
                handleCategoryFilter={handleCategoryFilter}
              ></Calendar>
            </div>
          )}
          {weeks.includes('3') && (
            <div className='calendar-week-container'>
              <h2 className='week-heading'>Week 3: November 15-19</h2>
              <Calendar
                dates={[
                  '2023-11-15 EST',
                  '2023-11-16 EST',
                  '2023-11-17 EST',
                  '2023-11-18 EST',
                  '2023-11-19 EST',
                ]}
                performanceData={performanceData}
                handleCategoryFilter={handleCategoryFilter}
              ></Calendar>
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulPerformance(sort: { performanceDates: { startTime: ASC } }) {
      nodes {
        id
        slug
        tileImage {
          gatsbyImageData
          description
          title
        }
        title
        artists {
          name
        }
        category
        performanceHeadline {
          childMarkdownRemark {
            html
          }
        }
        locationText
        locationMapLink
        ticketPrice
        performanceDates {
          startTime
          endTime
          ticketUrl
        }
      }
    }
    contentfulHomePage {
      carouselImages {
        caption
        imageIsLight
        image {
          gatsbyImageData
          description
        }
      }
      theHubDescription {
        childMarkdownRemark {
          html
        }
      }
      theHubHours {
        childMarkdownRemark {
          html
        }
      }
      theHubLocations {
        childMarkdownRemark {
          html
        }
      }
      tickerText
    }
  }
`

export const Head = () => <Seo title='Home' />

export default IndexPage
