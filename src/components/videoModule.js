import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import { GatsbyImage } from 'gatsby-plugin-image'

const VideoModule = ({ content }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  return (
    <div
      key={content.videoModule}
      className={`module-video ${
        content.margin === 'In-text' ? 'max-width' : ''
      }`}
    >
      <div className='module-video-container'>
        <ReactPlayer
          url={content.videoLink}
          width={'100%'}
          height={'100%'}
          className='module-video-player'
          controls
          playing={isPlaying}
          onEnded={() => setIsPlaying(false)}
        ></ReactPlayer>
        {content.coverImage && (
          <div
            className={`module-video-cover
                  ${isPlaying ? 'hide-video-cover' : ''}`}
          >
            <GatsbyImage
              image={content.coverImage.gatsbyImageData}
              alt={content.coverImage.description}
              className='module-video-img'
            ></GatsbyImage>
            <button
              className='module-play-btn'
              onClick={() => setIsPlaying(true)}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 293.819 225.503'
              >
                <path
                  id='Path_71'
                  data-name='Path 71'
                  d='M9.776,17.011A3.417,3.417,0,0,0,7,20.427V239.082a3.417,3.417,0,0,0,3.416,3.416H297.4a3.417,3.417,0,0,0,3.417-3.416V20.427a3.417,3.417,0,0,0-3.416-3.416H10.417A3.417,3.417,0,0,0,9.776,17.011Zm4.057,6.833H293.985V235.666H13.833Zm94.914,44.414a3.417,3.417,0,0,0-2.669,3.417V187.835a3.417,3.417,0,0,0,4.911,2.989l116.161-58.08a3.417,3.417,0,0,0,0-6.086L110.99,68.578A3.417,3.417,0,0,0,108.748,68.258Zm4.164,8.862,105.164,52.635L112.912,182.283Z'
                  transform='translate(-7 -16.996)'
                  fill='#f8f8f8'
                />
              </svg>
            </button>
          </div>
        )}
      </div>
      {content.videoCaption && <figcaption>{content.videoCaption}</figcaption>}
    </div>
  )
}

export default VideoModule
