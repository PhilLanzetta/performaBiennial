import React, { useState, useEffect } from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import ImageModule from '../components/imageModule'
import VideoModule from '../components/videoModule'
import HeadlineTextModule from '../components/headlineTextModule'
import ModuleSlider from '../components/moduleSlider'
import Seo from '../components/seo'

const Pavilions = ({ data, location }) => {
  const content = data.contentfulFlexPage.content
  const initialScale = 2
  const initialTransform = 35
  const [transform, setTransform] = useState({ scaleY: 2, translateY: 35 })

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
    <Layout location={location}>
      <h1
        className='page-heading pavilion-header'
        style={{
          transform: `scaleY(${transform.scaleY}) translateY(${transform.translateY}%)`,
        }}
      >
        Pavilions
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
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    contentfulFlexPage(slug: { eq: "pavilions" }) {
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

export const Head = () => <Seo title='Pavilions' />

export default Pavilions
