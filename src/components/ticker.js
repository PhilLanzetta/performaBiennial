import React from 'react'
import Marquee from 'react-fast-marquee'

const Ticker = ({ textArray, text, inverse, header }) => {
  let tickerClassName
  if (inverse) {
    tickerClassName = 'word-marquee inverse'
  } else if (header) {
    tickerClassName = 'word-marquee header'
  } else {
    tickerClassName = 'word-marquee'
  }

  return (
    <Marquee className={tickerClassName} gradient={false} speed={60}>
      {text
        ? [...Array(10)].map((e, i) => (
            <div className={`marquee-item ${inverse ? 'inverse' : ''}`} key={i}>
              {text}
            </div>
          ))
        : textArray.map((e, i) => (
            <div className={`marquee-item ${inverse ? 'inverse' : ''}`} key={i}>
              {e}
            </div>
          ))}
    </Marquee>
  )
}

export default Ticker
