import React, { useState, useEffect } from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import ImageModule from '../components/imageModule'
import VideoModule from '../components/videoModule'
import HeadlineTextModule from '../components/headlineTextModule'

const FAQ = ({ data }) => {
  const content = data.contentfulFlexPage.content
  const initialScale = 5.35
  const initialTransform = 53
  const [transform, setTransform] = useState({ scaleY: 5.35, translateY: 53 })

  const handleScroll = () => {
    if (window.scrollY < 185) {
      setTransform({
        scaleY: initialScale - window.scrollY * 0.014,
        translateY: initialTransform + window.scrollY * 0.08,
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
        className='page-heading faq-header'
        style={{
          transform: `scaleY(${transform.scaleY}) translateY(${transform.translateY}%)`,
        }}
      >
        Frequently Asked Questions
      </h1>
      <div className='flex-page-container extralg-top-margin'>
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
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    contentfulFlexPage(slug: { eq: "faq" }) {
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

export default FAQ
