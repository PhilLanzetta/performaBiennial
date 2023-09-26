import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import ImageModule from '../components/imageModule'
import VideoModule from '../components/videoModule'
import HeadlineTextModule from '../components/headlineTextModule'
import TeamMember from '../components/teamMember'

const About = ({ data }) => {
  const content = data.contentfulFlexPage.content
  const staff = data.contentfulAboutPageTeamListing.teamListing
  return (
    <Layout>
      <h1 className='page-heading about-header'>Performa Biennial</h1>
      <div className='flex-page-container extra-top-margin'>
        {content.map((item) => {
          if (item.imageModule) {
            return (
              <ImageModule key={item.imageModule} content={item}></ImageModule>
            )
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
        <div className='max-width'>
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
          videoLink
          margin
          videoCaption
          coverImage {
            description
            gatsbyImageData
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
