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

const Performance = ({ data, location }) => {
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
    ticketPrice,
    locationMapLink,
    locationText,
    press,
    moduleContent,
    performaTeam,
  } = data.contentfulPerformance
  const { width } = useWindowSize()
  const mobile = width < 701

  return (
    <Layout location={location}>
      <div className='performance-hero-container'>
        <GatsbyImage
          image={heroImage.image.gatsbyImageData}
          alt={heroImage.image.description}
          className='image'
        ></GatsbyImage>
        <div
          className={`performance-hero-text ${
            heroImage.imageIsLight ? 'dark-text' : 'light-text'
          }`}
        >
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
                  <div className='left-column'>Date & Time</div>
                  <div className='right-column'>{ticketPrice}</div>
                </div>
                {performanceDates?.map((date) => (
                  <>
                    {date.ticketUrl ? (
                      <a
                        key={date.id}
                        href={date.ticketUrl}
                        target='_blank'
                        rel='noreferrer'
                        className='performance-date-row'
                      >
                        <p className='left-column'>{date.title}</p>
                        <p className='right-column'>
                          {ticketPrice?.toLowerCase().includes('free')
                            ? 'RSVP'
                            : 'Buy Tickets'}
                          <BsArrowRight></BsArrowRight>
                        </p>
                      </a>
                    ) : (
                      <div className='performance-date-row'>
                        <p className='full-column'>{date.title}</p>
                      </div>
                    )}
                  </>
                ))}
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
                  <div key={artist.id} className='artist-image-container'>
                    <GatsbyImage
                      image={artist.artistImage?.image.gatsbyImageData}
                      alt={artist.artistImage?.description}
                    ></GatsbyImage>
                    <figcaption>{artist.artistImage?.caption}</figcaption>
                  </div>
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
                  <div className='artist-image-container'>
                    <GatsbyImage
                      image={artist.artistImage.image.gatsbyImageData}
                      alt={artist.artistImage.description}
                    ></GatsbyImage>
                    <figcaption>{artist.artistImage.caption}</figcaption>
                  </div>
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
        imageIsLight
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
      }
    }
  }
`
export const Head = ({ data }) => (
  <Seo title={data.contentfulPerformance.title} />
)

export default Performance
