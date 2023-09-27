import React, { useState, useEffect } from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import ImageModule from '../components/imageModule'
import VideoModule from '../components/videoModule'
import HeadlineTextModule from '../components/headlineTextModule'

const Supporters = () => {
  const initialScale = 2.1
  const initialTransform = 35
  const [transform, setTransform] = useState({ scaleY: 2.1, translateY: 35 })

  const handleScroll = () => {
    if (window.scrollY < 185) {
      setTransform({
        scaleY: initialScale - window.scrollY * 0.006,
        translateY: initialTransform + window.scrollY * 0.02,
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
        className='page-heading supporter-header'
        style={{
          transform: `scaleY(${transform.scaleY}) translateY(${transform.translateY}%)`,
        }}
      >
        Supporters
      </h1>
    </Layout>
  )
}

export default Supporters
