import React from 'react'

const HeadlineTextModule = ({ content }) => {
  return (
    <div>
      <h2>{content.headline}</h2>
      <div
        dangerouslySetInnerHTML={{
          __html: content.text.childMarkdownRemark.html,
        }}
      ></div>
    </div>
  )
}

export default HeadlineTextModule
