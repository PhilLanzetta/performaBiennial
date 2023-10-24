import React, { useState, useEffect } from 'react'
import Layout from '../components/layout'
import { graphql, Link } from 'gatsby'
import ImageModule from '../components/imageModule'
import VideoModule from '../components/videoModule'
import HeadlineTextModule from '../components/headlineTextModule'
import ModuleSlider from '../components/moduleSlider'
import Seo from '../components/seo'

const TheHub = ({ data }) => {
  const content = data.contentfulFlexPage.content
  const initialScale = 1.8
  const initialTransform = 30
  const [transform, setTransform] = useState({ scaleY: 1.8, translateY: 30 })

  const handleScroll = () => {
    if (window.scrollY < 185) {
      setTransform({
        scaleY: initialScale - window.scrollY * 0.005,
        translateY: initialTransform,
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
        className='page-heading hub-header'
        style={{
          transform: `scaleY(${transform.scaleY}) translateY(${transform.translateY}%)`,
        }}
      >
        The Hub
      </h1>
      <div className='flex-page-container'>
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
        <div className='flex-container center'>
          <Link to='/#calendar' className='secondary-button center'>
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
          isACarousel
          isALogos
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
export const Head = () => <Seo title='The Hub' />

export default TheHub
