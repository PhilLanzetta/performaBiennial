import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { graphql } from 'gatsby'
import ReactPlayer from 'react-player'

const Broadcast = ({ location, data }) => {
  const { title, isLive, videoLink } = data.contentfulBroadcast
  return (
    <Layout location={location}>
      <div>
        <div className='broadcast-header'>
          <div className='broadcast-label'>BROADCAST:</div>
          <div className='broadcast-title'>{title}</div>
        </div>
        {isLive ? (
          <div className='broadcast-video-player-wrapper'>
            <ReactPlayer
              url={videoLink}
              width={'100%'}
              height={'100%'}
              controls
              className='broadcast-video-player'
            ></ReactPlayer>
          </div>
        ) : (
          <div className='video-static'>
            <img
              src='https://i.giphy.com/media/XuBNdP9Pb7W9i/giphy.webp'
              alt='static'
            ></img>
          </div>
        )}
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title='Broadcast' />

export const query = graphql`
  query {
    contentfulBroadcast {
      id
      title
      videoLink
      isLive
    }
  }
`

export default Broadcast
