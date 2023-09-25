import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import ImageModule from '../components/imageModule'
import VideoModule from '../components/videoModule'
import HeadlineTextModule from '../components/headlineTextModule'

const Pavilions = ({ data }) => {
  const content = data.contentfulFlexPage.content
  return (
    <Layout>
      <h1 className='page-heading pavilion-header'>Pavilions</h1>
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
    </Layout>
  )
}

export const query = graphql`
  query {
    contentfulFlexPage(slug: { eq: "pavilions" }) {
      content {
        ... on ContentfulHeadlineWithText {
          id
          columns
          headline
          text {
            childMarkdownRemark {
              html
            }
          }
        }
        ... on ContentfulImageModule {
          id
          images {
            caption
            image {
              description
              gatsbyImageData
            }
          }
        }
        ... on ContentfulVideoModule {
          id
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

export default Pavilions
