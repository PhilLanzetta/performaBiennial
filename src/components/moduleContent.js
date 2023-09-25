import React, { useState } from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import ReactPlayer from "react-player"

const ModuleContent = ({ moduleContent }) => {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="module-content-container">
      {moduleContent.map(item => {
        if (item.imageModule) {
          return (
            <div key={item.imageModule} className="module-image-container">
              {item.images.length === 1 ? (
                <figure key={item.imageModule} className="single-col-image">
                  <GatsbyImage
                    image={item.images[0].image.gatsbyImageData}
                    alt={item.images[0].description}
                    className="image"
                  ></GatsbyImage>
                  <figcaption>{item.images[0].caption}</figcaption>
                </figure>
              ) : (
                item.images.map((image, index) => (
                  <figure key={index} className="two-col-image">
                    <GatsbyImage
                      image={image.image.gatsbyImageData}
                      alt={image.image.description}
                      className="image"
                    ></GatsbyImage>
                    <figcaption>{image.caption}</figcaption>
                  </figure>
                ))
              )}
            </div>
          )
        } else if (item.videoModule) {
          return (
            <div key={item.videoModule} className="module-video">
              <div className="module-video-container">
                <ReactPlayer
                  url={item.videoLink}
                  width={"100%"}
                  height={"100%"}
                  className="module-video-player"
                  controls
                  playing={isPlaying}
                  onEnded={() => setIsPlaying(false)}
                ></ReactPlayer>
                {item.coverImage && (
                  <div
                    className={`module-video-cover
                  ${isPlaying ? "hide-video-cover" : ""}`}
                  >
                    <GatsbyImage
                      image={item.coverImage.gatsbyImageData}
                      alt={item.coverImage.description}
                      className="module-video-img"
                    ></GatsbyImage>
                    <button
                      className="module-play-btn"
                      onClick={() => setIsPlaying(true)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 293.819 225.503"
                      >
                        <path
                          id="Path_71"
                          data-name="Path 71"
                          d="M9.776,17.011A3.417,3.417,0,0,0,7,20.427V239.082a3.417,3.417,0,0,0,3.416,3.416H297.4a3.417,3.417,0,0,0,3.417-3.416V20.427a3.417,3.417,0,0,0-3.416-3.416H10.417A3.417,3.417,0,0,0,9.776,17.011Zm4.057,6.833H293.985V235.666H13.833Zm94.914,44.414a3.417,3.417,0,0,0-2.669,3.417V187.835a3.417,3.417,0,0,0,4.911,2.989l116.161-58.08a3.417,3.417,0,0,0,0-6.086L110.99,68.578A3.417,3.417,0,0,0,108.748,68.258Zm4.164,8.862,105.164,52.635L112.912,182.283Z"
                          transform="translate(-7 -16.996)"
                          fill="#f8f8f8"
                        />
                      </svg>
                    </button>
                  </div>
                )}
              </div>
              {item.videoCaption && (
                <figcaption>{item.videoCaption}</figcaption>
              )}
            </div>
          )
        } else return null
      })}
    </div>
  )
}

export default ModuleContent
