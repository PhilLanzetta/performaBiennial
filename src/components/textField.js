import React from "react"
import { Link } from "gatsby"

const TextField = ({ title, htmlText, category, headline }) => {
  return (
    <div>
      {headline ? <h2>{title}</h2> : <h3>{title}</h3>}
      {category && (
        <Link to="/" className="primary-button">
          {category}
        </Link>
      )}
      <div
        className="text-field-text"
        dangerouslySetInnerHTML={{ __html: htmlText }}
      ></div>
    </div>
  )
}

export default TextField
