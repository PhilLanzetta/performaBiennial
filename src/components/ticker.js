import React from "react"
import Marquee from "react-fast-marquee"

const Ticker = ({ text, big }) => {
  return (
    <Marquee className="word-marquee" gradient={false} speed={60}>
      {[...Array(10)].map((e, i) => (
        <div className={`marquee-item ${big ? "large-text" : ""}`} key={i}>
          {text}
        </div>
      ))}
    </Marquee>
  )
}

export default Ticker
