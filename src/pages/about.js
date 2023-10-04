import React, { useEffect, useState } from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import ImageModule from '../components/imageModule'
import VideoModule from '../components/videoModule'
import HeadlineTextModule from '../components/headlineTextModule'
import TeamMember from '../components/teamMember'
import ModuleSlider from '../components/moduleSlider'

const About = ({ data }) => {
  const content = data.contentfulFlexPage.content
  const staff = data.contentfulAboutPageTeamListing.teamListing
  const initialScale = 4.25
  const initialTransform = 52
  const [transform, setTransform] = useState({ scaleY: 4.25, translateY: 52 })

  const handleScroll = () => {
    if (window.scrollY < 185) {
      setTransform({
        scaleY: initialScale - window.scrollY * 0.008,
        translateY: initialTransform + window.scrollY * 0.06,
      })
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Layout>
      <h1
        className='page-heading about-header'
        style={{
          transform: `scaleY(${transform.scaleY}) translateY(${transform.translateY}%)`,
        }}
      >
        Performa Biennial
      </h1>
      <div className='flex-page-container extra-top-margin'>
        {content.map((item) => {
          if (item.imageModule) {
            if (item.isACarousel) {
              return (
                <ModuleSlider
                  key={item.imageModule}
                  content={item}
                ></ModuleSlider>
              )
            } else {
              return (
                <ImageModule
                  key={item.imageModule}
                  content={item}
                ></ImageModule>
              )
            }
          } else if (item.videoModule) {
            return (
              <VideoModule key={item.videoModule} content={item}></VideoModule>
            )
          } else if (item.headlineText) {
            return (
              <HeadlineTextModule
                key={item.headlineText}
                content={item}
              ></HeadlineTextModule>
            )
          } else return null
        })}
        <div className='max-width' id='team'>
          <h2>Performa Team</h2>
          <div className='member-grid'>
            {staff.map((teamMember) => (
              <TeamMember key={teamMember.id} member={teamMember}></TeamMember>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    contentfulFlexPage(slug: { eq: "about" }) {
      content {
        ... on ContentfulHeadlineWithText {
          headlineText: id
          columns
          headline
          text {
            childMarkdownRemark {
              html
            }
          }
        }
        ... on ContentfulImageModule {
          imageModule: id
          isACarousel
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
    contentfulAboutPageTeamListing {
      teamListing {
        id
        bio {
          childMarkdownRemark {
            html
          }
        }
        email
        position
        name
      }
    }
  }
`

export default About
