import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import TextField from '../components/textField'
import { GatsbyImage } from 'gatsby-plugin-image'
import { FaMapMarkerAlt } from 'react-icons/fa'
import ModuleContent from '../components/moduleContent'
import Seo from '../components/seo'
import useWindowSize from '../utils/useWindowSize'
import { BsArrowRight } from 'react-icons/bs'
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

const Performance = ({ data }) => {
  const {
    artists,
    category,
    credits,
    performanceDates,
    performanceDescription,
    performers,
    production,
    specialThanks,
    supporterLogos,
    supporters,
    title,
    heroImage,
    performanceHeadline,
    ticketLink,
    ticketPrice,
    locationMapLink,
    locationText,
    press,
    moduleContent,
    performaTeam,
  } = data.contentfulPerformance
  const { width } = useWindowSize()
  const mobile = width < 701
  const dates = performanceDates.map((performance) => {
    return {
      startDate: new Date(performance.startTime).toLocaleString('en-CA', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      }),
      startTime: new Date(performance.startTime).toLocaleString('en-CA', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      }),
      endTime: new Date(performance.endTime).toLocaleString('en-CA', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      }),
    }
  })
  return (
    <Layout>
      <div className='performance-hero-container'>
        <GatsbyImage
          image={heroImage.image.gatsbyImageData}
          alt={heroImage.image.description}
          className='image'
        ></GatsbyImage>
        <div className='performance-hero-text'>
          <div className='hero-artist-container'>
            {artists.map((artist) => (
              <h2 key={artist.id} className='hero-artist'>
                {artist.name}
              </h2>
            ))}
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: performanceHeadline.childMarkdownRemark.html,
            }}
          ></div>
          <div>{heroImage.caption}</div>
        </div>
      </div>
      <div className='page-container'>
        <div className='flex-container'>
          <div className='left-container'>
            <div className='performance-schedule'>
              <h3>Schedule</h3>
              <div className='performance-ticket-grid'>
                <div className='performance-ticket-header'>
                  <div>Time & Date</div>
                  <div>
                    Tickets {ticketPrice} <BsArrowRight></BsArrowRight>
                  </div>
                </div>
                {performanceDates?.map((date) => (
                  <a
                    key={date.id}
                    href={date.ticketUrl}
                    target='_blank'
                    rel='noreferrer'
                    className='performance-date-row'
                  >
                    <p>{date.title.split(':')[0]}</p>
                    <p>{date.title.split(': ')[1]}</p>
                  </a>
                ))}
              </div>
              <div className='performance-ticket-btn-container'>
                <a
                  href={ticketLink}
                  target='_blank'
                  rel='noreferrer'
                  className='secondary-button rounded mobile-full-width'
                >
                  {ticketPrice !== 'Free' ? 'Buy Tickets' : 'RSVP'}
                </a>
                <AddToCalendarButton
                  name={title}
                  location={locationText}
                  options={['Google', 'Apple', 'iCal', 'Outlook.com']}
                  listStyle='overlay'
                  buttonStyle='round'
                  timeZone='EST'
                  dates={dates}
                  hideCheckmark
                  hideBranding
                  inline
                  styleLight={calendarStyle}
                ></AddToCalendarButton>
              </div>
            </div>
            <div className='performance-location'>
              <h3>Location</h3>
              <div>{locationText}</div>
              <a
                href={locationMapLink}
                target='_blank'
                rel='noreferrer'
                className='performance-location-link'
              >
                <FaMapMarkerAlt></FaMapMarkerAlt>{' '}
                <span>View in Google Maps</span>
              </a>
            </div>
            {!mobile && press && (
              <div className='press-container'>
                <h3>Press</h3>
                <p className='press-quote lofty'>{`"${press[0].callOutQuote}"`}</p>
                <p>{`-${press[0].publication}`}</p>
                <div className='press-pdf-container'>
                  <p>PDF Download:</p>
                  {press.map((pressItem) => (
                    <a
                      href={`https:${pressItem.pdfFile.file.url}`}
                      target='_blank'
                      rel='noreferrer'
                      download
                    >
                      {pressItem.publication}
                    </a>
                  ))}
                </div>
              </div>
            )}
            {!mobile && (
              <div>
                {artists.map((artist) => (
                  <GatsbyImage
                    key={artist.id}
                    image={artist.artistImage?.image.gatsbyImageData}
                    alt={artist.artistImage?.description}
                  ></GatsbyImage>
                ))}
              </div>
            )}
          </div>
          <div className='right-container'>
            <TextField
              title={title}
              htmlText={performanceDescription.childMarkdownRemark.html}
              category={category}
              headline
            ></TextField>
            {mobile && press && (
              <div className='press-container'>
                <h3>Press</h3>
                <p className='press-quote lofty'>{`"${press[0].callOutQuote}"`}</p>
                <p>{`-${press[0].publication}`}</p>
                <div className='press-pdf-container'>
                  <p>PDF Download:</p>
                  {press.map((pressItem) => (
                    <a
                      href={`https:${pressItem.pdfFile.file.url}`}
                      target='_blank'
                      rel='noreferrer'
                      download
                    >
                      {pressItem.publication}
                    </a>
                  ))}
                </div>
              </div>
            )}
            {artists.map((artist) => (
              <div key={artist.id}>
                {mobile && artist.artistImage && (
                  <GatsbyImage
                    image={artist.artistImage.image.gatsbyImageData}
                    alt={artist.artistImage.description}
                  ></GatsbyImage>
                )}
                <TextField
                  title={`About ${artist.name}`}
                  htmlText={artist.biography.childMarkdownRemark.html}
                  headline
                ></TextField>
              </div>
            ))}
            {credits && (
              <TextField
                title='Credits'
                htmlText={credits.childMarkdownRemark.html}
              ></TextField>
            )}
            {supporters && (
              <TextField
                title='Supporters'
                htmlText={supporters.childMarkdownRemark.html}
              ></TextField>
            )}
            {supporterLogos && (
              <div className='supporter-logo-container'>
                {supporterLogos.map((logo) => (
                  <GatsbyImage
                    key={logo.id}
                    image={logo.gatsbyImageData}
                    alt={logo.description}
                    className='supporter-logo'
                  ></GatsbyImage>
                ))}
              </div>
            )}
            {performers && (
              <TextField
                title='Performers'
                htmlText={performers.childMarkdownRemark.html}
              ></TextField>
            )}
            {production && (
              <TextField
                title='Production'
                htmlText={production.childMarkdownRemark.html}
              ></TextField>
            )}
            {specialThanks && (
              <TextField
                title='Special Thanks'
                htmlText={specialThanks.childMarkdownRemark.html}
              ></TextField>
            )}
            {performaTeam && (
              <div>
                <h3>Performa Team</h3>
                {performaTeam.map((member, index) => (
                  <p key={index}>
                    {member.position}: {member.name}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
        {moduleContent && (
          <ModuleContent moduleContent={moduleContent}></ModuleContent>
        )}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query getSinglePerformance($slug: String) {
    contentfulPerformance(slug: { eq: $slug }) {
      heroImage {
        caption
        image {
          description
          gatsbyImageData
        }
      }
      artists {
        id
        artistImage {
          caption
          image {
            gatsbyImageData
            description
          }
        }
        biography {
          childMarkdownRemark {
            html
          }
        }
        name
      }
      category
      credits {
        childMarkdownRemark {
          html
        }
      }
      performanceDates {
        title
        endTime
        id
        startTime
        ticketUrl
      }
      performanceHeadline {
        childMarkdownRemark {
          html
        }
      }
      performanceDescription {
        childMarkdownRemark {
          html
        }
      }
      performers {
        childMarkdownRemark {
          html
        }
      }
      production {
        childMarkdownRemark {
          html
        }
      }
      specialThanks {
        childMarkdownRemark {
          html
        }
      }
      supporterLogos {
        id
        gatsbyImageData
        description
      }
      supporters {
        childMarkdownRemark {
          html
        }
      }
      title
      ticketLink
      ticketPrice
      locationMapLink
      locationText
      press {
        callOutQuote
        publication
        pdfFile {
          file {
            url
          }
        }
      }
      performaTeam {
        name
        position
      }
      moduleContent {
        ... on ContentfulImageModule {
          imageModule: id
          margin
          images {
            caption
            image {
              description
              gatsbyImageData
            }
          }
        }
        ... on ContentfulVideoModule {
          videoModule: id
          coverImage {
            description
            gatsbyImageData
          }
          margin
          videoCaption
          videoLink
        }
      }
    }
  }
`
export const Head = ({ data }) => (
  <Seo title={data.contentfulPerformance.title} />
)

export default Performance
