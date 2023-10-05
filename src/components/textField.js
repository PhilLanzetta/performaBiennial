import React from 'react'
import { Link } from 'gatsby'

const TextField = ({ title, htmlText, category, headline }) => {
  return (
    <div>
      {headline ? <h2>{title}</h2> : <h3>{title}</h3>}
      {category === 'Performa Commission' && (
        <Link
          to='/#calendar'
          state={{ category: [category] }}
          className='primary-button tertiary-font'
        >
          {category}
        </Link>
      )}
      {category === 'Performa Institute Free Public Event' && (
        <Link
          to='/#calendar'
          state={{ category: [category] }}
          className='tertiary-button tertiary-font'
        >
          Performa Hub Event
        </Link>
      )}
      <div
        className='text-field-text'
        dangerouslySetInnerHTML={{ __html: htmlText }}
      ></div>
    </div>
  )
}

export default TextField
