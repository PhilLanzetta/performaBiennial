import React from 'react'
import Layout from '../components/layout'
import { graphql, Link } from 'gatsby'
import ImageModule from '../components/imageModule'
import VideoModule from '../components/videoModule'
import HeadlineTextModule from '../components/headlineTextModule'

const TheHub = ({ data }) => {
  const content = data.contentfulFlexPage.content
  return (
    <Layout>
      <h1 className='page-heading hub-header'>The Hub</h1>
      <div className='flex-page-container'>
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
        <div className='flex-container center'>
          <Link to='/#calendar' className='secondary-button center rounded'>
            Full Calendar
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    contentfulFlexPage(slug: { eq: "the-hub" }) {
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
          margin
          videoLink
          videoCaption
          coverImage {
            description
            gatsbyImageData
          }
        }
      }
    }
  }
`

export default TheHub