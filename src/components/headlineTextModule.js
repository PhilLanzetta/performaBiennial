import React from 'react'
import useWindowSize from '../utils/useWindowSize'

const HeadlineTextModule = ({ content }) => {
  const { width } = useWindowSize()
  const divStyles = {
    columnCount: width > 700 ? content.columns : '1',
    columnGap: 'var(--spacing-md)',
  }
  return (
    <div className='headline-text-container'>
      {content.headline && <h2>{content.headline}</h2>}
      <div
        dangerouslySetInnerHTML={{
          __html: content.text.childMarkdownRemark.html,
        }}
        style={divStyles}
        className='lofty'
      ></div>
    </div>
  )
}

export default HeadlineTextModule
