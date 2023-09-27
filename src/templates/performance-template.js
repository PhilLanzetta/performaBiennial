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
                  buttonStyle='text'
                  timeZone='EST'
                  dates={dates}
                  hideCheckmark
                  hideBranding
                  inline
                  styleLight="--btn-background: #fff; --btn-text: #000; --font: 'Helvetica Neue', sans-serif; --btn-underline: none --btn-shadow: none; --btn-border: none;"
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
