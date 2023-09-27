import React, { useEffect, useState } from 'react'
import Layout from '../components/layout'
import { graphql, Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

const Artists = ({ data }) => {
  const artists = data.allContentfulArtist.nodes
  const initialScale = 2.4
  const initialTransform = 40
  const [transform, setTransform] = useState({ scaleY: 2.4, translateY: 40 })

  const handleScroll = () => {
    if (window.scrollY < 185) {
      setTransform({
        scaleY: initialScale - window.scrollY * 0.006,
        translateY: initialTransform + window.scrollY * 0.05,
      })
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Layout>
      <h1
        className='page-heading artists-header'
        style={{
          transform: `scaleY(${transform.scaleY}) translateY(${transform.translateY}%)`,
        }}
      >
        2023 Artists
      </h1>
      <div className='artists-container'>
        {artists.map((artist) => (
          <Link
            key={artist.id}
            to={`/${
              artist.performance?.length ? artist.performance[0].slug : ''
            }`}
            className='artist-item'
          >
            <GatsbyImage
              image={artist.artistImage?.image.gatsbyImageData}
              alt={artist.artistImage?.image.description}
              className='artist-item-image'
            ></GatsbyImage>
            <p className='artist-item-name'>{artist.name}</p>
            {artist.performance && (
              <p className='artist-item-title'>
                {artist.performance[0]?.title}
              </p>
            )}
          </Link>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulArtist(sort: { name: ASC }) {
      nodes {
        id
        artistImage {
          image {
            description
            gatsbyImageData
          }
        }
        name
        performance {
          title
          slug
        }
      }
    }
  }
`

export default Artists
