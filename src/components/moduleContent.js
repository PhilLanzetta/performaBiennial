import React from "react"
import ImageModule from "./imageModule"
import VideoModule from "./videoModule"

const ModuleContent = ({ moduleContent }) => {

  return (
    <div className="module-content-container">
      {moduleContent.map(item => {
        if (item.imageModule) {
          return (
            <ImageModule key={item.imageModule} content={item}></ImageModule>
          )
        } else if (item.videoModule) {
          return (
            <VideoModule key={item.videoModule} content={item}></VideoModule>
          )
        } else return null
      })}
    </div>
  )
}

export default ModuleContent
